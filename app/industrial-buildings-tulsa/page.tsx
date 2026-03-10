import type { Metadata } from "next";
import IndustrialBuildingsUI from "./IndustrialBuildingsUI";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Industrial Building Contractor Tulsa OK | Metal Buildings & Warehouses | UDGOK",
    description: "Tulsa's top industrial building contractor. UDGOK builds pre-engineered metal buildings (PEMB), warehouses, manufacturing facilities, cold storage, self-storage, and flex space. PEMB costs $25–$50/sf — 30% cheaper than conventional steel. 100+ industrial projects delivered.",
    keywords: [
        "industrial building contractor Tulsa",
        "industrial buildings Tulsa OK",
        "metal buildings Tulsa",
        "pre-engineered metal buildings Tulsa",
        "PEMB Tulsa Oklahoma",
        "red iron metal buildings Tulsa",
        "warehouse construction Tulsa OK",
        "metal building contractor Oklahoma",
        "industrial construction Tulsa",
        "steel buildings Tulsa Oklahoma",
        "self-storage construction Tulsa",
        "manufacturing facility construction Tulsa",
        "cold storage construction Oklahoma",
        "warehouse builder Tulsa OK",
        "metal building erection Tulsa",
        "industrial building cost Tulsa",
        "commercial metal buildings Oklahoma",
        "agricultural buildings Tulsa",
        "flex space construction Tulsa",
        "Tulsa construction company",
    ],
    openGraph: {
        title: "Industrial Building Contractor Tulsa OK | UDGOK",
        description: "Pre-engineered metal buildings, warehouses, manufacturing, cold storage, and self-storage in Tulsa, Oklahoma. 100+ industrial projects delivered.",
        url: "https://udgok.com/industrial-buildings-tulsa",
        type: "website",
    },
    alternates: { canonical: "https://udgok.com/industrial-buildings-tulsa" },
};

/* ── FAQ JSON-LD ── */
function IndustrialFaqJsonLd() {
    const faqs = [
        { q: "How much does it cost to build an industrial building in Tulsa, Oklahoma?", a: "Industrial building costs in Tulsa range from $25–$60 per square foot for a basic pre-engineered metal shell to $85–$200/sf for a fully finished turnkey facility. A standard 10,000 SF warehouse shell costs $250K–$600K. A 50,000 SF distribution center costs $2.5M–$5M." },
        { q: "What is a pre-engineered metal building (PEMB) and why is it cheaper?", a: "A pre-engineered metal building (PEMB), also known as a red iron building, is a steel-framed structure manufactured in a factory and assembled on-site. PEMBs cost 20–30% less than conventional steel due to efficient factory fabrication, lighter frame designs, faster erection, and single-source manufacturing." },
        { q: "How long does it take to build an industrial building in Oklahoma?", a: "A standard 10,000 SF pre-engineered metal warehouse takes 3–5 months from design through CO. A 50,000 SF distribution center takes 6–10 months. Manufacturing facilities with crane systems take 8–14 months." },
        { q: "What wind load ratings are required for industrial buildings in Oklahoma?", a: "Oklahoma building codes require minimum 90 mph wind speed ratings (3-second gust) for most areas. UDGOK designs all industrial buildings to meet or exceed IBC 2021 wind load requirements for Oklahoma's tornado and high-wind risk profile." },
        { q: "Does UDGOK build pre-engineered metal buildings (PEMB)?", a: "Yes. UDGOK builds pre-engineered metal buildings for warehouses, manufacturing, agricultural, and commercial applications. We partner with multiple PEMB manufacturers and handle the full scope from site work through office build-out." },
        { q: "What is the difference between conventional steel and pre-engineered metal buildings?", a: "Conventional steel uses standard hot-rolled shapes with maximum design flexibility but higher cost. Pre-engineered metal buildings use computer-optimized tapered frames that are lighter and cheaper. PEMBs are ideal for rectangular clear-span buildings; conventional steel is better for irregular geometries or heavy crane loads." },
        { q: "Can UDGOK add crane systems to industrial buildings?", a: "Yes. We design and install overhead bridge crane systems with capacities from 5 to 50 tons. Crane rail and runway structures are integrated into the building's primary frame during design." },
        { q: "What areas does UDGOK serve for industrial construction?", a: "UDGOK builds industrial facilities across the Tulsa metro, surrounding suburbs (Broken Arrow, Bixby, Jenks, Owasso, Sand Springs), greater Oklahoma (OKC, Muskogee), and the Dallas-Fort Worth metro in Texas." },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export default function IndustrialBuildingsTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Industrial Building Contractor Tulsa"
                description="Industrial building contractor in Tulsa, Oklahoma — pre-engineered metal buildings, warehouses, manufacturing facilities, cold storage, self-storage, and flex space construction."
                url="https://udgok.com/industrial-buildings-tulsa"
            />
            <IndustrialFaqJsonLd />
            <IndustrialBuildingsUI />
        </>
    );
}
