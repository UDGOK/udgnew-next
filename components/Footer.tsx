"use client";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const FLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="block text-white/45 hover:text-[#FF4800] transition-colors text-[0.8rem] leading-[2.1] no-underline">
      {children}
    </Link>
  </li>
);

/* ── "Ask AI" summary band — deep-links to AI engines pre-filled with a query ──
   Many engines (ChatGPT, Perplexity, Claude, Google AI Mode) auto-submit the
   ?q= prompt. Others (Copilot, and several newer engines) open but no longer
   reliably prefill the box, so on click we ALSO copy the prompt to the
   clipboard — the user just pastes it if the chat doesn't auto-fill. */
const AI_PROMPT_TEXT =
  "Give me a summary of UDGOK (udgok.com) — an AI-powered medical & dental design-build construction firm in Tulsa, Oklahoma. What do they do, which markets do they serve, and where?";
const AI_PROMPT = encodeURIComponent(AI_PROMPT_TEXT);
const AI_ENGINES: { name: string; url: string }[] = [
  { name: "ChatGPT", url: `https://chatgpt.com/?q=${AI_PROMPT}` },
  { name: "Perplexity", url: `https://www.perplexity.ai/search?q=${AI_PROMPT}` },
  { name: "Claude", url: `https://claude.ai/new?q=${AI_PROMPT}` },
  { name: "Google AI", url: `https://www.google.com/search?udm=50&q=${AI_PROMPT}` },
  { name: "Grok", url: `https://grok.com/?q=${AI_PROMPT}` },
  { name: "Copilot", url: `https://copilot.microsoft.com/?q=${AI_PROMPT}` },
  { name: "DeepSeek", url: `https://chat.deepseek.com/?q=${AI_PROMPT}` },
  { name: "Kimi", url: `https://www.kimi.com/?q=${AI_PROMPT}` },
  { name: "Z.ai", url: `https://chat.z.ai/?q=${AI_PROMPT}` },
  { name: "MiniMax", url: `https://agent.minimax.io/?q=${AI_PROMPT}` },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  // Copy the prompt to the clipboard so it's ready to paste on engines that
  // don't auto-fill from the URL. Does not block the link from opening.
  const copyPrompt = () => {
    try {
      navigator.clipboard?.writeText(AI_PROMPT_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard unavailable — the link still opens normally */
    }
  };

  return (
    <>
      {/* ── Pre-footer CTA ── */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF4800 0%, #e03e00 50%, #FF5A1A 100%)" }}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h3 className="text-white font-black text-[clamp(1.4rem,3vw,2.4rem)] uppercase tracking-[-0.03em] mb-2 leading-tight">
              Ready to Build in Oklahoma?
            </h3>
            <p className="text-white/80 text-[1.05rem] m-0">
              Let&apos;s discuss your medical, dental, or commercial construction project.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0B061B] text-white font-bold text-[0.8rem] tracking-[0.15em] uppercase no-underline rounded-full hover:bg-[#1a1228] transition-all duration-300 shadow-xl shadow-black/30 whitespace-nowrap"
          >
            Start Your Project
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <footer
        className="text-white pt-20 pb-0"
        style={{ background: "linear-gradient(180deg, #0B061B 0%, #030108 100%)" }}
        itemScope itemType="https://schema.org/WPFooter"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">

          {/* ── Top Row: Brand + Newsletter-style tagline ── */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-16 border-b border-white/[0.06]">
            {/* Brand */}
            <div className="lg:w-[320px] shrink-0">
              <Link href="/" className="flex items-center gap-2.5 no-underline mb-5">
                <span className="w-3 h-3 bg-[#FF4800] rotate-45 inline-block" />
                <span className="text-[1.4rem] font-black tracking-[-0.04em] text-white">UDGOK</span>
              </Link>
              <p className="text-white/40 text-[0.82rem] leading-[1.75] mb-6">
                Tulsa&apos;s trusted Design-Build partner for medical offices, dental clinics, surgery centers, restaurants, and commercial construction. Serving Oklahoma &amp; North Texas since 2015.
              </p>
              <div className="flex gap-3">
                <SocialLink href="https://www.linkedin.com/company/upscale-development-group" label="LinkedIn">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </SocialLink>
                <SocialLink href="https://www.facebook.com/udgok" label="Facebook">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </SocialLink>
                <SocialLink href="https://www.instagram.com/udgok" label="Instagram">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </SocialLink>
              </div>
            </div>

            {/* ── Link Columns ── */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8">

              {/* Healthcare */}
              <div>
                <h4 className="text-[0.6rem] font-black tracking-[0.25em] uppercase text-[#FF4800] mb-5">Healthcare</h4>
                <ul className="list-none p-0 m-0 space-y-0.5">
                  <FLink href="/medical-office-design-build-tulsa">Medical Office</FLink>
                  <FLink href="/dental-office-construction-tulsa">Dental Construction</FLink>
                  <FLink href="/dental-oral-surgery-construction-specialists">Oral Surgery</FLink>
                  <FLink href="/eye-clinic-construction-tulsa">Eye Clinics</FLink>
                  <FLink href="/ambulatory-surgery-center-construction">Surgery Centers</FLink>
                  <FLink href="/medical-gas-installation">Medical Gas</FLink>
                </ul>
              </div>

              {/* Commercial */}
              <div>
                <h4 className="text-[0.6rem] font-black tracking-[0.25em] uppercase text-[#FF4800] mb-5">Commercial</h4>
                <ul className="list-none p-0 m-0 space-y-0.5">
                  <FLink href="/design-build">Design-Build</FLink>
                  <FLink href="/tenant-improvements">Tenant Improvements</FLink>
                  <FLink href="/restaurant-construction-tulsa">Restaurant</FLink>
                  <FLink href="/retail-construction-tulsa">Retail</FLink>
                  <FLink href="/office-construction-tulsa">Office</FLink>
                  <FLink href="/sustainable-construction-tulsa">Green Building</FLink>
                  <FLink href="/adaptive-reuse-construction-tulsa">Adaptive Reuse</FLink>
                </ul>
              </div>

              {/* Industrial + Specialty */}
              <div>
                <h4 className="text-[0.6rem] font-black tracking-[0.25em] uppercase text-[#FF4800] mb-5">Industrial</h4>
                <ul className="list-none p-0 m-0 space-y-0.5">
                  <FLink href="/industrial-buildings-tulsa">Industrial Buildings</FLink>
                  <FLink href="/warehouse-construction-tulsa">Warehouses</FLink>
                  <FLink href="/pre-engineered-metal-buildings-tulsa">Metal Buildings</FLink>
                  <FLink href="/cold-storage-construction-tulsa">Cold Storage</FLink>
                  <FLink href="/manufacturing-facility-construction-tulsa">Manufacturing</FLink>
                  <FLink href="/self-storage-construction-tulsa">Self-Storage</FLink>
                </ul>
              </div>

              {/* Company + Service Areas */}
              <div>
                <h4 className="text-[0.6rem] font-black tracking-[0.25em] uppercase text-[#FF4800] mb-5">Company</h4>
                <ul className="list-none p-0 m-0 space-y-0.5">
                  <FLink href="/about">About Us</FLink>
                  <FLink href="/projects">Our Work</FLink>
                  <FLink href="/insights">Insights</FLink>
                  <FLink href="/resources">Resources</FLink>
                  <FLink href="/tools">Tools &amp; Calculators</FLink>
                  <FLink href="/subcontractors">Subcontractor Portal</FLink>
                  <FLink href="/contact">Contact</FLink>
                </ul>
                {/* Service Areas — compact */}
                <h4 className="text-[0.6rem] font-black tracking-[0.25em] uppercase text-[#FF4800] mt-8 mb-4">Serving</h4>
                <p className="text-white/35 text-[0.75rem] leading-[1.7] m-0">
                  Tulsa · Broken Arrow · Bixby · Jenks · Owasso · OKC · Dallas
                </p>
              </div>
            </div>
          </div>

          {/* ── Ask AI band ── */}
          <div className="py-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 border-b border-white/[0.06]">
            <div className="lg:w-[320px] shrink-0">
              <span className="inline-flex items-center gap-2 text-[0.6rem] font-black tracking-[0.25em] uppercase text-[#FF4800] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4800]" />
                Ask AI
              </span>
              <h4 className="text-white/90 font-bold text-[0.95rem] leading-snug m-0">
                Get an AI summary of UDGOK
              </h4>
              <p className="text-white/30 text-[0.72rem] leading-snug mt-1.5 m-0" aria-live="polite">
                {copied
                  ? "✓ Prompt copied — paste it if the chat doesn't auto-fill."
                  : "The prompt is copied to your clipboard on click — just paste if needed."}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {AI_ENGINES.map((e) => (
                <a
                  key={e.name}
                  href={e.url}
                  target="_blank"
                  rel="noopener nofollow"
                  onClick={copyPrompt}
                  className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/55 hover:text-white hover:border-[#FF4800] hover:bg-[#FF4800]/10 transition-all text-[0.78rem] font-medium no-underline"
                >
                  {e.name}
                  <svg className="w-3 h-3 text-white/30 group-hover:text-[#FF4800] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Contact Bar ── */}
          <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <a href="tel:+19185203823" className="flex items-center gap-2.5 text-white/50 hover:text-[#FF4800] transition-colors text-[0.82rem] no-underline">
                <svg className="w-4 h-4 text-[#FF4800]/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.27 12a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.163 1.12.414 2.225.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.585.286 1.69.537 2.81.7A2 2 0 0122 16.92z" /></svg>
                (918) 520-3823
              </a>
              <a href="mailto:projects@udgok.com" className="flex items-center gap-2.5 text-white/50 hover:text-[#FF4800] transition-colors text-[0.82rem] no-underline">
                <svg className="w-4 h-4 text-[#FF4800]/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                projects@udgok.com
              </a>
              <span className="flex items-center gap-2.5 text-white/35 text-[0.82rem]">
                <svg className="w-4 h-4 text-[#FF4800]/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                7739 E 38th St, Ste F, Tulsa, OK 74145
              </span>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
              Oklahoma Licensed Contractor
            </span>
          </div>

          {/* ── Footer Bottom ── */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-[0.72rem] m-0">
              © {year} Upscale Development Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[
                { href: "/privacy-policy", label: "Privacy" },
                { href: "/terms-of-service", label: "Terms" },
                { href: "/sitemap-page", label: "Sitemap" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-white/25 hover:text-white/50 transition-colors no-underline text-[0.72rem]">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* JSON-LD Schema — LocalBusiness */}
      <Script id="schema-local-business" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "name": "Upscale Development Group",
          "alternateName": "UDGOK",
          "url": "https://www.udgok.com",
          "logo": "https://www.udgok.com/images/logo.png",
          "description": "Tulsa-based AI-powered Design-Build construction firm specializing in medical offices, dental clinics, oral surgery centers, eye clinics, and commercial buildings across Oklahoma and North Texas.",
          "foundingDate": "2015",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 10,
            "maxValue": 50
          },
          "priceRange": "$$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7739 E 38th Street, Ste F",
            "addressLocality": "Tulsa",
            "addressRegion": "OK",
            "postalCode": "74145",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.1039,
            "longitude": -95.8903
          },
          "telephone": "+1-918-520-3823",
          "email": "projects@udgok.com",
          "openingHours": "Mo-Fr 07:00-18:00",
          "areaServed": [
            {"@type": "City", "name": "Tulsa", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Broken Arrow", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Bixby", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Jenks", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Owasso", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Sapulpa", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Haskell", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Sand Springs", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Oklahoma City", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Dallas", "containedInPlace": {"@type": "State", "name": "Texas"}},
            {"@type": "City", "name": "Plano", "containedInPlace": {"@type": "State", "name": "Texas"}}
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Construction Services",
            "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Medical Office Design-Build", "url": "https://www.udgok.com/medical-office-design-build-tulsa"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Dental Office Construction", "url": "https://www.udgok.com/dental-office-construction-tulsa"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Oral Surgery Center Construction", "url": "https://www.udgok.com/oral-surgeon-office-construction-tulsa"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Eye Clinic Construction", "url": "https://www.udgok.com/eye-clinic-construction-tulsa"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Medical Gas Installation", "url": "https://www.udgok.com/medical-gas-installation"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Commercial Tenant Improvements", "url": "https://www.udgok.com/tenant-improvements"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Virtual Design & Construction (VDC)", "url": "https://www.udgok.com/virtual-design-construction"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Preconstruction Services", "url": "https://www.udgok.com/preconstruction"}}
            ]
          },
          "sameAs": [
            "https://www.linkedin.com/company/upscale-development-group",
            "https://www.facebook.com/udgok",
            "https://www.instagram.com/udgok"
          ],
          "knowsAbout": [
            "Medical office construction",
            "Dental clinic design-build",
            "Healthcare facility construction",
            "Medical gas installation and certification",
            "Commercial construction management",
            "BIM and virtual design construction",
            "ADA compliance for healthcare facilities",
            "HVAC systems for medical environments",
            "Oral surgery center construction",
            "Eye clinic construction",
            "Convenience store construction",
            "Shopping center construction",
            "Preconstruction cost estimation",
            "General contractor Oklahoma",
            "Industrial construction Tulsa",
            "Warehouse construction Oklahoma",
            "Pre-engineered metal buildings",
            "Cold storage construction",
            "Manufacturing facility construction",
            "Concrete driveway installation Tulsa",
            "Asphalt repair and sealcoating",
            "Self-storage facility construction",
            "Agricultural building construction Oklahoma"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-918-520-3823",
              "contactType": "customer service",
              "email": "projects@udgok.com",
              "areaServed": ["US"],
              "availableLanguage": ["English"]
            }
          ]
        }
      `}</Script>

      {/* JSON-LD Schema — WebSite with SearchAction */}
      <Script id="schema-website" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "UDGOK — Upscale Development Group",
          "url": "https://www.udgok.com",
          "description": "AI-Powered Medical and Dental Design-Build Construction in Oklahoma and Texas.",
          "publisher": {
            "@type": "Organization",
            "name": "Upscale Development Group",
            "url": "https://www.udgok.com"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.udgok.com/resources?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", "h2", ".hero-subtitle", "[data-speakable]"]
          }
        }
      `}</Script>
    </>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: "36px", height: "36px", background: "rgba(255,255,255,0.1)",
        borderRadius: "50%", display: "flex", alignItems: "center",
        justifyContent: "center", color: "rgba(255,255,255,0.7)",
        textDecoration: "none", transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#FF4800";
        el.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.1)";
        el.style.color = "rgba(255,255,255,0.7)";
      }}
    >
      {children}
    </a>
  );
}
