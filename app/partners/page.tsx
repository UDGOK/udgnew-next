import type { Metadata } from "next";
import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";

export const metadata: Metadata = {
  title: "Partners & Affiliations | UDGOK",
  description: "UDGOK's industry partnerships and professional affiliations. Members of AGC, ABC, and active participants in Tulsa's healthcare and commercial real estate community.",
  alternates: { canonical: "https://udgok.com/partners" },
};

const affiliations = [
  { name: "Associated General Contractors (AGC)", desc: "Member of the AGC of Oklahoma, the leading voice for commercial construction in the state." },
  { name: "Associated Builders & Contractors (ABC)", desc: "ABC member committed to merit-shop construction, workforce development, and industry advocacy." },
  { name: "ASSE International", desc: "Supporting ASSE 6010 and ASSE 6030 medical gas installation and verifier certification standards." },
  { name: "NFPA", desc: "Active follower of NFPA 99 Health Care Facilities Code governing medical gas systems." },
  { name: "Oklahoma State Home Builders Association", desc: "Contributing member to Oklahoma's construction and real estate development community." },
  { name: "Tulsa Regional Chamber", desc: "Member of the Tulsa Regional Chamber supporting economic development and local business growth." },
];

const designPartners = [
  { name: "Architectural Firms", desc: "We collaborate with leading Tulsa and Oklahoma City architectural firms to deliver integrated design-build projects." },
  { name: "MEP Engineers", desc: "Long-term relationships with mechanical, electrical, and plumbing engineering firms specializing in healthcare." },
  { name: "Medical Equipment Vendors", desc: "Coordination relationships with dental and medical equipment suppliers including Patterson Dental, Schein, and others." },
  { name: "Specialty Subcontractors", desc: "Vetted network of ASSE-certified medical gas installers, cleanroom contractors, and specialty MEP subs." },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0B061B", padding: "8rem 4rem 6rem", borderBottom: "4px solid #0B061B" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", color: "#FF4800", textTransform: "uppercase" }}>◾ Industry</span>
        <h1 style={{ fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", color: "#fff", marginTop: "2rem", marginBottom: "2rem" }}>
          Partners &<br /><span style={{ color: "#FF4800" }}>Affiliations</span>
        </h1>
        <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "600px" }}>
          UDGOK builds within a network of trusted partners — from professional associations to specialty subcontractors — to deliver the best outcomes for every project.
        </p>
      </section>

      <MarqueeBanner />

      {/* Professional Affiliations */}
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "3rem 2rem", borderBottom: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Professional Affiliations</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {affiliations.map((a, i) => (
            <div key={i} style={{
              padding: "3rem 2.5rem",
              borderRight: (i + 1) % 3 !== 0 ? "4px solid #0B061B" : "none",
              borderBottom: i < 3 ? "4px solid #0B061B" : "none",
            }}>
              <div style={{ width: "40px", height: "4px", background: "#FF4800", marginBottom: "1.5rem" }} />
              <h3 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>{a.name}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design & Trade Partners */}
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "3rem 2rem", borderBottom: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Design & Trade Partners</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          {designPartners.map((p, i) => (
            <div key={i} style={{
              padding: "4rem 3rem",
              borderRight: i % 2 === 0 ? "4px solid #0B061B" : "none",
              borderBottom: i < 2 ? "4px solid #0B061B" : "none",
            }}>
              <div style={{ width: "40px", height: "4px", background: "#FF4800", marginBottom: "1.5rem" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "1rem" }}>{p.name}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#666" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section style={{ display: "grid", gridTemplateColumns: "8fr 4fr", borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "5rem 4rem", borderRight: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Work with <span style={{ color: "#FF4800" }}>UDGOK</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}>
            Architects, engineers, equipment vendors, and subcontractors — reach out to explore how we can collaborate on upcoming projects.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", flexDirection: "column", gap: "1rem" }}>
          <Link href="/contact" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
            Get in Touch →
          </Link>
          <Link href="/subcontractors" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
            Subcontractor Portal
          </Link>
        </div>
      </section>
    </>
  );
}
