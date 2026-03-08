import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Bixby Dental Office Construction",
  description: "UDGOK specializes in building modern, high-tech dental offices in Bixby, Oklahoma. Local expertise for general, pediatric, and ortho practices.",
  alternates: { canonical: "https://udgok.com/bixby-dental-construction" },
};

export default function BixbyDentalPage() {
  return (
    <ServicePage
      label="Service Area: Bixby, OK"
      title="Dental Office Construction in Bixby"
      description="Expert dental clinic builds for Bixby's growing healthcare market."
      imageSrc="/images/modern-dental-clinic-reception-waiting-area-interior.jpg"
      imageAlt="Bixby dental office construction"
      intro="Bixby is one of Oklahoma's fastest-growing communities, bringing high demand for premium dental care. UDGOK helps Bixby dentists build state-of-the-art clinics that attract new patients and retain top staff. From land acquisition to final operatory fit-out, we handle it all."
      cta="Contact Our Bixby Team →"
      features={[
        { icon: "🦷", title: "Operatory Precision", desc: "Plumbing, electrical, and gas rough-ins perfectly aligned with your chosen dental equipment." },
        { icon: "✨", title: "Modern Aesthetics", desc: "Spa-like waiting rooms and high-end finishes that elevate the patient experience." },
        { icon: "⏱️", title: "Fast-Track Delivery", desc: "We understand that every day delayed is lost revenue. We build fast without sacrificing quality." },
      ]}
    />
  );
}
