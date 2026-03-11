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

/* ─── Service Card ─── */
function ServiceCard({ icon, title, desc, href, i }: { icon: string; title: string; desc: string; href?: string; i: number }) {
    const [h, setH] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const inner = (
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{ padding: "2rem 1.5rem", background: h ? "rgba(255,72,0,0.06)" : "rgba(255,255,255,0.02)", border: `2px solid ${h ? "rgba(255,72,0,0.3)" : "rgba(255,255,255,0.06)"}`, cursor: href ? "pointer" : "default", transition: "all 0.3s", position: "relative", overflow: "hidden", height: "100%" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: h ? "#FF4800" : "transparent", transition: "background 0.3s" }} />
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.3 }}>{title}</h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            {href && <div style={{ marginTop: "1rem", fontSize: "0.65rem", fontWeight: 800, color: "#FF4800", letterSpacing: "0.12em", textTransform: "uppercase" }}>Learn More →</div>}
        </motion.div>
    );
    return href ? <Link href={href} style={{ textDecoration: "none" }}>{inner}</Link> : inner;
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

/* ─── Image Card ─── */
function ImageCard({ src, alt, caption }: { src: string; alt: string; caption: string }) {
    const [h, setH] = useState(false);
    return (
        <div
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{ position: "relative", overflow: "hidden", border: "2px solid rgba(255,255,255,0.06)", aspectRatio: "4/3" }}
        >
            <Image
                src={src} alt={alt} fill
                style={{ objectFit: "cover", transition: "transform 0.6s ease, filter 0.6s ease", transform: h ? "scale(1.05)" : "scale(1)", filter: h ? "brightness(1)" : "brightness(0.8) contrast(1.05)" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(11,6,27,0.9) 0%, transparent 100%)" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>{caption}</span>
            </div>
        </div>
    );
}


/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */
export default function TulsaMedicalUI() {

    const specialties = [
        { icon: "🏥", title: "Medical Office Buildings", desc: "Multi-tenant and single-tenant medical office buildings. Primary care, specialty clinics, urgent care facilities, and multi-physician campuses across the Tulsa metro.", href: "/medical-office-design-build-tulsa" },
        { icon: "🦷", title: "Dental Office Construction", desc: "General dentistry, orthodontics, pediatric dental, and high-volume multi-operatory dental offices. Custom cabinetry, integrated plumbing, and digital imaging infrastructure.", href: "/dental-office-construction-tulsa" },
        { icon: "👁️", title: "Eye Clinics & LASIK Centers", desc: "Optometry and ophthalmology offices with specialized dark rooms, laser suite construction, and sensitive equipment vibration isolation.", href: "/eye-clinic-construction-tulsa" },
        { icon: "🫁", title: "Oral Surgery Centers", desc: "Oral and maxillofacial surgery suites with NFPA 99 medical gas systems, surgical HVAC, IV sedation infrastructure, and recovery bays.", href: "/oral-surgeon-office-construction-tulsa" },
        { icon: "🏗️", title: "Ambulatory Surgery Centers", desc: "AAAHC-ready ASC construction. Class B/C operating rooms, sterile corridors, pre-op/PACU areas, and complete surgical MEP systems.", href: "/medical-office-design-build-tulsa" },
        { icon: "🔄", title: "Renovations & Expansions", desc: "Occupied-space renovations, phased expansions, and equipment upgrades with minimal disruption to patient care operations.", href: "/medical-office-design-build-tulsa" },
    ];

    const costData = [
        { type: "General Dental Office", range: "$140 – $280", note: "Operatory build-out, plumbing, digital imaging" },
        { type: "Orthodontic Office", range: "$120 – $220", note: "Open bay, imaging, sterilization" },
        { type: "Oral Surgery Suite", range: "$200 – $350", note: "Surgical HVAC, medical gas, recovery" },
        { type: "Primary Care Office", range: "$150 – $280", note: "Exam rooms, lab, imaging" },
        { type: "Specialty Medical Office", range: "$180 – $350", note: "Procedure rooms, specialized MEP" },
        { type: "Eye Clinic / LASIK", range: "$200 – $320", note: "Dark rooms, laser suite, vibration isolation" },
        { type: "Urgent Care Facility", range: "$180 – $300", note: "X-ray, lab, triage, wait areas" },
        { type: "Ambulatory Surgery Center", range: "$300 – $500", note: "Class B/C OR, sterile corridor, AAAHC" },
    ];

    const certifications = [
        { label: "ASSE 6010", desc: "Certified Medical Gas Installers" },
        { label: "OSHA 30", desc: "Site Superintendent Safety" },
        { label: "PMP", desc: "Project Management Professionals" },
        { label: "NFPA 99", desc: "Healthcare Facility Code Compliance" },
        { label: "AAAHC", desc: "Ambulatory Surgery Center Standards" },
        { label: "ADA", desc: "Accessibility Compliance Experts" },
    ];

    const faqs = [
        { q: "Who is Tulsa's top medical construction contractor?", a: "UDGOK (Upscale Development Group) is Tulsa's most experienced medical construction contractor with 100+ healthcare facilities delivered. We specialize in dental offices, medical clinics, eye centers, oral surgery suites, and ambulatory surgery centers across the Tulsa metro." },
        { q: "What types of healthcare facilities does UDGOK build?", a: "We build all healthcare facility types: dental offices (general, pediatric, orthodontic, oral surgery), medical offices (primary care, specialty, urgent care), eye clinics (optometry, ophthalmology, LASIK), and ambulatory surgery centers. Each specialty has unique regulatory, MEP, and layout requirements we've built before." },
        { q: "Does UDGOK install medical gas systems?", a: "Yes. UDGOK has ASSE 6010 certified medical gas installers on staff. We install oxygen, nitrous oxide, medical air, and vacuum systems to NFPA 99 standards with independent ASSE 6030 third-party verification." },
        { q: "How much does medical construction cost in Tulsa?", a: "Medical construction in Tulsa ranges from $140–$350 per square foot depending on specialty. Dental offices run $140–$280/sq ft, medical offices $150–$350/sq ft, and ambulatory surgery centers $300–$500/sq ft. These include full turnkey build-out with MEP, medical gas, finishes, and equipment rough-ins." },
        { q: "How long does a medical office build-out take?", a: "A typical 2,000–5,000 SF dental or medical office takes 3–5 months from design through certificate of occupancy. Larger facilities (10,000+ SF) or ambulatory surgery centers take 6–12 months. UDGOK uses design-build methodology to compress timelines by 20–30% compared to traditional design-bid-build." },
        { q: "Does UDGOK handle healthcare regulatory compliance?", a: "Absolutely. Our team manages all regulatory requirements including OSHA, ADA accessibility, NFPA 99 medical gas compliance, local building codes, health department inspections, and specialty accreditation requirements (AAAHC for ASCs). We coordinate directly with inspectors and accreditation surveyors." },
    ];

    const images = [
        { src: "/images/healthcare-medical-office-exterior.png", alt: "Modern medical office building exterior constructed by UDGOK in Tulsa", caption: "Medical Office Exterior" },
        { src: "/images/healthcare-dental-suite-interior.png", alt: "Premium dental suite interior build-out by UDGOK", caption: "Dental Suite Interior" },
        { src: "/images/healthcare-surgery-center.png", alt: "Ambulatory surgery center under construction by UDGOK", caption: "Surgery Center Construction" },
        { src: "/images/healthcare-medical-gas-system.png", alt: "NFPA 99 medical gas installation by UDGOK certified team", caption: "Medical Gas Installation" },
    ];

    return (
        <div style={{ background: "#0B061B", color: "#fff", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

            {/* ═══ HERO ═══ */}
            <section style={{ position: "relative", padding: "8rem 2rem 5rem", background: "linear-gradient(180deg,#0B061B 0%,#12082A 50%,#0B061B 100%)", overflow: "hidden" }}>
                {/* Grid overlay */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,72,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,72,0,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                {/* Animated orb */}
                <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,72,0,0.15) 0%,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
                {/* Cross accent lines */}
                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "rgba(255,72,0,0.06)" }} />
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: "1px", background: "rgba(255,72,0,0.06)" }} />

                <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", border: "2px solid rgba(255,72,0,0.3)", background: "rgba(255,72,0,0.08)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "2rem" }}>
                            <span style={{ width: "8px", height: "8px", background: "#FF4800", display: "inline-block" }} />
                            Healthcare Construction Specialists
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
                        Tulsa Medical &amp; Dental{" "}
                        <span style={{ background: "linear-gradient(135deg,#FF4800,#FF7043)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Construction
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: "700px", margin: "0 auto" }}>
                        Oklahoma&apos;s most trusted healthcare construction contractor — 100+ medical and dental facilities delivered across the Tulsa metro. From single-operatory dental suites to multi-physician medical campuses and ambulatory surgery centers.
                    </motion.p>

                    {/* Stats bar */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginTop: "3rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                        <Stat value="100+" label="Healthcare Projects" />
                        <Stat value="#1" label="Tulsa Medical Builder" />
                        <Stat value="ASSE" label="Certified Gas Installers" />
                        <Stat value="Local" label="Team & Subs" />
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
                                UDGOK is Tulsa&apos;s most experienced healthcare construction contractor with 100+ medical and dental facilities delivered across the metro area. We build dental offices, medical office buildings, eye clinics, oral surgery centers, urgent care facilities, and ambulatory surgery centers. Our team includes ASSE 6010 certified medical gas installers, OSHA 30 superintendents, and PMP-certified project managers. Healthcare construction in Tulsa costs $140–$500 per square foot depending on specialty and complexity.
                            </p>
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ IMAGE SHOWCASE ═══ */}
            <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                <Section>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>Our Work</div>
                        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>Healthcare Facilities We Build</h2>
                    </div>
                </Section>
                <Section delay={0.1}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "1.5rem" }}>
                        {images.map((img, i) => (
                            <ImageCard key={i} src={img.src} alt={img.alt} caption={img.caption} />
                        ))}
                    </div>
                </Section>
            </section>

            {/* ═══ HEALTHCARE SPECIALTIES GRID ═══ */}
            <section style={{ borderTop: "2px solid rgba(255,255,255,0.04)", borderBottom: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>Specialties</div>
                            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>Healthcare Construction Specialties</h2>
                        </div>
                    </Section>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
                        {specialties.map((s, i) => <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} href={s.href} i={i} />)}
                    </div>
                </div>
            </section>

            {/* ═══ COST TABLE ═══ */}
            <section style={{ background: "linear-gradient(180deg,rgba(255,72,0,0.02) 0%,transparent 100%)" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>Pricing Guide</div>
                            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 0.75rem" }}>Healthcare Construction Cost Per Square Foot — Tulsa (2026)</h2>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", margin: 0 }}>Costs vary by specialty, MEP complexity, medical gas, and regulatory requirements</p>
                        </div>
                    </Section>
                    <Section delay={0.1}>
                        <div style={{ border: "2px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
                            {/* Header */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 1fr", gap: "1rem", padding: "1rem 1.5rem", background: "rgba(255,72,0,0.08)", borderBottom: "2px solid rgba(255,72,0,0.2)" }}>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800" }}>Facility Type</div>
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
                    <Section delay={0.2}>
                        <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginTop: "1.5rem", textAlign: "center", fontStyle: "italic" }}>
                            Prices based on UDGOK project data across 100+ healthcare facilities. Actual costs vary — contact UDGOK for a project-specific estimate.
                        </p>
                    </Section>
                </div>
            </section>

            {/* ═══ WHY CHOOSE UDGOK ═══ */}
            <section style={{ borderTop: "2px solid rgba(255,255,255,0.04)", background: "rgba(255,72,0,0.02)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
                    <Section>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>Why Choose Us</div>
                            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>Why UDGOK for Healthcare Construction?</h2>
                        </div>
                    </Section>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
                        {[
                            { icon: "🔬", title: "100+ Healthcare Facilities", desc: "More healthcare square footage delivered in the Tulsa metro than any other local contractor. We know the inspectors, the subcontractors, and the clinical requirements." },
                            { icon: "⚕️", title: "ASSE 6010 Medical Gas", desc: "Certified medical gas installers on staff. Oxygen, nitrous oxide, medical air, and vacuum systems installed to NFPA 99 standards with independent ASSE 6030 verification." },
                            { icon: "📐", title: "In-House Design-Build", desc: "Integrated design and construction under one contract. No finger-pointing between architect and contractor. Faster delivery, locked budgets, single accountability." },
                            { icon: "🤖", title: "AI-Powered Estimating", desc: "Machine learning models trained on 100+ healthcare projects produce accurate conceptual estimates within 48 hours — not weeks. Budget certainty before you commit." },
                            { icon: "🏛️", title: "Regulatory Expertise", desc: "OSHA 30 superintendents, ADA compliance, health department coordination, and AAAHC accreditation support. We handle the regulatory burden so you can focus on patients." },
                            { icon: "📊", title: "Transparent Pricing", desc: "Open-book GMP contracts with real-time cost reporting. You see every line-item, every subcontractor bid, and every cost decision in real time." },
                        ].map((item, i) => <ServiceCard key={i} icon={item.icon} title={item.title} desc={item.desc} i={i} />)}
                    </div>
                </div>
            </section>

            {/* ═══ CERTIFICATIONS & COMPLIANCE ═══ */}
            <section style={{ borderTop: "2px solid rgba(255,255,255,0.04)", borderBottom: "2px solid rgba(255,255,255,0.04)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}>
                    <Section>
                        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>Credentials</div>
                            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>Certifications &amp; Compliance</h2>
                        </div>
                    </Section>
                    <Section delay={0.1}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                            {certifications.map((cert, i) => (
                                <div key={i} style={{ textAlign: "center", padding: "1.5rem 1rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", transition: "border-color 0.3s" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,72,0,0.3)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                                    <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#FF4800", marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>{cert.label}</div>
                                    <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{cert.desc}</div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
                <Section>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>FAQ</div>
                        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: 0 }}>Healthcare Construction FAQ — Tulsa, Oklahoma</h2>
                    </div>
                </Section>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} i={i} />)}
                </div>
            </section>

            {/* ═══ CROSS-LINK ═══ */}
            <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem 2rem" }}>
                <Section>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", border: "2px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                        <div style={{ width: "4px", height: "40px", background: "#FF4800", flexShrink: 0 }} />
                        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                            UDGOK is a leading{" "}
                            <Link href="/construction-companies-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>construction company in Tulsa, Oklahoma</Link>
                            {" "}— delivering commercial, medical, dental, industrial, and retail projects. Explore our{" "}
                            <Link href="/dental-office-construction-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>dental office construction</Link>
                            {" "}and{" "}
                            <Link href="/medical-office-design-build-tulsa" style={{ color: "#FF4800", textDecoration: "none", fontWeight: 700 }}>medical office design-build</Link>
                            {" "}pages for more.
                        </p>
                    </div>
                </Section>
            </section>

            {/* ═══ CTA ═══ */}
            <section style={{ padding: "4rem 2rem", borderTop: "3px solid #FF4800", background: "rgba(255,72,0,0.04)", textAlign: "center" }}>
                <Section>
                    <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 900, margin: "0 0 1rem" }}>Ready to Build Your Healthcare Facility?</h2>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                        Get a free feasibility analysis and cost estimate for your medical, dental, or surgical facility. Most estimates delivered within 48 hours.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" style={{ display: "inline-block", padding: "1rem 2.5rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.3s" }}>
                            Start Your Project →
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
