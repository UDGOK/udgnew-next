import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Partners & Affiliations | UDGOK Construction",
  description: "UDGOK's industry partnerships and professional affiliations. Members of AGC, ABC, ASSE certified, and active participants in Tulsa's healthcare and commercial construction community.",
  keywords: [
    "construction industry partners Tulsa",
    "AGC member Oklahoma",
    "ABC member contractor",
    "ASSE certified contractor",
    "construction partnerships Oklahoma",
  ],
  openGraph: {
    title: "Partners & Affiliations | UDGOK",
    description: "AGC and ABC member. ASSE and NFPA certified. Partnered with top architectural firms and medical equipment vendors.",
    url: "https://udgok.com/partners",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/partners" },
};

export default function PartnersPage() {
  return (
    <ServicePage
      label="Industry"
      title="Partners & Affiliations"
      description="UDGOK builds within a vetted network of trusted partners — from professional associations to specialty subcontractors."
      imageSrc="/images/ai-dental-interior.png"
      imageAlt="Premium Dental Office by UDGOK"
      tldr="UDGOK is a member of the Associated General Contractors (AGC) and Associated Builders & Contractors (ABC). Our team holds ASSE 6010 medical gas certifications and builds to NFPA 99 healthcare standards. We partner with top-tier architectural firms, MEP engineers, and medical equipment vendors including Patterson Dental and Henry Schein to deliver fully integrated design-build healthcare projects."
      intro="We collaborate with leading architectural firms, MEP engineers, and specialty medical equipment vendors to deliver truly integrated design-build experiences. Our close affiliations with standards organizations guarantee that your clinic will exceed operating codes."
      stats={[
        { n: "AGC", l: "Associated General Contractors" },
        { n: "ABC", l: "Associated Builders & Contractors" },
        { n: "ASSE", l: "Medical Gas Certified" },
        { n: "NFPA", l: "Healthcare Standards" },
      ]}
      features={[
        { icon: "📐", title: "Architectural Firms", desc: "We collaborate with top-tier architectural partners to deliver seamless, conflict-free design-build workflows." },
        { icon: "⚡", title: "MEP Engineers", desc: "Long-term relationships with mechanical, electrical, and plumbing engineering firms specializing in healthcare." },
        { icon: "🦷", title: "Medical Equipment Vendors", desc: "Deep coordination with dental and medical equipment suppliers including Patterson Dental, Schein, and others." },
        { icon: "🏥", title: "Specialty Contractors", desc: "Our vetted network features ASSE-certified medical gas installers, cleanroom constructors, and specialized technicians." },
        { icon: "🏛️", title: "Regional Chambers", desc: "Proud members supporting local economic development and business growth in the Tulsa metro." },
        { icon: "🏗️", title: "State Associations", desc: "Contributing members to Oklahoma's construction and structural development associations." },
      ]}
      faqs={[
        { q: "What professional associations is UDGOK a member of?", a: "UDGOK is a member of the Associated General Contractors of America (AGC) and the Associated Builders and Contractors (ABC). These memberships reflect our commitment to industry standards, continuing education, and best practices." },
        { q: "What certifications does UDGOK hold?", a: "Our team holds ASSE 6010 (medical gas installer), OSHA 30 (construction safety), and PMP (project management) certifications. We build to NFPA 99 healthcare facility standards and coordinate with ASSE 6030 certified verifiers for medical gas testing." },
        { q: "Which dental equipment vendors does UDGOK work with?", a: "We coordinate with all major dental equipment vendors including Patterson Dental, Henry Schein, Benco Dental, and specialty manufacturers. We ensure operatory rough-in dimensions, utilities, and structural provisions exactly match your equipment specifications." },
      ]}
      cta="Become a Partner →"
    />
  );
}
