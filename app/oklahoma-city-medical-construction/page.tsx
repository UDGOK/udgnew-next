import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Oklahoma City Medical Office Construction | UDGOK",
  description: "UDGOK provides expert medical office and dental clinic construction across Oklahoma City. Design-build services for healthcare providers in the OKC metro.",
  keywords: [
    "medical construction Oklahoma City",
    "dental office construction OKC",
    "healthcare construction Oklahoma City",
    "medical office builder OKC",
    "dental clinic construction OKC",
    "design-build contractor Oklahoma City",
  ],
  openGraph: {
    title: "Oklahoma City Medical Construction | UDGOK",
    description: "Tulsa's premier healthcare construction expertise now serving the Oklahoma City metro area.",
    url: "https://udgok.com/oklahoma-city-medical-construction",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/oklahoma-city-medical-construction" },
};

export default function OKCPage() {
  return (
    <ServicePage
      label="Service Area: Oklahoma City"
      title="Medical & Dental Construction in OKC"
      description="Bringing Tulsa's premier healthcare construction expertise to the Oklahoma City metro area."
      imageSrc="/images/ai_dallas_medical_hub.png"
      imageAlt="OKC medical construction by UDGOK"
      tldr="UDGOK now serves the Oklahoma City metro with the same healthcare construction expertise trusted by 100+ practices across Tulsa. We build dental offices, medical clinics, and surgery centers in OKC with ASSE 6010 certified medical gas installation, ADA compliance, and design-build delivery. OKC medical office construction costs $150–$350/sq ft depending on specialty."
      intro="For years, Oklahoma City providers have asked us to bring our specialized healthcare construction approach to the metro. We've established a dedicated OKC team to deliver the same precision, transparency, and speed that made us Tulsa's top choice for medical and dental builds."
      cta="Contact Our OKC Team →"
      stats={[
        { n: "OKC", l: "Dedicated Team" },
        { n: "100%", l: "Healthcare Focused" },
        { n: "5+", l: "Active OKC Builds" },
        { n: "24/7", l: "Project Access" },
      ]}
      features={[
        { icon: "🏥", title: "Medical Offices", desc: "Turnkey design-build services for primary care, specialty clinics, and urgent care centers in OKC." },
        { icon: "🦷", title: "Dental Clinics", desc: "Precision plumbing and operatory layouts for general dentistry, ortho, and endodontic practices." },
        { icon: "💉", title: "Surgery Centers", desc: "AAAHC-ready oral surgery and ambulatory surgery centers with full medical gas integration." },
        { icon: "🏗️", title: "Commercial Projects", desc: "Retail, office, and mixed-use construction across the OKC metro." },
        { icon: "📋", title: "OKC Permitting", desc: "Knowledge of Oklahoma City and surrounding municipality permit processes for healthcare facilities." },
        { icon: "⚡", title: "Fast-Track Delivery", desc: "Design-build approach that saves 20% on schedule versus traditional construction delivery." },
      ]}
      faqs={[
        { q: "Does UDGOK build in Oklahoma City?", a: "Yes. UDGOK now serves the Oklahoma City metro with a dedicated team. We build dental offices, medical clinics, urgent care facilities, and commercial projects across OKC. Our Tulsa headquarters is approximately 100 miles from downtown OKC." },
        { q: "How much does medical construction cost in Oklahoma City?", a: "Medical office construction in OKC costs $150–$350/sq ft, comparable to Tulsa metro rates. Dental offices run $140–$280/sq ft. OKC's larger subcontractor market can offer competitive pricing on larger projects." },
        { q: "What healthcare specialties does UDGOK build in OKC?", a: "We build all specialties in OKC including dental (general, pediatric, ortho, oral surgery), medical (primary care, urgent care, specialty), eye clinics, and ambulatory surgery centers — the same specialties we've delivered 100+ times in Tulsa." },
        { q: "Is UDGOK licensed to build in Oklahoma City?", a: "Yes. UDGOK is a licensed Oklahoma General Contractor authorized to build anywhere in the state. We carry full commercial general liability, workers' compensation, and professional liability insurance for OKC projects." },
      ]}
    />
  );
}
