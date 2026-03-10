import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Manufacturing Facility Construction Tulsa OK | Crane Systems & Heavy Industrial | UDGOK",
    description: "Manufacturing facility construction in Tulsa, Oklahoma. Overhead crane systems up to 50 tons, reinforced foundations, high bay clear heights 30–60 ft, 3-phase power infrastructure. $90–$200/sf.",
    keywords: [
        "manufacturing facility construction tulsa", "manufacturing plant construction oklahoma",
        "factory construction tulsa ok", "heavy industrial construction tulsa",
        "crane building construction oklahoma", "manufacturing building tulsa",
        "industrial plant construction oklahoma", "manufacturing facility cost per square foot",
        "factory builder tulsa ok", "heavy industrial contractor oklahoma",
    ],
    openGraph: { title: "Manufacturing Facility Construction Tulsa OK | UDGOK", description: "Heavy industrial — crane systems, reinforced foundations, high bay clear heights. $90–$200/sf.", url: "https://udgok.com/manufacturing-facility-construction-tulsa" },
    alternates: { canonical: "https://udgok.com/manufacturing-facility-construction-tulsa" },
};

export default function ManufacturingFacilityConstructionTulsaPage() {
    return (
        <>
            <ServiceJsonLd name="Manufacturing Facility Construction Tulsa" description="Manufacturing facility and factory construction in Tulsa, Oklahoma — crane systems, reinforced foundations, heavy MEP." url="https://udgok.com/manufacturing-facility-construction-tulsa" />
            <ServicePage
                label="Manufacturing"
                title="Manufacturing Facility Construction in Tulsa, Oklahoma"
                description="Heavy industrial construction — overhead crane systems up to 50 tons, reinforced foundations, high bay clear heights, and 3-phase power."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Manufacturing facility construction Tulsa Oklahoma — UDGOK"
                tldr="UDGOK builds manufacturing facilities and factories across the Tulsa metro. Manufacturing construction requires heavy industrial expertise — overhead crane systems (5 to 50 tons), reinforced mat foundations, high bay clear heights (30–60 ft), heavy 3-phase power distribution (480V+), compressed air systems, and industrial ventilation. Costs range from $90–$200/sf depending on crane capacity, clear height, and process equipment requirements. UDGOK integrates crane rail and runway structures into the building's primary frame during design — not bolted on as an afterthought."
                intro="Manufacturing facilities are the most structurally demanding buildings UDGOK constructs. Every element — from foundation depth to column spacing to roof structure — is driven by the manufacturing process it houses. Overhead crane loads dictate column sizes. Process equipment determines slab thickness. Ventilation requirements define the HVAC system. UDGOK starts with your manufacturing process and engineers the building to support it."
                stats={[
                    { n: "50-Ton", l: "Max Crane Capacity" },
                    { n: "60'", l: "Max Clear Height" },
                    { n: "$90–$200", l: "Cost Per SF" },
                    { n: "480V+", l: "Heavy Power" },
                ]}
                features={[
                    { icon: "🏗️", title: "Overhead Crane Systems", desc: "Top-running, under-running, and jib crane installations from 5 to 50 tons. Crane rail and runway structures integrated into the building frame during design for optimal load path." },
                    { icon: "🧱", title: "Reinforced Foundations", desc: "Mat foundations, drilled pier systems, and reinforced spread footings designed for concentrated crane loads, heavy equipment anchorage, and vibration isolation." },
                    { icon: "📐", title: "High Bay Construction", desc: "Clear heights from 30' to 60' for manufacturing processes, vertical equipment, and overhead material handling. Bay sizes optimized for your production flow." },
                    { icon: "⚡", title: "Heavy Power Distribution", desc: "480V 3-phase power systems, bus duct runs, motor control centers, and process power distribution. Infrastructure sized for process equipment and future expansion." },
                    { icon: "🌀", title: "Industrial Ventilation", desc: "Process exhaust, make-up air, dust collection, fume extraction, and temperature control systems. Designed for OSHA compliance and worker comfort." },
                    { icon: "🔧", title: "Process Equipment Integration", desc: "Coordination with your equipment vendors for anchorage, utility rough-ins, clearance requirements, and rigging access during installation." },
                ]}
                faqs={[
                    { q: "How much does a manufacturing facility cost to build in Tulsa?", a: "Manufacturing facility construction in Tulsa costs $90–$200/sf depending on crane capacity, clear height, and process equipment. A 20,000 SF light manufacturing facility costs $1.8M–$2.5M. A 50,000 SF heavy manufacturing plant with 30-ton crane costs $4.5M–$8M." },
                    { q: "Can UDGOK install crane systems in new buildings?", a: "Yes. UDGOK designs and installs overhead bridge crane systems with capacities from 5 to 50 tons. Crane structures are integrated into the building's primary frame during design for optimal structural performance and cost efficiency." },
                    { q: "What floor slab thickness is needed for manufacturing?", a: "Manufacturing facility slabs typically range from 6\" to 12\" depending on equipment loads, forklift traffic, and crane column loads. Heavy point loads may require local slab thickening, haunch beams, or separate equipment foundations." },
                    { q: "How long does it take to build a manufacturing facility?", a: "Light manufacturing (no crane): 5–8 months. Medium manufacturing (10-ton crane, standard MEP): 8–12 months. Heavy manufacturing (30+ ton crane, complex process): 10–16 months. UDGOK overlaps design and site work to compress timelines." },
                ]}
                cta="Start Your Manufacturing Project →"
            />
        </>
    );
}
