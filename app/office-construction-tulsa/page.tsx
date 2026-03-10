import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Office Construction Company Tulsa OK | Commercial Office Build-Outs | UDGOK",
    description: "Tulsa's top office construction company. UDGOK delivers commercial office buildouts, professional office spaces, corporate interiors, and tenant improvements across Tulsa and Oklahoma.",
    keywords: [
        "office construction company Tulsa",
        "office construction Tulsa OK",
        "commercial office buildouts OK",
        "commercial office buildouts Oklahoma",
        "office build-out Tulsa",
        "office contractor Tulsa Oklahoma",
        "professional office construction Tulsa",
        "corporate office build-out Tulsa",
        "office tenant improvement Tulsa OK",
        "office renovation Tulsa",
        "office space construction Tulsa",
        "commercial office contractor Oklahoma",
    ],
    openGraph: {
        title: "Office Construction Company Tulsa OK | UDGOK",
        description: "Commercial office buildouts, professional offices, and tenant improvements in Tulsa, Oklahoma.",
        url: "https://udgok.com/office-construction-tulsa",
        type: "website",
    },
    alternates: { canonical: "https://udgok.com/office-construction-tulsa" },
};

export default function OfficeConstructionTulsaPage() {
    return (
        <>
            <ServiceJsonLd
                name="Office Construction Company Tulsa"
                description="Commercial office construction company in Tulsa, Oklahoma — professional offices, corporate interiors, and commercial office buildouts."
                url="https://udgok.com/office-construction-tulsa"
            />
            <ServicePage
                label="Office Construction"
                title="Office Construction Company in Tulsa, Oklahoma"
                description="Professional offices, corporate interiors, coworking spaces, and commercial office buildouts — Tulsa's most experienced office construction contractor."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Office construction company Tulsa Oklahoma — UDGOK"
                tldr="UDGOK is Tulsa's leading office construction company with 100+ commercial office buildouts delivered across the metro area. We build professional offices for law firms, medical practices, financial advisors, tech companies, and corporate tenants. Office build-out costs in Tulsa range from $80–$200/sq ft for standard professional offices and $150–$350/sq ft for medical office suites. We handle everything from interior demolition to move-in-ready delivery, including structured cabling, HVAC, ADA compliance, and custom millwork."
                intro="Whether you're a startup needing 1,500 square feet or a corporation planning a 50,000 sq ft campus, UDGOK builds office spaces that attract and retain talent. We know the Tulsa commercial real estate market, the landlords, the permitting process, and the subcontractors who deliver quality office interiors on tight timelines."
                stats={[
                    { n: "100+", l: "Office Projects" },
                    { n: "All", l: "Office Types" },
                    { n: "$80-350", l: "Per SF Range" },
                    { n: "Tulsa", l: "Metro Coverage" },
                ]}
                features={[
                    { icon: "🏢", title: "Corporate Offices", desc: "Executive offices, open-plan layouts, board rooms, and employee amenity spaces built to corporate standards." },
                    { icon: "🏥", title: "Medical Office Suites", desc: "Exam rooms, procedure rooms, medical-grade HVAC and plumbing, and ADA-compliant patient flow design." },
                    { icon: "⚖️", title: "Professional Services", desc: "Law firms, CPA offices, financial advisory, and insurance offices with client-facing finishes and private meeting spaces." },
                    { icon: "💻", title: "Tech & Coworking", desc: "High-density power and data, collaboration zones, phone rooms, and flexible layouts for modern workstyles." },
                    { icon: "🔌", title: "Technology Infrastructure", desc: "Cat6A cabling, server rooms, AV conference systems, access control, and wireless coverage planning." },
                    { icon: "📋", title: "Tulsa Permits & TI Coordination", desc: "Landlord coordination, City of Tulsa DBCA permitting, and lease requirement compliance for all office TI projects." },
                ]}
                faqs={[
                    { q: "How much does office construction cost in Tulsa?", a: "Standard professional office build-outs in Tulsa cost $80–$200 per square foot. Medical office suites run $150–$350/sq ft. A 5,000 sq ft professional office typically costs $400K–$1M depending on finishes and technology infrastructure. UDGOK provides detailed estimates before construction begins." },
                    { q: "What is included in a commercial office buildout?", a: "A complete office buildout includes demolition (if needed), framing, drywall, HVAC, electrical, plumbing, fire sprinkler modifications, flooring, painting, millwork, structured cabling, and final cleaning. UDGOK delivers move-in-ready offices with all systems tested and operational." },
                    { q: "How long does an office build-out take in Tulsa?", a: "Standard office tenant improvements take 6–12 weeks. Medical office suites take 8–16 weeks due to specialized infrastructure. Large corporate offices (10,000+ sq ft) take 12–20 weeks. UDGOK overlaps permitting with procurement to compress schedules." },
                    { q: "Does UDGOK coordinate with Tulsa landlords?", a: "Yes. We work directly with landlords and property managers on TI allowances, building standards, insurance requirements, and construction access. Our team has established relationships with major Tulsa commercial property owners." },
                ]}
                cta="Start Your Office Build-Out →"
            />
        </>
    );
}
