import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Warehouse Construction Tulsa OK | Distribution Centers & PEMB | UDGOK",
    description: "Tulsa warehouse construction company. Clear-span warehouses from 10,000 to 200,000+ SF — pre-engineered metal, dock-high loading, ESFR sprinklers, heavy-duty slabs. UDGOK delivers turnkey warehouse projects at $25–$90/sf.",
    keywords: [
        "warehouse construction tulsa", "warehouse builder tulsa ok", "distribution center construction oklahoma",
        "warehouse construction cost tulsa", "build a warehouse tulsa", "industrial warehouse tulsa ok",
        "warehouse contractor oklahoma", "pre-engineered warehouse tulsa", "dock high warehouse tulsa",
        "clear span warehouse oklahoma", "warehouse construction cost per square foot tulsa",
    ],
    openGraph: { title: "Warehouse Construction Tulsa OK | UDGOK", description: "Clear-span warehouses and distribution centers from 10,000 to 200,000+ SF in Tulsa, Oklahoma.", url: "https://udgok.com/warehouse-construction-tulsa" },
    alternates: { canonical: "https://udgok.com/warehouse-construction-tulsa" },
};

export default function WarehouseConstructionTulsaPage() {
    return (
        <>
            <ServiceJsonLd name="Warehouse Construction Tulsa" description="Tulsa warehouse construction — clear-span warehouses, distribution centers, and PEMB warehouse buildings from 10,000 to 200,000+ SF." url="https://udgok.com/warehouse-construction-tulsa" />
            <ServicePage
                label="Warehouse Construction"
                title="Warehouse Construction in Tulsa, Oklahoma"
                description="Clear-span warehouses and distribution centers from 10,000 to 200,000+ SF — pre-engineered metal, dock-high loading, ESFR sprinklers."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Warehouse construction Tulsa Oklahoma — UDGOK"
                tldr="UDGOK builds warehouses and distribution centers across the Tulsa metro from 10,000 to 200,000+ square feet. Pre-engineered metal building (PEMB) warehouse shells cost $25–$50/sf turnkey. Standard warehouses with dock-high loading, ESFR fire sprinklers, lighting, and small office cost $50–$90/sf. Large distribution centers with full office build-out, climate control, and heavy-capacity slabs run $70–$120/sf. UDGOK handles the complete scope — site development, foundations, steel erection, insulation, dock equipment, fire protection, and office build-out under one design-build contract."
                intro="Tulsa's industrial vacancy rate is at historic lows, driving record demand for new warehouse and distribution space. UDGOK is the Tulsa metro's most experienced warehouse contractor — we build everything from 10,000 SF flex warehouses to 200,000+ SF cross-dock distribution facilities. Our pre-engineered metal building (PEMB) partnerships deliver turnkey shells 30% faster than conventional steel, and our design-build delivery eliminates the gaps between architect, engineer, and contractor."
                stats={[
                    { n: "200K+", l: "Max SF Capacity" },
                    { n: "$25–$90", l: "Cost Per SF Range" },
                    { n: "30%", l: "Faster with PEMB" },
                    { n: "Turnkey", l: "Full Scope Delivery" },
                ]}
                features={[
                    { icon: "🏗️", title: "Clear-Span Design", desc: "Column-free interiors from 60' to 200'+ clear spans. Maximize usable floor area for racking, equipment, and material flow without structural obstructions." },
                    { icon: "🚛", title: "Dock-High Loading", desc: "Dock levelers, overhead dock doors, dock shelters, and truck court design. We size dock positions based on your throughput requirements and truck turning radius." },
                    { icon: "🔥", title: "ESFR Fire Sprinkler Systems", desc: "Early Suppression Fast Response sprinkler systems for high-pile storage. Designed by our fire protection engineers to meet FM Global and NFPA requirements." },
                    { icon: "💪", title: "Heavy-Duty Floor Slabs", desc: "6\" and 8\" reinforced concrete floors rated for forklift traffic, heavy rack loads, and point-load equipment. Laser-screeded for flatness tolerance of FF50/FL30 minimum." },
                    { icon: "📐", title: "Clear Heights to 40'+", desc: "High bay warehouse construction with clear heights from 24' to 40'+. Maximize vertical storage density with taller eave heights and deeper racking systems." },
                    { icon: "⚡", title: "LED Lighting & Power", desc: "High bay LED lighting systems, 3-phase power distribution, and electrical infrastructure sized for current and future equipment loads." },
                ]}
                faqs={[
                    { q: "How much does warehouse construction cost in Tulsa?", a: "Warehouse construction in Tulsa ranges from $25–$50/sf for a PEMB shell (foundation, erection, insulation, basic electrical) to $70–$120/sf for a full distribution center with ESFR sprinklers, dock-high loading, and office build-out. A standard 20,000 SF warehouse costs $500K–$1.8M depending on specification." },
                    { q: "How long does it take to build a warehouse in Tulsa?", a: "A 10,000 SF PEMB warehouse takes 3–5 months. A 50,000 SF warehouse with full MEP takes 5–8 months. A 100,000+ SF distribution center takes 8–12 months. UDGOK compresses schedules by 20–30% through design-build delivery." },
                    { q: "What is the best foundation for a warehouse in Oklahoma?", a: "Most Tulsa warehouses use monolithic slab-on-grade with turned-down edge beams. High-rack warehouses may need drilled piers for concentrated column loads. UDGOK performs soil testing on every project and designs foundations based on geotechnical recommendations." },
                    { q: "Does UDGOK build warehouses outside Tulsa?", a: "Yes. UDGOK builds warehouses across the Tulsa metro (East Tulsa, Broken Arrow, Catoosa, Sapulpa), statewide (OKC, Muskogee), and in the Dallas-Fort Worth metro." },
                ]}
                cta="Start Your Warehouse Project →"
            />
        </>
    );
}
