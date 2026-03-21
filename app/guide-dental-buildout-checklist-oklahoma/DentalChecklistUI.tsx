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
export default function DentalChecklistUI() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  /* Operatory cost calculator */
  const [chairs, setChairs] = useState(4);
  const infraLow = chairs * 10000;
  const infraHigh = chairs * 18000;
  const equipLow = chairs * 20000;
  const equipHigh = chairs * 60000;
  const totalLow = infraLow + equipLow;
  const totalHigh = infraHigh + equipHigh;

  const phases = [
    { num: "01", title: "Pre-Design Planning", duration: "2–4 weeks", color: "#FF4800",
      tasks: ["Secure practice financing (SBA / conventional)", "Select site — verify zoning for dental use", "Define operatory count + specialty scope", "Interview design-build contractors", "Establish construction budget ($140–$280/sf)"] },
    { num: "02", title: "Design & Engineering", duration: "4–8 weeks", color: "#FF6B2B",
      tasks: ["Architectural floor plan with operatory layouts", "MEP engineering (plumbing, HVAC, electrical)", "Equipment placement + utility coordination", "IT / network infrastructure plan", "Interior design — finishes, casework, signage"] },
    { num: "03", title: "Permits & Approvals", duration: "3–6 weeks", color: "#FF8F5A",
      tasks: ["Building permit application (city/county)", "Mechanical, plumbing, electrical permits", "Fire marshal review", "Health department review (nitrous / medical gas)", "State dental board notification"] },
    { num: "04", title: "Construction", duration: "10–16 weeks", color: "#FFA87A",
      tasks: ["Demolition & site prep", "Under-slab plumbing for each operatory", "Framing, drywall, insulation", "HVAC ductwork + medical gas rough-in", "Electrical, data cabling, fire alarm", "Finishes — flooring, paint, casework install", "Radiation shielding for X-ray / CBCT rooms"] },
    { num: "05", title: "Equipment & Commissioning", duration: "2–4 weeks", color: "#FFD4BF",
      tasks: ["Dental chair & delivery unit installation", "Compressor, vacuum, N₂O system startup", "ASSE 6030 medical gas verification", "IT, imaging, and PMS integration", "Final inspections + Certificate of Occupancy", "Staff orientation and move-in"] },
  ];

  const regulatoryItems = [
    { standard: "ADA", requirement: "Accessible entrance, restrooms, reception, operatory", impact: "Required" },
    { standard: "OSHA 29 CFR 1910", requirement: "Bloodborne pathogen, hazard comm, PPE compliance", impact: "Required" },
    { standard: "NFPA 99", requirement: "Medical gas installation for nitrous/oxygen", impact: "If sedation" },
    { standard: "ASHRAE 62.1", requirement: "Minimum ventilation for healthcare occupancy", impact: "Required" },
    { standard: "State Dental Board", requirement: "Facility notification, license posting", impact: "Required" },
    { standard: "Fire Marshal", requirement: "Sprinkler, alarm, egress, occupancy load", impact: "Required" },
    { standard: "Lead Shielding", requirement: "Lead-lined walls/doors for X-ray rooms", impact: "If imaging" },
    { standard: "HIPAA", requirement: "Sound isolation between operatories and reception", impact: "Required" },
  ];

  return (
    <main style={{ background: "#0B061B", color: "#fff", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "8rem 2rem 4rem" }}>
        <motion.div style={{ opacity: heroOpacity, position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 30%, rgba(255,72,0,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "900px", margin: "0 auto" }}>
          <SectionLabel>2026 Build-Out Checklist</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "1.5rem" }}
          >
            Dental Office Build-Out Checklist <span style={{ color: "#FF4800" }}>Oklahoma</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.95rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "650px", marginBottom: "2rem" }}
          >
            Every step from site selection to certificate of occupancy — based on 80+ dental practices built across Oklahoma.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
          >
            {["80+ Dental Offices Built", "5-Phase Process", "Updated March 2026"].map((tag) => (
              <span key={tag} style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{tag}</span>
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
            A <strong style={{ color: "#fff" }}>4–6 chair dental office in Oklahoma</strong> takes <strong style={{ color: "#FF4800" }}>5–7 months</strong> from design to move-in. Construction costs <strong style={{ color: "#FF4800" }}>$140–$280/sf</strong> ($350K–$840K for a 2,500 SF office). Each operatory needs $10K–$18K in infrastructure + $20K–$60K in equipment. Key milestones: financing → design (4–8 wks) → permits (3–6 wks) → construction (10–16 wks) → equipment install (2–4 wks).
          </p>
        </motion.div>
      </section>

      {/* ── INTERACTIVE PHASE CHECKLIST ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Build-Out Phases</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "3rem" }}>
          5-Phase <span style={{ color: "#FF4800" }}>Construction Roadmap</span>
        </h2>

        {phases.map((phase, pi) => (
          <motion.div
            key={phase.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: pi * 0.08 }}
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "1.25rem", padding: "clamp(1.25rem, 3vw, 2rem)", marginBottom: "1rem", borderLeft: `3px solid ${phase.color}`, transition: "border-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = phase.color)}
            onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = phase.color)}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "2.5rem", fontWeight: 900 }}>{phase.num}</span>
              <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", margin: 0 }}>{phase.title}</h3>
              <span style={{ color: phase.color, fontSize: "0.65rem", fontWeight: 700, background: `${phase.color}15`, padding: "0.2rem 0.6rem", borderRadius: "100px" }}>{phase.duration}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.4rem" }}>
              {phase.tasks.map((task) => (
                <div key={task} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", padding: "0.4rem 0" }}>
                  <span style={{ color: phase.color, fontSize: "0.7rem", marginTop: "0.2rem", flexShrink: 0 }}>☐</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", lineHeight: 1.5 }}>{task}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── OPERATORY COST CALCULATOR ── */}
      <section style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Interactive Calculator</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Per-Operatory <span style={{ color: "#FF4800" }}>Cost Estimator</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1.5rem", padding: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
              <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontWeight: 600 }}>Number of Operatories</label>
              <span style={{ color: "#FF4800", fontSize: "2rem", fontWeight: 900 }}>{chairs}</span>
            </div>
            <input
              type="range" min={2} max={12} value={chairs}
              onChange={(e) => setChairs(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#FF4800", height: "6px", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", marginTop: "0.25rem" }}>
              <span>2 chairs</span><span>12 chairs</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "1rem", padding: "1.25rem", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Infrastructure Cost</div>
              <div style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 900 }}>${(infraLow/1000).toFixed(0)}K – ${(infraHigh/1000).toFixed(0)}K</div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem", marginTop: "0.25rem" }}>Plumbing, electrical, data, air</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "1rem", padding: "1.25rem", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Equipment Cost</div>
              <div style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 900 }}>${(equipLow/1000).toFixed(0)}K – ${(equipHigh/1000).toFixed(0)}K</div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem", marginTop: "0.25rem" }}>Chairs, delivery, imaging</div>
            </div>
            <div style={{ background: "rgba(255,72,0,0.06)", borderRadius: "1rem", padding: "1.25rem", border: "1px solid rgba(255,72,0,0.15)" }}>
              <div style={{ color: "#FF4800", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Total Estimate</div>
              <div style={{ color: "#FF4800", fontSize: "1.3rem", fontWeight: 900 }}>${(totalLow/1000).toFixed(0)}K – ${(totalHigh/1000).toFixed(0)}K</div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem", marginTop: "0.25rem" }}>{chairs} operatories total</div>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", textAlign: "center", marginTop: "1rem" }}>
            Estimate based on UDGOK project data, Tulsa metro, 2024–2026. Excludes shell construction, HVAC, and finishes.
          </p>
        </motion.div>
      </section>

      {/* ── REGULATORY TABLE ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Regulatory Compliance</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Oklahoma <span style={{ color: "#FF4800" }}>Compliance Requirements</span>
        </h2>
        <div style={{ overflowX: "auto", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
            <thead>
              <tr style={{ background: "rgba(255,72,0,0.1)" }}>
                {["Standard", "Requirement", "Status"].map((h) => (
                  <th key={h} style={{ padding: "1rem 1.25rem", textAlign: "left", color: "#FF4800", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {regulatoryItems.map((item, i) => (
                <motion.tr key={item.standard} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <td style={{ padding: "0.9rem 1.25rem", fontWeight: 700, fontSize: "0.85rem" }}>{item.standard}</td>
                  <td style={{ padding: "0.9rem 1.25rem", color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>{item.requirement}</td>
                  <td style={{ padding: "0.9rem 1.25rem" }}>
                    <span style={{ padding: "0.2rem 0.6rem", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 700, background: item.impact === "Required" ? "rgba(0,255,136,0.1)" : "rgba(255,200,0,0.1)", color: item.impact === "Required" ? "#00FF88" : "#FFD700" }}>{item.impact}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── LIVE FDA WIDGET ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Research Equipment</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          FDA-Cleared <span style={{ color: "#FF4800" }}>Dental Equipment</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0" }}>
          Search FDA&apos;s 510(k) database for cleared dental chairs, imaging systems, and operatory equipment.
        </p>
        <FDADeviceSearch
          defaultSearch="dental"
          heading="Search Dental Devices"
          subtitle="Live data from openFDA — dental chairs, imaging, instruments, and more"
        />
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Common Questions</SectionLabel>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Frequently <span style={{ color: "#FF4800" }}>Asked</span>
        </h2>
        <FAQItem q="How much does each dental operatory cost to build?" a="Each dental operatory costs $10,000–$18,000 in construction infrastructure (plumbing, electrical, data, compressed air). The dental chair and delivery units add another $20,000–$60,000 per operatory. Total per-chair investment: $30,000–$78,000." />
        <FAQItem q="How many operatories should a new dental practice have?" a="Most new practices open with 4–6 operatories in 1,800–3,000 SF. Start with what your practice plan supports (typically 4 active chairs) and rough-in plumbing/electrical for 2 future chairs. This costs $8,000–$12,000 extra vs. $40,000–$70,000 to build them later." />
        <FAQItem q="What permits are needed for dental construction in Oklahoma?" a="Oklahoma dental offices require: building permit (city/county), mechanical permit, plumbing permit, electrical permit, fire marshal approval, health department inspection (for nitrous/medical gas), and state dental board notification. Plan for 3–6 weeks of review." />
        <FAQItem q="Do dental offices need medical gas installation?" a="If your practice offers nitrous oxide sedation, you need NFPA 99-compliant medical gas installation with ASSE 6010-certified installers. This includes N₂O/O₂ manifold, piping, zone valves, alarms, and ASSE 6030 third-party verification. Cost: $15,000–$35,000." />
        <FAQItem q="How long does a dental office build-out take?" a="A standard 4–6 chair dental office takes 90–120 days of construction plus 4–8 weeks for design and permitting. Total: 5–7 months from signing a design-build contract to certificate of occupancy." />
      </section>

      {/* ── RELATED LINKS ── */}
      <section style={{ padding: "0 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Related Services</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {[
            { href: "/dental-office-construction-tulsa", title: "Dental Office Construction Tulsa", desc: "80+ dental offices delivered across Oklahoma" },
            { href: "/dental-construction-costs", title: "Dental Construction Cost Guide", desc: "Per-square-foot pricing and budget breakdown" },
            { href: "/medical-gas-installation", title: "Medical Gas Installation", desc: "ASSE-certified nitrous, oxygen, and vacuum systems" },
            { href: "/guide-medical-office-cost-tulsa", title: "Medical Office Cost Guide 2026", desc: "Cost data from 100+ medical projects delivered" },
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
            Ready to Build Your <span style={{ color: "#FF4800" }}>Dental Practice?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Get a 48-hour conceptual estimate from the team that&apos;s built 80+ dental offices across Oklahoma.
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
