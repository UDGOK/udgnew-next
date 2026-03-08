"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.3, 0]);

  return (
    <main className="bg-[#0B061B] min-h-screen text-white overflow-hidden pb-0">
      
      {/* 1. Epic Parallax Hero */}
      <section ref={containerRef} className="relative h-[85vh] w-full flex items-end justify-center overflow-hidden border-b border-white/10">
        <motion.div style={{ y: yParallax, opacity: opacityFade }} className="absolute inset-0 z-0 origin-top">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-[#0B061B]/60 to-[#0B061B]/30" />
          <div className="absolute inset-0 bg-[#0B061B]/20 mix-blend-multiply" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 pb-24 md:pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[#FF4800]" />
              <span className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase">{label}</span>
            </div>
            <h1 className="text-[clamp(3.5rem,7vw,7.5rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8 max-w-5xl drop-shadow-2xl">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed border-l-2 border-[#FF4800] pl-6 font-medium">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* 2. Blueprint Engineering Grid */}
      <section className="relative py-32 border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl border-x border-white/5 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <AnimateIn direction="right">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
                Precision <span className="text-[#FF4800]">Execution</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-xl">
                {intro}
              </p>
              
              <Link href="/contact" className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#FF4800] hover:bg-[#FF4800]/80 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white transition-colors shadow-2xl shadow-[#FF4800]/20">
                Discuss Your Project →
              </Link>
            </AnimateIn>

            {stats && (
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
                {stats.map((s, i) => (
                  <AnimateIn key={i} delay={i * 0.1}>
                    <div className="bg-[#0B061B]/80 p-10 backdrop-blur-md h-full text-center hover:bg-white/5 transition-colors group">
                      <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-black text-[#FF4800] tracking-tighter mb-2 group-hover:scale-110 transition-transform origin-bottom">
                        <CountUp value={s.n} />
                      </div>
                      <div className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/50">{s.l}</div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* 3. Features Dashboard */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-[#FF4800]" />
                <span className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase">Capabilities</span>
              </div>
              <h2 className="text-[clamp(3rem,5vw,5rem)] font-black uppercase tracking-tighter leading-[0.9]">
                What We <span className="text-[#FF4800]">Deliver</span>
              </h2>
            </div>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimateIn key={i} delay={i * 0.05} direction="up">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 h-full group hover:bg-white/10 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4800]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
                <motion.div 
                  className="text-4xl mb-8 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {f.icon}
                </motion.div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 relative z-10">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">{f.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 4. Process Timeline */}
      <section className="py-32 bg-[#05020B] px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
          
          <div className="lg:w-1/3">
            <AnimateIn direction="right">
              <div className="sticky top-40">
                <h2 className="text-[clamp(3.5rem,5vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  The <br /><span className="text-[#FF4800]">Process</span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed border-l border-[#FF4800]/50 pl-6">
                  Our proprietary construction methodology eliminates surprises, protects your budget, and accelerates your opening date.
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="lg:w-2/3 border-l border-white/10 pl-10 md:pl-16 relative">
            {[
              { title: "Discovery & Analysis", desc: "We comprehensively assess your clinical program, target real estate, zoning conditions, and specific regulatory requirements." },
              { title: "Design & Engineering", desc: "Our teams coordinate full construction documents with integrated real-time cost tracking to prevent ballooning budgets." },
              { title: "Construction Execution", desc: "Self-performed mechanical systems and rigorous site management ensure total quality control and adherence to schedule." },
              { title: "Commissioning & Turnover", desc: "We validate all medical systems, manage inspections, and fully orient your administrative staff to the new facility." },
            ].map((step, i) => (
              <AnimateIn key={i} delay={i * 0.15} direction="left">
                <div className="mb-20 relative group">
                  <div className="absolute -left-[45px] md:-left-[69px] top-2 w-4 h-4 rounded-full border-2 border-[#05020B] bg-[#FF4800] ring-4 ring-[#FF4800]/20 group-hover:ring-[#FF4800]/50 group-hover:scale-125 transition-all duration-300" />
                  <span className="text-[#FF4800] text-7xl font-black tracking-tighter opacity-10 absolute -top-8 -left-2 user-select-none">0{i+1}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 relative">{step.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-xl relative">{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Cyber-Physical CTA */}
      <section className="bg-white text-[#0B061B] py-32 px-6 md:px-12 text-center rounded-t-[3rem] -mt-10 relative z-20">
        <AnimateIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Start Your <br/> <span className="text-[#FF4800]">Project</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
              We provide accurate feasibility analysis and cost modeling before you sign a lease. Contact our project directors today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#FF4800] text-white font-bold text-sm tracking-[0.2em] uppercase hover:bg-orange-600 transition-colors rounded-full shadow-2xl hover:shadow-[#FF4800]/40 group">
                {cta}
                <span className="ml-4 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="tel:+19185203823" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#0B061B] text-white font-bold text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors rounded-full shadow-2xl">
                Call (918) 520-3823
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>

    </main>
  );
}
