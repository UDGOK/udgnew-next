import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tenant Improvements Tulsa Oklahoma | UDGOK",
  description: "Commercial tenant improvement and build-out contractor in Tulsa, OK. UDGOK delivers fast, high-quality TI work for medical, dental, retail, and office spaces. 200+ TI projects completed.",
  keywords: [
    "tenant improvement Tulsa OK",
    "commercial build-out Tulsa",
    "TI contractor Tulsa Oklahoma",
    "office build-out Tulsa",
    "medical tenant improvement",
    "retail tenant improvement Oklahoma",
    "restaurant build-out Tulsa",
    "tenant improvement cost per square foot",
  ],
  openGraph: {
    title: "Tenant Improvement Contractor Tulsa OK | 200+ Projects | UDGOK",
    description: "Fast-track commercial build-outs for medical, dental, retail, and office spaces across Tulsa metro.",
    url: "https://udgok.com/tenant-improvements",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/tenant-improvements" },
};

export default function TenantImprovementsPage() {
  return (
    <>
      <ServiceJsonLd
        name="Tenant Improvement Construction"
        description="Commercial tenant improvement and build-out services in Tulsa. Office, medical, retail, and restaurant space renovations."
        url="https://udgok.com/tenant-improvements"
      />
      <ServicePage
        label="Tenant Improvements"
        title="Tenant Improvements & Build-Outs"
        description="Fast, quality commercial build-outs for medical, dental, retail, and office spaces across Tulsa and Oklahoma."
        imageSrc="/images/ai_commercial_retail_plaza.png"
        imageAlt="Tenant improvements Tulsa by UDGOK"
        tldr="UDGOK has completed 200+ tenant improvement projects in the Tulsa metro, ranging from 1,000 SF retail suites to 20,000 SF medical campuses. Tenant improvement construction in Tulsa costs $50–$280 per square foot depending on use type — general office TI runs $50–$120/sq ft, while medical and dental TI runs $140–$280/sq ft. Our fast-track delivery minimizes the time between lease signing and revenue generation."
        intro="Your lease clock is running the moment you sign. UDGOK specializes in fast-track tenant improvement construction — coordinating landlord work, city permits, and specialty trades to deliver your space on time and on budget. We've completed TI projects ranging from 1,000 SF retail suites to 20,000 SF medical campuses."
        stats={[
          { n: "200+", l: "TI Projects" },
          { n: "30 Days", l: "Typical Permit Turnaround" },
          { n: "100%", l: "On-Time Rate" },
          { n: "All", l: "Sectors Served" },
        ]}
        features={[
          { icon: "🏢", title: "Office Build-Outs", desc: "Open plans, private offices, conference rooms, and break rooms built to your brand standards." },
          { icon: "🏥", title: "Medical TI", desc: "ADA-compliant exam rooms, nurse stations, and clinical spaces within existing shell buildings." },
          { icon: "🦷", title: "Dental TI", desc: "Operatory rough-in, medical gas, dental vacuum, and cabinetry coordination in existing suites." },
          { icon: "🛍️", title: "Retail Build-Outs", desc: "Storefront improvements, interior merchandising layouts, and custom display installations." },
          { icon: "📋", title: "Permit Expediting", desc: "We manage all city permit applications, landlord approvals, and inspector coordination." },
          { icon: "🔧", title: "MEP Coordination", desc: "Full mechanical, electrical, and plumbing coordination with your landlord's base building systems." },
        ]}
        sections={[
          {
            heading: "How much do tenant improvements cost per square foot in Tulsa?",
            body: `<p>Tenant improvement costs in Tulsa vary significantly by use type and finish level:</p>
<table><thead><tr><th>TI Type</th><th>Cost per Sq Ft</th><th>What's Included</th></tr></thead>
<tbody>
<tr><td>General Office</td><td>$50–$120</td><td>Walls, doors, paint, carpet, basic MEP</td></tr>
<tr><td>Retail / Restaurant</td><td>$80–$180</td><td>Storefront, finishes, kitchen (restaurant)</td></tr>
<tr><td>Medical Office TI</td><td>$150–$280</td><td>Exam rooms, ADA, specialized HVAC</td></tr>
<tr><td>Dental Office TI</td><td>$140–$280</td><td>Operatory plumbing, medical gas, vacuum</td></tr>
</tbody></table>
<p>These ranges assume a Class A or B shell building with adequate base building MEP capacity. Older buildings or those requiring structural modifications can add 10–20% to these costs.</p>`,
          },
          {
            heading: "What is the difference between a TI allowance and actual TI costs?",
            body: `<p>A <strong>TI allowance</strong> is the dollar amount your landlord contributes toward your build-out. <strong>Actual TI cost</strong> is what the construction really costs. Key distinctions:</p>
<ul>
<li><strong>TI Allowance:</strong> Typically $20–$60/sq ft for office; $40–$80/sq ft for medical — negotiated in your lease</li>
<li><strong>Actual Cost:</strong> Often exceeds the allowance, especially for medical/dental spaces with specialized systems</li>
<li><strong>The Gap:</strong> The tenant pays the difference between the allowance and actual cost — this is your out-of-pocket investment</li>
</ul>
<p>UDGOK provides preconstruction budgets before lease signing so you understand the actual TI cost versus the landlord's allowance. This prevents surprises and strengthens your lease negotiation position.</p>`,
          },
        ]}
        faqs={[
          { q: "How much do tenant improvements cost in Tulsa?", a: "TI costs range from $50–$280 per square foot depending on use type. General office TI runs $50–$120/sq ft, retail $80–$180/sq ft, and medical/dental $140–$280/sq ft. UDGOK provides free preliminary budgets before lease signing." },
          { q: "How long does a tenant improvement project take?", a: "Simple office TI (2,000 sq ft) can be completed in 6–8 weeks. Medical and dental TI projects typically take 3–5 months. UDGOK's fast-track approach overlaps permitting and procurement to minimize the time between lease execution and move-in." },
          { q: "Should I get a TI estimate before signing my lease?", a: "Absolutely. UDGOK offers free preconstruction estimates so you know the actual cost before committing to a lease. This helps you negotiate a better TI allowance with your landlord and avoid budget surprises after signing." },
          { q: "Does UDGOK coordinate with landlords?", a: "Yes. We handle all landlord coordination including base building MEP tie-ins, rooftop equipment placement, structural modifications, and compliance with building rules and regulations. We also manage the landlord's required insurance and permit documentation." },
        ]}
        cta="Get a TI Estimate →"
      />
    </>
  );
}
