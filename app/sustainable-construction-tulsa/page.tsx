import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sustainable & Green Construction Tulsa Oklahoma | UDGOK",
  description:
    "Sustainable commercial construction in Tulsa, Oklahoma. LEED-ready builds, energy-efficient HVAC, recycled materials, solar-ready design, low-VOC finishes, and Oklahoma green building tax incentives. Building a better future.",
  openGraph: {
    title: "Sustainable & Green Construction Tulsa | UDGOK",
    description:
      "Eco-conscious commercial construction. Energy-efficient systems, recycled materials, and LEED-ready delivery for forward-thinking businesses in Oklahoma.",
    url: "https://www.udgok.com/sustainable-construction-tulsa",
    type: "website",
  },
  alternates: {
    canonical: "https://www.udgok.com/sustainable-construction-tulsa",
  },
};

export default function SustainableConstructionPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Green Commercial Construction", url: "https://www.udgok.com/sustainable-construction-tulsa" }
  ];
  const PAGE_FAQS = [
          { q: "Is LEED certification worth it for a commercial building in Oklahoma?", a: "It depends on your goals. LEED certification adds $3–$15 per square foot in documentation and commissioning costs on top of the green construction premium. The benefits include higher property values (10–20% premium), lower operating costs, easier tenant recruitment, and corporate ESG compliance. For owner-occupied buildings, the energy savings alone typically justify the investment within 5 years." },
          { q: "Can you make an existing building more sustainable?", a: "Yes. UDGOK retrofits existing commercial buildings with energy-efficient HVAC upgrades, LED lighting conversions, building envelope improvements, low-flow plumbing fixtures, and solar panel installation. We conduct energy audits to identify the highest-ROI improvements and can pursue LEED for Existing Buildings certification." },
          { q: "How does sustainable construction benefit medical and dental offices?", a: "Healthcare facilities especially benefit from green building. Low-VOC materials improve indoor air quality for patients and staff. Energy-efficient HVAC reduces operating costs for facilities that run 10–12 hours/day. Enhanced ventilation systems — already required for medical gas and infection control — dovetail perfectly with LEED indoor environmental quality credits. And patients increasingly choose healthcare providers who demonstrate environmental responsibility." },
          { q: "What is embodied carbon and how do you reduce it?", a: "Embodied carbon is the CO2 emitted during manufacturing, transportation, and installation of building materials — before the building even opens. UDGOK reduces embodied carbon by specifying recycled steel (97% recycled content), fly ash concrete (30% cement replacement), locally sourced materials (reduced transport), and FSC-certified wood. These choices can reduce embodied carbon by 30–40% compared to conventional material selections." },
          { q: "Does UDGOK track construction waste diversion?", a: "Yes. We implement a Construction & Demolition Waste Management Plan on every project. We source-separate materials on site — metals, concrete, wood, cardboard, drywall — and track diversion rates by weight. Our projects consistently achieve 75%+ diversion from landfills, which also qualifies for LEED Materials & Resources credits." },
        ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
        name="Sustainable & Green Construction"
        description="Sustainable commercial construction services including LEED-ready builds, energy-efficient HVAC, recycled materials, solar-ready design, and green building practices in Tulsa, Oklahoma."
        url="https://www.udgok.com/sustainable-construction-tulsa"
      />
      <ServicePage
        label="Sustainable Construction"
        title="Green Commercial Construction"
        description="Eco-conscious building that performs. Energy-efficient systems, recycled materials, and LEED-ready delivery for forward-thinking businesses."
        imageSrc="/images/sustainable-construction-hero.png"
        imageAlt="Sustainable green commercial construction in Tulsa by UDGOK"
        tldr="UDGOK delivers sustainable commercial construction for businesses that want to reduce their environmental footprint without compromising performance or budget. Green building practices add only 2–8% to upfront construction costs but reduce operating expenses by 20–30% annually through energy-efficient HVAC, LED lighting, high-performance insulation, and water conservation systems. We offer LEED-ready construction, solar-ready infrastructure, recycled steel and concrete, low-VOC finishes, and construction waste diversion programs — all while maintaining the aggressive timelines and cost control our clients expect."
        intro="Sustainability in construction is no longer optional — it's a competitive advantage. Tenants prefer green buildings. Investors require ESG reporting. And Oklahoma's energy costs make efficiency a bottom-line imperative. UDGOK integrates sustainable practices into every project: from specifying recycled structural steel to installing high-performance building envelopes to designing mechanical systems that consume 30% less energy than code minimum."
        stats={[
          { n: "20-30%", l: "Energy Savings" },
          { n: "2-8%", l: "Green Premium" },
          { n: "75%+", l: "Waste Diverted" },
          { n: "100+", l: "Projects Built" },
        ]}
        features={[
          { icon: "⚡", title: "Energy-Efficient HVAC", desc: "High-efficiency VRF systems, energy recovery ventilators, demand-controlled ventilation, and smart thermostats that reduce heating/cooling costs 25–40% versus conventional systems." },
          { icon: "☀️", title: "Solar-Ready Design", desc: "Structural reinforcement, electrical conduit routing, and panel layout engineering — so you can add solar panels day one or five years from now without costly retrofits." },
          { icon: "♻️", title: "Recycled & Sustainable Materials", desc: "Recycled steel (97% recycled content), reclaimed wood, low-carbon concrete, FSC-certified lumber, and locally sourced materials that reduce embodied carbon and transportation emissions." },
          { icon: "💧", title: "Water Conservation", desc: "Low-flow fixtures, rainwater harvesting infrastructure, drought-resistant landscaping, and greywater recycling systems that reduce water consumption 30–50%." },
          { icon: "🌿", title: "Low-VOC & Healthy Interiors", desc: "Zero-VOC paints, formaldehyde-free cabinetry, natural fiber carpet, and enhanced ventilation that improve indoor air quality and occupant health — critical for medical and dental facilities." },
          { icon: "📊", title: "LEED & Green Certification", desc: "We design and build to LEED Silver, Gold, or Platinum standards. Energy modeling, daylight analysis, materials tracking, and commissioning documentation — all managed in-house." },
        ]}
        sections={[
          {
            heading: "How much does sustainable construction cost compared to conventional building?",
            body: `<p>The "green premium" — the additional cost of sustainable construction compared to conventional methods — is smaller than most people expect:</p>
<table><thead><tr><th>Sustainability Level</th><th>Green Premium</th><th>Annual Energy Savings</th><th>ROI Payback Period</th></tr></thead>
<tbody>
<tr><td>Basic Efficiency (above code)</td><td>2–3%</td><td>15–20%</td><td>3–5 years</td></tr>
<tr><td>LEED Silver</td><td>3–5%</td><td>20–25%</td><td>4–6 years</td></tr>
<tr><td>LEED Gold</td><td>5–7%</td><td>25–35%</td><td>5–8 years</td></tr>
<tr><td>Net-Zero Ready</td><td>8–15%</td><td>50–80%</td><td>7–12 years</td></tr>
</tbody></table>
<p>For a $2M commercial project, LEED Silver adds approximately $60K–$100K in construction costs — but saves $30K–$50K annually in energy, water, and maintenance. Most sustainable construction investments pay for themselves within 5 years.</p>`,
          },
          {
            heading: "What sustainable building practices does UDGOK implement?",
            body: `<p>We integrate sustainability at every phase of construction — not as an afterthought, but as a core design principle:</p>
<ul>
<li><strong>High-Performance Building Envelope:</strong> Continuous insulation, air sealing, high-quality windows, and reflective roofing membranes that minimize thermal bridging and reduce HVAC load by 20–30%</li>
<li><strong>Energy-Efficient Mechanical Systems:</strong> Variable refrigerant flow (VRF) HVAC, energy recovery ventilation (ERV), LED lighting with daylight harvesting controls, and occupancy-based systems</li>
<li><strong>Recycled & Low-Carbon Materials:</strong> Structural steel (97% recycled), fly ash concrete (30% cement replacement), recycled-content insulation, and FSC-certified wood products</li>
<li><strong>Construction Waste Management:</strong> We divert 75%+ of construction waste from landfills through source separation, recycling, and material reuse programs</li>
<li><strong>Water Efficiency:</strong> Low-flow plumbing fixtures, sensor-activated faucets, dual-flush toilets, and infrastructure for rainwater collection</li>
<li><strong>Indoor Environmental Quality:</strong> Zero-VOC paints, low-emission adhesives, increased outdoor air ventilation, and CO2 monitoring for occupant health</li>
<li><strong>Commissioning:</strong> Third-party verification that all systems are installed correctly and performing as designed — critical for achieving energy savings targets</li>
</ul>`,
          },
          {
            heading: "What green building incentives are available in Oklahoma?",
            body: `<p>Oklahoma offers several financial incentives that can offset the cost of sustainable construction:</p>
<ul>
<li><strong>Federal Tax Deduction (179D):</strong> Up to $5.00 per square foot tax deduction for energy-efficient commercial buildings that achieve 25–50% energy savings versus ASHRAE 90.1 baseline — recently expanded by the Inflation Reduction Act</li>
<li><strong>Federal Investment Tax Credit (ITC):</strong> 30% tax credit for solar energy systems installed on commercial buildings, including direct pay options for tax-exempt organizations</li>
<li><strong>Oklahoma Utility Rebates:</strong> PSO, OG&E, and Oklahoma Natural Gas offer rebates for high-efficiency HVAC systems, LED lighting, and insulation upgrades in commercial buildings</li>
<li><strong>Local Property Tax Benefits:</strong> Some Oklahoma municipalities offer property tax abatements for LEED-certified or Energy Star-rated commercial buildings</li>
<li><strong>USDA Rural Development:</strong> Grants and loan programs for energy-efficient improvements to rural commercial buildings in Oklahoma</li>
</ul>
<p>UDGOK's preconstruction team helps you identify and maximize applicable incentives, ensuring your sustainable construction investment delivers the best possible financial return.</p>`,
          },
        ]}
        faqs={PAGE_FAQS}
        cta="Build Sustainably →"
      />
    </>
  );
}
