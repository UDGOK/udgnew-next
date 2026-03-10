import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Construction Company North Tulsa OK | Commercial & Community | UDGOK",
    description: "North Tulsa construction company. UDGOK builds commercial, medical, retail, and community facilities across North Tulsa. Design-build with GMP pricing. Free estimates within 48 hours.",
    keywords: [
        "construction company north tulsa",
        "north tulsa construction",
        "commercial construction north tulsa",
        "contractor north tulsa ok",
        "construction companies north tulsa ok",
        "north tulsa builder",
        "general contractor north tulsa",
        "medical construction north tulsa ok",
        "retail construction north tulsa",
        "community construction tulsa",
    ],
    openGraph: {
        title: "Construction Company North Tulsa | UDGOK",
        description: "Commercial, medical, retail, and community construction across North Tulsa.",
        url: "https://udgok.com/construction-company-north-tulsa",
    },
    alternates: { canonical: "https://udgok.com/construction-company-north-tulsa" },
};

export default function ConstructionCompanyNorthTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Construction Company North Tulsa"
                description="North Tulsa construction company — commercial, medical, retail, and community facilities."
                url="https://udgok.com/construction-company-north-tulsa"
            />
            <ServicePage
                label="North Tulsa"
                title="Construction Company in North Tulsa, Oklahoma"
                description="Commercial, medical, retail, and community construction across North Tulsa — design-build delivery with GMP pricing."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Construction company North Tulsa — UDGOK"
                tldr="UDGOK provides commercial construction services across North Tulsa, including medical offices, retail spaces, convenience stores, community facilities, and tenant improvements. North Tulsa is experiencing revitalization with new commercial development along North Peoria, North Lewis, and the 36th Street North corridor. UDGOK's design-build approach provides budget certainty through Guaranteed Maximum Price (GMP) contracts and compresses schedules by 20–30%."
                intro="North Tulsa is experiencing a construction renaissance. New commercial developments, community health clinics, retail centers, and mixed-use projects are transforming the area's commercial corridors. UDGOK is proud to contribute to this revitalization with quality construction that meets the unique needs of North Tulsa's communities and businesses."
                stats={[
                    { n: "Design-Build", l: "Delivery Method" },
                    { n: "GMP", l: "Guaranteed Pricing" },
                    { n: "20–30%", l: "Faster Schedules" },
                    { n: "Tulsa", l: "Based & Operated" },
                ]}
                features={[
                    { icon: "🏥", title: "Medical & Community Health", desc: "Community health clinics, medical offices, and wellness centers. ADA-compliant, accessible facilities designed for community needs." },
                    { icon: "🏬", title: "Retail Construction", desc: "Retail build-outs, convenience stores, and service-oriented commercial spaces along North Tulsa's commercial corridors." },
                    { icon: "🏗️", title: "Ground-Up Commercial", desc: "New construction on infill and redevelopment sites. We navigate brownfield considerations, demolition, and site preparation." },
                    { icon: "🔨", title: "Tenant Improvements", desc: "Interior renovations and build-outs in existing commercial buildings. Fast-track delivery to minimize tenant downtime." },
                    { icon: "🏢", title: "Mixed-Use Development", desc: "Multi-use buildings with ground-floor retail and upper-floor office or community space. Complex program coordination under one contract." },
                    { icon: "📋", title: "Community Partnership", desc: "UDGOK works with community development organizations, non-profits, and local government on projects that serve North Tulsa's revitalization." },
                ]}
                faqs={[
                    { q: "Does UDGOK build in North Tulsa?", a: "Yes. UDGOK provides full commercial construction services in North Tulsa, including medical offices, retail spaces, convenience stores, community facilities, and tenant improvements. We serve the entire North Tulsa area from downtown north to Owasso." },
                    { q: "What types of projects is UDGOK building in North Tulsa?", a: "North Tulsa projects include community health clinics, retail build-outs, convenience stores, mixed-use developments, and tenant improvements. The area is seeing significant new commercial investment along key corridors." },
                    { q: "How much does commercial construction cost in North Tulsa?", a: "Commercial construction costs in North Tulsa are comparable to the broader Tulsa metro: $80–$180/sf for retail, $60–$150/sf for office, and $180–$350/sf for medical. Site-specific factors like existing conditions and utility connections affect final pricing." },
                    { q: "Does UDGOK offer GMP contracts for North Tulsa projects?", a: "Yes. UDGOK offers Guaranteed Maximum Price (GMP) contracts for all projects, including North Tulsa. GMP provides budget certainty — if costs come in below the GMP, savings are shared with the owner." },
                ]}
                cta="Start Your North Tulsa Project →"
            />
        </>
    );
}
