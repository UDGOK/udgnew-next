import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Commercial Contractor Tulsa OK | Office, Retail & TI | UDGOK",
    description: "Tulsa's top commercial contractor. UDGOK delivers tenant improvements, ground-up commercial buildings, office build-outs, restaurant construction, and retail spaces across Tulsa, Oklahoma. 100+ projects delivered.",
    keywords: [
        "commercial contractor Tulsa",
        "commercial contractor Tulsa OK",
        "commercial construction company Tulsa",
        "commercial builder Tulsa Oklahoma",
        "tenant improvement contractor Tulsa",
        "office build-out Tulsa OK",
        "restaurant construction Tulsa",
        "commercial renovation Tulsa",
        "commercial general contractor Tulsa",
        "Tulsa commercial construction company",
        "commercial building contractor Oklahoma",
        "commercial interior build-out Tulsa",
    ],
    openGraph: {
        title: "Commercial Contractor Tulsa OK | 100+ Projects | UDGOK",
        description: "Tenant improvements, ground-up commercial buildings, office build-outs, and restaurant construction across Tulsa, Oklahoma.",
        url: "https://udgok.com/commercial-contractor-tulsa",
        type: "website",
    },
    alternates: { canonical: "https://udgok.com/commercial-contractor-tulsa" },
};

export default function CommercialContractorTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Commercial Contractor Tulsa"
                description="Commercial general contractor in Tulsa, Oklahoma. Tenant improvements, ground-up builds, office and restaurant construction."
                url="https://udgok.com/commercial-contractor-tulsa"
            />
            <ServicePage
                label="Commercial Construction"
                title="Commercial Contractor in Tulsa, Oklahoma"
                description="Tenant improvements, ground-up commercial buildings, office build-outs, and restaurant construction across Tulsa — 100+ projects delivered."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Commercial contractor Tulsa Oklahoma — UDGOK"
                tldr="UDGOK is one of Tulsa's most experienced commercial contractors, with 100+ delivered commercial projects across office build-outs, retail spaces, restaurant construction, and ground-up commercial buildings. We handle everything from small tenant improvements ($80–$180/sq ft) to large-scale ground-up commercial buildings ($120–$220/sq ft). Based in Tulsa at 7739 E 38th St, our team serves the entire Tulsa metro including downtown, midtown, south Tulsa, Broken Arrow, and Bixby."
                intro="From a 1,500 sq ft restaurant remodel to a 50,000 sq ft office campus, UDGOK has built commercial projects across every category in the Tulsa market. We know the Tulsa permitting process, local codes, and the best subcontractors for every trade — which translates into faster schedules and tighter budgets for our commercial clients."
                stats={[
                    { n: "100+", l: "Commercial Projects" },
                    { n: "500K+", l: "SF Delivered" },
                    { n: "Tulsa", l: "Based Team" },
                    { n: "All", l: "Commercial Types" },
                ]}
                features={[
                    { icon: "🏢", title: "Office Build-Outs", desc: "Professional office spaces from executive suites to open-plan coworking — structured cabling, HVAC, and custom millwork included." },
                    { icon: "🍽️", title: "Restaurant Construction", desc: "Kitchen exhaust hoods, grease traps, walk-in coolers, front-of-house finishes — we build restaurants that pass health inspections on the first visit." },
                    { icon: "🏬", title: "Retail Construction", desc: "Storefront build-outs, boutique interiors, and national brand rollouts. We match corporate prototype specs precisely." },
                    { icon: "🔨", title: "Tenant Improvements", desc: "Fast-track TI projects that get tenants open on time. We coordinate with landlords, architects, and the City of Tulsa from day one." },
                    { icon: "🏗️", title: "Ground-Up Commercial", desc: "Shell buildings, multi-tenant centers, and single-tenant commercial buildings from site work through CO." },
                    { icon: "📋", title: "Tulsa Permitting", desc: "Established relationships with the City of Tulsa DBCA for efficient plan review, permitting, and inspections." },
                ]}
                faqs={[
                    { q: "How much does commercial construction cost in Tulsa?", a: "Commercial tenant improvements in Tulsa cost $80–$180 per square foot depending on scope. Ground-up commercial buildings run $120–$220/sq ft. A 3,000 sq ft restaurant build-out typically costs $300K–$600K. UDGOK provides detailed line-item estimates before construction begins." },
                    { q: "How long does a commercial build-out take in Tulsa?", a: "Most commercial tenant improvements take 6–12 weeks. Restaurant build-outs with kitchen equipment take 10–16 weeks. Ground-up commercial buildings take 6–12 months. UDGOK's established subcontractor relationships in Tulsa help us maintain aggressive schedules." },
                    { q: "Does UDGOK handle Tulsa commercial building permits?", a: "Yes. We manage the entire permitting process with the City of Tulsa Department of Building and Code Administration (DBCA), including plan submission, review coordination, inspections, and certificate of occupancy." },
                    { q: "What types of commercial projects does UDGOK build in Tulsa?", a: "We build office spaces, restaurants, retail stores, medical offices, convenience stores, shopping centers, warehouses, and mixed-use developments. Our Tulsa portfolio includes 100+ commercial projects across every category." },
                ]}
                cta="Start Your Commercial Project →"
            />
        </>
    );
}
