"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MarqueeBanner from "@/components/MarqueeBanner";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";

const stats = [
  { number: "200+", label: "Projects Completed", orange: true },
  { number: "10+", label: "Years Experience", orange: false },
  { number: "$500M+", label: "Project Value", orange: true },
  { number: "98%", label: "Client Satisfaction", orange: false },
];

const services = [
  { code: "01", title: "Medical Office Construction", desc: "Fully compliant medical offices with specialized MEP systems, HIPAA-compliant layouts, and healthcare-grade finishes.", href: "/medical-office-design-build-tulsa" },
  { code: "02", title: "Dental Office Construction", desc: "Purpose-built dental suites with integrated plumbing, cabinetry, and optimized patient flow design.", href: "/dental-office-construction-tulsa" },
  { code: "03", title: "Oral Surgery Centers", desc: "Surgical-suite precision for oral surgery practices, including medical gas and advanced HVAC systems.", href: "/oral-surgeon-office-construction-tulsa" },
  { code: "04", title: "Medical Gas Installation", desc: "Certified NFPA 99 medical gas systems: oxygen, nitrous oxide, vacuum, and compressed air.", href: "/medical-gas-installation" },
  { code: "05", title: "Design-Build Integration", desc: "Single-source accountability from concept to completion — architecture, engineering, and construction unified.", href: "/design-build" },
  { code: "06", title: "Tenant Improvements", desc: "Commercial tenant build-outs with precision scheduling and minimal disruption to existing operations.", href: "/tenant-improvements" },
];

const locations = ["Tulsa, OK", "Broken Arrow", "Bixby", "Jenks", "Owasso", "Oklahoma City", "Dallas–FW, TX", "Sand Springs"];

const heroWords = ["Build", "Extra", "Ordin", "ary."];

export default function HomeUI() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ display: "grid", gridTemplateColumns: "5fr 7fr", minHeight: "calc(100vh - 80px)", borderBottom: "4px solid #0B061B" }}>
        {/* Left */}
        <div style={{ padding: "6rem 4rem", borderRight: "4px solid #0B061B", display: "flex", flexDirection: "column", justifyContent: "center", background: "#fff", position: "relative", overflow: "hidden" }}>
          {/* Subtle grid background */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(11,6,27,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(11,6,27,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: "2rem" }}
          >
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", color: "#FF4800", textTransform: "uppercase" }}>
              ◾ Tulsa, Oklahoma — Est. 2015
            </span>
          </motion.div>

          {/* Staggered word reveal */}
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", marginBottom: "3rem" }}>
            {heroWords.map((word, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
                  style={{ display: "block", color: i === 2 ? "#FF4800" : "#0B061B" }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#666", marginBottom: "3rem", maxWidth: "440px" }}
          >
            AI-powered Design-Build for medical, dental, and commercial construction across Oklahoma and Texas. From concept to certificate of occupancy, we deliver on time and on budget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.25rem 2.5rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Start Your Project →
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.25rem 2.5rem", background: "transparent", color: "#0B061B", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid #0B061B" }}>
                View Work
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — hero image */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image src="/images/lets-build-extraordinary.png" alt="Medical office construction by UDGOK" fill style={{ objectFit: "cover" }} priority />
          </motion.div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,72,0,0.12) 0%, rgba(11,6,27,0.2) 60%)" }} />
          {/* Grid overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ position: "absolute", bottom: "2rem", right: "2rem", background: "#FF4800", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Serving OK &amp; TX
          </motion.span>
        </div>
      </section>

      <MarqueeBanner />

      {/* ── STATS ── */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "4px solid #0B061B" }}>
        {stats.map((s, i) => (
          <AnimateIn key={i} delay={i * 0.1} style={{ padding: "4rem 2rem", borderRight: i < 3 ? "4px solid #0B061B" : "none", textAlign: "center" }}>
            <div style={{ fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, color: s.orange ? "#FF4800" : "#0B061B", marginBottom: "1rem" }}>
              <CountUp value={s.number} />
            </div>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666" }}>{s.label}</div>
          </AnimateIn>
        ))}
      </section>

      {/* ── SERVICES ── */}
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <AnimateIn style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", borderBottom: "4px solid #0B061B" }}>
          <div style={{ gridColumn: "span 2", padding: "2rem", borderRight: "4px solid #0B061B", background: "#F7F4F7", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#666" }}>Our Services</span>
          </div>
          <div style={{ gridColumn: "span 10", padding: "3rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Specialized Construction Services</h2>
            <Link href="/services" style={{ padding: "0.75rem 2rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>All Services →</Link>
          </div>
        </AnimateIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {services.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.07}>
              <motion.div whileHover={{ background: "#F7F4F7" }} transition={{ duration: 0.2 }}>
                <Link href={s.href} style={{ display: "block", padding: "3rem 2.5rem", borderRight: (i + 1) % 3 !== 0 ? "4px solid #0B061B" : "none", borderBottom: i < 3 ? "4px solid #0B061B" : "none", textDecoration: "none", color: "#0B061B" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#FF4800", marginBottom: "1.5rem" }}>{s.code}</div>
                  <motion.div whileHover={{ width: "60px" }} style={{ width: "40px", height: "4px", background: "#FF4800", marginBottom: "1.5rem", transition: "width 0.3s ease" }} />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{s.desc}</p>
                </Link>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── SERVICE AREAS BANNER ── */}
      <AnimateIn style={{ display: "grid", gridTemplateColumns: "auto 1fr", borderBottom: "4px solid #0B061B", minHeight: "80px" }}>
        <div style={{ padding: "1.5rem 2rem", borderRight: "4px solid #0B061B", background: "#0B061B", color: "#fff", display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap" }}>📍 Service Areas</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
          {locations.map((loc, i) => (
            <span key={loc} style={{ padding: "1.5rem 2rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", borderRight: i < locations.length - 1 ? "2px solid rgba(11,6,27,0.15)" : "none", color: "#0B061B" }}>{loc}</span>
          ))}
        </div>
      </AnimateIn>

      {/* ── PROJECTS CTA ── */}
      <section style={{ display: "grid", gridTemplateColumns: "7fr 5fr", borderBottom: "4px solid #0B061B", minHeight: "400px" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <motion.div
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image src="/images/medical-office-design-build.png" alt="Medical office project" fill style={{ objectFit: "cover" }} />
          </motion.div>
          <div style={{ position: "absolute", inset: 0, background: "rgba(11,6,27,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <AnimateIn direction="left" style={{ padding: "5rem 4rem", borderLeft: "4px solid #0B061B", display: "flex", flexDirection: "column", justifyContent: "center", background: "#0B061B", color: "#fff" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", color: "#FF4800", textTransform: "uppercase", marginBottom: "2rem" }}>Our Work</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: "2rem" }}>
            Built for Healthcare.<br /><span style={{ color: "#FF4800" }}>Built to Last.</span>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: "3rem" }}>
            Explore our portfolio of completed medical, dental, and commercial construction projects across Oklahoma and Texas.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ alignSelf: "flex-start" }}>
            <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.25rem 2.5rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              View Projects →
            </Link>
          </motion.div>
        </AnimateIn>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <AnimateIn style={{ borderBottom: "4px solid #0B061B", padding: "3rem 2rem" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Our Design-Build Process</h2>
        </AnimateIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { n: "01", t: "Discovery", d: "We study your program, site, and budget to align goals before any design begins." },
            { n: "02", t: "Design", d: "Our in-house architects develop construction-ready documents in tandem with cost estimates." },
            { n: "03", t: "Construction", d: "Self-perform crews and vetted subs execute to tight schedules with weekly owner updates." },
            { n: "04", t: "Commissioning", d: "We walk every system—MEP, medical gas, IT—before handing you the keys." },
          ].map((step, i) => (
            <AnimateIn key={i} delay={i * 0.1} style={{ padding: "4rem 2.5rem", borderRight: i < 3 ? "4px solid #0B061B" : "none" }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div style={{ fontSize: "3rem", fontWeight: 900, color: "#FF4800", marginBottom: "1.5rem", letterSpacing: "-0.05em" }}>{step.n}</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem", textTransform: "uppercase" }}>{step.t}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{step.d}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ display: "grid", gridTemplateColumns: "8fr 4fr", borderBottom: "4px solid #0B061B" }}>
        <AnimateIn style={{ padding: "6rem 4rem", borderRight: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2.5rem,5vw,5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: "2rem", textTransform: "uppercase" }}>
            Ready to start<br />your <span style={{ color: "#FF4800" }}>project?</span>
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#666", maxWidth: "600px" }}>
            Reach out for a free consultation. We serve medical and commercial clients from initial planning through final occupancy.
          </p>
        </AnimateIn>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem", flexDirection: "column", gap: "1.5rem" }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: "100%" }}>
            <Link href="/contact" style={{ display: "block", padding: "1.5rem 3rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", width: "100%" }}>
              Get a Free Estimate
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: "100%" }}>
            <Link href="tel:+19185203823" style={{ display: "block", padding: "1.5rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em", textAlign: "center", width: "100%" }}>
              (918) 520-3823
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
