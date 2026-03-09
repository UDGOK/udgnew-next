import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Bixby Dental Office Construction | UDGOK",
  description: "UDGOK specializes in building modern dental offices in Bixby, Oklahoma. Expert construction for general, pediatric, orthodontic, and oral surgery practices in Bixby's fast-growing market.",
  keywords: [
    "dental office construction Bixby OK",
    "dental clinic build-out Bixby Oklahoma",
    "dentist office builder Bixby",
    "pediatric dental construction Bixby OK",
    "orthodontist office construction Bixby",
    "dental operatory build-out Bixby OK",
    "dental practice construction Bixby Oklahoma",
    "dental office renovation Bixby",
  ],
  openGraph: {
    title: "Bixby Dental Office Construction | UDGOK",
    description: "Expert dental clinic builds for Bixby's growing healthcare market. From general to pediatric to ortho practices.",
    url: "https://udgok.com/bixby-dental-construction",
    type: "website",
  },
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
      tldr="UDGOK builds dental offices in Bixby, Oklahoma — one of the state's fastest-growing cities with high demand for family dental care. We construct general dentistry, pediatric, orthodontic, and oral surgery offices with full operatory plumbing, medical gas systems, and ADA-compliant layouts. Dental office construction in Bixby costs $140–$280/sq ft with timelines of 3–5 months."
      intro="Bixby is one of Oklahoma's fastest-growing communities, bringing high demand for premium dental care. UDGOK helps Bixby dentists build state-of-the-art clinics that attract new patients and retain top staff. From land acquisition to final operatory fit-out, we handle it all."
      cta="Contact Our Bixby Team →"
      features={[
        { icon: "🦷", title: "Operatory Precision", desc: "Plumbing, electrical, and gas rough-ins perfectly aligned with your chosen dental equipment." },
        { icon: "✨", title: "Modern Aesthetics", desc: "Spa-like waiting rooms and high-end finishes that elevate the patient experience." },
        { icon: "⏱️", title: "Fast-Track Delivery", desc: "We understand that every day delayed is lost revenue. We build fast without sacrificing quality." },
        { icon: "💧", title: "Dental Plumbing", desc: "Under-slab dental plumbing, vacuum systems, and amalgam separators to EPA and local codes." },
        { icon: "🫁", title: "Medical Gas", desc: "Nitrous oxide and oxygen systems installed by ASSE 6010 certified technicians for sedation practices." },
        { icon: "📋", title: "Bixby Permits", desc: "Established relationships with Bixby city staff for efficient permitting and inspection scheduling." },
      ]}
      faqs={[
        { q: "How much does it cost to build a dental office in Bixby?", a: "Dental office construction in Bixby costs $140–$280/sq ft. A 2,500 sq ft general dentistry office typically runs $350,000–$525,000. Bixby's growing family population makes it an excellent market for new dental practices." },
        { q: "How long does it take to build a dental office in Bixby?", a: "Most dental office build-outs in Bixby take 3–5 months from permit to certificate of occupancy. UDGOK's design-build approach can save 4–6 weeks versus traditional delivery." },
        { q: "What types of dental offices does UDGOK build in Bixby?", a: "We build all dental practice types: general dentistry, pediatric dental, orthodontics, endodontics, and oral surgery. Each specialty has unique operatory, plumbing, and equipment requirements we've built before." },
        { q: "Does UDGOK install medical gas in Bixby dental offices?", a: "Yes. Our ASSE 6010 certified installers handle nitrous oxide, oxygen, medical air, and vacuum systems. We include ASSE 6030 third-party verification testing on every medical gas installation." },
      ]}
    />
  );
}
