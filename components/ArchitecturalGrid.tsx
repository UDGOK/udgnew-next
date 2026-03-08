"use client";
import { motion } from "framer-motion";

export default function ArchitecturalGrid() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0, opacity: 0.15 }}>
      {/* Dynamic Grid Lines */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "0px 40px", "40px 40px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: "-50px",
          backgroundImage: `
            linear-gradient(to right, #0B061B 1px, transparent 1px),
            linear-gradient(to bottom, #0B061B 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
      />

      {/* Roving Spotlight Effect */}
      <motion.div
        animate={{
          x: ["-20%", "120%", "-20%"],
          y: ["-20%", "50%", "-20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(255,72,0,0.4) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          mixBlendMode: "multiply",
        }}
      />
      
      {/* Floating Plus Marks (Architectural nodes) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
             y: [0, -20, 0],
             opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
             duration: 4 + i,
             repeat: Infinity,
             ease: "easeInOut",
             delay: i * 0.5
          }}
          style={{
            position: "absolute",
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FF4800",
            fontWeight: 300,
            fontSize: "1.5rem"
          }}
        >
          +
        </motion.div>
      ))}
    </div>
  );
}
