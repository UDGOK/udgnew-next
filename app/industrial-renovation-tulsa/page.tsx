import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Industrial Renovation Contractor Tulsa OK | Retrofits, Crane Rails & Mezzanines | UDGOK",
    description: "Industrial renovation contractor in Tulsa, Oklahoma. Structural retrofits, crane rail installation, mezzanine additions, energy efficiency upgrades, and code compliance renovations for existing industrial buildings.",
    keywords: [
        "industrial renovation tulsa", "industrial renovation contractor oklahoma",
        "factory renovation tulsa ok", "crane rail installation tulsa",
        "mezzanine construction tulsa", "industrial retrofit contractor oklahoma",
        "warehouse renovation tulsa", "industrial building renovation cost",
        "seismic upgrade contractor oklahoma", "industrial energy efficiency tulsa",
    ],
    openGraph: { title: "Industrial Renovation Contractor Tulsa OK | UDGOK", description: "Structural retrofits, crane rails, mezzanines, and code compliance renovations.", url: "https://udgok.com/industrial-renovation-tulsa" },
    alternates: { canonical: "https://udgok.com/industrial-renovation-tulsa" },
};

export default function IndustrialRenovationTulsaPage() {
    return (
        <>
            <ServiceJsonLd name="Industrial Renovation Tulsa" description="Industrial renovation contractor in Tulsa — structural retrofits, crane rail installation, mezzanine additions." url="https://udgok.com/industrial-renovation-tulsa" />
            <ServicePage
                label="Industrial Renovation"
                title="Industrial Renovation Contractor in Tulsa, Oklahoma"
                description="Structural retrofits, crane rail installations, mezzanine additions, energy efficiency upgrades, and code compliance renovations."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Industrial renovation contractor Tulsa Oklahoma — UDGOK"
                tldr="UDGOK renovates and retrofits existing industrial buildings across the Tulsa metro. Industrial renovations include structural reinforcement for new equipment loads, crane rail and runway installation in existing buildings, mezzanine additions for additional floor space, energy efficiency upgrades (LED lighting, insulation, HVAC), roof replacements, slab repairs, and code compliance renovations to bring older buildings up to current IBC 2021 standards. Renovation costs range from $40–$150/sf depending on scope."
                intro="Many of Tulsa's industrial buildings were built decades ago — before modern energy codes, seismic requirements, and operational demands. Renovating an existing facility is often 30–50% cheaper than new construction, but it requires a contractor who understands structural assessment, code upgrades, and phased construction that keeps your operations running during the work."
                stats={[
                    { n: "$40–$150", l: "Renovation $/SF" },
                    { n: "30–50%", l: "Savings vs New" },
                    { n: "IBC 2021", l: "Code Compliance" },
                    { n: "Phased", l: "Keep Operations Running" },
                ]}
                features={[
                    { icon: "🏗️", title: "Structural Retrofits", desc: "Reinforcing existing columns, beams, and connections for new equipment loads, seismic upgrades, or code compliance. Steel reinforcement, carbon fiber wrap, and foundation underpinning." },
                    { icon: "🏗️", title: "Crane Rail Installation", desc: "Adding overhead crane systems to existing buildings — runway beams, crane rails, rail clips, and end stops. Structural analysis of existing columns for crane loading." },
                    { icon: "📐", title: "Mezzanine Additions", desc: "Steel mezzanines for additional floor space — office mezzanines, storage mezzanines, and production mezzanines. Structural analysis of existing slab for point loads." },
                    { icon: "💡", title: "Energy Efficiency Upgrades", desc: "LED high bay lighting replacements, roof and wall insulation, HVAC upgrades, and building envelope improvements. ROI typically 2–5 years on energy savings." },
                    { icon: "🔧", title: "Slab & Roof Repairs", desc: "Concrete floor repairs — crack injection, slab leveling, joint repair, and re-coating. Roof replacements — standing seam metal, single-ply membrane, and roof coating systems." },
                    { icon: "📋", title: "Code Compliance Renovations", desc: "Bringing older buildings up to current IBC 2021 standards — fire protection upgrades, ADA compliance, electrical system upgrades, and structural reinforcement." },
                ]}
                faqs={[
                    { q: "How much does industrial renovation cost in Tulsa?", a: "Industrial renovation in Tulsa costs $40–$150/sf depending on scope. LED lighting upgrades: $2–$5/sf. Insulation and envelope improvements: $5–$15/sf. Mezzanine additions: $40–$80/sf. Structural retrofits: $50–$100/sf. Full gut renovation: $80–$150/sf." },
                    { q: "Can a crane be added to an existing building?", a: "In many cases, yes. UDGOK performs structural analysis of existing columns and foundations to determine if they can support crane loading. If additional capacity is needed, we reinforce columns and add pier foundations before installing crane rails and systems." },
                    { q: "Can operations continue during industrial renovation?", a: "Yes. UDGOK specializes in phased renovation that keeps your operations running. We isolate work areas with temporary barriers, schedule loud/dusty work during off-hours, and coordinate equipment shutdowns to minimize impact on production." },
                    { q: "Is it cheaper to renovate or build new?", a: "Renovation is typically 30–50% cheaper than new construction for equivalent space. However, if the existing structure has significant deficiencies (foundation problems, structural damage, outdated utility infrastructure), new construction may be more cost-effective long-term." },
                ]}
                cta="Start Your Industrial Renovation →"
            />
        </>
    );
}
