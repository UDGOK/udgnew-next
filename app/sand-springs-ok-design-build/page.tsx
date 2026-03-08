import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Sand Springs OK | UDGOK",
  description: "Medical and commercial construction in Sand Springs, Oklahoma. UDGOK delivers design-build, tenant improvements, and healthcare construction in Sand Springs and West Tulsa.",
  alternates: { canonical: "https://udgok.com/sand-springs-ok-design-build" },
};

export default function SandSpringsPage() {
  return (
    <ServicePage
      label="Sand Springs"
      title="Construction in Sand Springs, Oklahoma"
      description="Medical, dental, and commercial construction serving Sand Springs and the West Tulsa market."
      imageSrc="/images/tulsa_oklahoma_skyline_centennial_park_daytime.jpg"
      imageAlt="Construction contractor Sand Springs Oklahoma by UDGOK"
      intro="Sand Springs and the West Tulsa corridor represent an underserved but growing construction market. UDGOK is active in Sand Springs, bringing the same high-quality medical and commercial construction that has made us Tulsa's most trusted builder to the west side of the metro. From highway-visible medical clinics to tenant improvements in Sand Springs commercial centers, we deliver."
      stats={[
        { n: "West", l: "Tulsa Corridor" },
        { n: "All", l: "Project Types" },
        { n: "Medical", l: "& Commercial" },
        { n: "Local", l: "Team" },
      ]}
      features={[
        { icon: "🏥", title: "Medical Office Construction", desc: "Primary care and specialty medical offices serving Sand Springs and surrounding west Tulsa communities." },
        { icon: "🦷", title: "Dental Offices", desc: "Modern dental suites built to serve Sand Springs's established and growing residential base." },
        { icon: "🏬", title: "Commercial Build-Outs", desc: "Retail, restaurant, and service business tenant improvements in Sand Springs commercial corridors." },
        { icon: "🏗️", title: "New Construction", desc: "Ground-up commercial development along US-412 and key Sand Springs commercial nodes." },
        { icon: "🔄", title: "Renovations & Remodels", desc: "Occupied-space renovations for existing businesses and practices looking to upgrade." },
        { icon: "📋", title: "Sand Springs Permits", desc: "Working knowledge of Sand Springs city permitting and inspection processes for fast approvals." },
      ]}
      cta="Build in Sand Springs →"
    />
  );
}
