import type { Metadata } from "next";
import Script from "next/script";
import DentalConstructionGuideUI from "./DentalConstructionGuideUI";

export const metadata: Metadata = {
    title:
        "The Ultimate 2026 Guide to Dental Office Construction in Tulsa | UDGOK",
    description:
        "Planning a dental clinic in Tulsa? Discover 2026 costs, timelines, and expert tips to successfully build your dream practice. Get a quote today!",
    keywords: [
        "dental office construction Tulsa",
        "dental office build-out costs Tulsa",
        "Tulsa dental contractors",
        "how to build a dental clinic in Tulsa",
        "dental construction costs 2026",
        "dental office design Tulsa OK",
        "dental clinic construction timeline",
        "dental office MEP systems",
        "dental operatory construction",
        "dental office construction cost per square foot",
        "dental office design-build Tulsa",
        "dental clinic build-out Oklahoma",
    ],
    openGraph: {
        title: "The Ultimate 2026 Guide to Dental Office Construction in Tulsa",
        description:
            "2026 costs, timelines, expert design insights, and local SEO tips to build your dream dental practice in Tulsa, Oklahoma.",
        url: "https://udgok.com/guide-dental-office-construction-tulsa",
        type: "article",
        images: [
            {
                url: "https://udgok.com/images/dental-construction-guide-hero.png",
                width: 1200,
                height: 630,
                alt: "Dental office construction guide — modern operatory under construction",
            },
        ],
    },
    alternates: {
        canonical: "https://udgok.com/guide-dental-office-construction-tulsa",
    },
};

/* ── JSON-LD: Article Schema ── */
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
        "The Ultimate 2026 Guide to Dental Office Construction in Tulsa",
    description:
        "A comprehensive guide to dental office construction costs, timelines, expert design insights, and local SEO tips for building a dental practice in Tulsa, Oklahoma.",
    image: "https://udgok.com/images/dental-construction-guide-hero.png",
    datePublished: "2026-03-12",
    dateModified: "2026-03-12",
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
        "@id": "https://udgok.com/guide-dental-office-construction-tulsa",
    },
};

/* ── JSON-LD: FAQ Schema ── */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much time does it take to build a dental office in Tulsa?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A full dental office construction project in Tulsa takes 6 to 12 months from initial planning through move-in. This breaks down to 1–3 months of initial planning, 1–2 months of pre-construction, 4–8 months of active construction, and 1–2 months for finishing touches, inspections, and equipment calibration.",
            },
        },
        {
            "@type": "Question",
            name: "What is the average size of a modern dental office?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A modern dental office typically ranges from 1,800 to 3,500 square feet. A standard 3-chair general dentistry practice starts around 1,800 sq ft, while a larger multi-specialty or high-volume practice with surgery suites, CBCT imaging, and sterilization centers can exceed 3,500+ sq ft.",
            },
        },
        {
            "@type": "Question",
            name: "How much does it cost to build a dental office in the U.S. in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Dental office construction in 2026 costs between $300 and $500+ per square foot, which includes both construction and specialized equipment. Building out an empty shell can start around $200 per square foot. A standard 1,800-square-foot, 3-chair clinic averages approximately $591,000 total.",
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
        "Tulsa's most trusted dental and medical construction contractor. 100+ healthcare facilities delivered across the Tulsa metro and Oklahoma.",
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
        "Dental office construction",
        "Dental operatory build-out",
        "Medical gas installation",
        "Healthcare design-build",
        "Dental office MEP systems",
        "ADA-compliant dental office design",
    ],
};

export default function DentalConstructionGuidePage() {
    return (
        <>
            <Script id="schema-article" type="application/ld+json">
                {JSON.stringify(articleSchema)}
            </Script>
            <Script id="schema-faq" type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="schema-business" type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </Script>
            <DentalConstructionGuideUI />
        </>
    );
}
