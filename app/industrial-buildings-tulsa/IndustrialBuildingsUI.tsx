"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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

/* ─── Stat ─── */
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

/* ─── Service Card ─── */
function ServiceCard({ icon, title, desc, i }: { icon: string; title: string; desc: string; i: number }) {
    const [h, setH] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{ padding: "2rem 1.5rem", background: h ? "rgba(255,72,0,0.06)" : "rgba(255,255,255,0.02)", border: `2px solid ${h ? "rgba(255,72,0,0.3)" : "rgba(255,255,255,0.06)"}`, cursor: "default", transition: "all 0.3s", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: h ? "#FF4800" : "transparent", transition: "background 0.3s" }} />
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.3 }}>{title}</h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
        </motion.div>
    );
}

/* ─── Expandable FAQ ─── */
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

/* ═════════════════════ MAIN ═════════════════════ */
export default function IndustrialBuildingsUI() {
    const services = [
        { icon: "🏭", title: "Warehouses & Distribution", desc: "Clear-span warehouses from 10,000 to 200,000+ SF with dock-high loading, grade-level doors, ESFR sprinkler systems, and heavy-duty 6\" concrete floors rated for forklift traffic." },
        { icon: "🔩", title: "Pre-Engineered Metal Buildings", desc: "Red iron PEMB structures that are 30% faster to erect and 20–30% cheaper than conventional steel. Custom designed for Oklahoma's high wind loads and extreme heat exposure." },
        { icon: "❄️", title: "Cold Storage & Food Processing", desc: "Temperature-controlled facilities with insulated metal panels, vapor barriers, ammonia/freon refrigeration rough-ins, and USDA/FDA-compliant construction standards." },
        { icon: "�icing", title: "Manufacturing Facilities", desc: "Heavy industrial construction with reinforced foundations, overhead crane systems (up to 50-ton capacity), high bay clear heights (30–60 ft), and 3-phase power infrastructure." },
        { icon: "🔧", title: "Flex Space & Light Industrial", desc: "Hybrid office/warehouse buildings with storefront office entries, rear dock or grade loading, and flexible bay configurations for multi-tenant or single-user layouts." },
        { icon: "📦", title: "Self-Storage Facilities", desc: "Single-story drive-up units, multi-story climate-controlled buildings, and boat/RV storage with overhead roll-up doors, hallway systems, and security infrastructure." },
        { icon: "🚜", title: "Agricultural Buildings", desc: "Barns, equipment shelters, grain storage, livestock facilities, and hay storage buildings designed for Oklahoma's agricultural operations." },
        { icon: "🔌", title: "Industrial Renovations", desc: "Structural retrofits, seismic upgrades, crane rail installations, mezzanine additions, energy efficiency upgrades, and code compliance renovations for existing industrial buildings." },
    ];

    const faqs = [
        { q: "How much does it cost to build an industrial building in Tulsa, Oklahoma?", a: "Industrial building costs in Tulsa range from $25–$60 per square foot for a basic pre-engineered metal shell to $85–$200/sf for a fully finished turnkey facility. A standard 10,000 SF warehouse shell costs $250K–$600K. A 50,000 SF distribution center with dock-high loading, ESFR sprinklers, and office build-out costs $2.5M–$5M. Costs vary by foundation requirements, clear height, crane capacity, insulation, and fire protection systems." },
        { q: "What is a pre-engineered metal building (PEMB) and why is it cheaper?", a: "A pre-engineered metal building (PEMB), also known as a red iron building, is a steel-framed structure where all components — rigid frames, purlins, girts, panels, and trim — are manufactured in a factory and assembled on-site. PEMBs cost 20–30% less than conventional steel because: (1) factory fabrication is more efficient than field fabrication, (2) lighter frame designs require smaller foundations, (3) faster erection reduces labor costs, and (4) single-source manufacturing eliminates coordination between multiple trades." },
        { q: "How long does it take to build an industrial building in Oklahoma?", a: "Timeline depends on size and complexity. A standard 10,000 SF pre-engineered metal warehouse takes 3–5 months from design through CO. A 50,000 SF distribution center takes 6–10 months. Manufacturing facilities with crane systems and specialized MEP take 8–14 months. UDGOK overlaps design, permitting, and site work phases to compress schedules by 20–30% versus sequential delivery." },
        { q: "What wind load ratings are required for industrial buildings in Oklahoma?", a: "Oklahoma building codes require minimum 90 mph wind speed ratings (3-second gust) for most areas. Tulsa metro requires 90 mph base with exposure and importance factor adjustments. UDGOK designs all industrial buildings to meet or exceed IBC 2021 wind load requirements, and we engineer for Oklahoma's specific tornado and high-wind risk profile." },
        { q: "Does UDGOK build pre-engineered metal buildings (PEMB)?", a: "Yes. UDGOK builds pre-engineered metal buildings for warehouses, manufacturing, agricultural, and commercial applications. We partner with multiple PEMB manufacturers to ensure competitive pricing and lead times. Our team handles the full scope — site work, foundations, steel erection, insulation, MEP, fire protection, and office build-out." },
        { q: "What is the difference between conventional steel and pre-engineered metal buildings?", a: "Conventional steel uses standard hot-rolled shapes (wide flanges, channels) with field-welded or bolted connections. It offers maximum design flexibility but costs more and takes longer. Pre-engineered metal buildings use computer-optimized tapered frames that are lighter and cheaper to manufacture. PEMBs are ideal for rectangular, clear-span buildings. Conventional steel is better for irregular geometries, multi-story buildings, or heavy crane loads exceeding 30 tons." },
        { q: "Can UDGOK add crane systems to industrial buildings?", a: "Yes. We design and install overhead bridge crane systems with capacities from 5 to 50 tons. Crane rail and runway structures are integrated into the building's primary frame during design — not added as an afterthought. We accommodate top-running, under-running, and jib crane configurations." },
        { q: "What areas does UDGOK serve for industrial construction?", a: "UDGOK builds industrial facilities across the Tulsa metro (downtown, midtown, south Tulsa, east Tulsa), surrounding suburbs (Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa), greater Oklahoma (OKC, Muskogee, McAlester), and the Dallas-Fort Worth metro in Texas." },
    ];

    const costData = [
        { type: "PEMB Shell (no slab)", range: "$15 – $25", note: "Metal building kit only, no foundation or erection" },
        { type: "PEMB Turnkey Shell", range: "$25 – $50", note: "Foundation, erection, insulation, basic electrical" },
        { type: "Warehouse (standard)", range: "$50 – $90", note: "Slab, dock doors, sprinkler, lighting, office" },
        { type: "Distribution Center", range: "$70 – $120", note: "ESFR sprinkler, dock-high loading, office build-out" },
        { type: "Manufacturing Facility", range: "$90 – $200", note: "Crane systems, reinforced slab, heavy MEP" },
        { type: "Cold Storage", range: "$120 – $250", note: "Insulated panels, refrigeration, vapor barriers" },
        { type: "Self-Storage (drive-up)", range: "$35 – $55", note: "Single-story, non-climate, roll-up doors" },
        { type: "Self-Storage (climate)", range: "$55 – $85", note: "Multi-story, climate-controlled, hallway system" },
    ];

    return (
        <div style={{ background: "#0B061B", color: "#fff", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

            {/* ── Hero ── */}
            <section style={{ position: "relative", padding: "8rem 2rem 5rem", background: "linear-gradient(180deg,#0B061B 0%,#12082A 50%,#0B061B 100%)", overflow: "hidden" }}>
                {/* Grid bg */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,72,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,72,0,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                {/* Orb */}
                <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,72,0,0.15) 0%,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

                <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", border: "2px solid rgba(255,72,0,0.3)", background: "rgba(255,72,0,0.08)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "2rem" }}>
                            <span style={{ width: "8px", height: "8px", background: "#FF4800", display: "inline-block" }} />
                            Industrial Construction
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
                        Industrial Building Contractor{" "}
                        <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Tulsa, Oklahoma
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: "700px", margin: "0 auto" }}>
                        Warehouses, pre-engineered metal buildings, manufacturing facilities, cold storage, and self-storage — built by Oklahoma&apos;s most experienced industrial contractor. 100+ projects delivered across Tulsa, Oklahoma City, and DFW.
                    </motion.p>

                    {/* Stats */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginTop: "3rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                        <Stat value="100+" label="Industrial Projects" />
                        <Stat value="2M+" label="SF Delivered" />
                        <Stat value="20-30%" label="Savings vs Conventional" />
                        <Stat value="Tulsa" label="Based & Operated" />
                    </motion.div>
                </div>
            </section>

            {/* ── TL;DR ── */}
            <section style={{ borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 2rem" }}>
                    <Section>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <div style={{ fontSize: "0.6rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.2em", textTransform: "uppercase", minWidth: "50px", paddingTop: "0.15rem" }}>TL;DR</div>
                            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
                                UDGOK is Tulsa, Oklahoma&apos;s leading industrial building contractor, delivering warehouses, pre-engineered metal buildings (PEMB), manufacturing facilities, cold storage, flex space, and self-storage construction across the Tulsa metro and beyond. Pre-engineered metal buildings cost $25–$50/sf for turnkey shells — 20–30% cheaper than conventional steel — and erect 30% faster. Turnkey industrial facilities with dock loading, sprinklers, and office build-out run $50–$200/sf depending on complexity. UDGOK handles the complete scope: site development, foundations, steel erection, insulation, MEP, fire protection, crane installation, and office build-out under one design-build contract.
                            </p>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ── Building Types ── */}
            <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                <Section>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>What We Build</div>
                        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>Industrial Building Types</h2>
                    </div>
                </Section>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
                    {services.map((s, i) => <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} i={i} />)}
                </div>
            </section>

            {/* ── Cost Table ── */}
            <section style={{ background: "linear-gradient(180deg,rgba(255,72,0,0.02) 0%,transparent 100%)", borderTop: "2px solid rgba(255,255,255,0.04)", borderBottom: "2px solid rgba(255,255,255,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>Pricing Guide</div>
                            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 0.75rem" }}>Industrial Building Cost Per Square Foot — Tulsa, Oklahoma (2026)</h2>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", margin: 0 }}>Costs vary by site conditions, clear height, crane loads, insulation, and fire protection</p>
                        </div>
                    </Section>
                    <Section delay={0.1}>
                        <div style={{ border: "2px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
                            {/* Header */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 1fr", gap: "1rem", padding: "1rem 1.5rem", background: "rgba(255,72,0,0.08)", borderBottom: "2px solid rgba(255,72,0,0.2)" }}>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Building Type</div>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", textAlign: "center" }}>$/SF Range</div>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Includes</div>
                            </div>
                            {/* Rows */}
                            {costData.map((row, i) => (
                                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 140px 1fr", gap: "1rem", padding: "1rem 1.5rem", borderBottom: i < costData.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>{row.type}</div>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#FF4800", textAlign: "center" }}>{row.range}</div>
                                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>{row.note}</div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>
            </section>

            {/* ── PEMB vs Conventional Steel Comparison ── */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                <Section>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>Comparison</div>
                        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>Pre-Engineered Metal vs. Conventional Steel</h2>
                    </div>
                </Section>
                <Section delay={0.1}>
                    <div style={{ border: "2px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, padding: "1rem 1.5rem", background: "rgba(255,72,0,0.08)", borderBottom: "2px solid rgba(255,72,0,0.2)" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Factor</div>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", textAlign: "center" }}>PEMB (Red Iron)</div>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", textAlign: "center" }}>Conventional Steel</div>
                        </div>
                        {[
                            ["Cost/SF", "$25 – $50", "$40 – $80"],
                            ["Erection Time", "30% faster", "Baseline"],
                            ["Design Flexibility", "Standard rectangular", "Any geometry"],
                            ["Max Clear Span", "200+ feet", "Unlimited"],
                            ["Crane Capacity", "Up to 30 tons typical", "50+ tons"],
                            ["Multi-Story", "Limited", "Excellent"],
                            ["Wind Resistance", "90–150 mph", "90–150 mph"],
                            ["Best For", "Warehouses, storage, ag", "Manufacturing, heavy industrial"],
                        ].map(([factor, pemb, conv], i) => (
                            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, padding: "0.85rem 1.5rem", borderBottom: i < 7 ? "1px solid rgba(255,255,255,0.04)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>{factor}</div>
                                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", textAlign: "center" }}>{pemb}</div>
                                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", textAlign: "center" }}>{conv}</div>
                            </div>
                        ))}
                    </div>
                </Section>
            </section>

            {/* ── Why UDGOK section ── */}
            <section style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>Why Choose Us</div>
                            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>Why Choose UDGOK for Industrial Construction?</h2>
                        </div>
                    </Section>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1.5rem" }}>
                        {[
                            { icon: "🏗️", title: "Full Scope Design-Build", desc: "Unlike metal building brokers who hand off after delivery, UDGOK manages the entire project — site work, foundations, steel erection, insulation, MEP, fire protection, and office build-out under one contract." },
                            { icon: "🤖", title: "AI-Powered Estimating", desc: "Our machine learning models trained on 100+ industrial projects produce accurate conceptual estimates within 48 hours — not weeks. You get budget certainty before committing to design." },
                            { icon: "📐", title: "In-House Engineering", desc: "We coordinate directly with structural, civil, and MEP engineers. No waiting for third-party quotes. Design decisions are made with live cost data." },
                            { icon: "⚡", title: "Fast-Track Delivery", desc: "Overlapping design, permitting, and site work compresses schedules by 20–30%. Your building starts generating revenue months earlier." },
                            { icon: "🌪️", title: "Oklahoma-Engineered", desc: "Every structure is designed for Oklahoma's specific wind loads, seismic requirements, and extreme temperature range — not generic calculations from out-of-state." },
                            { icon: "📊", title: "Transparent Pricing", desc: "Open-book GMP contracts with real-time cost reporting. You see every line-item, every subcontractor bid, and every cost decision." },
                        ].map((item, i) => <ServiceCard key={i} icon={item.icon} title={item.title} desc={item.desc} i={i} />)}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                <Section>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>FAQ</div>
                        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>Industrial Building FAQ — Tulsa, Oklahoma</h2>
                    </div>
                </Section>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} i={i} />)}
                </div>
            </section>

            {/* ── Cross-Link to Pillar ── */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem 2rem" }}>
                <Section>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                        <div style={{ width: "4px", height: "40px", background: "#FF4800", flexShrink: 0 }} />
                        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                            UDGOK is a leading{" "}
                            <Link href="/construction-companies-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>construction company in Tulsa, Oklahoma</Link>
                            {" "}— delivering commercial, medical, dental, industrial, and retail projects. Explore our{" "}
                            <Link href="/construction-companies-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>complete guide to construction in Tulsa</Link>
                            {" "}for costs, timelines, and building types.
                        </p>
                    </div>
                </Section>
            </section>

            {/* ── CTA ── */}
            <section style={{ padding: "4rem 2rem", borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)", textAlign: "center" }}>
                <Section>
                    <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 900, margin: "0 0 1rem" }}>Ready to Build Your Industrial Facility?</h2>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                        Get a free conceptual estimate for your warehouse, metal building, or manufacturing facility. Most estimates delivered within 48 hours.
                    </p>
                    <Link href="/contact" style={{ display: "inline-block", padding: "1rem 2.5rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
                        Get Your Free Estimate →
                    </Link>
                </Section>
            </section>
        </div>
    );
}
