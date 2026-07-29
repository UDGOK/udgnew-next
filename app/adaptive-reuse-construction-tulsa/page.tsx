import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Adaptive Reuse & Building Conversion Tulsa Oklahoma",
  description:
    "Adaptive reuse and building conversion construction in Tulsa, Oklahoma. Transform vacant offices, warehouses, and retail spaces into medical clinics.",
  openGraph: {
    images: [{ url: "https://www.udgok.com/images/og-default.png", width: 1200, height: 630, alt: "UDGOK — Medical & Dental Design-Build Construction in Tulsa, Oklahoma" }],
    title: "Adaptive Reuse & Building Conversion | UDGOK Tulsa",
    description:
      "Transform underperforming buildings into high-value assets. Office-to-medical, warehouse-to-retail, retail-to-restaurant conversions. 15–30% cost savings vs new construction.",
    url: "https://www.udgok.com/adaptive-reuse-construction-tulsa",
    type: "website",
  },
  alternates: {
    canonical: "https://www.udgok.com/adaptive-reuse-construction-tulsa",
  },
};

export default function AdaptiveReusePage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Building Conversion & Adaptive Reuse", url: "https://www.udgok.com/adaptive-reuse-construction-tulsa" }
  ];
  const PAGE_FAQS = [
          { q: "How do I know if a building is suitable for adaptive reuse?", a: "UDGOK provides feasibility assessments before you commit to a lease or purchase. We evaluate the structural system (foundation, framing, roof), MEP capacity (electrical, plumbing, HVAC), code compliance for your intended use, parking adequacy, and ADA accessibility. This assessment identifies deal-breakers early and provides an accurate conversion budget — typically completed within 1–2 weeks." },
          { q: "Is it cheaper to convert an existing building or build new?", a: "In most cases, adaptive reuse costs 15–30% less than new construction. The savings come from reusing the existing foundation, structure, and exterior envelope. However, severely deteriorated buildings, hazardous material abatement (asbestos, lead paint), or major structural deficiencies can narrow or eliminate the cost advantage. UDGOK's feasibility assessment gives you a clear comparison before you commit." },
          { q: "Can you convert a warehouse or industrial building into office space?", a: "Yes. Warehouse-to-office and warehouse-to-creative-space conversions are increasingly popular in Tulsa. We install complete HVAC systems, upgrade electrical to commercial office standards, add ADA-compliant restrooms, build out interior partitions, and address fire code requirements for the change of occupancy. The industrial character — exposed brick, timber trusses, high ceilings — becomes a design asset." },
          { q: "What about asbestos and lead paint in older buildings?", a: "UDGOK coordinates environmental testing (Phase 1 and Phase 2 assessments) before any demolition or renovation in older buildings. If asbestos or lead paint is identified, we manage licensed abatement contractors who remove hazardous materials in compliance with EPA and Oklahoma DEQ regulations. Abatement costs are factored into your preconstruction budget." },
          { q: "Does UDGOK handle zoning changes for adaptive reuse projects?", a: "Yes. When the proposed use differs from the current zoning designation, we manage the variance or rezoning application process with the City of Tulsa or the applicable jurisdiction. We attend Board of Adjustment hearings, prepare required documentation, and coordinate with city planning staff to secure approval before construction begins." },
        ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
        name="Adaptive Reuse & Building Conversion"
        description="Adaptive reuse and building conversion construction in Tulsa, Oklahoma. Transforming underperforming commercial spaces into high-value medical, restaurant, office, and retail facilities."
        url="https://www.udgok.com/adaptive-reuse-construction-tulsa"
      />
      <ServicePage
        label="Adaptive Reuse"
        title="Building Conversion & Adaptive Reuse"
        description="Transform underperforming buildings into high-value assets. 15–30% cost savings vs new construction, 30% faster timelines, and preserved architectural character."
        imageSrc="/images/adaptive-reuse-hero.png"
        imageAlt="Adaptive reuse building conversion construction Tulsa by UDGOK"
        tldr="UDGOK specializes in adaptive reuse — converting underperforming commercial buildings into high-value medical, dental, restaurant, office, and retail spaces across Tulsa and Oklahoma. Adaptive reuse projects cost 15–30% less than ground-up new construction and complete 30% faster. We handle the complex challenges unique to building conversions: structural capacity assessments, change of occupancy code compliance, mechanical system upgrades, and integration of modern infrastructure into existing structures. In 2025, over 70,000 building conversions were completed nationally — a 200% increase since 2022. Tulsa's rising office vacancy rates make this a strategic opportunity for building owners and tenants."
        intro="Tulsa has thousands of square feet of underperforming commercial space — vacant offices, aging retail centers, and underutilized warehouses. Rather than building new, adaptive reuse transforms these existing structures into thriving medical offices, dental clinics, restaurants, and modern workspaces. You preserve the building's character, reduce construction waste by 50–75%, and open months faster than a ground-up build. UDGOK has the mechanical upgrade expertise and code compliance knowledge to navigate the unique challenges of building conversions."
        stats={[
          { n: "15-30%", l: "Cost Savings vs New" },
          { n: "30%", l: "Faster Timeline" },
          { n: "50-75%", l: "Less Construction Waste" },
          { n: "200%", l: "Industry Growth Since '22" },
        ]}
        features={[
          { icon: "🔍", title: "Feasibility Assessment", desc: "Before you sign a lease, we assess the existing building for structural capacity, MEP adequacy, code compliance, and conversion cost — giving you a go/no-go decision with real numbers." },
          { icon: "🏗️", title: "Structural Retrofit", desc: "Foundation analysis, structural reinforcement, seismic upgrades, roof load assessments, and floor load calculations to ensure the existing structure supports its new purpose." },
          { icon: "⚙️", title: "Mechanical System Upgrades", desc: "Complete HVAC replacement or augmentation, electrical panel upgrades, plumbing reconfiguration, and fire protection system modifications for the new occupancy type." },
          { icon: "📐", title: "Code & Occupancy Compliance", desc: "Change of occupancy triggers code upgrades — ADA, fire separation, egress, structural, and energy code. We manage the full process with city plan reviewers." },
          { icon: "🧱", title: "Character Preservation", desc: "We integrate modern infrastructure while preserving original architectural elements — exposed brick, timber beams, original windows, and historic details that give your space unique character." },
          { icon: "🌍", title: "Environmental Sustainability", desc: "Reusing existing structures diverts 50–75% of construction waste from landfills, reduces embodied carbon by 50–70%, and minimizes site disturbance compared to new construction." },
        ]}
        sections={[
          {
            heading: "What types of building conversions does UDGOK handle?",
            body: `<p>We convert virtually any commercial building type into your desired use. Common conversions include:</p>
<table><thead><tr><th>Original Use</th><th>New Use</th><th>Key Construction Challenges</th></tr></thead>
<tbody>
<tr><td>Office Building</td><td>Medical Office / Clinic</td><td>HVAC upgrade for medical-grade ventilation, medical gas piping, ADA compliance, plumbing for exam rooms</td></tr>
<tr><td>Office Building</td><td>Dental Office</td><td>Dental vacuum, compressed air, N2O piping, operatory plumbing, CBCT room shielding</td></tr>
<tr><td>Retail Space</td><td>Restaurant</td><td>Commercial kitchen MEP, hood ventilation, grease trap, fire suppression, health department compliance</td></tr>
<tr><td>Warehouse</td><td>Office / Creative Space</td><td>HVAC installation, insulation, electrical upgrade, ADA restrooms, fire code compliance</td></tr>
<tr><td>Warehouse</td><td>Retail / Showroom</td><td>Storefront construction, customer restrooms, accessibility, parking, fire separation</td></tr>
<tr><td>Retail Center</td><td>Medical / Dental Hub</td><td>MEP redistribution, separate mechanical systems per tenant, medical gas, code compliance</td></tr>
</tbody></table>
<p>Each conversion type triggers different code requirements. UDGOK's experience with Tulsa plan reviewers ensures we identify and address these requirements early in design — preventing costly surprises during construction.</p>`,
          },
          {
            heading: "How does change of occupancy affect construction requirements?",
            body: `<p>When a building's use changes — for example, from office (Group B) to medical (Group B with I-2 components) or restaurant (Group A-2) — the building must meet current code requirements for the <strong>new</strong> occupancy classification. This triggers:</p>
<ul>
<li><strong>Fire Protection:</strong> Sprinkler systems may need to be upgraded or installed. Assembly occupancies (restaurants, event spaces) have stricter sprinkler and alarm requirements than office/retail</li>
<li><strong>ADA Accessibility:</strong> The entire building — not just the converted space — must be evaluated for ADA compliance when the occupancy changes. This includes accessible routes, restrooms, parking, and entrances</li>
<li><strong>Structural Loads:</strong> Medical equipment, server rooms, and commercial kitchens may exceed the original floor load design. Structural reinforcement may be required</li>
<li><strong>Energy Code:</strong> Significant renovations trigger current energy code compliance — which may require upgraded insulation, lighting, and HVAC efficiency</li>
<li><strong>Egress:</strong> Exit widths, travel distances, and emergency lighting requirements change with occupancy type. Assembly and healthcare occupancies have more stringent egress requirements</li>
<li><strong>Plumbing Fixtures:</strong> Different occupancy types require different fixture counts based on the International Plumbing Code. Medical and restaurant uses typically require more fixtures than office uses</li>
</ul>
<p>UDGOK manages the complete code analysis during preconstruction, ensuring all change-of-occupancy requirements are identified before construction begins — not discovered during inspection.</p>`,
          },
          {
            heading: "Why is adaptive reuse more cost-effective than new construction?",
            body: `<p>Adaptive reuse offers significant cost and time advantages over ground-up new construction:</p>
<ul>
<li><strong>Existing Structure:</strong> Foundation, structural frame, roof, and exterior walls are already in place — saving 30–40% of total construction cost</li>
<li><strong>Reduced Site Work:</strong> No excavation, grading, or new utility connections (in most cases) — saving $15–$50 per square foot</li>
<li><strong>Faster Permitting:</strong> Interior renovations typically permit 30–50% faster than new construction, which requires site plan review, stormwater management, and utility coordination</li>
<li><strong>Faster Construction:</strong> With the shell already in place, construction timelines are typically 30% shorter — meaning you start generating revenue months sooner</li>
<li><strong>Existing Parking & Access:</strong> No need to build new parking lots, driveways, or sidewalks in most conversion scenarios</li>
<li><strong>Tax Incentives:</strong> Federal historic tax credits (20% for certified historic structures), Oklahoma state rehabilitation credits, and local incentive programs can offset conversion costs</li>
</ul>
<p>For a typical 5,000 SF medical office conversion in Tulsa, adaptive reuse saves $200K–$400K compared to building new — while delivering the space 3–4 months sooner.</p>`,
          },
        ]}
        faqs={PAGE_FAQS}
        cta="Assess Your Building →"
      />
    </>
  );
}
