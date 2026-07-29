import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, LocalBusinessJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Medical Office Construction Edmond OK",
  description:
    "Edmond's leading contractor for premium medical and dental office construction. Design-build expertise for clinics, surgery centers, and specialized healthcare facilities.",
  openGraph: {
    title: "Medical Office Construction | Edmond OK",
    description: "Premium medical, dental, and healthcare facility construction in Edmond, Oklahoma. A specialized design-build approach.",
    url: "https://www.udgok.com/edmond-ok-medical-construction",
    type: "website",
    images: [{ url: "https://www.udgok.com/images/edmond-hero.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.udgok.com/edmond-ok-medical-construction" },
};

export default function EdmondMedicalPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Medical & Dental Construction", url: "https://www.udgok.com/edmond-ok-medical-construction" }
  ];
  const PAGE_FAQS = [
          { q: "Do you build both medical and dental offices in Edmond?", a: "Yes. We have specialized divisions for both. Medical construction focuses on infection control, imaging prep (lead lining), and patient flow. Dental construction is highly plumbing-intensive, requiring vacuum/air manifolds, nitrous oxide routing, and precise operatory equipment coordination." },
          { q: "How much does medical office construction cost in Edmond, OK?", a: "Medical and dental office build-outs in Edmond typically cost between $180 and $250+ per square foot. The premium over standard office space is due to specialized HVAC (like negative pressure rooms), medical gas plumbing, heavy electrical requirements, and clinical-grade custom cabinetry." },
          { q: "What is your experience with Ambulatory Surgery Centers (ASCs)?", a: "We have deep expertise in building ASCs. These facilities require hospital-grade infrastructure, including critical power backup systems, medical gas column integration, rigid sterilization/clean room workflows, and compliance with stringent Oklahoma Department of Health regulations." },
          { q: "Can you remodel my existing Edmond dental practice while we remain open?", a: "Yes. We utilize a phased construction methodology specifically for operational practices. By using specialized dust containment (negative pressure HEPA barriers) and scheduling noisy/utility work for evenings and weekends, we allow your practice to continue serving patients and generating revenue during the remodel." },
          { q: "What makes UDGOK different from other commercial contractors?", a: "Healthcare construction is uniquely complex; a standard commercial contractor often struggles with the intricate MEP (mechanical, electrical, plumbing) requirements of a clinic. UDGOK uses a true design-build process, integrating clinical architectural design with construction execution to guarantee pricing, ensure code compliance, and deliver on the promise of an elite facility." },
        ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
        name="Medical & Dental Office Construction — Edmond, OK"
        description="Specialized design-build construction for medical clinics, dental practices, and surgery centers in Edmond, Oklahoma."
        url="https://www.udgok.com/edmond-ok-medical-construction"
        image="https://www.udgok.com/images/edmond-hero.png"
      />
      <LocalBusinessJsonLd
        description="Premium healthcare construction contractor in Edmond, OK. Specializing in medical offices, dental clinics, and ambulatory surgery centers."
        url="https://www.udgok.com/edmond-ok-medical-construction"
        specialization="medical office construction, dental office construction, healthcare contractor, surgery center construction, design-build medical"
      />
      <ServicePage
        label="Edmond, Oklahoma"
        title="Medical & Dental Construction"
        description="State-of-the-art healthcare facilities, built with precision for Edmond's top medical professionals."
        imageSrc="/images/edmond-hero.png"
        imageAlt="Ultra-premium modern medical clinic exterior in Edmond Oklahoma"
        intro="Edmond is home to some of the most dynamic and fastest-growing medical corridors in Oklahoma. Building a healthcare facility here requires a contractor who speaks the language of modern medicine—from ASHRAE 170 compliance and heavy medical gas routing to ADA-compliant patient flows and specialized electrical demands for advanced imaging. UDGOK provides elite design-build execution for Edmond’s private practices and medical groups."
        stats={[
          { n: "100%", l: "HIPAA & ADA Compliant" },
          { n: "$180+", l: "Avg Cost Per Sq Ft" },
          { n: "Premium", l: "Healthcare Facilities" },
        ]}
        features={[
          { icon: "🏥", title: "Medical Clinics & ASCs", desc: "Primary care, specialty clinics, and Ambulatory Surgery Centers (ASCs) built to meticulous Dept. of Health standards with advanced infection control HVAC." },
          { icon: "🦷", title: "Advanced Dental Offices", desc: "Specialized dental build-outs featuring complex sub-floor plumbing, vacuum manifolds, nitrous oxide systems, and custom operatory cabinetry." },
          { icon: "⚡", title: "Clinical Infrastructure", desc: "Installation of heavy infrastructure including lead-lined walls for radiology (X-Ray/CBCT), CAT6 network redundancy, and dedicated circuits for sensitive equipment." },
          { icon: "♿", title: "Patient-Centric Design", desc: "We design and build with the patient experience in mind—seamless ADA accessibility, calming architectural lighting, and acoustic privacy for HIPAA compliance." },
          { icon: "🔄", title: "Practice Remodels", desc: "Phased renovation programs allowing existing Edmond medical and dental practices to upgrade and expand without shutting down patient operations." },
          { icon: "🏗️", title: "Design-Build Efficiency", desc: "A unified approach combining architectural planning and construction to compress timelines, eliminate change orders, and guarantee facility delivery dates." },
        ]}
        tldr="UDGOK is the premier medical office and dental clinic construction contractor in Edmond, OK. We provide specialized design-build services for healthcare providers, ensuring strict adherence to ASHRAE 170 infection control, ADA compliance, and medical gas installation standards. Average medical build-outs range from $180–$250+ per square foot. Call (918) 520-3823 for a secure project consultation."
        faqs={PAGE_FAQS}
        sections={[
          {
            heading: "The Design-Build Advantage for Edmond Healthcare",
            body: "<p>The traditional design-bid-build model is broken when it comes to medical construction. Getting architectural drawings without real-time contractor pricing almost always leads to a design that blows past your budget, forcing months of 'value engineering.' UDGOK’s design-build model solves this. We price the project <em>as</em> we design it. When you specify a 3D CBCT machine for your Edmond dental practice, our design team and electrical engineers instantly coordinate the concrete floor specs, data drops, and lead-lined wall costs—giving you a guaranteed price early in the process.</p>"
          },
          {
            heading: "Complex Demands: HVAC & Infection Control",
            body: "<p>Post-2020, the standards for medical HVAC have changed permanently. Whether you are building an urgent care in Edmond or an oral surgery center, you must address airborne pathogen control. UDGOK designs HVAC systems that meet or exceed ASHRAE 170 standards, implementing dedicated zones for operatories, negative pressure isolation capability for infectious patients, minimum Air Changes per Hour (ACH) requirements, and advanced HEPA/MERV filtration systems. Standard commercial A/C simply doesn't cut it in healthcare.</p>"
          }
        ]}
        cta="Discuss Your Medical Build →"
      />
    </>
  );
}
