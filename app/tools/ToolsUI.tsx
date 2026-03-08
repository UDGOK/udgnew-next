"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimateIn from "@/components/AnimateIn";

const calculators = [
  { title: "Concrete Calculator", desc: "Calculate cubic yards of concrete needed for slabs, footings, and walls.", image: "/images/concrete-calculator.png", href: "/tools/concrete" },
  { title: "Drywall Calculator", desc: "Estimate sheets of drywall needed for walls and ceilings by room dimensions.", image: "/images/drywall-calculator.png", href: "/tools/drywall" },
  { title: "Brick Calculator", desc: "Calculate the number of bricks required for walls, facades, and paving.", image: "/images/brick-calculator.png", href: "/tools/brick" },
  { title: "Flooring Calculator", desc: "Estimate square footage and materials needed for tile, hardwood, or LVP flooring.", image: "/images/flooring-calculator.png", href: "/tools/flooring" },
  { title: "Paint Calculator", desc: "Calculate gallons of paint needed for walls, ceilings, and trim by room.", image: "/images/paint-calculator.png", href: "/tools/paint" },
  { title: "Roofing Calculator", desc: "Estimate roofing squares and materials needed for shingles or metal roofing.", image: "/images/roofing-calculator.png", href: "/tools/roofing" },
];

export default function ToolsUI() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main className="bg-[#0B061B] min-h-screen text-white overflow-hidden pb-32" ref={containerRef}>
      
      {/* Dynamic Header */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 border-b border-white/10 overflow-hidden min-h-[50vh] flex flex-col justify-end">
        <motion.div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ y: yParallax, backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <AnimateIn>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[#FF4800]" />
              <span className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase">Free Resources</span>
            </div>
            <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
              Construction<br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF4800] to-orange-400">Calculators</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl leading-relaxed text-white/70 border-l-2 border-[#FF4800] pl-6">
              Estimate materials for your project before you call a contractor. Use our suite of proprietary tools to budget concrete, framing, and finishes.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Grid Dashboard */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc, i) => (
            <AnimateIn key={i} delay={i * 0.1} direction="up">
              <Link href={calc.href} className="block group h-full relative outline-none focus-visible:ring-2 ring-[#FF4800] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-full aspect-video overflow-hidden">
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
                    <Image src={calc.image} alt={calc.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] to-transparent opacity-80" />
                  </motion.div>
                </div>
                <div className="p-8 relative z-10 -mt-10 bg-gradient-to-t from-[#0B061B] via-[#0B061B] to-transparent">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[#FF4800] transition-colors">{calc.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{calc.desc}</p>
                  <div className="flex items-center text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform">
                    Open Tool <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="mt-32 max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn>
          <div className="bg-gradient-to-r from-[#FF4800] to-orange-600 rounded-3xl p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/ai_subcontractor_network.png')] bg-cover mix-blend-overlay" />
            <div className="relative z-10 w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">Need a Real Estimate?</h2>
              <p className="text-white/90 text-lg font-medium">Calculators are great for rough planning. Contact UDGOK for a detailed, market-accurate preconstruction budget.</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto flex-shrink-0">
              <Link href="/contact" className="inline-flex w-full lg:w-auto cursor-pointer items-center justify-center rounded-full bg-[#0B061B] hover:bg-black px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors shadow-2xl">
                Get Free Consultation →
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>

    </main>
  );
}
