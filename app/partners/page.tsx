import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Partners & Affiliations | UDGOK",
  description: "UDGOK's industry partnerships and professional affiliations. Members of AGC, ABC, and active participants in Tulsa's healthcare and commercial real estate community.",
  alternates: { canonical: "https://udgok.com/partners" },
};

export default function PartnersPage() {
  return (
    <ServicePage
      label="Industry"
      title="Partners & Affiliations"
      description="UDGOK builds within a highly vetted network of trusted partners — from professional associations to specialty subcontractors — to guarantee excellence on every deployment."
      imageSrc="/images/ai-dental-interior.png"
      imageAlt="Premium Dental Office by UDGOK"
      intro="We collaborate with leading architectural firms, MEP engineers, and specialty medical equipment vendors to deliver truly integrated design-build experiences. Our close affiliations with standards organizations guarantee that your clinic will exceed operating codes."
      stats={[
        { n: "AGC", l: "Associated General Contractors" },
        { n: "ABC", l: "Associated Builders & Contractors" },
        { n: "ASSE", l: "Medical Gas Certified" },
        { n: "NFPA", l: "Healthcare Standards" },
      ]}
      features={[
        { icon: "📐", title: "Architectural Firms", desc: "We collaborate with top-tier architectural partners to deliver seamless, conflict-free design-build workflows." },
        { icon: "⚡", title: "MEP Engineers", desc: "Long-term relationships with mechanical, electrical, and plumbing engineering firms that specialize exclusively in healthcare." },
        { icon: "🦷", title: "Medical Equipment Vendors", desc: "Deep coordination with dental and medical equipment suppliers including Patterson Dental, Schein, and others." },
        { icon: "🏥", title: "Specialty Contractors", desc: "Our vetted network features ASSE-certified medical gas installers, cleanroom constructors, and specialized technicians." },
        { icon: "🏛️", title: "Regional Chambers", desc: "Proud members supporting the local economic development and business growth of the regions we build in." },
        { icon: "🏗️", title: "State Home Builders", desc: "Contributing allies to the state's broader construction and structural development associations." },
      ]}
      cta="Become a Partner →"
    />
  );
}
