"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

// Reusable text reveal for big headings
const SplitTextReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
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
      <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* Parallax Background */}
        <motion.div style={{ position: "absolute", inset: -50, y: heroY, opacity: heroOpacity, zIndex: 0 }}>
          <video src="/videos/hero-video.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,6,27,0.3) 0%, rgba(247,244,247,1) 100%)" }} />
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

          <h1 style={{ fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", marginBottom: "3rem" }}>
            <SplitTextReveal text="Building the Future of Healthcare" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.6, color: "#666", maxWidth: "650px", margin: "0 auto 4rem", fontWeight: 500 }}
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
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

      {/* ── HIGH-END TESTIMONIAL ── */}
      <section style={{ padding: "8rem 2rem", background: "#0B061B", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10vh", right: "-10vw", width: "60vw", height: "60vw", background: "radial-gradient(circle, rgba(255,72,0,0.15) 0%, rgba(11,6,27,0) 70%)", borderRadius: "50%" }} />
        
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          <AnimateIn>
            <div style={{ fontSize: "6rem", color: "#FF4800", lineHeight: 0.5, marginBottom: "2rem", opacity: 0.5 }}>&ldquo;</div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.4, marginBottom: "4rem" }}>
              UDGOK made our dental practice build-out completely seamless. Their deep understanding of specialized healthcare requirements—from precise plumbing to medical gases—saved us months of delays.
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#333", overflow: "hidden", position: "relative" }}>
                 <Image src="/images/office-building-tulsa.jpg" alt="Dr Miller" fill style={{ objectFit: "cover", filter: "grayscale(100%)" }} />
              </div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff" }}>Dr. James Miller</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Tulsa, OK</div>
              </div>
            </div>
          </AnimateIn>
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
