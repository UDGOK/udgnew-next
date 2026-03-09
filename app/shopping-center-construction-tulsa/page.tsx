import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Shopping Center Construction Tulsa Oklahoma | UDGOK",
  description: "Shopping center and strip mall construction in Tulsa and Oklahoma. UDGOK builds multi-tenant retail centers, anchored strip plazas, and mixed-use developments. 500K+ SF delivered.",
  keywords: [
    "shopping center construction Tulsa",
    "strip mall construction Oklahoma",
    "retail center developer Tulsa OK",
    "multi-tenant retail construction",
    "commercial real estate construction Tulsa",
    "mixed-use development Oklahoma",
    "retail pad site construction",
    "shell building construction Tulsa",
  ],
  openGraph: {
    title: "Shopping Center Construction Tulsa OK | 500K+ SF | UDGOK",
    description: "Multi-tenant retail centers, strip plazas, and mixed-use developments built for developer returns.",
    url: "https://udgok.com/shopping-center-construction-tulsa",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/shopping-center-construction-tulsa" },
};

export default function ShoppingCenterPage() {
  return (
    <>
      <ServiceJsonLd
        name="Shopping Center Construction"
        description="Retail shopping center and strip mall construction in Tulsa. New builds, renovations, and tenant spaces."
        url="https://udgok.com/shopping-center-construction-tulsa"
      />
      <ServicePage
        label="Retail Center Construction"
        title="Shopping Center Construction"
        description="Multi-tenant retail centers, strip plazas, and mixed-use developments built for long-term performance and tenant retention."
        imageSrc="/images/ai_commercial_retail_plaza.png"
        imageAlt="Shopping center construction Tulsa by UDGOK"
        tldr="UDGOK has delivered 500,000+ square feet of retail center construction in the Tulsa metro, including 25+ strip malls, anchored shopping centers, and mixed-use developments. Shopping center construction costs $120–$200 per square foot for shell buildings and $80–$180/sq ft for tenant finish depending on use type. We handle everything from site development through tenant coordination and phased delivery."
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
        faqs={[
          { q: "How much does it cost to build a shopping center in Tulsa?", a: "Shopping center shell construction costs $120–$200 per square foot in the Tulsa metro. A 20,000 sq ft strip center with site work typically costs $3.5M–$5.5M total. Tenant finish adds $80–$180/sq ft depending on use type." },
          { q: "How long does it take to build a strip mall?", a: "A typical strip center (10,000–25,000 sq ft) takes 6–10 months from permit to CO. UDGOK phases construction so anchor tenants can open early, generating lease revenue while remaining bays are completed." },
          { q: "Does UDGOK handle site development?", a: "Yes. We provide full site-to-CO delivery including earthwork, utilities, parking, detention, landscaping, and building construction. We also coordinate with civil engineers for platting and zoning." },
          { q: "Can you build a mixed-use retail and medical center?", a: "Absolutely. Mixed-use is a growing trend in Oklahoma. We build retail shell buildings with medical tenant suites, ensuring the medical spaces have proper HVAC, plumbing, and ADA infrastructure while maintaining the retail character of the overall development." },
        ]}
        cta="Develop Your Retail Center →"
      />
    </>
  );
}
