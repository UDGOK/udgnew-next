import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Restaurant & Commercial Kitchen Construction Tulsa | UDGOK",
  description:
    "Restaurant construction, commercial kitchen build-outs, and food service facility renovations in Tulsa, Oklahoma. Hood ventilation, grease traps, walk-in coolers, ADA compliance, and health department-ready construction.",
  keywords: [
    "restaurant construction Tulsa",
    "commercial kitchen build out",
    "restaurant build out cost per square foot",
    "restaurant contractor Tulsa Oklahoma",
    "commercial kitchen construction",
    "restaurant renovation Tulsa",
    "bar construction contractor",
    "food service facility construction",
    "restaurant hood ventilation installation",
    "grease trap installation Tulsa",
  ],
  openGraph: {
    title: "Restaurant & Commercial Kitchen Construction Tulsa | UDGOK",
    description:
      "Full-service restaurant construction from kitchen rough-in to grand opening. Hood ventilation, grease traps, bar build-outs, and health department compliance.",
    url: "https://udgok.com/restaurant-construction-tulsa",
    type: "website",
  },
  alternates: {
    canonical: "https://udgok.com/restaurant-construction-tulsa",
  },
};

export default function RestaurantConstructionPage() {
  return (
    <>
      <ServiceJsonLd
        name="Restaurant & Commercial Kitchen Construction"
        description="Restaurant construction, commercial kitchen build-outs, bar construction, and food service facility renovations in Tulsa, Oklahoma. Full health department and fire code compliance."
        url="https://udgok.com/restaurant-construction-tulsa"
      />
      <ServicePage
        label="Restaurant Construction"
        title="Restaurant & Kitchen Build-Outs"
        description="From commercial kitchen rough-in to grand opening ribbon-cutting. Full-service restaurant construction for Tulsa and Oklahoma."
        imageSrc="/images/restaurant-construction-hero.png"
        imageAlt="Restaurant and commercial kitchen construction Tulsa by UDGOK"
        tldr="UDGOK builds restaurants, bars, cafés, and food service facilities across the Tulsa metro and Oklahoma. Restaurant construction costs in Tulsa range from $150–$350 per square foot for a full build-out, including commercial kitchen equipment rough-in, Type I/II hood ventilation, grease trap installation, walk-in cooler/freezer construction, bar plumbing, and ADA-compliant dining areas. We coordinate all Tulsa Health Department inspections, fire suppression (Ansul) systems, and Certificate of Occupancy — so your opening date stays on track."
        intro="Restaurant construction is uniquely demanding. Commercial kitchen MEP systems are 3–5x more complex than standard office build-outs — requiring massive exhaust hoods, make-up air units, grease interceptors, floor drains, and fire suppression systems, all within extremely tight timelines. UDGOK has the mechanical expertise and local permitting knowledge to deliver your restaurant on time, on code, and ready for your health department inspection."
        stats={[
          { n: "$150–350", l: "Cost per Sq Ft" },
          { n: "100%", l: "Health Dept Pass Rate" },
          { n: "8-16 Wks", l: "Typical Build-Out" },
          { n: "All", l: "Cuisine Types Served" },
        ]}
        features={[
          { icon: "🔥", title: "Hood & Ventilation Systems", desc: "Type I and Type II commercial exhaust hoods with make-up air units, ductwork, and rooftop exhaust fans. Properly sized for your equipment layout and menu type." },
          { icon: "🧊", title: "Walk-In Cooler & Freezer", desc: "Insulated panel walk-in coolers and freezers with commercial refrigeration, condensing units, and proper drainage — sized for your menu volume and storage needs." },
          { icon: "🍺", title: "Bar & Beverage Systems", desc: "Fully plumbed bar construction with beer line runs, glycol systems, glass washers, ice machines, soda systems, and drainage. Licensed for Oklahoma liquor code requirements." },
          { icon: "🚿", title: "Grease Trap & Plumbing", desc: "Properly sized grease interceptors, floor drains with basket strainers, three-compartment sinks, hand sinks at every station, and mop sinks — all per Oklahoma plumbing code." },
          { icon: "🔥", title: "Fire Suppression (Ansul)", desc: "Ansul R-102 wet chemical fire suppression systems for cooking equipment, integrated with hood systems and connected to building fire alarm. Annual inspection-ready installation." },
          { icon: "📋", title: "Health Department Ready", desc: "We build for inspection confidence — proper hand sink placement, food-safe finishes, three-compartment sink sizing, pest-proof construction, and complete documentation for your health department review." },
        ]}
        sections={[
          {
            heading: "How much does restaurant construction cost per square foot in Tulsa?",
            body: `<p>Restaurant construction costs vary significantly based on concept, kitchen complexity, and finish level:</p>
<table><thead><tr><th>Restaurant Type</th><th>Cost per Sq Ft</th><th>Typical Size</th><th>Total Budget Range</th></tr></thead>
<tbody>
<tr><td>Fast Casual / QSR</td><td>$150–$220</td><td>1,500–2,500 SF</td><td>$225K–$550K</td></tr>
<tr><td>Full-Service Casual Dining</td><td>$200–$280</td><td>2,500–5,000 SF</td><td>$500K–$1.4M</td></tr>
<tr><td>Upscale / Fine Dining</td><td>$280–$400</td><td>3,000–6,000 SF</td><td>$840K–$2.4M</td></tr>
<tr><td>Bar / Brewery / Tap Room</td><td>$180–$300</td><td>2,000–5,000 SF</td><td>$360K–$1.5M</td></tr>
<tr><td>Commercial Kitchen Only (Ghost Kitchen)</td><td>$200–$350</td><td>800–2,000 SF</td><td>$160K–$700K</td></tr>
</tbody></table>
<p>These ranges include all MEP systems, hood ventilation, grease trap, fire suppression, and standard finishes. Kitchen equipment, furniture, and signage are typically additional. UDGOK provides itemized preconstruction budgets before lease signing.</p>`,
          },
          {
            heading: "What mechanical systems are required for commercial kitchen construction?",
            body: `<p>Commercial kitchens require specialized mechanical systems that most general contractors struggle with. UDGOK installs all of the following:</p>
<ul>
<li><strong>Type I Exhaust Hoods:</strong> Required over grease-producing equipment (fryers, grills, ranges). Includes grease-rated ductwork, exhaust fans, and make-up air supply to maintain neutral building pressure</li>
<li><strong>Type II Exhaust Hoods:</strong> Required over steam/heat-producing equipment (dishwashers, ovens). Different ductwork and fan requirements than Type I</li>
<li><strong>Make-Up Air Units (MAU):</strong> Replaces the air exhausted by kitchen hoods — critical for door operation, comfort, and energy efficiency. Improperly sized MAUs are the #1 restaurant construction mistake</li>
<li><strong>Ansul Fire Suppression:</strong> Wet chemical fire suppression covering all cooking equipment under Type I hoods. Must integrate with building fire alarm and gas shut-off</li>
<li><strong>Grease Interceptors:</strong> Sized per Tulsa plumbing code for your estimated grease output. Includes proper sampling ports and access for maintenance</li>
<li><strong>Floor Drains:</strong> Cast iron or coated floor drains with basket strainers at every equipment station, walk-in, and dish area — properly sloped for drainage</li>
<li><strong>Gas Piping:</strong> Properly sized natural gas distribution for all cooking equipment, including emergency gas shut-off valves and seismic connectors</li>
</ul>`,
          },
          {
            heading: "What is the restaurant construction timeline from lease signing to opening day?",
            body: `<p>Restaurant timelines are tight — every day of construction is a day without revenue. Here's a typical UDGOK restaurant build-out timeline:</p>
<ol>
<li><strong>Preconstruction & Design (2–4 weeks):</strong> Kitchen layout, equipment selection, and MEP design. We start this before your lease is executed whenever possible.</li>
<li><strong>Permitting (2–4 weeks):</strong> Building permit, mechanical permit, health department plan review, and fire marshal review — submitted simultaneously to compress timeline.</li>
<li><strong>Demolition & Rough-In (2–3 weeks):</strong> Existing space demo, utility relocation, underground plumbing (grease trap, floor drains), and electrical panel upgrades.</li>
<li><strong>Rough MEP & Framing (2–3 weeks):</strong> Hood ductwork, HVAC, electrical circuits, plumbing lines, fire suppression piping, and wall/ceiling framing.</li>
<li><strong>Finishes & Equipment (2–4 weeks):</strong> Flooring, ceramic tile, paint, bar construction, millwork, equipment installation, and hood/Ansul connection.</li>
<li><strong>Inspections & Punchlist (1–2 weeks):</strong> Final building inspection, health department walkthrough, fire marshal approval, and Certificate of Occupancy.</li>
</ol>
<p><strong>Total: 8–16 weeks</strong> from permit to opening, depending on complexity. Fast-casual concepts can be completed in 8–10 weeks; full-service restaurants typically take 12–16 weeks.</p>`,
          },
        ]}
        faqs={[
          { q: "Does UDGOK coordinate health department inspections?", a: "Yes. We coordinate all city health department plan reviews and inspections, including Tulsa Health Department, Broken Arrow, Jenks, and surrounding jurisdictions. We build for inspection confidence — proper hand sink placement at every station, food-safe wall and floor finishes, three-compartment sink sizing, and pest-proof construction. Our goal is a clean pass on your first inspection." },
          { q: "Can you build a restaurant inside an existing retail space?", a: "Absolutely. Most restaurant build-outs in Tulsa are conversions of existing retail or office spaces. We handle all the heavy infrastructure — cutting concrete for grease traps and floor drains, upgrading electrical panels for commercial kitchen loads, installing rooftop exhaust fans, and adding make-up air units. We evaluate the existing space before lease signing to identify any deal-breakers." },
          { q: "Do you handle bar and brewery construction?", a: "Yes. We build bars, breweries, tap rooms, and cocktail lounges including specialized systems: glycol-cooled beer line runs, keg cooler rooms, glass washers, ice machines, soda systems, under-bar plumbing, and decorative bar construction. We ensure compliance with Oklahoma ABLE Commission requirements for licensed premises." },
          { q: "What's the biggest mistake in restaurant construction?", a: "Improperly sized make-up air. When a kitchen hood exhausts 3,000+ CFM of air, that air must be replaced. Without adequate make-up air, you get negative pressure — doors won't close, HVAC struggles, and energy costs skyrocket. UDGOK properly sizes make-up air for every hood system, which many contractors overlook." },
          { q: "Can you work on an accelerated timeline?", a: "Yes. UDGOK offers fast-track restaurant construction by overlapping design, permitting, and early procurement phases. We've completed fast-casual build-outs in as few as 8 weeks by pre-ordering long-lead equipment, submitting permits immediately after design, and running parallel work crews. Every day saved is a day closer to revenue." },
        ]}
        cta="Get a Restaurant Estimate →"
      />
    </>
  );
}
