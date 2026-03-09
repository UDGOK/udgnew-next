import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Eye Clinic Construction Tulsa Oklahoma | UDGOK",
  description: "Specialized eye clinic and ophthalmology office construction in Tulsa, OK. UDGOK builds optometry and surgical eye centers with dark rooms, laser suites, and precise lighting control.",
  keywords: [
    "eye clinic construction Tulsa",
    "ophthalmology office build-out Oklahoma",
    "optometry office construction Tulsa OK",
    "LASIK suite construction",
    "dark room construction eye clinic",
    "eye doctor office build-out",
    "optical dispensary construction Tulsa",
    "eye surgery center construction Oklahoma",
  ],
  openGraph: {
    title: "Eye Clinic Construction Tulsa OK | 30+ Clinics Built | UDGOK",
    description: "Specialized ophthalmology and optometry construction with dark rooms, laser suites, and precision lighting.",
    url: "https://udgok.com/eye-clinic-construction-tulsa",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/eye-clinic-construction-tulsa" },
};

export default function EyeClinicPage() {
  return (
    <>
      <ServiceJsonLd
        name="Eye Clinic Construction"
        description="Ophthalmology and optometry clinic construction in Tulsa with specialized exam lanes, procedure rooms, and optical dispensaries."
        url="https://udgok.com/eye-clinic-construction-tulsa"
      />
      <ServicePage
        label="Eye Clinic Construction"
        title="Eye Clinic & Ophthalmology Construction"
        description="Precision-built optometry offices and surgical eye centers with dark rooms, laser suites, and specialized lighting design."
        imageSrc="/images/modern-medical-office-building-exterior-sunny-day.jpg"
        imageAlt="Eye clinic construction Tulsa by UDGOK"
        tldr="UDGOK has built 30+ optometry and ophthalmology clinics across Oklahoma. We construct exam lane layouts with precise 20-foot spacing, full blackout dark rooms, ANSI Z136-compliant laser suites, and retail-grade optical dispensaries. Eye clinic construction in Tulsa costs $180–$300 per square foot depending on whether the practice includes surgical capabilities."
        intro="Eye clinics demand a level of precision most contractors can't deliver. From blackout dark rooms and laser procedure suites to custom lane lengths and sub-floor plumbing for phoropter units — UDGOK has built over 30 optometry and ophthalmology facilities and understands every detail."
        stats={[
          { n: "30+", l: "Eye Clinics Built" },
          { n: "100%", l: "ADA Compliant" },
          { n: "OSHA", l: "Safety Standards" },
          { n: "0", l: "Failed Inspections" },
        ]}
        features={[
          { icon: "👁️", title: "Exam Lane Layout", desc: "Precise 20-foot exam lane spacing, sub-floor rough-in for phoropter pedestals, and recessed equipment blocking." },
          { icon: "🌑", title: "Dark Room Construction", desc: "Full blackout dark rooms with light-lock vestibules, specialized ventilation, and red-light-safe electrical." },
          { icon: "🔆", title: "Surgical Laser Suites", desc: "EMI-shielded laser procedure rooms with dedicated power, interlocks, and ANSI Z136-compliant warning systems." },
          { icon: "💡", title: "Lighting Control Systems", desc: "Zone-controlled dimmable lighting for exam rooms, optical dispensaries, and waiting areas." },
          { icon: "🏬", title: "Optical Dispensary", desc: "Millwork and display casework coordinated with your optical vendor for a retail-quality dispensary experience." },
          { icon: "♿", title: "ADA & Accessibility", desc: "Full ADA-compliant design including accessible exam lanes, restrooms, and patient flow corridors." },
        ]}
        sections={[
          {
            heading: "How much does eye clinic construction cost in Tulsa?",
            body: `<p>Eye clinic construction costs depend on scope — a basic optometry office differs significantly from an ophthalmology practice with surgical capabilities:</p>
<table><thead><tr><th>Practice Type</th><th>Cost per Sq Ft</th><th>Typical Total</th></tr></thead>
<tbody>
<tr><td>Optometry (exam + dispensary)</td><td>$180–$220</td><td>$360K–$660K</td></tr>
<tr><td>Ophthalmology (clinical only)</td><td>$220–$270</td><td>$550K–$1.1M</td></tr>
<tr><td>Surgical Eye Center (LASIK/cataract)</td><td>$270–$350</td><td>$810K–$1.75M</td></tr>
</tbody></table>
<p>Key cost drivers include dark room construction ($15,000–$30,000 per room), laser suite shielding and dedicated power ($40,000–$80,000), and optical dispensary millwork ($25,000–$60,000).</p>`,
          },
          {
            heading: "What are the construction requirements for ophthalmology dark rooms?",
            body: `<p>Dark rooms for dilated eye exams require specialized construction:</p>
<ul>
<li><strong>Full blackout:</strong> Zero ambient light — light-lock vestibules or double-door entry systems</li>
<li><strong>Sealed penetrations:</strong> All electrical outlets, HVAC registers, and wall penetrations sealed against light intrusion</li>
<li><strong>Red-safe lighting:</strong> Dedicated red-wavelength lighting circuits that don't affect pupil dilation</li>
<li><strong>Ventilation:</strong> HVAC supply and return ducted to prevent light leaks while maintaining temperature comfort</li>
<li><strong>Equipment provisions:</strong> Precise wall blocking and floor outlets for slit lamps, OCT machines, and visual field analyzers</li>
</ul>
<p>UDGOK has constructed dark rooms for 30+ ophthalmology practices and understands the exacting standards required for accurate diagnostic imaging.</p>`,
          },
        ]}
        faqs={[
          { q: "How much does it cost to build an eye clinic in Tulsa?", a: "Eye clinic construction costs $180–$350 per square foot in the Tulsa metro. A 2,500 sq ft optometry office with 4 exam lanes and a dispensary typically costs $450,000–$550,000. A surgical eye center with laser suites can exceed $1 million." },
          { q: "What makes eye clinic construction different from regular medical offices?", a: "Eye clinics require precise 20-foot exam lane spacing, full blackout dark rooms, EMI-shielded laser suites, and specialized lighting control systems. These are highly technical spaces that most general contractors have never built." },
          { q: "Can UDGOK build a LASIK surgery suite?", a: "Yes. We've built multiple laser eye surgery suites with ANSI Z136 safety compliance, dedicated clean power, humidity control, EMI shielding, and interlock warning systems. We coordinate directly with your laser equipment vendor for exact room specifications." },
          { q: "How long does it take to build an eye clinic?", a: "A standard optometry office takes 3–5 months. An ophthalmology practice with surgical capabilities takes 5–7 months due to additional MEP complexity, specialized room construction, and equipment coordination." },
        ]}
        cta="Plan Your Eye Clinic →"
      />
    </>
  );
}
