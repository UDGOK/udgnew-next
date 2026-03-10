"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─── Animated Section ─── */
function S({ children, d = 0 }: { children: React.ReactNode; d?: number }) {
    const r = useRef(null);
    const v = useInView(r, { once: true, margin: "-60px" });
    return <motion.div ref={r} initial={{ opacity: 0, y: 40 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

/* ─── Section Header ─── */
function SH({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
    return (
        <S>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>{tag}</div>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.1rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 0.5rem" }}>{title}</h2>
                {sub && <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", margin: 0, maxWidth: "650px", marginLeft: "auto", marginRight: "auto" }}>{sub}</p>}
            </div>
        </S>
    );
}

/* ─── Data ─── */
const BUILDING_TYPES = [
    { type: "Medical Office", low: 180, high: 350, avg: 265, trend: "+5.2%", icon: "🏥", notes: "Includes medical gas, specialized HVAC, infection control, ADA patient areas" },
    { type: "Dental Office", low: 200, high: 400, avg: 300, trend: "+4.8%", icon: "🦷", notes: "Operatories, sterilization suites, plumbing-intensive, nitrous/O2 systems" },
    { type: "Retail Build-Out", low: 80, high: 180, avg: 130, trend: "+3.9%", icon: "🏬", notes: "Standard TI from shell condition, storefront, finishes, basic MEP" },
    { type: "Restaurant", low: 150, high: 350, avg: 250, trend: "+6.1%", icon: "🍽️", notes: "Commercial kitchen, exhaust hood, grease trap, walk-in cooler, health dept" },
    { type: "Office Build-Out", low: 60, high: 150, avg: 105, trend: "+3.2%", icon: "🏢", notes: "Class A/B finish, HVAC, structured cabling, conference rooms" },
    { type: "Warehouse (PEMB)", low: 25, high: 50, avg: 38, trend: "+2.8%", icon: "🏭", notes: "Pre-engineered metal shell with slab, basic electrical, dock doors" },
    { type: "Industrial (Full)", low: 85, high: 200, avg: 142, trend: "+4.5%", icon: "🔩", notes: "Crane systems, heavy MEP, reinforced slab, fire sprinkler" },
    { type: "Convenience Store", low: 200, high: 350, avg: 275, trend: "+5.5%", icon: "⛽", notes: "Fuel systems, walk-in coolers/freezers, commercial kitchen" },
    { type: "Hotel", low: 120, high: 250, avg: 185, trend: "+4.1%", icon: "🏨", notes: "Prototype-compliant, franchise standard, FF&E coordination" },
    { type: "Self-Storage", low: 35, high: 85, avg: 60, trend: "+2.5%", icon: "📦", notes: "Drive-up units to climate-controlled multi-story" },
    { type: "Eye/Surgery Center", low: 250, high: 450, avg: 350, trend: "+5.8%", icon: "👁️", notes: "AAAHC accreditation, sterile environments, specialized MEP" },
    { type: "Shopping Center", low: 90, high: 180, avg: 135, trend: "+3.7%", icon: "🛍️", notes: "Multi-tenant pad site, shared utilities, individual bay delivery" },
];

const COST_DRIVERS = [
    { factor: "Labor", pct: 40, change: "+6.2% YoY", detail: "Skilled trade shortage driving wage increases across all crafts. Electricians and plumbers most impacted." },
    { factor: "Materials", pct: 30, change: "+3.8% YoY", detail: "Steel prices stabilized after 2024 peaks. Concrete, copper, and electrical equipment still elevated." },
    { factor: "Site Work", pct: 10, change: "+4.1% YoY", detail: "Excavation, grading, utilities, parking lot. Varies dramatically by site conditions." },
    { factor: "Permits & Fees", pct: 5, change: "+2.0% YoY", detail: "City of Tulsa building permit, plan review, impact fees, inspections." },
    { factor: "Design & Engineering", pct: 8, change: "+3.5% YoY", detail: "Architectural, structural, MEP engineering, and specialty consultants." },
    { factor: "Contingency", pct: 7, change: "—", detail: "Industry standard 5–10% contingency for unforeseen conditions." },
];

const HISTORICAL = [
    { year: "2020", commercial: 95, medical: 210, industrial: 30, retail: 100 },
    { year: "2021", commercial: 105, medical: 230, industrial: 35, retail: 110 },
    { year: "2022", commercial: 120, medical: 260, industrial: 42, retail: 125 },
    { year: "2023", commercial: 115, medical: 255, industrial: 40, retail: 120 },
    { year: "2024", commercial: 110, medical: 250, industrial: 38, retail: 125 },
    { year: "2025", commercial: 115, medical: 260, industrial: 40, retail: 130 },
    { year: "2026", commercial: 120, medical: 265, industrial: 42, retail: 135 },
];

/* ════════════════════ MAIN ════════════════════ */
export default function TulsaConstructionCostsUI() {
    const [selectedType, setSelectedType] = useState<number | null>(null);
    const [sqft, setSqft] = useState<string>("5000");
    const [quality, setQuality] = useState<"low" | "mid" | "high">("mid");

    /* ── Quick Estimate Calculator ── */
    const selectedBuilding = selectedType !== null ? BUILDING_TYPES[selectedType] : null;
    const sqftNum = parseInt(sqft) || 0;
    const multiplier = quality === "low" ? 0.85 : quality === "high" ? 1.15 : 1;
    const estimateLow = selectedBuilding ? Math.round(selectedBuilding.low * sqftNum * multiplier) : 0;
    const estimateHigh = selectedBuilding ? Math.round(selectedBuilding.high * sqftNum * multiplier) : 0;

    const formatCurrency = (n: number) => "$" + n.toLocaleString("en-US");

    return (
        <div style={{ background: "#0B061B", color: "#fff", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

            {/* ═══════ HERO ═══════ */}
            <section style={{ position: "relative", padding: "8rem 2rem 5rem", background: "linear-gradient(180deg,#0B061B 0%,#12082A 50%,#0B061B 100%)", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,72,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,72,0,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,72,0,0.15) 0%,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

                <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", border: "2px solid rgba(255,72,0,0.3)", background: "rgba(255,72,0,0.08)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "2rem" }}>
                            <span style={{ width: "8px", height: "8px", background: "#FF4800", display: "inline-block" }} />
                            Updated Q1 2026
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
                        style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
                        Tulsa Construction{" "}
                        <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Cost Index
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ fontSize: "clamp(0.95rem,2vw,1.1rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: "700px", margin: "0 auto" }}>
                        Real construction cost data for Tulsa, Oklahoma — cost per square foot by building type, historical trends, cost drivers, and a free quick estimator. Based on 100+ completed projects.
                    </motion.p>
                </div>
            </section>

            {/* ═══════ TL;DR ═══════ */}
            <section style={{ borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
                    <S>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <div style={{ fontSize: "0.6rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.2em", textTransform: "uppercase", minWidth: "50px", paddingTop: "0.15rem" }}>TL;DR</div>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
                                Tulsa construction costs in 2026 range from $25/sf (basic warehouse shells) to $450/sf (ambulatory surgery centers). The median commercial build-out costs $105–$135/sf. Medical construction runs $180–$350/sf. Year-over-year construction cost escalation is 4–6%, driven primarily by skilled labor shortages (+6.2% YoY) and material costs (+3.8% YoY). All data is sourced from UDGOK&apos;s portfolio of 100+ completed projects in the Tulsa metro.
                            </p>
                        </div>
                    </S>
                </div>
            </section>

            {/* ═══════ INTERACTIVE ESTIMATOR ═══════ */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                <SH tag="Free Tool" title="Quick Construction Cost Estimator" sub="Select a building type, enter square footage, and get an instant conceptual range" />
                <S d={0.1}>
                    <div style={{ border: "2px solid rgba(255,72,0,0.2)", background: "rgba(255,72,0,0.03)", padding: "2rem" }}>

                        {/* Building Type Selector */}
                        <div style={{ marginBottom: "2rem" }}>
                            <label style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", display: "block", marginBottom: "0.75rem" }}>1. Select Building Type</label>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: "0.5rem" }}>
                                {BUILDING_TYPES.map((b, i) => (
                                    <button key={i} onClick={() => setSelectedType(i)}
                                        style={{ padding: "0.6rem", background: selectedType === i ? "rgba(255,72,0,0.15)" : "rgba(255,255,255,0.03)", border: `2px solid ${selectedType === i ? "#FF4800" : "rgba(255,255,255,0.08)"}`, color: selectedType === i ? "#FF4800" : "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: "0.72rem", fontWeight: 700, textAlign: "center", transition: "all 0.2s" }}>
                                        <span style={{ display: "block", fontSize: "1.2rem", marginBottom: "0.25rem" }}>{b.icon}</span>
                                        {b.type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Square Footage Input */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
                            <div>
                                <label style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", display: "block", marginBottom: "0.5rem" }}>2. Square Footage</label>
                                <input type="number" value={sqft} onChange={e => setSqft(e.target.value)} min="500" max="500000" step="500"
                                    style={{ width: "100%", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "1rem", fontWeight: 700, outline: "none" }} />
                            </div>
                            <div>
                                <label style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", display: "block", marginBottom: "0.5rem" }}>3. Quality Level</label>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                    {(["low", "mid", "high"] as const).map(q => (
                                        <button key={q} onClick={() => setQuality(q)}
                                            style={{ flex: 1, padding: "0.75rem", background: quality === q ? "rgba(255,72,0,0.15)" : "rgba(255,255,255,0.03)", border: `2px solid ${quality === q ? "#FF4800" : "rgba(255,255,255,0.08)"}`, color: quality === q ? "#FF4800" : "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", transition: "all 0.2s" }}>
                                            {q === "low" ? "Economy" : q === "mid" ? "Standard" : "Premium"}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Result */}
                        <AnimatePresence mode="wait">
                            {selectedBuilding && sqftNum > 0 && (
                                <motion.div key={`${selectedType}-${sqft}-${quality}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
                                    style={{ background: "rgba(255,72,0,0.08)", border: "2px solid rgba(255,72,0,0.25)", padding: "1.5rem", textAlign: "center" }}>
                                    <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>
                                        Estimated Range for {sqftNum.toLocaleString()} SF {selectedBuilding.type}
                                    </div>
                                    <div style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 900, background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                        {formatCurrency(estimateLow)} — {formatCurrency(estimateHigh)}
                                    </div>
                                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: "0.5rem" }}>
                                        {selectedBuilding.notes}
                                    </div>
                                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", marginTop: "1rem", fontStyle: "italic" }}>
                                        Conceptual range only. Contact UDGOK for a detailed line-item estimate.
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </S>
            </section>

            {/* ═══════ COST PER SF TABLE ═══════ */}
            <section style={{ background: "linear-gradient(180deg,rgba(255,72,0,0.02) 0%,transparent 100%)", borderTop: "2px solid rgba(255,255,255,0.04)", borderBottom: "2px solid rgba(255,255,255,0.04)" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <SH tag="2026 Data" title="Construction Cost Per Square Foot — Tulsa, OK" sub="All costs fully loaded: design, permitting, construction, and inspections" />
                    <S d={0.1}>
                        <div style={{ border: "2px solid rgba(255,255,255,0.06)", overflow: "auto" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 100px 100px 100px 80px", gap: "0.5rem", padding: "1rem 1.25rem", background: "rgba(255,72,0,0.08)", borderBottom: "2px solid rgba(255,72,0,0.2)", minWidth: "600px" }}>
                                {["", "Building Type", "Low $/SF", "High $/SF", "Avg $/SF", "YoY"].map((h, i) => (
                                    <div key={i} style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4800", textAlign: i > 1 ? "center" : "left" }}>{h}</div>
                                ))}
                            </div>
                            {BUILDING_TYPES.map((b, i) => (
                                <div key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr 100px 100px 100px 80px", gap: "0.5rem", padding: "0.75rem 1.25rem", borderBottom: i < BUILDING_TYPES.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent", minWidth: "600px" }}>
                                    <div style={{ fontSize: "1.2rem" }}>{b.icon}</div>
                                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>{b.type}</div>
                                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>${b.low}</div>
                                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>${b.high}</div>
                                    <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#FF4800", textAlign: "center" }}>${b.avg}</div>
                                    <div style={{ fontSize: "0.75rem", color: "rgba(255,200,100,0.6)", textAlign: "center", fontWeight: 700 }}>{b.trend}</div>
                                </div>
                            ))}
                        </div>
                    </S>
                    <S d={0.2}>
                        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: "1rem", textAlign: "center", fontStyle: "italic" }}>
                            Data sourced from UDGOK&apos;s portfolio of 100+ completed projects in the Tulsa metro, Q1 2026. Costs vary by site conditions, complexity, and market timing.
                        </p>
                    </S>
                </div>
            </section>

            {/* ═══════ COST DRIVERS ═══════ */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                <SH tag="Cost Breakdown" title="What Drives Construction Costs in Tulsa?" sub="Understanding where your money goes" />
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {COST_DRIVERS.map((d, i) => (
                        <S key={i} d={i * 0.06}>
                            <div style={{ display: "grid", gridTemplateColumns: "120px 80px 1fr", gap: "1.5rem", alignItems: "center", padding: "1.25rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                                <div>
                                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff" }}>{d.factor}</div>
                                    <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,200,100,0.6)", marginTop: "0.15rem" }}>{d.change}</div>
                                </div>
                                <div style={{ position: "relative", height: "8px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${d.pct * 2.5}%` }} transition={{ duration: 1, ease: "easeOut" }}
                                        style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "#FF4800" }} />
                                </div>
                                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{d.detail}</div>
                            </div>
                        </S>
                    ))}
                </div>
            </section>

            {/* ═══════ HISTORICAL TRENDS ═══════ */}
            <section style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <SH tag="Trends" title="Tulsa Construction Costs — 7 Year History" sub="Average $/SF by building type, 2020–2026" />
                    <S d={0.1}>
                        <div style={{ border: "2px solid rgba(255,255,255,0.06)", overflow: "auto" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "80px repeat(4,1fr)", gap: "1rem", padding: "1rem 1.25rem", background: "rgba(255,72,0,0.08)", borderBottom: "2px solid rgba(255,72,0,0.2)", minWidth: "500px" }}>
                                {["Year", "Office $/SF", "Medical $/SF", "Industrial $/SF", "Retail $/SF"].map((h, i) => (
                                    <div key={i} style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4800", textAlign: i === 0 ? "left" : "center" }}>{h}</div>
                                ))}
                            </div>
                            {HISTORICAL.map((h, i) => (
                                <div key={i} style={{ display: "grid", gridTemplateColumns: "80px repeat(4,1fr)", gap: "1rem", padding: "0.75rem 1.25rem", borderBottom: i < HISTORICAL.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", background: h.year === "2026" ? "rgba(255,72,0,0.06)" : i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent", minWidth: "500px" }}>
                                    <div style={{ fontSize: "0.85rem", fontWeight: h.year === "2026" ? 900 : 700, color: h.year === "2026" ? "#FF4800" : "#fff" }}>{h.year}</div>
                                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>${h.commercial}</div>
                                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>${h.medical}</div>
                                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>${h.industrial}</div>
                                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>${h.retail}</div>
                                </div>
                            ))}
                        </div>
                    </S>
                </div>
            </section>

            {/* ═══════ CROSS-LINK ═══════ */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem 2rem" }}>
                <S>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                        <div style={{ width: "4px", height: "40px", background: "#FF4800", flexShrink: 0 }} />
                        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                            UDGOK is a leading{" "}
                            <Link href="/construction-companies-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>construction company in Tulsa, Oklahoma</Link>
                            {" "}— delivering commercial, medical, dental, industrial, and retail projects. View our{" "}
                            <Link href="/construction-companies-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>complete guide to construction in Tulsa</Link>.
                        </p>
                    </div>
                </S>
            </section>

            {/* ═══════ CTA ═══════ */}
            <section style={{ padding: "4rem 2rem", borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)", textAlign: "center" }}>
                <S>
                    <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 900, margin: "0 0 1rem" }}>Need a Detailed Estimate?</h2>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                        The calculator above provides conceptual ranges. For a detailed line-item estimate based on your specific project, contact UDGOK. Most estimates delivered within 48 hours.
                    </p>
                    <Link href="/contact" style={{ display: "inline-block", padding: "1rem 2.5rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
                        Get Your Free Detailed Estimate →
                    </Link>
                </S>
            </section>
        </div>
    );
}
