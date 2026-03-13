"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ─── Animated Section ─── */
function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </motion.div>
    );
}

/* ─── Stat Counter ─── */
function Stat({ value, label }: { value: string; label: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5 }} style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
            <div style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{value}</div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", marginTop: "0.25rem" }}>{label}</div>
        </motion.div>
    );
}

/* ─── FAQ Item ─── */
function FAQ({ q, a, i }: { q: string; a: string; i: number }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-30px" });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
            onClick={() => setOpen(!open)}
            style={{ background: open ? "rgba(255,72,0,0.05)" : "rgba(255,255,255,0.02)", border: `2px solid ${open ? "rgba(255,72,0,0.25)" : "rgba(255,255,255,0.06)"}`, padding: "1.25rem 1.5rem", cursor: "pointer", transition: "all 0.3s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.4 }}>{q}</h3>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ fontSize: "1.2rem", color: "#FF4800", flexShrink: 0 }}>▾</motion.span>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "1rem 0 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── Timeline Phase ─── */
function TimelinePhase({ phase, duration, desc, i }: { phase: string; duration: string; desc: string; i: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-30px" });
    const [h, setH] = useState(false);
    return (
        <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", padding: "1.5rem", background: h ? "rgba(255,72,0,0.04)" : "transparent", border: `2px solid ${h ? "rgba(255,72,0,0.2)" : "rgba(255,255,255,0.04)"}`, transition: "all 0.3s" }}>
            <div style={{ minWidth: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,72,0,0.1)", border: "2px solid rgba(255,72,0,0.25)", fontSize: "1rem", fontWeight: 900, color: "#FF4800" }}>
                {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: 0 }}>{phase}</h3>
                    <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.25rem 0.75rem", background: "rgba(255,72,0,0.1)", border: "1px solid rgba(255,72,0,0.2)" }}>{duration}</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
        </motion.div>
    );
}

/* ─── Table of Contents Link ─── */
function TOCLink({ label, anchor, i }: { label: string; anchor: string; i: number }) {
    const [h, setH] = useState(false);
    return (
        <a href={`#${anchor}`}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 1rem", textDecoration: "none", background: h ? "rgba(255,72,0,0.04)" : "transparent", border: `1px solid ${h ? "rgba(255,72,0,0.2)" : "rgba(255,255,255,0.04)"}`, transition: "all 0.3s" }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 900, color: "#FF4800", minWidth: "20px" }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: h ? "#fff" : "rgba(255,255,255,0.6)", transition: "color 0.3s" }}>{label}</span>
            <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "#FF4800", opacity: h ? 1 : 0, transition: "opacity 0.3s" }}>→</span>
        </a>
    );
}


/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */
export default function DentalConstructionGuideUI() {

    const tocItems = [
        { label: "Introduction", anchor: "introduction" },
        { label: "2026 Cost Expectations for Tulsa", anchor: "costs" },
        { label: "The Construction Timeline", anchor: "timeline" },
        { label: "Expert Insights on Design", anchor: "design" },
        { label: "Local SEO & Your New Build", anchor: "local-seo" },
        { label: "Frequently Asked Questions", anchor: "faq" },
    ];

    const timelinePhases = [
        { phase: "Initial Planning & Site Selection", duration: "1–3 Months", desc: "Secure dental-specific commercial space, finalize lease negotiations, engage an architect experienced in healthcare facilities, and begin schematic design. This is where you lock in operatory count, specialty requirements, and core equipment decisions." },
        { phase: "Pre-Construction & Permitting", duration: "1–2 Months", desc: "Complete construction documents with MEP engineering, submit to the City of Tulsa for building permits, finalize your general contractor, and order long-lead equipment such as dental chairs, cabinetry, compressors, and imaging systems." },
        { phase: "Active Construction", duration: "4–8 Months", desc: "Demolition (if applicable), framing, rough-in for all MEP systems — including dental-specific plumbing under-slab, medical gas piping, infection control HVAC, and electrical for digital imaging. Drywall, finishes, cabinetry installation, and equipment rough-in follow." },
        { phase: "Finishing & Move-In", duration: "1–2 Months", desc: "Final inspections, fire marshal sign-off, certificate of occupancy, dental equipment installation and calibration, IT/network configuration, staff training on facility systems, and furniture installation before opening day." },
    ];

    const costData = [
        { item: "Empty Shell Build-Out (Base)", cost: "~$200/SF", note: "Framing, basic MEP, finishes — no dental-specific infrastructure" },
        { item: "Full Dental Construction (Incl. Equipment)", cost: "$300–$500+/SF", note: "Construction plus specialized dental equipment and infrastructure" },
        { item: "Standard 3-Chair Clinic (1,800 SF)", cost: "~$591,000", note: "National average for a fully equipped general dentistry practice" },
        { item: "Premium Multi-Operatory (3,500+ SF)", cost: "$1M–$1.75M+", note: "High-end specialty or multi-doctor practice with surgery suite" },
        { item: "Per-Operatory Utility Infrastructure", cost: "$10,000–$18,000", note: "Under-slab plumbing, compressed air, vacuum, electrical, data, gas" },
    ];

    const faqs = [
        { q: "How much time does it take to build a dental office in Tulsa?", a: "A full dental office construction project in Tulsa takes 6 to 12 months from initial planning through move-in. This breaks down to 1–3 months of initial planning, 1–2 months of pre-construction and permitting, 4–8 months of active construction, and 1–2 months for finishing, inspections, and equipment calibration. UDGOK's design-build approach can compress this timeline by overlapping phases." },
        { q: "What is the average size of a modern dental office?", a: "A modern dental office typically ranges from 1,800 to 3,500 square feet. A standard 3-chair general dentistry practice starts around 1,800 sq ft, while a larger multi-specialty or high-volume practice with surgery suites, CBCT imaging rooms, and centralized sterilization centers can exceed 3,500+ sq ft. The optimal size depends on operatory count, specialty, and whether lab or recovery spaces are needed." },
        { q: "How much does it cost to build a dental office in the U.S. in 2026?", a: "Dental office construction in 2026 costs between $300 and $500+ per square foot, which includes both construction and specialized dental equipment. Building out an empty shell without dental-specific infrastructure starts around $200 per square foot. A standard 1,800-square-foot, 3-chair general dentistry clinic averages approximately $591,000. Premium multi-specialty practices can exceed $1.5M+." },
    ];

    return (
        <div style={{ background: "#0B061B", color: "#fff", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

            {/* ═══ HERO ═══ */}
            <section style={{ position: "relative", padding: "8rem 2rem 5rem", overflow: "hidden" }}>
                {/* Hero BG Image + Gradient */}
                <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/dental-construction-guide-hero.png"
                        alt="Modern dental office under construction — operatory treatment rooms with MEP systems"
                        fill
                        style={{ objectFit: "cover", filter: "brightness(0.35) contrast(1.1)" }}
                        priority
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #0B061B 0%, transparent 30%, transparent 60%, #0B061B 100%)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0B061B 0%, transparent 50%)" }} />
                </div>
                {/* Grid overlay */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,72,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,72,0,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px", zIndex: 1 }} />
                {/* Animated orb */}
                <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: "absolute", top: "20%", left: "60%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,72,0,0.12) 0%,transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 1 }} />

                <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", border: "2px solid rgba(255,72,0,0.3)", background: "rgba(255,72,0,0.08)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "2rem" }}>
                            <span style={{ width: "8px", height: "8px", background: "#FF4800", display: "inline-block" }} />
                            Knowledge Hub — 2026 Guide
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
                        style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
                        The Ultimate 2026 Guide to{" "}
                        <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Dental Office Construction
                        </span>{" "}
                        in Tulsa
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: "700px" }}>
                        Everything you need to know about building a dental clinic in Tulsa, Oklahoma — from per-square-foot costs and construction timelines to expert design insights and local SEO strategies for your new practice.
                    </motion.p>

                    {/* Article meta */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
                        style={{ display: "flex", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>March 2026</div>
                        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>15 Min Read</div>
                        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4800" }}>By UDGOK</div>
                    </motion.div>

                    {/* Stats bar */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginTop: "3rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)" }}>
                        <Stat value="$300–$500+" label="Per Sq Ft (2026)" />
                        <Stat value="6–12mo" label="Full Timeline" />
                        <Stat value="$591K" label="Avg 3-Chair Clinic" />
                        <Stat value="100+" label="Clinics We've Built" />
                    </motion.div>
                </div>
            </section>

            {/* ═══ TL;DR SPEAKABLE ═══ */}
            <section style={{ borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 2rem" }}>
                    <Section>
                        <div data-speakable="true" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <div style={{ fontSize: "0.6rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.2em", textTransform: "uppercase", minWidth: "50px", paddingTop: "0.15rem" }}>TL;DR</div>
                            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
                                Building a dental office in Tulsa in 2026 costs $300–$500+ per square foot (construction plus equipment), with a standard 1,800 SF, 3-chair clinic averaging $591,000. The full process — from planning to move-in — takes 6 to 12 months. Dental offices require specialized MEP systems that standard commercial contractors often get wrong: under-slab plumbing for chair outlets, medical-grade compressed air, nitrous oxide piping, infection control HVAC, and lead-lined X-ray rooms. This guide covers everything: updated cost data, a phase-by-phase timeline, expert design advice from industry leaders, and the critical local SEO steps to launch your Tulsa practice with maximum visibility.
                            </p>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ TABLE OF CONTENTS ═══ */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
                <Section>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                        <div style={{ width: "4px", height: "24px", background: "#FF4800" }} />
                        <h2 style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", margin: 0 }}>In This Guide</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {tocItems.map((item, i) => (
                            <TOCLink key={i} label={item.label} anchor={item.anchor} i={i} />
                        ))}
                    </div>
                </Section>
            </section>

            {/* ═══ INTRODUCTION ═══ */}
            <section id="introduction" style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
                <Section>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>01</div>
                        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                    </div>
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 1.5rem", lineHeight: 1.15 }}>
                        Why Dental Office Construction Is{" "}
                        <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Different</span>
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, margin: 0 }}>
                            Building a dental office goes far beyond a standard commercial build-out. Every operatory requires a complex web of specialized mechanical, electrical, and plumbing (MEP) systems that most commercial contractors have never encountered — under-slab plumbing for chair drainage, medical-grade compressed air and vacuum lines, nitrous oxide and oxygen piping to NFPA 99 standards, and infection control HVAC with negative-pressure sterilization rooms.
                        </p>
                        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, margin: 0 }}>
                            A single dental chair position requires approximately <strong style={{ color: "#fff" }}>37 individual utility connections</strong> — from hot and cold water supply, drain, air, vacuum, and electrical circuits to data cabling for digital sensors and intraoral cameras. Multiply that by 4 to 8 operatories and the infrastructure complexity becomes clear. Getting this wrong means tearing up concrete to fix under-slab plumbing — an expensive mistake that can delay your opening by months.
                        </p>
                        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, margin: 0 }}>
                            This guide is written specifically for Tulsa, Oklahoma dental professionals planning to build a new practice or relocate an existing one in 2026. We cover real costs, realistic timelines, expert design principles, and the local SEO groundwork you should be laying <em>during</em> construction — not after.
                        </p>
                    </div>
                </Section>
            </section>

            {/* ═══ 2026 COST EXPECTATIONS ═══ */}
            <section id="costs" style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>02</div>
                            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 0.75rem", lineHeight: 1.15 }}>
                            2026 Cost Expectations for{" "}
                            <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Tulsa</span>
                        </h2>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", margin: "0 0 1rem", lineHeight: 1.7 }}>
                            Based on 2026 market data and UDGOK&apos;s extensive project history across 100+ dental facilities in Oklahoma and Texas.
                        </p>
                    </Section>

                    <Section delay={0.1}>
                        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, margin: "0 0 2rem" }}>
                            Dental office construction currently costs between <strong style={{ color: "#FF4800" }}>$300 and $500+ per square foot</strong>, which includes both construction and specialized dental equipment. For context, building out an empty commercial shell without dental-specific infrastructure starts around <strong style={{ color: "#fff" }}>$200 per square foot</strong>. The extra cost comes entirely from dental-specific MEP: operatory plumbing, medical gas, infection control HVAC, lead shielding, and equipment power infrastructure. A standard <strong style={{ color: "#fff" }}>1,800-square-foot, 3-chair clinic averages $591,000</strong> total project cost according to current industry benchmarks.
                        </p>
                    </Section>

                    {/* Cost table */}
                    <Section delay={0.15}>
                        <div style={{ border: "2px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
                            {/* Header */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 1fr", gap: "1rem", padding: "1rem 1.5rem", background: "rgba(255,72,0,0.08)", borderBottom: "2px solid rgba(255,72,0,0.2)" }}>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Item</div>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", textAlign: "center" }}>Cost (2026)</div>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Notes</div>
                            </div>
                            {/* Rows */}
                            {costData.map((row, i) => (
                                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 160px 1fr", gap: "1rem", padding: "1rem 1.5rem", borderBottom: i < costData.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>{row.item}</div>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#FF4800", textAlign: "center" }}>{row.cost}</div>
                                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>{row.note}</div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section delay={0.2}>
                        <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginTop: "1.5rem", textAlign: "center", fontStyle: "italic" }}>
                            Cost data sourced from UDGOK project history and current industry benchmarks. Actual costs vary by scope, site conditions, and market conditions. Contact UDGOK for a project-specific estimate.
                        </p>
                    </Section>

                    {/* Additional cost context */}
                    <Section delay={0.25}>
                        <div style={{ marginTop: "2rem", padding: "1.5rem", border: "2px solid rgba(255,72,0,0.15)", background: "rgba(255,72,0,0.03)" }}>
                            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                <div style={{ fontSize: "1.5rem" }}>💡</div>
                                <div>
                                    <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff", margin: "0 0 0.5rem" }}>Pro Tip: Equipment vs. Construction Budget</h3>
                                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: 0 }}>
                                        Don&apos;t confuse construction costs with total project costs. Dental equipment (chairs, imaging, sterilizers, compressors) typically adds <strong style={{ color: "#fff" }}>$80,000 to $200,000+</strong> on top of construction costs. Your budget should account for both. UDGOK coordinates directly with your equipment vendor (A-dec, Planmeca, Pelton &amp; Crane) throughout construction to ensure precise utility placement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ CONSTRUCTION TIMELINE ═══ */}
            <section id="timeline" style={{ borderTop: "2px solid rgba(255,255,255,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>03</div>
                            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 0.75rem", lineHeight: 1.15 }}>
                            The Construction{" "}
                            <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Timeline</span>
                        </h2>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", margin: "0 0 2.5rem", lineHeight: 1.7 }}>
                            Experts like Keystone Design Build note that a full dental office project takes <strong style={{ color: "#fff" }}>6 to 12 months</strong> from initial decision to opening day. Here&apos;s how that breaks down:
                        </p>
                    </Section>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {timelinePhases.map((p, i) => (
                            <TimelinePhase key={i} phase={p.phase} duration={p.duration} desc={p.desc} i={i} />
                        ))}
                    </div>

                    {/* Total timeline bar */}
                    <Section delay={0.3}>
                        <div style={{ marginTop: "2rem", padding: "1.25rem 1.5rem", border: "3px solid #FF4800", background: "rgba(255,72,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                            <div>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Total Project Duration</div>
                                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", marginTop: "0.25rem" }}>6 – 12 Months</div>
                            </div>
                            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", maxWidth: "350px", lineHeight: 1.6 }}>
                                UDGOK&apos;s design-build methodology overlaps planning and pre-construction phases, compressing timelines by 20–30% versus traditional design-bid-build delivery.
                            </div>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ EXPERT INSIGHTS ON DESIGN ═══ */}
            <section id="design" style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>04</div>
                            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 2rem", lineHeight: 1.15 }}>
                            Expert Insights on{" "}
                            <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Design</span>
                        </h2>
                    </Section>

                    {/* Expert quote card */}
                    <Section delay={0.1}>
                        <div style={{ padding: "2rem", border: "2px solid rgba(255,72,0,0.15)", background: "rgba(255,72,0,0.03)", position: "relative", marginBottom: "2rem" }}>
                            <div style={{ position: "absolute", top: "-12px", left: "1.5rem", background: "#0B061B", padding: "0 0.75rem" }}>
                                <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>Expert Quote</span>
                            </div>
                            <blockquote style={{ fontSize: "1.05rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, margin: "0.5rem 0 1rem", fontStyle: "italic", borderLeft: "3px solid #FF4800", paddingLeft: "1.25rem" }}>
                                &ldquo;Patient flow should drive every design decision. The operatory layout, sterilization center location, and staff circulation paths must all work together seamlessly. Centralizing the sterilization room with direct access from every operatory wing eliminates bottlenecks and keeps your team productive all day.&rdquo;
                            </blockquote>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <div style={{ width: "36px", height: "36px", background: "rgba(255,72,0,0.15)", border: "2px solid rgba(255,72,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 900, color: "#FF4800" }}>JD</div>
                                <div>
                                    <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#fff" }}>Jason Drewelow</div>
                                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>CEO, Primus Companies — Author of <em>Making the Right Impression</em></div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section delay={0.15}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, margin: 0 }}>
                                <strong style={{ color: "#fff" }}>Patient flow is the foundation of dental office design.</strong> As Jason Drewelow, CEO of Primus Companies and author of <em>Making the Right Impression</em>, emphasizes: the layout should naturally guide patients from reception through treatment with minimal confusion or backtracking. In a well-designed dental office, patients never cross paths with clinical staff carrying instruments, and the sterilization workflow is invisible to patient-facing areas.
                            </p>
                            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, margin: 0 }}>
                                <strong style={{ color: "#fff" }}>Centralize your sterilization center.</strong> The sterilization room is the operational heart of a dental practice. Position it centrally with direct pass-through access to operatory wings on both sides. This eliminates wasted staff steps (the average dental assistant walks 4+ miles per shift in a poorly designed office) and ensures instrument turnaround time stays under 15 minutes between patients.
                            </p>
                            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, margin: 0 }}>
                                <strong style={{ color: "#fff" }}>Design for expansion from day one.</strong> Even if you&apos;re starting with 3–4 operatories, your construction plan should rough-in plumbing and electrical for future treatment rooms. Adding operatories later without pre-planned infrastructure means cutting concrete, relocating plumbing, and potentially closing during renovations. The cost to rough-in future operatories during initial construction is a fraction of retrofitting later.
                            </p>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ LOCAL SEO & YOUR NEW BUILD ═══ */}
            <section id="local-seo" style={{ borderTop: "2px solid rgba(255,255,255,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>05</div>
                            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 0.75rem", lineHeight: 1.15 }}>
                            Local SEO &amp; Your{" "}
                            <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>New Build</span>
                        </h2>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", margin: "0 0 2rem", lineHeight: 1.7 }}>
                            <strong style={{ color: "#FF4800" }}>Crucial step:</strong> Don&apos;t wait until opening day to think about local search. Start building your digital presence while the clinic is still under construction.
                        </p>
                    </Section>

                    <Section delay={0.1}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                            {/* GBP Card */}
                            <div style={{ padding: "2rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📍</div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 0.75rem", lineHeight: 1.3 }}>Claim Your Google Business Profile Early</h3>
                                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>
                                    Claim and verify your Google Business Profile (GBP) for the new Tulsa address as soon as you have a signed lease — even if construction hasn&apos;t started. GBP verification can take 2–4 weeks, and Google rewards profiles with longevity. Select &ldquo;Dentist&rdquo; as your primary category and add &ldquo;Dental Clinic&rdquo; and &ldquo;Cosmetic Dentist&rdquo; as secondary categories.
                                </p>
                            </div>
                            {/* NAP Card */}
                            <div style={{ padding: "2rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔗</div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 0.75rem", lineHeight: 1.3 }}>NAP Consistency Across Directories</h3>
                                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>
                                    Ensure strict <strong style={{ color: "#fff" }}>NAP (Name, Address, Phone)</strong> consistency across all local directories — Yelp, Healthgrades, Zocdoc, Vitals, local chamber of commerce, Oklahoma Dental Association, and insurance provider networks. Even slight variations (&ldquo;Suite 100&rdquo; vs. &ldquo;Ste. 100&rdquo;) confuse search engines and dilute local ranking signals.
                                </p>
                            </div>
                            {/* Schema Card */}
                            <div style={{ padding: "2rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🏗️</div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 0.75rem", lineHeight: 1.3 }}>Implement LocalBusiness Schema Markup</h3>
                                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>
                                    Add <strong style={{ color: "#fff" }}>LocalBusiness schema markup</strong> (specifically the <code style={{ background: "rgba(255,72,0,0.1)", padding: "0.1rem 0.4rem", color: "#FF7043", fontSize: "0.8rem" }}>Dentist</code> type) to your website&apos;s contact page. This structured data tells search engines exactly where your practice is, what services you offer, and your hours — giving you a ranking advantage before you even see your first patient.
                                </p>
                            </div>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section id="faq" style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>FAQ</div>
                            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>
                                Dental Office Construction FAQ —{" "}
                                <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Tulsa, Oklahoma</span>
                            </h2>
                        </div>
                    </Section>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} i={i} />)}
                    </div>
                </div>
            </section>

            {/* ═══ CROSS LINKS ═══ */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem 1rem" }}>
                <Section>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                        <div style={{ width: "4px", height: "40px", background: "#FF4800", flexShrink: 0 }} />
                        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                            Related:{" "}
                            <Link href="/dental-office-construction-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>Dental Office Construction Tulsa</Link>
                            {" "} · {" "}
                            <Link href="/dental-construction-costs" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>2026 Dental Construction Cost Analysis</Link>
                            {" "} · {" "}
                            <Link href="/tulsa-medical-construction" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>Tulsa Medical Construction</Link>
                            {" "} · {" "}
                            <Link href="/medical-gas-installation" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>Medical Gas Installation</Link>
                            {" "} · {" "}
                            <Link href="/resources" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>Knowledge Hub</Link>
                        </p>
                    </div>
                </Section>
            </section>

            {/* ═══ CTA ═══ */}
            <section style={{ padding: "4rem 2rem", borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)", textAlign: "center" }}>
                <Section>
                    <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 900, margin: "0 0 1rem" }}>
                        Ready to Break Ground on Your Dream Practice?
                    </h2>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
                        Contact our Tulsa dental construction experts today for a free site evaluation and 2026 cost estimate. Most estimates delivered within 48 hours.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" style={{ display: "inline-block", padding: "1rem 2.5rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.3s" }}>
                            Get Your Free Estimate →
                        </Link>
                        <Link href="tel:+19185203823" style={{ display: "inline-block", padding: "1rem 2.5rem", background: "transparent", color: "#fff", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", border: "2px solid rgba(255,255,255,0.15)", transition: "border-color 0.3s" }}>
                            Call (918) 520-3823
                        </Link>
                    </div>
                </Section>
            </section>
        </div>
    );
}
