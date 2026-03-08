"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MarqueeBanner from "@/components/MarqueeBanner";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";

const stats = [
  { number: "10+", label: "Years in Business", orange: false },
  { number: "150+", label: "Projects Completed", orange: true },
  { number: "50+", label: "Healthcare Clients", orange: false },
  { number: "98%", label: "Client Satisfaction", orange: true },
];

const values = [
  { num: "01", title: "Precision", desc: "Every millimeter matters in healthcare construction. We bring surgical precision to project management, material sourcing, and installation." },
  { num: "02", title: "Transparency", desc: "Real-time cost reporting, open-book accounting, and weekly owner meetings keep you fully informed throughout the build." },
  { num: "03", title: "Innovation", desc: "We leverage BIM, VDC, and AI-assisted scheduling to deliver projects faster and with fewer surprises." },
  { num: "04", title: "Safety", desc: "Our EMR rating is among the lowest in the state. Zero compromise on worker safety, ever." },
];

const timeline = [
  { year: "2015", title: "Founded in Tulsa", desc: "Upscale Development Group established with a focus on healthcare construction." },
  { year: "2017", title: "Medical Gas Certification", desc: "Earned ASSE 6010 medical gas installer certification, expanding specialty capabilities." },
  { year: "2019", title: "Dental Division Launch", desc: "Launched dedicated dental construction division after completing 20+ dental offices." },
  { year: "2021", title: "VDC Integration", desc: "Integrated Virtual Design and Construction (BIM/Revit) across all projects." },
  { year: "2023", title: "Texas Expansion", desc: "Licensed in Texas, opening Dallas-Fort Worth as a new service territory." },
  { year: "2025", title: "AI-Powered Operations", desc: "Deployed AI scheduling, cost modeling, and design optimization for all project types." },
];

export default function AboutUI() {
  return (
    <>
      <PageHero
        label="About UDGOK"
        title="Built on Trust. Delivered with Precision."
        description="Upscale Development Group is Tulsa's leading design-build firm for medical, dental, and commercial construction — combining AI-powered technology with hands-on expertise."
        imageSrc="/images/upscale-building-modern.png"
        imageAlt="UDGOK modern medical building"
      />

      <MarqueeBanner />

      {/* About Intro */}
      <section style={{ display: "grid", gridTemplateColumns: "6fr 6fr", borderBottom: "4px solid #0B061B" }}>
        <AnimateIn direction="right">
          <div style={{ padding: "6rem 4rem", borderRight: "4px solid #0B061B", height: "100%" }}>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: "3rem", lineHeight: 0.9 }}>
              A Different Kind of Construction Company
            </h2>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#666", marginBottom: "1.5rem" }}>
              We started UDGOK because we saw a gap in the market: healthcare providers needed a construction partner who truly understood their world — the compliance requirements, the operational sensitivities, the life-or-death importance of getting it right.
            </p>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#666", marginBottom: "1.5rem" }}>
              Today we&apos;re Tulsa&apos;s most-trusted design-build contractor for medical and dental practices, with over 150 completed projects and a client retention rate that speaks for itself.
            </p>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#666" }}>
              Every project, regardless of size, gets the same commitment: transparent pricing, precise execution, and a finished product that makes your practice proud.
            </p>
          </div>
        </AnimateIn>

        {/* Values */}
        <AnimateIn direction="left" delay={0.1}>
          <div style={{ padding: "6rem 4rem", background: "#0B061B", color: "#fff", height: "100%" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "3rem", lineHeight: 1 }}>
              Core Values
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {values.map((v, i) => (
                <AnimateIn key={v.num} delay={i * 0.08}>
                  <div style={{ paddingBottom: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#FF4800", marginBottom: "0.5rem" }}>{v.num}</div>
                    <div style={{ fontSize: "1.125rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>{v.title}</div>
                    <div style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>{v.desc}</div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Stats */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "4px solid #0B061B" }}>
        {stats.map((s, i) => (
          <AnimateIn key={i} delay={i * 0.1}>
            <div style={{ padding: "4rem 2rem", borderRight: i < 3 ? "4px solid #0B061B" : "none", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(3rem,8vw,5rem)", fontWeight: 900, letterSpacing: "-0.05em", color: s.orange ? "#FF4800" : "#0B061B", marginBottom: "1rem" }}>
                <CountUp value={s.number} />
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666" }}>{s.label}</div>
            </div>
          </AnimateIn>
        ))}
      </section>

      {/* Timeline */}
      <section style={{ display: "grid", gridTemplateColumns: "4fr 8fr", borderBottom: "4px solid #0B061B" }}>
        <AnimateIn direction="right">
          <div style={{ padding: "4rem", borderRight: "4px solid #0B061B", background: "#0B061B", color: "#fff", height: "100%" }}>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, lineHeight: 0.9, marginBottom: "2rem" }}>Our Journey</h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
              From a small Tulsa startup to Oklahoma&apos;s leading healthcare construction firm — a decade of growth through client trust.
            </p>
          </div>
        </AnimateIn>
        <div>
          {timeline.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.07} direction="left">
              <div style={{ display: "grid", gridTemplateColumns: "2fr 10fr", borderBottom: i < timeline.length - 1 ? "4px solid #0B061B" : "none" }}>
                <div style={{ padding: "2rem", borderRight: "4px solid #0B061B", fontSize: "1.5rem", fontWeight: 700, color: "#FF4800", display: "flex", alignItems: "center" }}>{item.year}</div>
                <div style={{ padding: "2rem" }}>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "#666", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <AnimateIn>
          <div style={{ borderBottom: "4px solid #0B061B", padding: "3rem 2rem" }}>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Leadership Team</h2>
          </div>
        </AnimateIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            { name: "David Young", role: "Founder & CEO", img: "/images/edyoung-1.jpg" },
            { name: "Operations Team", role: "Project Management", img: "/images/IMG_7602.jpeg" },
            { name: "Field Crew", role: "Construction Specialists", img: "/images/IMG_7607.jpeg" },
          ].map((m, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                style={{ borderRight: i < 2 ? "4px solid #0B061B" : "none", overflow: "hidden", height: "100%" }}
              >
                <div style={{ position: "relative", height: "350px", overflow: "hidden" }}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} style={{ position: "absolute", inset: 0 }}>
                    <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover", filter: "grayscale(80%) contrast(1.1)", transition: "filter 0.4s" }} />
                  </motion.div>
                </div>
                <div style={{ padding: "1.5rem 2rem", borderTop: "4px solid #0B061B" }}>
                  <div style={{ fontSize: "1.125rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>{m.name}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4800" }}>{m.role}</div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ display: "grid", gridTemplateColumns: "8fr 4fr", borderBottom: "4px solid #0B061B" }}>
        <AnimateIn direction="right">
          <div style={{ padding: "6rem 4rem", borderRight: "4px solid #0B061B" }}>
            <h2 style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: "2rem", textTransform: "uppercase" }}>
              Let&apos;s Build Something <span style={{ color: "#FF4800" }}>Extraordinary</span>
            </h2>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "#666", maxWidth: "80%" }}>
              Whether you&apos;re opening your first practice or expanding an established one, UDGOK brings the expertise and integrity your project deserves.
            </p>
          </div>
        </AnimateIn>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem" }}>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" style={{ display: "block", padding: "1.5rem 3rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
              Start Your Project →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
