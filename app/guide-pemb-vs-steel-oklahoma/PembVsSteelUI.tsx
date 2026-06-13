"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import FDADeviceSearch from "@/components/FDADeviceSearch";

/* ── Shared helpers ── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
    <div style={{ width: 28, height: 2, background: "#FF4800" }} />
    <span style={{ color: "#FF4800", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>{children}</span>
  </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600, paddingRight: "1rem" }}>{q}</span>
        <span style={{ color: "#FF4800", fontSize: "1.4rem", fontWeight: 300, flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}>+</span>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.7, paddingBottom: "1.25rem" }}>{a}</p>
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════════════════ */
export default function PembVsSteelUI() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  /* Interactive toggle */
  const [view, setView] = useState<"pemb" | "steel">("pemb");

  const comparison = [
    { criteria: "Cost Per Square Foot", pemb: "$18 – $35/sf", steel: "$30 – $60/sf", winner: "pemb" as const },
    { criteria: "Construction Timeline", pemb: "8 – 16 weeks", steel: "16 – 30 weeks", winner: "pemb" as const },
    { criteria: "10,000 SF Warehouse Cost", pemb: "$180K – $350K", steel: "$300K – $600K", winner: "pemb" as const },
    { criteria: "Clear Span Capability", pemb: "Up to 200 ft", steel: "Unlimited", winner: "steel" as const },
    { criteria: "Design Flexibility", pemb: "Moderate", steel: "High", winner: "steel" as const },
    { criteria: "Multi-Story Capability", pemb: "1–2 stories", steel: "Unlimited", winner: "steel" as const },
    { criteria: "Expansion Ease", pemb: "Endwall expansion", steel: "Any direction", winner: "steel" as const },
    { criteria: "Energy Efficiency", pemb: "Good (insulated panels)", steel: "Very good (custom envelope)", winner: "steel" as const },
    { criteria: "Wind Load Rating", pemb: "130 mph (IBC 2021)", steel: "130+ mph", winner: "tie" as const },
    { criteria: "Crane Capacity", pemb: "Up to 30 tons", steel: "50+ tons", winner: "steel" as const },
    { criteria: "Maintenance", pemb: "Low — factory finish", steel: "Moderate — field paint", winner: "pemb" as const },
    { criteria: "Resale Value", pemb: "Standard", steel: "Premium", winner: "steel" as const },
  ];

  const pembWins = comparison.filter((c) => c.winner === "pemb").length;
  const steelWins = comparison.filter((c) => c.winner === "steel").length;

  const okData = [
    { factor: "Wind Speed (IBC)", value: "115 – 130 mph", note: "Higher in western OK" },
    { factor: "Seismic Design Category", value: "A – C", note: "Most of OK is B" },
    { factor: "Frost Depth", value: "18 – 24 inches", note: "Foundation design impact" },
    { factor: "Snow Load", value: "10 – 20 psf", note: "Higher in NE Oklahoma" },
    { factor: "Energy Code", value: "IECC 2021", note: "R-19 walls, R-30 roof min." },
    { factor: "Avg. Labor Rate", value: "$28 – $45/hr", note: "Ironworkers, Tulsa metro" },
  ];

  return (
    <main style={{ background: "#0B061B", color: "#fff", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "8rem 2rem 4rem" }}>
        <motion.div style={{ opacity: heroOpacity, position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 40%, rgba(255,72,0,0.06) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "900px", margin: "0 auto" }}>
          <SectionLabel>2026 Comparison Guide</SectionLabel>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "1.5rem" }}
          >
            PEMB vs Conventional Steel for <span style={{ color: "#FF4800" }}>Oklahoma</span> Warehouses
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.95rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "650px", marginBottom: "2rem" }}
          >
            Side-by-side cost, timeline, and performance comparison with real project data from Oklahoma&apos;s top industrial building contractor.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
          >
            {["12-Point Comparison", "Oklahoma-Specific Data", "Published March 1, 2026", "Last Updated June 13, 2026", "By Zack H. (Lead Estimator / Project Manager)"].map((tag) => (
              <span key={tag} style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: tag.startsWith("By ") ? "#FF4800" : "rgba(255,255,255,0.5)" }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TL;DR ── */}
      <section style={{ padding: "0 2rem 4rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: "rgba(255,72,0,0.06)", border: "1px solid rgba(255,72,0,0.2)", borderRadius: "1rem", padding: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "1rem" }}>⚡</span>
            <span style={{ color: "#FF4800", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>TL;DR Summary</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#FF4800" }}>PEMBs cost 35–50% less</strong> than conventional steel ($18–$35/sf vs. $30–$60/sf) and build <strong style={{ color: "#FF4800" }}>40–60% faster</strong> (8–16 weeks vs. 16–30 weeks). Choose PEMB for standard warehouses, storage, and manufacturing under 100,000 SF. Choose conventional steel for complex architecture, multi-story, heavy crane loads (50+ tons), or unique column spacing.
          </p>
        </motion.div>
      </section>

      {/* ── SCOREBOARD ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1.5rem", alignItems: "center", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ background: "rgba(255,72,0,0.06)", border: "1px solid rgba(255,72,0,0.2)", borderRadius: "1.5rem", padding: "2rem 1rem" }}
          >
            <div style={{ fontSize: "3rem", fontWeight: 900, color: "#FF4800" }}>{pembWins}</div>
            <div style={{ color: "#FF4800", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>PEMB Wins</div>
          </motion.div>
          <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "1.5rem", fontWeight: 900 }}>VS</div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1.5rem", padding: "2rem 1rem" }}
          >
            <div style={{ fontSize: "3rem", fontWeight: 900 }}>{steelWins}</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Steel Wins</div>
          </motion.div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Head-to-Head Comparison</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "1rem" }}>
          12-Point <span style={{ color: "#FF4800" }}>Decision Matrix</span>
        </h2>

        {/* Toggle */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
          {(["pemb", "steel"] as const).map((v) => (
            <button key={v} onClick={() => setView(v)}
              style={{ padding: "0.5rem 1.25rem", borderRadius: "100px", border: "1px solid", borderColor: view === v ? "#FF4800" : "rgba(255,255,255,0.1)", background: view === v ? "rgba(255,72,0,0.15)" : "transparent", color: view === v ? "#FF4800" : "rgba(255,255,255,0.5)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s" }}
            >
              {v === "pemb" ? "🏗️ PEMB" : "🔩 Conventional Steel"}
            </button>
          ))}
        </div>

        <div style={{ overflowX: "auto", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 550 }}>
            <thead>
              <tr style={{ background: "rgba(255,72,0,0.1)" }}>
                {["Criteria", "PEMB", "Conventional Steel", "Winner"].map((h) => (
                  <th key={h} style={{ padding: "0.9rem 1rem", textAlign: "left", color: "#FF4800", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <motion.tr key={row.criteria} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: row.winner === view ? "rgba(255,72,0,0.04)" : "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = row.winner === view ? "rgba(255,72,0,0.04)" : "transparent")}
                >
                  <td style={{ padding: "0.8rem 1rem", fontWeight: 600, fontSize: "0.82rem" }}>{row.criteria}</td>
                  <td style={{ padding: "0.8rem 1rem", color: row.winner === "pemb" ? "#FF4800" : "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: row.winner === "pemb" ? 700 : 400 }}>{row.pemb}</td>
                  <td style={{ padding: "0.8rem 1rem", color: row.winner === "steel" ? "#FF4800" : "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: row.winner === "steel" ? 700 : 400 }}>{row.steel}</td>
                  <td style={{ padding: "0.8rem 1rem" }}>
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, padding: "0.15rem 0.5rem", borderRadius: "100px", background: row.winner === "pemb" ? "rgba(255,72,0,0.15)" : row.winner === "steel" ? "rgba(255,255,255,0.05)" : "rgba(255,200,0,0.1)", color: row.winner === "pemb" ? "#FF4800" : row.winner === "steel" ? "#fff" : "#FFD700" }}>
                      {row.winner === "pemb" ? "PEMB" : row.winner === "steel" ? "Steel" : "Tie"}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── COST COMPARISON VISUAL ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Cost Comparison</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          10,000 SF Warehouse — <span style={{ color: "#FF4800" }}>Oklahoma</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {/* PEMB Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: "rgba(255,72,0,0.04)", border: "2px solid rgba(255,72,0,0.2)", borderRadius: "1.5rem", padding: "2rem", position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: 12, right: 12, background: "#FF4800", color: "#fff", fontSize: "0.6rem", fontWeight: 700, padding: "0.25rem 0.6rem", borderRadius: "100px", letterSpacing: "0.1em" }}>BEST VALUE</div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "1.5rem" }}>🏗️ Pre-Engineered Metal</h3>
            <div style={{ color: "#FF4800", fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>$180K – $350K</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", marginBottom: "1.5rem" }}>$18 – $35 per square foot</div>
            {["8–16 week delivery", "Factory-fabricated components", "20-year structural warranty", "Low maintenance finish", "Endwall expansion ready"].map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                <span style={{ color: "#00FF88", fontSize: "0.75rem", marginTop: "0.15rem" }}>✓</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem" }}>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Conventional Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1.5rem", padding: "2rem" }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "1.5rem" }}>🔩 Conventional Steel</h3>
            <div style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>$300K – $600K</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", marginBottom: "1.5rem" }}>$30 – $60 per square foot</div>
            {["16–30 week delivery", "Custom field-fabricated", "Unlimited design flexibility", "Multi-story capable", "Heavy crane support (50+ tons)"].map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginTop: "0.15rem" }}>✓</span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OKLAHOMA-SPECIFIC DATA ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Oklahoma Building Data</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Design Factors for <span style={{ color: "#FF4800" }}>Oklahoma</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
          {okData.map((item, i) => (
            <motion.div key={item.factor} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.25rem", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,72,0,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <h4 style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", margin: "0 0 0.4rem" }}>{item.factor}</h4>
              <div style={{ color: "#FF4800", fontSize: "1.2rem", fontWeight: 900, marginBottom: "0.25rem" }}>{item.value}</div>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", margin: 0 }}>{item.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FDA DEVICE SEARCH ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Equipment Planning</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          FDA-Cleared <span style={{ color: "#FF4800" }}>Warehouse Equipment</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0" }}>
          If your warehouse stores FDA-regulated medical devices, search the 510(k) database to understand equipment and storage requirements.
        </p>
        <FDADeviceSearch
          defaultSearch="general hospital"
          heading="Search FDA Device Database"
          subtitle="Plan your medical warehouse — real-time data from the FDA 510(k) clearance database"
        />
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Common Questions</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Frequently <span style={{ color: "#FF4800" }}>Asked</span>
        </h2>
        <FAQItem q="How much cheaper is a PEMB than conventional steel?" a="Pre-engineered metal buildings cost $18–$35/sf versus $30–$60/sf for conventional steel — a 35–50% savings. For a 10,000 SF warehouse, that's $180K–$350K (PEMB) vs $300K–$600K (conventional). Factory-fabricated components reduce field labor by 40–60%." />
        <FAQItem q="How fast can a PEMB be built compared to conventional steel?" a="PEMBs erect 40–60% faster. A 10,000 SF PEMB warehouse: 8–16 weeks. Conventional steel: 16–30 weeks. Factory fabrication eliminates on-site welding and reduces weather delays." />
        <FAQItem q="Are PEMBs strong enough for Oklahoma weather?" a="Yes. Modern PEMBs are engineered to IBC 2021 wind loads (115–130 mph for most Oklahoma locations) and seismic categories. They carry 20-year structural warranties and are designed for your site's specific conditions." />
        <FAQItem q="When should I choose conventional steel over a PEMB?" a="Choose conventional for: complex architectural facades, multi-story (3+), heavy crane loads (50+ tons), unique column spacing, or ASCE 7-22 special seismic detailing. Standard warehouses under 100,000 SF — PEMB is almost always better value." />
        <FAQItem q="Can a PEMB warehouse be expanded later?" a="Yes. PEMBs expand via endwall removal — add bays in 20–30 ft increments. UDGOK designs expansion capability into every PEMB, including oversized footings and utility rough-in for future bays." />
      </section>

      {/* ── RELATED LINKS ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Related Services</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {[
            { href: "/pre-engineered-metal-buildings-tulsa", title: "Pre-Engineered Metal Buildings Tulsa", desc: "PEMB design-build from foundation to finish" },
            { href: "/warehouse-construction-tulsa", title: "Warehouse Construction Tulsa", desc: "Custom warehouses and distribution centers" },
            { href: "/industrial-buildings-tulsa", title: "Industrial Buildings Tulsa", desc: "Full industrial construction services" },
            { href: "/guide-medical-office-cost-tulsa", title: "Medical Office Cost Guide 2026", desc: "Cost data from 100+ healthcare projects" },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.25rem", textDecoration: "none", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,72,0,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <h4 style={{ color: "#FF4800", fontSize: "0.85rem", fontWeight: 700, margin: "0 0 0.3rem" }}>{link.title}</h4>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", margin: 0 }}>{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "6rem 2rem", textAlign: "center", background: "rgba(255,72,0,0.04)", borderTop: "1px solid rgba(255,72,0,0.1)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Ready to Build Your <span style={{ color: "#FF4800" }}>Warehouse?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Get a 48-hour conceptual estimate for your PEMB or steel building project in Oklahoma.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ padding: "1rem 2.5rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "4px" }}>Get Free Estimate →</Link>
            <Link href="tel:+19185203823" style={{ padding: "1rem 2.5rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "4px" }}>📞 (918) 520-3823</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
