"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ─── Types ─── */
interface ProjectDoc { id: string; name: string; type: string; url: string; uploadedAt: string; }
interface BidProject { id: string; title: string; description: string; location: string; category: string; scope: string; budgetRange: string; deadline: string; status: string; documents: ProjectDoc[]; createdAt: string; }
interface UserInfo { name: string; email: string; role: string; company: string; }
interface ConstructionDocItem { id: string; name: string; type: string; category: string; url: string; uploadedBy: string; uploadedByName: string; uploadedByCompany: string; projectId?: string; notes?: string; uploadedAt: string; }

/* ─── Shared styles ─── */
const inputStyle: React.CSSProperties = { width: "100%", padding: "0.85rem 1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", color: "#fff", fontSize: "0.95rem", outline: "none", fontFamily: "inherit" };
const labelStyle: React.CSSProperties = { display: "block", marginBottom: "0.4rem", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" };
const btnPrimary: React.CSSProperties = { padding: "0.85rem 1.5rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", borderRadius: "12px", cursor: "pointer", fontFamily: "inherit" };
const btnDanger: React.CSSProperties = { ...btnPrimary, background: "#E53935" };
const btnGhost: React.CSSProperties = { ...btnPrimary, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" };

const STATUS_OPTIONS = [
  { value: "active", label: "Active", color: "#00A842", bg: "rgba(0,168,66,0.1)" },
  { value: "upcoming", label: "Upcoming", color: "#FF9800", bg: "rgba(255,152,0,0.1)" },
  { value: "closed", label: "Closed", color: "#E53935", bg: "rgba(229,57,53,0.1)" },
];

export default function DashboardUI({ user }: { user: UserInfo }) {
  const [projects, setProjects] = useState<BidProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<"projects" | "create" | "documents">("projects");
  const [selectedProject, setSelectedProject] = useState<BidProject | null>(null);
  const [bidOpen, setBidOpen] = useState(false);
  const [editProject, setEditProject] = useState<BidProject | null>(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [previewDoc, setPreviewDoc] = useState<{ url: string; name: string; type: string } | null>(null);
  const isAdmin = user.role === "admin";

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch("/api/portal/projects");
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch { /* empty */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchProjects(); }, [fetchProjects]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project? This cannot be undone.")) return;
    try {
      await fetch(`/api/portal/projects?id=${id}`, { method: "DELETE" });
      setSelectedProject(null);
      fetchProjects();
    } catch { /* empty */ }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await fetch("/api/portal/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      fetchProjects();
    } catch { /* empty */ }
  };

  const filteredProjects = statusFilter === "all" ? projects : projects.filter(p => p.status === statusFilter);

  return (
    <main style={{ minHeight: "100vh", background: "#0B061B", color: "#fff" }}>
      {/* Fixed grid bg */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none", zIndex: 0 }} />

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(11,6,27,0.95)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1.5rem", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <Link href="/"><Image src="/images/logo-transparent.png" alt="UDGOK" width={120} height={44} style={{ height: "36px", width: "auto" }} /></Link>
            <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.1)" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>Bid Portal</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>{user.name}</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>{user.company}{isAdmin ? " · Admin" : ""}</div>
            </div>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #FF4800, #FF7043)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 900, color: "#fff" }}>
              {user.name.charAt(0).toUpperCase()}
            </div>
            <button onClick={() => signOut({ callbackUrl: "/portal" })} style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto", padding: "2rem 1.5rem 4rem" }}>
        {/* Page Title + Tabs */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", margin: 0, lineHeight: 1 }}>
              {activeView === "projects" ? "Projects" : activeView === "documents" ? "Construction Documents" : "Create Project"}
            </h1>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginTop: "0.5rem" }}>
              {activeView === "projects"
                ? (isAdmin ? "Manage projects — edit, delete, change status, upload documents" : "Browse projects and submit your bids")
                : activeView === "documents"
                ? "Upload and manage lien waivers, insurance certificates, pay applications, and more"
                : "Add a new project for subcontractors to bid on"}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button onClick={() => setActiveView("projects")} style={{ ...btnPrimary, background: activeView === "projects" ? "#FF4800" : "rgba(255,255,255,0.05)", fontSize: "0.65rem", padding: "0.7rem 1.2rem" }}>📋 Projects</button>
            <button onClick={() => setActiveView("documents")} style={{ ...btnPrimary, background: activeView === "documents" ? "#FF4800" : "rgba(255,255,255,0.05)", fontSize: "0.65rem", padding: "0.7rem 1.2rem" }}>📁 Documents</button>
            {isAdmin && (
              <button onClick={() => setActiveView("create")} style={{ ...btnPrimary, background: activeView === "create" ? "#FF4800" : "rgba(255,255,255,0.05)", fontSize: "0.65rem", padding: "0.7rem 1.2rem" }}>＋ New Project</button>
            )}
          </div>
        </div>

        {/* Projects View */}
        {activeView === "projects" && (
          <>
            {/* Status Filter Pills */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {[{ value: "all", label: "All", color: "#fff" }, ...STATUS_OPTIONS].map(s => {
                const count = s.value === "all" ? projects.length : projects.filter(p => p.status === s.value).length;
                return (
                  <button key={s.value} onClick={() => setStatusFilter(s.value)} style={{
                    padding: "0.45rem 1rem", borderRadius: "20px", border: "1px solid",
                    borderColor: statusFilter === s.value ? s.color : "rgba(255,255,255,0.1)",
                    background: statusFilter === s.value ? `${s.color}22` : "transparent",
                    color: statusFilter === s.value ? s.color : "rgba(255,255,255,0.5)",
                    fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    cursor: "pointer", fontFamily: "inherit",
                  }}>
                    {s.label} ({count})
                  </button>
                );
              })}
            </div>

            {loading ? (
              <div style={{ textAlign: "center", padding: "4rem", color: "rgba(255,255,255,0.3)" }}>Loading projects…</div>
            ) : filteredProjects.length === 0 ? (
              <div style={{ textAlign: "center", padding: "6rem 2rem", background: "rgba(255,255,255,0.02)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📂</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "0.5rem" }}>No Projects Found</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>{isAdmin ? "Create your first project to get started." : "Check back soon for new bid opportunities."}</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(360px, 100%), 1fr))", gap: "1.5rem" }}>
                {filteredProjects.map((p, i) => {
                  const statusInfo = STATUS_OPTIONS.find(s => s.value === p.status) || STATUS_OPTIONS[0];
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => setSelectedProject(p)}
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "1.75rem", cursor: "pointer", transition: "border-color 0.2s, transform 0.2s", position: "relative" }}
                      whileHover={{ scale: 1.01, borderColor: "rgba(255,72,0,0.3)" }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                        <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", background: "rgba(255,72,0,0.1)", padding: "0.3rem 0.75rem", borderRadius: "6px" }}>{p.category || "General"}</span>
                        <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: statusInfo.color, background: statusInfo.bg, padding: "0.3rem 0.75rem", borderRadius: "6px" }}>{statusInfo.label}</span>
                      </div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "0.5rem", lineHeight: 1.1 }}>{p.title}</h3>
                      <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.description}</p>
                      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>
                        {p.location && <span>📍 {p.location}</span>}
                        {p.deadline && <span>📅 {p.deadline}</span>}
                        {p.budgetRange && <span>💰 {p.budgetRange}</span>}
                        {p.documents.length > 0 && <span>📎 {p.documents.length} docs</span>}
                      </div>

                      {/* Quick Status Toggle (Admin) */}
                      {isAdmin && (
                        <div style={{ display: "flex", gap: "0.4rem", marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }} onClick={e => e.stopPropagation()}>
                          {STATUS_OPTIONS.map(s => (
                            <button key={s.value} onClick={() => handleStatusChange(p.id, s.value)} style={{
                              padding: "0.3rem 0.6rem", borderRadius: "6px", border: "1px solid",
                              borderColor: p.status === s.value ? s.color : "rgba(255,255,255,0.08)",
                              background: p.status === s.value ? s.bg : "transparent",
                              color: p.status === s.value ? s.color : "rgba(255,255,255,0.3)",
                              fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                              cursor: "pointer", fontFamily: "inherit",
                            }}>
                              {s.label}
                            </button>
                          ))}
                          <button onClick={() => { setEditProject(p); }} style={{
                            marginLeft: "auto", padding: "0.3rem 0.6rem", borderRadius: "6px",
                            border: "1px solid rgba(255,255,255,0.08)", background: "transparent",
                            color: "rgba(255,255,255,0.4)", fontSize: "0.55rem", fontWeight: 700,
                            letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit",
                          }}>
                            ✏️ Edit
                          </button>
                          <button onClick={() => handleDelete(p.id)} style={{
                            padding: "0.3rem 0.6rem", borderRadius: "6px",
                            border: "1px solid rgba(229,57,53,0.2)", background: "transparent",
                            color: "#E53935", fontSize: "0.55rem", fontWeight: 700,
                            letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit",
                          }}>
                            🗑️ Delete
                          </button>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* Create Project (Admin) */}
        {activeView === "create" && isAdmin && <ProjectForm onDone={() => { setActiveView("projects"); fetchProjects(); }} />}

        {/* Construction Documents */}
        {activeView === "documents" && <ConstructionDocsSection user={user} isAdmin={isAdmin} projects={projects} />}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            isAdmin={isAdmin}
            onClose={() => setSelectedProject(null)}
            onUpdated={() => { fetchProjects(); }}
            onBid={() => setBidOpen(true)}
            onEdit={() => { setEditProject(selectedProject); setSelectedProject(null); }}
            onDelete={() => { handleDelete(selectedProject.id); }}
            onPreview={(doc) => setPreviewDoc(doc)}
          />
        )}
      </AnimatePresence>

      {/* Bid Modal */}
      <AnimatePresence>
        {bidOpen && selectedProject && (
          <BidModal project={selectedProject} user={user} onClose={() => setBidOpen(false)} />
        )}
      </AnimatePresence>

      {/* Edit Project Modal */}
      <AnimatePresence>
        {editProject && isAdmin && (
          <EditProjectModal project={editProject} onClose={() => setEditProject(null)} onSaved={() => { setEditProject(null); fetchProjects(); }} />
        )}
      </AnimatePresence>

      {/* Document Preview Modal */}
      <AnimatePresence>
        {previewDoc && (
          <DocumentPreviewModal doc={previewDoc} onClose={() => setPreviewDoc(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

/* ─────────── PROJECT FORM (Create/Edit) ─────────── */
function ProjectForm({ onDone, initial }: { onDone: () => void; initial?: BidProject }) {
  const [form, setForm] = useState({
    title: initial?.title || "",
    description: initial?.description || "",
    location: initial?.location || "",
    category: initial?.category || "",
    scope: initial?.scope || "",
    budgetRange: initial?.budgetRange || "",
    deadline: initial?.deadline || "",
    status: initial?.status || "active",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true); setError("");
    try {
      const method = initial ? "PUT" : "POST";
      const body = initial ? { id: initial.id, ...form } : form;
      const res = await fetch("/api/portal/projects", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) { const d = await res.json(); setError(d.error); }
      else { onDone(); }
    } catch { setError("Network error"); }
    setSaving(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ maxWidth: "700px" }}>
      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2rem" }}>
        {error && <div style={{ padding: "0.75rem", background: "rgba(229,57,53,0.1)", borderRadius: "10px", color: "#E53935", fontSize: "0.85rem" }}>{error}</div>}
        <div><label style={labelStyle}>Project Title *</label><input required style={inputStyle} value={form.title} onChange={e => update("title", e.target.value)} placeholder="e.g. Paradigm Oral Health — Broken Arrow" /></div>
        <div><label style={labelStyle}>Description *</label><textarea required style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }} value={form.description} onChange={e => update("description", e.target.value)} placeholder="Detailed project description…" /></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div><label style={labelStyle}>Location</label><input style={inputStyle} value={form.location} onChange={e => update("location", e.target.value)} placeholder="Broken Arrow, OK" /></div>
          <div><label style={labelStyle}>Category</label><input style={inputStyle} value={form.category} onChange={e => update("category", e.target.value)} placeholder="Medical, Dental, Commercial" /></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div><label style={labelStyle}>Budget Range</label><input style={inputStyle} value={form.budgetRange} onChange={e => update("budgetRange", e.target.value)} placeholder="$500K — $1.2M" /></div>
          <div><label style={labelStyle}>Bid Deadline</label><input type="date" style={inputStyle} value={form.deadline} onChange={e => update("deadline", e.target.value)} /></div>
        </div>
        <div><label style={labelStyle}>Scope of Work</label><textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }} value={form.scope} onChange={e => update("scope", e.target.value)} placeholder="Electric, HVAC, plumbing…" /></div>
        {/* Status Selector */}
        <div>
          <label style={labelStyle}>Project Status</label>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {STATUS_OPTIONS.map(s => (
              <button key={s.value} type="button" onClick={() => update("status", s.value)} style={{
                flex: 1, padding: "0.75rem", borderRadius: "12px", border: "2px solid",
                borderColor: form.status === s.value ? s.color : "rgba(255,255,255,0.08)",
                background: form.status === s.value ? s.bg : "rgba(255,255,255,0.02)",
                color: form.status === s.value ? s.color : "rgba(255,255,255,0.4)",
                fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
              }}>
                {s.label}
              </button>
            ))}
          </div>
        </div>
        <button type="submit" disabled={saving} style={{ ...btnPrimary, width: "100%", opacity: saving ? 0.6 : 1 }}>{saving ? "Saving…" : initial ? "Update Project" : "Create Project"}</button>
      </form>
    </motion.div>
  );
}

/* ─────────── EDIT PROJECT MODAL ─────────── */
function EditProjectModal({ project, onClose, onSaved }: { project: BidProject; onClose: () => void; onSaved: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 10001, background: "rgba(11,6,27,0.9)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", overflowY: "auto" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}
        onClick={e => e.stopPropagation()}
        style={{ width: "100%", maxWidth: "720px", maxHeight: "90vh", overflowY: "auto", overscrollBehavior: "contain" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: "-0.02em" }}>Edit Project</h2>
          <button onClick={onClose} style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>
        <ProjectForm initial={project} onDone={onSaved} />
      </motion.div>
    </motion.div>
  );
}

/* ─────────── PROJECT DETAIL MODAL ─────────── */
function ProjectDetailModal({ project, isAdmin, onClose, onUpdated, onBid, onEdit, onDelete, onPreview }: { project: BidProject; isAdmin: boolean; onClose: () => void; onUpdated: () => void; onBid: () => void; onEdit: () => void; onDelete: () => void; onPreview: (doc: { url: string; name: string; type: string }) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError("");
    const fd = new FormData();
    fd.append("file", file);
    fd.append("projectId", project.id);
    try {
      const res = await fetch("/api/portal/upload", { method: "POST", body: fd });
      if (!res.ok) {
        const d = await res.json();
        setUploadError(d.error || "Upload failed");
      } else {
        onUpdated();
      }
    } catch { 
      setUploadError("Network error during upload");
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const getFileIcon = (type: string) => {
    if (type === "pdf") return "📄";
    if (["jpg", "jpeg", "png"].includes(type)) return "🖼️";
    if (["dwg", "dxf"].includes(type)) return "📐";
    return "📎";
  };

  const statusInfo = STATUS_OPTIONS.find(s => s.value === project.status) || STATUS_OPTIONS[0];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(11,6,27,0.85)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", overflow: "hidden", overscrollBehavior: "contain" }}>
      <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()} onWheel={e => e.stopPropagation()}
        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", width: "100%", maxWidth: "720px", maxHeight: "90vh", overflowY: "auto", overscrollBehavior: "contain", color: "#fff" }}>

        {/* Header */}
        <div style={{ padding: "1.75rem 2rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>{project.category || "Project"}</span>
              <span style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: statusInfo.color, background: statusInfo.bg, padding: "0.2rem 0.5rem", borderRadius: "4px" }}>{statusInfo.label}</span>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {isAdmin && (
                <>
                  <button onClick={onEdit} style={{ ...btnGhost, fontSize: "0.55rem", padding: "0.4rem 0.75rem" }}>✏️ Edit</button>
                  <button onClick={onDelete} style={{ ...btnDanger, fontSize: "0.55rem", padding: "0.4rem 0.75rem" }}>🗑️ Delete</button>
                </>
              )}
              <button onClick={onClose} style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>
          </div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", margin: "0.75rem 0 0" }}>{project.title}</h2>
        </div>

        <div style={{ padding: "1.75rem 2rem" }}>
          {/* Meta */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
            {[
              { label: "Location", val: project.location },
              { label: "Budget Range", val: project.budgetRange },
              { label: "Deadline", val: project.deadline },
              { label: "Status", val: statusInfo.label },
              { label: "Created", val: project.createdAt ? new Date(project.createdAt).toLocaleDateString() : "" },
            ].filter(x => x.val).map((x, i) => (
              <div key={i} style={{ padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.3rem" }}>{x.label}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, textTransform: "capitalize" }}>{x.val}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", marginBottom: "0.75rem" }}>Description</div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: 0, whiteSpace: "pre-wrap" }}>{project.description}</p>
          </div>

          {project.scope && (
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", marginBottom: "0.75rem" }}>Scope of Work</div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: 0, whiteSpace: "pre-wrap" }}>{project.scope}</p>
            </div>
          )}

          {/* Documents */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Project Documents</span>
              {isAdmin && (
                <>
                  <input ref={fileInputRef} type="file" accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf,.doc,.docx,.xls,.xlsx" onChange={uploadFile} style={{ display: "none" }} />
                  <button onClick={() => fileInputRef.current?.click()} disabled={uploading} style={{ ...btnPrimary, fontSize: "0.6rem", padding: "0.5rem 1rem" }}>
                    {uploading ? "Uploading…" : "＋ Upload Document"}
                  </button>
                </>
              )}
            </div>

            {uploadError && <div style={{ marginBottom: "1rem", padding: "0.75rem", background: "rgba(229,57,53,0.1)", borderRadius: "10px", color: "#E53935", fontSize: "0.85rem" }}>{uploadError}</div>}

            {project.documents.length === 0 ? (
              <div style={{ padding: "2rem", textAlign: "center", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px dashed rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>
                No documents uploaded yet
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {project.documents.map(doc => {
                  const canPreview = ["pdf", "jpg", "jpeg", "png"].includes(doc.type);
                  return (
                    <div key={doc.id}
                      onClick={() => canPreview ? onPreview({ url: doc.url, name: doc.name, type: doc.type }) : window.open(doc.url, "_blank")}
                      style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", color: "#fff", transition: "border-color 0.2s", cursor: "pointer" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,72,0,0.3)")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                      <span style={{ fontSize: "1.2rem" }}>{getFileIcon(doc.type)}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{doc.name}</div>
                        <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                          <span style={{ textTransform: "uppercase" }}>{doc.type}</span>
                          {canPreview && <span style={{ color: "#FF4800", fontWeight: 700 }}>👁 Preview</span>}
                        </div>
                      </div>
                      <span style={{ fontSize: "0.7rem", color: "#FF4800", fontWeight: 700 }}>{canPreview ? "👁" : "↓"}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Submit Bid Button (non-admin, active projects only) */}
          {!isAdmin && project.status === "active" && (
            <button onClick={onBid} style={{ ...btnPrimary, width: "100%" }}>Submit Your Bid →</button>
          )}
          {!isAdmin && project.status === "upcoming" && (
            <div style={{ padding: "1rem", textAlign: "center", background: "rgba(255,152,0,0.1)", borderRadius: "12px", color: "#FF9800", fontSize: "0.85rem", fontWeight: 600 }}>
              This project is coming soon — bidding is not yet open
            </div>
          )}
          {!isAdmin && project.status === "closed" && (
            <div style={{ padding: "1rem", textAlign: "center", background: "rgba(229,57,53,0.1)", borderRadius: "12px", color: "#E53935", fontSize: "0.85rem", fontWeight: 600 }}>
              Bidding is closed for this project
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────── BID SUBMISSION MODAL ─────────── */
function BidModal({ project, user, onClose }: { project: BidProject; user: UserInfo; onClose: () => void }) {
  const [bidAmount, setBidAmount] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setSending(true);
    try {
      await fetch("/api/portal/bid", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ projectId: project.id, bidAmount, message }) });
      setSent(true);
    } catch { /* empty */ }
    setSending(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 10000, background: "rgba(11,6,27,0.9)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}
        onClick={e => e.stopPropagation()} onWheel={e => e.stopPropagation()}
        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", width: "100%", maxWidth: "500px", maxHeight: "90vh", overflowY: "auto", overscrollBehavior: "contain", color: "#fff" }}>
        <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>Submit Bid</span>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 900, textTransform: "uppercase", margin: "0.25rem 0 0", letterSpacing: "-0.02em" }}>{project.title}</h2>
          </div>
          <button onClick={onClose} style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "#fff", fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>
        <div style={{ padding: "1.75rem 2rem" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Bid Submitted</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>Your bid has been sent to the UDGOK team. We{"'"}ll be in touch.</p>
              <button onClick={onClose} style={{ ...btnPrimary, marginTop: "1.5rem" }}>Close</button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                Bidding as <strong style={{ color: "#fff" }}>{user.name}</strong> from <strong style={{ color: "#fff" }}>{user.company}</strong>
              </div>
              <div><label style={labelStyle}>Bid Amount (Optional)</label><input type="text" style={inputStyle} value={bidAmount} onChange={e => setBidAmount(e.target.value)} placeholder="e.g. $125,000" /></div>
              <div><label style={labelStyle}>Message / Proposal *</label><textarea required style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }} value={message} onChange={e => setMessage(e.target.value)} placeholder="Include your scope of work, estimated timeline, and any questions…" /></div>
              <button type="submit" disabled={sending} style={{ ...btnPrimary, width: "100%", opacity: sending ? 0.6 : 1 }}>{sending ? "Submitting…" : "Submit Bid →"}</button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────── CONSTRUCTION DOCUMENTS SECTION ─────────── */
const DOC_CATEGORIES = [
  { value: "lien-waiver", label: "Lien Waiver", icon: "📜" },
  { value: "insurance", label: "Insurance Certificate", icon: "🛡️" },
  { value: "pay-application", label: "Pay Application", icon: "💰" },
  { value: "change-order", label: "Change Order", icon: "🔄" },
  { value: "safety", label: "Safety Report", icon: "⚠️" },
  { value: "w9", label: "W-9 / Tax Form", icon: "📋" },
  { value: "contract", label: "Subcontract", icon: "📝" },
  { value: "other", label: "Other", icon: "📎" },
];

function ConstructionDocsSection({ user, isAdmin, projects }: { user: UserInfo; isAdmin: boolean; projects: BidProject[] }) {
  const [docs, setDocs] = useState<ConstructionDocItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState("");
  const [filterCat, setFilterCat] = useState("all");
  const [showUpload, setShowUpload] = useState(false);
  const [category, setCategory] = useState("lien-waiver");
  const [notes, setNotes] = useState("");
  const [projectId, setProjectId] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchDocs = useCallback(async () => {
    try {
      const res = await fetch("/api/portal/documents");
      const data = await res.json();
      setDocs(Array.isArray(data) ? data : []);
    } catch { /* empty */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchDocs(); }, [fetchDocs]);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!file) { setUploadError("Please select a file"); return; }
    setUploading(true); setUploadError(""); setUploadSuccess("");
    const fd = new FormData();
    fd.append("file", file);
    fd.append("category", category);
    fd.append("notes", notes);
    if (projectId) fd.append("projectId", projectId);
    try {
      const res = await fetch("/api/portal/documents", { method: "POST", body: fd });
      if (!res.ok) {
        const d = await res.json();
        setUploadError(d.error || "Upload failed");
      } else {
        setUploadSuccess("Document uploaded successfully");
        setNotes(""); setProjectId("");
        if (fileRef.current) fileRef.current.value = "";
        fetchDocs();
        setTimeout(() => setUploadSuccess(""), 3000);
      }
    } catch { setUploadError("Network error"); }
    setUploading(false);
  };

  const filtered = filterCat === "all" ? docs : docs.filter(d => d.category === filterCat);
  const getCatIcon = (cat: string) => DOC_CATEGORIES.find(c => c.value === cat)?.icon || "📎";
  const getCatLabel = (cat: string) => DOC_CATEGORIES.find(c => c.value === cat)?.label || cat;

  void isAdmin; // available for future admin-only features
  void user;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      {/* Upload Toggle */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <button onClick={() => setShowUpload(!showUpload)} style={{ ...btnPrimary, fontSize: "0.65rem", padding: "0.7rem 1.2rem" }}>
          {showUpload ? "✕ Close" : "＋ Upload Document"}
        </button>
        {uploadSuccess && <span style={{ color: "#00A842", fontSize: "0.85rem", fontWeight: 600 }}>✓ {uploadSuccess}</span>}
      </div>

      {/* Upload Form */}
      <AnimatePresence>
        {showUpload && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleUpload}
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "1.75rem", marginBottom: "1.5rem", overflow: "hidden" }}
          >
            {uploadError && <div style={{ marginBottom: "1rem", padding: "0.75rem", background: "rgba(229,57,53,0.1)", borderRadius: "10px", color: "#E53935", fontSize: "0.85rem" }}>{uploadError}</div>}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Document Category *</label>
                <select value={category} onChange={e => setCategory(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                  {DOC_CATEGORIES.map(c => (
                    <option key={c.value} value={c.value} style={{ background: "#111" }}>{c.icon} {c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Related Project (Optional)</label>
                <select value={projectId} onChange={e => setProjectId(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                  <option value="" style={{ background: "#111" }}>— None —</option>
                  {projects.map(p => (
                    <option key={p.id} value={p.id} style={{ background: "#111" }}>{p.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>File *</label>
              <input ref={fileRef} type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.dwg,.dxf" style={{ ...inputStyle, cursor: "pointer", padding: "0.65rem 1rem" }} />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Notes (Optional)</label>
              <input style={inputStyle} value={notes} onChange={e => setNotes(e.target.value)} placeholder="e.g. Partial lien waiver for Draw #3" />
            </div>

            <button type="submit" disabled={uploading} style={{ ...btnPrimary, width: "100%", opacity: uploading ? 0.6 : 1 }}>
              {uploading ? "Uploading…" : "Upload Document"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Category Filter Pills */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <button onClick={() => setFilterCat("all")} style={{ padding: "0.45rem 1rem", borderRadius: "20px", border: "1px solid", borderColor: filterCat === "all" ? "#FF4800" : "rgba(255,255,255,0.1)", background: filterCat === "all" ? "rgba(255,72,0,0.15)" : "transparent", color: filterCat === "all" ? "#FF4800" : "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>
          All ({docs.length})
        </button>
        {DOC_CATEGORIES.map(c => {
          const count = docs.filter(d => d.category === c.value).length;
          if (count === 0) return null;
          return (
            <button key={c.value} onClick={() => setFilterCat(c.value)} style={{ padding: "0.45rem 1rem", borderRadius: "20px", border: "1px solid", borderColor: filterCat === c.value ? "#FF4800" : "rgba(255,255,255,0.1)", background: filterCat === c.value ? "rgba(255,72,0,0.15)" : "transparent", color: filterCat === c.value ? "#FF4800" : "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>
              {c.icon} {c.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Document List */}
      {loading ? (
        <div style={{ textAlign: "center", padding: "4rem", color: "rgba(255,255,255,0.3)" }}>Loading documents…</div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 2rem", background: "rgba(255,255,255,0.02)", borderRadius: "20px", border: "1px dashed rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📁</div>
          <h3 style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "1rem", marginBottom: "0.5rem" }}>No Documents Yet</h3>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>Upload lien waivers, insurance certificates, pay applications, and more.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {filtered.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()).map((doc, i) => (
            <motion.a
              key={doc.id}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: "rgba(255,255,255,0.03)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", color: "#fff", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,72,0,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
            >
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{getCatIcon(doc.category)}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.2rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{doc.name}</span>
                  <span style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4800", background: "rgba(255,72,0,0.1)", padding: "0.2rem 0.5rem", borderRadius: "4px", flexShrink: 0 }}>{getCatLabel(doc.category)}</span>
                </div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <span>{doc.uploadedByName || doc.uploadedBy}{doc.uploadedByCompany ? ` · ${doc.uploadedByCompany}` : ""}</span>
                  <span>{new Date(doc.uploadedAt).toLocaleDateString()}</span>
                  {doc.notes && <span style={{ fontStyle: "italic" }}>{doc.notes}</span>}
                </div>
              </div>
              <span style={{ fontSize: "0.8rem", color: "#FF4800", fontWeight: 700, flexShrink: 0 }}>↓</span>
            </motion.a>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ─────────── DOCUMENT PREVIEW MODAL ─────────── */
function DocumentPreviewModal({ doc, onClose }: { doc: { url: string; name: string; type: string }; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  const isPdf = doc.type === "pdf";
  const isImage = ["jpg", "jpeg", "png"].includes(doc.type);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 10002, background: "rgba(0,0,0,0.95)", backdropFilter: "blur(16px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Toolbar */}
      <div onClick={e => e.stopPropagation()} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "1.2rem" }}>{isPdf ? "📄" : "🖼️"}</span>
          <div>
            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff" }}>{doc.name}</div>
            <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{doc.type} document</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ ...btnGhost, fontSize: "0.6rem", padding: "0.5rem 1rem", textDecoration: "none" }}>↓ Download</a>
          <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ ...btnGhost, fontSize: "0.6rem", padding: "0.5rem 1rem", textDecoration: "none" }}>⤢ Open in New Tab</a>
          <button onClick={onClose} style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>
      </div>

      {/* Content */}
      <div onClick={e => e.stopPropagation()} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", overflow: "auto" }}>
        {isPdf ? (
          <iframe
            src={doc.url}
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px", background: "#fff" }}
            title={doc.name}
          />
        ) : isImage ? (
          <img
            src={doc.url}
            alt={doc.name}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "12px" }}
          />
        ) : (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.5)" }}>
            <p>Preview not available for this file type.</p>
            <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ color: "#FF4800" }}>Download {doc.name}</a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
