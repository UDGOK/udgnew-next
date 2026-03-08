"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimateIn from "@/components/AnimateIn";

const healthcare = [
  { code: "01", title: "Medical Office Construction", desc: "Fully compliant medical offices with specialized MEP, HIPAA-compliant layouts, and healthcare-grade finishes.", href: "/medical-office-design-build-tulsa" },
  { code: "02", title: "Dental Office Construction", desc: "Purpose-built dental suites with operatory rough-in, plumbing, and equipment coordination.", href: "/dental-office-construction-tulsa" },
  { code: "03", title: "Oral Surgery Centers", desc: "AAAHC-ready surgical suites with medical gas, surgical HVAC, and recovery room design.", href: "/oral-surgeon-office-construction-tulsa" },
  { code: "04", title: "Eye Clinic Construction", desc: "Ophthalmology and optometry offices with dark rooms, laser suites, and precision lane layout.", href: "/eye-clinic-construction-tulsa" },
  { code: "05", title: "Medical Gas Installation", desc: "NFPA 99 certified oxygen, nitrous oxide, vacuum, and medical air systems with third-party verification.", href: "/medical-gas-installation" },
];

const commercial = [
  { code: "06", title: "Design-Build", desc: "Integrated design and construction under one contract — faster delivery, fewer surprises, single accountability.", href: "/design-build" },
  { code: "07", title: "Tenant Improvements", desc: "Fast-track commercial build-outs for medical, dental, retail, and office spaces.", href: "/tenant-improvements" },
  { code: "08", title: "Convenience Stores", desc: "Ground-up c-stores, fuel canopies, food service kitchens, and DEP-compliant fuel systems.", href: "/convenience-store-construction-tulsa" },
  { code: "09", title: "Shopping Centers", desc: "Multi-tenant retail centers and strip plazas built for long-term leasing performance.", href: "/shopping-center-construction-tulsa" },
  { code: "10", title: "Preconstruction", desc: "Early budgeting, constructability review, and value engineering before a shovel hits the ground.", href: "/preconstruction" },
  { code: "11", title: "Virtual Design & Construction", desc: "BIM modeling, clash detection, and digital twin technology for complex projects.", href: "/virtual-design-construction" },
];

export default function ServicesUI() {
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
              <span className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase">What We Build</span>
            </div>
            <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
              All<br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF4800] to-orange-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl leading-relaxed text-white/70 border-l-2 border-[#FF4800] pl-6">
              From single-operatory dental suites to multi-physician medical campuses — UDGOK delivers specialized construction across every healthcare and commercial sector.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-32">
        <AnimateIn>
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[#FF4800] text-sm font-black tracking-[0.2em] uppercase">Healthcare</span>
            <div className="h-px bg-white/20 flex-grow" />
          </div>
        </AnimateIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthcare.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.1} direction="up">
              <Link href={s.href} className="block group h-full p-10 outline-none focus-visible:ring-2 ring-[#FF4800] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all">
                <div className="text-[#FF4800] text-sm font-black tracking-[0.2em] mb-4">{s.code}</div>
                <div className="w-10 h-1 bg-[#FF4800] mb-8 group-hover:w-16 transition-all duration-300" />
                <h3 className="text-2xl font-black uppercase tracking-tight leading-tight mb-4 group-hover:text-[#FF4800] transition-colors">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">{s.desc}</p>
                <div className="flex items-center text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform">
                  Explore <span className="ml-2">→</span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Commercial Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-32">
        <AnimateIn>
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[#FF4800] text-sm font-black tracking-[0.2em] uppercase">Commercial</span>
            <div className="h-px bg-white/20 flex-grow" />
          </div>
        </AnimateIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercial.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.1} direction="up">
              <Link href={s.href} className="block group h-full p-10 outline-none focus-visible:ring-2 ring-[#FF4800] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all">
                <div className="text-[#FF4800] text-sm font-black tracking-[0.2em] mb-4">{s.code}</div>
                <div className="w-10 h-1 bg-[#FF4800] mb-8 group-hover:w-16 transition-all duration-300" />
                <h3 className="text-2xl font-black uppercase tracking-tight leading-tight mb-4 group-hover:text-[#FF4800] transition-colors">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">{s.desc}</p>
                <div className="flex items-center text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform">
                  Explore <span className="ml-2">→</span>
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
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">Not Sure Where to Start?</h2>
              <p className="text-white/90 text-lg font-medium">Tell us about your project and we&apos;ll match you with the right preconstruction service and team.</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto flex-shrink-0">
              <Link href="/contact" className="inline-flex w-full lg:w-auto cursor-pointer items-center justify-center rounded-full bg-[#0B061B] hover:bg-black px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors shadow-2xl">
                Start Your Project →
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>

    </main>
  );
}
