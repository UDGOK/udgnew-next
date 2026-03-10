import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Construction Company Midtown Tulsa OK | Cherry Street & Brookside | UDGOK",
    description: "Midtown Tulsa construction company. UDGOK builds boutique retail, medical offices, restaurants, and office renovations along Cherry Street, Brookside, and the Midtown corridor. 20+ projects delivered.",
    keywords: [
        "construction company midtown tulsa",
        "midtown tulsa construction",
        "cherry street construction tulsa",
        "brookside construction tulsa",
        "contractor midtown tulsa ok",
        "restaurant construction cherry street",
        "commercial construction midtown tulsa",
        "boutique retail construction tulsa",
        "construction companies midtown tulsa ok",
        "brookside builder tulsa",
    ],
    openGraph: {
        title: "Construction Company Midtown Tulsa | Cherry Street & Brookside | UDGOK",
        description: "Boutique retail, medical, restaurant, and office construction in Tulsa's Midtown, Cherry Street, and Brookside districts.",
        url: "https://udgok.com/construction-company-midtown-tulsa",
    },
    alternates: { canonical: "https://udgok.com/construction-company-midtown-tulsa" },
};

export default function ConstructionCompanyMidtownTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Construction Company Midtown Tulsa"
                description="Midtown Tulsa construction company specializing in boutique retail, medical, restaurant, and office construction along Cherry Street and Brookside."
                url="https://udgok.com/construction-company-midtown-tulsa"
            />
            <ServicePage
                label="Midtown Tulsa"
                title="Construction Company in Midtown Tulsa, Oklahoma"
                description="Boutique retail, medical offices, restaurants, and office renovations along Cherry Street, Brookside, and the Midtown corridor — 20+ projects delivered."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Construction company Midtown Tulsa — UDGOK"
                tldr="UDGOK has delivered 20+ construction projects in Tulsa's Midtown, Cherry Street, and Brookside districts. These dense urban corridors require creative site logistics, sensitivity to neighborhood character, and coordination with adjacent businesses during construction. We specialize in boutique retail build-outs, restaurant construction (commercial kitchen, hood, grease trap), medical and dental offices, and adaptive reuse of existing buildings. Costs range from $80–$350/sf depending on building type."
                intro="Midtown Tulsa construction is different. Projects are smaller, space is tighter, parking is limited, and the neighborhood has strong opinions about aesthetics. UDGOK understands these constraints — we've built restaurants, retail shops, medical offices, and office renovations across Cherry Street, Brookside, and the 15th-to-31st Street corridor for over a decade."
                stats={[
                    { n: "20+", l: "Midtown Projects" },
                    { n: "Cherry St", l: "Brookside Expertise" },
                    { n: "Boutique", l: "Urban Infill Focus" },
                    { n: "48hr", l: "Estimate Turnaround" },
                ]}
                features={[
                    { icon: "🍽️", title: "Restaurant Construction", desc: "Full commercial kitchen build-outs — exhaust hoods, grease traps, walk-in coolers, front-of-house finishes. We build restaurants that pass health inspections on the first visit." },
                    { icon: "🛍️", title: "Boutique Retail", desc: "Small-format retail build-outs that match the character of Cherry Street and Brookside. Custom storefronts, specialty interiors, and unique finishes." },
                    { icon: "🏥", title: "Medical & Dental Offices", desc: "Medical and dental clinics in Midtown professional buildings. Specialized plumbing, HVAC, and medical gas in multi-tenant environments." },
                    { icon: "🏢", title: "Office Renovations", desc: "Adaptive reuse and interior renovations in Midtown's historic and mid-century commercial buildings. We navigate existing conditions and structural constraints." },
                    { icon: "🔨", title: "Urban Infill Construction", desc: "Ground-up construction on tight infill lots. We manage construction logistics, adjacent business coordination, and limited staging areas." },
                    { icon: "📋", title: "Historic District Compliance", desc: "Navigation of historic district guidelines and neighborhood overlay requirements for projects in designated historic areas." },
                ]}
                faqs={[
                    { q: "How much does a restaurant build-out cost on Cherry Street?", a: "Restaurant construction on Cherry Street and Brookside ranges from $150–$350/sf. A 2,000 SF restaurant with full commercial kitchen costs $300K–$700K. Costs are higher in Midtown due to tighter access, older infrastructure, and character-sensitive finishes." },
                    { q: "Can UDGOK build in Tulsa's historic districts?", a: "Yes. UDGOK has experience navigating historic district guidelines and neighborhood overlay requirements in Midtown and Brookside. We coordinate with the Tulsa Preservation Commission when projects fall within designated historic areas." },
                    { q: "What are the challenges of building in Midtown Tulsa?", a: "Midtown construction challenges include: limited staging and laydown area, tight site access, coordination with adjacent active businesses, older underground utilities, parking constraints during construction, and neighborhood aesthetic expectations. UDGOK mitigates these through careful phasing, off-hours deliveries, and proactive neighbor communication." },
                    { q: "Does UDGOK build on Cherry Street and Brookside?", a: "Yes. UDGOK has completed 20+ projects in Midtown Tulsa, including restaurants, retail build-outs, medical offices, and office renovations along Cherry Street, Brookside (Peoria Ave / 33rd–41st), and the broader Midtown corridor." },
                ]}
                cta="Start Your Midtown Project →"
            />
        </>
    );
}
