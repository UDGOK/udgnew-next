import type { Metadata } from "next";
import Script from "next/script";
import DentalFinancingGuideUI from "./DentalFinancingGuideUI";

export const metadata: Metadata = {
  title:
    "Financing Your Tulsa Dental Practice: Remodel vs. Rebuild & 2026 Tax Strategies | UDGOK",
  description:
    "Weighing a remodel vs. rebuild for your Tulsa dental practice? Learn 2026 financing options, tax strategies, and ROI tips to fund your dream clinic.",
  keywords: [
    "dental practice financing Tulsa",
    "remodel vs rebuild dental clinic Tulsa",
    "dental practice loans Tulsa",
    "Section 179 dental equipment 2026",
    "best dental practice lenders 2026",
    "how much does it cost to remodel a dental office Tulsa",
    "dental clinic renovation financing options",
    "dental office remodel cost Oklahoma",
    "SBA 504 dental practice loan",
    "dental equipment financing 2026",
    "dental construction tax deductions",
    "cost segregation dental office",
  ],
  openGraph: {
    title:
      "Financing Your Tulsa Dental Practice: Remodel vs. Rebuild & 2026 Tax Strategies",
    description:
      "2026 financing options, remodel vs. rebuild comparison, Section 179 tax strategies, and SEO protection tips for Oklahoma dentists.",
    url: "https://udgok.com/guide-dental-practice-financing-tulsa",
    type: "article",
    images: [
      {
        url: "https://udgok.com/images/dental-financing-guide-hero.png",
        width: 1200,
        height: 630,
        alt: "Dental practice financing guide — remodel vs rebuild comparison",
      },
    ],
  },
  alternates: {
    canonical: "https://udgok.com/guide-dental-practice-financing-tulsa",
  },
};

/* ── JSON-LD: Article Schema ── */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Financing Your Tulsa Dental Practice: Remodel vs. Rebuild & 2026 Tax Strategies",
  description:
    "A comprehensive guide to dental practice financing options, remodel vs. rebuild analysis, 2026 tax strategies, and local SEO protection during renovation for Tulsa, Oklahoma dentists.",
  image: "https://udgok.com/images/dental-financing-guide-hero.png",
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
  author: {
    "@type": "Organization",
    name: "UDGOK — Upscale Development Group",
    url: "https://udgok.com",
  },
  publisher: {
    "@type": "Organization",
    name: "UDGOK — Upscale Development Group",
    url: "https://udgok.com",
    logo: {
      "@type": "ImageObject",
      url: "https://udgok.com/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://udgok.com/guide-dental-practice-financing-tulsa",
  },
};

/* ── JSON-LD: FAQ Schema ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I remodel or rebuild my Tulsa dental practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your goals, budget, and current facility condition. Remodeling costs $150K–$400K and takes 2–4 months, ideal for practices with strong locations and sound infrastructure. Rebuilding costs $750K–$2M+ and takes 6–12 months, but offers complete customization and builds long-term real estate equity.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best loans for dental practices in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The top options are: (1) Traditional bank loans for established practices with strong credit at Prime + 1–3%, (2) SBA 504 loans for real estate purchases with only 10% down payment at 6.5–8%, and (3) Healthcare finance companies for equipment-heavy projects with minimal down payment requirements at 7.5–11%.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Section 179 deduction help dentists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 179 allows you to deduct the full purchase price of qualifying dental equipment and software in the year of purchase, rather than depreciating over multiple years. In 2026, the limit is approximately $1.22 million — potentially saving you $100,000+ in taxes.",
      },
    },
    {
      "@type": "Question",
      name: "How do I protect my SEO while my Tulsa dental office is under renovation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Update your Google Business Profile to 'Temporarily Closed' (never permanently closed), maintain NAP consistency across all listings, post regular renovation updates with progress photos, and communicate reopening dates clearly to patients and search engines.",
      },
    },
  ],
};

/* ── JSON-LD: LocalBusiness Schema ── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "UDGOK — Upscale Development Group",
  description:
    "Oklahoma's most trusted dental and medical construction contractor. Expert in dental office remodels, full build-outs, and healthcare facility construction across the Tulsa metro.",
  url: "https://udgok.com",
  telephone: "+19185203823",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Tulsa" },
    { "@type": "City", name: "Broken Arrow" },
    { "@type": "City", name: "Bixby" },
    { "@type": "City", name: "Jenks" },
    { "@type": "City", name: "Owasso" },
    { "@type": "State", name: "Oklahoma" },
  ],
  knowsAbout: [
    "Dental office remodel",
    "Dental office construction",
    "Dental practice financing",
    "Healthcare design-build",
    "Cost segregation studies",
    "Section 179 dental equipment",
  ],
};

export default function DentalFinancingGuidePage() {
  return (
    <>
      <Script id="schema-article-financing" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <Script id="schema-faq-financing" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-business-financing" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <DentalFinancingGuideUI />
    </>
  );
}
