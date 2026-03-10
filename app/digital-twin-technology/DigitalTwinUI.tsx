"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ─── Animated Section ─── */
function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stat Counter ─── */
function AnimatedStat({ value, suffix, label }: { value: string; suffix?: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ textAlign: "center" }}
    >
      <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "linear-gradient(135deg, #FF4800, #FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {value}{suffix}
      </div>
      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)", marginTop: "0.25rem" }}>{label}</div>
    </motion.div>
  );
}

/* ─── Interactive Tech Card ─── */
function TechCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: "2rem 1.5rem",
        background: hovered ? `linear-gradient(135deg, ${color}15, ${color}08)` : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? color + "40" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "20px",
        cursor: "default",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />
      )}
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
      <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{desc}</p>
    </motion.div>
  );
}

/* ─── Region Card ─── */
function RegionCard({ state, title, items, gradient }: { state: string; title: string; items: string[]; gradient: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      whileHover={{ y: -4 }}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div style={{ padding: "2rem 1.5rem", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: gradient }} />
        <div style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#FF4800", marginBottom: "0.35rem" }}>{state}</div>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>{title}</h3>
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : "3.5rem", opacity: expanded ? 1 : 0.7 }}
          transition={{ duration: 0.4 }}
          style={{ overflow: "hidden" }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {items.map((item, i) => (
              <li key={i} style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <span style={{ color: "#FF4800", fontWeight: 700, flexShrink: 0 }}>→</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginTop: "0.75rem", textAlign: "center" }}>
          {expanded ? "Click to collapse" : "Click to expand"}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Timeline Item ─── */
function TimelineItem({ year, title, desc }: { year: string; title: string; desc: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
    >
      <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(255,72,0,0.15), rgba(255,72,0,0.05))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,72,0,0.2)" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 900, color: "#FF4800" }}>{year}</span>
      </div>
      <div>
        <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", marginBottom: "0.25rem" }}>{title}</h4>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{desc}</p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export default function DigitalTwinUI() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const px = "clamp(1rem, 4vw, 3rem)";

  return (
    <div style={{ background: "#0B061B", color: "#fff", minHeight: "100vh" }}>

      {/* ─── HERO ─── */}
      <section style={{ position: "relative", overflow: "hidden", padding: `8rem ${px} 5rem` }}>
        {/* Parallax background glow */}
        <div style={{ position: "absolute", top: "-50%", left: "20%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,72,0,0.08) 0%, transparent 70%)", borderRadius: "50%", transform: `translateY(${scrollY * 0.15}px)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(80,120,255,0.05) 0%, transparent 70%)", borderRadius: "50%", transform: `translateY(${scrollY * -0.1}px)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "48px", height: "2px", background: "#FF4800" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#FF4800" }}>Construction Technology • March 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem", maxWidth: "800px" }}>
              The 2026 Guide to{" "}
              <span style={{ background: "linear-gradient(135deg, #FF4800, #FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Digital Twin Technology
              </span>
            </h1>
            <p data-speakable style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: "650px", marginBottom: "2rem" }}>
              How AI, IoT, and 3D virtual replicas are transforming commercial construction, energy, and smart cities across Texas, Oklahoma, and California.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>
              <span>📖 10 MIN READ</span>
              <span>•</span>
              <span>By UDGOK Intelligence</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: `0 ${px} 4rem` }}>
        <Section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px" }}>
            <AnimatedStat value="$48.2" suffix="B" label="Market by 2026" />
            <AnimatedStat value="52.7" suffix="%" label="Healthcare CAGR" />
            <AnimatedStat value="30" suffix="%" label="Cost Reduction" />
            <AnimatedStat value="8K" label="BIM Resolution" />
          </div>
        </Section>
      </section>

      {/* ─── TL;DR SPEAKABLE SUMMARY ─── */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: `0 ${px} 4rem` }}>
        <Section>
          <div
            data-speakable="true"
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "4px solid #FF4800",
              padding: "2rem 2.5rem",
            }}
          >
            <div style={{ position: "absolute", top: "-1px", left: "2rem", right: "2rem", height: "1px", background: "linear-gradient(90deg, transparent, #FF4800, transparent)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span style={{ width: "8px", height: "8px", background: "#FF4800", display: "inline-block" }} className="animate-pulse" />
              <span style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>Quick Answer</span>
            </div>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
              A Digital Twin is a living, data-rich 3D replica of a building that syncs with real-world conditions through IoT sensors and BIM models. The global digital twin market is projected to reach $48.2B by 2026, with healthcare as the fastest-growing segment at 52.7% CAGR. In construction, Digital Twins detect MEP clashes (saving $5,000–$50,000+ per conflict), simulate energy performance before equipment purchase, and reduce construction costs by up to 30%. UDGOK uses Digital Twins on every medical and commercial project to deliver zero-conflict builds.
            </p>
          </div>
        </Section>
      </section>

      {/* ─── WHAT IS IT ─── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: `0 ${px} 5rem` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <Section>
            <div>
              <div style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#FF4800", marginBottom: "0.75rem" }}>What Is a Digital Twin?</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1.25rem" }}>A Living Virtual Replica of the Physical World</h2>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Imagine having a perfect virtual copy of something real—a building, a machine, an entire hospital, or even a city. This virtual copy behaves exactly like its real-world counterpart, updating in real-time as conditions change.
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                Real digital twins connect to <strong style={{ color: "#fff" }}>IoT sensors</strong> on actual equipment, pull in real-time data streams, and use <strong style={{ color: "#fff" }}>advanced AI</strong> to predict problems before they happen and optimize performance automatically.
              </p>
            </div>
          </Section>
          <Section delay={0.2}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
              <Image
                src="/images/digital-twin-industries.jpg"
                alt="Digital Twin Technology transforming industries: Manufacturing, Healthcare, Smart Cities, and Energy"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(11,6,27,0.6))", pointerEvents: "none" }} />
            </div>
          </Section>
        </div>
      </section>

      {/* ─── TECHNOLOGY STACK ─── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: `0 ${px} 5rem` }}>
        <Section>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#FF4800", marginBottom: "0.75rem" }}>Technology Stack</div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900 }}>The Engine Behind Digital Twins</h2>
          </div>
        </Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
          {[
            { icon: "📡", title: "IoT Sensors", desc: "Continuous data collection from physical assets — temperature, vibration, pressure, and performance metrics in real-time.", color: "#4FC3F7" },
            { icon: "☁️", title: "Cloud Computing", desc: "Scalable infrastructure to store, process, and analyze massive data streams with sub-second latency.", color: "#AB47BC" },
            { icon: "🧠", title: "AI & Machine Learning", desc: "Pattern recognition, predictive maintenance, autonomous optimization, and anomaly detection.", color: "#FF4800" },
            { icon: "🎮", title: "3D Visualization", desc: "Photorealistic rendering powered by Unreal Engine for immersive facility exploration and clash detection.", color: "#66BB6A" },
          ].map((card, i) => (
            <Section key={i} delay={i * 0.1}>
              <TechCard {...card} />
            </Section>
          ))}
        </div>
      </section>

      {/* ─── INFOGRAPHIC IMAGE ─── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: `0 ${px} 5rem` }}>
        <Section>
          <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
            <Image
              src="/images/digital-twin-2026-guide.jpg"
              alt="The 2026 Guide to Digital Twin Technology — UDGOK Intelligence overview of Texas, Oklahoma, and California applications"
              width={1100}
              height={600}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(11,6,27,0.7))", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>
                Field superintendents comparing live building conditions against the 8K Digital Twin BIM model in real-time.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* ─── CINEMATIC VIDEO: DIGITAL TWIN IN ACTION ─── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: `0 ${px} 5rem` }}>
        <Section>
          <div style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", display: "block", filter: "contrast(1.05) brightness(0.92)" }}
            >
              <source src="/videos/digital-twin-technology-construction.mp4" type="video/mp4" />
            </video>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem 2rem 1.5rem", background: "linear-gradient(to top, rgba(11,6,27,0.92), transparent)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                <span style={{ width: "8px", height: "8px", background: "#FF4800", display: "inline-block" }} className="animate-pulse" />
                <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>Live Demo</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", fontStyle: "italic", margin: 0, fontWeight: 500, maxWidth: "600px" }}>
                Digital Twin technology in action — real-time 3D building visualization, IoT sensor integration, and BIM clash detection powering smarter construction decisions.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* ─── REGIONAL IMPACT ─── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: `0 ${px} 5rem` }}>
        <Section>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#FF4800", marginBottom: "0.75rem" }}>Regional Impact</div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900 }}>Transforming Industries Across the Region</h2>
          </div>
        </Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          <Section delay={0}>
            <RegionCard
              state="Texas"
              title="Energy & Offshore Rigs"
              gradient="linear-gradient(90deg, #FF4800, #FF7043)"
              items={[
                "Virtual offshore rigs let Houston engineers troubleshoot without deploying helicopters",
                "Predictive maintenance reduces unplanned downtime by 45%",
                "Real-time pipeline monitoring across thousands of miles",
                "Refinery optimization saves $2M+ annually per facility",
              ]}
            />
          </Section>
          <Section delay={0.1}>
            <RegionCard
              state="Oklahoma"
              title="Wind Energy & Healthcare"
              gradient="linear-gradient(90deg, #4FC3F7, #039BE5)"
              items={[
                "Wind farms adjust blade pitch in real-time based on micro-weather patterns",
                "UDGOK deploys 3D medical facility models ensuring zero MEP conflicts",
                "Medical gas system validation before concrete is poured",
                "Hospital HVAC optimization reduces energy costs 25%",
              ]}
            />
          </Section>
          <Section delay={0.2}>
            <RegionCard
              state="California"
              title="Smart Cities & Urban Planning"
              gradient="linear-gradient(90deg, #66BB6A, #43A047)"
              items={[
                "Traffic flow optimization using city-scale digital twins",
                "Grid load management for renewable energy integration",
                "Climate resilience modeling for coastal infrastructure",
                "Building energy benchmarking across entire districts",
              ]}
            />
          </Section>
        </div>
      </section>

      {/* ─── FUTURE TIMELINE ─── */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: `0 ${px} 5rem` }}>
        <Section>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#FF4800", marginBottom: "0.75rem" }}>What Lies Ahead</div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900 }}>The Future of Digital Twins</h2>
          </div>
        </Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", borderLeft: "2px solid rgba(255,72,0,0.15)", paddingLeft: "0" }}>
          <TimelineItem year="2026" title="Gen AI Integration" desc='Large language models enable natural language queries to facility systems: "AI, why is the HVAC underperforming on floor 3?" — and get an instant, data-backed answer.' />
          <TimelineItem year="2027" title="Healthcare Dominance" desc="Specialized digital twin platforms for healthcare facilities become the fastest-growing segment at 52.7% CAGR, revolutionizing hospital planning and operations." />
          <TimelineItem year="2028" title="Autonomous Optimization" desc="Digital twins begin making autonomous adjustments — HVAC tuning, lighting schedules, and energy routing — without human intervention." />
          <TimelineItem year="2030" title="City-Scale Ecosystems" desc="Interconnected digital twins span entire supply chains, utility grids, and urban ecosystems, enabling true smart city management." />
        </div>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: `0 ${px} 5rem` }}>
        <Section>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <span style={{ width: "32px", height: "1px", background: "#FF4800" }} />
            <span style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#FF4800" }}>Common Questions</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: "3rem" }}>
            Frequently <span style={{ color: "#FF4800" }}>Asked</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <DTFAQItem
              q="What is a Digital Twin in construction?"
              a="A Digital Twin is a data-rich 3D virtual replica of a physical building that stays synchronized with real-world conditions via IoT sensors and BIM models. In construction, it allows teams to detect MEP clashes before building, simulate energy performance, track real-time schedule deviations, and serve as a facility management tool for the building's entire lifecycle."
            />
            <DTFAQItem
              q="How much money can Digital Twins save on a construction project?"
              a="Digital Twins reduce construction costs by up to 30%. Resolving an MEP clash in a digital model costs $0, versus $5,000–$50,000+ to fix the same conflict in the field after construction. For a typical UDGOK medical or dental project, Digital Twin technology catches 50–200 clashes that would otherwise become costly change orders."
            />
            <DTFAQItem
              q="How does UDGOK use Digital Twin technology?"
              a="UDGOK integrates Digital Twins into every project through Revit BIM modeling, Navisworks clash detection, and IoT-connected field monitoring. We build the entire project virtually before breaking ground, validate all medical gas and MEP systems digitally, and deliver an as-built Digital Twin model at project completion for ongoing facility management."
            />
            <DTFAQItem
              q="What industries benefit most from Digital Twins in 2026?"
              a="Healthcare construction is the fastest-growing Digital Twin segment at 52.7% CAGR. Other major sectors include energy (predictive maintenance for refineries and wind farms), smart cities (traffic and grid optimization), and manufacturing (production line simulation). The global Digital Twin market is projected to reach $48.2 billion by 2026."
            />
          </div>
        </Section>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: `0 ${px} 6rem` }}>
        <Section>
          <div style={{ textAlign: "center", padding: "3rem 2rem", background: "linear-gradient(135deg, rgba(255,72,0,0.08), rgba(255,72,0,0.02))", border: "1px solid rgba(255,72,0,0.15)", borderRadius: "24px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>Ready to Build with Digital Twin Technology?</h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 2rem" }}>
              Start with a specific problem. Partner with a tech-forward construction firm. UDGOK integrates BIM, IoT, and AI into every project we deliver.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ padding: "1rem 2.5rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "14px", textDecoration: "none", transition: "transform 0.2s" }}>
                Start a Conversation →
              </Link>
              <Link href="/virtual-design-construction" style={{ padding: "1rem 2.5rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "14px", textDecoration: "none" }}>
                Explore VDC Services
              </Link>
            </div>
          </div>
        </Section>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          section > div[style*="gridTemplateColumns: repeat(4"] { grid-template-columns: 1fr 1fr !important; }
          section > div[style*="gridTemplateColumns: repeat(3"] { grid-template-columns: 1fr !important; }
          section > div[style*="gridTemplateColumns: 1fr 1fr"][style*="gap: 4rem"] { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 480px) {
          section > div[style*="gridTemplateColumns: repeat(4"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* ─── Digital Twin FAQ Accordion Item ─── */
function DTFAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        background: open ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
        transition: "background 0.3s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 2rem",
          textAlign: "left",
          cursor: "pointer",
          background: "none",
          border: "none",
          color: "inherit",
          font: "inherit",
        }}
      >
        <span style={{ fontSize: "1rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", paddingRight: "2rem", lineHeight: 1.4 }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "#FF4800", fontSize: "1.5rem", fontWeight: 700, flexShrink: 0 }}
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p style={{ padding: "0 2rem 1.5rem", color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}
