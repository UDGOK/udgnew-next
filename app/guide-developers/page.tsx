import type { Metadata } from "next";
import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";

export const metadata: Metadata = {
  title: "Developer's Guide to Medical Office Construction | UDGOK",
  description: "A complete guide for real estate developers building medical office projects in Oklahoma. Site selection, programming, budgeting, permitting, and delivery strategy from UDGOK.",
  alternates: { canonical: "https://udgok.com/guide-developers" },
};

const chapters = [
  {
    n: "01",
    title: "Site Selection & Feasibility",
    content: "The right site for a medical office building is different from general commercial real estate. You need to evaluate patient traffic patterns, physician referral corridors, parking ratios (typically 5:1,000 for medical vs. 3:1,000 for office), and proximity to hospital campuses. Utility capacity is critical — medical facilities have 3-5x the electrical and water demand of standard office. Zoning for medical use should be confirmed early, as rezoning adds months to your schedule.",
  },
  {
    n: "02",
    title: "Programming & Tenant Requirements",
    content: "Every healthcare tenant has specific space requirements that drive construction cost. A primary care physician needs 1,800-2,400 SF per physician, while a dental practice needs 350-450 SF per operatory plus support spaces. Understand your tenant mix before finalizing floor plate. Shell buildings designed for healthcare should include 12-14 foot slab-to-slab heights (vs. 10 feet for office), oversized mechanical shafts, and structural capacity for medical equipment loads.",
  },
  {
    n: "03",
    title: "Budget & Pro Forma",
    content: "Medical office construction in Tulsa currently ranges from $180-280 per SF for tenant improvements and $220-350 per SF for ground-up shell-plus-TI, depending on specialty. Add soft costs (design, permits, financing, leasing commissions) of 25-35% on top of hard costs. Build a 10-15% contingency into your pro forma. Escalation of 5-8% annually should be modeled on projects with 18+ month lead times. Our preconstruction team can provide project-specific budgets within one week.",
  },
  {
    n: "04",
    title: "Delivery Strategy",
    content: "Design-build is the most efficient delivery method for medical office, reducing typical schedules by 15-20% versus design-bid-build. Consider phasing: build the shell first, then complete tenant improvements as leases are signed. This approach reduces pre-leasing requirements and accelerates your first-occupancy date. For multi-tenant buildings, sequence tenant improvements to prioritize anchor tenants and commission systems in occupied zones without impacting existing tenants.",
  },
  {
    n: "05",
    title: "Permitting & Regulatory",
    content: "Medical facilities trigger multiple regulatory layers beyond standard commercial permitting: OSHA healthcare standards, NFPA 99 for medical gas, ADA for healthcare facilities (stricter than commercial), and state health department approval for certain use types. In Oklahoma, ambulatory surgery centers require ODHSEM licensing. Dental offices with nitrous require DEQ review of waste anesthetic gas systems. Budget 60-90 days for medical permit review in Tulsa versus 30-45 for standard commercial.",
  },
  {
    n: "06",
    title: "Working with UDGOK",
    content: "Engage UDGOK at the earliest stage possible — ideally at site selection — to get accurate cost feedback during feasibility. Our preconstruction team provides free conceptual budgets for serious development opportunities. We'll participate in tenant negotiations to ensure lease TI allowances reflect actual market costs. Our design-build model gives you a single point of accountability from schematic design through certificate of occupancy, with real-time cost reporting throughout.",
  },
];

export default function GuideDevelopersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0B061B", padding: "8rem 4rem 6rem", borderBottom: "4px solid #0B061B" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", color: "#FF4800", textTransform: "uppercase" }}>◾ Developer Resource</span>
        <h1 style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", color: "#fff", marginTop: "2rem", marginBottom: "2rem" }}>
          The Developer&apos;s<br />Guide to Medical<br /><span style={{ color: "#FF4800" }}>Office Construction</span>
        </h1>
        <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "600px" }}>
          From site selection through certificate of occupancy — everything a real estate developer needs to know to deliver a successful medical office project in Oklahoma.
        </p>
      </section>

      <MarqueeBanner />

      {/* Chapters */}
      {chapters.map((ch, i) => (
        <section key={i} style={{ display: "grid", gridTemplateColumns: "3fr 9fr", borderBottom: "4px solid #0B061B", minHeight: "200px" }}>
          <div style={{
            padding: "4rem 3rem", borderRight: "4px solid #0B061B",
            background: i % 2 === 0 ? "#F7F4F7" : "#fff",
            display: "flex", flexDirection: "column", justifyContent: "flex-start",
          }}>
            <div style={{ fontSize: "3rem", fontWeight: 900, color: "#FF4800", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: "1rem" }}>{ch.n}</div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{ch.title}</h2>
          </div>
          <div style={{ padding: "4rem 3rem", display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", margin: 0 }}>{ch.content}</p>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ display: "grid", gridTemplateColumns: "8fr 4fr", borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "5rem 4rem", borderRight: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Start your<br /><span style={{ color: "#FF4800" }}>feasibility</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}>
            Contact UDGOK for a free conceptual budget and development consultation on your medical office project.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", flexDirection: "column", gap: "1rem" }}>
          <Link href="/contact" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
            Get Free Budget →
          </Link>
          <Link href="/preconstruction" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
            Preconstruction Services
          </Link>
        </div>
      </section>
    </>
  );
}
