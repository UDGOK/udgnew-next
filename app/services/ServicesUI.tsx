"use client";
import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";

const healthcare = [
  { code: "01", title: "Medical Office Construction", desc: "Fully compliant medical offices with specialized MEP, HIPAA-compliant layouts, and healthcare-grade finishes.", href: "/medical-office-design-build-tulsa" },
  { code: "02", title: "Dental Office Construction", desc: "Purpose-built dental suites with operatory rough-in, plumbing, and equipment coordination.", href: "/dental-office-construction-tulsa" },
  { code: "03", title: "Oral Surgery Centers", desc: "AAAHC-ready surgical suites with medical gas, surgical HVAC, and recovery room design.", href: "/oral-surgeon-office-construction-tulsa" },
  { code: "04", title: "Eye Clinic Construction", desc: "Ophthalmology and optometry offices with dark rooms, laser suites, and precision lane layout.", href: "/eye-clinic-construction-tulsa" },
  { code: "05", title: "Medical Gas Installation", desc: "NFPA 99 certified oxygen, nitrous oxide, vacuum, and medical air systems with third-party verification.", href: "/medical-gas-installation" },
];

const commercial = [
  { code: "06", title: "Design-Build", desc: "Integrated design and construction under one contract — faster delivery, fewer surprises, single accountability.", href: "/design-build" },
  { code: "07", title: "Tenant Improvements", desc: "Fast-track commercial build-outs for medical, dental, retail, and office spaces.", href: "/tenant-improvements" },
  { code: "08", title: "Convenience Stores", desc: "Ground-up c-stores, fuel canopies, food service kitchens, and DEP-compliant fuel systems.", href: "/convenience-store-construction-tulsa" },
  { code: "09", title: "Shopping Centers", desc: "Multi-tenant retail centers and strip plazas built for long-term leasing performance.", href: "/shopping-center-construction-tulsa" },
  { code: "10", title: "Preconstruction", desc: "Early budgeting, constructability review, and value engineering before a shovel hits the ground.", href: "/preconstruction" },
  { code: "11", title: "Virtual Design & Construction", desc: "BIM modeling, clash detection, and digital twin technology for complex projects.", href: "/virtual-design-construction" },
];

function ServiceCard({ code, title, desc, href }: { code: string; title: string; desc: string; href: string }) {
  return (
    <Link href={href} style={{ display: "block", padding: "3rem 2.5rem", textDecoration: "none", color: "#0B061B", transition: "background 0.2s", borderBottom: "4px solid #0B061B" }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#F7F4F7")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}>
      <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#FF4800", marginBottom: "1.5rem" }}>{code}</div>
      <div style={{ width: "40px", height: "4px", background: "#FF4800", marginBottom: "1.5rem" }} />
      <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "-0.02em" }}>{title}</h3>
      <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{desc}</p>
      <div style={{ marginTop: "1.5rem", fontSize: "0.8rem", fontWeight: 700, color: "#FF4800", letterSpacing: "0.05em" }}>Learn More →</div>
    </Link>
  );
}

export default function ServicesUI() {
  return (
    <>
      <section style={{ background: "#0B061B", padding: "8rem 4rem 6rem", borderBottom: "4px solid #0B061B" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", color: "#FF4800", textTransform: "uppercase" }}>◾ What We Build</span>
        <h1 style={{ fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", color: "#fff", marginTop: "2rem", marginBottom: "2rem" }}>
          All<br /><span style={{ color: "#FF4800" }}>Services</span>
        </h1>
        <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "600px" }}>
          From single-operatory dental suites to multi-physician medical campuses — UDGOK delivers specialized construction across every healthcare and commercial sector we serve.
        </p>
      </section>
      <MarqueeBanner />
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "3rem 2rem", borderBottom: "4px solid #0B061B", display: "flex", alignItems: "center", gap: "2rem" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>Healthcare</span>
          <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Healthcare Construction</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {healthcare.map((s, i) => (
            <div key={i} style={{ borderRight: (i + 1) % 3 !== 0 ? "4px solid #0B061B" : "none" }}>
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </section>
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "3rem 2rem", borderBottom: "4px solid #0B061B", display: "flex", alignItems: "center", gap: "2rem" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>Commercial</span>
          <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Commercial Construction</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {commercial.map((s, i) => (
            <div key={i} style={{ borderRight: (i + 1) % 3 !== 0 ? "4px solid #0B061B" : "none" }}>
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "8fr 4fr", borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "5rem 4rem", borderRight: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Not sure where<br />to <span style={{ color: "#FF4800" }}>start?</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}>Tell us about your project and we&apos;ll match you with the right service and team.</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", flexDirection: "column", gap: "1rem" }}>
          <Link href="/contact" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
            Start Your Project →
          </Link>
          <Link href="tel:+19185203823" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
            (918) 520-3823
          </Link>
        </div>
      </section>
    </>
  );
}
