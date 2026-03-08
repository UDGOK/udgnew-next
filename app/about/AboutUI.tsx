"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MarqueeBanner from "@/components/MarqueeBanner";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";

const stats = [
  { number: "10+", label: "Years in Business", orange: false },
  { number: "150+", label: "Projects Completed", orange: true },
  { number: "3M+", label: "Sq Ft Developed", orange: false },
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
  { year: "2026", title: "AI-Powered Operations", desc: "Deployed AI scheduling, cost modeling, and design optimization for all project types." },
];

export default function AboutUI() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <main className="bg-[#0B061B] min-h-screen text-white overflow-hidden">
      
      {/* Standard Parallax Hero */}
      <section ref={containerRef} className="relative h-[85vh] w-full flex flex-col justify-end pb-32 border-b border-white/10">
        <motion.div 
          className="absolute inset-0 z-0 origin-top"
          style={{ y: yParallax }}
        >
          <Image 
            src="/images/ai-about-narrative.png" 
            alt="Massive construction scale" 
            fill 
            className="object-cover scale-105"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-[#0B061B]/60 to-[#0B061B]/30 z-0" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12">
          <AnimateIn>
            <h1 className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter leading-[0.85] uppercase mb-8 drop-shadow-2xl max-w-4xl">
              A Different Kind of <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF4800] to-orange-400">Construction Company</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl leading-relaxed text-white/80 border-l-2 border-[#FF4800] pl-6">
              We started UDGOK because we saw a gap in the market. Healthcare providers needed a construction partner who truly understood their world. We engineer highly technical medical environments with zero compromise.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Values Grid - Dark Glassmorphism */}
      <section className="relative z-20 py-32 px-6 md:px-12 bg-[#0B061B] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="flex items-center gap-4 mb-16">
              <span className="w-12 h-px bg-[#FF4800]" />
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FF4800]">Core Values</h3>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {values.map((v, i) => (
              <AnimateIn key={v.num} delay={i * 0.1}>
                <div className="bg-[#0B061B] p-12 md:p-16 h-full flex flex-col items-start group hover:bg-white/5 transition-colors">
                  <span className="text-[#FF4800] text-sm font-bold tracking-[0.2em] mb-6">{v.num}</span>
                  <h4 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform">{v.title}</h4>
                  <p className="text-white/60 text-lg leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="bg-[#FF4800] text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className={`p-16 text-center border-b lg:border-b-0 border-white/20 ${i % 2 === 0 ? 'border-r' : 'lg:border-r border-white/20'}`}>
                <div className="text-[clamp(3.5rem,6vw,5rem)] font-black tracking-tighter mb-2 leading-none drop-shadow-md">
                  <CountUp value={s.number} />
                </div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-80">{s.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <MarqueeBanner />

      {/* Timeline Section */}
      <section className="py-32 px-6 md:px-12 bg-[#0B061B]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-20">
          <AnimateIn direction="right">
            <div className="sticky top-40">
              <h2 className="text-[clamp(3rem,5vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] mb-6">Our <br/><span className="text-[#FF4800]">Timeline</span></h2>
              <p className="text-white/60 text-lg leading-relaxed">
                From a small Tulsa startup to the leading specialized healthcare construction firm. A decade of growth built entirely on clinical precision and client trust.
              </p>
            </div>
          </AnimateIn>

          <div className="relative border-l border-white/10 pl-10 md:pl-16">
            {timeline.map((item, i) => (
              <AnimateIn key={i} delay={i * 0.1} direction="left">
                <div className="mb-20 relative group">
                  <div className="absolute -left-[45px] md:-left-[69px] top-2 w-4 h-4 rounded-full border-2 border-[#0B061B] bg-white group-hover:bg-[#FF4800] group-hover:scale-150 transition-all duration-300" />
                  <span className="text-[#FF4800] text-2xl font-black tracking-tighter block mb-2">{item.year}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Leadership Grid */}
      <section className="py-32 px-6 md:px-12 bg-[#05020B] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.9] mb-16 text-center">
              The <span className="text-[#FF4800]">Leadership</span>
            </h2>
          </AnimateIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "David Young", role: "Founder & CEO", img: "/images/edyoung-1.jpg" },
              { name: "Operations Team", role: "Project Management", img: "/images/IMG_7602.jpeg" },
              { name: "Field Crew", role: "Construction Specialists", img: "/images/IMG_7607.jpeg" },
            ].map((m, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-white/5 aspect-[3/4]">
                  <Image 
                    src={m.img} 
                    alt={m.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{m.role}</div>
                    <div className="text-2xl font-black uppercase tracking-tight transform group-hover:-translate-y-2 transition-transform duration-300">{m.name}</div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white text-[#0B061B] py-32 px-6 md:px-12 text-center">
        <AnimateIn>
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Ready to <span className="text-[#FF4800]">Build</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Whether you're opening your first practice or expanding an established one, UDGOK brings the expertise and integrity your project deserves.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-[#0B061B] text-white font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#FF4800] transition-colors rounded-full shadow-2xl hover:shadow-[#FF4800]/50">
            Start Your Project
          </Link>
        </AnimateIn>
      </section>

    </main>
  );
}
