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

/* ─── Shared styles ─── */
const inputStyle: React.CSSProperties = { width: "100%", padding: "0.85rem 1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", color: "#fff", fontSize: "0.95rem", outline: "none", fontFamily: "inherit" };
const labelStyle: React.CSSProperties = { display: "block", marginBottom: "0.4rem", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" };
const btnPrimary: React.CSSProperties = { padding: "0.85rem 1.5rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", borderRadius: "12px", cursor: "pointer", fontFamily: "inherit" };

export default function DashboardUI({ user }: { user: UserInfo }) {
  const [projects, setProjects] = useState<BidProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<"projects" | "create">("projects");
  const [selectedProject, setSelectedProject] = useState<BidProject | null>(null);
  const [bidOpen, setBidOpen] = useState(false);
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
        {/* Page Title + Admin Tabs */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", margin: 0, lineHeight: 1 }}>
              {activeView === "projects" ? "Current Projects" : "Create Project"}
            </h1>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginTop: "0.5rem" }}>
              {activeView === "projects"
                ? (isAdmin ? "Manage active bid projects and upload documents" : "Browse active projects and submit your bids")
                : "Add a new project for subcontractors to bid on"}
            </p>
          </div>
          {isAdmin && (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {(["projects", "create"] as const).map(v => (
                <button key={v} onClick={() => setActiveView(v)} style={{ ...btnPrimary, background: activeView === v ? "#FF4800" : "rgba(255,255,255,0.05)", fontSize: "0.65rem", padding: "0.7rem 1.2rem" }}>
                  {v === "projects" ? "📋 Projects" : "＋ New Project"}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {activeView === "projects" && (
          loading ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "rgba(255,255,255,0.3)" }}>Loading projects…</div>
          ) : projects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "6rem 2rem", background: "rgba(255,255,255,0.02)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📂</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "0.5rem" }}>No Active Projects</h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>{isAdmin ? "Create your first project to get started." : "Check back soon for new bid opportunities."}</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(360px, 100%), 1fr))", gap: "1.5rem" }}>
              {projects.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setSelectedProject(p)}
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "1.75rem", cursor: "pointer", transition: "border-color 0.2s, transform 0.2s" }}
                  whileHover={{ scale: 1.01, borderColor: "rgba(255,72,0,0.3)" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", background: "rgba(255,72,0,0.1)", padding: "0.3rem 0.75rem", borderRadius: "6px" }}>{p.category || "General"}</span>
                    <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.status === "active" ? "#00A842" : "#E53935" }}>{p.status}</span>
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "0.5rem", lineHeight: 1.1 }}>{p.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.description}</p>
                  <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>
                    {p.location && <span>📍 {p.location}</span>}
                    {p.deadline && <span>📅 {p.deadline}</span>}
                    {p.documents.length > 0 && <span>📎 {p.documents.length} docs</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          )
        )}

        {/* Create Project (Admin) */}
        {activeView === "create" && isAdmin && <CreateProjectForm onCreated={() => { setActiveView("projects"); fetchProjects(); }} />}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal project={selectedProject} isAdmin={isAdmin} onClose={() => setSelectedProject(null)} onUpdated={fetchProjects} onBid={() => setBidOpen(true)} />
        )}
      </AnimatePresence>

      {/* Bid Modal */}
      <AnimatePresence>
        {bidOpen && selectedProject && (
          <BidModal project={selectedProject} user={user} onClose={() => setBidOpen(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}

/* ─────────── CREATE PROJECT FORM (Admin) ─────────── */
function CreateProjectForm({ onCreated }: { onCreated: () => void }) {
  const [form, setForm] = useState({ title: "", description: "", location: "", category: "", scope: "", budgetRange: "", deadline: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true); setError("");
    try {
      const res = await fetch("/api/portal/projects", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) { const d = await res.json(); setError(d.error); }
      else { onCreated(); }
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
        <button type="submit" disabled={saving} style={{ ...btnPrimary, width: "100%", opacity: saving ? 0.6 : 1 }}>{saving ? "Creating…" : "Create Project"}</button>
      </form>
    </motion.div>
  );
}

/* ─────────── PROJECT DETAIL MODAL ─────────── */
function ProjectDetailModal({ project, isAdmin, onClose, onUpdated, onBid }: { project: BidProject; isAdmin: boolean; onClose: () => void; onUpdated: () => void; onBid: () => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

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
    const fd = new FormData();
    fd.append("file", file);
    fd.append("projectId", project.id);
    try {
      await fetch("/api/portal/upload", { method: "POST", body: fd });
      onUpdated();
    } catch { /* empty */ }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const getFileIcon = (type: string) => {
    if (type === "pdf") return "📄";
    if (["jpg", "jpeg", "png"].includes(type)) return "🖼️";
    if (["dwg", "dxf"].includes(type)) return "📐";
    return "📎";
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(11,6,27,0.85)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", overflow: "hidden", overscrollBehavior: "contain" }}>
      <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()} onWheel={e => e.stopPropagation()}
        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", width: "100%", maxWidth: "720px", maxHeight: "90vh", overflowY: "auto", overscrollBehavior: "contain", color: "#fff" }}>

        {/* Header */}
        <div style={{ padding: "1.75rem 2rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>{project.category || "Project"}</span>
            <button onClick={onClose} style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
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
              { label: "Status", val: project.status },
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
                  <input ref={fileInputRef} type="file" accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf" onChange={uploadFile} style={{ display: "none" }} />
                  <button onClick={() => fileInputRef.current?.click()} disabled={uploading} style={{ ...btnPrimary, fontSize: "0.6rem", padding: "0.5rem 1rem" }}>
                    {uploading ? "Uploading…" : "＋ Upload Document"}
                  </button>
                </>
              )}
            </div>

            {project.documents.length === 0 ? (
              <div style={{ padding: "2rem", textAlign: "center", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px dashed rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>
                No documents uploaded yet
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {project.documents.map(doc => (
                  <a key={doc.id} href={doc.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", color: "#fff", transition: "border-color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,72,0,0.3)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                    <span style={{ fontSize: "1.2rem" }}>{getFileIcon(doc.type)}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{doc.name}</div>
                      <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>{doc.type}</div>
                    </div>
                    <span style={{ fontSize: "0.7rem", color: "#FF4800", fontWeight: 700 }}>↓</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Submit Bid Button (non-admin) */}
          {!isAdmin && project.status === "active" && (
            <button onClick={onBid} style={{ ...btnPrimary, width: "100%" }}>Submit Your Bid →</button>
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
