import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Market Intelligence | UDGOK Construction",
  description: "Oklahoma and Texas construction market intelligence from UDGOK. Current cost data, subcontractor availability, permit timelines, and healthcare real estate trends for developers and owners.",
  alternates: { canonical: "https://udgok.com/market-intelligence" },
};

export default function MarketIntelligencePage() {
  return (
    <ServicePage
      label="Market Intelligence"
      title="Market Intelligence"
      description="Real construction cost data, subcontractor market conditions, and healthcare real estate trends from a contractor who builds 20+ projects per year in Oklahoma."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Oklahoma construction market intelligence by UDGOK"
      intro="UDGOK bids and builds 20+ projects per year across Oklahoma and Texas. That means we have more real-time visibility into construction costs, subcontractor capacity, material lead times, and permit timelines than any market report can provide. We share this intelligence with our clients and project partners to help them make smarter development decisions."
      stats={[
        { n: "20+", l: "Projects/Year" },
        { n: "Live", l: "Cost Data" },
        { n: "Local", l: "Market Expertise" },
        { n: "2025", l: "Current Data" },
      ]}
      features={[
        { icon: "💰", title: "Construction Cost Benchmarks", desc: "Current per-square-foot cost ranges for medical office, dental, retail TI, and ground-up commercial construction in the Tulsa market." },
        { icon: "👷", title: "Subcontractor Availability", desc: "Real-time intelligence on trade capacity, backlog, and pricing pressure in the Oklahoma subcontractor market." },
        { icon: "📦", title: "Material Lead Times", desc: "Current lead times for long-lead items including electrical gear, mechanical equipment, medical gas components, and specialty materials." },
        { icon: "📋", title: "Permit Timelines", desc: "Current plan review durations for City of Tulsa, Broken Arrow, Bixby, and other municipalities we work in regularly." },
        { icon: "🏥", title: "Healthcare Real Estate Trends", desc: "Insights on healthcare operator demand, lease rates, and development activity in Tulsa's medical corridors." },
        { icon: "📈", title: "Escalation Forecasting", desc: "Forward-looking cost escalation estimates based on current bid results, material indices, and labor market conditions." },
      ]}
      cta="Request Market Report →"
    />
  );
}
