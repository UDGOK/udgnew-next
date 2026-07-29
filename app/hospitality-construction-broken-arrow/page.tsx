import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Hospitality Construction Broken Arrow OK",
    description: "Hospitality construction contractor serving Broken Arrow, Oklahoma. UDGOK builds hotels, restaurants, QSR.",
    openGraph: {
      images: [{ url: "https://www.udgok.com/images/og-default.png", width: 1200, height: 630, alt: "UDGOK — Medical & Dental Design-Build Construction in Tulsa, Oklahoma" }],
        title: "Hospitality Construction Broken Arrow OK | UDGOK",
        description: "Hotels, restaurants, QSR, and food service construction throughout Broken Arrow, Oklahoma.",
        url: "https://www.udgok.com/hospitality-construction-broken-arrow",
        type: "website",
    },
    alternates: { canonical: "https://www.udgok.com/hospitality-construction-broken-arrow" },
};

export default function HospitalityBrokenArrowPage() {
    
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Hospitality Construction in Broken Arrow, Oklahoma", url: "https://www.udgok.com/hospitality-construction-broken-arrow" }
  ];
  const PAGE_FAQS = [
                    { q: "How much does hospitality construction cost in Broken Arrow?", a: "Restaurant construction in Broken Arrow costs $150–$350/sq ft for full-service and $120–$250/sq ft for QSR. Hotel construction runs $150–$300/sq ft depending on brand and service level. Broken Arrow's competitive land costs make it favorable compared to Tulsa proper for ground-up hospitality development." },
                    { q: "Where are the best locations for hospitality in Broken Arrow?", a: "The BA Expressway corridor is the highest-traffic commercial zone. The Rose District offers walkable dining and entertainment. Kenosha Street and the Elm Place corridor provide growing residential neighborhoods with demand for neighborhood restaurants and QSR." },
                    { q: "Does UDGOK build to hotel brand standards?", a: "Yes. We have experience building to IHG, Marriott, and Hilton brand prototype specifications. We coordinate with brand representatives for design compliance, fixtures, and PIP (Property Improvement Plan) requirements." },
                    { q: "How long does restaurant permitting take in Broken Arrow?", a: "Broken Arrow Development Services typically processes commercial building permits in 2–3 weeks. Health department and fire marshal reviews run concurrently. UDGOK manages all three approval tracks simultaneously to minimize schedule impact." },
                ];
  return (
        <>
            
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
                name="Hospitality Construction Broken Arrow"
                description="Hospitality construction contractor in Broken Arrow, Oklahoma — hotels, restaurants, QSR, and event venues."
                url="https://www.udgok.com/hospitality-construction-broken-arrow"
            />
            <ServicePage
                label="Hospitality Construction"
                title="Hospitality Construction in Broken Arrow, Oklahoma"
                description="Hotels, restaurants, QSR, food service facilities, and event venues built along the BA Expressway and Rose District corridors."
                imageSrc="/images/ai_tulsa_skyline_architecture.png"
                imageAlt="Hospitality construction Broken Arrow Oklahoma — UDGOK"
                tldr="UDGOK delivers hospitality construction in Broken Arrow, Oklahoma — the state's 4th largest city with 115,000+ residents and booming commercial development. Broken Arrow's BA Expressway, Rose District, and Kenosha corridors offer prime hospitality locations. Restaurant construction in Broken Arrow costs $150–$350/sq ft for full-service and $120–$250/sq ft for QSR/fast-casual. We handle commercial kitchens, hotel common areas, health compliance, and brand-standard builds."
                intro="Broken Arrow's large population base and active dining scene make it one of the strongest hospitality markets in northeastern Oklahoma. UDGOK has built restaurants, drive-through QSR, food halls, and hotel renovations throughout Broken Arrow. From the Rose District's walkable dining to the high-traffic BA Expressway corridor, we deliver hospitality spaces that attract customers and pass inspections."
                stats={[
                    { n: "30+", l: "BA Projects" },
                    { n: "115K+", l: "Population Served" },
                    { n: "Rose", l: "District Builds" },
                    { n: "Local", l: "Permit Team" },
                ]}
                features={[
                    { icon: "🍽️", title: "Restaurant Construction", desc: "Full-service dining, bar, and patio construction in Broken Arrow's highest-traffic corridors. Custom kitchen and front-of-house builds." },
                    { icon: "🏨", title: "Hotel Construction", desc: "Select-service and extended-stay hotel builds along the BA Expressway and Broken Arrow turnpike interchanges." },
                    { icon: "🍔", title: "QSR & Drive-Through", desc: "Quick-service restaurants with drive-through lanes, digital ordering, and high-throughput kitchen systems." },
                    { icon: "🔥", title: "Commercial Kitchen", desc: "Exhaust hoods, Ansul suppression, grease interceptors, walk-in refrigeration, and health-compliant plumbing." },
                    { icon: "🎭", title: "Rose District Venues", desc: "Entertainment, dining, and event venue construction in Broken Arrow's walkable Rose District downtown." },
                    { icon: "📋", title: "BA Permits & Compliance", desc: "Full permitting management with Broken Arrow Development Services, health department, and fire marshal." },
                ]}
                faqs={PAGE_FAQS}
                cta="Build in Broken Arrow →"
            />
        </>
    );
}
