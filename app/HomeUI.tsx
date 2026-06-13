"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import MarqueeBanner from "@/components/MarqueeBanner";
import AnimateIn from "@/components/AnimateIn";
import ProcessScroll from "@/components/ProcessScroll";
import ArchitecturalGrid from "@/components/ArchitecturalGrid";

const services = [
  { code: "01", title: "Medical Office", desc: "Fully compliant medical offices with specialized MEP systems.", href: "/medical-office-design-build-tulsa", img: "/images/ai-medical-exterior.png" },
  { code: "02", title: "Dental Clinics", desc: "Purpose-built dental suites with integrated plumbing and custom cabinetry.", href: "/dental-office-construction-tulsa", img: "/images/ai-dental-interior.png" },
  { code: "03", title: "Oral Surgery", desc: "Surgical-suite precision including certified medical gas systems.", href: "/oral-surgeon-office-construction-tulsa", img: "/images/ai-surgery-suite.png" },
  { code: "04", title: "Design-Build", desc: "Integrated approach streamlining project delivery from concept to completion.", href: "/design-build", img: "/images/ai-construction-mep.png" },
  { code: "05", title: "Tenant Build-Out", desc: "Transform existing spaces into functional, beautiful environments.", href: "/tenant-improvements", img: "/images/shopping-center-construction.jpg" },
  { code: "06", title: "Retail Spaces", desc: "Complete construction including specialized equipment installation.", href: "/convenience-store-construction-tulsa", img: "/images/c-store-construction.jpg" },
];

const process = [
  { n: "01", t: "Discovery", d: "Deep analysis of program requirements and site conditions." },
  { n: "02", t: "Design", d: "Collaborative engineering with accurate cost estimates." },
  { n: "03", t: "Build", d: "Expert execution with weekly transparency updates." },
  { n: "04", t: "Commissioning", d: "Complete system walk-throughs and final sign-offs." }
];

const homeFaqs = [
  { q: "How much does medical office construction cost in Tulsa?", a: "Medical office construction in Tulsa costs $150–$350 per square foot depending on specialty. A standard 3,000 sq ft primary care office runs $450,000–$750,000. Specialty practices with surgical suites or medical gas systems cost more. UDGOK provides free preconstruction budgets." },
  { q: "How long does it take to build a dental office in Oklahoma?", a: "Most dental office builds take 3–5 months from permit issuance to certificate of occupancy. UDGOK's design-build approach saves 4–6 weeks compared to traditional construction by overlapping design, permitting, and procurement phases." },
  { q: "What is design-build construction?", a: "Design-build is a construction delivery method where one company handles both design and construction. This eliminates the finger-pointing between separate architects and contractors, reduces change orders by 30–40%, and accelerates project delivery. UDGOK uses design-build on 90% of healthcare projects." },
  { q: "Does UDGOK serve cities outside Tulsa?", a: "Yes. UDGOK serves the entire Tulsa metro including Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, and Haskell. We also serve Oklahoma City and the Dallas-Fort Worth area in Texas. Our headquarters are at 7739 E 38th Street, Suite F, Tulsa, OK 74145." },
  { q: "What types of construction does UDGOK specialize in?", a: "UDGOK specializes in healthcare construction — dental offices, medical offices, eye clinics, oral surgery centers, and ambulatory surgery centers. We also build commercial projects including convenience stores, restaurants, retail centers, and tenant improvements." },
  { q: "Is UDGOK licensed and insured?", a: "Yes. UDGOK is a licensed Oklahoma general contractor with full commercial general liability, workers' compensation, and professional liability insurance. We are licensed in Texas for DFW projects. Our EMR (safety rating) is 0.7 — well below the industry average of 1.0." },
];

// Reusable text reveal for big headings
const SplitTextReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem 1rem" }}>
      {words.map((word, i) => (
        <div key={i} style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
          >
            {word === "Future" || word === "Healthcare" || word === "Excellence" || word === "Together." ? (
               <span style={{ color: "#FF4800" }}>{word}</span>
            ) : word}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default function HomeUI() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);

  const pBannerRef = useRef(null);
  const { scrollYProgress: pBannerProgress } = useScroll({ target: pBannerRef, offset: ["start end", "end start"] });
  const pBannerY = useTransform(pBannerProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div style={{ background: "#F7F4F7", color: "#0B061B" }}>
      {/* ── HIGH-END HERO ── */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", marginTop: "-80px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* Parallax Background */}
        <motion.div style={{ position: "absolute", inset: -50, y: heroY, opacity: heroOpacity, zIndex: 0 }}>
          <video src="/videos/hero-video.mp4" autoPlay loop muted playsInline data-nosnippet aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11, 6, 27, 0.75) 0%, rgba(11, 6, 27, 0.35) 50%, rgba(247, 244, 247, 1) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </motion.div>

        {/* Hero Content */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 2rem", width: "100%", maxWidth: "1200px", marginTop: "4rem" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "inline-block", marginBottom: "3rem", padding: "0.75rem 1.5rem", background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(0,0,0,0.05)", borderRadius: "100px", color: "#0B061B", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            <span style={{ color: "#FF4800", marginRight: "0.5rem" }}>◾</span> Premium Construction Firm
          </motion.div>

          <h1 style={{ fontSize: "clamp(2.8rem, 10vw, 8rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", marginBottom: "1.5rem", color: "#fff", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
            <SplitTextReveal text="Building the Future of Healthcare" />
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "2rem" }}
          >
            Medical &amp; Dental Construction Experts in Tulsa, Oklahoma
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", lineHeight: 1.6, color: "rgba(255,255,255,0.8)", maxWidth: "650px", margin: "0 auto 4rem", fontWeight: 500 }}
          >
            Design-build excellence for medical offices, dental practices, and commercial spaces across Oklahoma and Texas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" style={{ display: "inline-flex", padding: "1.25rem 3rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "2px" }}>
                Start Your Project
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects" style={{ display: "inline-flex", padding: "1.25rem 3rem", background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)", border: "1px solid rgba(0,0,0,0.1)", color: "#0B061B", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "2px" }}>
                Explore Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            data-speakable="true"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "3rem" }}
          >
            {[
              { icon: "🏗️", text: "Since 2015" },
              { icon: "✅", text: "100+ Projects" },
              { icon: "📋", text: "PMP-Certified" },
              { icon: "🛡️", text: "OSHA Compliant" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.6rem 1.25rem", background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "100px", fontSize: "0.75rem", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff",
                }}
              >
                <span>{item.icon}</span> {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <MarqueeBanner />
      </div>

      {/* ── HIGH-END SERVICES CARDS ── */}
      <section style={{ padding: "8rem 2rem", background: "#F7F4F7", position: "relative", overflow: "hidden" }}>
        {/* Animated Blueprint Background */}
        <ArchitecturalGrid />

        <div style={{ position: "relative", zIndex: 10 }}>
          <AnimateIn style={{ textAlign: "center", marginBottom: "6rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.2em", color: "#FF4800", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>Our Expertise</span>
          <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.05em", lineHeight: 0.9 }}>
            Specialized<br />Construction
          </h2>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
          {services.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover="hover"
                initial="initial"
                style={{ position: "relative", height: "450px", overflow: "hidden", borderRadius: "16px", background: "#0B061B" }}
              >
                <motion.div
                  variants={{ initial: { scale: 1 }, hover: { scale: 1.05 } }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover", opacity: 0.6 }} />
                </motion.div>
                
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,6,27,0.9) 0%, rgba(11,6,27,0.2) 50%, rgba(11,6,27,0) 100%)" }} />
                
                <Link href={s.href} style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2.5rem", color: "#fff", textDecoration: "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.2em", color: "#FF4800" }}>{s.code}</span>
                    <motion.div variants={{ initial: { opacity: 0, x: -10 }, hover: { opacity: 1, x: 0 } }} transition={{ duration: 0.3 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </motion.div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "2rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1 }}>{s.title}</h3>
                    <motion.div variants={{ initial: { height: 0, opacity: 0 }, hover: { height: "auto", opacity: 1 } }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: "hidden" }}>
                      <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
        </div>
      </section>

      {/* ── PARALLAX PORTFOLIO BANNER ── */}
      <section ref={pBannerRef} style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <motion.div style={{ position: "absolute", inset: -100, y: pBannerY }}>
          <Image src="/images/medical-office-design-build.png" alt="Medical office project" fill style={{ objectFit: "cover" }} />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "rgba(11,6,27,0.6)", backdropFilter: "blur(4px)" }} />
        
        <AnimateIn style={{ position: "relative", zIndex: 10, textAlign: "center", color: "#fff", padding: "2rem" }}>
          <h2 style={{ fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.05em", lineHeight: 0.85, marginBottom: "3rem" }}>
             Built for Healthcare.<br />Built to <span style={{ color: "#FF4800", fontStyle: "italic" }}>Last.</span>
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects" style={{ display: "inline-flex", padding: "1.5rem 4rem", background: "#fff", color: "#0B061B", textDecoration: "none", fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "100px" }}>
              Explore Portfolio
            </Link>
          </motion.div>
        </AnimateIn>
      </section>

      <ProcessScroll />

      {/* ── TESTIMONIALS ── */}
      <TestimonialCarousel />

      {/* ── HOMEPAGE FAQ ── */}
      <section style={{ padding: "6rem 2rem", background: "#0B061B", color: "#fff", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <AnimateIn>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <span style={{ width: "48px", height: "2px", background: "#FF4800" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>Common Questions</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: "3rem", lineHeight: 1 }}>
              Frequently Asked <span style={{ color: "#FF4800" }}>Questions</span>
            </h2>
          </AnimateIn>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {homeFaqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "2rem 0" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", color: "#fff" }}>{faq.q}</h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: 0 }}>{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "8rem 2rem", background: "#fff", color: "#0B061B", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
        <AnimateIn>
          <h2 style={{ fontSize: "clamp(3.5rem,8vw,8rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", marginBottom: "3rem" }}>
            <SplitTextReveal text="Let's Build Together." />
          </h2>
          <p style={{ fontSize: "1.25rem", fontWeight: 500, color: "#666", maxWidth: "600px", margin: "0 auto 4rem" }}>
            Ready to break ground in Oklahoma or Texas? Reach out today for a discovery session.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" style={{ display: "inline-flex", padding: "1.5rem 4rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "100px" }}>
              Start the Conversation
            </Link>
          </motion.div>
        </AnimateIn>
      </section>
    </div>
  );
}

const testimonials = [
  {
    quote: "UDGOK made our dental practice build-out completely seamless. Their deep understanding of specialized healthcare requirements—from precise plumbing to medical gases—saved us months of delays.",
    initials: "DY",
    name: "Dental Practice Owner",
    location: "Tulsa, OK",
    gradient: "linear-gradient(135deg, #FF4800, #FF6B2B)",
  },
  {
    quote: "We interviewed four general contractors before choosing UDGOK. They were the only team that understood the HVAC requirements for our ophthalmology practice. Our dark rooms and laser suite were built to spec on the first pass—no rework.",
    initials: "KP",
    name: "Ophthalmology Clinic Owner",
    location: "Broken Arrow, OK",
    gradient: "linear-gradient(135deg, #6366F1, #818CF8)",
  },
  {
    quote: "UDGOK delivered our 8,000 sq ft medical office two weeks ahead of schedule and under budget. Their preconstruction budgeting was accurate to within 3%. I've since referred them to three other physicians in my network.",
    initials: "RS",
    name: "Multi-Specialty Clinic Developer",
    location: "Jenks, OK",
    gradient: "linear-gradient(135deg, #059669, #34D399)",
  },
];

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const advance = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [advance]);

  const t = testimonials[active];

  return (
    <section style={{ padding: "8rem 2rem", background: "#0B061B", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-10vh", right: "-10vw", width: "60vw", height: "60vw", background: "radial-gradient(circle, rgba(255,72,0,0.15) 0%, rgba(11,6,27,0) 70%)", borderRadius: "50%" }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <AnimateIn>
          <div style={{ fontSize: "6rem", color: "#FF4800", lineHeight: 0.5, marginBottom: "2rem", opacity: 0.5 }}>&ldquo;</div>
          <motion.h2
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.4, marginBottom: "4rem", minHeight: "8rem" }}
          >
            {t.quote}
          </motion.h2>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: t.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", flexShrink: 0 }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff" }}>{t.name}</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.location}</div>
              </div>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: active === i ? "32px" : "10px",
                    height: "10px",
                    borderRadius: "100px",
                    background: active === i ? "#FF4800" : "rgba(255,255,255,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
