"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const TRADES = [
  "General Contractor",
  "Electrical",
  "Mechanical / HVAC",
  "Plumbing",
  "Fire Protection",
  "Framing / Drywall",
  "Concrete / Foundation",
  "Roofing",
  "Painting / Finishes",
  "Flooring",
  "Medical Gas",
  "Low Voltage / AV",
  "Millwork / Casework",
  "Demolition",
  "Excavation / Sitework",
  "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.85rem 1rem",
  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px", color: "#fff", fontSize: "0.95rem", outline: "none", fontFamily: "inherit",
  transition: "border-color 0.2s",
};
const labelStyle: React.CSSProperties = {
  display: "block", marginBottom: "0.4rem", fontWeight: 700,
  fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase",
  color: "rgba(255,255,255,0.5)",
};

export default function PortalPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register fields
  const [reg, setReg] = useState({
    name: "", company: "", email: "", password: "", confirmPassword: "",
    phone: "", trade: "", licenseNumber: "", state: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    const res = await signIn("credentials", { email: loginEmail, password: loginPassword, redirect: false });
    setLoading(false);
    if (res?.error) { setError("Invalid email or password"); }
    else { window.location.href = "/portal/dashboard"; }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(""); setSuccess("");

    if (reg.password !== reg.confirmPassword) { setError("Passwords do not match"); setLoading(false); return; }
    if (reg.password.length < 8) { setError("Password must be at least 8 characters"); setLoading(false); return; }

    try {
      const res = await fetch("/api/portal/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reg),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Registration failed"); }
      else { setSuccess("Account created! You can now sign in."); setMode("login"); }
    } catch { setError("Network error"); }
    setLoading(false);
  };

  const update = (field: string, val: string) => setReg(r => ({ ...r, [field]: val }));

  return (
    <main style={{ minHeight: "100vh", background: "#0B061B", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>

      {/* Background grid */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "520px" }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/">
            <Image src="/images/logo-transparent.png" alt="UDGOK" width={160} height={60} style={{ height: "50px", width: "auto", objectFit: "contain", margin: "0 auto" }} />
          </Link>
          <div style={{ marginTop: "1.5rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>
            Subcontractor Bid Portal
          </div>
        </div>

        {/* Card */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", overflow: "hidden" }}>

          {/* Tab Toggle */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            {(["login", "register"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => { setMode(tab); setError(""); setSuccess(""); }}
                style={{
                  padding: "1.1rem", background: mode === tab ? "rgba(255,72,0,0.08)" : "transparent",
                  border: "none", borderBottom: mode === tab ? "2px solid #FF4800" : "2px solid transparent",
                  color: mode === tab ? "#FF4800" : "rgba(255,255,255,0.4)",
                  fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase",
                  cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
                }}
              >
                {tab === "login" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <div style={{ padding: "2rem" }}>
            {/* Errors & Success */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  style={{ marginBottom: "1.5rem", padding: "0.85rem 1rem", background: "rgba(229,57,53,0.1)", border: "1px solid rgba(229,57,53,0.3)", borderRadius: "12px", color: "#E53935", fontSize: "0.85rem", fontWeight: 600 }}
                >{error}</motion.div>
              )}
              {success && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  style={{ marginBottom: "1.5rem", padding: "0.85rem 1rem", background: "rgba(0,168,66,0.1)", border: "1px solid rgba(0,168,66,0.3)", borderRadius: "12px", color: "#00A842", fontSize: "0.85rem", fontWeight: 600 }}
                >{success}</motion.div>
              )}
            </AnimatePresence>

            {/* Login Form */}
            {mode === "login" && (
              <motion.form key="login" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div><label style={labelStyle}>Email Address</label><input type="email" required style={inputStyle} value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="you@company.com" /></div>
                <div><label style={labelStyle}>Password</label><input type="password" required style={inputStyle} value={loginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="••••••••" /></div>
                <button type="submit" disabled={loading} style={{ width: "100%", padding: "1rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", borderRadius: "14px", cursor: "pointer", opacity: loading ? 0.6 : 1, transition: "opacity 0.2s", fontFamily: "inherit" }}>
                  {loading ? "Signing in…" : "Sign In →"}
                </button>
              </motion.form>
            )}

            {/* Register Form */}
            {mode === "register" && (
              <motion.form key="register" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div><label style={labelStyle}>Contact Name *</label><input type="text" required style={inputStyle} value={reg.name} onChange={e => update("name", e.target.value)} placeholder="John Smith" /></div>
                  <div><label style={labelStyle}>Company Name *</label><input type="text" required style={inputStyle} value={reg.company} onChange={e => update("company", e.target.value)} placeholder="Smith Electric LLC" /></div>
                </div>
                <div><label style={labelStyle}>Email Address *</label><input type="email" required style={inputStyle} value={reg.email} onChange={e => update("email", e.target.value)} placeholder="you@company.com" /></div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div><label style={labelStyle}>Password *</label><input type="password" required minLength={8} style={inputStyle} value={reg.password} onChange={e => update("password", e.target.value)} placeholder="Min 8 characters" /></div>
                  <div><label style={labelStyle}>Confirm Password *</label><input type="password" required style={inputStyle} value={reg.confirmPassword} onChange={e => update("confirmPassword", e.target.value)} placeholder="••••••••" /></div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div><label style={labelStyle}>Phone *</label><input type="tel" required style={inputStyle} value={reg.phone} onChange={e => update("phone", e.target.value)} placeholder="(918) 555-0123" /></div>
                  <div><label style={labelStyle}>State</label><input type="text" style={inputStyle} value={reg.state} onChange={e => update("state", e.target.value)} placeholder="Oklahoma" /></div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Trade / Specialty *</label>
                    <select required style={inputStyle} value={reg.trade} onChange={e => update("trade", e.target.value)}>
                      <option value="">Select trade…</option>
                      {TRADES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div><label style={labelStyle}>License #</label><input type="text" style={inputStyle} value={reg.licenseNumber} onChange={e => update("licenseNumber", e.target.value)} placeholder="Optional" /></div>
                </div>
                <button type="submit" disabled={loading} style={{ width: "100%", padding: "1rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", borderRadius: "14px", cursor: "pointer", opacity: loading ? 0.6 : 1, transition: "opacity 0.2s", fontFamily: "inherit", marginTop: "0.5rem" }}>
                  {loading ? "Creating Account…" : "Create Account →"}
                </button>
              </motion.form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} UDGOK. Access restricted to authorized contractors.
        </div>
      </motion.div>
    </main>
  );
}
