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
  status: "active" | "closed";
  documents: ProjectDoc[];
  createdAt: string;
}

/* ─── Paths ─── */
const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
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

export function addDocToProject(projectId: string, doc: ProjectDoc) {
  const projects = getProjects();
  const project = projects.find(p => p.id === projectId);
  if (project) {
    project.documents.push(doc);
    saveProjects(projects);
  }
}
