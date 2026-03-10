import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Construction Company East Tulsa OK | Industrial & Commercial | UDGOK",
    description: "East Tulsa construction company. UDGOK builds warehouses, industrial facilities, convenience stores, and commercial projects along the I-44 corridor. Pre-engineered metal buildings, flex space, distribution centers.",
    keywords: [
        "construction company east tulsa",
        "east tulsa construction",
        "industrial construction east tulsa",
        "warehouse construction east tulsa ok",
        "contractor east tulsa",
        "commercial construction east tulsa ok",
        "convenience store construction east tulsa",
        "construction companies east tulsa ok",
        "east tulsa builder",
        "i-44 corridor construction tulsa",
    ],
    openGraph: {
        title: "Construction Company East Tulsa | Industrial & Commercial | UDGOK",
        description: "Industrial, warehouse, convenience store, and commercial construction along East Tulsa's I-44 corridor.",
        url: "https://udgok.com/construction-company-east-tulsa",
    },
    alternates: { canonical: "https://udgok.com/construction-company-east-tulsa" },
};

export default function ConstructionCompanyEastTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Construction Company East Tulsa"
                description="East Tulsa construction company — industrial, warehouse, convenience store, and commercial construction along the I-44 corridor."
                url="https://udgok.com/construction-company-east-tulsa"
            />
            <ServicePage
                label="East Tulsa"
                title="Construction Company in East Tulsa, Oklahoma"
                description="Industrial, warehouse, convenience store, and commercial projects along the I-44 corridor and East Tulsa's growing commercial districts."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Construction company East Tulsa — UDGOK"
                tldr="UDGOK builds industrial, commercial, and convenience store projects across East Tulsa and the I-44 corridor. East Tulsa is the Tulsa metro's primary industrial and distribution zone, with growing demand for warehouses ($25–$50/sf PEMB), flex space ($40–$70/sf), convenience stores ($200–$350/sf), and light manufacturing facilities. UDGOK's industrial division handles pre-engineered metal buildings, concrete tilt-up, and conventional steel construction. We serve the entire East Tulsa corridor from Admiral Place to the Broken Arrow Expressway and east to Catoosa."
                intro="East Tulsa is where Tulsa builds. The I-44 corridor and surrounding industrial zones are home to the metro's largest concentration of warehouses, distribution centers, manufacturing facilities, and convenience stores. UDGOK has a strong footprint in East Tulsa, building flex space, metal buildings, and commercial projects that serve this growing corridor."
                stats={[
                    { n: "10+", l: "East Tulsa Projects" },
                    { n: "$25–$50", l: "Warehouse $/SF" },
                    { n: "PEMB", l: "Metal Building Experts" },
                    { n: "I-44", l: "Corridor Focus" },
                ]}
                features={[
                    { icon: "🏭", title: "Warehouse & Distribution", desc: "Clear-span warehouses from 10,000 to 200,000+ SF with dock-high loading, ESFR sprinklers, and heavy-duty concrete floors. Pre-engineered metal and conventional steel." },
                    { icon: "🔩", title: "Pre-Engineered Metal Buildings", desc: "Red iron PEMB structures — 20–30% cheaper than conventional steel. Custom designed for Oklahoma's 90 mph wind load requirements." },
                    { icon: "⛽", title: "Convenience Store Construction", desc: "Full-scope convenience store build-outs — fuel systems, walk-in coolers, commercial kitchens, and brand prototype compliance." },
                    { icon: "🔧", title: "Flex Space & Light Industrial", desc: "Hybrid office/warehouse buildings with storefront office entries and rear dock loading. Multi-tenant or single-user configurations." },
                    { icon: "🏗️", title: "Ground-Up Commercial", desc: "Pad site builds, strip centers, and single-tenant commercial buildings along the East Tulsa commercial corridors." },
                    { icon: "📋", title: "East Tulsa Industrial Zoning", desc: "IM and IL zoned properties — we navigate use permits, environmental requirements, and industrial site development standards." },
                ]}
                faqs={[
                    { q: "How much does a warehouse cost to build in East Tulsa?", a: "Pre-engineered metal warehouse shells in East Tulsa cost $25–$50/sf turnkey. A 20,000 SF PEMB warehouse with slab, basic electrical, and dock doors costs approximately $500K–$1M. Larger distribution centers with ESFR sprinklers and office build-out cost $70–$120/sf." },
                    { q: "What industrial zoning exists in East Tulsa?", a: "East Tulsa features IM (Industrial Moderate) and IL (Industrial Light) zoning along the I-44 corridor, 11th Street, and Pine Street corridors. These zones permit warehousing, light manufacturing, distribution, and flex space. Heavy industrial uses may require a special use permit." },
                    { q: "Does UDGOK build convenience stores in East Tulsa?", a: "Yes. UDGOK builds convenience stores and gas stations across East Tulsa and the broader Tulsa metro. Our scope includes fuel system installation, walk-in cooler/freezer, commercial kitchen, and franchise prototype compliance." },
                    { q: "What areas does UDGOK serve in East Tulsa?", a: "We build across the entire East Tulsa corridor — from Admiral Place south to the Creek Turnpike, and east from Highway 169 to Catoosa. This includes the 11th Street corridor, Pine Street industrial area, and the I-44/I-244 interchange zone." },
                ]}
                cta="Start Your East Tulsa Project →"
            />
        </>
    );
}
