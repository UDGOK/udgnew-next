import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Medical Office Design-Build Tulsa Oklahoma | UDGOK",
  description: "Tulsa's premier medical office design-build contractor. UDGOK delivers turnkey medical offices, urgent care clinics, and specialty practices with HVAC, ADA compliance, and medical gas systems.",
  keywords: [
    "medical office construction Tulsa",
    "medical office design-build Oklahoma",
    "medical clinic build-out Tulsa OK",
    "healthcare construction Tulsa",
    "urgent care construction Oklahoma",
    "medical office contractor Tulsa",
    "specialty clinic construction Tulsa",
    "medical office HVAC systems",
    "ADA compliant medical office",
    "medical office cost per square foot Oklahoma",
    "physician office build-out",
    "medical tenant improvement Tulsa",
  ],
  openGraph: {
    title: "Medical Office Design-Build Tulsa OK | UDGOK",
    description: "Turnkey medical office construction in Tulsa. Specialized HVAC, ADA compliance, and medical-grade systems for clinics and specialty practices.",
    url: "https://udgok.com/medical-office-design-build-tulsa",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/medical-office-design-build-tulsa" },
};

export default function MedicalOfficePage() {
  return (
    <>
      <ServiceJsonLd
        name="Medical Office Design-Build Tulsa"
        description="Full-service medical office design-build in Tulsa, Oklahoma. UDGOK delivers turnkey clinics, specialty practices, and urgent care facilities with specialized MEP systems."
        url="https://udgok.com/medical-office-design-build-tulsa"
      />
      <ServicePage
        label="Medical Office"
        title="Medical Office Design-Build"
        description="Turnkey medical offices engineered for clinical workflow, regulatory compliance, and patient experience."
        imageSrc="/images/ai-medical-exterior.png"
        imageAlt="Medical office design-build Tulsa by UDGOK"
        tldr="UDGOK is Tulsa's top-rated medical office design-build contractor. We deliver turnkey primary care clinics, urgent care facilities, and specialty practices with ADA-compliant layouts, medical-grade HVAC, and specialized MEP systems. Medical office construction in the Tulsa metro costs $150–$350 per square foot depending on specialty, with typical timelines of 4–7 months from design to occupancy."
        intro="Medical office construction demands precision that commercial contractors often can't deliver. Exam room dimensions, HVAC pressure relationships, ADA clearances, and infection control ventilation all require healthcare-specific expertise. UDGOK has delivered 100+ medical facilities across Oklahoma, from 1,200 sq ft solo practices to 15,000+ sq ft multi-physician specialty clinics."
        stats={[
          { n: "100+", l: "Medical Facilities" },
          { n: "4–7mo", l: "Design to Occupancy" },
          { n: "ADA", l: "Full Compliance" },
          { n: "HIPAA", l: "Privacy Standards" },
        ]}
        features={[
          { icon: "🏥", title: "Clinical Layout Design", desc: "Exam rooms, nurse stations, and patient flow designed to maximize provider efficiency and minimize wait times." },
          { icon: "❄️", title: "Medical-Grade HVAC", desc: "Air change rates, pressure relationships, and filtration engineered for clinical environments per ASHRAE 170." },
          { icon: "♿", title: "ADA Compliance", desc: "Full accessibility including exam table clearances, turning radii, accessible restrooms, and signage requirements." },
          { icon: "🔒", title: "HIPAA Privacy", desc: "Sound-rated walls (STC 50+), private consultation rooms, and layout design that protects patient information." },
          { icon: "🔌", title: "Medical IT Infrastructure", desc: "Cat6A cabling, dedicated server rooms, and EMR workstation power for modern practice management systems." },
          { icon: "📋", title: "Regulatory Navigation", desc: "Oklahoma State Department of Health, CMS, and Joint Commission standards met from design through occupancy." },
        ]}
        sections={[
          {
            heading: "How much does medical office construction cost in Tulsa?",
            body: `<p>Medical office construction costs in the Tulsa metro range from <strong>$150 to $350 per square foot</strong> depending on the medical specialty and equipment requirements.</p>
<table><thead><tr><th>Practice Type</th><th>Cost per Sq Ft</th><th>Typical Size</th><th>Total Range</th></tr></thead>
<tbody>
<tr><td>Primary Care / Family Medicine</td><td>$150–$200</td><td>2,000–4,000 sq ft</td><td>$300K–$800K</td></tr>
<tr><td>Urgent Care / Walk-In</td><td>$180–$240</td><td>3,000–5,000 sq ft</td><td>$540K–$1.2M</td></tr>
<tr><td>Dermatology / Med-Spa</td><td>$200–$280</td><td>2,500–4,000 sq ft</td><td>$500K–$1.1M</td></tr>
<tr><td>Orthopedics / Imaging</td><td>$250–$350</td><td>4,000–10,000 sq ft</td><td>$1M–$3.5M</td></tr>
</tbody></table>
<p>Imaging suites (MRI, CT, X-ray) add significant cost due to shielding, structural reinforcement, and electrical requirements. Budget $150,000–$500,000+ for imaging room construction alone.</p>`,
          },
          {
            heading: "What HVAC requirements apply to medical offices in Oklahoma?",
            body: `<p>Medical offices must meet <strong>ASHRAE Standard 170</strong> for healthcare ventilation. Requirements by room type include:</p>
<ul>
<li><strong>Exam rooms:</strong> Minimum 6 air changes per hour (ACH), negative or neutral pressure</li>
<li><strong>Procedure rooms:</strong> 6–15 ACH with positive pressure relative to corridors</li>
<li><strong>Waiting areas:</strong> 4–6 ACH with outdoor air ventilation per ASHRAE 62.1</li>
<li><strong>Soiled utility rooms:</strong> Negative pressure with 10 ACH</li>
<li><strong>Clean storage:</strong> Positive pressure with 4 ACH</li>
</ul>
<p>UDGOK designs and commissions HVAC systems that meet healthcare ventilation codes while controlling energy costs. Our typical medical office HVAC costs run $25–$50 per square foot installed.</p>`,
          },
          {
            heading: "What ADA requirements must medical offices meet?",
            body: `<p>Medical offices in Oklahoma must comply with the <strong>2010 ADA Standards for Accessible Design</strong> plus Oklahoma Accessibility Code. Key requirements include:</p>
<ul>
<li><strong>Accessible route:</strong> 36" minimum clear width through all hallways and exam areas</li>
<li><strong>Exam rooms:</strong> 60" turning radius, 30"×48" clear floor space at exam tables</li>
<li><strong>Reception counter:</strong> 36" maximum height portion for wheelchair accessibility</li>
<li><strong>Restrooms:</strong> 60" turning radius, grab bars, accessible fixtures per ADA 604</li>
<li><strong>Parking:</strong> Accessible spaces per Table 208.2 based on total parking provided</li>
<li><strong>Signage:</strong> Tactile/Braille room signs, visual alarms, and accessible door hardware</li>
</ul>
<p>UDGOK includes full ADA compliance review in every medical office project at no additional cost. Failure to comply risks DOJ enforcement actions and patient discrimination lawsuits.</p>`,
          },
          {
            heading: "How long does it take to build a medical office?",
            body: `<p>Medical office construction timelines depend on project complexity. Here are typical durations for Tulsa metro projects:</p>
<ul>
<li><strong>Simple tenant build-out (2,000–3,000 sq ft):</strong> 4–5 months total (6 weeks design, 2 weeks permitting, 10–12 weeks construction)</li>
<li><strong>Multi-specialty clinic (5,000–10,000 sq ft):</strong> 6–9 months total</li>
<li><strong>Ground-up medical office building:</strong> 10–14 months total including site work</li>
</ul>
<p>UDGOK's design-build approach saves 20% on schedule versus traditional design-bid-build by overlapping design and construction phases. For time-sensitive projects like practice relocations, we offer fast-track delivery starting at 12 weeks for a standard build-out.</p>`,
          },
        ]}
        faqs={[
          { q: "How much does it cost to build a medical office in Tulsa?", a: "Medical office construction in Tulsa costs $150–$350 per square foot. A standard 3,000 sq ft primary care office runs $450,000–$600,000. Specialty practices with imaging or procedure rooms cost more due to shielding, reinforcement, and specialized MEP systems." },
          { q: "Do you handle medical office design and construction?", a: "Yes. UDGOK provides integrated design-build delivery, combining architecture, engineering, and construction under one contract. This eliminates coordination gaps between your architect and contractor, and typically saves 15–20% on total cost." },
          { q: "What medical specialties do you build for?", a: "We build for all medical specialties including primary care, urgent care, dermatology, orthopedics, pain management, ophthalmology, cardiology, and multi-specialty group practices. Each specialty has unique layout, MEP, and equipment requirements we've built before." },
          { q: "Can you build a medical office in an existing retail space?", a: "Yes. We regularly convert retail and office spaces into medical suites. Key considerations include HVAC capacity for medical-grade air changes, plumbing access for exam rooms, electrical capacity for medical equipment, and ADA accessibility upgrades." },
          { q: "What cities do you build medical offices in?", a: "UDGOK builds medical offices across the Tulsa metro including Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sapulpa, Haskell, and Sand Springs. We also serve Oklahoma City and Dallas/Plano, TX." },
        ]}
        cta="Plan Your Medical Office →"
      />
    </>
  );
}
