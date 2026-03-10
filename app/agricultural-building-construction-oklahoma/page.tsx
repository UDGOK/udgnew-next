import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Agricultural Building Construction Oklahoma | Barns, Shops & Equipment Shelters | UDGOK",
    description: "Agricultural building construction in Oklahoma. Barns, equipment shelters, hay storage, livestock facilities, grain storage, and shop buildings. Pre-engineered metal and conventional construction. UDGOK serves Tulsa metro and statewide.",
    keywords: [
        "agricultural building construction oklahoma", "ag building tulsa",
        "barn construction oklahoma", "farm building contractor tulsa",
        "equipment shelter construction oklahoma", "metal ag building tulsa ok",
        "livestock facility construction", "hay storage building oklahoma",
        "agricultural contractor tulsa", "shop building construction oklahoma",
    ],
    openGraph: { title: "Agricultural Building Construction Oklahoma | UDGOK", description: "Barns, equipment shelters, livestock facilities, and shop buildings.", url: "https://udgok.com/agricultural-building-construction-oklahoma" },
    alternates: { canonical: "https://udgok.com/agricultural-building-construction-oklahoma" },
};

export default function AgriculturalBuildingConstructionOklahomaPage() {
    return (
        <>
            <ServiceJsonLd name="Agricultural Building Construction Oklahoma" description="Agricultural building construction in Oklahoma — barns, equipment shelters, hay storage, livestock facilities." url="https://udgok.com/agricultural-building-construction-oklahoma" />
            <ServicePage
                label="Agricultural"
                title="Agricultural Building Construction in Oklahoma"
                description="Barns, equipment shelters, hay storage, livestock facilities, grain storage, and shop buildings — designed for Oklahoma's agricultural operations."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Agricultural building construction Oklahoma — UDGOK"
                tldr="UDGOK builds agricultural buildings across Oklahoma using pre-engineered metal building (PEMB) systems optimized for agricultural applications. Farm shop buildings, equipment shelters, hay barns, livestock facilities, and grain storage buildings are designed for Oklahoma's extreme wind loads (90 mph), temperature range (-10°F to 115°F), and agricultural operational requirements. PEMB agricultural buildings cost $20–$45/sf for basic structures. Insulated, enclosed ag buildings with concrete floors cost $30–$60/sf."
                intro="Oklahoma's agricultural operations demand buildings that can withstand extreme weather, accommodate large equipment, and provide functional work environments. UDGOK designs and builds agricultural buildings that work as hard as you do — clear-span structures for equipment access, ventilation for livestock comfort, and durable finishes that stand up to decades of daily use."
                stats={[
                    { n: "$20–$60", l: "Cost Per SF" },
                    { n: "90mph", l: "Wind Rated" },
                    { n: "PEMB", l: "Metal Buildings" },
                    { n: "Statewide", l: "Oklahoma Coverage" },
                ]}
                features={[
                    { icon: "🚜", title: "Equipment Shelters", desc: "Open-front and enclosed equipment shelters with clear spans up to 100'+. Protect tractors, combines, and implements from Oklahoma's weather extremes." },
                    { icon: "🐄", title: "Livestock Facilities", desc: "Cattle barns, horse barns, swine facilities, and poultry houses with ventilation systems designed for animal comfort and biosecurity requirements." },
                    { icon: "🌾", title: "Hay & Grain Storage", desc: "Hay barns with open sides for airflow and grain storage buildings with aeration systems. Designed for loading/unloading equipment access." },
                    { icon: "🔧", title: "Farm Shop Buildings", desc: "Heated and insulated farm shops with concrete floors, overhead doors, workbench areas, compressed air, and welding power. Your farm's maintenance headquarters." },
                    { icon: "🌀", title: "Oklahoma Wind Engineering", desc: "Every ag building engineered for 90 mph wind loads per IBC 2021. Open-front structures get additional engineering for component and cladding pressures." },
                    { icon: "🏗️", title: "PEMB Construction", desc: "Pre-engineered metal buildings are the most cost-effective construction method for agriculture. Factory-fabricated, fast erection, and designed for clear-span access." },
                ]}
                faqs={[
                    { q: "How much does an agricultural building cost in Oklahoma?", a: "Basic PEMB equipment shelters: $20–$30/sf. Enclosed, insulated farm shops with concrete floor: $30–$60/sf. Livestock barns: $25–$50/sf. Hay barns with open sides: $15–$25/sf. All costs are for turnkey delivery including slab, erection, and basic electrical." },
                    { q: "What size clear span can an ag building have?", a: "PEMB agricultural buildings can achieve clear spans up to 200'+ without interior columns. Most ag buildings use 60–100' clear spans for equipment access and material handling." },
                    { q: "Does UDGOK build agricultural buildings outside Tulsa?", a: "Yes. UDGOK builds agricultural buildings across Oklahoma — from the Tulsa metro to rural communities statewide. We also serve agricultural operations in North Texas." },
                    { q: "How long does it take to build an ag building?", a: "A basic equipment shelter takes 6–10 weeks. An insulated farm shop with concrete floor takes 2–4 months. Livestock facilities with specialized ventilation take 3–5 months." },
                ]}
                cta="Start Your Ag Building Project →"
            />
        </>
    );
}
