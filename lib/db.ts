import fs from "fs";
import path from "path";
import { put, get, list } from "@vercel/blob";

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

// In-memory cache
const cache: Record<string, { data: unknown; ts: number }> = {};
const CACHE_TTL = 3000;

/* ─── Read from Vercel Blob (private store) ─── */
async function readBlobJson<T>(key: string): Promise<T[]> {
  const cached = cache[key];
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return cached.data as T[];
  }

  if (IS_VERCEL && HAS_BLOB) {
    try {
      const blobPath = `data/${key}`;
      const result = await list({ prefix: blobPath, limit: 1 });
      if (result.blobs.length > 0) {
        // Use get() with private access for authenticated reads
        const getResult = await get(result.blobs[0].url, { access: "private" });
        if (getResult && getResult.statusCode === 200) {
          const text = await new Response(getResult.stream).text();
          const data = JSON.parse(text) as T[];
          cache[key] = { data, ts: Date.now() };
          return data;
        }
      }
    } catch (err) {
      console.error(`[DB] Blob read error (${key}):`, err);
    }
  }

  // Fallback: bundled seed data
  try {
    const seedPath = path.join(SEED_DIR, key);
    if (fs.existsSync(seedPath)) {
      const raw = fs.readFileSync(seedPath, "utf-8");
      const data = JSON.parse(raw) as T[];
      cache[key] = { data, ts: Date.now() };
      return data;
    }
  } catch (err) {
    console.error(`[DB] Seed read error (${key}):`, err);
  }

  return [];
}

/* ─── Write to Vercel Blob (private store) ─── */
async function writeBlobJson<T>(key: string, data: T[]): Promise<void> {
  cache[key] = { data, ts: Date.now() };

  if (IS_VERCEL && HAS_BLOB) {
    try {
      const blobPath = `data/${key}`;
      const json = JSON.stringify(data, null, 2);
      await put(blobPath, json, {
        access: "private",
        contentType: "application/json",
        addRandomSuffix: false,
        allowOverwrite: true,
      });
      console.log(`[DB] Saved ${key} to blob (${data.length} items)`);
    } catch (err) {
      console.error(`[DB] Blob write error (${key}):`, err);
    }
  }

  // Also write locally for dev
  if (!IS_VERCEL) {
    try {
      if (!fs.existsSync(SEED_DIR)) fs.mkdirSync(SEED_DIR, { recursive: true });
      fs.writeFileSync(path.join(SEED_DIR, key), JSON.stringify(data, null, 2));
    } catch { /* ignore */ }
  }
}

/* ─── Projects ─── */
export async function getProjectsAsync(): Promise<BidProject[]> {
  return readBlobJson<BidProject>("projects.json");
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

/* ─── Construction Docs ─── */
export async function getConstructionDocsAsync(): Promise<ConstructionDoc[]> {
  return readBlobJson<ConstructionDoc>("construction-docs.json");
}

export async function saveConstructionDocsAsync(docs: ConstructionDoc[]): Promise<void> {
  await writeBlobJson("construction-docs.json", docs);
}

export async function addConstructionDocAsync(doc: ConstructionDoc): Promise<void> {
  const docs = await getConstructionDocsAsync();
  docs.push(doc);
  await saveConstructionDocsAsync(docs);
}

/* ─── Sync helpers ─── */
export function getProjects(): BidProject[] {
  const cached = cache["projects.json"];
  if (cached) return cached.data as BidProject[];
  try {
    const f = path.join(SEED_DIR, "projects.json");
    if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, "utf-8"));
  } catch { /* empty */ }
  return [];
}

export function getProjectById(id: string): BidProject | undefined {
  return getProjects().find(p => p.id === id);
}

export function getConstructionDocs(): ConstructionDoc[] {
  const cached = cache["construction-docs.json"];
  if (cached) return cached.data as ConstructionDoc[];
  try {
    const f = path.join(SEED_DIR, "construction-docs.json");
    if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, "utf-8"));
  } catch { /* empty */ }
  return [];
}

export function getUsers(): User[] {
  try {
    const f = path.join(SEED_DIR, "users.json");
    if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, "utf-8"));
  } catch { /* empty */ }
  return [];
}

export function getUserByEmail(email: string): User | undefined {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}
