import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Shopping Center Construction Tulsa Oklahoma | UDGOK",
  description: "Shopping center and strip mall construction in Tulsa and Oklahoma. UDGOK builds multi-tenant retail centers, anchored strip plazas, and mixed-use developments.",
  alternates: { canonical: "https://udgok.com/shopping-center-construction-tulsa" },
};

export default function ShoppingCenterPage() {
  return (
    <ServicePage
      label="Retail Center Construction"
      title="Shopping Center Construction"
      description="Multi-tenant retail centers, strip plazas, and mixed-use developments built for long-term performance and tenant retention."
      imageSrc="/images/ai_commercial_retail_plaza.png"
      imageAlt="Shopping center construction Tulsa by UDGOK"
      intro="Shopping center development requires a builder who understands retail real estate — tenant mix planning, phased delivery for anchor openings, and shell buildings designed for maximum leasing flexibility. UDGOK delivers multi-tenant retail projects that attract quality tenants and generate strong returns for developers."
      stats={[
        { n: "25+", l: "Retail Centers Built" },
        { n: "500K+", l: "SF Delivered" },
        { n: "95%", l: "Lease-Up Rate" },
        { n: "All", l: "Tenant Types" },
      ]}
      features={[
        { icon: "🏬", title: "Strip & In-Line Retail", desc: "Flexible shell buildings with variable bay depths, end-cap configurations, and drive-through capability." },
        { icon: "⚓", title: "Anchor Tenant Coordination", desc: "Coordinating with national anchors and their proprietary specs, delivery requirements, and phasing needs." },
        { icon: "🅿️", title: "Site & Parking", desc: "Full site development including parking, circulation, detention, utilities, and signage monuments." },
        { icon: "🔌", title: "Utility Infrastructure", desc: "Master-planned utility systems sized for future phases with individual tenant metering." },
        { icon: "🌿", title: "Landscaping & Hardscape", desc: "Inviting exterior environments with drought-tolerant landscaping, shade structures, and seating areas." },
        { icon: "📐", title: "Phased Delivery", desc: "Strategic phasing to open anchor tenants first and generate revenue while remaining phases are under construction." },
      ]}
      cta="Develop Your Retail Center →"
    />
  );
}
