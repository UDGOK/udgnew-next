import type { Metadata } from "next";
import ConstructionCompaniesTulsaUI from "./ConstructionCompaniesTulsaUI";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Construction Companies in Tulsa OK | Commercial, Medical & Industrial | UDGOK",
    description: "Top-rated construction company in Tulsa, Oklahoma. UDGOK builds commercial, medical, dental, industrial, and retail projects. 100+ projects, 2M+ SF delivered. Free estimates within 48 hours. Design-build, GMP pricing, AI-powered estimating.",
    keywords: [
        "construction companies in tulsa",
        "construction companies in tulsa ok",
        "construction company tulsa",
        "construction company tulsa ok",
        "tulsa construction companies",
        "tulsa construction company",
        "commercial construction tulsa",
        "construction companies tulsa oklahoma",
        "best construction company tulsa",
        "top construction companies tulsa ok",
        "general contractor tulsa ok",
        "tulsa general contractor",
        "commercial contractor tulsa oklahoma",
        "design build tulsa ok",
        "medical construction tulsa",
        "industrial construction tulsa ok",
        "construction company near me tulsa",
        "commercial builders tulsa",
        "building contractor tulsa",
        "construction firms tulsa oklahoma",
    ],
    openGraph: {
        title: "Construction Companies in Tulsa OK — The Complete 2026 Guide",
        description: "Everything about construction in Tulsa: costs per square foot, building types, neighborhoods, permits, timelines. 100+ projects delivered by UDGOK.",
        url: "https://udgok.com/construction-companies-tulsa",
        type: "website",
    },
    alternates: { canonical: "https://udgok.com/construction-companies-tulsa" },
};

/* ── FAQ JSON-LD (16 Q&As for rich snippets) ── */
function PillarFaqJsonLd() {
    const faqs = [
        { q: "What are the top construction companies in Tulsa, Oklahoma?", a: "Tulsa's top construction companies include UDGOK (Upscale Development Group of Oklahoma — specializing in medical, commercial, and industrial construction), Manhattan Construction Group, Crossland Construction, Flintco, and Ross Group. For commercial and medical construction specifically, UDGOK has delivered 100+ projects across the Tulsa metro." },
        { q: "How much does commercial construction cost in Tulsa?", a: "Commercial construction costs in Tulsa range from $80–$350 per square foot depending on building type. Retail build-outs cost $80–$180/sf. Office build-outs cost $60–$150/sf. Medical offices cost $180–$350/sf. Restaurants cost $150–$350/sf. Pre-engineered metal warehouses cost $25–$50/sf for turnkey shell." },
        { q: "How long does it take to build a commercial building in Tulsa?", a: "A 2,000 SF retail build-out takes 8–12 weeks. A 5,000 SF medical office takes 4–6 months. A 20,000 SF commercial building takes 6–10 months. A 50,000 SF warehouse takes 5–8 months with pre-engineered metal. UDGOK compresses schedules by 20–30% through design-build delivery." },
        { q: "What permits are required for commercial construction in Tulsa?", a: "Commercial construction in Tulsa requires: building permit from City of Tulsa DBCA, zoning compliance verification, fire marshal plan review, mechanical/plumbing/electrical permits, stormwater management plan if grading more than 1 acre, ADA compliance review, and Certificate of Occupancy inspection." },
        { q: "Does UDGOK work in areas outside Tulsa?", a: "Yes. UDGOK serves the entire Tulsa metropolitan area including Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, and Haskell. We also build in Oklahoma City and the Dallas-Fort Worth metro in Texas." },
        { q: "What is design-build construction?", a: "Design-build is a project delivery method where one company handles both design and construction under a single contract. This eliminates the adversarial relationship between architect and contractor, compresses schedules by overlapping phases, and provides budget certainty through Guaranteed Maximum Price (GMP) contracts." },
        { q: "How do I choose a construction company in Tulsa?", a: "Consider: relevant project experience, financial stability and bonding capacity, Oklahoma contractor license, project management tools and communication, warranty terms, and direct references from past clients." },
        { q: "What makes UDGOK different from other Tulsa construction companies?", a: "UDGOK differentiates through AI-powered estimating, specialization in medical/dental construction with 100+ healthcare projects, robotic total stations, drone photogrammetry, transparent open-book GMP pricing, and a PMP-certified project manager on every project." },
        { q: "How much does it cost to build a medical office in Tulsa?", a: "Medical office construction in Tulsa costs $180–$350 per square foot. A typical 3,000 SF medical office costs $540K–$1.05M including architectural design, MEP engineering, medical gas, specialized HVAC, and all City of Tulsa permitting." },
        { q: "Does UDGOK provide free estimates?", a: "Yes. UDGOK provides free conceptual estimates for commercial, medical, and industrial construction projects. Our AI-powered estimating system delivers conceptual budgets within 48 hours for most project types." },
        { q: "What wind load requirements apply to buildings in Tulsa?", a: "Tulsa falls within a 90 mph basic wind speed zone per IBC 2021 (3-second gust). Exposure category varies by site. UDGOK engineers all structures to meet or exceed IBC 2021 requirements for Oklahoma's wind and tornado risk profile." },
        { q: "Can UDGOK handle both new construction and renovations?", a: "Yes. UDGOK builds new ground-up commercial, medical, and industrial buildings as well as interior renovations, tenant improvements, structural retrofits, MEP upgrades, and ADA compliance renovations." },
        { q: "What areas of Tulsa does UDGOK build in?", a: "UDGOK builds across the entire Tulsa metro: Downtown, Midtown, Cherry Street, Brookside, South Tulsa, East Tulsa, West Tulsa, North Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, Haskell, and Catoosa." },
        { q: "How does UDGOK use AI in construction?", a: "UDGOK deploys AI in cost estimating, generative design, predictive scheduling, and quality control. See our full AI transparency disclosure at udgok.com/transparency." },
        { q: "What is a Guaranteed Maximum Price (GMP) contract?", a: "A GMP contract sets a ceiling price the contractor cannot exceed. If costs come in below the GMP, savings are shared with the owner. If costs exceed the GMP, the contractor absorbs the overage." },
        { q: "Is UDGOK licensed and insured?", a: "Yes. UDGOK maintains a current Oklahoma commercial contractor license, general liability insurance, workers' compensation coverage, and surety bonding capacity." },
    ];

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map(f => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            })
        }} />
    );
}

/* ── LocalBusiness JSON-LD ── */
function LocalBusinessJsonLd() {
    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "GeneralContractor",
                name: "UDGOK — Upscale Development Group of Oklahoma",
                alternateName: "UDGOK",
                url: "https://udgok.com",
                logo: "https://udgok.com/logo.png",
                image: "https://udgok.com/og-image.png",
                description: "Top-rated construction company in Tulsa, Oklahoma. UDGOK builds commercial, medical, dental, industrial, and retail projects. 100+ projects delivered. Design-build, GMP pricing, AI-powered estimating.",
                telephone: "+1-918-000-0000",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Tulsa",
                    addressRegion: "OK",
                    postalCode: "74133",
                    addressCountry: "US",
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: 36.0544,
                    longitude: -95.8024,
                },
                areaServed: [
                    { "@type": "City", name: "Tulsa, Oklahoma" },
                    { "@type": "City", name: "Broken Arrow, Oklahoma" },
                    { "@type": "City", name: "Bixby, Oklahoma" },
                    { "@type": "City", name: "Jenks, Oklahoma" },
                    { "@type": "City", name: "Owasso, Oklahoma" },
                    { "@type": "City", name: "Sand Springs, Oklahoma" },
                    { "@type": "City", name: "Oklahoma City, Oklahoma" },
                    { "@type": "City", name: "Dallas, Texas" },
                ],
                openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "07:00",
                    closes: "17:00",
                },
                priceRange: "$$$",
                sameAs: [],
                knowsAbout: [
                    "Commercial Construction",
                    "Medical Office Construction",
                    "Dental Office Construction",
                    "Industrial Construction",
                    "Pre-Engineered Metal Buildings",
                    "Design-Build Construction",
                    "Tenant Improvements",
                    "Construction Management",
                ],
            })
        }} />
    );
}

export default function ConstructionCompaniesTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Construction Companies in Tulsa OK"
                description="Top-rated construction company in Tulsa, Oklahoma. Commercial, medical, dental, industrial, and retail construction. 100+ projects delivered. Design-build, GMP pricing, AI-powered estimating."
                url="https://udgok.com/construction-companies-tulsa"
            />
            <PillarFaqJsonLd />
            <LocalBusinessJsonLd />
            <ConstructionCompaniesTulsaUI />
        </>
    );
}
