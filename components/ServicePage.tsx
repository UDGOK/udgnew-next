"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import MarqueeBanner from "@/components/MarqueeBanner";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";

interface Feature { icon: string; title: string; desc: string; }
interface ServicePageProps {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  intro: string;
  features: Feature[];
  cta?: string;
  stats?: { n: string; l: string }[];
}

export default function ServicePage({ label, title, description, imageSrc, imageAlt, intro, features, cta = "Start Your Project →", stats }: ServicePageProps) {
  return (
    <>
      <PageHero label={label} title={title} description={description} imageSrc={imageSrc} imageAlt={imageAlt} />
      <MarqueeBanner />

      {/* Intro + stats */}
      <section style={{ display: "grid", gridTemplateColumns: stats ? "6fr 6fr" : "1fr", borderBottom: "4px solid #0B061B" }}>
        <AnimateIn style={{ padding: "6rem 4rem", borderRight: stats ? "4px solid #0B061B" : "none" }}>
          <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
            Built for Your Practice
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#666" }}>{intro}</p>
        </AnimateIn>
        {stats && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {stats.map((s, i) => (
              <AnimateIn key={i} delay={i * 0.08} style={{
                padding: "3rem 2rem", textAlign: "center",
                borderRight: i % 2 === 0 ? "4px solid #0B061B" : "none",
                borderBottom: i < 2 ? "4px solid #0B061B" : "none",
                background: i === 0 || i === 3 ? "#F7F4F7" : "#fff",
              }}>
                <div style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#FF4800", letterSpacing: "-0.05em", marginBottom: "0.5rem" }}>
                  <CountUp value={s.n} />
                </div>
                <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666" }}>{s.l}</div>
              </AnimateIn>
            ))}
          </div>
        )}
      </section>

      {/* Features grid */}
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <AnimateIn style={{ borderBottom: "4px solid #0B061B", padding: "3rem 2rem" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>What We Deliver</h2>
        </AnimateIn>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(features.length, 3)}, 1fr)` }}>
          {features.map((f, i) => (
            <AnimateIn key={i} delay={i * 0.07} style={{
              padding: "3rem 2.5rem",
              borderRight: (i + 1) % 3 !== 0 && i < features.length - 1 ? "4px solid #0B061B" : "none",
              borderBottom: i < features.length - 3 ? "4px solid #0B061B" : "none",
            }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ fontSize: "2.5rem", marginBottom: "1.5rem", display: "inline-block" }}
              >
                {f.icon}
              </motion.div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>{f.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{f.desc}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Image + Process */}
      <section style={{ display: "grid", gridTemplateColumns: "5fr 7fr", borderBottom: "4px solid #0B061B", minHeight: "440px" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image src={imageSrc} alt={imageAlt} fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(11,6,27,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <AnimateIn direction="left" style={{ padding: "5rem 4rem", borderLeft: "4px solid #0B061B", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: "clamp(2rem,3vw,2.5rem)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "2rem" }}>Our Process</h2>
          {[
            "Discovery — We assess your program, site, and regulatory requirements.",
            "Design — Construction-ready documents developed with integrated cost tracking.",
            "Build — Self-perform execution with weekly owner updates and real-time cost reporting.",
            "Commissioning — Full system walkthrough and occupancy support.",
          ].map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <span style={{ flexShrink: 0, width: "28px", height: "28px", background: "#FF4800", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 900 }}>{i + 1}</span>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#666", margin: 0 }}>{step}</p>
            </motion.div>
          ))}
        </AnimateIn>
      </section>

      {/* CTA */}
      <section style={{ display: "grid", gridTemplateColumns: "8fr 4fr", borderBottom: "4px solid #0B061B" }}>
        <AnimateIn style={{ padding: "5rem 4rem", borderRight: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Ready to <span style={{ color: "#FF4800" }}>Build?</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}>Contact UDGOK for a free consultation and project estimate.</p>
        </AnimateIn>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", flexDirection: "column", gap: "1rem" }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: "100%" }}>
            <Link href="/contact" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
              {cta}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: "100%" }}>
            <Link href="tel:+19185203823" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
              (918) 520-3823
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
