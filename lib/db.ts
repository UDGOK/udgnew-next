import fs from "fs";
import path from "path";
import { put, head, list } from "@vercel/blob";

/* ─── Types ─── */
export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  company: string;
  phone: string;
  trade: string;
  licenseNumber: string;
  state: string;
  role: "bidder" | "admin";
  createdAt: string;
}

export interface ProjectDoc {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: string;
}

export interface BidProject {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  scope: string;
  budgetRange: string;
  deadline: string;
  status: "active" | "upcoming" | "closed";
  documents: ProjectDoc[];
  createdAt: string;
}

export interface ConstructionDoc {
  id: string;
  name: string;
  type: string;
  category: string;
  url: string;
  uploadedBy: string;
  uploadedByName: string;
  uploadedByCompany: string;
  projectId?: string;
  notes?: string;
  uploadedAt: string;
}

/* ─── Admin check ─── */
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "").split(",").map(e => e.trim().toLowerCase());

export function isAdmin(email: string): boolean {
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

/* ─── Blob-based persistent storage ─── */
const IS_VERCEL = !!process.env.VERCEL;
const HAS_BLOB = !!process.env.BLOB_READ_WRITE_TOKEN;
const SEED_DIR = path.join(process.cwd(), "data");
const LOCAL_DATA_DIR = SEED_DIR;

// In-memory cache with timestamps (avoids reading blob on every request within same instance)
const cache: Record<string, { data: unknown; ts: number }> = {};
const CACHE_TTL = 5000; // 5 seconds — keeps data fresh across instances

/* ─── Generic blob read/write ─── */
async function readBlobJson<T>(key: string, fallback: T[]): Promise<T[]> {
  // Check in-memory cache first
  const cached = cache[key];
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return cached.data as T[];
  }

  if (IS_VERCEL && HAS_BLOB) {
    try {
      // Check if blob exists
      const blobKey = `data/${key}`;
      const blobs = await list({ prefix: blobKey, limit: 1 });
      if (blobs.blobs.length > 0) {
        const res = await fetch(blobs.blobs[0].url);
        const data = await res.json() as T[];
        cache[key] = { data, ts: Date.now() };
        return data;
      }
    } catch (err) {
      console.error(`Blob read error for ${key}:`, err);
    }
  }

  // Fallback to local file
  const localPath = path.join(LOCAL_DATA_DIR, key);
  if (fs.existsSync(localPath)) {
    const data = JSON.parse(fs.readFileSync(localPath, "utf-8")) as T[];
    cache[key] = { data, ts: Date.now() };
    return data;
  }

  return fallback;
}

async function writeBlobJson<T>(key: string, data: T[]): Promise<void> {
  // Update cache immediately
  cache[key] = { data, ts: Date.now() };

  if (IS_VERCEL && HAS_BLOB) {
    try {
      const blobKey = `data/${key}`;
      await put(blobKey, JSON.stringify(data, null, 2), {
        access: "public",
        contentType: "application/json",
        addRandomSuffix: false,
      });
    } catch (err) {
      console.error(`Blob write error for ${key}:`, err);
    }
  }

  // Also write locally (for local dev or same-instance reads)
  try {
    const localPath = path.join(LOCAL_DATA_DIR, key);
    if (!fs.existsSync(LOCAL_DATA_DIR)) fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
    fs.writeFileSync(localPath, JSON.stringify(data, null, 2));
  } catch {
    // /tmp write may fail in edge runtime, ignore
  }
}

/* ─── Projects (async) ─── */
export async function getProjectsAsync(): Promise<BidProject[]> {
  return readBlobJson<BidProject>("projects.json", []);
}

export async function saveProjectsAsync(projects: BidProject[]): Promise<void> {
  await writeBlobJson("projects.json", projects);
}

export async function addProjectAsync(project: BidProject): Promise<void> {
  const projects = await getProjectsAsync();
  projects.push(project);
  await saveProjectsAsync(projects);
}

export async function getProjectByIdAsync(id: string): Promise<BidProject | undefined> {
  const projects = await getProjectsAsync();
  return projects.find(p => p.id === id);
}

export async function updateProjectAsync(id: string, updates: Partial<BidProject>) {
  const projects = await getProjectsAsync();
  const idx = projects.findIndex(p => p.id === id);
  if (idx !== -1) {
    projects[idx] = { ...projects[idx], ...updates, id };
    await saveProjectsAsync(projects);
    return projects[idx];
  }
  return null;
}

export async function deleteProjectAsync(id: string): Promise<void> {
  const projects = await getProjectsAsync();
  await saveProjectsAsync(projects.filter(p => p.id !== id));
}

export async function addDocToProjectAsync(projectId: string, doc: ProjectDoc): Promise<void> {
  const projects = await getProjectsAsync();
  const project = projects.find(p => p.id === projectId);
  if (project) {
    project.documents.push(doc);
    await saveProjectsAsync(projects);
  }
}

/* ─── Construction Documents (async) ─── */
export async function getConstructionDocsAsync(): Promise<ConstructionDoc[]> {
  return readBlobJson<ConstructionDoc>("construction-docs.json", []);
}

export async function saveConstructionDocsAsync(docs: ConstructionDoc[]): Promise<void> {
  await writeBlobJson("construction-docs.json", docs);
}

export async function addConstructionDocAsync(doc: ConstructionDoc): Promise<void> {
  const docs = await getConstructionDocsAsync();
  docs.push(doc);
  await saveConstructionDocsAsync(docs);
}

/* ─── Sync wrappers (for backwards compat in non-critical paths) ─── */
const TMP_DATA_DIR = IS_VERCEL ? "/tmp/data" : SEED_DIR;

function ensureDir() {
  if (!fs.existsSync(TMP_DATA_DIR)) fs.mkdirSync(TMP_DATA_DIR, { recursive: true });
  if (IS_VERCEL) {
    for (const file of ["users.json", "projects.json", "construction-docs.json"]) {
      const dest = path.join(TMP_DATA_DIR, file);
      if (!fs.existsSync(dest)) {
        const seed = path.join(SEED_DIR, file);
        if (fs.existsSync(seed)) fs.copyFileSync(seed, dest);
        else fs.writeFileSync(dest, "[]");
      }
    }
  }
}

export function getUsers(): User[] {
  ensureDir();
  const f = path.join(TMP_DATA_DIR, "users.json");
  if (!fs.existsSync(f)) { fs.writeFileSync(f, "[]"); return []; }
  return JSON.parse(fs.readFileSync(f, "utf-8"));
}

export function saveUsers(users: User[]) {
  ensureDir();
  fs.writeFileSync(path.join(TMP_DATA_DIR, "users.json"), JSON.stringify(users, null, 2));
}

export function getUserByEmail(email: string): User | undefined {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function addUser(user: User) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}

// Sync fallbacks (kept for any remaining sync callers)
export function getProjects(): BidProject[] {
  ensureDir();
  const f = path.join(TMP_DATA_DIR, "projects.json");
  if (!fs.existsSync(f)) { fs.writeFileSync(f, "[]"); return []; }
  return JSON.parse(fs.readFileSync(f, "utf-8"));
}

export function getProjectById(id: string): BidProject | undefined {
  return getProjects().find(p => p.id === id);
}

export function getConstructionDocs(): ConstructionDoc[] {
  ensureDir();
  const f = path.join(TMP_DATA_DIR, "construction-docs.json");
  if (!fs.existsSync(f)) { fs.writeFileSync(f, "[]"); return []; }
  return JSON.parse(fs.readFileSync(f, "utf-8"));
}
