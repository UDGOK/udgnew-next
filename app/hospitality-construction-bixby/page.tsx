import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Hospitality Construction Bixby OK | Hotels & Restaurants | UDGOK",
    description: "Hospitality construction contractor in Bixby, Oklahoma. UDGOK builds hotels, restaurants, QSR, event venues, and food service facilities in one of Tulsa's fastest-growing suburbs.",
    keywords: [
        "hospitality construction Bixby",
        "hospitality construction Bixby OK",
        "hotel construction Bixby Oklahoma",
        "restaurant construction Bixby",
        "restaurant build-out Bixby OK",
        "QSR construction Bixby Oklahoma",
        "food service construction Bixby",
        "hospitality contractor Bixby",
        "hotel renovation Bixby OK",
        "commercial kitchen construction Bixby",
        "event venue construction Bixby",
        "hospitality builder Bixby Oklahoma",
    ],
    openGraph: {
        title: "Hospitality Construction Bixby OK | UDGOK",
        description: "Hotels, restaurants, QSR, and food service construction in Bixby, Oklahoma.",
        url: "https://udgok.com/hospitality-construction-bixby",
        type: "website",
    },
    alternates: { canonical: "https://udgok.com/hospitality-construction-bixby" },
};

export default function HospitalityBixbyPage() {
    return (
        <>
            <ServiceJsonLd
                name="Hospitality Construction Bixby"
                description="Hospitality construction contractor in Bixby, Oklahoma — hotels, restaurants, QSR, and food service facilities."
                url="https://udgok.com/hospitality-construction-bixby"
            />
            <ServicePage
                label="Hospitality Construction"
                title="Hospitality Construction in Bixby, Oklahoma"
                description="Hotels, restaurants, QSR drive-throughs, food service kitchens, and event venues built to hospitality-grade standards in Bixby."
                imageSrc="/images/ai_tulsa_skyline_architecture.png"
                imageAlt="Hospitality construction Bixby Oklahoma — UDGOK"
                tldr="UDGOK builds hospitality projects in Bixby, Oklahoma — one of the Tulsa metro's fastest-growing cities with 28,000+ residents and heavy commercial development along South Memorial Drive. Hospitality construction in Bixby ranges from $150–$350/sq ft for full-service restaurants and $120–$250/sq ft for QSR and fast-casual. We handle kitchen exhaust, grease interceptors, walk-in coolers, ADA compliance, health department requirements, and commercial hood systems."
                intro="Bixby's explosive population growth and high household incomes make it a prime market for hospitality development. UDGOK builds restaurants, quick-service drive-throughs, food halls, and hospitality venues along Bixby's busiest commercial corridors. We know the local permitting process and deliver hospitality spaces that pass health and fire inspections on the first try."
                stats={[
                    { n: "15+", l: "Hospitality Projects" },
                    { n: "Bixby", l: "Market Experts" },
                    { n: "QSR", l: "& Full-Service" },
                    { n: "Fast", l: "Permit Process" },
                ]}
                features={[
                    { icon: "🍽️", title: "Restaurant Construction", desc: "Full-service and fast-casual restaurant build-outs with commercial kitchens, bar areas, and patio dining." },
                    { icon: "🏨", title: "Hotel & Lodging", desc: "Select-service hotels, boutique lodging, and extended-stay properties built to brand standards." },
                    { icon: "🍔", title: "QSR & Drive-Through", desc: "Quick-service restaurants with drive-through lanes, digital menu boards, and high-efficiency kitchen lines." },
                    { icon: "🔥", title: "Commercial Kitchen Build-Out", desc: "Type I & II exhaust hoods, Ansul systems, grease interceptors, walk-in coolers/freezers, and commercial plumbing." },
                    { icon: "🎉", title: "Event Venues", desc: "Wedding venues, banquet halls, and entertainment spaces with AV infrastructure and flexible layouts." },
                    { icon: "📋", title: "Health & Fire Compliance", desc: "Built to pass Tulsa County Health Department and Bixby Fire Marshal inspections on the first visit." },
                ]}
                faqs={[
                    { q: "How much does restaurant construction cost in Bixby?", a: "Full-service restaurant construction in Bixby costs $150–$350 per square foot depending on kitchen complexity and interior finishes. A 2,500 sq ft fast-casual restaurant typically costs $375K–$625K. QSR with drive-through runs $120–$250/sq ft." },
                    { q: "Does UDGOK build commercial kitchens in Bixby?", a: "Yes. We install Type I and Type II exhaust hoods, Ansul fire suppression, grease interceptors, walk-in coolers and freezers, three-compartment sinks, and all commercial kitchen plumbing. Every kitchen we build passes Tulsa County Health Department inspection." },
                    { q: "How fast can you build a restaurant in Bixby?", a: "A typical restaurant build-out (2,000–4,000 sq ft) takes 10–16 weeks from permit to opening. QSR projects with standardized designs can be completed in 8–12 weeks. UDGOK fast-tracks permitting with the City of Bixby." },
                    { q: "Does UDGOK handle Bixby hospitality permits?", a: "Yes. We manage all permitting including City of Bixby building permits, Tulsa County Health Department food service permits, fire marshal reviews, and ODEQ grease trap compliance. Our established relationships with local officials streamline approvals." },
                ]}
                cta="Build Your Hospitality Project →"
            />
        </>
    );
}
