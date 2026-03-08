"use client";
import { useState } from "react";
import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";
import PageHero from "@/components/PageHero";

const faqs = [
  { q: "How long does a typical medical office build take?", a: "Most medical office construction projects range from 3–6 months depending on scope, permitting timelines, and finish selections. We provide a detailed schedule during discovery." },
  { q: "Do you work on tenant improvement projects?", a: "Yes. We specialize in tenant improvements for both healthcare and commercial spaces, working within existing building constraints to deliver maximum value." },
  { q: "Are you licensed in Texas?", a: "Yes. UDGOK is licensed in both Oklahoma and Texas, allowing us to serve the Dallas-Fort Worth metro area." },
  { q: "What sizes of projects do you handle?", a: "We handle projects from $100K tenant improvements to $10M+ ground-up healthcare campuses. Every project gets the same level of attention." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", projectType: "", timeline: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        label="Contact UDGOK"
        title="Let's Build Something Great"
        description="Ready to start your project? Reach out for a free consultation with our team."
        bgImage="/images/lets-build-extraordinary.png"
      />

      <MarqueeBanner />

      {/* Contact Form Section */}
      <section style={{ display: "grid", gridTemplateColumns: "5fr 7fr", borderBottom: "4px solid #0B061B" }}>
        {/* Left info */}
        <div style={{ padding: "6rem 4rem", borderRight: "4px solid #0B061B", background: "#0B061B", color: "#fff" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, marginBottom: "2rem", lineHeight: 0.9 }}>Get in Touch</h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.6)", marginBottom: "3rem" }}>
            Whether you&apos;re starting a new practice, expanding an existing location, or need specialty systems installed — we&apos;re here to help.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {[
              { label: "Phone", value: "(918) 520-3823", href: "tel:+19185203823" },
              { label: "Email", value: "projects@udgok.com", href: "mailto:projects@udgok.com" },
              { label: "Address", value: "7739 E 38th Street, Ste F\nTulsa, OK 74145", href: null },
              { label: "Hours", value: "Mon–Fri: 7:00 AM – 6:00 PM", href: null },
            ].map((c) => (
              <div key={c.label} style={{ paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.12)", transition: "all 0.3s" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", marginBottom: "0.75rem" }}>{c.label}</div>
                {c.href ? (
                  <Link href={c.href} style={{ fontSize: "1.125rem", fontWeight: 600, color: "#fff", textDecoration: "none" }}>{c.value}</Link>
                ) : (
                  <p style={{ fontSize: "1rem", fontWeight: 500, color: "#fff", margin: 0, whiteSpace: "pre-line" }}>{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div style={{ padding: "6rem 4rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "3rem" }}>Start Your Project</h3>

          {status === "success" ? (
            <div style={{ padding: "3rem", background: "#F7F4F7", borderLeft: "4px solid #00A842", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>Message Sent!</h3>
              <p style={{ color: "#666" }}>We&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <label className="form-label" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", color: "#666", display: "block" }}>Full Name *</label>
                  <input required className="form-input" placeholder="Dr. Jane Smith" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", color: "#666", display: "block" }}>Email *</label>
                  <input required type="email" className="form-input" placeholder="jane@clinic.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", color: "#666", display: "block" }}>Phone</label>
                  <input className="form-input" placeholder="(918) 555-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", color: "#666", display: "block" }}>Practice / Company</label>
                  <input className="form-input" placeholder="ABC Medical Group" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", color: "#666", display: "block" }}>Project Type</label>
                  <select className="form-select" value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })}>
                    <option value="">Select Type</option>
                    <option>Medical Office</option>
                    <option>Dental Office</option>
                    <option>Oral Surgery Center</option>
                    <option>Medical Gas Installation</option>
                    <option>Tenant Improvement</option>
                    <option>Convenience Store</option>
                    <option>Other Commercial</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", color: "#666", display: "block" }}>Timeline</label>
                  <select className="form-select" value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}>
                    <option value="">Select Timeline</option>
                    <option>ASAP</option>
                    <option>1–3 Months</option>
                    <option>3–6 Months</option>
                    <option>6–12 Months</option>
                    <option>12+ Months</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", color: "#666", display: "block" }}>Estimated Budget</label>
                <select className="form-select" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                  <option value="">Select Budget Range</option>
                  <option>Under $500K</option>
                  <option>$500K – $1M</option>
                  <option>$1M – $2M</option>
                  <option>$2M – $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", color: "#666", display: "block" }}>Project Description *</label>
                <textarea required className="form-textarea" placeholder="Tell us about your project, location, and any special requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  alignSelf: "flex-start", padding: "1.25rem 2.5rem",
                  background: "#0B061B", color: "#fff", border: "none",
                  fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", cursor: "pointer",
                  transition: "all 0.2s ease",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF4800")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0B061B")}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
              {status === "error" && (
                <p style={{ color: "#E53935", fontSize: "0.875rem" }}>Something went wrong. Please call us directly at (918) 520-3823.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ display: "grid", gridTemplateColumns: "4fr 8fr", borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "6rem 4rem", borderRight: "4px solid #0B061B", background: "#0B061B", color: "#fff" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, lineHeight: 0.9, marginBottom: "2rem" }}>Common Questions</h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
            Have other questions? Call us or send a message above.
          </p>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ padding: "2.5rem 4rem", borderBottom: i < faqs.length - 1 ? "4px solid #0B061B" : "none" }}>
              <h4 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "-0.02em" }}>{faq.q}</h4>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
