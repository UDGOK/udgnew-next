import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dental Office Construction Tulsa Oklahoma | UDGOK",
  description: "Expert dental office construction in Tulsa, OK. UDGOK builds fully equipped, ADA-compliant dental suites with integrated plumbing, cabinetry, medical gas, and equipment rough-in. 80+ dental offices delivered.",
  keywords: [
    "dental office construction Tulsa",
    "dental clinic build-out Oklahoma",
    "dental operatory construction Tulsa OK",
    "dental office contractor Tulsa",
    "dental office plumbing rough-in",
    "dental office HVAC infection control",
    "dental chair outlet installation",
    "dental office design-build Tulsa",
    "dental construction cost Tulsa Oklahoma",
    "pediatric dental office construction",
    "orthodontist office build-out Tulsa",
    "dental office medical gas installation",
  ],
  openGraph: {
    title: "Dental Office Construction Tulsa OK | 80+ Clinics Built | UDGOK",
    description: "Tulsa's most experienced dental office contractor. 80+ clinics built with specialized plumbing, medical gas, and infection control HVAC.",
    url: "https://udgok.com/dental-office-construction-tulsa",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/dental-office-construction-tulsa" },
};

export default function DentalOfficePage() {
  return (
    <>
      <ServiceJsonLd
        name="Dental Office Construction Tulsa"
        description="Specialized dental clinic construction in Tulsa, Oklahoma. UDGOK has built 80+ dental offices including operatories, sterilization centers, medical gas systems, and ADA-compliant patient spaces."
        url="https://udgok.com/dental-office-construction-tulsa"
      />
      <ServicePage
        label="Dental Construction"
        title="Dental Office Construction"
        description="Purpose-built dental offices with integrated treatment room plumbing, equipment rough-in, and clinical workflow optimization."
        imageSrc="/images/dental-office-construction.png"
        imageAlt="Dental office construction Tulsa by UDGOK"
        tldr="UDGOK is Tulsa, Oklahoma's leading dental office construction contractor with 80+ completed clinics. We build general, pediatric, orthodontic, and oral surgery dental offices from 1,500 to 10,000+ sq ft, including operatory plumbing rough-in, medical gas systems, infection control HVAC, and ADA-compliant layouts. Typical dental build-outs in the Tulsa metro run $140–$280 per square foot and take 3–5 months from permit to certificate of occupancy."
        intro="Dental office construction requires a specialized approach — from chair outlet rough-in to nitrous oxide systems to infection control HVAC. UDGOK has built over 80 dental offices across Oklahoma and Texas, and we speak your language. We understand operatory flow, sterilization adjacencies, and the 37 utility connections every chair position needs."
        stats={[
          { n: "80+", l: "Dental Offices Built" },
          { n: "3–5mo", l: "Typical Timeline" },
          { n: "100%", l: "ADA Compliant" },
          { n: "OSHA", l: "Safety Standards" },
        ]}
        features={[
          { icon: "🦷", title: "Treatment Room Rough-In", desc: "Precisely located chair outlets, water, drain, air, and vacuum connections for every operatory." },
          { icon: "💧", title: "Dental Plumbing Systems", desc: "Dedicated dental water supply, vacuum systems, and amalgam separators meeting EPA and local codes." },
          { icon: "😷", title: "Infection Control HVAC", desc: "Sterilization room exhaust, pressure relationships, and air quality engineered to OSHA standards." },
          { icon: "🏗️", title: "Cabinetry Coordination", desc: "We work directly with your dental equipment and millwork vendors to ensure perfect coordination." },
          { icon: "💡", title: "Lighting Design", desc: "Task and ambient lighting optimized for clinical environments including operatory overhead mounts." },
          { icon: "🔌", title: "Equipment Power", desc: "Dedicated circuits for panoramic X-ray, CBCT, sterilizers, and compressors properly spec'd." },
        ]}
        sections={[
          {
            heading: "How much does dental office construction cost in Tulsa?",
            body: `<p>Dental office construction costs in the Tulsa metro area range from <strong>$140 to $280 per square foot</strong> depending on practice type and finish level. A basic 4-operatory general dentistry build-out (1,800 sq ft) typically costs $250,000–$380,000. A premium 8-operatory practice with surgery suite and CBCT room (3,500+ sq ft) can reach $700,000–$1,000,000+.</p>
<table><thead><tr><th>Practice Type</th><th>Cost per Sq Ft</th><th>Typical Total</th></tr></thead>
<tbody>
<tr><td>Basic General Dentistry</td><td>$140–$170</td><td>$210K–$340K</td></tr>
<tr><td>Standard Multi-Operatory</td><td>$170–$210</td><td>$340K–$630K</td></tr>
<tr><td>Premium / Specialty</td><td>$210–$280</td><td>$630K–$1.4M</td></tr>
<tr><td>With Oral Surgery Suite</td><td>$250–$350</td><td>$875K–$1.75M</td></tr>
</tbody></table>
<p>These costs include general conditions, overhead, and dental-specific infrastructure but exclude dental equipment ($80K–$200K+).</p>`,
          },
          {
            heading: "What does each dental operatory require for construction?",
            body: `<p>Each dental chair position requires approximately <strong>$10,000–$18,000 in utility infrastructure</strong> during construction, including:</p>
<ul>
<li>Under-slab plumbing — hot/cold water, drain, and vacuum lines</li>
<li>Compressed air supply lines (medical-grade)</li>
<li>Electrical — dedicated 120V and 220V circuits for chairs and equipment</li>
<li>Data/Cat6 cabling for digital sensors, intraoral cameras, and practice management</li>
<li>Nitrous oxide and oxygen piping (for sedation practices)</li>
<li>Suction/vacuum evacuation connections</li>
</ul>
<p>A 6-chair practice will have $60,000–$108,000 just in utility rough-in — typically 15–25% of total construction costs. UDGOK coordinates all operatory connections with your equipment vendor to ensure exact placement.</p>`,
          },
          {
            heading: "How long does it take to build a dental office in Oklahoma?",
            body: `<p>A typical dental office build-out in the Tulsa metro takes <strong>3 to 5 months</strong> from permit issuance to certificate of occupancy. Here's the breakdown:</p>
<ul>
<li><strong>Preconstruction & Design:</strong> 4–8 weeks (floor plan, MEP engineering, permit submission)</li>
<li><strong>Permitting:</strong> 2–4 weeks (City of Tulsa averages 3 weeks for commercial TI permits)</li>
<li><strong>Construction:</strong> 10–16 weeks depending on scope</li>
<li><strong>Inspections & CO:</strong> 1–2 weeks</li>
</ul>
<p>UDGOK's design-build approach overlaps design and permitting phases, often saving 4–6 weeks versus traditional delivery. We have delivered multiple fast-track dental projects in under 90 days.</p>`,
          },
          {
            heading: "What HVAC and infection control standards apply to dental offices?",
            body: `<p>Dental offices in Oklahoma must meet OSHA bloodborne pathogen standards, ADA Accessibility Guidelines, and Oklahoma State Department of Health regulations. Key HVAC requirements include:</p>
<ul>
<li><strong>Sterilization rooms:</strong> Negative pressure relative to adjacent spaces with dedicated exhaust</li>
<li><strong>Operatories:</strong> Minimum 6 air changes per hour with proper temperature and humidity control</li>
<li><strong>X-ray rooms:</strong> Lead-lined walls (1/16" to 1/8") with proper shielding calculations by a certified physicist</li>
<li><strong>Lab areas:</strong> Separate ventilation for dust, fumes, and chemical vapors</li>
<li><strong>Waste anesthetic gas disposal (WAGD):</strong> Required for nitrous oxide delivery systems per NFPA 99</li>
</ul>
<p>UDGOK designs and installs HVAC systems that meet all healthcare codes while providing energy-efficient comfort for patients and staff.</p>`,
          },
        ]}
        faqs={[
          { q: "How much does it cost to build a dental office in Tulsa, Oklahoma?", a: "A dental office build-out in Tulsa costs $140–$280 per square foot depending on the practice type. A standard 2,500 sq ft general dentistry office typically runs $340,000–$630,000 including all dental-specific infrastructure. This does not include dental equipment, which adds $80,000–$200,000+." },
          { q: "How long does dental office construction take?", a: "Most dental office build-outs take 3–5 months from building permit to certificate of occupancy. UDGOK's design-build approach can reduce this by 4–6 weeks by overlapping design and permitting phases." },
          { q: "What certifications does UDGOK hold for dental construction?", a: "UDGOK is a licensed Oklahoma General Contractor with ASSE 6010 certified medical gas installers, OSHA 30 trained superintendents, and PMP-certified project managers. We build to ADA, NFPA 99, and Oklahoma State Department of Health standards." },
          { q: "Do you handle dental equipment installation?", a: "UDGOK coordinates directly with your dental equipment vendor (A-dec, Pelton & Crane, Planmeca, etc.) for precise chair outlet placement, but equipment procurement and installation is typically handled by the vendor. We rough-in all plumbing, electrical, data, and gas connections to their exact specifications." },
          { q: "Can you build a dental office while my current lease is still active?", a: "Yes. We regularly fast-track dental build-outs so they're ready before your current lease expires. Our preconstruction team can begin design and permitting while you finalize your new lease, minimizing downtime between locations." },
          { q: "What areas do you serve for dental construction?", a: "UDGOK builds dental offices across the Tulsa metro including Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sapulpa, and Haskell. We also serve Oklahoma City and the Dallas/Plano, TX metro." },
        ]}
        cta="Plan Your Dental Build →"
      />
    </>
  );
}
