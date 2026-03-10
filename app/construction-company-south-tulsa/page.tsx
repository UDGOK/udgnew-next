import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Construction Company South Tulsa OK | Medical, Commercial & Retail | UDGOK",
    description: "South Tulsa's most active construction company. UDGOK has completed 30+ commercial, medical, dental, and retail projects along the Memorial and Yale corridors. Design-build, GMP pricing. Free estimates.",
    keywords: [
        "construction company south tulsa",
        "south tulsa construction",
        "commercial construction south tulsa",
        "medical office construction south tulsa",
        "dental construction south tulsa ok",
        "contractor south tulsa",
        "general contractor south tulsa ok",
        "retail construction south memorial tulsa",
        "construction companies south tulsa ok",
        "south tulsa builder",
    ],
    openGraph: {
        title: "Construction Company South Tulsa | UDGOK",
        description: "30+ projects delivered in South Tulsa. Medical, dental, commercial, and retail construction along Memorial and Yale corridors.",
        url: "https://udgok.com/construction-company-south-tulsa",
    },
    alternates: { canonical: "https://udgok.com/construction-company-south-tulsa" },
};

export default function ConstructionCompanySouthTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Construction Company South Tulsa"
                description="South Tulsa's most active commercial and medical construction company. 30+ projects along Memorial and Yale corridors."
                url="https://udgok.com/construction-company-south-tulsa"
            />
            <ServicePage
                label="South Tulsa"
                title="Construction Company in South Tulsa, Oklahoma"
                description="30+ commercial, medical, dental, and retail projects delivered along the South Memorial and South Yale corridors."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Construction company South Tulsa — UDGOK"
                tldr="UDGOK is South Tulsa's most active commercial construction company, with 30+ completed projects along the South Memorial and South Yale corridors. We build medical offices ($180–$350/sf), dental clinics ($200–$400/sf), retail spaces ($80–$180/sf), and restaurant build-outs ($150–$350/sf) across the 71st Street to 101st Street corridor. UDGOK's design-build delivery compresses schedules by 20–30% and our AI-powered estimating delivers conceptual budgets within 48 hours."
                intro="South Tulsa is UDGOK's home territory. From the medical office parks along South Yale to the retail centers on South Memorial, we've built more commercial projects in this corridor than any other builder. Our familiarity with South Tulsa zoning, City of Tulsa permitting for the south sector, and the local subcontractor base translates into faster schedules and tighter budgets."
                stats={[
                    { n: "30+", l: "South Tulsa Projects" },
                    { n: "$180–$350", l: "Medical $/SF" },
                    { n: "20–30%", l: "Faster Delivery" },
                    { n: "48hr", l: "Estimate Turnaround" },
                ]}
                features={[
                    { icon: "🏥", title: "Medical Office Construction", desc: "Multi-tenant medical office buildings and single-practice clinics along South Yale, 91st, and 101st. Specialized MEP, medical gas, and infection control expertise." },
                    { icon: "🦷", title: "Dental Office Build-Outs", desc: "Operatory-intensive dental clinics with plumbing-heavy layouts, nitrous/oxygen systems, and sterilization suites. 15+ dental clinics completed in south Tulsa." },
                    { icon: "🏬", title: "Retail & Restaurant", desc: "Pad site build-outs, strip center TI, and restaurant construction along Memorial Drive. National brand rollouts and local concepts alike." },
                    { icon: "🏢", title: "Office Build-Outs", desc: "Class A and B office build-outs in south Tulsa's professional corridors. Executive suites, corporate offices, and creative office conversions." },
                    { icon: "🏗️", title: "Design-Build Delivery", desc: "Single-source design-build for faster schedules, guaranteed pricing, and single-point accountability. One contract, one team." },
                    { icon: "📋", title: "South Tulsa Permitting", desc: "Established relationships with City of Tulsa DBCA for the south sector. Efficient plan review coordination and inspection scheduling." },
                ]}
                faqs={[
                    { q: "How much does commercial construction cost in South Tulsa?", a: "Commercial build-out costs in South Tulsa range from $80–$180/sf for retail, $60–$150/sf for office, $180–$350/sf for medical, and $150–$350/sf for restaurants. Costs are consistent with the broader Tulsa metro. UDGOK provides detailed line-item estimates before construction begins." },
                    { q: "What areas of South Tulsa does UDGOK serve?", a: "UDGOK builds across all of South Tulsa — from 51st Street south to 101st Street, along Memorial Drive, South Yale, South Lewis, and the Creek Turnpike corridor. We also serve adjacent areas like Bixby, Jenks, and south Broken Arrow." },
                    { q: "How long does a medical office build-out take in South Tulsa?", a: "A typical 3,000–5,000 SF medical office in South Tulsa takes 4–6 months from design through certificate of occupancy. UDGOK's design-build delivery compresses this timeline by 20–30% by overlapping design, permitting, and early site work." },
                    { q: "Does UDGOK handle permits for South Tulsa projects?", a: "Yes. We manage the entire permitting process with the City of Tulsa DBCA, including plan submission, review coordination, inspections, and CO. Our established relationships with the south sector inspection team help keep projects on schedule." },
                ]}
                cta="Start Your South Tulsa Project →"
            />
        </>
    );
}
