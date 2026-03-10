import type { Metadata } from "next";
import TulsaConstructionCostsUI from "./TulsaConstructionCostsUI";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Tulsa Construction Costs 2026 | Cost Per Square Foot by Building Type | UDGOK",
    description: "Real construction cost data for Tulsa, Oklahoma (2026). Cost per square foot for medical, dental, commercial, industrial, retail, restaurant, and warehouse construction. Interactive estimator tool. Based on 100+ completed projects.",
    keywords: [
        "tulsa construction costs",
        "construction cost per square foot tulsa",
        "how much does construction cost in tulsa",
        "commercial construction cost tulsa ok",
        "medical office construction cost oklahoma",
        "warehouse construction cost tulsa",
        "restaurant build-out cost tulsa",
        "construction cost estimator tulsa",
        "tulsa building costs 2026",
        "oklahoma construction cost index",
        "cost to build in tulsa oklahoma",
        "construction cost per sf tulsa",
        "tulsa construction price per square foot",
        "commercial building cost oklahoma",
        "construction budget tulsa ok",
    ],
    openGraph: {
        title: "Tulsa Construction Cost Index 2026 | Free Estimator",
        description: "Real construction costs by building type in Tulsa, OK. Interactive estimator, historical trends, and cost drivers. Based on 100+ completed projects.",
        url: "https://udgok.com/tulsa-construction-costs",
    },
    alternates: { canonical: "https://udgok.com/tulsa-construction-costs" },
};

/* ── FAQ JSON-LD ── */
function CostFaqJsonLd() {
    const faqs = [
        { q: "How much does construction cost per square foot in Tulsa, Oklahoma?", a: "Construction costs in Tulsa range from $25/sf for basic warehouse shells to $450/sf for ambulatory surgery centers. The median commercial build-out costs $105–$135/sf. Medical offices cost $180–$350/sf. Retail build-outs cost $80–$180/sf. Restaurant build-outs cost $150–$350/sf." },
        { q: "Are construction costs going up in Tulsa in 2026?", a: "Yes. Construction costs in Tulsa are increasing 4–6% year-over-year in 2026, driven primarily by skilled labor shortages (+6.2% YoY) and material costs (+3.8% YoY). Medical and restaurant construction are seeing the highest increases at 5–6% YoY." },
        { q: "What is the cheapest type of building to construct in Tulsa?", a: "Pre-engineered metal buildings (PEMB) are the most cost-effective construction type in Tulsa at $25–$50/sf for a turnkey shell. Self-storage facilities cost $35–$85/sf. Standard warehouse construction costs $50–$90/sf." },
        { q: "How much does it cost to build a medical office in Tulsa?", a: "Medical office construction in Tulsa costs $180–$350 per square foot for a fully finished turnkey facility. A typical 3,000 SF medical office costs $540K–$1.05M including design, MEP engineering, medical gas, specialized HVAC, and permitting." },
        { q: "What drives construction costs in Oklahoma?", a: "The four main cost drivers are: labor (40% of total cost, +6.2% YoY), materials (30%, +3.8% YoY), site work (10%, +4.1% YoY), and design/engineering (8%, +3.5% YoY). Permits and contingency account for the remaining 12%." },
        { q: "How can I get a construction cost estimate in Tulsa?", a: "UDGOK provides free conceptual estimates for commercial, medical, and industrial projects in Tulsa. Use our interactive cost estimator above for a quick range, or contact us for a detailed line-item estimate. Most estimates are delivered within 48 hours." },
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

export default function TulsaConstructionCostsPage() {
    return (
        <>
            <ServiceJsonLd
                name="Tulsa Construction Cost Index 2026"
                description="Real construction cost data and free estimator for Tulsa, Oklahoma. Cost per square foot by building type, historical trends, and cost drivers."
                url="https://udgok.com/tulsa-construction-costs"
            />
            <CostFaqJsonLd />
            <TulsaConstructionCostsUI />
        </>
    );
}
