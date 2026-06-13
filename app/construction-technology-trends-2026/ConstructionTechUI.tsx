"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ── Animated section wrapper ── */
function Reveal({ children, d = 0 }: { children: React.ReactNode; d?: number }) {
    const r = useRef(null);
    const v = useInView(r, { once: true, margin: "-60px" });
    return (
        <motion.div ref={r} initial={{ opacity: 0, y: 40 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </motion.div>
    );
}

/* ── YouTube Embed ── */
function YouTubeEmbed({ id, title }: { id: string; title: string }) {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="relative w-full aspect-video bg-white/5 overflow-hidden group cursor-pointer" onClick={() => setLoaded(true)}>
            {!loaded ? (
                <>
                    <Image
                        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF4800] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-[#FF4800]/30">
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white/90 text-xs md:text-sm font-semibold">{title}</p>
                    </div>
                </>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            )}
        </div>
    );
}

/* ── Tech Card ── */
function TechCard({ num, icon, title, desc, stat, statLabel, children, reverse = false }: {
    num: string; icon: string; title: string; desc: string; stat: string; statLabel: string; children?: React.ReactNode; reverse?: boolean;
}) {
    const r = useRef(null);
    const v = useInView(r, { once: true, margin: "-80px" });
    return (
        <motion.div ref={r} initial={{ opacity: 0, y: 60 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-start`}>
            {/* Content */}
            <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#FF4800] text-[0.6rem] font-black tracking-[0.3em] uppercase border border-[#FF4800]/30 px-3 py-1 bg-[#FF4800]/5">{num}</span>
                    <span className="w-8 h-px bg-white/10" />
                    <span className="text-2xl">{icon}</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[0.95] mb-6">
                    {title}
                </h2>
                <p className="text-white/55 text-sm md:text-base leading-relaxed mb-6">{desc}</p>
                <div className="inline-flex items-center gap-4 py-3 px-5 bg-white/[0.03] border border-white/8">
                    <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#FF4800] to-orange-300 bg-clip-text text-transparent">{stat}</span>
                    <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/40">{statLabel}</span>
                </div>
            </div>
            {/* Media */}
            <div className="w-full lg:w-1/2">
                {children}
            </div>
        </motion.div>
    );
}

/* ── FAQ Item ── */
function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`border cursor-pointer transition-all ${open ? "border-[#FF4800]/30 bg-[#FF4800]/[0.03]" : "border-white/8 bg-white/[0.02] hover:bg-white/[0.04]"}`}
            onClick={() => setOpen(!open)}
        >
            <div className="flex items-center justify-between px-5 md:px-8 py-5">
                <h3 className="text-sm md:text-base font-bold text-white/90 pr-4 leading-snug">{q}</h3>
                <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-[#FF4800] text-lg font-bold flex-shrink-0">+</motion.span>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <p className="px-5 md:px-8 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/6 pt-4">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}


/* ════════════════════ MAIN COMPONENT ════════════════════ */
export default function ConstructionTechUI() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const { scrollYProgress: heroProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const heroY = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
    const heroOpacity = useTransform(heroProgress, [0, 0.3], [1, 0]);

    const faqs = [
        { q: "What construction technologies are most impactful in 2026?", a: "The most impactful construction technologies in 2026 are AI-powered project management/scheduling, autonomous bricklaying robots (Hadrian X), 3D concrete printing (ICON Vulcan & Titan), robotic layout (Dusty FieldPrinter), drones, and digital twins. These technologies reduce timelines by 20-40% and labor requirements by 30-50% on applicable tasks." },
        { q: "How much do construction robots cost?", a: "Robotic layout systems like Dusty FieldPrinter run ~$5,000-$8,000/month as a service. Bricklaying robots are deployed per-project. 3D printers range from $200K to $2M+. ROI is typically 6-18 months due to labor savings and schedule compression." },
        { q: "Can 3D printing build a real house?", a: "Yes. ICON has 3D-printed entire neighborhoods in Texas — homes from 650 to 2,400 SF. Walls are printed in 24-48 hours using Lavacrete. Roofing, plumbing, and electrical use traditional methods. Homes start around $350,000." },
        { q: "How is AI used in construction management?", a: "AI powers predictive scheduling (reducing delays 15-25%), real-time cost forecasting, computer vision safety monitoring, generative design for floor plans, and agentic AI systems that autonomously manage procurement workflows." },
        { q: "What are digital twins in construction?", a: "A digital twin is a real-time virtual replica of a building synced with IoT sensors and BIM. It detects MEP clashes, simulates energy, tracks schedules live, and serves as a facility management tool post-construction. Savings: $5K-$50K+ per clash." },
        { q: "Does UDGOK use construction technology?", a: "Yes. UDGOK deploys AI-powered estimating, robotic total stations, drone photogrammetry, BIM/VDC clash detection, and predictive scheduling. We're one of the few Oklahoma contractors with a published AI transparency policy at udgok.com/transparency." },
    ];

    return (
        <div className="bg-[#0B061B] text-white font-[var(--font-inter,Inter,sans-serif)]">
            {/* ── Progress Bar ── */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#FF4800] origin-left z-[10001]" style={{ scaleX }} />

            {/* ════════ HERO ════════ */}
            <section className="relative h-[85vh] md:h-[90vh] w-full flex items-end pb-16 md:pb-24 justify-center overflow-hidden" ref={containerRef}>
                <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
                    <Image src="/images/construction-tech-2026-hero.png" alt="Construction Technology Trends 2026" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-[#0B061B]/30 to-[#0B061B]/50" />
                </motion.div>

                <motion.div className="absolute inset-0 z-0 pointer-events-none" animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ background: "radial-gradient(circle at 50% 80%, rgba(255,72,0,0.15), transparent 70%)", filter: "blur(80px)" }} />

                <div className="relative z-10 px-4 md:px-6 max-w-5xl mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-[#FF4800]/40 text-[0.6rem] font-black tracking-[0.25em] uppercase text-[#FF4800] bg-[#FF4800]/10 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 bg-[#FF4800] animate-pulse" /> Construction Technology
                            </span>
                            <span className="text-white/40 text-[0.6rem] font-bold tracking-[0.2em] uppercase">Published March 25, 2026 • Updated June 13, 2026 • 14 MIN READ • By Zack H. (Lead Estimator / Project Manager)</span>
                        </div>
                        <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-[1] mb-6">
                            10 Technologies{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4800] to-orange-300">Reshaping Construction</span>
                            {" "}in 2026
                        </h1>
                        <p data-speakable="true" className="text-base md:text-lg text-white/55 max-w-2xl leading-relaxed">
                            Bricklaying robots that lay 1,000 blocks/hour. 3D printers extruding entire neighborhoods. AI schedulers that cut delays by 25%. These aren&apos;t coming — they&apos;re already on jobsites. Here&apos;s what every builder, developer, and investor needs to know.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ════════ TL;DR SECTION ════════ */}
            <section className="border-t-4 border-[#FF4800] bg-[#FF4800]/[0.03]">
                <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-14">
                    <Reveal>
                        <div data-speakable="true" className="relative bg-white/[0.03] border border-white/8 p-6 md:p-10">
                            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#FF4800] to-transparent" />
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-2 h-2 bg-[#FF4800] animate-pulse" />
                                <span className="text-[0.6rem] font-black tracking-[0.25em] uppercase text-[#FF4800]">Quick Answer</span>
                            </div>
                            <p className="text-sm md:text-base text-white/65 leading-relaxed">
                                The construction industry is undergoing its biggest technological transformation since the shift to steel framing. In 2026, AI-powered scheduling reduces project delays by 15-25%. Autonomous robots like the Hadrian X lay 1,000 bricks per hour — 10x faster than a human mason. ICON&apos;s 3D printers are building entire neighborhoods in Texas with homes starting at $350,000. Dusty Robotics&apos; FieldPrinter 2 prints full-scale floor plans on concrete with 1/16&quot; accuracy, eliminating weeks of manual layout. UDGOK deploys AI estimating, robotic total stations, and drone photogrammetry on every project — bringing these technologies to Oklahoma&apos;s construction market.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ TECHNOLOGIES ════════ */}
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20 md:space-y-32">

                {/* ─── 1. AI-Powered Scheduling ─── */}
                <TechCard
                    num="01" icon="🧠" title="AI-Powered Project Scheduling"
                    desc="Agentic AI systems now manage entire construction schedules autonomously — analyzing weather patterns, workforce availability, material lead times, and permit timelines to predict and prevent delays before they happen. In 2026, AI-powered scheduling reduces delays by 15-25% and cost forecasting models adjust budgets in real-time based on market data."
                    stat="15-25%" statLabel="Fewer Delays"
                >
                    <YouTubeEmbed id="Kbz4KXlmgXQ" title="10 Ways Construction Contractors Can Use AI (Today)" />
                </TechCard>

                {/* ─── 2. Bricklaying Robots ─── */}
                <TechCard
                    num="02" icon="🤖" reverse
                    title="Autonomous Bricklaying Robots"
                    desc="FBR's Hadrian X bricklaying robot just broke its speed record — laying up to 1,000 bricks per hour compared to a human mason's 100. The truck-mounted robot uses 3D CAD models to autonomously cut, route, and place blocks with millimeter precision, operating through wind conditions that would halt manual work. One unit can build 100-300 homes per year."
                    stat="10x" statLabel="Faster Than Human Masons"
                >
                    <YouTubeEmbed id="wPhRb2AF92I" title="Next-Gen Hadrian X® Completes First Outdoor Test Build | FBR" />
                </TechCard>

                {/* ─── 3. 3D-Printed Homes ─── */}
                <TechCard
                    num="03" icon="🏠"
                    title="3D-Printed Neighborhoods"
                    desc="ICON's Vulcan printer has already built entire neighborhoods in Georgetown, Texas — the world's largest community of 3D-printed homes. Their next-gen Titan system, a rail-less, multi-story capable 3D-printing platform launching in 2026, promises to open the technology to outside builders. Walls are printed in 24-48 hours using CarbonX, a low-carbon cementitious material, at approximately $20/sf for wall systems."
                    stat="$20/SF" statLabel="Wall Printing Cost"
                >
                    <YouTubeEmbed id="WOR612WviMs" title="Inside The World's Largest 3D Printed Neighborhood" />
                </TechCard>

                {/* ─── 4. Robotic Layout ─── */}
                <TechCard
                    num="04" icon="📐" reverse
                    title="Robotic Layout Printing"
                    desc="Dusty Robotics' FieldPrinter 2 autonomously prints full-scale digital building plans directly onto concrete slabs with 1/16-inch accuracy. One operator covers 10,000-15,000 square feet per day — eliminating weeks of manual layout work and the coordination errors that cause millions in rework annually. The system integrates directly with BIM models."
                    stat={'1/16"'} statLabel="Precision Accuracy"
                >
                    <YouTubeEmbed id="xIb_yiOHjWY" title="Dusty Robotics FieldPrinter 2: Smarter, Faster, More Powerful" />
                </TechCard>

                {/* ─── 5. Drones ─── */}
                <TechCard
                    num="05" icon="🛸"
                    title="Autonomous Drone Swarms"
                    desc="Construction drones have evolved far beyond photography. In 2026, autonomous drone swarms fly pre-programmed paths without a pilot, capture LiDAR point clouds, generate 3D models, and compare progress against BIM in near real-time. AI analysis detects potential issues — thermal cameras spot leaks, deformation sensors catch structural problems — before they become costly repairs. Site accidents are reduced by up to 20%."
                    stat="20%" statLabel="Fewer Site Accidents"
                >
                    <YouTubeEmbed id="YZeC7H_1DoA" title="Drone Construction Progress Monitoring: Flight Demonstration" />
                </TechCard>

                {/* ─── 6. Digital Twins ─── */}
                <TechCard
                    num="06" icon="🌐" reverse
                    title="Digital Twin Technology"
                    desc="Digital twins — living, data-rich 3D replicas synced with real-world IoT sensors — are becoming the central nervous system of modern construction. They detect MEP clashes before a single pipe is cut (saving $5,000-$50,000+ per conflict), simulate energy performance before HVAC equipment is purchased, and track real-time schedule deviations. After construction, the twin serves as the building's permanent management platform."
                    stat="$5-50K+" statLabel="Saved Per Clash Detected"
                >
                    <YouTubeEmbed id="uIEqnb3Kk1U" title="Digital Twin in the AEC Industry" />
                </TechCard>

                {/* ─── 7. Modular Construction ─── */}
                <TechCard
                    num="07" icon="🏗️"
                    title="Modular & Prefabricated Construction"
                    desc="Factory-built modules — bathroom pods, MEP racks, wall panels, even entire rooms — are shipped to site and craned into position in hours. Modular construction eliminates weather delays, ensures factory-level quality control, and reduces on-site labor by 40-50%. In healthcare construction, prefabricated headwalls and medical gas assemblies are becoming standard practice, compressing timelines by weeks."
                    stat="40-50%" statLabel="Less On-Site Labor"
                >
                    <YouTubeEmbed id="uCVxLGW_cmA" title="How It's Made: BonnaVilla Manufactured Modular Homes" />
                </TechCard>

                {/* ─── 8. AR/VR ─── */}
                <TechCard
                    num="08" icon="🥽" reverse
                    title="Augmented & Virtual Reality"
                    desc="AR headsets let field teams see BIM models overlaid on the actual jobsite — revealing hidden ductwork, pipe routes, and electrical runs behind walls before they're built. VR walk-throughs allow clients to experience their building at full scale before construction begins, catching design issues that would cost 10-100x more to fix in the field. Training in VR has reduced safety incident rates by 40% in pilot programs."
                    stat="40%" statLabel="Fewer Safety Incidents"
                >
                    <YouTubeEmbed id="8BTI4_hA0Xw" title="Augmented Reality in Civil Engineering & Construction" />
                </TechCard>

                {/* ─── 9. Computer Vision Safety ─── */}
                <TechCard
                    num="09" icon="👁️"
                    title="Computer Vision Safety Systems"
                    desc="AI-powered cameras now watch construction sites 24/7, detecting unsafe acts in real-time: workers without hard hats, missing harnesses at height, unauthorized zone entry, and equipment proximity violations. The systems generate instant alerts to the site superintendent's phone. Computer vision is becoming a core intelligence layer — not just a security camera — tracking PPE compliance, monitoring equipment utilization, and documenting progress automatically."
                    stat="Real-Time" statLabel="Safety Monitoring"
                >
                    <YouTubeEmbed id="tLcYxiNd59w" title="Construction Site Safety with Ability AI Cameras" />
                </TechCard>

                {/* ─── 10. Generative AI Design ─── */}
                <TechCard
                    num="10" icon="✨" reverse
                    title="Generative AI for Design"
                    desc="Generative AI algorithms can now produce hundreds of floor plan variants optimized for specific constraints — budget, workflow, patient throughput (in medical), natural light, code compliance — in hours rather than weeks. ICON's Vitruvius AI can produce full construction documents and permit-ready designs autonomously. At UDGOK, we use AI-assisted design to optimize medical office layouts for patient flow and operatory efficiency."
                    stat="10-20%" statLabel="Material Cost Reduction"
                >
                    <YouTubeEmbed id="6IYOKjZCWlI" title="5 Insane Ways to Use AI for Architecture and Design" />
                </TechCard>

            </section>

            {/* ════════ UDGOK TECH STACK ════════ */}
            <section className="border-t-2 border-white/6 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
                    <Reveal>
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-[#FF4800] mb-3 block">How UDGOK Deploys Tech</span>
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Oklahoma&apos;s Most <span className="text-[#FF4800]">Tech-Forward</span> Contractor</h2>
                        </div>
                    </Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { icon: "🤖", title: "AI-Powered Estimating", desc: "ML models trained on 100+ projects deliver budget certainty within 48 hours" },
                            { icon: "📡", title: "Robotic Total Stations", desc: "Sub-millimeter layout accuracy for medical and dental operatory placement" },
                            { icon: "🛸", title: "Drone Photogrammetry", desc: "Weekly aerial progress documentation with volumetric earthwork calculations" },
                            { icon: "🌐", title: "BIM/VDC Clash Detection", desc: "Revit modeling and Navisworks coordination eliminate field conflicts" },
                            { icon: "📊", title: "Predictive Scheduling", desc: "Statistical risk models forecast delays before they impact your timeline" },
                            { icon: "🛡️", title: "AI Transparency Policy", desc: "Published disclosure of how AI influences our work — udgok.com/transparency" },
                        ].map((item, i) => (
                            <Reveal key={i} d={i * 0.08}>
                                <div className="p-5 md:p-6 border border-white/8 bg-white/[0.02] hover:bg-[#FF4800]/[0.04] hover:border-[#FF4800]/20 transition-all h-full">
                                    <span className="text-2xl mb-3 block">{item.icon}</span>
                                    <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════ IMPACT TABLE ════════ */}
            <section className="border-t-2 border-white/6">
                <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
                    <Reveal>
                        <div className="text-center mb-10 md:mb-14">
                            <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-[#FF4800] mb-3 block">Data Snapshot</span>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Technology Impact <span className="text-[#FF4800]">by the Numbers</span></h2>
                        </div>
                    </Reveal>
                    <Reveal d={0.1}>
                        <div className="border border-white/8 overflow-x-auto">
                            {/* Table wrapper for mobile scroll */}
                            <div className="min-w-[580px]">
                                <div className="grid grid-cols-4 gap-2 md:gap-4 px-4 md:px-6 py-3 bg-[#FF4800]/8 border-b border-[#FF4800]/20">
                                    {["Technology", "Time Saved", "Cost Impact", "Labor Reduction"].map(h => (
                                        <div key={h} className="text-[0.6rem] font-black tracking-[0.15em] uppercase text-[#FF4800]">{h}</div>
                                    ))}
                                </div>
                                {[
                                    ["AI Scheduling", "15-25%", "5-10% savings", "Reallocation"],
                                    ["Robotic Layout", "80% faster", "Eliminates rework", "90% reduction"],
                                    ["3D Printing", "50-70% walls", "$20/sf walls", "70% reduction"],
                                    ["Drones", "Weekly vs monthly", "Early detection", "Safety +20%"],
                                    ["Digital Twins", "Weeks of RFIs", "$5K-50K per clash", "Better coordination"],
                                    ["Prefab/Modular", "20-40% faster", "5-15% savings", "40-50% on-site"],
                                    ["AR/VR", "Design reviews", "10-100x cheaper fixes", "Training +40%"],
                                    ["Computer Vision", "Continuous", "Incident prevention", "24/7 monitoring"],
                                ].map(([tech, time, cost, labor], i) => (
                                    <div key={i} className={`grid grid-cols-4 gap-2 md:gap-4 px-4 md:px-6 py-3 border-b border-white/4 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                                        <div className="text-xs md:text-sm font-bold text-white">{tech}</div>
                                        <div className="text-xs md:text-sm text-white/50">{time}</div>
                                        <div className="text-xs md:text-sm text-white/50">{cost}</div>
                                        <div className="text-xs md:text-sm text-white/50">{labor}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ FAQ ════════ */}
            <section className="border-t-2 border-white/6 bg-white/[0.01]">
                <div className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
                    <Reveal>
                        <div className="text-center mb-10 md:mb-14">
                            <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-[#FF4800] mb-3 block">FAQ</span>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Construction Technology — <span className="text-[#FF4800]">Common Questions</span></h2>
                        </div>
                    </Reveal>
                    <div className="space-y-3">
                        {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} i={i} />)}
                    </div>
                </div>
            </section>

            {/* ════════ CTA ════════ */}
            <section className="border-t-4 border-[#FF4800] bg-[#FF4800]/[0.03]">
                <div className="max-w-3xl mx-auto text-center px-4 md:px-6 py-16 md:py-20">
                    <Reveal>
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                            Build with Technology.<br /><span className="text-[#FF4800]">Build with UDGOK.</span>
                        </h2>
                        <p className="text-sm md:text-base text-white/50 mb-8 max-w-xl mx-auto">
                            Get a free estimate for your commercial, medical, or industrial project. AI-powered budgets delivered within 48 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-block px-8 py-4 bg-[#FF4800] text-white font-black text-xs tracking-[0.15em] uppercase hover:bg-[#FF5A1A] transition-colors text-center">
                                Get Your Free Estimate →
                            </Link>
                            <Link href="/transparency" className="inline-block px-8 py-4 border-2 border-white/15 text-white font-black text-xs tracking-[0.15em] uppercase hover:border-[#FF4800] hover:text-[#FF4800] transition-colors text-center">
                                AI Transparency Policy
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
