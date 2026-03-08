import fs from "fs";
import path from "path";

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
  type: string;      // "pdf" | "jpeg" | "dwg" | etc
  url: string;        // relative path to public folder
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

/* ─── Paths (Vercel uses /tmp for writable storage) ─── */
const IS_VERCEL = !!process.env.VERCEL;
const SEED_DIR = path.join(process.cwd(), "data");
const DATA_DIR = IS_VERCEL ? "/tmp/data" : SEED_DIR;
const USERS_FILE = path.join(DATA_DIR, "users.json");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

  // On Vercel, copy seed files from bundled data/ → /tmp/data/ on first access
  if (IS_VERCEL) {
    for (const file of ["users.json", "projects.json", "construction-docs.json"]) {
      const dest = path.join(DATA_DIR, file);
      if (!fs.existsSync(dest)) {
        const seed = path.join(SEED_DIR, file);
        if (fs.existsSync(seed)) {
          fs.copyFileSync(seed, dest);
        } else {
          fs.writeFileSync(dest, "[]");
        }
      }
    }
  }
}

/* ─── Users ─── */
export function getUsers(): User[] {
  ensureDir();
  if (!fs.existsSync(USERS_FILE)) { fs.writeFileSync(USERS_FILE, "[]"); return []; }
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
}

export function saveUsers(users: User[]) {
  ensureDir();
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export function getUserByEmail(email: string): User | undefined {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function addUser(user: User) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}

/* ─── Admin check ─── */
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "").split(",").map(e => e.trim().toLowerCase());

export function isAdmin(email: string): boolean {
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

/* ─── Projects ─── */
export function getProjects(): BidProject[] {
  ensureDir();
  if (!fs.existsSync(PROJECTS_FILE)) { fs.writeFileSync(PROJECTS_FILE, "[]"); return []; }
  return JSON.parse(fs.readFileSync(PROJECTS_FILE, "utf-8"));
}

export function saveProjects(projects: BidProject[]) {
  ensureDir();
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2));
}

export function addProject(project: BidProject) {
  const projects = getProjects();
  projects.push(project);
  saveProjects(projects);
}

export function getProjectById(id: string): BidProject | undefined {
  return getProjects().find(p => p.id === id);
}

export function updateProject(id: string, updates: Partial<BidProject>) {
  const projects = getProjects();
  const idx = projects.findIndex(p => p.id === id);
  if (idx !== -1) {
    projects[idx] = { ...projects[idx], ...updates, id };
    saveProjects(projects);
    return projects[idx];
  }
  return null;
}

export function deleteProject(id: string) {
  const projects = getProjects();
  const filtered = projects.filter(p => p.id !== id);
  saveProjects(filtered);
}

export function addDocToProject(projectId: string, doc: ProjectDoc) {
  const projects = getProjects();
  const project = projects.find(p => p.id === projectId);
  if (project) {
    project.documents.push(doc);
    saveProjects(projects);
  }
}

/* ─── Construction Documents (Lien Waivers, Insurance, Pay Apps, etc.) ─── */
export interface ConstructionDoc {
  id: string;
  name: string;
  type: string;         // file extension
  category: string;     // "lien-waiver" | "insurance" | "pay-application" | "change-order" | "safety" | "other"
  url: string;
  uploadedBy: string;   // email
  uploadedByName: string;
  uploadedByCompany: string;
  projectId?: string;   // optional — link to a specific project
  notes?: string;
  uploadedAt: string;
}

const CONSTRUCTION_DOCS_FILE = path.join(DATA_DIR, "construction-docs.json");

export function getConstructionDocs(): ConstructionDoc[] {
  ensureDir();
  if (!fs.existsSync(CONSTRUCTION_DOCS_FILE)) { fs.writeFileSync(CONSTRUCTION_DOCS_FILE, "[]"); return []; }
  return JSON.parse(fs.readFileSync(CONSTRUCTION_DOCS_FILE, "utf-8"));
}

export function saveConstructionDocs(docs: ConstructionDoc[]) {
  ensureDir();
  fs.writeFileSync(CONSTRUCTION_DOCS_FILE, JSON.stringify(docs, null, 2));
}

export function addConstructionDoc(doc: ConstructionDoc) {
  const docs = getConstructionDocs();
  docs.push(doc);
  saveConstructionDocs(docs);
}

