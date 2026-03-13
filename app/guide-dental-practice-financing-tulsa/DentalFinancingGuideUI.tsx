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

/* ─── TOC Link ─── */
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

/* ─── Checklist Item ─── */
function CheckItem({ text }: { text: string }) {
    return (
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.5rem 0" }}>
            <div style={{ width: "18px", height: "18px", border: "2px solid #FF4800", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <div style={{ width: "8px", height: "8px", background: "#FF4800" }} />
            </div>
            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{text}</span>
        </div>
    );
}

/* ─── Section Heading ─── */
function SectionHeading({ num, title, accent }: { num: string; title: string; accent: string }) {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>{num}</div>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 0.75rem", lineHeight: 1.15 }}>
                {title}{" "}
                <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{accent}</span>
            </h2>
        </>
    );
}

/* ─── Data Table ─── */
function DataTable({ columns, rows, note }: { columns: string[]; rows: string[][]; note?: string }) {
    const colTemplate = columns.map((_, i) => i === 0 ? "1.2fr" : "1fr").join(" ");
    return (
        <div>
            <div style={{ border: "2px solid rgba(255,255,255,0.06)", overflow: "hidden", overflowX: "auto" }}>
                <div style={{ minWidth: "600px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: colTemplate, gap: "0", padding: "1rem 1.5rem", background: "rgba(255,72,0,0.08)", borderBottom: "2px solid rgba(255,72,0,0.2)" }}>
                        {columns.map((col, i) => (
                            <div key={i} style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4800" }}>{col}</div>
                        ))}
                    </div>
                    {rows.map((row, ri) => (
                        <div key={ri} style={{ display: "grid", gridTemplateColumns: colTemplate, gap: "0", padding: "0.85rem 1.5rem", borderBottom: ri < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", background: ri % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                            {row.map((cell, ci) => (
                                <div key={ci} style={{ fontSize: "0.82rem", fontWeight: ci === 0 ? 700 : 500, color: ci === 0 ? "#fff" : "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{cell}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            {note && <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginTop: "1rem", textAlign: "center", fontStyle: "italic" }}>{note}</p>}
        </div>
    );
}


/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */
export default function DentalFinancingGuideUI() {

    const tocItems = [
        { label: "Remodel vs. Rebuild — 2026 Comparison", anchor: "remodel-vs-rebuild" },
        { label: "Expert Advice on Lenders", anchor: "lenders" },
        { label: "2026 Tax Strategies for Dentists", anchor: "tax-strategies" },
        { label: "Protecting Local SEO During a Remodel", anchor: "seo-protection" },
    ];

    const faqs = [
        { q: "Should I remodel or rebuild my Tulsa dental practice?", a: "It depends on your goals, budget, and current facility condition. Remodeling costs $150K–$400K and takes 2–4 months, ideal for practices with strong locations and sound infrastructure. Rebuilding costs $750K–$2M+ and takes 6–12 months, but offers complete customization and builds long-term real estate equity. If your building's core systems (roof, foundation, HVAC) are under 15 years old and your location has strong patient loyalty, a remodel is often the better ROI play." },
        { q: "What are the best loans for dental practices in 2026?", a: "The top options are: (1) Traditional bank loans for established practices with strong credit at Prime + 1–3% (currently 8.5–10.5%), (2) SBA 504 loans for real estate purchases with only 10% down payment at 6.5–8%, (3) Healthcare finance companies like Bank of America Practice Solutions or Provide for equipment-heavy projects with 0–10% down at 7.5–11%, and (4) Equipment-only financing for technology upgrades with $0 down using the equipment itself as collateral." },
        { q: "How does the Section 179 deduction help dentists?", a: "Section 179 allows you to deduct the full purchase price of qualifying dental equipment and software in the year of purchase, rather than depreciating over multiple years. In 2026, the projected limit is approximately $1.22 million. For example, if you purchase $300,000 in dental chairs, imaging equipment, and sterilization units, you could deduct the entire amount — saving approximately $96,000 at the 32% tax bracket. That effectively makes a $300K equipment purchase cost only $204K net." },
        { q: "How do I protect my SEO while my Tulsa dental office is under renovation?", a: "Update your Google Business Profile to 'Temporarily Closed' (never permanently closed), maintain strict NAP (Name, Address, Phone) consistency across all online listings, post weekly renovation progress photos on your GBP, and clearly communicate reopening dates to patients via email, signage, and social media. After reopening, request patient reviews mentioning the new space, update all GBP photos, and send an email blast announcing the grand reopening." },
    ];

    return (
        <div style={{ background: "#0B061B", color: "#fff", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

            {/* ═══ HERO ═══ */}
            <section style={{ position: "relative", padding: "8rem 2rem 5rem", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/dental-financing-guide-hero.png"
                        alt="Remodel vs rebuild dental practice comparison — modern dental office split view"
                        fill
                        style={{ objectFit: "cover", filter: "brightness(0.3) contrast(1.1)" }}
                        priority
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #0B061B 0%, transparent 30%, transparent 60%, #0B061B 100%)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0B061B 0%, transparent 50%)" }} />
                </div>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,72,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,72,0,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px", zIndex: 1 }} />
                <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: "absolute", top: "20%", right: "10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,72,0,0.12) 0%,transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 1 }} />

                <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", border: "2px solid rgba(255,72,0,0.3)", background: "rgba(255,72,0,0.08)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "2rem" }}>
                            <span style={{ width: "8px", height: "8px", background: "#FF4800", display: "inline-block" }} />
                            Knowledge Hub — Financing Guide
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
                        style={{ fontSize: "clamp(1.7rem, 4.5vw, 3rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
                        Financing Your Tulsa{" "}
                        <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Dental Practice
                        </span>
                        : Remodel vs. Rebuild &amp; 2026 Tax Strategies
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: "700px" }}>
                        Should you remodel or rebuild? What financing options are available in 2026? How do you maximize tax deductions? This guide covers everything Oklahoma dentists need to know about funding their dream practice.
                    </motion.p>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
                        style={{ display: "flex", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>March 2026</div>
                        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>12 Min Read</div>
                        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4800" }}>By UDGOK</div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginTop: "3rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)" }}>
                        <Stat value="$150K–$2M+" label="Project Range" />
                        <Stat value="$1.22M" label="Section 179 Limit" />
                        <Stat value="6.5–12%" label="2026 Loan Rates" />
                        <Stat value="$96K" label="Potential Tax Savings" />
                    </motion.div>
                </div>
            </section>

            {/* ═══ TL;DR ═══ */}
            <section style={{ borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 2rem" }}>
                    <Section>
                        <div data-speakable="true" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <div style={{ fontSize: "0.6rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.2em", textTransform: "uppercase", minWidth: "50px", paddingTop: "0.15rem" }}>TL;DR</div>
                            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
                                Before approaching any lender, you need a robust business plan with market analysis for Tulsa and surrounding areas, 3–5 year financial projections, patient acquisition strategies, and detailed equipment and construction budgets. Remodeling a Tulsa dental office costs $150K–$400K and takes 2–4 months; a full rebuild runs $750K–$2M+ over 6–12 months. In 2026, the best financing options include SBA 504 loans (10% down, 6.5–8%), healthcare finance companies (0–10% down), and equipment financing. The Section 179 deduction allows up to $1.22M in same-year equipment write-offs — potentially saving $96K+ in taxes. This guide also covers the critical steps to protect your local SEO during any renovation or relocation in Tulsa, Oklahoma.
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
                        {tocItems.map((item, i) => <TOCLink key={i} label={item.label} anchor={item.anchor} i={i} />)}
                    </div>
                </Section>
            </section>

            {/* ═══ SECTION 1: REMODEL VS. REBUILD ═══ */}
            <section id="remodel-vs-rebuild" style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <SectionHeading num="01" title="Remodel vs. Rebuild —" accent="Complete 2026 Comparison" />
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", margin: "0 0 2rem", lineHeight: 1.7 }}>
                            The single biggest decision facing Tulsa dentists looking to upgrade their practice. Here&apos;s how the two paths compare across every metric that matters.
                        </p>
                    </Section>

                    <Section delay={0.1}>
                        <DataTable
                            columns={["Factor", "Remodel", "Full Rebuild"]}
                            rows={[
                                ["Typical Cost (Tulsa Market)", "$150,000 – $400,000", "$750,000 – $2M+"],
                                ["Timeline", "2–4 months", "6–12 months"],
                                ["Patient Disruption", "Moderate (phased work possible)", "Minimal (new location)"],
                                ["Customization", "Limited by existing structure", "Complete design freedom"],
                                ["ROI Timeline", "2–3 years", "5–7 years"],
                                ["Real Estate Equity", "Minimal", "Significant asset building"],
                            ]}
                            note="Costs based on UDGOK project data across 100+ healthcare facilities in the Tulsa metro. Actual costs vary by scope and site conditions."
                        />
                    </Section>

                    {/* Blueprint Infographic */}
                    <Section delay={0.12}>
                        <div style={{ marginTop: "2.5rem", border: "2px solid rgba(255,72,0,0.2)", overflow: "hidden", position: "relative" }}>
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "0.75rem 1.5rem", background: "rgba(11,6,27,0.85)", backdropFilter: "blur(8px)", zIndex: 2, display: "flex", alignItems: "center", gap: "0.75rem", borderBottom: "2px solid rgba(255,72,0,0.2)" }}>
                                <div style={{ width: "8px", height: "8px", background: "#FF4800" }} />
                                <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>The Blueprint for Building a Successful Dental Practice</span>
                            </div>
                            <div style={{ position: "relative", width: "100%", background: "#f5f5f5", padding: "3.5rem 1rem 1rem" }}>
                                <Image
                                    src="/images/dental-construction-blueprint-infographic.png"
                                    alt="Remodel vs rebuild dental practice comparison chart 2026 — construction roadmap phases, cost breakdown $300-$500 per square foot, and strategic success pillars for dental office planning"
                                    width={1024}
                                    height={512}
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                            </div>
                            <div style={{ padding: "0.75rem 1.5rem", background: "rgba(11,6,27,0.95)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", margin: 0, textAlign: "center", fontStyle: "italic" }}>
                                    Construction roadmap: Planning &amp; Design → Specialized Build-out → Integration &amp; Handover. Budget $300–$500/SF including equipment.
                                </p>
                            </div>
                        </div>
                    </Section>

                    {/* When each makes sense */}
                    <Section delay={0.15}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2.5rem" }}>
                            {/* Remodel card */}
                            <div style={{ padding: "2rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>🔧</div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 1rem" }}>When Remodeling Makes Sense</h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    <CheckItem text="Your Tulsa location has strong patient loyalty and foot traffic" />
                                    <CheckItem text="Building structure is sound (roof, foundation, HVAC under 15 years old)" />
                                    <CheckItem text="Budget constraints limit options" />
                                    <CheckItem text="Minor capacity increases needed (1–2 additional operatories)" />
                                    <CheckItem text="Lease terms are favorable (5+ years remaining)" />
                                </div>
                            </div>
                            {/* Rebuild card */}
                            <div style={{ padding: "2rem 1.5rem", border: "2px solid rgba(255,72,0,0.15)", background: "rgba(255,72,0,0.03)" }}>
                                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>🏗️</div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 1rem" }}>When Rebuilding Is the Better Investment</h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    <CheckItem text="Current space limits growth potential" />
                                    <CheckItem text="Infrastructure is obsolete (plumbing, electrical over 25 years)" />
                                    <CheckItem text="Building equity is a long-term financial priority" />
                                    <CheckItem text="Brand refresh is a strategic goal" />
                                    <CheckItem text="You're expanding from 3 chairs to 6+ operatories" />
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Managing downtime */}
                    <Section delay={0.2}>
                        <div style={{ marginTop: "2.5rem", padding: "2rem", border: "2px solid rgba(255,72,0,0.15)", background: "rgba(255,72,0,0.03)", position: "relative" }}>
                            <div style={{ position: "absolute", top: "-12px", left: "1.5rem", background: "rgba(11,6,27,0.95)", padding: "0 0.75rem" }}>
                                <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>Critical — Managing Downtime</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "0.5rem" }}>
                                {[
                                    { icon: "📋", text: "Phase construction to keep 50%+ operatories functioning at all times" },
                                    { icon: "📅", text: "Schedule major work during historically slow periods for your Tulsa practice" },
                                    { icon: "🏥", text: "Consider temporary space rental for emergency and urgent dental services" },
                                    { icon: "📢", text: "Communicate timeline clearly to patients via email, signage, and social media" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                                        <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ SECTION 2: LENDERS ═══ */}
            <section id="lenders" style={{ borderTop: "2px solid rgba(255,255,255,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <SectionHeading num="02" title="Expert Advice on" accent="Lenders (2026 Market Data)" />
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", margin: "0 0 2rem", lineHeight: 1.7 }}>
                            Rely on insights from healthcare design experts like Curate Studios when evaluating financing partners. Here are the four primary lending categories available to Tulsa dentists in 2026.
                        </p>
                    </Section>

                    <Section delay={0.1}>
                        <DataTable
                            columns={["Lender Type", "Rate (2026)", "Down Payment", "Collateral", "Best For"]}
                            rows={[
                                ["Traditional Banks", "8.5–10.5%", "15–25%", "Personal guarantee, home equity", "Established practices, strong credit"],
                                ["Healthcare Finance Cos.", "7.5–11%", "0–10%", "Equipment + practice value", "New builds, equipment-heavy projects"],
                                ["SBA 504 Loans", "6.5–8%", "10%", "Real estate", "Property purchases, long-term holds"],
                                ["Equipment Financing", "8–12%", "$0", "Equipment only", "Tech upgrades, imaging systems"],
                            ]}
                            note="Rates based on 2026 market conditions. Individual rates depend on credit score, practice history, and loan amount."
                        />
                    </Section>

                    {/* Image break */}
                    <Section delay={0.15}>
                        <div style={{ position: "relative", aspectRatio: "16/7", overflow: "hidden", border: "2px solid rgba(255,255,255,0.06)", marginTop: "2.5rem" }}>
                            <Image src="/images/dental-tax-strategy.png" alt="Section 179 tax savings example for dental equipment — premium dental chairs and imaging systems" fill style={{ objectFit: "cover", filter: "brightness(0.75) contrast(1.05)" }} />
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(11,6,27,0.9) 0%, transparent 100%)" }}>
                                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Premium Dental Equipment — Eligible for Section 179</span>
                            </div>
                        </div>
                    </Section>

                    {/* Questions to ask */}
                    <Section delay={0.2}>
                        <div style={{ marginTop: "2.5rem" }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", margin: "0 0 1.25rem" }}>Questions to Ask Tulsa Lenders</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {[
                                    "Do you have experience financing dental practices specifically?",
                                    "What are your current rates and terms for a renovation or build-out of this scope?",
                                    "How quickly can you provide pre-approval?",
                                    "Do you require personal guarantees or home equity as collateral?",
                                    "What fees are included at closing (origination, appraisal, etc.)?",
                                ].map((q, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.75rem 1rem", border: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                                        <span style={{ fontSize: "0.7rem", fontWeight: 900, color: "#FF4800", minWidth: "16px" }}>{i + 1}.</span>
                                        <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{q}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Section>

                    {/* Oklahoma resources */}
                    <Section delay={0.25}>
                        <div style={{ marginTop: "2rem", padding: "1.5rem", border: "2px solid rgba(255,72,0,0.15)", background: "rgba(255,72,0,0.03)" }}>
                            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                <div style={{ fontSize: "1.5rem" }}>🏛️</div>
                                <div>
                                    <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff", margin: "0 0 0.5rem" }}>Oklahoma-Specific Lending Resources</h3>
                                    <ul style={{ margin: 0, padding: "0 0 0 1rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, listStyleType: "disc" }}>
                                        <li>Contact the <strong style={{ color: "#fff" }}>Oklahoma Dental Association</strong> for vetted lender recommendations</li>
                                        <li>Check with the <strong style={{ color: "#fff" }}>Tulsa Small Business Development Center</strong> for SBA guidance</li>
                                        <li>Ask fellow Tulsa dentists for referrals through local dental societies</li>
                                        <li>Explore <strong style={{ color: "#fff" }}>Oklahoma Development Finance Authority (ODFA)</strong> programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ VIDEO BREAK ═══ */}
            <section style={{ borderTop: "2px solid rgba(255,255,255,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
                    <Section>
                        <div style={{ border: "2px solid rgba(255,72,0,0.2)", overflow: "hidden", position: "relative" }}>
                            <div style={{ padding: "0.75rem 1.5rem", background: "rgba(255,72,0,0.06)", borderBottom: "2px solid rgba(255,72,0,0.15)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF4800", animation: "pulse 2s ease-in-out infinite" }} />
                                <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>Watch — Inside a Dental Office Build-Out</span>
                            </div>
                            <video
                                controls
                                preload="metadata"
                                playsInline
                                poster="/images/dental-financing-guide-hero.png"
                                style={{ width: "100%", display: "block", background: "#000" }}
                            >
                                <source src="/videos/udgok-dental-office-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div style={{ padding: "0.75rem 1.5rem", background: "rgba(11,6,27,0.95)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", margin: 0, textAlign: "center" }}>
                                    See what a modern Tulsa dental office build-out looks like from start to finish — UDGOK
                                </p>
                            </div>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ SECTION 3: TAX STRATEGIES ═══ */}
            <section id="tax-strategies" style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <SectionHeading num="03" title="2026 Tax Strategies for" accent="Dentists" />
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", margin: "0 0 2.5rem", lineHeight: 1.7 }}>
                            Strategic tax planning can reduce the effective cost of your Tulsa dental practice investment by $100,000+. Here are the three key strategies every dentist should discuss with their CPA.
                        </p>
                    </Section>

                    {/* Section 179 */}
                    <Section delay={0.1}>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", margin: "0 0 1.25rem" }}>Section 179 Deduction (2026 Limits)</h3>
                        <DataTable
                            columns={["2026 Section 179 Details", "Amount"]}
                            rows={[
                                ["Maximum Deduction", "$1,220,000 (projected)"],
                                ["Phase-out Threshold", "$3,050,000"],
                                ["Qualifying Items", "Dental chairs, imaging equipment, software, computers, sterilization units"],
                            ]}
                        />
                    </Section>

                    {/* Tax savings example */}
                    <Section delay={0.15}>
                        <div style={{ marginTop: "2rem", padding: "2rem", border: "3px solid #FF4800", background: "rgba(255,72,0,0.06)", position: "relative" }}>
                            <div style={{ position: "absolute", top: "-12px", left: "1.5rem", background: "rgba(11,6,27,0.95)", padding: "0 0.75rem" }}>
                                <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>Worked Example — Tulsa Practice</span>
                            </div>
                            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0.5rem 0 1.5rem" }}>
                                You purchase <strong style={{ color: "#fff" }}>$300,000</strong> in qualifying equipment for your Tulsa practice in 2026:
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                                {[
                                    { label: "Immediate Deduction", value: "$300,000", sub: "Full purchase price" },
                                    { label: "Tax Savings (32% bracket)", value: "~$96,000", sub: "Cash back in your pocket" },
                                    { label: "Net Equipment Cost", value: "$204,000", sub: "Effective cost after tax benefit" },
                                ].map((item, i) => (
                                    <div key={i} style={{ textAlign: "center", padding: "1.25rem", border: "2px solid rgba(255,72,0,0.2)", background: "rgba(255,72,0,0.04)" }}>
                                        <div style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 900, color: "#FF4800" }}>{item.value}</div>
                                        <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", marginTop: "0.25rem" }}>{item.label}</div>
                                        <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", marginTop: "0.25rem" }}>{item.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Section>

                    {/* Cost Segregation */}
                    <Section delay={0.2}>
                        <div style={{ marginTop: "2.5rem" }}>
                            <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", margin: "0 0 1rem" }}>Cost Segregation Studies</h3>
                            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "0 0 1.25rem" }}>
                                Reclassify building components to accelerate depreciation and unlock massive deductions:
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {[
                                    { item: "Dental cabinetry", reclassify: "7-year property (vs. 39-year)" },
                                    { item: "Specialized electrical/plumbing", reclassify: "15-year property" },
                                    { item: "Flooring, wall coverings", reclassify: "5–7 year property" },
                                ].map((row, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", padding: "0.75rem 1rem", border: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", minWidth: "200px" }}>{row.item}</span>
                                        <span style={{ fontSize: "0.85rem", color: "#FF4800", fontWeight: 600 }}>→ {row.reclassify}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "1.25rem 0 0" }}>
                                Typical savings for a <strong style={{ color: "#fff" }}>$1M Tulsa build-out: $75,000 – $150,000</strong> in accelerated deductions over 5 years.
                            </p>
                        </div>
                    </Section>

                    {/* Bonus Depreciation */}
                    <Section delay={0.25}>
                        <div style={{ marginTop: "2rem", padding: "1.5rem", border: "2px solid rgba(255,72,0,0.15)", background: "rgba(255,72,0,0.03)" }}>
                            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                <div style={{ fontSize: "1.5rem" }}>⚡</div>
                                <div>
                                    <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff", margin: "0 0 0.5rem" }}>2026 Bonus Depreciation</h3>
                                    <ul style={{ margin: 0, padding: "0 0 0 1rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, listStyleType: "disc" }}>
                                        <li>Current rate: <strong style={{ color: "#FF4800" }}>40%</strong> (phasing down from 60% in 2025)</li>
                                        <li>Applies to equipment and certain qualified improvement property</li>
                                        <li><strong style={{ color: "#fff" }}>Action item:</strong> Consult your Tulsa CPA to time purchases strategically before further phase-down</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ SECTION 4: SEO PROTECTION ═══ */}
            <section id="seo-protection" style={{ borderTop: "2px solid rgba(255,255,255,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <SectionHeading num="04" title="Protecting Local SEO During a" accent="Remodel" />
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", margin: "0 0 0.75rem", lineHeight: 1.7 }}>
                            <strong style={{ color: "#FF4800" }}>This is the section most dentists overlook — and it costs them thousands in lost patients.</strong> Your Google visibility is an asset worth protecting during any renovation or relocation.
                        </p>
                    </Section>

                    {/* Image */}
                    <Section delay={0.1}>
                        <div style={{ position: "relative", aspectRatio: "16/7", overflow: "hidden", border: "2px solid rgba(255,255,255,0.06)", marginBottom: "2.5rem" }}>
                            <Image src="/images/dental-seo-renovation.png" alt="Tulsa dental office renovation under construction — protecting local SEO during downtime" fill style={{ objectFit: "cover", filter: "brightness(0.75) contrast(1.05)" }} />
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(11,6,27,0.9) 0%, transparent 100%)" }}>
                                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Protect Your Rankings During Renovation</span>
                            </div>
                        </div>
                    </Section>

                    {/* GBP, NAP, Recovery cards */}
                    <Section delay={0.15}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                            {/* GBP Card */}
                            <div style={{ padding: "2rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📍</div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 0.75rem" }}>Google Business Profile Management</h3>
                                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 1rem" }}>
                                    <strong style={{ color: "#fff" }}>Critical:</strong> If your Tulsa clinic closes temporarily during renovation:
                                </p>
                                <ul style={{ margin: 0, padding: "0 0 0 1rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, listStyleType: "disc" }}>
                                    <li>Set &ldquo;Temporarily Closed&rdquo; status — <strong style={{ color: "#FF4800" }}>NEVER</strong> permanently closed</li>
                                    <li>Add specific reopening date if known</li>
                                    <li>Update description with renovation messaging</li>
                                    <li>Share progress photos weekly to your profile</li>
                                </ul>
                            </div>
                            {/* NAP Card */}
                            <div style={{ padding: "2rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔗</div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 0.75rem" }}>NAP Consistency Checklist</h3>
                                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 1rem" }}>
                                    Maintain identical Name, Address, Phone across <strong style={{ color: "#fff" }}>all</strong> listings:
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                    {["Google Business Profile", "Yelp, Healthgrades, Zocdoc", "Facebook, Instagram", "Tulsa dental directories", "Insurance provider portals", "Oklahoma Dental Board listing"].map((item, i) => (
                                        <CheckItem key={i} text={item} />
                                    ))}
                                </div>
                            </div>
                            {/* Recovery Card */}
                            <div style={{ padding: "2rem 1.5rem", border: "2px solid rgba(255,72,0,0.15)", background: "rgba(255,72,0,0.03)" }}>
                                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🚀</div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 0.75rem" }}>Post-Renovation Recovery</h3>
                                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 1rem" }}>
                                    Rebuild momentum fast after reopening:
                                </p>
                                <ul style={{ margin: 0, padding: "0 0 0 1rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, listStyleType: "disc" }}>
                                    <li>Request reviews mentioning the new space</li>
                                    <li>Update all photos on GBP and social media</li>
                                    <li>Create a blog post: &ldquo;Our Tulsa Dental Office Renovation: Before &amp; After&rdquo;</li>
                                    <li>Send email blast announcing the grand reopening</li>
                                    <li>Run targeted Google Ads for &ldquo;dentist near me&rdquo; in Tulsa</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section delay={0.2}>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginTop: "1.5rem", fontStyle: "italic", textAlign: "center" }}>
                            <strong style={{ color: "rgba(255,255,255,0.6)" }}>Why this matters:</strong> Inconsistent NAP data signals to Google that your business may be unreliable, damaging local rankings you&apos;ve built over years. One renovation without proper SEO management can undo months of organic growth.
                        </p>
                    </Section>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>FAQ</div>
                            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>
                                Dental Practice Financing FAQ —{" "}
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
                            <Link href="/guide-dental-office-construction-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>Dental Office Construction Timeline</Link>
                            {" "} · {" "}
                            <Link href="/dental-construction-costs" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>2026 Dental Construction Cost Analysis</Link>
                            {" "} · {" "}
                            <Link href="/dental-office-construction-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>Dental Construction Tulsa</Link>
                            {" "} · {" "}
                            <Link href="/tulsa-medical-construction" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>Tulsa Medical Construction</Link>
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
                        Don&apos;t Let Financing Halt Your Growth
                    </h2>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
                        Schedule a free consultation with our Tulsa dental design-build team to discuss your budget, loan options, and renovation timeline. Most estimates delivered within 48 hours.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" style={{ display: "inline-block", padding: "1rem 2.5rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.3s" }}>
                            Get Your Free Consultation →
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
