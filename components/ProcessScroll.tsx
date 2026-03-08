"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const process = [
  { n: "01", t: "Discovery", d: "We analyze your program requirements, site conditions, and goals to create a comprehensive project roadmap." },
  { n: "02", t: "Design", d: "Our architects and engineers collaborate to develop detailed plans with accurate cost estimates and timelines." },
  { n: "03", t: "Construction", d: "Our expert crews execute with precision, providing weekly updates and maintaining the highest quality standards." },
  { n: "04", t: "Commissioning", d: "Complete system walk-throughs covering MEP, medical gas, IT infrastructure, and final inspection sign-offs." }
];

export default function ProcessScroll() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  return (
    <section ref={containerRef} style={{ padding: "8rem 2rem", background: "#0B061B", color: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [`${activeStep * 10}%`, `${activeStep * 20}%`],
          opacity: [0.2, 0.4]
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(255,72,0,0.15) 0%, rgba(11,6,27,0) 60%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(60px)"
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "6rem" }}
        >
          <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.25em", color: "#FF4800", textTransform: "uppercase", marginBottom: "1.5rem", display: "inline-block" }}>
            Our Approach
          </span>
          <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
            Design-Build Excellence
          </h2>
        </motion.div>

        {/* Interactive Layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
           {process.map((step, i) => {
             const isActive = activeStep === i;

             return (
               <motion.div
                 key={i}
                 onHoverStart={() => setActiveStep(i)}
                 onClick={() => setActiveStep(i)}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: i * 0.1 }}
                 style={{
                   padding: "3rem 4rem",
                   background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                   border: isActive ? "1px solid rgba(255, 72, 0, 0.3)" : "1px solid rgba(255,255,255,0.05)",
                   borderRadius: "24px",
                   cursor: "pointer",
                   display: "grid",
                   gridTemplateColumns: "100px 1fr",
                   gap: "3rem",
                   alignItems: "center",
                   transition: "all 0.4s ease",
                   backdropFilter: isActive ? "blur(12px)" : "none",
                 }}
               >
                 {/* Number */}
                 <div style={{
                   fontSize: "clamp(4rem, 6vw, 6rem)",
                   fontWeight: 900,
                   color: isActive ? "#FF4800" : "rgba(255,255,255,0.1)",
                   lineHeight: 0.8,
                   transition: "color 0.4s ease"
                 }}>
                   {step.n}
                 </div>

                 {/* Content */}
                 <div>
                   <h3 style={{
                     fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                     fontWeight: 800,
                     textTransform: "uppercase",
                     letterSpacing: "-0.02em",
                     color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                     marginBottom: isActive ? "1rem" : "0",
                     transition: "color 0.4s ease, margin 0.4s ease"
                   }}>
                     {step.t}
                   </h3>

                   {/* Expandable Description */}
                   <motion.div
                     initial={false}
                     animate={{
                       height: isActive ? "auto" : 0,
                       opacity: isActive ? 1 : 0
                     }}
                     style={{ overflow: "hidden" }}
                     transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                   >
                     <p style={{
                       fontSize: "1.125rem",
                       lineHeight: 1.6,
                       color: "rgba(255,255,255,0.7)",
                       maxWidth: "800px",
                       margin: 0,
                       paddingTop: "0.5rem"
                     }}>
                       {step.d}
                     </p>
                   </motion.div>
                 </div>
               </motion.div>
             );
           })}
        </div>
      </div>
    </section>
  );
}
