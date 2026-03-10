import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Build to Suit Tulsa OK | Custom Commercial Development | UDGOK",
    description: "Build to suit construction and custom commercial development in Tulsa, Oklahoma. UDGOK delivers build-to-suit projects for medical, retail, office, and industrial tenants. Developers and landlords trust UDGOK.",
    keywords: [
        "build to suit Tulsa",
        "build to suit Tulsa OK",
        "developers Tulsa OK",
        "build to suit construction Tulsa",
        "custom build Tulsa Oklahoma",
        "commercial development Tulsa",
        "build to suit developer Tulsa",
        "ground-up commercial Tulsa",
        "build to suit contractor Oklahoma",
        "tenant build to suit Tulsa",
        "commercial real estate developer Tulsa",
        "build to suit medical office Tulsa",
    ],
    openGraph: {
        title: "Build to Suit Tulsa OK | Custom Development | UDGOK",
        description: "Custom build-to-suit development for medical, retail, office, and industrial tenants in Tulsa, Oklahoma.",
        url: "https://udgok.com/build-to-suit-tulsa",
        type: "website",
    },
    alternates: { canonical: "https://udgok.com/build-to-suit-tulsa" },
};

export default function BuildToSuitTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Build to Suit Tulsa"
                description="Build to suit construction and custom commercial development in Tulsa, Oklahoma for medical, retail, office, and industrial tenants."
                url="https://udgok.com/build-to-suit-tulsa"
            />
            <ServicePage
                label="Build to Suit"
                title="Build to Suit Construction in Tulsa, Oklahoma"
                description="Custom ground-up commercial development for tenants, developers, and landlords across the Tulsa metro — from site selection through certificate of occupancy."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Build to suit construction Tulsa Oklahoma — UDGOK"
                tldr="UDGOK delivers build-to-suit construction for developers and tenants across the Tulsa, Oklahoma metropolitan area. Build-to-suit projects are custom-designed and constructed for a specific tenant's operational requirements, typically on landlord-owned or developer-controlled land. BTS construction in Tulsa costs $120–$300/sq ft depending on building type and tenant specifications. We work with developers, REITs, and owner-occupants on medical offices, retail pads, office buildings, and industrial facilities."
                intro="Build to suit eliminates the compromises of leasing existing space. The building is designed around your operation — not the other way around. UDGOK partners with developers, landlords, and owner-occupants to deliver custom ground-up buildings across the Tulsa metro. From site evaluation through tenant move-in, we manage every phase of the BTS process."
                stats={[
                    { n: "50+", l: "BTS Projects" },
                    { n: "All", l: "Building Types" },
                    { n: "Tulsa", l: "Metro & Beyond" },
                    { n: "Full", l: "Site-to-CO Delivery" },
                ]}
                features={[
                    { icon: "📐", title: "Custom Design", desc: "Buildings designed around your specific workflow, equipment, technology, and brand requirements — not off-the-shelf floor plans." },
                    { icon: "🏗️", title: "Ground-Up Construction", desc: "Full site development including earthwork, utilities, parking, building construction, and landscaping." },
                    { icon: "🏥", title: "Medical BTS", desc: "Build-to-suit medical offices, clinics, and surgery centers with specialized MEP, medical gas, and regulatory compliance." },
                    { icon: "🏬", title: "Retail & Restaurant BTS", desc: "Pad site development for QSR, fast-casual, retail, and convenience store tenants." },
                    { icon: "🤝", title: "Developer Partnerships", desc: "We work with developers and REITs on multi-building BTS campuses, handling GMP contracts and phased delivery." },
                    { icon: "📋", title: "Site Selection Support", desc: "We evaluate potential sites for buildability, utility access, soil conditions, and permitting feasibility before you commit." },
                ]}
                faqs={[
                    { q: "What is build to suit construction?", a: "Build to suit (BTS) is a development approach where a building is custom-designed and constructed for a specific tenant. The developer or landlord owns the building and leases it to the tenant under a long-term NNN lease, or the tenant may own the land and building directly. BTS is common for medical offices, restaurants, retail, and office buildings in Tulsa." },
                    { q: "How much does build to suit cost in Tulsa?", a: "Build-to-suit construction in Tulsa costs $120–$300 per square foot depending on building type, tenant specifications, and site conditions. A 5,000 sq ft medical office BTS typically costs $750K–$1.5M including site work. Retail pad BTS projects run $600K–$1.2M for a 3,000 sq ft building." },
                    { q: "How long does a build-to-suit project take?", a: "Most BTS projects take 8–14 months from design kickoff to tenant move-in. This includes 2–3 months of design, 1–2 months of permitting, and 5–9 months of construction. UDGOK overlaps phases to compress schedules when possible." },
                    { q: "Does UDGOK work with developers on build-to-suit projects?", a: "Yes. We partner with commercial real estate developers, landlords, and REITs on BTS projects across Tulsa. We provide preconstruction pricing, site feasibility analysis, and GMP contracts that give developers cost certainty before breaking ground." },
                ]}
                cta="Start Your Build-to-Suit Project →"
            />
        </>
    );
}
