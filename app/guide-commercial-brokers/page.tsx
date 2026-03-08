import type { Metadata } from "next";
import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";

export const metadata: Metadata = {
  title: "Commercial Broker's Construction Guide | UDGOK",
  description: "A construction guide for commercial real estate brokers in Oklahoma. Help your healthcare and commercial tenants understand TI costs, timelines, and what to ask their contractor.",
  alternates: { canonical: "https://udgok.com/guide-commercial-brokers" },
};

const chapters = [
  {
    n: "01",
    title: "Understanding TI Allowances",
    content: "Tenant improvement allowances are typically negotiated as a dollar amount per square foot of leasable area. In Tulsa's current market, TI allowances for medical office range from $80-140/SF, while standard commercial office runs $50-90/SF. Dental offices require $120-180/SF due to plumbing, medical gas, and equipment rough-in requirements. Help your clients understand that TI allowances that sound generous may still leave them funding a significant gap — especially for healthcare tenants with specialized build-out needs.",
  },
  {
    n: "02",
    title: "Construction Timelines for Healthcare Tenants",
    content: "Medical and dental construction takes longer than standard commercial build-outs. A standard office TI in an existing shell runs 60-90 days from permit. A dental office runs 90-120 days. A medical office with exam rooms, nurse stations, and specialized MEP runs 120-150 days. An oral surgery center can run 6-9 months. These timelines start after permit issuance — add 30-60 days for plan review in Tulsa. Factor construction time into your lease commencement negotiations so your client isn't paying double rent during build-out.",
  },
  {
    n: "03",
    title: "Lease Language That Protects Your Clients",
    content: "Key lease provisions for construction: (1) Landlord work vs. tenant work — be explicit about who delivers what before TI commences. (2) Permit contingency — include a clause that delays rent commencement if permits are delayed beyond a defined period. (3) TI disbursement — understand the landlord's inspection and disbursement process before your client starts spending. (4) Allowance for healthcare-specific items — some landlords exclude medical gas, plumbing upgrades, or electrical service increases from TI reimbursement.",
  },
  {
    n: "04",
    title: "What to Look for in a Healthcare GC",
    content: "Not every commercial contractor can build a dental or medical office. Look for: (1) ASSE 6010 certified medical gas installers on staff or under contract. (2) Direct experience with dental chair rough-in, operatory plumbing, and equipment coordination. (3) Knowledge of NFPA 99 and relevant healthcare codes. (4) References from dental equipment vendors and practice management consultants — they see the work at handoff. (5) A superintendent who has built at least 10 dental offices, not a GC who built one and called it a specialty.",
  },
  {
    n: "05",
    title: "Representing Healthcare Tenants",
    content: "Healthcare tenants require a broker who understands their world. Key considerations: parking (medical uses need 5:1,000, dental even more), patient access and ADA compliance, utility capacity (dental uses 200A 3-phase minimum per operatory), HVAC requirements (dental sterilization rooms need dedicated exhaust), and signage visibility for patient-facing practices. The right building for a CPA is the wrong building for a dental group — understand the operational requirements before you show properties.",
  },
  {
    n: "06",
    title: "Working with UDGOK on Your Deals",
    content: "UDGOK is a resource for brokers representing healthcare and commercial tenants. We'll provide free budget consultation during your deal-making process so your clients understand true build-out costs before signing a lease. We participate in landlord-tenant negotiations to help structure TI allowances appropriately. And when the lease is signed, we deliver on time — which protects your reputation as the broker who brought a great tenant that executed without drama. Call us early, not after the lease is signed.",
  },
];

export default function GuideBrokersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0B061B", padding: "8rem 4rem 6rem", borderBottom: "4px solid #0B061B" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", color: "#FF4800", textTransform: "uppercase" }}>◾ Broker Resource</span>
        <h1 style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", color: "#fff", marginTop: "2rem", marginBottom: "2rem" }}>
          The Commercial<br />Broker&apos;s Guide to<br /><span style={{ color: "#FF4800" }}>Construction</span>
        </h1>
        <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "600px" }}>
          Everything a Tulsa commercial real estate broker needs to know to better serve healthcare and commercial tenants through their build-out process.
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
            Have a deal<br /><span style={{ color: "#FF4800" }}>in progress?</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}>
            Bring UDGOK in early. We&apos;ll provide a free budget consultation that helps your deal close — and close right.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", flexDirection: "column", gap: "1rem" }}>
          <Link href="/contact" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
            Talk to Our Team →
          </Link>
          <Link href="tel:+19185203823" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
            (918) 520-3823
          </Link>
        </div>
      </section>
    </>
  );
}
