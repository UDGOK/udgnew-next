import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Retail Construction Tulsa OK | Store & Restaurant Build-Outs | UDGOK",
    description: "Retail construction contractor in Tulsa, Oklahoma. UDGOK builds store fit-outs, restaurant spaces, strip center tenant improvements, and retail renovations. 500K+ SF delivered.",
    keywords: [
        "retail construction Tulsa",
        "retail construction Tulsa OK",
        "retail contractor Tulsa Oklahoma",
        "store construction Tulsa",
        "retail build-out Tulsa",
        "retail tenant improvement Tulsa",
        "retail renovation Tulsa OK",
        "storefront construction Tulsa",
        "retail space build-out Oklahoma",
        "retail interior construction Tulsa",
        "strip center construction Tulsa",
        "retail general contractor Tulsa",
    ],
    openGraph: {
        title: "Retail Construction Tulsa OK | 500K+ SF | UDGOK",
        description: "Store fit-outs, restaurant build-outs, and retail tenant improvements in Tulsa, Oklahoma.",
        url: "https://udgok.com/retail-construction-tulsa",
        type: "website",
    },
    alternates: { canonical: "https://udgok.com/retail-construction-tulsa" },
};

export default function RetailConstructionTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Retail Construction Tulsa"
                description="Retail construction contractor in Tulsa, Oklahoma. Store fit-outs, strip centers, restaurant build-outs, and retail renovations."
                url="https://udgok.com/retail-construction-tulsa"
            />
            <ServicePage
                label="Retail Construction"
                title="Retail Construction in Tulsa, Oklahoma"
                description="Store fit-outs, restaurant build-outs, strip center TI, and retail renovations built to open on schedule and on budget."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Retail construction Tulsa Oklahoma — UDGOK"
                tldr="UDGOK has delivered 500,000+ square feet of retail construction in the Tulsa metro, from boutique storefront fit-outs to national brand rollouts and multi-tenant strip centers. Retail tenant improvements in Tulsa cost $80–$180/sq ft depending on use type. Restaurant retail build-outs run $150–$350/sq ft. We handle landlord coordination, ADA compliance, City of Tulsa permitting, and fast-track schedules that get retailers open before peak season."
                intro="Retail construction demands speed, precision, and a builder who understands that every day past your opening date is lost revenue. UDGOK has built retail spaces for independent shops, national franchises, and multi-tenant developers across the Tulsa market. We deliver stores that are code-compliant, ADA-accessible, and ready for business."
                stats={[
                    { n: "500K+", l: "Retail SF Delivered" },
                    { n: "50+", l: "Retail Projects" },
                    { n: "Tulsa", l: "Metro Coverage" },
                    { n: "Fast", l: "Track Delivery" },
                ]}
                features={[
                    { icon: "🏬", title: "Store Fit-Outs", desc: "Complete interior build-outs from shell condition — framing, MEP, finishes, fixtures, and signage. Turnkey store delivery." },
                    { icon: "🍽️", title: "Restaurant Retail", desc: "Restaurant build-outs inside retail centers with commercial kitchens, exhaust systems, and health department compliance." },
                    { icon: "🏪", title: "Strip Center TI", desc: "Multi-tenant strip center construction and tenant improvements. Bay-by-bay delivery with coordinated utility infrastructure." },
                    { icon: "🛍️", title: "National Brand Rollouts", desc: "Prototype-compliant construction for national retail brands. We match corporate specs, fixtures, and brand standards exactly." },
                    { icon: "♿", title: "ADA Compliance", desc: "Every retail space we build meets ADA accessibility standards — entrances, restrooms, counter heights, and path of travel." },
                    { icon: "📋", title: "Fast-Track Permitting", desc: "Established relationships with City of Tulsa DBCA for expedited plan review and inspection scheduling." },
                ]}
                faqs={[
                    { q: "How much does retail construction cost in Tulsa?", a: "Retail tenant improvements in Tulsa cost $80–$180 per square foot for standard build-outs. High-end boutiques and restaurant retail spaces run higher at $150–$350/sq ft. A 2,000 sq ft retail store fit-out typically costs $160K–$360K including MEP, finishes, and fixtures." },
                    { q: "How long does a retail build-out take in Tulsa?", a: "Standard retail tenant improvements take 6–10 weeks. Fast-track retail projects with standardized designs can be completed in 4–6 weeks. UDGOK coordinates with landlords and the City of Tulsa to overlap permitting with procurement." },
                    { q: "Does UDGOK work with retail landlords?", a: "Yes. We coordinate construction with landlords, property managers, and leasing agents. We review lease requirements, handle landlord approvals, and ensure TI work meets the property's building standards and insurance requirements." },
                    { q: "Can UDGOK build national retail brand stores?", a: "Yes. We have experience building to national retail brand prototypes, matching corporate specifications for layout, fixtures, finishes, and signage. We work directly with brand representatives to ensure compliance." },
                ]}
                cta="Build Your Retail Space →"
            />
        </>
    );
}
