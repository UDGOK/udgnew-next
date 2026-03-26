import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Ambulatory Surgery Center Construction Oklahoma | UDGOK",
  description:
    "Turnkey ambulatory surgery center (ASC) and outpatient facility construction in Tulsa, Oklahoma City, and Dallas. AAAHC/CMS-ready operating rooms, sterile processing, medical gas, and HVAC. 100% NFPA 99 first-pass certification.",
  keywords: [
    "ambulatory surgery center construction",
    "ASC construction Oklahoma",
    "outpatient surgery center contractor",
    "ambulatory surgery center build out cost",
    "operating room construction Tulsa",
    "surgical suite construction",
    "ASC design build Oklahoma",
    "CMS certified surgery center construction",
    "outpatient facility construction cost per square foot",
    "sterile processing department construction",
  ],
  openGraph: {
    title: "Ambulatory Surgery Center Construction | UDGOK",
    description:
      "Turnkey ASC and outpatient facility construction. AAAHC/CMS-ready operating rooms, sterile processing, NFPA 99 medical gas. Serving Oklahoma and Texas.",
    url: "https://udgok.com/ambulatory-surgery-center-construction",
    type: "website",
  },
  alternates: {
    canonical: "https://udgok.com/ambulatory-surgery-center-construction",
  },
};

export default function ASCPage() {
  return (
    <>
      <ServiceJsonLd
        name="Ambulatory Surgery Center Construction"
        description="Turnkey ambulatory surgery center (ASC) and outpatient facility construction including operating rooms, sterile processing, medical gas systems, and specialized HVAC. Serving Oklahoma and Texas."
        url="https://udgok.com/ambulatory-surgery-center-construction"
      />
      <ServicePage
        label="Ambulatory Surgery Centers"
        title="Surgery Center Construction"
        description="Turnkey ASC and outpatient facility construction — from site selection to CMS certification. Operating rooms, sterile processing, and medical gas systems delivered on schedule."
        imageSrc="/images/asc-construction-hero.png"
        imageAlt="Ambulatory surgery center construction by UDGOK"
        tldr="UDGOK delivers turnkey ambulatory surgery center (ASC) construction for single-specialty and multi-specialty surgical groups across Oklahoma and Texas. ASC construction costs range from $350–$650 per square foot depending on specialty, OR count, and imaging requirements. We handle every specialized system — Class B/C operating room HVAC with 20+ air changes/hour, NFPA 99 medical gas installation (O2, N2O, medical air, vacuum, WAGD), sterile processing department (SPD) design, and CMS/AAAHC-ready infrastructure. Our healthcare construction team completes ASC projects 23% faster than the industry average."
        intro="The $105 billion ambulatory surgery center market is reshaping healthcare delivery. More procedures are migrating from hospital ORs to freestanding ASCs — driven by better patient outcomes, lower costs, and faster recovery. But ASC construction demands a contractor who understands operating room HVAC classifications, sterile processing workflows, medical gas zone requirements, and CMS Conditions for Coverage. UDGOK builds surgery centers daily, delivering clinical infrastructure that passes inspection on the first attempt."
        stats={[
          { n: "100%", l: "First-Pass CMS Ready" },
          { n: "$350–650", l: "Cost per Sq Ft" },
          { n: "23%", l: "Faster Than Average" },
          { n: "50+", l: "Healthcare Projects" },
        ]}
        features={[
          { icon: "🏥", title: "Operating Room Construction", desc: "Class B and Class C operating rooms with laminar airflow, 20+ air changes/hour, seamless wall/floor transitions, surgical lighting, and equipment ceiling booms." },
          { icon: "⚗️", title: "Medical Gas Systems", desc: "NFPA 99 certified installation of oxygen, nitrous oxide, medical air, vacuum, and waste anesthetic gas disposal (WAGD) with zone valve boxes and alarm panels." },
          { icon: "🧹", title: "Sterile Processing (SPD)", desc: "Complete SPD design and construction with decontamination, clean assembly, sterile storage, and one-way workflow that meets AAMI ST79 and AORN standards." },
          { icon: "❄️", title: "Specialized HVAC", desc: "Positive-pressure ORs, negative-pressure isolation, precise temperature/humidity control, HEPA filtration, and dedicated air handling units per CMS requirements." },
          { icon: "🔌", title: "Emergency Power Systems", desc: "Life safety and critical branch emergency power, automatic transfer switches, UPS for critical monitors, and generator sizing for full surgical load." },
          { icon: "📋", title: "Accreditation Readiness", desc: "Built to pass CMS, AAAHC, Joint Commission, and state health department surveys. Every system documented, labeled, and tested before your surveyor arrives." },
        ]}
        sections={[
          {
            heading: "How much does it cost to build an ambulatory surgery center in Oklahoma?",
            body: `<p>ASC construction costs vary significantly based on specialty mix, OR count, and facility complexity. Here are 2026 cost ranges for Oklahoma:</p>
<table><thead><tr><th>ASC Type</th><th>Cost per Sq Ft</th><th>Typical Size</th><th>Total Budget Range</th></tr></thead>
<tbody>
<tr><td>Single-Specialty (GI/Ophthalmology)</td><td>$350–$450</td><td>4,000–8,000 SF</td><td>$1.4M–$3.6M</td></tr>
<tr><td>Multi-Specialty (Ortho/ENT/General)</td><td>$450–$550</td><td>8,000–15,000 SF</td><td>$3.6M–$8.25M</td></tr>
<tr><td>Multi-Specialty with Imaging</td><td>$500–$650</td><td>10,000–20,000 SF</td><td>$5M–$13M</td></tr>
<tr><td>Spine/Total Joint ASC</td><td>$550–$700</td><td>12,000–25,000 SF</td><td>$6.6M–$17.5M</td></tr>
</tbody></table>
<p>These ranges include all MEP systems, medical gas, OR HVAC, sterile processing, and standard finishes. Site work, land, equipment, and furniture are additional. UDGOK provides detailed preconstruction budgets before you commit to a site or lease.</p>`,
          },
          {
            heading: "What are the key differences between ASC construction and standard medical office construction?",
            body: `<p>ASCs require significantly more complex infrastructure than standard medical offices. Key differences include:</p>
<ul>
<li><strong>HVAC Classification:</strong> Operating rooms require Class B or C ventilation with 20+ total air changes per hour and positive pressure relative to corridors — far beyond the 6 ACH typical of exam rooms</li>
<li><strong>Medical Gas Complexity:</strong> ASCs need oxygen, nitrous oxide, medical air, vacuum, and WAGD (waste anesthetic gas disposal) — with zone valve boxes, master alarm panels, and NFPA 99 certification testing</li>
<li><strong>Sterile Processing:</strong> A full SPD with decontamination, clean assembly, and sterile storage — designed for one-way workflow to prevent cross-contamination</li>
<li><strong>Emergency Power:</strong> Life safety, critical, and equipment branch emergency power circuits with automatic transfer in 10 seconds — CMS mandated</li>
<li><strong>Infection Control:</strong> Seamless flooring, antimicrobial wall panels, sealed ceiling grids, and surgical-grade hand scrub stations at every OR entry</li>
<li><strong>Regulatory Burden:</strong> CMS Conditions for Coverage, state Medicare certification, and optional AAAHC/Joint Commission accreditation — each imposing specific construction requirements</li>
</ul>`,
          },
          {
            heading: "What is the timeline for ASC construction from design to first case?",
            body: `<p>A typical ASC project follows this timeline from initial planning to performing the first surgical case:</p>
<ol>
<li><strong>Site Selection & Feasibility (1–2 months):</strong> Location analysis, zoning verification, traffic/parking studies, and preliminary budget development</li>
<li><strong>Design & Permitting (3–5 months):</strong> Architectural design, MEP engineering, equipment planning, health department review, and building permit acquisition</li>
<li><strong>Construction (8–14 months):</strong> Shell construction, MEP rough-in, medical gas installation, OR finishing, SPD build-out, and systems commissioning</li>
<li><strong>Commissioning & Certification (1–2 months):</strong> Medical gas certification testing, HVAC balancing, fire alarm testing, CMS survey preparation, and accreditation survey</li>
</ol>
<p><strong>Total timeline: 13–23 months</strong> depending on project complexity. UDGOK's design-build delivery model can compress this by 3–4 months by overlapping design and early construction phases.</p>`,
          },
        ]}
        faqs={[
          { q: "Does UDGOK handle CMS certification requirements for ASCs?", a: "Yes. We build every ASC to meet CMS Conditions for Coverage from day one. This includes specific requirements for OR ventilation, medical gas systems, emergency power, fire safety, infection control, and physical environment. We provide full documentation packages and coordinate all inspections required for Medicare certification." },
          { q: "Can you build an ASC inside an existing medical office building?", a: "Yes — this is one of our specialties. Converting existing medical office space into an ASC requires significant MEP upgrades including OR-grade HVAC, medical gas systems, emergency power, and sterile processing. UDGOK evaluates the existing building systems to determine feasibility and provides accurate conversion budgets before you commit." },
          { q: "What medical gas systems does an ASC require?", a: "A typical ASC requires oxygen (O2), nitrous oxide (N2O), medical air, surgical vacuum, and waste anesthetic gas disposal (WAGD). Each system includes source equipment, distribution piping, zone valve boxes, outlet stations, and master alarm panels — all installed and certified per NFPA 99 Health Care Facilities Code." },
          { q: "How does UDGOK handle infection control during ASC construction?", a: "We implement Infection Control Risk Assessment (ICRA) protocols on every healthcare project. This includes negative-pressure containment barriers, HEPA filtration, sealed construction zones, dedicated debris removal paths, and air quality monitoring. For ASCs built within active medical facilities, we coordinate all work to prevent disruption to existing clinical operations." },
          { q: "Do you provide equipment planning for ASCs?", a: "Yes. Our preconstruction team coordinates with your equipment vendors to ensure proper infrastructure — electrical circuits, medical gas outlets, structural support, data connections, and equipment clearances — is designed into the construction documents from the start. This prevents costly change orders once construction begins." },
        ]}
        cta="Plan Your Surgery Center →"
      />
    </>
  );
}
