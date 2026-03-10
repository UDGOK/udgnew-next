import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Office Construction Bixby OK | Commercial Office Build-Outs | UDGOK",
    description: "Office construction contractor in Bixby, Oklahoma. UDGOK builds professional office spaces, medical offices, coworking facilities, and commercial office build-outs in Bixby.",
    keywords: [
        "office construction Bixby",
        "office construction Bixby OK",
        "office build-out Bixby Oklahoma",
        "commercial office construction Bixby",
        "professional office build-out Bixby",
        "medical office construction Bixby",
        "office contractor Bixby OK",
        "office renovation Bixby Oklahoma",
        "office space build-out Bixby",
        "office tenant improvement Bixby",
        "coworking space construction Bixby",
        "office building contractor Bixby OK",
    ],
    openGraph: {
        title: "Office Construction Bixby OK | UDGOK",
        description: "Professional office spaces, medical offices, and commercial office build-outs in Bixby, Oklahoma.",
        url: "https://udgok.com/office-construction-bixby",
        type: "website",
    },
    alternates: { canonical: "https://udgok.com/office-construction-bixby" },
};

export default function OfficeConstructionBixbyPage() {
    return (
        <>
            <ServiceJsonLd
                name="Office Construction Bixby"
                description="Office construction contractor in Bixby, Oklahoma — professional offices, medical offices, and commercial office build-outs."
                url="https://udgok.com/office-construction-bixby"
            />
            <ServicePage
                label="Office Construction"
                title="Office Construction in Bixby, Oklahoma"
                description="Professional offices, medical office suites, coworking spaces, and commercial office build-outs in Bixby — Tulsa's fastest-growing suburb."
                imageSrc="/images/ai_tulsa_skyline_architecture.png"
                imageAlt="Office construction Bixby Oklahoma — UDGOK"
                tldr="UDGOK builds professional office spaces in Bixby, Oklahoma — a city with 28,000+ residents and rapid commercial development along South Memorial Drive and Lynn Lane. Office construction in Bixby costs $100–$250/sq ft for professional offices and $150–$350/sq ft for medical office suites. We handle demolition, framing, MEP, technology infrastructure, and interior finishes. Bixby offers competitive lease rates ($14–$22/sq ft NNN) compared to Tulsa proper, making it attractive for professional tenants."
                intro="Bixby's population growth has driven strong demand for professional office space along the South Memorial and Lynn Lane corridors. UDGOK builds offices for law firms, insurance agencies, financial advisors, tech companies, and medical practices that serve Bixby's growing community. We deliver move-in-ready office environments with modern technology infrastructure."
                stats={[
                    { n: "15+", l: "Bixby Office Projects" },
                    { n: "Medical", l: "& Professional" },
                    { n: "$100-250", l: "Per SF Range" },
                    { n: "Local", l: "Permit Experts" },
                ]}
                features={[
                    { icon: "🏢", title: "Professional Office", desc: "Law firms, financial advisors, insurance agencies, and corporate offices with executive finishes and conference facilities." },
                    { icon: "🏥", title: "Medical Office Suites", desc: "Exam rooms, procedure rooms, medical-grade plumbing, and ADA-compliant patient flow in Bixby medical office buildings." },
                    { icon: "💻", title: "Tech & Coworking", desc: "Open-plan layouts, high-density structured cabling, conference rooms with AV, and flexible workspace configurations." },
                    { icon: "🔌", title: "Technology Infrastructure", desc: "Cat6A cabling, server closets, wireless access point planning, and conference room AV systems throughout." },
                    { icon: "♿", title: "ADA Compliance", desc: "Fully ADA-compliant office spaces including accessible entrances, restrooms, and path of travel throughout." },
                    { icon: "📋", title: "Bixby Permits", desc: "Efficient permitting with the City of Bixby — we have established relationships with local development services staff." },
                ]}
                faqs={[
                    { q: "How much does office construction cost in Bixby?", a: "Professional office build-outs in Bixby cost $100–$250 per square foot depending on finishes and infrastructure. Medical office suites run $150–$350/sq ft due to specialized plumbing, exam room requirements, and ADA compliance. A 3,000 sq ft professional office typically costs $300K–$750K." },
                    { q: "Is Bixby a good location for a professional office?", a: "Yes. Bixby offers competitive lease rates ($14–$22/sq ft NNN) compared to Tulsa's $18–$28/sq ft. The city's high household incomes, growing population, and proximity to south Tulsa make it an excellent location for professional services, medical practices, and tech companies." },
                    { q: "How long does office construction take in Bixby?", a: "A standard office build-out (2,000–5,000 sq ft) takes 6–10 weeks from permit to move-in. Medical office suites take 8–14 weeks due to specialized infrastructure. UDGOK fast-tracks Bixby permitting through established city relationships." },
                    { q: "Does UDGOK handle office technology infrastructure?", a: "Yes. We install Cat6A structured cabling, server closets with proper cooling, wireless access point placement, conference room AV systems, and security infrastructure. Our office builds are move-in ready from day one." },
                ]}
                cta="Build Your Bixby Office →"
            />
        </>
    );
}
