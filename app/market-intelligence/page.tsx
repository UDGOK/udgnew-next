import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Construction Market Intelligence Oklahoma | UDGOK",
  description: "Real-time Oklahoma and Texas construction market intelligence. Current cost data, subcontractor availability, permit timelines, and healthcare real estate trends from a 20+ project/year contractor.",
  keywords: [
    "construction market intelligence Oklahoma",
    "construction cost data Tulsa",
    "subcontractor availability Oklahoma",
    "construction cost per square foot Tulsa",
    "construction material lead times",
    "healthcare real estate trends Oklahoma",
  ],
  openGraph: {
    title: "Construction Market Intelligence | UDGOK",
    description: "Real-time cost data, subcontractor capacity, and permit timelines from 20+ projects/year in Oklahoma.",
    url: "https://udgok.com/market-intelligence",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/market-intelligence" },
};

export default function MarketIntelligencePage() {
  return (
    <ServicePage
      label="Market Intelligence"
      title="Market Intelligence"
      description="Real construction cost data, subcontractor market conditions, and healthcare real estate trends from a contractor who builds 20+ projects per year."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Oklahoma construction market intelligence by UDGOK"
      tldr="UDGOK bids and builds 20+ projects per year across Oklahoma and Texas, giving us real-time visibility into construction costs, subcontractor capacity, material lead times, and permit timelines. We share this intelligence with clients and project partners. Current Tulsa-area cost benchmarks: medical office $150–$350/sq ft, dental office $140–$280/sq ft, commercial TI $50–$180/sq ft, ground-up retail $120–$200/sq ft."
      intro="UDGOK bids and builds 20+ projects per year across Oklahoma and Texas. That means we have more real-time visibility into construction costs, subcontractor capacity, material lead times, and permit timelines than any market report can provide."
      stats={[
        { n: "20+", l: "Projects/Year" },
        { n: "Live", l: "Cost Data" },
        { n: "Local", l: "Market Expertise" },
        { n: "2026", l: "Current Data" },
      ]}
      features={[
        { icon: "💰", title: "Construction Cost Benchmarks", desc: "Current per-square-foot cost ranges for medical office, dental, retail TI, and ground-up commercial construction in the Tulsa market." },
        { icon: "👷", title: "Subcontractor Availability", desc: "Real-time intelligence on trade capacity, backlog, and pricing pressure in the Oklahoma subcontractor market." },
        { icon: "📦", title: "Material Lead Times", desc: "Current lead times for long-lead items including electrical gear, mechanical equipment, medical gas components, and specialty materials." },
        { icon: "📋", title: "Permit Timelines", desc: "Current plan review durations for City of Tulsa, Broken Arrow, Bixby, and other municipalities we work in regularly." },
        { icon: "🏥", title: "Healthcare Real Estate Trends", desc: "Insights on healthcare operator demand, lease rates, and development activity in Tulsa's medical corridors." },
        { icon: "📈", title: "Escalation Forecasting", desc: "Forward-looking cost escalation estimates based on current bid results, material indices, and labor market conditions." },
      ]}
      faqs={[
        { q: "How much does construction cost per square foot in Tulsa?", a: "Current Tulsa-area cost benchmarks: medical offices $150–$350/sq ft, dental offices $140–$280/sq ft, commercial office TI $50–$120/sq ft, retail build-outs $80–$180/sq ft, and ground-up retail/shell $120–$200/sq ft. These are 2026 figures based on actual UDGOK bid results." },
        { q: "How long are construction material lead times right now?", a: "As of 2026, typical lead times in the Tulsa market: electrical switchgear 16–24 weeks, commercial HVAC units 8–14 weeks, fire sprinkler heads 4–6 weeks, custom millwork 6–10 weeks. UDGOK procures long-lead items during preconstruction to avoid schedule delays." },
        { q: "Can UDGOK provide a market report for my project?", a: "Yes. We provide complimentary market intelligence briefings for qualified projects, including current cost benchmarks, subcontractor availability in your trade categories, and permit timeline estimates for your municipality." },
      ]}
      cta="Request Market Report →"
    />
  );
}
