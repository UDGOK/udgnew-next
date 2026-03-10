import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Cold Storage Construction Tulsa OK | Food Processing Facilities | UDGOK",
    description: "Cold storage and food processing construction in Tulsa, Oklahoma. Temperature-controlled facilities, insulated metal panels, USDA/FDA compliant. Walk-in coolers, freezers, blast chillers. $120–$250/sf.",
    keywords: [
        "cold storage construction tulsa", "food processing facility construction oklahoma",
        "cold storage builder tulsa ok", "refrigerated warehouse tulsa", "freezer facility construction",
        "USDA compliant construction oklahoma", "cold storage cost per square foot",
        "food grade construction tulsa", "cold storage contractor oklahoma", "refrigeration construction tulsa ok",
    ],
    openGraph: { title: "Cold Storage Construction Tulsa OK | UDGOK", description: "Temperature-controlled facilities, USDA/FDA compliant, $120–$250/sf.", url: "https://udgok.com/cold-storage-construction-tulsa" },
    alternates: { canonical: "https://udgok.com/cold-storage-construction-tulsa" },
};

export default function ColdStorageConstructionTulsaPage() {
    return (
        <>
            <ServiceJsonLd name="Cold Storage Construction Tulsa" description="Cold storage and food processing construction in Tulsa, Oklahoma — insulated panels, vapor barriers, USDA/FDA compliant." url="https://udgok.com/cold-storage-construction-tulsa" />
            <ServicePage
                label="Cold Storage"
                title="Cold Storage & Food Processing Construction in Tulsa"
                description="Temperature-controlled facilities with insulated metal panels, USDA/FDA compliance, and ammonia/freon refrigeration — $120–$250/sf."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Cold storage construction Tulsa Oklahoma — UDGOK"
                tldr="UDGOK builds cold storage and food processing facilities across the Tulsa metro and Oklahoma. Temperature-controlled construction requires specialized expertise in insulated metal panel (IMP) installation, vapor barrier systems, refrigeration rough-ins, thermal bridging prevention, and USDA/FDA-compliant finishes. Cold storage construction costs $120–$250/sf depending on temperature range — cooler space (34–40°F) costs less than freezer space (-10 to 0°F). UDGOK handles the entire scope from site development through interior build-out and refrigeration coordination."
                intro="Cold storage construction is one of the most technically demanding building types. Every detail matters — a single thermal bridge can cause condensation, ice formation, and structural damage. Vapor barriers must be continuous and sealed. Insulated panels must maintain R-value under cycling temperature loads. And the facility must meet USDA/FDA food safety standards from foundation to ceiling. UDGOK brings the engineering precision required to build cold storage that performs for decades."
                stats={[
                    { n: "$120–$250", l: "Cost Per SF" },
                    { n: "-20°F", l: "To +40°F Range" },
                    { n: "USDA", l: "FDA Compliant" },
                    { n: "Turnkey", l: "Build-Out" },
                ]}
                features={[
                    { icon: "🧊", title: "Insulated Metal Panels (IMP)", desc: "4\" to 8\" thick insulated panels with polyurethane or polyisocyanurate cores. R-values from R-28 to R-56. Cam-lock or tongue-and-groove joints for continuous thermal envelope." },
                    { icon: "💧", title: "Vapor Barrier Systems", desc: "Continuous vapor barriers on the warm side of insulation to prevent condensation and ice formation. Sealed penetrations, joint treatments, and perimeter details." },
                    { icon: "❄️", title: "Refrigeration Infrastructure", desc: "Ammonia (NH3) and freon refrigeration system rough-ins — piping penetrations, compressor pads, condenser locations, and evaporator unit supports." },
                    { icon: "🔬", title: "USDA/FDA Compliance", desc: "Food-grade wall and ceiling finishes, coved base details, seamless flooring, wash-down rated electrical, and drainage systems designed for sanitation requirements." },
                    { icon: "🚪", title: "Cold Storage Doors & Docks", desc: "Insulated dock doors, air curtains, strip curtains, and thermal docks. Fast-acting roll-up doors for high-traffic openings to minimize temperature loss." },
                    { icon: "🏗️", title: "Heated Floor Systems", desc: "Sub-slab glycol heating systems to prevent frost heave under freezer floors. Essential for any space below 32°F. UDGOK designs and installs complete heated slab assemblies." },
                ]}
                faqs={[
                    { q: "How much does cold storage construction cost in Tulsa?", a: "Cold storage construction in Tulsa costs $120–$250/sf. Cooler space (34–40°F) costs $120–$160/sf. Freezer space (0°F) costs $160–$220/sf. Deep freeze (-10 to -20°F) costs $200–$250/sf. Costs include insulated panels, refrigeration rough-ins, USDA-compliant finishes, and heated sub-slab for freezer areas." },
                    { q: "What insulation is used for cold storage buildings?", a: "Cold storage buildings use insulated metal panels (IMP) with polyurethane or polyisocyanurate foam cores. Panel thickness ranges from 4\" (R-28) for cooler space to 8\" (R-56) for deep freeze. Cam-lock and tongue-and-groove joints create a continuous thermal envelope." },
                    { q: "Does cold storage require a heated floor?", a: "Yes, for freezer space below 32°F. A heated sub-slab system (typically glycol tubes in a sand layer below the slab) prevents frost heave — the expansion of moisture in the subgrade that can crack and lift concrete floors. Cooler space above 34°F does not typically require heated floors." },
                    { q: "Can UDGOK build USDA-inspected food processing facilities?", a: "Yes. UDGOK builds food processing and cold storage facilities that meet USDA and FDA food safety requirements including food-grade wall finishes, seamless flooring, coved bases, wash-down electrical, proper drainage, and ventilation for processing areas." },
                ]}
                cta="Start Your Cold Storage Project →"
            />
        </>
    );
}
