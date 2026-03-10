import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Construction Company Downtown Tulsa OK | Mixed-Use & Commercial | UDGOK",
    description: "Downtown Tulsa construction company. UDGOK builds mixed-use developments, restaurant build-outs, office conversions, and medical facilities in Tulsa's urban core. Design-build with GMP pricing.",
    keywords: [
        "construction company downtown tulsa",
        "downtown tulsa construction",
        "commercial construction downtown tulsa",
        "contractor downtown tulsa ok",
        "restaurant construction downtown tulsa",
        "office construction downtown tulsa",
        "mixed use construction tulsa",
        "construction companies downtown tulsa ok",
        "downtown tulsa builder",
        "tulsa arts district construction",
    ],
    openGraph: {
        title: "Construction Company Downtown Tulsa | UDGOK",
        description: "Mixed-use, restaurant, office, and medical construction in Tulsa's downtown core and arts district.",
        url: "https://udgok.com/construction-company-downtown-tulsa",
    },
    alternates: { canonical: "https://udgok.com/construction-company-downtown-tulsa" },
};

export default function ConstructionCompanyDowntownTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Construction Company Downtown Tulsa"
                description="Downtown Tulsa construction company — mixed-use developments, restaurant build-outs, office conversions, and medical facilities in Tulsa's urban core."
                url="https://udgok.com/construction-company-downtown-tulsa"
            />
            <ServicePage
                label="Downtown Tulsa"
                title="Construction Company in Downtown Tulsa, Oklahoma"
                description="Mixed-use developments, restaurant build-outs, office conversions, and medical facilities in Tulsa's urban core and arts district — 15+ projects delivered."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Construction company Downtown Tulsa — UDGOK"
                tldr="UDGOK has completed 15+ construction projects in downtown Tulsa, including mixed-use developments, restaurant build-outs in the Tulsa Arts District, office conversions in historic buildings, and medical facilities. Downtown projects require navigation of City of Tulsa urban core permitting, ADA compliance in multi-story buildings, structural analysis of existing buildings for adaptive reuse, and coordination with downtown parking and traffic management. UDGOK handles the full scope under design-build contracts with GMP pricing."
                intro="Downtown Tulsa is Oklahoma's densest construction environment. Every project involves multi-story logistics, limited site access, coordination with the city's downtown management authority, and adherence to urban design guidelines. UDGOK thrives in this complexity — we've built restaurants, offices, medical clinics, and mixed-use projects across the Blue Dome District, Arts District, East Village, and the downtown core."
                stats={[
                    { n: "15+", l: "Downtown Projects" },
                    { n: "Multi-Story", l: "Urban Expertise" },
                    { n: "Arts Dist", l: "& Blue Dome" },
                    { n: "GMP", l: "Pricing Model" },
                ]}
                features={[
                    { icon: "🏙️", title: "Mixed-Use Developments", desc: "Ground-floor retail with upper-floor office or residential. Complex MEP coordination, fire separation, and multi-tenant infrastructure in a single building." },
                    { icon: "🍽️", title: "Restaurant & Hospitality", desc: "Restaurant build-outs in the Arts District and Blue Dome District — commercial kitchens, rooftop bars, and entertainment venues with complex code requirements." },
                    { icon: "🏢", title: "Office Conversions", desc: "Adaptive reuse of historic downtown buildings into modern office space. Structural analysis, facade preservation, and complete interior rebuild." },
                    { icon: "🏥", title: "Medical Facilities", desc: "Medical and dental clinics in downtown multi-story buildings. Elevator access, ADA compliance, and specialized MEP in existing structures." },
                    { icon: "🔧", title: "Tenant Improvements", desc: "Fast-track TI in downtown commercial buildings. We coordinate with building management, existing tenants, and the City of Tulsa for efficient delivery." },
                    { icon: "📋", title: "Urban Core Permitting", desc: "Navigation of downtown-specific zoning, historic district guidelines, parking requirements, and urban design standards." },
                ]}
                faqs={[
                    { q: "How much does construction cost in downtown Tulsa?", a: "Downtown Tulsa construction costs tend to be 10–20% higher than suburban projects due to access constraints, multi-story logistics, and historic building requirements. Restaurant build-outs run $175–$400/sf. Office conversions cost $90–$200/sf. Medical offices cost $200–$400/sf." },
                    { q: "Does UDGOK build in the Tulsa Arts District?", a: "Yes. UDGOK has completed multiple projects in the Tulsa Arts District, Blue Dome District, and East Village. We understand the unique permitting, zoning, and design requirements of these downtown sub-districts." },
                    { q: "What challenges exist with downtown Tulsa construction?", a: "Downtown challenges include: limited staging area, no laydown yard, multi-story material hoisting, coordination with active businesses and pedestrian traffic, parking limitations for workers, older utility infrastructure, and historic building structural constraints. UDGOK mitigates these through detailed pre-construction logistics planning." },
                    { q: "Can UDGOK renovate historic buildings downtown?", a: "Yes. UDGOK has experience with adaptive reuse of historic and mid-century buildings in downtown Tulsa. We work with structural engineers to assess existing conditions, coordinate with the Tulsa Preservation Commission, and design renovations that preserve character while meeting modern code requirements." },
                ]}
                cta="Start Your Downtown Project →"
            />
        </>
    );
}
