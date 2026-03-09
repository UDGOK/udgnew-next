import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Convenience Store Construction Tulsa Oklahoma | UDGOK",
  description: "Convenience store and fuel canopy construction in Tulsa and Oklahoma. UDGOK builds ground-up c-stores, remodels, and fuel station upgrades for major brands and independents. 40+ c-stores built.",
  keywords: [
    "convenience store construction Tulsa",
    "c-store construction Oklahoma",
    "fuel station construction Tulsa OK",
    "gas station construction Oklahoma",
    "convenience store contractor Tulsa",
    "fuel canopy construction",
    "c-store remodel Tulsa",
    "underground storage tank installation",
  ],
  openGraph: {
    title: "Convenience Store Construction Tulsa OK | 40+ Built | UDGOK",
    description: "Ground-up c-store construction, fuel canopies, and remodels for brands and independents across Oklahoma.",
    url: "https://udgok.com/convenience-store-construction-tulsa",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/convenience-store-construction-tulsa" },
};

export default function ConvenienceStorePage() {
  return (
    <>
      <ServiceJsonLd
        name="Convenience Store Construction"
        description="C-store and fuel station construction in Tulsa, Oklahoma. Ground-up builds and renovations for convenience retail."
        url="https://udgok.com/convenience-store-construction-tulsa"
      />
      <ServicePage
        label="C-Store Construction"
        title="Convenience Store Construction"
        description="Ground-up convenience stores, fuel canopies, and remodels for major brands and independent operators across Oklahoma and Texas."
        imageSrc="/images/modern-jacksons-convenience-store-exterior-dusk.jpg"
        imageAlt="Convenience store construction Tulsa by UDGOK"
        tldr="UDGOK has built 40+ convenience stores across Oklahoma and Texas, including ground-up builds, brand reimage programs, and fuel system upgrades. C-store construction costs range from $250–$400 per square foot for the building and $150,000–$400,000 for fuel systems (USTs, dispensers, canopy). Typical ground-up timeline is 5–7 months from permit to grand opening."
        intro="Convenience store construction is a specialized discipline — from DEP-compliant underground fuel systems to dispenser canopies, food service kitchens, and high-visibility exterior lighting. UDGOK has built and remodeled c-stores for regional chains and independent operators who demand brand-quality results on tight schedules."
        stats={[
          { n: "40+", l: "C-Stores Built" },
          { n: "DEP", l: "Fuel System Compliant" },
          { n: "6 Months", l: "Ground-Up Timeline" },
          { n: "100%", l: "Brand Standards Met" },
        ]}
        features={[
          { icon: "⛽", title: "Fuel Systems", desc: "Underground storage tank installation, dispenser rough-in, vapor recovery, and DEP/EPA compliance documentation." },
          { icon: "🏗️", title: "Fuel Canopies", desc: "Steel canopy design and installation with LED lighting, fascia branding, and code-compliant clearances." },
          { icon: "🍕", title: "Food Service", desc: "Commercial kitchen rough-in, hood systems, grease interceptors, and NSF-compliant prep areas." },
          { icon: "🔆", title: "Exterior Lighting", desc: "High-visibility LED canopy and site lighting designed for safety, brand identity, and energy efficiency." },
          { icon: "♻️", title: "Remodels & Upgrades", desc: "Brand reimage programs, interior refreshes, and fuel equipment upgrades without closing your store." },
          { icon: "📋", title: "Permitting & Compliance", desc: "We manage fire marshal, DEQ, health department, and building permit processes start to finish." },
        ]}
        sections={[
          {
            heading: "How much does it cost to build a convenience store in Oklahoma?",
            body: `<p>Convenience store construction costs break down into building, fuel systems, and site work:</p>
<table><thead><tr><th>Component</th><th>Cost Range</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Building (3,000–5,000 sq ft)</td><td>$750K–$2M</td><td>$250–$400/sq ft</td></tr>
<tr><td>Fuel system (USTs + dispensers)</td><td>$150K–$400K</td><td>Depends on number of fuel positions</td></tr>
<tr><td>Fuel canopy</td><td>$80K–$200K</td><td>Steel structure, LED lighting, branding</td></tr>
<tr><td>Site work (parking, utilities)</td><td>$150K–$400K</td><td>Varies by site conditions</td></tr>
<tr><td>Food service equipment</td><td>$50K–$200K</td><td>Kitchen hood, walk-in coolers, prep</td></tr>
</tbody></table>
<p>Total ground-up convenience store investment typically ranges from <strong>$1.2M–$3.2M</strong> depending on store size, fuel positions, food service scope, and site conditions.</p>`,
          },
          {
            heading: "What permits and compliance are required for c-store construction?",
            body: `<p>Convenience store construction involves multiple regulatory agencies beyond standard building permits:</p>
<ul>
<li><strong>DEQ (Department of Environmental Quality):</strong> Underground storage tank registration and installation permits</li>
<li><strong>Fire Marshal:</strong> Fuel dispenser placement, fire suppression, and above-ground tank approvals</li>
<li><strong>Health Department:</strong> Food service permits for kitchen and prepared food areas</li>
<li><strong>ODEQ:</strong> Stormwater pollution prevention plan (SWPPP) for sites over 1 acre</li>
<li><strong>EPA:</strong> Spill Prevention, Control, and Countermeasure (SPCC) plan for fuel storage</li>
<li><strong>Building permit:</strong> Standard commercial building permit from the local jurisdiction</li>
</ul>
<p>UDGOK manages all regulatory permits and compliance documentation as part of our standard scope of work.</p>`,
          },
        ]}
        faqs={[
          { q: "How much does it cost to build a convenience store?", a: "A ground-up convenience store in Oklahoma costs $1.2M–$3.2M total including the building ($750K–$2M), fuel systems ($150K–$400K), canopy ($80K–$200K), and site work ($150K–$400K). Costs vary based on store size, number of fuel positions, and food service scope." },
          { q: "How long does it take to build a convenience store?", a: "Ground-up c-store construction takes 5–7 months from permit issuance to grand opening. Remodels and brand reimage projects can be completed in 6–12 weeks depending on scope." },
          { q: "Does UDGOK build for national c-store brands?", a: "Yes. We build and remodel for both national/regional brands and independent operators. We're experienced with brand-specific construction standards, prototype compliance, and corporate approval processes." },
          { q: "Can you remodel my store while I stay open?", a: "Yes. UDGOK specializes in occupied-store remodels and brand reimage programs. We phase the work to keep your store operational, typically working nights and weekends for interior demolition and during business hours for exterior improvements." },
        ]}
        cta="Build Your C-Store →"
      />
    </>
  );
}
