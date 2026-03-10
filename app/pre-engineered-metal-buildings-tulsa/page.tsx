import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Pre-Engineered Metal Buildings Tulsa OK | PEMB Red Iron | UDGOK",
    description: "Pre-engineered metal building contractor in Tulsa, Oklahoma. Red iron PEMB structures — 20–30% cheaper, 30% faster than conventional steel. Warehouses, shops, agricultural, and commercial metal buildings. $25–$50/sf turnkey.",
    keywords: [
        "pre-engineered metal buildings tulsa", "metal buildings tulsa ok", "PEMB contractor tulsa",
        "red iron buildings oklahoma", "metal building construction tulsa", "steel building tulsa",
        "metal building cost tulsa ok", "pre-engineered steel buildings oklahoma",
        "metal building contractor tulsa", "metal shop building tulsa", "red iron building cost oklahoma",
    ],
    openGraph: { title: "Pre-Engineered Metal Buildings Tulsa OK | UDGOK", description: "PEMB contractor — red iron metal buildings 20–30% cheaper than conventional steel. Tulsa, Oklahoma.", url: "https://udgok.com/pre-engineered-metal-buildings-tulsa" },
    alternates: { canonical: "https://udgok.com/pre-engineered-metal-buildings-tulsa" },
};

export default function PEMBTulsaPage() {
    return (
        <>
            <ServiceJsonLd name="Pre-Engineered Metal Buildings Tulsa" description="PEMB contractor in Tulsa, Oklahoma — red iron metal buildings for warehouses, shops, agricultural, and commercial use." url="https://udgok.com/pre-engineered-metal-buildings-tulsa" />
            <ServicePage
                label="Metal Buildings"
                title="Pre-Engineered Metal Buildings in Tulsa, Oklahoma"
                description="Red iron PEMB structures — 20–30% cheaper and 30% faster than conventional steel. Custom designed for Oklahoma's wind loads."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Pre-engineered metal buildings Tulsa Oklahoma — UDGOK"
                tldr="UDGOK is Tulsa's leading pre-engineered metal building (PEMB) contractor. Red iron PEMB structures cost $25–$50/sf for turnkey shells — 20–30% cheaper than conventional steel — and erect 30% faster. We build PEMB warehouses, shops, agricultural buildings, automotive facilities, and commercial buildings custom designed for Oklahoma's 90 mph wind load requirements. UDGOK handles the complete scope from site work and foundations through steel erection, insulation, MEP, and interior build-out. Current structural steel prices for PEMB average $1,800–$2,400/ton fabricated and delivered (Q1 2026). Hot-rolled steel (W-shapes) run $1,200–$1,600/ton."
                intro="Pre-engineered metal buildings are the most cost-effective construction method for warehouses, shops, and light industrial facilities. A PEMB (also called a red iron building) uses computer-optimized rigid frames, factory-fabricated purlins, girts, and metal panels — all manufactured in a controlled environment and shipped to your site for assembly. The result: faster construction, lower cost, and consistent quality. UDGOK partners with multiple PEMB manufacturers to ensure competitive pricing and lead times for every project."
                stats={[
                    { n: "$25–$50", l: "Turnkey Shell $/SF" },
                    { n: "20–30%", l: "Savings vs Steel" },
                    { n: "30%", l: "Faster Erection" },
                    { n: "90mph+", l: "Wind Rated" },
                ]}
                features={[
                    { icon: "🔩", title: "Rigid Frame Design", desc: "Computer-optimized tapered rigid frames with clear spans up to 200'+. Lighter than conventional steel = smaller foundations = lower total cost." },
                    { icon: "🏭", title: "Factory Fabrication", desc: "All structural members fabricated in climate-controlled factories with CNC precision. No field welding on primary frames — bolted connections for faster, safer erection." },
                    { icon: "🌡️", title: "Insulation Systems", desc: "Standing seam roof panels, insulated wall panels, fiberglass batt, and rigid board insulation. R-values from R-10 to R-38+ depending on climate and use requirements." },
                    { icon: "🌪️", title: "Oklahoma Wind Engineering", desc: "Every PEMB engineered for Oklahoma's 90 mph base wind speed. We design for Exposure B and C conditions with component and cladding calculations per IBC 2021." },
                    { icon: "📋", title: "Multi-Manufacturer Sourcing", desc: "We bid every PEMB project to 3+ manufacturers. No exclusive dealer agreements means you get the best price and fastest delivery every time." },
                    { icon: "🔌", title: "Complete Build-Out", desc: "UDGOK goes beyond the metal shell — we handle concrete, plumbing, electrical, HVAC, fire protection, and interior build-out. Turnkey under one contract." },
                ]}
                sections={[
                    { heading: "What are current steel prices for metal buildings in Oklahoma?", body: "As of Q1 2026, fabricated structural steel for pre-engineered metal buildings averages $1,800–$2,400/ton delivered in the Tulsa metro. Hot-rolled structural steel (W-shapes) trades at $1,200–$1,600/ton. Steel coil for metal panels runs $900–$1,100/ton. These prices are down 15–20% from the 2022 peak but remain 30–40% above pre-pandemic levels. UDGOK monitors steel futures daily and recommends strategic timing for steel procurement on large projects." },
                    { heading: "PEMB vs conventional steel — which is right for your project?", body: "PEMB is ideal for rectangular, single-story buildings under 200' clear span — warehouses, shops, agricultural buildings, and light commercial. Conventional steel is better for multi-story buildings, irregular geometries, heavy crane loads (30+ tons), or projects requiring architectural flexibility. PEMB costs 20–30% less and erects 30% faster. For most industrial buildings in Tulsa, PEMB is the clear winner on cost and schedule." },
                ]}
                faqs={[
                    { q: "How much does a metal building cost in Tulsa, Oklahoma?", a: "A pre-engineered metal building in Tulsa costs $15–$25/sf for the building kit only (no foundation or erection). A turnkey shell with foundation, erection, insulation, and basic electrical costs $25–$50/sf. A fully finished PEMB with office build-out, HVAC, plumbing, and fire protection costs $50–$90/sf." },
                    { q: "What is the current price of structural steel in Oklahoma?", a: "As of Q1 2026, fabricated PEMB steel averages $1,800–$2,400/ton delivered in Tulsa. Hot-rolled structural shapes (W-shapes) run $1,200–$1,600/ton. Steel prices are down 15–20% from 2022 peaks but remain elevated versus pre-pandemic levels." },
                    { q: "How long does it take to erect a metal building?", a: "Steel erection for a pre-engineered metal building takes 2–4 weeks for a 10,000 SF building and 4–8 weeks for a 50,000+ SF building. Total project time from design through CO is 3–5 months for small PEMBs and 5–8 months for large facilities." },
                    { q: "What wind load rating do metal buildings need in Oklahoma?", a: "Oklahoma building codes require minimum 90 mph wind speed ratings (3-second gust). PEMB manufacturers design to site-specific wind loads based on exposure category, building importance, and local amendments. All UDGOK PEMBs meet or exceed IBC 2021 wind requirements." },
                ]}
                cta="Get Your Metal Building Estimate →"
            />
        </>
    );
}
