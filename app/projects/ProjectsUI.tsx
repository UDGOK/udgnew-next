"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import CountUp from "@/components/CountUp";
import AnimateIn from "@/components/AnimateIn";
import MarqueeBanner from "@/components/MarqueeBanner";

/* ─────────────────────────── Types ─────────────────────────── */
import { PROJECTS, Project, CATEGORIES, STATS } from "./ProjectsData";



/* ─────────────────────────── Modal ─────────────────────────── */
function ProjectModal({ project, onClose, projectIndex }: { project: Project; onClose: () => void; projectIndex: number }) {
  const [activeImg, setActiveImg] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const INTERVAL = 4000;
  const TICK = 30;

  // Auto-advance slideshow
  useEffect(() => {
    if (paused || project.images.length <= 1) return;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += TICK;
      setProgress((elapsed / INTERVAL) * 100);
      if (elapsed >= INTERVAL) {
        setActiveImg((i) => (i + 1) % project.images.length);
        elapsed = 0;
        setProgress(0);
      }
    }, TICK);
    return () => clearInterval(timer);
  }, [activeImg, paused, project.images.length]);

  const goTo = useCallback((idx: number) => {
    setActiveImg(idx);
    setProgress(0);
  }, []);

  // Lock scroll & keyboard nav
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo((activeImg + 1) % project.images.length);
      if (e.key === "ArrowLeft") goTo((activeImg - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose, activeImg, project.images.length, goTo]);

  const num = String(projectIndex + 1).padStart(2, "0");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(11,6,27,0.85)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1rem",
          overflow: "hidden",
          overscrollBehavior: "contain",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          style={{
            background: "#fff",
            width: "100%",
            maxWidth: "1200px",
            maxHeight: "90vh",
            overflowY: "auto",
            overscrollBehavior: "contain",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
            borderRadius: "16px",
          }}
        >
          {/* ── Header ── */}
          <div style={{
            display: "flex", alignItems: "center", gap: "2rem",
            padding: "1.5rem 2rem",
            borderBottom: "3px solid #0B061B",
            flexShrink: 0,
          }}>
            <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "#FF4800", letterSpacing: "-0.05em", lineHeight: 1 }}>
              {num}
            </span>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", margin: 0, lineHeight: 1 }}>
                {project.title}
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.4rem" }}>
                <span style={{ fontSize: "0.65rem", color: "#666", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  📍 {project.location}
                </span>
                <span style={{ color: "#ccc" }}>•</span>
                <span style={{ fontSize: "0.65rem", color: "#FF4800", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {project.category}
                </span>
                <span style={{ color: "#ccc" }}>•</span>
                <span style={{ fontSize: "0.65rem", color: "#666", fontWeight: 600, letterSpacing: "0.1em" }}>
                  {project.year}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: "44px", height: "44px",
                background: "#0B061B", border: "none",
                color: "#fff", fontSize: "1.2rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, fontFamily: "inherit",
              }}
            >
              ✕
            </button>
          </div>

          {/* ── Body ── */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>

            {/* ── Cinematic Slideshow Gallery ── */}
            <div
              style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Main image — full image with blurred cinematic backdrop */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", overflow: "hidden", background: "#0B061B", flexShrink: 0 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    {/* Blurred background fill for cinematic look */}
                    <Image
                      src={project.images[activeImg]}
                      alt=""
                      fill
                      style={{ objectFit: "cover", filter: "blur(24px) brightness(0.4) saturate(1.4)", transform: "scale(1.15)" }}
                    />
                    {/* Sharp full image on top */}
                    <motion.div
                      initial={{ scale: 1.0 }}
                      animate={{ scale: 1.02 }}
                      transition={{ duration: 5, ease: "linear" }}
                      style={{ position: "absolute", inset: 0, zIndex: 1 }}
                    >
                      <Image
                        src={project.images[activeImg]}
                        alt={`${project.title} — image ${activeImg + 1}`}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Cinematic gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,6,27,0.25) 0%, transparent 30%, transparent 65%, rgba(11,6,27,0.5) 100%)", pointerEvents: "none" }} />

                {/* Progress bar */}
                {project.images.length > 1 && (
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "rgba(255,255,255,0.08)", zIndex: 5 }}>
                    <div style={{ height: "100%", background: "#FF4800", width: `${progress}%`, transition: "width 30ms linear" }} />
                  </div>
                )}

                {/* Image counter badge */}
                <div style={{
                  position: "absolute", top: "1.25rem", right: "1.25rem", zIndex: 5,
                  background: "rgba(11,6,27,0.65)", backdropFilter: "blur(8px)",
                  padding: "0.4rem 0.8rem", display: "flex", alignItems: "center", gap: "0.4rem",
                }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#FF4800" }}>{String(activeImg + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.35)" }}>/</span>
                  <span style={{ fontSize: "0.55rem", fontWeight: 600, color: "rgba(255,255,255,0.35)" }}>{String(project.images.length).padStart(2, "0")}</span>
                </div>

                {/* Pause indicator */}
                {paused && project.images.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      position: "absolute", top: "1.25rem", left: "1.25rem", zIndex: 5,
                      background: "rgba(11,6,27,0.65)", backdropFilter: "blur(8px)",
                      padding: "0.35rem 0.75rem",
                    }}
                  >
                    <span style={{ fontSize: "0.55rem", fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>⏸ Paused</span>
                  </motion.div>
                )}

                {/* Arrow nav */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => goTo((activeImg - 1 + project.images.length) % project.images.length)}
                      style={{
                        position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)",
                        width: "44px", height: "44px", background: "rgba(11,6,27,0.6)", backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "1rem", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5,
                      }}
                    >←</button>
                    <button
                      onClick={() => goTo((activeImg + 1) % project.images.length)}
                      style={{
                        position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)",
                        width: "44px", height: "44px", background: "rgba(11,6,27,0.6)", backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "1rem", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5,
                      }}
                    >→</button>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
              {project.images.length > 1 && (
                <div style={{
                  display: "flex", gap: 0, borderTop: "3px solid #0B061B",
                  overflowX: "auto", flexShrink: 0,
                }}>
                  {project.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      style={{
                        position: "relative",
                        width: "100px", height: "72px",
                        flexShrink: 0,
                        border: "none",
                        borderRight: "2px solid #0B061B",
                        cursor: "pointer",
                        padding: 0,
                        overflow: "hidden",
                      }}
                    >
                      <Image src={src} alt="" fill style={{ objectFit: "cover", filter: i === activeImg ? "none" : "grayscale(60%) brightness(0.5)", transition: "filter 0.3s" }} />
                      {i === activeImg && (
                        <motion.div
                          layoutId="thumb-active"
                          style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "#FF4800" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right — details */}
            <div style={{ overflowY: "auto", display: "flex", flexDirection: "column" }}>
              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "3px solid #0B061B", flexShrink: 0 }}>
                {project.stats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1.25rem 1.5rem",
                      borderRight: i % 2 === 0 ? "2px solid #0B061B" : "none",
                      borderBottom: i < 2 ? "2px solid #0B061B" : "none",
                      background: "#F7F4F7",
                    }}
                  >
                    <div style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 900, color: "#FF4800", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.3rem" }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div style={{ padding: "1.5rem", borderBottom: "2px solid rgba(11,6,27,0.1)", flexShrink: 0 }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "2px solid #FF4800", display: "inline-block" }}>
                  Overview
                </div>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#333", margin: 0 }}>
                  {project.overview}
                </p>
              </div>

              {/* Highlights */}
              <div style={{ padding: "1.5rem", flex: 1 }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid #FF4800", display: "inline-block" }}>
                  Project Highlights
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.8rem", color: "#333", lineHeight: 1.5 }}>
                      <span style={{ color: "#FF4800", fontWeight: 800, flexShrink: 0, marginTop: "1px" }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div style={{ padding: "1.5rem", borderTop: "2px solid rgba(11,6,27,0.1)", flexShrink: 0 }}>
                <Link
                  href="/contact"
                  onClick={onClose}
                  style={{
                    display: "block", width: "100%", padding: "1rem",
                    background: "#FF4800", color: "#fff", textDecoration: "none",
                    fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.15em",
                    textTransform: "uppercase", textAlign: "center",
                  }}
                >
                  Start a Similar Project →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────── Featured hero ─────────────────────────── */
function FeaturedProject({ p, onClick }: { p: Project; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <AnimateIn direction="up" duration={1}>
      <div ref={ref} onClick={onClick} style={{ position: "relative", height: "75vh", overflow: "hidden", borderBottom: "4px solid #0B061B", cursor: "pointer" }}>
        <motion.div style={{ position: "absolute", inset: "-10%", y }}>
          <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} priority />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,6,27,0.92) 45%, rgba(11,6,27,0.3) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,6,27,0.6) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
            <span style={{ background: "#FF4800", color: "#fff", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", padding: "0.4rem 1rem" }}>Featured Project</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>{p.category} · {p.year} · {p.location}</span>
          </motion.div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, color: "#fff", textTransform: "uppercase", marginBottom: "2rem" }}>
              {p.title}
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "3rem", maxWidth: "900px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: "520px", margin: 0 }}>{p.summary}</p>
            <div style={{ display: "flex", gap: "3rem", flexShrink: 0 }}>
              <div>
                <div style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "0.4rem" }}>Size</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff" }}>{p.size}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", paddingLeft: "1.5rem", borderLeft: "2px solid rgba(255,255,255,0.2)" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>View Project</span>
                <span style={{ color: "#FF4800", fontSize: "1.2rem" }}>→</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4, delay: 0.9 }} style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: "#FF4800" }} />
      </div>
    </AnimateIn>
  );
}

/* ─────────────────────────── Project card ─────────────────────────── */
function ProjectCard({ p, index, onClick }: { p: Project; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimateIn delay={index * 0.06} direction="up">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={onClick}
        style={{ position: "relative", overflow: "hidden", cursor: "pointer", background: "#0B061B" }}
      >
        <div style={{ position: "relative", height: p.span === "double" ? "520px" : "380px", overflow: "hidden" }}>
          <motion.div animate={{ scale: hovered ? 1.06 : 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ position: "absolute", inset: 0 }}>
            <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover", filter: hovered ? "grayscale(0%) brightness(0.75)" : "grayscale(35%) brightness(0.65) contrast(1.05)", transition: "filter 0.7s ease" }} />
          </motion.div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,6,27,0.95) 0%, rgba(11,6,27,0.2) 60%, transparent 100%)" }} />

          <motion.div animate={{ y: hovered ? 0 : -4, opacity: hovered ? 1 : 0.85 }} transition={{ duration: 0.3 }} style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
            <span style={{ background: "#FF4800", color: "#fff", fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.35rem 0.85rem" }}>{p.category}</span>
          </motion.div>
          <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", fontSize: "0.6rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em" }}>{p.year}</div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem 2rem 2.5rem" }}>
            <motion.div animate={{ y: hovered ? -6 : 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                {p.location} · {p.size}
              </div>
              <h3 style={{ fontSize: p.span === "double" ? "clamp(1.6rem, 3vw, 2.5rem)" : "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, color: "#fff", textTransform: "uppercase", margin: 0 }}>
                {p.title}
              </h3>
            </motion.div>
            <motion.div animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }} transition={{ duration: 0.35, delay: hovered ? 0.05 : 0 }} style={{ marginTop: "1rem" }}>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(255,255,255,0.65)", margin: "0 0 0.75rem", maxWidth: "480px" }}>{p.summary}</p>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#FF4800", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                View Project →
              </span>
            </motion.div>
          </div>
        </div>
        <motion.div animate={{ scaleX: hovered ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "#FF4800", transformOrigin: "left" }} />
      </motion.div>
    </AnimateIn>
  );
}

/* ─────────────────────────── Parallax Masonry Grid ─────────────────────────── */
function ParallaxGrid({ items, onOpen }: { items: Project[], onOpen: (p: Project, idx: number) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Create 3D parallax floating effects
  const col2Y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <div ref={containerRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "clamp(1.5rem, 3vw, 4rem)", alignItems: "flex-start", padding: "clamp(2rem, 5vw, 6rem) clamp(1rem, 4vw, 5rem)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {col1.map((p) => (
          <ProjectCard key={p.id} p={p} index={items.indexOf(p)} onClick={() => onOpen(p, items.indexOf(p))} />
        ))}
      </div>
      <motion.div style={{ display: "flex", flexDirection: "column", gap: "4rem", y: col2Y }}>
        {col2.map((p) => (
          <ProjectCard key={p.id} p={p} index={items.indexOf(p)} onClick={() => onOpen(p, items.indexOf(p))} />
        ))}
      </motion.div>
      <motion.div style={{ display: "flex", flexDirection: "column", gap: "4rem", y: col3Y }}>
        {col3.map((p) => (
          <ProjectCard key={p.id} p={p} index={items.indexOf(p)} onClick={() => onOpen(p, items.indexOf(p))} />
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */
export default function ProjectsUI() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [openIndex, setOpenIndex] = useState(0);

  const openModal = useCallback((p: Project, idx: number) => { setOpenProject(p); setOpenIndex(idx); }, []);
  const closeModal = useCallback(() => setOpenProject(null), []);

  const featured = PROJECTS.find((p) => p.featured)!;
  const filteredAll = PROJECTS.filter((p) => activeFilter === "All" || p.category === activeFilter);
  const filtered = filteredAll.filter((p) => !p.featured);

  return (
    <main className="bg-[#0B061B]">
      {/* Modal */}
      {openProject && <ProjectModal project={openProject} onClose={closeModal} projectIndex={openIndex} />}

      {/* Hero */}
      <section style={{ background: "#0B061B", borderBottom: "4px solid #0B061B", overflow: "hidden", padding: "clamp(5rem, 8vw, 8rem) clamp(1.5rem, 4vw, 5rem) clamp(3rem, 5vw, 5rem)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
            <span style={{ width: "32px", height: "2px", background: "#FF4800", display: "inline-block" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.3em", color: "#FF4800", textTransform: "uppercase" }}>Portfolio</span>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", alignItems: "flex-end" }}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.82, color: "#fff", textTransform: "uppercase", margin: 0 }}>
                Our<br /><span style={{ WebkitTextStroke: "2px #FF4800", color: "transparent" }}>Work</span>
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ maxWidth: "340px", paddingBottom: "0.75rem" }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.55)", margin: 0 }}>
                Every project we build is a statement — of precision, capability, and the standard we hold ourselves to.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 50%), 1fr))", background: "#fff", borderBottom: "4px solid #0B061B" }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ padding: "3rem 2rem", textAlign: "center", borderRight: i < 3 ? "4px solid #0B061B" : "none" }}>
            <div style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)", fontWeight: 900, color: i % 2 === 0 ? "#FF4800" : "#0B061B", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: "0.5rem" }}>
              <CountUp value={s.n} />
            </div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#999" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <MarqueeBanner />

      {/* Featured */}
      <FeaturedProject p={featured} onClick={() => openModal(featured, 0)} />

      {/* Filter bar */}
      <div style={{ borderBottom: "4px solid #0B061B", padding: "0 clamp(1rem, 3vw, 5rem)", background: "#fff", display: "flex", alignItems: "center", gap: 0, overflowX: "auto" }}>
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            whileHover={{ background: activeFilter === cat ? "#0B061B" : "#f7f4f7" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "1.25rem 2rem", border: "none",
              borderRight: "2px solid rgba(11,6,27,0.1)",
              background: activeFilter === cat ? "#0B061B" : "transparent",
              color: activeFilter === cat ? "#fff" : "#666",
              fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em",
              textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit",
              transition: "color 0.2s", whiteSpace: "nowrap",
              borderBottom: activeFilter === cat ? "3px solid #FF4800" : "3px solid transparent",
            }}
          >
            {cat}
          </motion.button>
        ))}
        <div style={{ marginLeft: "auto", padding: "1.25rem 2rem", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "#999", whiteSpace: "nowrap" }}>
          {filtered.length} Projects
        </div>
      </div>

      {/* 3D Parallax Masonry Grid */}
      <section style={{ background: "#0B061B", borderBottom: "4px solid white" }}>
        <ParallaxGrid items={filtered} onOpen={openModal} />
      </section>

      {/* Performance strip */}
      <AnimateIn>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", background: "#0B061B", borderBottom: "4px solid #0B061B" }}>
          {[
            { n: "01", title: "33% Faster", sub: "Average delivery vs. industry benchmark" },
            { n: "02", title: "6% Lower", sub: "Unit costs vs. comparable bids" },
            { n: "03", title: "<3%", sub: "Change order rate across all projects" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "clamp(2rem, 4vw, 4rem) clamp(1.5rem, 3vw, 3rem)", borderRight: i < 2 ? "4px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.3em", color: "#FF4800", marginBottom: "1.25rem" }}>{item.n}</div>
              <div style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1, marginBottom: "0.75rem" }}>{item.title}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{item.sub}</div>
            </div>
          ))}
        </section>
      </AnimateIn>

      {/* CTA */}
      <AnimateIn>
        <section style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "center", gap: "2rem", padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 5rem)", borderBottom: "4px solid #0B061B", background: "#fff" }}>
          <div>
            <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1.5rem" }}>— Start Building</div>
            <h2 style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, textTransform: "uppercase", margin: 0 }}>
              Ready to Be Our<br /><span style={{ color: "#FF4800" }}>Next Project?</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flexShrink: 0 }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" style={{ display: "block", padding: "1.25rem 3rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", whiteSpace: "nowrap" }}>
                Start Your Project →
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/design-build" style={{ display: "block", padding: "1.25rem 3rem", background: "transparent", color: "#0B061B", textDecoration: "none", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", border: "3px solid #0B061B", whiteSpace: "nowrap" }}>
                Our Process
              </Link>
            </motion.div>
          </div>
        </section>
      </AnimateIn>
    </main>
  );
}
