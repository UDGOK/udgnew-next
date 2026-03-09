import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Design-Build Contractor Tulsa Oklahoma | UDGOK",
  description: "Integrated design-build delivery for medical, dental, and commercial construction in Tulsa and Oklahoma. One contract, one team, zero gaps between design and construction.",
  alternates: { canonical: "https://udgok.com/design-build" },
};

export default function DesignBuildPage() {
  return (
    <>
      <ServiceJsonLd
        name="Design-Build Construction"
        description="Integrated design-build delivery for medical, dental, and commercial construction. One contract, one team, zero gaps between design and construction."
        url="https://udgok.com/design-build"
      />
      <ServicePage
        label="Design-Build"
        title="Design-Build Delivery"
        description="One contract, one team, zero gaps. UDGOK integrates design and construction for faster delivery and better outcomes."
        imageSrc="/images/ai_commercial_retail_plaza.png"
        imageAlt="Design-build contractor Tulsa by UDGOK"
        intro="Traditional design-bid-build separates your architect and contractor — creating gaps, change orders, and delays. UDGOK's design-build model puts design and construction under one contract and one roof. You get a single point of accountability, real-time cost transparency, and a team that designs what it can actually build."
        stats={[
          { n: "20%", l: "Faster Delivery" },
          { n: "15%", l: "Average Cost Savings" },
          { n: "1", l: "Contract. One Team." },
          { n: "100+", l: "Projects Delivered" },
        ]}
        features={[
          { icon: "🏗️", title: "Integrated Team", desc: "Architects, engineers, and builders collaborate from day one — eliminating the handoff friction of traditional delivery." },
          { icon: "💰", title: "Real-Time Cost Control", desc: "Design decisions are made with live cost data so your budget is protected at every milestone." },
          { icon: "⚡", title: "Faster Schedules", desc: "Construction begins before design is 100% complete through phased permitting and fast-track delivery." },
          { icon: "📐", title: "Design Excellence", desc: "We don't sacrifice design quality for speed. Our in-house design team creates spaces that inspire and perform." },
          { icon: "🔄", title: "Single Accountability", desc: "One contract means no finger-pointing between your architect and contractor. UDGOK owns the outcome." },
          { icon: "📊", title: "Transparent Reporting", desc: "Weekly owner updates with real-time cost reporting, schedule tracking, and issue logs." },
        ]}
        cta="Start Your Design-Build Project →"
      />
    </>
  );
}

