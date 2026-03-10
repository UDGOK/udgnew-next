"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─── Reusable Animated Section ─── */
function S({ children, d = 0 }: { children: React.ReactNode; d?: number }) {
    const r = useRef(null);
    const v = useInView(r, { once: true, margin: "-60px" });
    return <motion.div ref={r} initial={{ opacity: 0, y: 40 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

/* ─── Stat ─── */
function Stat({ value, label }: { value: string; label: string }) {
    const r = useRef(null);
    const v = useInView(r, { once: true });
    return (
        <motion.div ref={r} initial={{ opacity: 0, scale: 0.85 }} animate={v ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5 }} style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
            <div style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 900, background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{value}</div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", marginTop: "0.25rem" }}>{label}</div>
        </motion.div>
    );
}

/* ─── Card with glow ─── */
function Card({ icon, title, desc, href, i }: { icon: string; title: string; desc: string; href?: string; i: number }) {
    const [h, setH] = useState(false);
    const r = useRef(null);
    const v = useInView(r, { once: true, margin: "-40px" });
    const inner = (
        <motion.div ref={r} initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.06 }}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{ padding: "2rem 1.5rem", background: h ? "rgba(255,72,0,0.06)" : "rgba(255,255,255,0.02)", border: `2px solid ${h ? "rgba(255,72,0,0.3)" : "rgba(255,255,255,0.06)"}`, cursor: href ? "pointer" : "default", transition: "all 0.3s", position: "relative", overflow: "hidden", height: "100%" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: h ? "#FF4800" : "transparent", transition: "background 0.3s" }} />
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.3 }}>{title}</h3>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            {href && <div style={{ marginTop: "1rem", fontSize: "0.7rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.1em", textTransform: "uppercase" }}>Learn More →</div>}
        </motion.div>
    );
    return href ? <Link href={href} style={{ textDecoration: "none" }}>{inner}</Link> : inner;
}

/* ─── FAQ ─── */
function FAQ({ q, a, i }: { q: string; a: string; i: number }) {
    const [open, setOpen] = useState(false);
    const r = useRef(null);
    const v = useInView(r, { once: true, margin: "-30px" });
    return (
        <motion.div ref={r} initial={{ opacity: 0, y: 20 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.05 }}
            onClick={() => setOpen(!open)}
            style={{ background: open ? "rgba(255,72,0,0.05)" : "rgba(255,255,255,0.02)", border: `2px solid ${open ? "rgba(255,72,0,0.25)" : "rgba(255,255,255,0.06)"}`, padding: "1.25rem 1.5rem", cursor: "pointer", transition: "all 0.3s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.4 }}>{q}</h3>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ fontSize: "1.2rem", color: "#FF4800", flexShrink: 0 }}>▾</motion.span>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "1rem 0 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
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

/* ════════════════════ MAIN ════════════════════ */
export default function ConstructionCompaniesTulsaUI() {
    /* ─── Data ─── */
    const buildingTypes = [
        { icon: "🏥", title: "Medical & Dental Construction", desc: "100+ medical facilities delivered — doctor offices, dental clinics, ambulatory surgery centers, eye clinics. Specialized MEP, medical gas, infection control, and AAAHC accreditation support.", href: "/tulsa-medical-construction" },
        { icon: "🏬", title: "Commercial & Retail", desc: "Store fit-outs, restaurant build-outs, strip center TI, and national brand rollouts. $80–$180/sf for standard retail build-outs in the Tulsa metro.", href: "/commercial-contractor-tulsa" },
        { icon: "🏭", title: "Industrial & Metal Buildings", desc: "Warehouses, pre-engineered metal buildings (PEMB), manufacturing facilities, cold storage, and self-storage. PEMB costs 20–30% less than conventional steel.", href: "/industrial-buildings-tulsa" },
        { icon: "🏢", title: "Office Construction", desc: "Corporate HQ build-outs, multi-tenant office buildings, executive suites, and creative office conversions. Complete interior fit-out from shell condition.", href: "/office-construction-tulsa" },
        { icon: "🏨", title: "Hospitality", desc: "Hotels, restaurants, event venues, and mixed-use hospitality projects. Experience with franchise prototype compliance and brand standard execution.", href: "/hospitality-construction-bixby" },
        { icon: "🛍️", title: "Shopping Centers", desc: "Multi-tenant strip centers, pad site buildings, and retail park developments. Bay-by-bay delivery with coordinated utility infrastructure.", href: "/shopping-center-construction-tulsa" },
        { icon: "🏗️", title: "Design-Build", desc: "Single-source design-build delivery for faster schedules, guaranteed pricing, and single-point accountability. One contract, one team, one budget.", href: "/design-build" },
        { icon: "🔧", title: "Tenant Improvements", desc: "Interior renovations and build-outs for commercial, medical, and retail tenants. We handle landlord coordination, ADA compliance, and permitting.", href: "/tenant-improvements" },
    ];

    const neighborhoods = [
        { name: "Downtown Tulsa", desc: "High-rise conversions, mixed-use developments, and restaurant build-outs in Tulsa's urban core. UDGOK navigates City of Tulsa permitting, historic district guidelines, and ADA compliance for downtown projects.", projects: "15+" },
        { name: "Midtown / Cherry Street", desc: "Boutique retail, medical offices, and restaurant construction along Cherry Street and the Midtown corridor. Dense urban infill requiring creative site logistics and neighbor coordination.", projects: "12+" },
        { name: "South Tulsa", desc: "Medical office parks, dental clinics, and retail pad site construction along South Memorial and South Yale corridors. Dominant UDGOK territory with 30+ completed projects.", projects: "30+" },
        { name: "East Tulsa", desc: "Industrial, warehouse, and convenience store construction along the I-44 corridor. Growing area for flex space, distribution, and light manufacturing.", projects: "10+" },
        { name: "Brookside", desc: "Specialty retail, restaurant, and boutique office construction in Tulsa's walkable Brookside district. Projects require sensitivity to neighborhood character and historic architecture.", projects: "8+" },
        { name: "Broken Arrow", desc: "Oklahoma's 4th largest city — commercial, medical, dental, and retail construction across the BA metro. UDGOK has a dedicated presence in Broken Arrow.", projects: "20+" },
        { name: "Bixby", desc: "Fast-growing suburb — dental offices, medical clinics, retail centers, and hospitality construction. UDGOK is the most active commercial builder in Bixby.", projects: "25+" },
        { name: "Jenks / Sand Springs / Owasso", desc: "Suburban growth corridors — medical, commercial, and industrial construction serving Tulsa's surrounding communities.", projects: "15+" },
    ];

    const costData = [
        { type: "Medical Office", range: "$180 – $350", unit: "/SF", note: "Includes medical gas, specialized HVAC, infection control" },
        { type: "Dental Office", range: "$200 – $400", unit: "/SF", note: "Operatories, sterilization, plumbing-intensive" },
        { type: "Retail Build-Out", range: "$80 – $180", unit: "/SF", note: "Standard TI from shell condition" },
        { type: "Restaurant", range: "$150 – $350", unit: "/SF", note: "Commercial kitchen, hood, grease trap, health dept" },
        { type: "Office Build-Out", range: "$60 – $150", unit: "/SF", note: "Standard Class A/B office finish" },
        { type: "Warehouse (PEMB)", range: "$25 – $50", unit: "/SF", note: "Pre-engineered metal shell, turnkey" },
        { type: "Industrial (Full)", range: "$85 – $200", unit: "/SF", note: "Crane, heavy MEP, reinforced slab" },
        { type: "Convenience Store", range: "$200 – $350", unit: "/SF", note: "Fuel systems, walk-in coolers, kitchen" },
        { type: "Hotel", range: "$120 – $250", unit: "/SF", note: "Prototype-compliant, franchise standard" },
        { type: "Self-Storage", range: "$35 – $85", unit: "/SF", note: "Drive-up units to climate-controlled" },
    ];

    const faqs = [
        { q: "What are the top construction companies in Tulsa, Oklahoma?", a: "Tulsa's top construction companies include UDGOK (Upscale Development Group of Oklahoma — specializing in medical, commercial, and industrial construction), Manhattan Construction Group, Crossland Construction, Flintco, and Ross Group. For commercial and medical construction specifically, UDGOK has delivered 100+ projects across the Tulsa metro with AI-powered estimating and design-build delivery." },
        { q: "How much does commercial construction cost in Tulsa?", a: "Commercial construction costs in Tulsa range from $80–$350 per square foot depending on building type. Retail build-outs cost $80–$180/sf. Office build-outs cost $60–$150/sf. Medical offices cost $180–$350/sf. Restaurants cost $150–$350/sf. Pre-engineered metal warehouses cost $25–$50/sf for turnkey shell. These costs include design, permitting, construction, and final inspections." },
        { q: "How long does it take to build a commercial building in Tulsa?", a: "Timeline depends on size and complexity. A 2,000 SF retail build-out takes 8–12 weeks. A 5,000 SF medical office takes 4–6 months. A 20,000 SF commercial building takes 6–10 months. A 50,000 SF warehouse takes 5–8 months with pre-engineered metal. UDGOK compresses schedules by 20–30% through design-build delivery that overlaps design, permitting, and site work." },
        { q: "What permits are required for commercial construction in Tulsa?", a: "Commercial construction in Tulsa requires: (1) building permit from City of Tulsa DBCA, (2) zoning compliance verification, (3) fire marshal plan review and approval, (4) mechanical/plumbing/electrical permits, (5) stormwater management plan if grading more than 1 acre, (6) ADA compliance review, and (7) Certificate of Occupancy inspection. UDGOK handles all permitting on behalf of our clients." },
        { q: "Does UDGOK work in areas outside Tulsa?", a: "Yes. UDGOK serves the entire Tulsa metropolitan area including Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, and Haskell. We also build in Oklahoma City and the Dallas-Fort Worth metro in Texas. Our primary service radius is within 150 miles of Tulsa." },
        { q: "What is design-build construction?", a: "Design-build is a project delivery method where one company handles both design and construction under a single contract. This eliminates the traditional adversarial relationship between architect and contractor, compresses schedules by overlapping phases, and provides budget certainty through Guaranteed Maximum Price (GMP) contracts. UDGOK is Tulsa's leading design-build contractor for medical and commercial projects." },
        { q: "How do I choose a construction company in Tulsa?", a: "When evaluating construction companies in Tulsa, consider: (1) relevant project experience — ask for references on similar building types, (2) financial stability — verify bonding capacity and insurance, (3) licensing — confirm Oklahoma contractor license, (4) project management — ask about their PM tools and communication processes, (5) warranty — understand their post-completion warranty, and (6) references — call past clients directly." },
        { q: "What makes UDGOK different from other Tulsa construction companies?", a: "UDGOK differentiates through: (1) AI-powered estimating that produces accurate conceptual budgets within 48 hours, (2) specialization in medical/dental construction with 100+ healthcare projects, (3) robotic total stations for sub-millimeter layout accuracy, (4) drone photogrammetry for weekly progress documentation, (5) transparent open-book GMP pricing, and (6) a PMP-certified project manager on every project." },
        { q: "What is the average cost to build a medical office in Tulsa?", a: "Medical office construction in Tulsa costs $180–$350 per square foot for a fully finished turnkey facility. A typical 3,000 SF medical office costs $540K–$1.05M. This includes architectural design, MEP engineering, medical gas installation, specialized HVAC with dedicated exhaust, ADA-compliant patient areas, and all City of Tulsa permitting." },
        { q: "Does UDGOK provide free estimates?", a: "Yes. UDGOK provides free conceptual estimates for commercial, medical, and industrial construction projects. Our AI-powered estimating system, trained on 100+ completed projects, delivers conceptual budgets within 48 hours for most project types. Contact us at udgok.com/contact or call to discuss your project." },
        { q: "What wind load requirements apply to buildings in Tulsa, Oklahoma?", a: "Tulsa falls within a 90 mph basic wind speed zone per IBC 2021 (3-second gust). Exposure category varies by site — Exposure B for urban areas, Exposure C for open terrain in suburban areas. Oklahoma's tornado risk requires careful attention to component and cladding wind pressures, which are higher than main wind force resistance system loads. UDGOK engineers all structures to meet or exceed IBC 2021 requirements." },
        { q: "Can UDGOK handle both new construction and renovations?", a: "Yes. UDGOK builds new ground-up commercial, medical, and industrial buildings as well as interior renovations and tenant improvements in existing buildings. Renovation work includes structural retrofits, MEP upgrades, ADA compliance renovations, and complete interior demolition and rebuild." },
        { q: "What areas of Tulsa does UDGOK build in?", a: "UDGOK builds across the entire Tulsa metro: Downtown, Midtown, Cherry Street, Brookside, South Tulsa (Memorial/Yale corridors), East Tulsa (I-44 corridor), West Tulsa, North Tulsa, and all surrounding cities — Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, Haskell, and Catoosa." },
        { q: "How does UDGOK use AI in construction?", a: "UDGOK deploys AI in four areas: (1) cost estimating — machine learning models trained on 100+ projects for faster, more accurate estimates, (2) generative design — AI algorithms that optimize floor plans for workflow and budget, (3) predictive scheduling — statistical models that forecast schedule risks, and (4) quality control — AI-assisted BIM comparison to detect deviations. See our full AI transparency disclosure at udgok.com/transparency." },
        { q: "What is a Guaranteed Maximum Price (GMP) contract?", a: "A GMP contract sets a ceiling price that the contractor cannot exceed. If actual costs come in below the GMP, savings are shared with the owner. If costs exceed the GMP, the contractor absorbs the overage. This provides budget certainty while incentivizing the contractor to find cost efficiencies. UDGOK offers open-book GMP contracts where clients see every line-item cost." },
        { q: "Is UDGOK licensed and insured?", a: "Yes. UDGOK maintains a current Oklahoma commercial contractor license, general liability insurance, workers' compensation coverage, and surety bonding capacity. We carry per-project insurance certificates and can add additional insured endorsements for property owners, lenders, and landlords." },
    ];

    const marketStats = [
        { label: "Tulsa Metro Construction Permits (2025)", value: "4,200+", detail: "Commercial and industrial permits issued by City of Tulsa and surrounding municipalities" },
        { label: "Average Commercial Vacancy Rate", value: "< 3%", detail: "Tulsa industrial vacancy at historic lows, driving new construction demand" },
        { label: "YoY Construction Cost Growth", value: "4–6%", detail: "Annual construction cost escalation driven by labor and material prices" },
        { label: "Build-to-Suit Dominance", value: "70%+", detail: "New industrial development increasingly build-to-suit versus speculative" },
    ];

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
                            The Complete 2026 Guide
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
                        style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
                        Construction Companies in{" "}
                        <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Tulsa, Oklahoma
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ fontSize: "clamp(0.95rem,2vw,1.12rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: "720px", margin: "0 auto" }}>
                        Everything you need to know about hiring a construction company in Tulsa, OK — costs per square foot, building types, neighborhoods, permits, timelines, and how to choose the right builder for your project.
                    </motion.p>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginTop: "3rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                        <Stat value="100+" label="Projects Delivered" />
                        <Stat value="2M+" label="SF Built in Tulsa" />
                        <Stat value="#1" label="Medical Builder" />
                        <Stat value="2006" label="Established" />
                    </motion.div>
                </div>
            </section>

            {/* ═══════ TL;DR ═══════ */}
            <section style={{ borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 2rem" }}>
                    <S>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <div style={{ fontSize: "0.6rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.2em", textTransform: "uppercase", minWidth: "50px", paddingTop: "0.15rem" }}>TL;DR</div>
                            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
                                UDGOK (Upscale Development Group of Oklahoma) is a top-rated construction company in Tulsa, OK, specializing in commercial, medical, dental, industrial, and retail construction. With 100+ completed projects and 2,000,000+ square feet delivered across the Tulsa metro, UDGOK offers AI-powered estimating, design-build delivery, and transparent GMP pricing. Commercial construction in Tulsa costs $60–$350/sf depending on building type. Medical offices run $180–$350/sf. Pre-engineered metal warehouses cost $25–$50/sf. UDGOK serves Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Oklahoma City, and the Dallas-Fort Worth metro.
                            </p>
                        </div>
                    </S>
                </div>
            </section>

            {/* ═══════ BUILDING TYPES ═══════ */}
            <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                <SH tag="What We Build" title="Construction Services in Tulsa, Oklahoma" sub="Click any service to learn more about costs, timelines, and what to expect" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "1.5rem" }}>
                    {buildingTypes.map((b, i) => <Card key={i} icon={b.icon} title={b.title} desc={b.desc} href={b.href} i={i} />)}
                </div>
            </section>

            {/* ═══════ COST TABLE ═══════ */}
            <section style={{ background: "linear-gradient(180deg,rgba(255,72,0,0.02) 0%,transparent 100%)", borderTop: "2px solid rgba(255,255,255,0.04)", borderBottom: "2px solid rgba(255,255,255,0.04)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <SH tag="Cost Guide" title="Construction Costs Per Square Foot — Tulsa, OK (2026)" sub="Fully loaded turnkey costs including design, permitting, and construction" />
                    <S d={0.1}>
                        <div style={{ border: "2px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 130px 1fr", gap: "1rem", padding: "1rem 1.5rem", background: "rgba(255,72,0,0.08)", borderBottom: "2px solid rgba(255,72,0,0.2)" }}>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Building Type</div>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", textAlign: "center" }}>$/SF</div>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>What&apos;s Included</div>
                            </div>
                            {costData.map((r, i) => (
                                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 130px 1fr", gap: "1rem", padding: "0.85rem 1.5rem", borderBottom: i < costData.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>{r.type}</div>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#FF4800", textAlign: "center" }}>{r.range}</div>
                                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>{r.note}</div>
                                </div>
                            ))}
                        </div>
                    </S>
                </div>
            </section>

            {/* ═══════ MARKET DATA ═══════ */}
            <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                <SH tag="Market Intelligence" title="Tulsa Construction Market — 2026 Snapshot" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1.5rem" }}>
                    {marketStats.map((s, i) => (
                        <S key={i} d={i * 0.08}>
                            <div style={{ padding: "2rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", height: "100%" }}>
                                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>{s.value}</div>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>{s.label}</div>
                                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{s.detail}</div>
                            </div>
                        </S>
                    ))}
                </div>
            </section>

            {/* ═══════ NEIGHBORHOODS ═══════ */}
            <section style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <SH tag="Local Coverage" title="Construction by Tulsa Neighborhood" sub="We build across the entire Tulsa metro — here's where we're most active" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
                        {neighborhoods.map((n, i) => (
                            <S key={i} d={i * 0.06}>
                                <div style={{ padding: "1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", height: "100%" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                                        <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: 0 }}>{n.name}</h3>
                                        <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.1em" }}>{n.projects} PROJECTS</span>
                                    </div>
                                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{n.desc}</p>
                                </div>
                            </S>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ WHY UDGOK ═══════ */}
            <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                <SH tag="Why UDGOK" title="Why Tulsa Chooses UDGOK" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
                    {[
                        { icon: "🤖", title: "AI-Powered Estimating", desc: "Machine learning models trained on 100+ Tulsa projects deliver accurate conceptual budgets within 48 hours — not weeks. Budget certainty before you commit to design." },
                        { icon: "🏗️", title: "Full-Scope Design-Build", desc: "One contract, one team, one budget. We manage design, engineering, permitting, construction, and closeout under a single GMP contract. No finger-pointing between architect and contractor." },
                        { icon: "📊", title: "Transparent Open-Book Pricing", desc: "Every subcontractor bid, every material cost, every overhead line visible in real-time. Our open-book GMP contracts build trust through radical transparency." },
                        { icon: "🏥", title: "Medical Construction Specialists", desc: "100+ medical and dental facilities delivered. We understand AAAHC, medical gas, infection control, radiology shielding, and healthcare-specific code requirements." },
                        { icon: "⚡", title: "20–30% Faster Delivery", desc: "Design-build delivery overlaps design, permitting, and construction phases. We compress schedules so your facility opens — and starts generating revenue — months sooner." },
                        { icon: "🛡️", title: "AI Transparency Commitment", desc: "We're the only Tulsa construction company with a published AI transparency policy. See exactly how AI influences our work at udgok.com/transparency.", href: "/transparency" },
                    ].map((item, i) => <Card key={i} icon={item.icon} title={item.title} desc={item.desc} href={"href" in item ? item.href as string : undefined} i={i} />)}
                </div>
            </section>

            {/* ═══════ BUILDING CODES ═══════ */}
            <section style={{ borderTop: "2px solid rgba(255,255,255,0.04)", borderBottom: "2px solid rgba(255,255,255,0.04)", background: "linear-gradient(180deg,rgba(255,72,0,0.02) 0%,transparent 100%)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <SH tag="Code Reference" title="Oklahoma Building Code Quick Reference" sub="Key code requirements for commercial construction in Tulsa" />
                    <S d={0.1}>
                        <div style={{ border: "2px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
                            {[
                                ["Building Code", "IBC 2021 (International Building Code)"],
                                ["Energy Code", "IECC 2021 (International Energy Conservation Code)"],
                                ["Wind Speed", "90 mph basic wind speed (3-second gust), Exposure B/C"],
                                ["Seismic Design", "Category A–B (low to moderate seismic)"],
                                ["Fire Code", "IFC 2021 with City of Tulsa amendments"],
                                ["Accessibility", "ADA 2010 Standards + ICC A117.1"],
                                ["Plumbing Code", "UPC 2021 (Uniform Plumbing Code)"],
                                ["Electrical Code", "NEC 2023 (National Electrical Code)"],
                                ["Permit Authority", "City of Tulsa DBCA (Dept. of Building \u0026 Code Administration)"],
                                ["Plan Review", "Typically 2–4 weeks for commercial projects"],
                            ].map(([label, val], i) => (
                                <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "1rem", padding: "0.85rem 1.5rem", borderBottom: i < 9 ? "1px solid rgba(255,255,255,0.04)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                                    <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#FF4800" }}>{label}</div>
                                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>{val}</div>
                                </div>
                            ))}
                        </div>
                    </S>
                </div>
            </section>

            {/* ═══════ FAQ ═══════ */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                <SH tag="FAQ" title="Construction Companies in Tulsa — Frequently Asked Questions" />
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} i={i} />)}
                </div>
            </section>

            {/* ═══════ CTA ═══════ */}
            <section style={{ padding: "4rem 2rem", borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)", textAlign: "center" }}>
                <S>
                    <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 900, margin: "0 0 1rem" }}>Ready to Build in Tulsa?</h2>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                        Get a free conceptual estimate for your commercial, medical, or industrial project. Most estimates delivered within 48 hours.
                    </p>
                    <Link href="/contact" style={{ display: "inline-block", padding: "1rem 2.5rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
                        Get Your Free Estimate →
                    </Link>
                </S>
            </section>
        </div>
    );
}
