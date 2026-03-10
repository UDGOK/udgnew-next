"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─── Animated Section ─── */
function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
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

/* ─── Principle Card ─── */
function PrincipleCard({ icon, title, desc, i }: { icon: string; title: string; desc: string; i: number }) {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                padding: "2rem 1.5rem",
                background: hovered ? "rgba(255,72,0,0.06)" : "rgba(255,255,255,0.02)",
                border: `2px solid ${hovered ? "rgba(255,72,0,0.3)" : "rgba(255,255,255,0.06)"}`,
                cursor: "default",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Glow line on top */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: hovered ? "#FF4800" : "transparent",
                transition: "background 0.3s",
            }} />
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.3 }}>{title}</h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
        </motion.div>
    );
}

/* ─── AI Usage Disclosure Card ─── */
function UsageCard({ icon, area, tools, control, i }: { icon: string; area: string; tools: string; control: string; i: number }) {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setExpanded(!expanded)}
            style={{
                background: expanded ? "rgba(255,72,0,0.05)" : "rgba(255,255,255,0.02)",
                border: `2px solid ${expanded ? "rgba(255,72,0,0.25)" : "rgba(255,255,255,0.06)"}`,
                padding: "1.5rem",
                cursor: "pointer",
                transition: "all 0.3s",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                        width: "50px", height: "50px",
                        background: "linear-gradient(135deg, #FF4800, #FF7043)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.5rem", flexShrink: 0,
                    }}>
                        {icon}
                    </div>
                    <div>
                        <div style={{ fontSize: "1rem", fontWeight: 800, color: "#fff" }}>{area}</div>
                        <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.15rem" }}>
                            Click to expand
                        </div>
                    </div>
                </div>
                <motion.span
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: "1.2rem", color: "#FF4800" }}
                >
                    ▾
                </motion.span>
            </div>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                    >
                        <div style={{ paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "1.25rem" }}>
                            <div style={{ marginBottom: "1rem" }}>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                                    Tools & Methods
                                </div>
                                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>{tools}</p>
                            </div>
                            <div>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                                    Human Oversight
                                </div>
                                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>{control}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── Commitment Stat ─── */
function CommitmentStat({ value, label }: { value: string; label: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ textAlign: "center", padding: "1.5rem 1rem" }}
        >
            <div style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900,
                background: "linear-gradient(135deg, #FF4800, #FF7043)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
                {value}
            </div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", marginTop: "0.25rem" }}>
                {label}
            </div>
        </motion.div>
    );
}

/* ═════════════════════ MAIN UI ═════════════════════ */
export default function TransparencyUI() {
    const principles = [
        { icon: "👁️", title: "Transparency First", desc: "We disclose every AI tool we use, how it influences decisions, and what data it touches. No black boxes." },
        { icon: "🧑‍💼", title: "Human Authority", desc: "AI assists — humans decide. Every AI output is reviewed by licensed professionals before any project action is taken." },
        { icon: "🔒", title: "Data Protection", desc: "Client data never trains third-party AI models. We use enterprise-grade, zero-data-retention AI services only." },
        { icon: "⚖️", title: "Fairness & Non-Discrimination", desc: "We audit our AI systems for bias in estimating, hiring, and subcontractor selection to ensure equitable outcomes." },
        { icon: "📊", title: "Accountability", desc: "Every AI-assisted decision is logged with an audit trail — who used it, what was generated, what was approved." },
        { icon: "🔄", title: "Continuous Evaluation", desc: "We review and update our AI policies quarterly, benchmarking against NIST AI RMF 1.0 and EU AI Act standards." },
    ];

    const usages = [
        {
            icon: "💰", area: "Cost Estimating",
            tools: "Machine learning models trained on UDGOK's proprietary database of 100+ completed projects. Inputs include square footage, building type, location, MEP complexity, and market conditions. Models predict line-item costs within ±5% accuracy at the conceptual phase.",
            control: "Every AI-generated estimate is reviewed and validated by a PMP-certified project manager and senior estimator. AI estimates are never shared with clients without human review and sign-off. Final GMP pricing is always prepared by our human estimating team.",
        },
        {
            icon: "📐", area: "Generative Design & Space Planning",
            tools: "AI-driven layout optimization tools that evaluate thousands of floor plan variations against clinical workflow metrics, cost constraints, and building code requirements. We use Autodesk Forma and custom constraint-solving algorithms.",
            control: "Licensed architects review and select from AI-generated options. AI generates alternatives — the design team makes final decisions. All construction documents are prepared and sealed by licensed professionals.",
        },
        {
            icon: "📝", area: "Proposal & Content Generation",
            tools: "Large language models (LLMs) are used to draft initial proposal narratives, project descriptions, and technical content. AI-generated text is clearly labeled internally before human review.",
            control: "All AI-generated text is reviewed, fact-checked, and edited by UDGOK team members before any external distribution. We label AI-assisted content in our internal workflow. No AI-generated text is sent to clients without human authorship review.",
        },
        {
            icon: "📊", area: "Schedule Risk & Predictive Analytics",
            tools: "Statistical models analyze historical project schedule data to identify risk factors — weather, trade density, permit timelines, material lead times. Outputs include probability-weighted schedule forecasts and early warning indicators.",
            control: "Schedule forecasts are reviewed weekly by project managers during owner updates. AI flags risks — superintendents and PMs make scheduling decisions. No automated schedule changes are made without human approval.",
        },
        {
            icon: "🚁", area: "Drone Photogrammetry & Reality Capture",
            tools: "Drone flights produce georeferenced point clouds and orthomosaic maps. AI compares as-built point clouds to BIM models to detect deviations. Cut-fill calculations are AI-assisted for earthwork verification.",
            control: "Superintendents review AI-flagged deviations on-site before any corrective action. Drone data supplements — but does not replace — field superintendent inspections. Licensed surveyors validate critical boundary and elevation data.",
        },
        {
            icon: "🤖", area: "Robotic Layout & Field Technology",
            tools: "Robotic total stations place control points from BIM coordinates. AI-assisted quality verification compares as-installed positions to design-intent coordinates. IoT sensors on critical equipment provide real-time utilization data.",
            control: "Field engineers verify robotic layout points against plans before trades begin work. Quality control inspections by superintendents confirm all critical dimensions. No structural or MEP layout is accepted without human verification.",
        },
    ];

    return (
        <div style={{ background: "#0B061B", color: "#fff", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
            {/* ── Hero ── */}
            <section style={{
                position: "relative", padding: "8rem 2rem 5rem",
                background: "linear-gradient(180deg, #0B061B 0%, #12082A 50%, #0B061B 100%)",
                overflow: "hidden",
            }}>
                {/* Animated grid background */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "linear-gradient(rgba(255,72,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,72,0,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }} />
                {/* Glowing orb */}
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
                        width: "600px", height: "600px", borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,72,0,0.15) 0%, transparent 70%)",
                        filter: "blur(60px)", pointerEvents: "none",
                    }}
                />

                <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            padding: "0.5rem 1.25rem",
                            border: "2px solid rgba(255,72,0,0.3)",
                            background: "rgba(255,72,0,0.08)",
                            fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em",
                            textTransform: "uppercase", color: "#FF4800",
                            marginBottom: "2rem",
                        }}>
                            <span style={{ width: "8px", height: "8px", background: "#FF4800", display: "inline-block" }} />
                            Responsible AI Disclosure
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900,
                            lineHeight: 1.1, letterSpacing: "-0.03em",
                            margin: "0 0 1.5rem",
                        }}
                    >
                        How UDGOK Uses <br />
                        <span style={{ background: "linear-gradient(135deg, #FF4800, #FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Artificial Intelligence
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: "700px", margin: "0 auto" }}
                    >
                        We believe AI should amplify human expertise — not replace it. This page details every AI tool we use, how it influences our work, what data it touches, and how humans remain in control of every decision.
                    </motion.p>

                    {/* Commitment stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        style={{
                            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem",
                            marginTop: "3rem",
                            border: "2px solid rgba(255,255,255,0.06)",
                            background: "rgba(255,255,255,0.02)",
                        }}
                    >
                        <CommitmentStat value="100%" label="Human-Reviewed Outputs" />
                        <CommitmentStat value="Zero" label="Client Data in AI Training" />
                        <CommitmentStat value="NIST" label="AI RMF Aligned" />
                        <CommitmentStat value="Quarterly" label="Policy Reviews" />
                    </motion.div>
                </div>
            </section>

            {/* ── Core Principles ── */}
            <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                <Section>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>
                            Our AI Principles
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>
                            Six Commitments That Guide Our AI Use
                        </h2>
                    </div>
                </Section>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                    {principles.map((p, i) => (
                        <PrincipleCard key={i} icon={p.icon} title={p.title} desc={p.desc} i={i} />
                    ))}
                </div>
            </section>

            {/* ── Where We Use AI ── */}
            <section style={{
                background: "linear-gradient(180deg, rgba(255,72,0,0.02) 0%, transparent 100%)",
                borderTop: "2px solid rgba(255,255,255,0.04)",
                borderBottom: "2px solid rgba(255,255,255,0.04)",
            }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>
                                Full Disclosure
                            </div>
                            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 1rem" }}>
                                Where AI Touches Your Project
                            </h2>
                            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
                                Click each area to see exactly what tools we use and how human professionals maintain control.
                            </p>
                        </div>
                    </Section>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {usages.map((u, i) => (
                            <UsageCard key={i} icon={u.icon} area={u.area} tools={u.tools} control={u.control} i={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Data & Privacy ── */}
            <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                <Section>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>
                            Data Protection
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>
                            How We Protect Your Data
                        </h2>
                    </div>
                </Section>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                    {[
                        { icon: "🚫", title: "No Training on Client Data", desc: "Your project data, drawings, and specifications are never used to train AI models — ours or anyone else's. We use only enterprise AI services with zero-data-retention agreements." },
                        { icon: "🔐", title: "Enterprise-Grade Security", desc: "All AI interactions occur within SOC 2 Type II compliant platforms. Data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never use consumer-grade AI tools on project data." },
                        { icon: "📋", title: "Access Controls", desc: "AI tool access is role-based and logged. Only authorized team members can interact with AI systems, and all queries involving project data are recorded in our audit log." },
                        { icon: "🗑️", title: "Retention & Deletion", desc: "AI conversation logs involving project data are automatically purged after 30 days. We maintain zero persistent memory across AI sessions — every session starts fresh with no access to prior conversations." },
                        { icon: "📜", title: "Vendor Agreements", desc: "Every AI vendor we use has signed a Data Processing Agreement (DPA) with explicit zero-training clauses. We audit vendor compliance annually and maintain a current vendor registry." },
                        { icon: "🏛️", title: "Regulatory Compliance", desc: "Our AI program aligns with the NIST AI Risk Management Framework 1.0, EU AI Act Article 52 transparency requirements, and CCPA data protection standards." },
                    ].map((item, i) => (
                        <PrincipleCard key={i} icon={item.icon} title={item.title} desc={item.desc} i={i} />
                    ))}
                </div>
            </section>

            {/* ── Human Override Guarantee ── */}
            <section style={{
                background: "linear-gradient(135deg, rgba(255,72,0,0.06) 0%, rgba(255,72,0,0.02) 100%)",
                borderTop: "3px solid #FF4800",
                borderBottom: "3px solid #FF4800",
            }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem", textAlign: "center" }}>
                    <Section>
                        <div style={{
                            fontSize: "3rem", marginBottom: "1.5rem",
                        }}>🛡️</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, margin: "0 0 1.5rem" }}>
                            The Human Override Guarantee
                        </h2>
                        <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.6)", maxWidth: "700px", margin: "0 auto 2rem" }}>
                            AI will never make a final decision on your project. Every estimate, schedule, design recommendation, and quality determination passes through a licensed human professional before reaching you. If you ever have a question about whether AI influenced a deliverable, ask us — we&apos;ll provide a complete audit trail.
                        </p>
                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem",
                            background: "rgba(11,6,27,0.5)", border: "2px solid rgba(255,255,255,0.06)",
                            padding: "1.5rem",
                        }}>
                            {[
                                { label: "Estimates", action: "Reviewed by PMP & Senior Estimator" },
                                { label: "Designs", action: "Sealed by Licensed Architect" },
                                { label: "Schedules", action: "Approved by Project Manager" },
                                { label: "Quality", action: "Verified by Superintendent" },
                            ].map((item, i) => (
                                <div key={i} style={{ padding: "0.75rem", textAlign: "center" }}>
                                    <div style={{ fontSize: "0.6rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.15em", textTransform: "uppercase" }}>{item.label}</div>
                                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem" }}>{item.action}</div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>
            </section>

            {/* ── Policy Updates ── */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                <Section>
                    <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>
                            Living Document
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, margin: 0 }}>
                            Policy Update Log
                        </h2>
                    </div>
                </Section>
                <div style={{
                    display: "flex", flexDirection: "column", gap: "1rem",
                }}>
                    {[
                        { date: "March 2026", title: "Initial AI Transparency Policy Published", detail: "Comprehensive AI disclosure covering estimating, design, scheduling, field tech, and data protection." },
                        { date: "March 2026", title: "NIST AI RMF 1.0 Alignment", detail: "Mapped all AI workflows to NIST AI Risk Management Framework categories. Established quarterly review cadence." },
                        { date: "Ongoing", title: "EU AI Act Article 52 Compliance", detail: "Monitoring evolving transparency requirements. Committed to labeling all AI-generated content and maintaining human oversight for all AI-assisted decisions." },
                    ].map((log, i) => (
                        <Section key={i} delay={i * 0.1}>
                            <div style={{
                                display: "flex", gap: "1.5rem", alignItems: "flex-start",
                                padding: "1.5rem",
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.06)",
                            }}>
                                <div style={{
                                    fontSize: "0.6rem", fontWeight: 800, color: "#FF4800",
                                    letterSpacing: "0.1em", textTransform: "uppercase",
                                    minWidth: "100px", paddingTop: "0.15rem",
                                }}>
                                    {log.date}
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", marginBottom: "0.35rem" }}>{log.title}</div>
                                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{log.detail}</div>
                                </div>
                            </div>
                        </Section>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{
                padding: "4rem 2rem",
                borderTop: "2px solid rgba(255,255,255,0.04)",
                textAlign: "center",
            }}>
                <Section>
                    <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 900, margin: "0 0 1rem" }}>
                        Questions About Our AI Use?
                    </h2>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem" }}>
                        We welcome questions about how AI influences our work. Transparency isn&apos;t a marketing strategy — it&apos;s how we operate.
                    </p>
                    <Link
                        href="/contact"
                        style={{
                            display: "inline-block",
                            padding: "1rem 2.5rem",
                            background: "#FF4800", color: "#fff",
                            fontWeight: 800, fontSize: "0.75rem",
                            letterSpacing: "0.15em", textTransform: "uppercase",
                            textDecoration: "none",
                        }}
                    >
                        Contact Us About AI →
                    </Link>
                </Section>
            </section>
        </div>
    );
}
