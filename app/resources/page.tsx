"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MarqueeBanner from "@/components/MarqueeBanner";

const articles = [
  {
    category: "Healthcare Technology",
    title: "AI & Robotic Surgery in 2026: How Autonomous Systems Are Redefining Care",
    desc: "AI-enabled robotic surgery delivers autonomous procedures and intercontinental telesurgery — demanding radical healthcare infrastructure upgrades.",
    href: "/ai-robotic-surgery-2026",
    img: "/images/robotic-surgery-hero.png",
    date: "MAR 2026",
    readTime: "12 MIN READ"
  },
  {
    category: "Construction Technology",
    title: "Digital Twin Technology in Construction: 2026 Guide",
    desc: "A complete guide to how AI, IoT, and 3D virtual replicas are transforming commercial construction, energy, and smart cities.",
    href: "/digital-twin-technology",
    img: "/images/digital-twin-industries.jpg",
    date: "MAR 2026",
    readTime: "10 MIN READ"
  },
  {
    category: "Market Data",
    title: "The Developer's Guide to Medical Office Construction",
    desc: "A complete guide to planning, budgeting, and delivering a medical office building from site selection to certificate of occupancy.",
    href: "/guide-developers",
    img: "/images/ai-medical-exterior.png",
    date: "MAR 2026",
    readTime: "8 MIN READ"
  },
  {
    category: "Commercial Real Estate",
    title: "The Commercial Broker's Construction Guide",
    desc: "Everything a commercial real estate broker needs to know about tenant improvement construction to better serve their clients.",
    href: "/guide-commercial-brokers",
    img: "/images/ai-construction-mep.png",
    date: "FEB 2026",
    readTime: "6 MIN READ"
  },
  {
    category: "Construction Technology",
    title: "AI & Robotics in Construction Estimating",
    desc: "How UDGOK is deploying AI estimating, robotic layout, drone photogrammetry, and BIM to deliver better project outcomes.",
    href: "/ai-robotics",
    img: "/images/tools-hero.png",
    date: "JAN 2026",
    readTime: "12 MIN READ"
  },
  {
    category: "Medical Delivery",
    title: "Virtual Design & Construction (VDC)",
    desc: "BIM modeling, MEP clash detection, and digital twin technology that reduces RFIs and accelerates project delivery.",
    href: "/virtual-design-construction",
    img: "/images/ai_subcontractor_network.png",
    date: "DEC 2025",
    readTime: "10 MIN READ"
  },
  {
    category: "Resources",
    title: "Suite of Construction Cost Calculators",
    desc: "Estimate materials for your project with our suite of construction calculators: concrete, drywall, brick, flooring, paint, and roofing.",
    href: "/tools",
    img: "/images/dental-office-oklahoma-city.png",
    date: "ALWAYS UPDATED",
    readTime: "INTERACTIVE"
  },
  {
    category: "Market Analytics",
    title: "Subcontractor Availability Data OK/TX",
    desc: "Current construction cost benchmarks, subcontractor availability data, and healthcare real estate trends for Developers.",
    href: "/market-intelligence",
    img: "/images/IMG_7609.jpeg",
    date: "LIVE DATA",
    readTime: "DASHBOARD"
  }
];

export default function ResourcesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="bg-[#0B061B] min-h-screen text-white overflow-hidden" ref={containerRef}>

      {/* Cinematic Parallax Hero */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <Image
            src="/images/ai-knowledge-hub.png"
            alt="UDGOK Knowledge Hub Library"
            fill
            className="object-cover"
            priority
          />
          {/* Dual gradient for perfect text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B061B]/60 via-transparent to-[#0B061B]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-[#0B061B]/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-2 px-4 border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] text-[#FF4800] uppercase backdrop-blur-md bg-white/5 mb-6">
              Knowledge Hub
            </span>
            <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-black tracking-tighter leading-[0.85] uppercase mb-6 mix-blend-screen text-white drop-shadow-2xl">
              Build <br /><span className="text-[#FF4800]">Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Proprietary market data, expert development guides, and algorithmic estimating tools from Oklahoma's premier design-build firm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article Break */}
      <section className="relative z-20 -mt-20 px-4 md:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center"
        >
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase">Featured Intel</span>
              <span className="w-12 h-px bg-white/20" />
              <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Special Report</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white mb-6">
              The 2026 Dental Construction <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4800] to-orange-300">Cost Analysis</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              An exhaustive breakdown of per-square-foot costs for high-end dental clinics, including medical gas lines, specialized HVAC infrastructure, and lead-lined x-ray rooms. Available now for practicing specialists.
            </p>
            <Link href="/dental-construction-costs" className="inline-flex items-center gap-4 group">
              <span className="text-sm font-bold tracking-[0.1em] uppercase text-white group-hover:text-[#FF4800] transition-colors">Read Full Report</span>
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FF4800] group-hover:border-[#FF4800] transition-all">
                →
              </span>
            </Link>
          </div>
          <div className="lg:w-1/2 w-full order-1 lg:order-2 h-[400px] lg:h-[600px] relative rounded-2xl overflow-hidden group">
            <Image
              src="/images/ai-dental-interior.png"
              alt="Dental Office interior"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B061B]/80 to-transparent mix-blend-multiply" />
          </div>
        </motion.div>
      </section>

      <MarqueeBanner />

      {/* Editorial Grid */}
      <section className="py-32 px-4 md:px-12 bg-[#05020B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end border-b border-white/10 pb-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Latest <span className="text-[#FF4800]">Release</span></h2>
            <Link href="#" className="hidden md:flex text-xs font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors">View All Archive →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <Link href={article.href} className="block relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-[#0B061B]/10 group-hover:bg-transparent transition-colors duration-500" />
                </Link>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#FF4800] text-[0.65rem] font-bold tracking-[0.2em] uppercase">{article.category}</span>
                  <span className="text-white/40 text-[0.65rem] font-bold tracking-[0.2em] uppercase">{article.readTime}</span>
                </div>

                <Link href={article.href} className="block group">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight mb-3 group-hover:text-[#FF4800] transition-colors">{article.title}</h3>
                </Link>

                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-white/30 text-[0.65rem] font-bold tracking-[0.2em] uppercase">{article.date}</span>
                  <Link href={article.href} className="text-white text-[0.65rem] font-bold tracking-[0.2em] uppercase flex items-center gap-2 group-hover:text-[#FF4800] transition-colors">
                    Access <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
