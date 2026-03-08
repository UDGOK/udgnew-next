import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Owasso OK | UDGOK",
  description: "Medical and commercial construction in Owasso, Oklahoma. UDGOK builds dental offices, medical clinics, and commercial projects in one of northeast Tulsa's fastest-growing communities.",
  alternates: { canonical: "https://udgok.com/owasso-ok-design-build" },
};

export default function OwassoPage() {
  return (
    <ServicePage
      label="Owasso"
      title="Construction in Owasso, Oklahoma"
      description="Medical, dental, and commercial construction serving Owasso's rapidly growing north Tulsa metro corridor."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Construction contractor Owasso Oklahoma by UDGOK"
      intro="Owasso's growth along US-169 and 96th Street has made it one of Oklahoma's most dynamic construction markets. UDGOK brings its full healthcare and commercial construction expertise to Owasso projects — from dental offices serving family neighborhoods to medical clinics anchoring new mixed-use developments along the 169 corridor."
      stats={[
        { n: "169", l: "Corridor Expertise" },
        { n: "Growing", l: "Market Leader" },
        { n: "Medical", l: "& Commercial" },
        { n: "Local", l: "Subcontractors" },
      ]}
      features={[
        { icon: "🦷", title: "Dental Offices", desc: "Full-service dental construction for Owasso's growing family population along major commercial routes." },
        { icon: "🏥", title: "Medical Clinics", desc: "Urgent care, primary care, and specialty clinics positioned along the US-169 corridor." },
        { icon: "⛽", title: "C-Store & Retail", desc: "Convenience store and retail construction at high-traffic Owasso commercial intersections." },
        { icon: "🏗️", title: "Ground-Up Development", desc: "Full design-build delivery for commercial development projects in Owasso's active growth corridors." },
        { icon: "🏬", title: "Tenant Improvements", desc: "Build-outs in Owasso's established shopping centers and mixed-use developments." },
        { icon: "📋", title: "Owasso Permitting", desc: "Established track record with Owasso Community Development for efficient project approvals." },
      ]}
      cta="Build in Owasso →"
    />
  );
}
