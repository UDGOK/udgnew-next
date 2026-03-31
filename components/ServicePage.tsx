"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import MarqueeBanner from "@/components/MarqueeBanner";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";
import VideoShowcase from "@/components/VideoShowcase";
import MedicalCostCalculator from "@/components/MedicalCostCalculator";
import EstimateModal from "@/components/EstimateModal";

/* ── Card gradient palettes (one per card index) ── */
const CARD_GRADIENTS = [
  "linear-gradient(135deg, #1a0a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)",
  "linear-gradient(135deg, #0d1b2a 0%, #1b2838 40%, #2d4a3e 70%, #1a4a3a 100%)",
  "linear-gradient(135deg, #1a0000 0%, #2d1810 40%, #3d2418 70%, #4a2c1a 100%)",
  "linear-gradient(135deg, #0a1628 0%, #162447 40%, #1f4068 70%, #1b3a5c 100%)",
  "linear-gradient(135deg, #1a0a20 0%, #2d1b30 40%, #3d2040 70%, #4a1c4e 100%)",
  "linear-gradient(135deg, #0a1a1a 0%, #1b2d28 40%, #244038 70%, #1a3d30 100%)",
];

/* ── Feature Detail Modal ── */
function FeatureModal({ feature, index, onClose }: { feature: { icon: string; title: string; desc: string }; index: number; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient + icon */}
        <div className="relative h-48 md:h-56 flex items-center justify-center" style={{ background: CARD_GRADIENTS[index % 6] }}>
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 70%, rgba(255,72,0,0.25) 0%, transparent 60%)" }} />
          <div className="absolute inset-0" style={{ background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <span className="text-7xl md:text-8xl relative z-10 drop-shadow-2xl">{feature.icon}</span>
          {/* Close button */}
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all cursor-pointer z-20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          {/* Index badge */}
          <div className="absolute top-4 left-5 text-[0.55rem] font-black tracking-[0.3em] text-white/30">{String(index + 1).padStart(2, "0")}</div>
        </div>

        {/* Body */}
        <div className="bg-[#0d0820] p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-white mb-4 leading-tight">{feature.title}</h3>
          <div className="w-10 h-[2px] bg-gradient-to-r from-[#FF4800] to-transparent mb-6" />
          <p className="text-[0.92rem] text-white/60 leading-[1.8]">{feature.desc}</p>
          <div className="mt-8 pt-6 border-t border-white/8">
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF4800] text-white text-xs font-bold tracking-[0.15em] uppercase rounded-full hover:bg-[#FF5A1A] transition-colors shadow-lg shadow-[#FF4800]/20">
              Discuss This Service
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface Feature { icon: string; title: string; desc: string; }
interface FAQ { q: string; a: string; }
interface Testimonial { quote: string; author: string; role: string; location?: string; }
interface GalleryImage { src: string; alt: string; caption: string; }
interface PracticeOwnerBox { heading: string; bullets: string[]; }
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
  /** 2-3 sentence speakable TL;DR that an AI can quote verbatim */
  tldr?: string;
  /** Question-and-answer pairs rendered as an FAQ section with auto JSON-LD */
  faqs?: FAQ[];
  /** Deep-content sections with Q&A-style headings */
  sections?: { heading: string; body: string }[];
  /** Highly localized testimonial/case study injection for Helpful Content signals */
  testimonial?: Testimonial;
  /** Doctor/owner-centric callout box rendered after TL;DR */
  practiceOwnerBox?: PracticeOwnerBox;
  /** Gallery of clinic photos/floorplans rendered after practice owner box */
  galleryImages?: GalleryImage[];
  /** Secondary CTA button in the bottom CTA section */
  secondaryCta?: { text: string; href: string };
  /** Large portfolio showcase images (full-width cards below gallery) */
  portfolioImages?: { src: string; alt: string; caption: string; subcaption?: string }[];
  /** Video walkthrough source path(s) for embedded autoplay section */
  videoSrc?: string;
  /** Customize the video section heading (defaults: "Video Tour" / "Walk Through Our" / "Work") */
  videoLabel?: string;
  videoHeadingStart?: string;
  videoHeadingAccent?: string;
  /** Background video for the hero area (replaces static image when provided) */
  heroVideoSrc?: string;
  /** Optional interactive calculator type */
  calculatorType?: "dental" | "medical" | "asc";
}

export default function ServicePage({
  label, title, description, imageSrc, imageAlt, intro, features,
  cta = "Start Your Project →", stats, tldr, faqs, sections, testimonial,
  practiceOwnerBox, galleryImages, secondaryCta, portfolioImages, videoSrc,
  videoLabel, videoHeadingStart, videoHeadingAccent, heroVideoSrc,
  calculatorType,
}: ServicePageProps) {
  const containerRef = useRef(null);
  const ctaSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.3, 0]);

  const [showSticky, setShowSticky] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let ctaVisible = false;
    const onScroll = () => setShowSticky(window.scrollY > 500 && !ctaVisible);
    const observer = new IntersectionObserver(
      ([entry]) => { ctaVisible = entry.isIntersecting; onScroll(); },
      { threshold: 0.1 }
    );
    if (ctaSectionRef.current) observer.observe(ctaSectionRef.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <main className="bg-[#0B061B] min-h-screen text-white overflow-hidden pb-0">

      {/* FAQ JSON-LD (auto-generated when faqs prop provided) */}
      {faqs && faqs.length > 0 && (
        <Script id="schema-faq-auto" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim() },
            })),
          })}
        </Script>
      )}

      {/* 1. Epic Parallax Hero */}
      <section ref={containerRef} className="relative h-[85vh] w-full flex items-end justify-center overflow-hidden border-b border-white/10">
        <motion.div style={{ y: yParallax, opacity: opacityFade }} className="absolute inset-0 z-0 origin-top">
          {heroVideoSrc ? (
            <>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
              >
                <source src={heroVideoSrc} type="video/mp4" />
              </video>
              {/* Cinematic color grading overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-[#0B061B]/70 to-[#0B061B]/20" />
              <div className="absolute inset-0 bg-[#0B061B]/25 mix-blend-multiply" />
              {/* Subtle vignette for premium feel */}
              <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 150px 60px rgba(11,6,27,0.5)" }} />
              {/* Watermark mask — bottom-right gradient + brand badge */}
              <div
                className="absolute bottom-0 right-0 w-72 h-40 pointer-events-none z-[2]"
                style={{
                  background: "linear-gradient(to top left, rgba(11,6,27,0.98) 0%, rgba(11,6,27,0.85) 35%, rgba(11,6,27,0.4) 65%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-8 right-8 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 pointer-events-none z-[3] shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-[#FF4800] animate-pulse shadow-[0_0_10px_rgba(255,72,0,0.8)]" />
                <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/80">
                  UDGOK DESIGN
                </span>
              </div>
            </>
          ) : (
            <>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-[#0B061B]/60 to-[#0B061B]/30" />
              <div className="absolute inset-0 bg-[#0B061B]/20 mix-blend-multiply" />
            </>
          )}
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

      {/* ── TL;DR Speakable Summary ── */}
      {tldr && (
        <section className="border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
            <AnimateIn>
              <div
                data-speakable="true"
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10"
              >
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#FF4800] to-transparent" />
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4800] animate-pulse" />
                  <span className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#FF4800]">Quick Answer</span>
                </div>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                  {tldr}
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── Practice Owner Callout Box ── */}
      {practiceOwnerBox && (
        <section className="border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
            <AnimateIn>
              <div className="relative rounded-2xl overflow-hidden border border-[#FF4800]/20 bg-gradient-to-br from-[#FF4800]/[0.07] via-[#0B061B] to-[#0B061B]">
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#FF4800] via-orange-400 to-[#FF4800]/30" />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">🩺</span>
                    <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight text-white">
                      {practiceOwnerBox.heading}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {practiceOwnerBox.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.06] transition-colors">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF4800]/20 flex items-center justify-center mt-0.5">
                          <svg className="w-3.5 h-3.5 text-[#FF4800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span className="text-[0.92rem] text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: bullet }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── Clinic Photos & Floorplan Gallery ── */}
      {galleryImages && galleryImages.length > 0 && (
        <section className="border-b border-white/10 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <AnimateIn>
              <div className="flex items-center gap-4 mb-10">
                <span className="w-12 h-px bg-gradient-to-r from-[#FF4800] to-transparent" />
                <span className="text-[#FF4800] text-[0.65rem] font-black tracking-[0.3em] uppercase">Our Work</span>
              </div>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((img, i) => (
                <AnimateIn key={i} delay={i * 0.1} direction="up">
                  <div className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 shadow-xl shadow-black/40 hover:shadow-2xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-transparent to-transparent opacity-80" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[0.82rem] text-white/80 font-medium leading-snug">{img.caption}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Interactive Clinical Calculator ── */}
      {calculatorType && (
        <section className="border-b border-white/10 bg-[#05020B]/50">
          <MedicalCostCalculator defaultType={calculatorType} />
        </section>
      )}

      {/* ── Portfolio Showcase (Full-Width Cards) ── */}
      {portfolioImages && portfolioImages.length > 0 && (
        <section className="border-b border-white/10 py-16 md:py-24 bg-[#05020B]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <AnimateIn>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-px bg-gradient-to-r from-[#FF4800] to-transparent" />
                <span className="text-[#FF4800] text-[0.65rem] font-black tracking-[0.3em] uppercase">Portfolio</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12">
                Recent <span className="text-[#FF4800]">Projects</span>
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioImages.map((img, i) => (
                <AnimateIn key={i} delay={i * 0.12} direction="up">
                  <div className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.18] transition-all duration-500 shadow-xl shadow-black/40 hover:shadow-2xl bg-[#0B061B]">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-[#0B061B]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-lg md:text-xl font-extrabold text-white mb-1.5 tracking-tight">{img.caption}</h3>
                      {img.subcaption && (
                        <p className="text-[0.82rem] text-white/50 font-medium">{img.subcaption}</p>
                      )}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Video Walkthrough ── */}
      {videoSrc && (
        <section className="border-b border-white/10 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#05020B] via-[#0B061B] to-[#0B061B]" />
          <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
            <AnimateIn>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-px bg-gradient-to-r from-[#FF4800] to-transparent" />
                <span className="text-[#FF4800] text-[0.65rem] font-black tracking-[0.3em] uppercase">{videoLabel || "Video Tour"}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-10">
                {videoHeadingStart || "Walk Through Our"}{" "}
                <span className="text-[#FF4800]">{videoHeadingAccent || "Work"}</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <VideoShowcase src={videoSrc} hideWatermark />
            </AnimateIn>
          </div>
        </section>
      )}

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
              <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-xl [&_a]:text-[#FF4800] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-white [&_a]:transition-colors" dangerouslySetInnerHTML={{ __html: intro }} />

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

      {/* 3. Features — Image-Topped Cards with Modal */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 relative">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,72,0,0.05) 0%, transparent 70%)", filter: "blur(100px)" }} />

        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-px bg-gradient-to-r from-[#FF4800] to-transparent" />
                <span className="text-[#FF4800] text-[0.65rem] font-black tracking-[0.3em] uppercase">Capabilities</span>
              </div>
              <h2 className="text-[clamp(3rem,5vw,5rem)] font-black uppercase tracking-tighter leading-[0.9]">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4800] to-orange-300">Deliver</span>
              </h2>
            </div>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {features.map((f, i) => (
            <AnimateIn key={i} delay={i * 0.07} direction="up">
              <motion.div
                className="relative h-full cursor-pointer group"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={() => setActiveFeature(i)}
              >
                {/* Card */}
                <div className="relative rounded-2xl overflow-hidden h-full bg-gradient-to-b from-[#0d0820] to-[#0a0618] border border-white/[0.08] group-hover:border-white/[0.15] transition-all duration-500 shadow-xl shadow-black/40 group-hover:shadow-2xl group-hover:shadow-[#FF4800]/10">

                  {/* Visual header area */}
                  <div className="relative h-40 md:h-44 overflow-hidden" style={{ background: CARD_GRADIENTS[i % 6] }}>
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 70%, rgba(255,72,0,0.3) 0%, transparent 60%)" }} />
                    <div className="absolute inset-0" style={{ background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-5xl md:text-6xl drop-shadow-2xl"
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {f.icon}
                      </motion.span>
                    </div>
                    {/* Index badge */}
                    <div className="absolute top-3.5 left-4 text-[0.55rem] font-black tracking-[0.3em] text-white/25">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Bottom fade into card body */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d0820] to-transparent" />
                  </div>

                  {/* Content area */}
                  <div className="p-6 md:p-7 pt-3 md:pt-4">
                    <h3 className="text-[0.92rem] font-extrabold uppercase tracking-[0.03em] text-white/90 group-hover:text-white transition-colors duration-300 leading-snug mb-2.5">
                      {f.title}
                    </h3>
                    <p className="text-[0.78rem] text-white/40 leading-[1.65] line-clamp-2 group-hover:text-white/55 transition-colors duration-300 mb-5">
                      {f.desc}
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[0.6rem] font-bold tracking-[0.1em] uppercase text-white/30">
                        <span className="w-1 h-1 rounded-full bg-[#FF4800]/60" />
                        {label}
                      </span>
                      <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#FF4800]/70 group-hover:text-[#FF4800] transition-colors duration-300 flex items-center gap-1.5">
                        View Details
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        {/* Feature Detail Modal */}
        <AnimatePresence>
          {activeFeature !== null && (
            <FeatureModal
              feature={features[activeFeature]}
              index={activeFeature}
              onClose={() => setActiveFeature(null)}
            />
          )}
        </AnimatePresence>
      </section>

      {/* ── Localized Testimonial Block (HCU Signal) ── */}
      {testimonial && (
        <section className="py-24 md:py-32 border-b border-white/10 relative overflow-hidden bg-[#05020B]">
          {/* Ambient quote glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(255,72,0,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />
          
          <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
            <AnimateIn>
              <div className="text-[clamp(6rem,12vw,15rem)] font-black text-[#FF4800] leading-none opacity-20 absolute -top-8 md:-top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none">
                "
              </div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-10 leading-[1.3] max-w-4xl mx-auto relative z-10 drop-shadow-xl">
                {testimonial.quote}
              </p>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="w-8 h-1 bg-[#FF4800] mb-4" />
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white">
                  {testimonial.author}
                </span>
                <span className="text-[0.7rem] md:text-xs font-bold uppercase tracking-[0.1em] text-white/50">
                  {testimonial.role}{testimonial.location ? ` • ${testimonial.location}` : ""}
                </span>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── Deep Content Sections (Q&A-style headings) ── */}
      {sections && sections.length > 0 && (
        <section className="py-28 md:py-36 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <AnimateIn>
              <div className="flex items-center gap-4 mb-20">
                <span className="w-12 h-px bg-gradient-to-r from-[#FF4800] to-transparent" />
                <span className="text-[#FF4800] text-[0.65rem] font-black tracking-[0.3em] uppercase">In-Depth Guide</span>
              </div>
            </AnimateIn>
            {sections.map((s, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className={`${i > 0 ? "mt-20 md:mt-28 pt-16 md:pt-20 border-t border-white/[0.06]" : ""} ${i === sections.length - 1 ? "" : "mb-0"}`}>
                  {/* Section number */}
                  {i > 0 && (
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-[0.55rem] font-black tracking-[0.3em] text-[#FF4800]/30 uppercase">Section {String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 h-px bg-gradient-to-r from-[#FF4800]/10 to-transparent" />
                    </div>
                  )}
                  {i === 0 && (
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-[0.55rem] font-black tracking-[0.3em] text-[#FF4800]/30 uppercase">Section 01</span>
                      <span className="flex-1 h-px bg-gradient-to-r from-[#FF4800]/10 to-transparent" />
                    </div>
                  )}
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-white leading-snug border-l-[3px] border-[#FF4800]/40 pl-5">
                    {s.heading}
                  </h2>
                  <div
                    className="text-white/55 text-base md:text-[1.05rem] leading-[1.85] space-y-5 [&>p]:mb-1 [&>ul]:list-disc [&>ul]:pl-7 [&>ul]:space-y-3 [&>ul]:mt-4 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-7 [&>ol]:space-y-3 [&>ol]:mt-4 [&>ol]:mb-4 [&_li]:leading-[1.75] [&_strong]:text-white/80 [&_strong]:font-bold [&>table]:w-full [&>table]:border-collapse [&>table]:mt-5 [&>table]:mb-5 [&>table]:rounded-xl [&>table]:overflow-hidden [&>table]:border [&>table]:border-white/10 [&_th]:bg-[#FF4800]/15 [&_th]:text-left [&_th]:px-5 [&_th]:py-3.5 [&_th]:text-[0.7rem] [&_th]:font-black [&_th]:uppercase [&_th]:tracking-[0.15em] [&_th]:text-[#FF4800]/80 [&_td]:px-5 [&_td]:py-3.5 [&_td]:border-t [&_td]:border-white/[0.06] [&_td]:text-white/55 [&_td]:text-[0.9rem]"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>
      )}

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
                  <span className="text-[#FF4800] text-7xl font-black tracking-tighter opacity-10 absolute -top-8 -left-2 user-select-none">0{i + 1}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 relative">{step.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-xl relative">{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      {faqs && faqs.length > 0 && (
        <section className="py-24 px-6 md:px-12 border-b border-white/10 bg-[#0B061B]">
          <div className="max-w-4xl mx-auto">
            <AnimateIn>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-[#FF4800]" />
                <span className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase">Common Questions</span>
              </div>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-black uppercase tracking-tighter leading-[0.9] mb-16">
                Frequently <span className="text-[#FF4800]">Asked</span>
              </h2>
            </AnimateIn>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <AnimateIn key={i} delay={i * 0.05}>
                  <FAQItem q={faq.q} a={faq.a} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Topical Authority Cross-Link ── */}
      <section className="border-b border-white/10 py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="flex items-center gap-4 p-6 border border-white/10 bg-white/[0.02] rounded-xl">
              <div className="w-1 h-12 bg-[#FF4800] rounded-full flex-shrink-0" />
              <div>
                <p className="text-sm text-white/50 leading-relaxed">
                  UDGOK is a leading{" "}
                  <Link href="/construction-companies-tulsa" className="text-[#FF4800] hover:underline font-semibold">
                    construction company in Tulsa, Oklahoma
                  </Link>
                  {" "}— delivering commercial, medical, dental, industrial, and retail projects across the Tulsa metro. Explore our{" "}
                  <Link href="/construction-companies-tulsa" className="text-[#FF4800] hover:underline font-semibold">
                    complete guide to construction in Tulsa
                  </Link>
                  {" "}for costs, timelines, and building types.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 5. Cyber-Physical CTA */}
      <section ref={ctaSectionRef} className="bg-white text-[#0B061B] py-32 px-6 md:px-12 text-center rounded-t-[3rem] -mt-10 relative z-20">
        <AnimateIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Start Your <br /> <span className="text-[#FF4800]">Project</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
              We provide accurate feasibility analysis and cost modeling before you sign a lease. Contact our project directors today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#FF4800] text-white font-bold text-sm tracking-[0.2em] uppercase hover:bg-orange-600 transition-colors rounded-full shadow-2xl hover:shadow-[#FF4800]/40 group"
              >
                {cta}
                <span className="ml-4 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#0B061B] text-white font-bold text-sm tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors rounded-full shadow-2xl border border-white/10 hover:border-white/20">
                  {secondaryCta.text}
                </Link>
              )}
              <Link href="tel:+19185203823" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#0B061B] text-white font-bold text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors rounded-full shadow-2xl">
                Call (918) 520-3823
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>


      {/* ── Sticky CTA Bar ── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none"
          >
            <div className="max-w-3xl mx-auto bg-[#0B061B]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between gap-4 shadow-2xl shadow-black/40 pointer-events-auto">
              <div className="hidden sm:block">
                <p className="text-white text-sm font-bold">Ready to Build?</p>
                <p className="text-white/50 text-xs">Get a 48-hour conceptual estimate</p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="tel:+19185203823"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-white text-xs font-bold tracking-wider uppercase hover:bg-white/20 transition-colors"
                >
                  📞 (918) 520-3823
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FF4800] rounded-xl text-white text-xs font-bold tracking-wider uppercase hover:bg-[#FF4800]/80 transition-colors shadow-lg shadow-[#FF4800]/30"
                >
                  Get Estimate →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <EstimateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        data={{
          type: calculatorType || "medical",
          rooms: 5, // Default for non-calculator entries
          lowEnd: 250000,
          highEnd: 450000,
          roiGap: 150000,
        }}
      />
    </main>
  );
}

/* ── FAQ Accordion Item ── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer"
      >
        <span className="text-base md:text-lg font-semibold text-white/90 pr-8 leading-snug">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#FF4800] text-2xl font-bold flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div
          className="px-8 pb-6 text-white/60 text-base leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2.5 [&_li]:leading-[1.7] [&_strong]:text-white/80 [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: a }}
        />
      </motion.div>
    </div>
  );
}
