import type { Metadata } from "next";
import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";

export const metadata: Metadata = {
  title: "Subcontractor Portal | UDGOK",
  description: "UDGOK subcontractor prequalification and bid opportunities. Join our network of trusted trade partners for medical, dental, and commercial construction projects across Oklahoma and Texas.",
  alternates: { canonical: "https://udgok.com/subcontractors" },
};

const requirements = [
  { title: "Insurance", desc: "General liability ($1M/$2M), workers' compensation, and auto liability. Additional insured status required on all projects." },
  { title: "Licensing", desc: "Valid state contractor's license in Oklahoma or Texas (as applicable), plus any required trade licenses." },
  { title: "Safety Record", desc: "EMR of 1.0 or below preferred. OSHA 10 minimum for all workers. OSHA 30 required for foremen." },
  { title: "Financial Stability", desc: "Ability to furnish payment and performance bonds on projects exceeding $500K." },
  { title: "References", desc: "Three verifiable project references from the past 36 months in your trade category." },
  { title: "Certifications", desc: "Trade-specific certifications required (e.g., ASSE 6010 for medical gas, EPA 608 for HVAC)." },
];

const trades = [
  "Medical Gas Installation (ASSE 6010)", "Mechanical / HVAC", "Electrical", "Plumbing",
  "Drywall & Metal Framing", "Flooring", "Painting", "Millwork & Cabinetry",
  "Structural Steel", "Concrete", "Roofing", "Fire Sprinklers",
  "Low Voltage / IT", "Elevator & Lifts", "Specialty Coatings", "Landscaping",
];

export default function SubcontractorsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0B061B", padding: "8rem 4rem 6rem", borderBottom: "4px solid #0B061B" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", color: "#FF4800", textTransform: "uppercase" }}>◾ Trade Partners</span>
        <h1 style={{ fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", color: "#fff", marginTop: "2rem", marginBottom: "2rem" }}>
          Subcontractor<br /><span style={{ color: "#FF4800" }}>Portal</span>
        </h1>
        <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "600px" }}>
          UDGOK builds with the best trades in Oklahoma. If you run a quality subcontracting business and want consistent commercial work, we want to hear from you.
        </p>
      </section>

      <MarqueeBanner />

      {/* Why Work With UDGOK */}
      <section style={{ display: "grid", gridTemplateColumns: "6fr 6fr", borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "6rem 4rem", borderRight: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "2rem" }}>Why Work With UDGOK</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#666", marginBottom: "1.5rem" }}>
            We pay on time. We plan ahead. We treat our subs like partners, not vendors. UDGOK runs structured projects with proper pre-construction coordination, so your crews show up to a job that&apos;s ready for them.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#666" }}>
            With 200+ completed projects across Oklahoma and Texas and a growing pipeline, we offer steady commercial work for quality trades.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {[
            { n: "Net 30", l: "Pay Terms" },
            { n: "200+", l: "Projects" },
            { n: "Growing", l: "Pipeline" },
            { n: "Fair", l: "Bid Process" },
          ].map((s, i) => (
            <div key={i} style={{
              padding: "3rem 2rem", textAlign: "center",
              borderRight: i % 2 === 0 ? "4px solid #0B061B" : "none",
              borderBottom: i < 2 ? "4px solid #0B061B" : "none",
              background: i === 0 || i === 3 ? "#F7F4F7" : "#fff",
            }}>
              <div style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#FF4800", letterSpacing: "-0.05em", marginBottom: "0.5rem" }}>{s.n}</div>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Prequalification Requirements */}
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "3rem 2rem", borderBottom: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Prequalification Requirements</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {requirements.map((r, i) => (
            <div key={i} style={{
              padding: "3rem 2.5rem",
              borderRight: (i + 1) % 3 !== 0 ? "4px solid #0B061B" : "none",
              borderBottom: i < 3 ? "4px solid #0B061B" : "none",
            }}>
              <div style={{ width: "40px", height: "4px", background: "#FF4800", marginBottom: "1.5rem" }} />
              <h3 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>{r.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trades We Bid */}
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "3rem 2rem", borderBottom: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Trades We Regularly Bid</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", padding: "3rem 2rem", gap: "1rem 2rem" }}>
          {trades.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", background: "#FF4800", flexShrink: 0, display: "block" }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0B061B" }}>{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ display: "grid", gridTemplateColumns: "8fr 4fr", borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "5rem 4rem", borderRight: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Ready to <span style={{ color: "#FF4800" }}>Bid?</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}>
            Send us your company information and trade category. We&apos;ll add you to our bid list and reach out when a suitable project is going out for bids.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", flexDirection: "column", gap: "1rem" }}>
          <Link href="/contact" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
            Submit Prequalification →
          </Link>
          <Link href="tel:+19185203823" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
            (918) 520-3823
          </Link>
        </div>
      </section>
    </>
  );
}
