import type { Metadata } from "next";
import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";

export const metadata: Metadata = {
  title: "Knowledge Center | UDGOK Construction Resources",
  description: "Construction resources, guides, and market intelligence from UDGOK. Everything you need to plan, budget, and execute your medical or commercial construction project in Oklahoma.",
  alternates: { canonical: "https://udgok.com/resources" },
};

const guides = [
  {
    category: "Guides",
    items: [
      { title: "The Developer's Guide to Medical Office Construction", desc: "A complete guide to planning, budgeting, and delivering a medical office building from site selection to certificate of occupancy.", href: "/guide-developers", cta: "Read Guide" },
      { title: "The Commercial Broker's Construction Guide", desc: "Everything a commercial real estate broker needs to know about tenant improvement construction to better serve their clients.", href: "/guide-commercial-brokers", cta: "Read Guide" },
    ],
  },
  {
    category: "Tools",
    items: [
      { title: "Construction Cost Calculators", desc: "Estimate materials for your project with our suite of construction calculators — concrete, drywall, brick, flooring, paint, and roofing.", href: "/tools", cta: "Use Calculators" },
      { title: "Market Intelligence", desc: "Current construction cost benchmarks, subcontractor availability data, and healthcare real estate trends for Oklahoma developers.", href: "/market-intelligence", cta: "View Data" },
    ],
  },
  {
    category: "Technology",
    items: [
      { title: "AI & Robotics in Construction", desc: "How UDGOK is deploying AI estimating, robotic layout, drone photogrammetry, and BIM to deliver better project outcomes.", href: "/ai-robotics", cta: "Explore" },
      { title: "Virtual Design & Construction (VDC)", desc: "BIM modeling, MEP clash detection, and digital twin technology that reduces RFIs and accelerates project delivery.", href: "/virtual-design-construction", cta: "Learn More" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0B061B", padding: "8rem 4rem 6rem", borderBottom: "4px solid #0B061B" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", color: "#FF4800", textTransform: "uppercase" }}>◾ Knowledge Center</span>
        <h1 style={{ fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", color: "#fff", marginTop: "2rem", marginBottom: "2rem" }}>
          Build<br /><span style={{ color: "#FF4800" }}>Smarter</span>
        </h1>
        <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "600px" }}>
          Guides, calculators, and market data from a contractor who builds 20+ projects a year in Oklahoma. Use our knowledge to make better project decisions.
        </p>
      </section>

      <MarqueeBanner />

      {/* Resource Sections */}
      {guides.map((section, si) => (
        <section key={si} style={{ borderBottom: "4px solid #0B061B" }}>
          <div style={{ padding: "2.5rem 2rem", borderBottom: "4px solid #0B061B" }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>{section.category}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {section.items.map((item, i) => (
              <div key={i} style={{
                padding: "4rem 3rem",
                borderRight: i % 2 === 0 ? "4px solid #0B061B" : "none",
              }}>
                <div style={{ width: "40px", height: "4px", background: "#FF4800", marginBottom: "2rem" }} />
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#666", marginBottom: "2rem" }}>{item.desc}</p>
                <Link href={item.href} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.875rem 2rem", background: "#0B061B", color: "#fff",
                  textDecoration: "none", fontWeight: 700, fontSize: "0.8rem",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ display: "grid", gridTemplateColumns: "8fr 4fr", borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "5rem 4rem", borderRight: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Have a<br /><span style={{ color: "#FF4800" }}>question?</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}>Our team answers construction questions every day. Reach out and we&apos;ll connect you with the right expert.</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", flexDirection: "column", gap: "1rem" }}>
          <Link href="/contact" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
            Ask a Question →
          </Link>
          <Link href="tel:+19185203823" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
            (918) 520-3823
          </Link>
        </div>
      </section>
    </>
  );
}
