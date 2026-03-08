"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  dark?: boolean;
  bgImage?: string;
}

export default function PageHero({ label, title, description, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section style={{ position: "relative", minHeight: "72vh", display: "grid", gridTemplateColumns: imageSrc ? "1fr 1fr" : "1fr", borderBottom: "4px solid #0B061B", overflow: "hidden", background: "#0B061B" }}>
      {/* Left */}
      <div style={{ padding: "9rem 4rem 5rem", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", color: "#FF4800", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ width: "24px", height: "2px", background: "#FF4800", display: "inline-block" }} />
            {label}
          </span>
        </motion.div>
        <div style={{ overflow: "hidden", marginBottom: "2rem" }}>
          <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, color: "#fff", textTransform: "uppercase" }}>
            {title}
          </motion.h1>
        </div>
        {description && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }} style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(255,255,255,0.6)", maxWidth: "460px" }}>
            {description}
          </motion.p>
        )}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }} style={{ position: "absolute", bottom: 0, left: 0, height: "4px", width: "40%", background: "#FF4800", transformOrigin: "left" }} />
      </div>

      {/* Right — image */}
      {imageSrc && (
        <div style={{ position: "relative", overflow: "hidden", borderLeft: "4px solid rgba(255,255,255,0.1)" }}>
          <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} style={{ position: "absolute", inset: 0 }}>
            <Image src={imageSrc} alt={imageAlt || ""} fill style={{ objectFit: "cover", filter: "grayscale(20%) contrast(1.08) brightness(0.8)" }} />
          </motion.div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,72,0,0.2) 0%, rgba(11,6,27,0.5) 70%)" }} />
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }} style={{ position: "absolute", top: 0, right: 0, width: "64px", height: "64px", background: "#FF4800" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
      )}
    </section>
  );
}
