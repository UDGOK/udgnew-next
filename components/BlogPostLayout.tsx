"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface TOCItem {
  id: string;
  label: string;
}

interface BlogPostLayoutProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  heroImage: string;
  toc?: TOCItem[];
  children: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  description,
  category,
  date,
  readTime,
  heroImage,
  toc,
  children
}: BlogPostLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Progress Bar Registration
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero Parallax
  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.4], [1, 0]);

  // JSON-LD Structured Data for High-SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `https://udgok.com${heroImage}`,
    "datePublished": date,
    "author": {
      "@type": "Organization",
      "name": "UDGOK Construction",
      "url": "https://udgok.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UDGOK Construction",
      "logo": {
        "@type": "ImageObject",
        "url": "https://udgok.com/images/udgok-logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      {/* Dynamic Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF4800] origin-left z-[10001]"
        style={{ scaleX }}
      />

      <article className="bg-white min-h-screen text-[#0B061B]" ref={containerRef}>
        {/* Parallax Article Hero */}
        <section className="relative h-[70vh] w-full flex items-end pb-16 justify-center overflow-hidden bg-[#0B061B]">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <Image 
              src={heroImage} 
              alt={title} 
              fill 
              className="object-cover opacity-60 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-[#0B061B]/20 to-[#0B061B]/40" />
          </motion.div>

          <div className="relative z-10 px-6 max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block py-1 px-3 border border-[#FF4800]/50 rounded-full text-xs font-bold tracking-[0.2em] text-[#FF4800] uppercase bg-[#FF4800]/10">
                  {category}
                </span>
                <span className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase">{readTime}</span>
              </div>
              <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tight leading-[1] text-white mb-6 max-w-4xl drop-shadow-lg">
                {title}
              </h1>
              <div className="flex items-center gap-4 text-white/50 text-sm font-semibold uppercase tracking-widest">
                <span>By UDGOK Intelligence</span>
                <span>•</span>
                <span>{date}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Body with Sticky TOC */}
        <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 relative">
          
          {/* Main Content */}
          <div className="w-full lg:w-[70%] text-lg leading-relaxed text-gray-800">
            {description && (
              <p className="text-2xl font-medium text-gray-500 mb-12 leading-snug border-l-4 border-[#FF4800] pl-6">
                {description}
              </p>
            )}
            
            <div className="blog-content prose-lg max-w-none">
              {children}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-[30%]">
            <div className="sticky top-32">
              {toc && toc.length > 0 && (
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8">
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">Table of Contents</h3>
                  <ul className="space-y-4">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`} 
                          className="text-gray-600 font-medium hover:text-[#FF4800] transition-colors flex items-center gap-3 group"
                        >
                          <span className="w-0 h-px bg-[#FF4800] transition-all duration-300 group-hover:w-4"></span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-[#0B061B] text-white p-8 rounded-2xl relative overflow-hidden group border border-white/10">
                <div className="absolute inset-0 bg-[#FF4800]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Start Your Project</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">Connect with our design-build team to discuss your medical or commercial construction needs.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#FF4800] font-bold text-sm tracking-[0.1em] uppercase group-hover:gap-4 transition-all">
                  Contact Us →
                </Link>
              </div>
            </div>
          </aside>

        </section>
      </article>

      {/* Global Class additions for prose styling without the plugin */}
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h2 { font-size: 2.25rem; font-weight: 900; letter-spacing: -0.02em; margin-top: 3rem; margin-bottom: 1.5rem; text-transform: uppercase; color: #000; }
        .blog-content h3 { font-size: 1.5rem; font-weight: 800; margin-top: 2rem; margin-bottom: 1rem; color: #333; }
        .blog-content p { margin-bottom: 1.5rem; color: #4a5568; line-height: 1.8; }
        .blog-content ul { padding-left: 1.5rem; margin-bottom: 1.5rem; list-style-type: disc; color: #4a5568; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content blockquote { border-left: 4px solid #FF4800; padding-left: 1.5rem; font-style: italic; color: #2d3748; margin: 2rem 0; font-size: 1.25rem; }
      `}} />
    </>
  );
}
