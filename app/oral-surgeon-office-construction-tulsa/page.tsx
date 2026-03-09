import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Oral Surgery Center Construction Tulsa OK | UDGOK",
  description: "Specialized oral surgery office construction in Tulsa, Oklahoma. UDGOK builds AAOMS-compliant surgery suites with medical gas systems, recovery rooms, and sedation infrastructure.",
  keywords: [
    "oral surgery center construction Tulsa",
    "oral surgeon office build-out Oklahoma",
    "oral surgery suite construction",
    "AAOMS compliant surgery suite",
    "sedation suite construction Tulsa",
    "oral surgery medical gas installation",
    "surgical center design-build Oklahoma",
    "OMS office construction Tulsa OK",
  ],
  openGraph: {
    title: "Oral Surgery Center Construction Tulsa | UDGOK",
    description: "AAOMS-compliant oral surgery center construction with medical gas, sedation infrastructure, and recovery rooms.",
    url: "https://udgok.com/oral-surgeon-office-construction-tulsa",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/oral-surgeon-office-construction-tulsa" },
};

export default function OralSurgeryPage() {
  return (
    <>
      <ServiceJsonLd
        name="Oral Surgery Center Construction"
        description="Specialized oral surgery office construction including AAOMS-compliant surgery suites, medical gas systems, and sedation infrastructure in Tulsa, Oklahoma."
        url="https://udgok.com/oral-surgeon-office-construction-tulsa"
      />
      <ServicePage
        label="Oral Surgery"
        title="Oral Surgery Center Construction"
        description="Surgical-suite precision including certified medical gas systems, recovery rooms, and AAOMS-compliant procedure suites."
        imageSrc="/images/ai-surgery-suite.png"
        imageAlt="Oral surgery center construction Tulsa by UDGOK"
        tldr="UDGOK builds AAOMS-compliant oral surgery centers in Tulsa, Oklahoma with surgical suites, IV sedation infrastructure, medical gas systems (O2, N2O, medical air, vacuum), recovery rooms, and CBCT imaging suites. Oral surgery office construction costs $250–$350 per square foot and takes 5–7 months. We hold ASSE 6010 certification for in-house medical gas installation."
        intro="Oral surgery centers are among the most complex outpatient medical construction projects. IV sedation requires AAOMS-compliant surgical suites with specific ventilation, monitoring, and emergency equipment infrastructure. UDGOK has built multiple OMS practices across Oklahoma — we know the exact requirements your anesthesia delivery system, surgical lighting, and recovery workflow demand."
        stats={[
          { n: "$250–350", l: "Per Sq Ft Cost" },
          { n: "5–7mo", l: "Typical Build" },
          { n: "AAOMS", l: "Compliant Suites" },
          { n: "ASSE 6010", l: "Gas Installation" },
        ]}
        features={[
          { icon: "🔬", title: "Surgical Suites", desc: "Operating rooms with proper air exchanges, positive pressure, seamless flooring, and equipment mounting infrastructure." },
          { icon: "😴", title: "Sedation Infrastructure", desc: "IV sedation and general anesthesia infrastructure including gas delivery, monitoring alcoves, and emergency power." },
          { icon: "🫁", title: "Medical Gas Systems", desc: "Complete O2, N2O, medical air, vacuum, and WAGD systems installed by our ASSE 6010 certified team." },
          { icon: "🛏️", title: "Recovery Areas", desc: "Post-operative recovery rooms with nurse monitoring stations, oxygen access, and emergency equipment provisions." },
          { icon: "📸", title: "Imaging Suites", desc: "CBCT and panoramic X-ray rooms with lead-lined walls, shielding calculations, and proper electrical infrastructure." },
          { icon: "♿", title: "ADA Compliance", desc: "Full wheelchair accessibility from parking through recovery, plus bariatric accommodation where required." },
        ]}
        sections={[
          {
            heading: "What are the AAOMS requirements for oral surgery office construction?",
            body: `<p>The American Association of Oral and Maxillofacial Surgeons (AAOMS) sets facility standards for offices performing IV sedation and general anesthesia. Construction requirements include:</p>
<ul>
<li><strong>Operating room:</strong> Minimum 120 sq ft clear floor area, non-porous seamless flooring, washable wall surfaces</li>
<li><strong>Ventilation:</strong> Minimum 15 air changes per hour (ACH) with positive pressure in surgical suites</li>
<li><strong>Emergency equipment:</strong> Dedicated electrical circuits for defibrillators, suction, and monitoring</li>
<li><strong>Medical gases:</strong> Piped O2, N2O with WAGD, medical air, and vacuum at each surgical position</li>
<li><strong>Recovery room:</strong> Adjacent recovery area with direct visual monitoring capability and oxygen access</li>
<li><strong>Emergency egress:</strong> Direct route from surgical suite to emergency vehicle access without stairs</li>
</ul>
<p>UDGOK pre-designs all surgical suites to these standards so your AAOMS office evaluation passes on the first inspection.</p>`,
          },
          {
            heading: "How much does oral surgery office construction cost?",
            body: `<p>Oral surgery offices cost more per square foot than general dental offices due to surgical suite requirements:</p>
<table><thead><tr><th>Component</th><th>Cost per Sq Ft</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>General office areas</td><td>$150–$200</td><td>Reception, consult rooms, admin</td></tr>
<tr><td>Surgical suites</td><td>$300–$400</td><td>Specialty HVAC, medical gas, finishes</td></tr>
<tr><td>Recovery rooms</td><td>$200–$275</td><td>Monitoring infrastructure, O2 access</td></tr>
<tr><td>CBCT/Imaging room</td><td>$250–$350</td><td>Lead lining, electrical, structural</td></tr>
</tbody></table>
<p>A blended rate across a full 3,500–5,000 sq ft oral surgery practice is <strong>$250–$350 per square foot</strong>, or $875,000–$1,750,000 total construction cost. Medical gas systems alone range $35,000–$60,000.</p>`,
          },
        ]}
        faqs={[
          { q: "How much does it cost to build an oral surgery office?", a: "Oral surgery office construction costs $250–$350 per square foot blended across all areas. A 4,000 sq ft OMS practice with two surgical suites, recovery room, and CBCT suite typically costs $1,000,000–$1,400,000 for construction, plus $200,000–$400,000 for equipment." },
          { q: "What medical gas systems does an oral surgery office need?", a: "A full OMS office requires oxygen (O2), nitrous oxide (N2O), medical air, vacuum, and waste anesthetic gas disposal (WAGD). UDGOK installs all five gas types with zone valve boxes, alarm panels, and ASSE 6030 third-party verification." },
          { q: "How long does it take to build an oral surgery center?", a: "Most oral surgery office construction projects take 5–7 months from permit to occupancy. The extended timeline versus general dental is due to more complex MEP systems, additional inspections, and AAOMS facility evaluation requirements." },
          { q: "Does UDGOK handle AAOMS facility compliance?", a: "Yes. We design and build all surgical suites to AAOMS office evaluation standards, including required ventilation rates, medical gas access, emergency equipment provisions, and recovery room configurations." },
        ]}
        cta="Plan Your Surgery Center →"
      />
    </>
  );
}
