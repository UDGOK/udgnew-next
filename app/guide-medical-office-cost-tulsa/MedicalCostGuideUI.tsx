"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import FDADeviceSearch from "@/components/FDADeviceSearch";

/* ── Reusable sub-components ── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
    <div style={{ width: 28, height: 2, background: "#FF4800" }} />
    <span style={{ color: "#FF4800", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>{children}</span>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.5rem", textAlign: "center" }}
  >
    <div style={{ color: "#FF4800", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.03em" }}>{value}</div>
    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem" }}>{label}</div>
  </motion.div>
);

/* Cost bar component */
const CostBar = ({ label, percent, amount, delay }: { label: string; percent: number; amount: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    style={{ marginBottom: "1rem" }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
      <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600 }}>{label}</span>
      <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>{amount}</span>
    </div>
    <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "4px", height: 8, overflow: "hidden" }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: "100%", background: `linear-gradient(90deg, #FF4800, #FF6B2B)`, borderRadius: "4px" }}
      />
    </div>
    <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", marginTop: "0.15rem" }}>{percent}% of total</div>
  </motion.div>
);

/* FAQ Accordion */
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600, paddingRight: "1rem" }}>{q}</span>
        <span style={{ color: "#FF4800", fontSize: "1.4rem", fontWeight: 300, flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}>+</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.7, paddingBottom: "1.25rem" }}>{a}</p>
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════ */
export default function MedicalCostGuideUI() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const costData = [
    { type: "Primary Care Office", range: "$150 – $220/sf", size: "2,000 – 4,000 SF", total: "$300K – $880K", highlight: false },
    { type: "Multi-Specialty Clinic", range: "$220 – $300/sf", size: "3,000 – 6,000 SF", total: "$660K – $1.8M", highlight: true },
    { type: "Urgent Care / Walk-in", range: "$180 – $260/sf", size: "2,500 – 4,000 SF", total: "$450K – $1.04M", highlight: false },
    { type: "Ambulatory Surgery Center", range: "$300 – $500/sf", size: "5,000 – 15,000 SF", total: "$1.5M – $7.5M", highlight: false },
    { type: "Imaging / Radiology Center", range: "$280 – $400/sf", size: "3,000 – 8,000 SF", total: "$840K – $3.2M", highlight: false },
  ];

  const timelinePhases = [
    { phase: "01", title: "Pre-Design", duration: "2–4 weeks", items: ["Site selection & feasibility", "Budget development", "Needs assessment"] },
    { phase: "02", title: "Design & Engineering", duration: "6–10 weeks", items: ["Architectural plans", "MEP engineering", "Equipment planning"] },
    { phase: "03", title: "Permitting", duration: "3–6 weeks", items: ["Building permit", "Health department review", "State plan review (ASCs)"] },
    { phase: "04", title: "Construction", duration: "12–20 weeks", items: ["Demo & framing", "MEP rough-in", "Finishes & equipment install"] },
    { phase: "05", title: "Commissioning", duration: "2–3 weeks", items: ["Equipment testing", "Final inspections", "Certificate of occupancy"] },
  ];

  return (
    <main style={{ background: "#0B061B", color: "#fff", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "8rem 2rem 4rem" }}>
        <motion.div style={{ opacity: heroOpacity, position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 20%, rgba(255,72,0,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "900px", margin: "0 auto" }}>
          <SectionLabel>2026 Cost Guide</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "1.5rem" }}
          >
            Cost to Build a Medical Office in <span style={{ color: "#FF4800" }}>Tulsa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.95rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "650px", marginBottom: "2rem" }}
          >
            Data-backed pricing from 100+ healthcare projects delivered in Oklahoma & Texas. Updated for 2026 material costs and labor rates.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
          >
            {["Published March 1, 2026", "Last Updated June 13, 2026", "8 Min Read", "By Zack H. (Lead Estimator / Project Manager)"].map((tag) => (
              <span key={tag} style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: tag.startsWith("By ") ? "#FF4800" : "rgba(255,255,255,0.5)" }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TL;DR ── */}
      <section style={{ padding: "0 2rem 4rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: "rgba(255,72,0,0.06)", border: "1px solid rgba(255,72,0,0.2)", borderRadius: "1rem", padding: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "1rem" }}>⚡</span>
            <span style={{ color: "#FF4800", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>TL;DR Summary</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
            A <strong style={{ color: "#fff" }}>3,000 SF medical office in Tulsa</strong> costs <strong style={{ color: "#FF4800" }}>$450,000–$1,050,000</strong> in construction ($150–$350/sq ft) depending on specialty. Primary care offices run $150–$220/sf, while ambulatory surgery centers reach $300–$500/sf. Budget an additional $100K–$400K for medical equipment. Design-build delivery saves 10–15% vs. traditional bid. Timeline: 5–8 months from design to move-in.
          </p>
        </motion.div>
      </section>

      {/* ── STAT CARDS ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
          <StatCard value="$150–$350" label="Per Sq Ft" />
          <StatCard value="100+" label="Projects Delivered" />
          <StatCard value="5–8 mo" label="Avg. Timeline" />
          <StatCard value="< 3%" label="Avg. Change Order" />
        </div>
      </section>

      {/* ── COST TABLE ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Cost by Facility Type</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Medical Office Construction Costs <span style={{ color: "#FF4800" }}>Tulsa 2026</span>
        </h2>

        <div style={{ overflowX: "auto", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
            <thead>
              <tr style={{ background: "rgba(255,72,0,0.1)" }}>
                {["Facility Type", "Cost/SF", "Typical Size", "Total Range"].map((h) => (
                  <th key={h} style={{ padding: "1rem 1.25rem", textAlign: "left", color: "#FF4800", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {costData.map((row, i) => (
                <motion.tr
                  key={row.type}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: row.highlight ? "rgba(255,72,0,0.04)" : "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = row.highlight ? "rgba(255,72,0,0.04)" : "transparent")}
                >
                  <td style={{ padding: "1rem 1.25rem", fontWeight: 700, fontSize: "0.9rem" }}>{row.type}</td>
                  <td style={{ padding: "1rem 1.25rem", color: "#FF4800", fontWeight: 700, fontSize: "0.9rem" }}>{row.range}</td>
                  <td style={{ padding: "1rem 1.25rem", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>{row.size}</td>
                  <td style={{ padding: "1rem 1.25rem", fontWeight: 700, fontSize: "0.9rem" }}>{row.total}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem", marginTop: "0.75rem" }}>* Excludes medical equipment, furniture, and IT infrastructure. Based on UDGOK project data, Tulsa metro, 2024–2026.</p>
      </section>

      {/* ── COST BREAKDOWN BAR CHART ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Where Your Money Goes</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Cost Breakdown — <span style={{ color: "#FF4800" }}>3,000 SF Medical Office</span>
        </h2>
        <CostBar label="HVAC / Mechanical" percent={28} amount="$126,000 – $168,000" delay={0} />
        <CostBar label="Plumbing & Medical Gas" percent={20} amount="$90,000 – $120,000" delay={0.1} />
        <CostBar label="Electrical & Low-Voltage" percent={18} amount="$81,000 – $108,000" delay={0.2} />
        <CostBar label="Finishes (Flooring, Paint, Millwork)" percent={15} amount="$67,500 – $90,000" delay={0.3} />
        <CostBar label="Framing & Drywall" percent={10} amount="$45,000 – $60,000" delay={0.4} />
        <CostBar label="General Conditions & Overhead" percent={9} amount="$40,500 – $54,000" delay={0.5} />
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Project Timeline</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "3rem" }}>
          Build Phases — <span style={{ color: "#FF4800" }}>3,000 SF Medical Office</span>
        </h2>

        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* vertical line */}
          <div style={{ position: "absolute", left: "0.45rem", top: 0, bottom: 0, width: 2, background: "rgba(255,72,0,0.2)" }} />
          {timelinePhases.map((p, i) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ position: "relative", marginBottom: "2.5rem" }}
            >
              {/* dot */}
              <div style={{ position: "absolute", left: "-1.65rem", top: "0.2rem", width: 12, height: 12, borderRadius: "50%", background: "#FF4800", boxShadow: "0 0 12px rgba(255,72,0,0.4)" }} />
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "2rem", fontWeight: 900 }}>{p.phase}</span>
                <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", margin: 0 }}>{p.title}</h3>
                <span style={{ color: "#FF4800", fontSize: "0.7rem", fontWeight: 700, background: "rgba(255,72,0,0.1)", padding: "0.2rem 0.6rem", borderRadius: "100px" }}>{p.duration}</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", listStyle: "none" }}>
                {p.items.map((item) => (
                  <li key={item} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.8, position: "relative", paddingLeft: "0.8rem" }}>
                    <span style={{ position: "absolute", left: 0, color: "#FF4800" }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── COMPLIANCE COSTS ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Compliance & Regulatory</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Hidden Costs <span style={{ color: "#FF4800" }}>Most Owners Miss</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
          {[
            { icon: "♿", title: "ADA Accessibility", cost: "$8K – $20K", desc: "Ramps, accessible restrooms, door widths, signage" },
            { icon: "🔒", title: "HIPAA Sound Isolation", cost: "$5K – $15K", desc: "STC-rated walls, white noise, acoustic seals" },
            { icon: "🌀", title: "ASHRAE 170 HVAC", cost: "$30K – $60K", desc: "Healthcare ventilation, pressure differentials, air changes" },
            { icon: "⚕️", title: "NFPA 99 Medical Gas", cost: "$25K – $80K", desc: "Oxygen, vacuum, air systems + ASSE certification" },
            { icon: "🏗️", title: "State Health Dept.", cost: "$2K – $5K", desc: "Plan review, inspections, certificate of occupancy" },
            { icon: "⚡", title: "Generator / UPS", cost: "$15K – $40K", desc: "Emergency power for imaging and critical systems" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.25rem", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,72,0,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 0.25rem" }}>{item.title}</h4>
              <div style={{ color: "#FF4800", fontSize: "1rem", fontWeight: 900, marginBottom: "0.3rem" }}>{item.cost}</div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LIVE FDA DEVICE SEARCH ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Live Equipment Data</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Research FDA-Cleared <span style={{ color: "#FF4800" }}>Medical Equipment</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0" }}>
          Browse 172,000+ FDA-cleared devices to plan your medical office equipment needs. All data pulled live from the U.S. Food &amp; Drug Administration.
        </p>
        <FDADeviceSearch
          defaultSearch="general hospital"
          heading="Search FDA 510(k) Database"
          subtitle="Real-time data from api.fda.gov — find cleared devices for your medical office"
        />
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Common Questions</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Frequently <span style={{ color: "#FF4800" }}>Asked</span>
        </h2>
        <FAQItem q="How much does it cost to build a 3,000 SF medical office in Tulsa?" a="A 3,000 SF medical office in Tulsa costs $450,000–$1,050,000 in construction ($150–$350/sq ft), depending on specialty. Primary care runs $150–$220/sf, multi-specialty $220–$300/sf, and ambulatory surgery centers $300–$500/sf. Budget an additional $100,000–$400,000 for medical equipment." />
        <FAQItem q="How long does it take to build a medical office in Tulsa?" a="A typical 3,000 SF medical office takes 4–6 months from permit to occupancy. Pre-construction (design, permits) adds 6–10 weeks. Ambulatory surgery centers can take 8–14 months due to AAAHC/state licensing requirements." />
        <FAQItem q="What are the biggest cost drivers in medical office construction?" a="The three biggest cost drivers are: (1) HVAC — healthcare HVAC with ASHRAE 170 compliance costs 25–35% more than standard commercial; (2) Medical gas systems — $25,000–$80,000 depending on number of stations; (3) Under-slab plumbing — $15,000–$30,000 for medical waste and specialty drainage." />
        <FAQItem q="Is design-build cheaper than traditional bid for medical offices?" a="Yes. Design-build delivery saves 10–15% versus traditional design-bid-build for medical offices through fewer change orders (our average is under 3%), faster schedules (20–30% faster), and single-source accountability. UDGOK has delivered 100+ healthcare facilities via design-build." />
        <FAQItem q="What compliance requirements affect medical office construction costs?" a="Key compliance costs include: ADA accessibility ($8,000–$20,000), HIPAA-compliant sound isolation ($5,000–$15,000), ASHRAE 170 healthcare ventilation ($30,000–$60,000 premium over standard), NFPA 99 medical gas ($25,000–$80,000), and Oklahoma state health department inspections ($2,000–$5,000)." />
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Related Services</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {[
            { href: "/medical-office-design-build-tulsa", title: "Medical Office Design-Build Tulsa", desc: "Turnkey medical office construction — our most popular service" },
            { href: "/medical-gas-installation", title: "Medical Gas Installation", desc: "ASSE-certified installation for O₂, N₂O, air, and vacuum" },
            { href: "/dental-office-construction-tulsa", title: "Dental Office Construction", desc: "80+ dental practices built across Oklahoma" },
            { href: "/preconstruction", title: "Preconstruction Services", desc: "Early-stage budgeting and constructability review" },
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
            Ready to Build Your <span style={{ color: "#FF4800" }}>Medical Office?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Get a 48-hour conceptual estimate from Oklahoma&apos;s most experienced medical construction team.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ padding: "1rem 2.5rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "4px" }}>
              Get Free Estimate →
            </Link>
            <Link href="tel:+19185203823" style={{ padding: "1rem 2.5rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "4px" }}>
              📞 (918) 520-3823
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
