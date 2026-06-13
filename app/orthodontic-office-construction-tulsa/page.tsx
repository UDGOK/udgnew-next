import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, LocalBusinessJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Orthodontic Office Construction Tulsa OK",
  description:
    "Tulsa's only contractor specializing in orthodontist office design-build. Open bay layouts, Invisalign scan stations, 3D print labs, teen-friendly design, and iTero integration — built by UDGOK.",
  openGraph: {
    title: "Orthodontic Office Construction | Tulsa OK | UDGOK",
    description: "Tulsa's specialist orthodontic office builder. Open bay layouts, digital workflow integration, and teen-friendly design. Call (918) 520-3823.",
    url: "https://www.udgok.com/orthodontic-office-construction-tulsa",
    type: "website",
    images: [{ url: "https://www.udgok.com/images/orthodontic-office-hero.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.udgok.com/orthodontic-office-construction-tulsa" },
};

export default function OrthodonticOfficePage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Orthodontic Office Construction", url: "https://www.udgok.com/orthodontic-office-construction-tulsa" }
  ];
  const PAGE_FAQS = [
          { q: "How much does it cost to build an orthodontic office in Tulsa?", a: "Orthodontic office construction in Tulsa costs $150–$200 per square foot. A standard 2,500 sq ft practice with 8 open bay chairs, a records room, consultation suite, and sterilization center costs $375,000–$500,000. Practices adding CBCT suites and in-house 3D print labs should budget an additional $30,000–$60,000 for lead-lined walls, dedicated electrical, and ventilation." },
          { q: "What is the difference between orthodontic and general dental construction?", a: "The three biggest differences are: (1) layout — orthodontics uses open treatment bays instead of enclosed operatories, requiring column-free spans and different HVAC zoning; (2) electrical — ortho offices need significantly more data/power drops per treatment position for scanners, monitors, and digital workflows; (3) flow — patient visit times average 15–30 minutes vs. 45–90 minutes in general dentistry, requiring wider corridors and faster patient turnover design." },
          { q: "How many chairs should my orthodontic office have?", a: "The industry standard is 3–4 treatment chairs per doctor. A solo orthodontist typically needs 6–8 chairs. A two-doctor practice needs 10–14 chairs. UDGOK designs flexible open bay configurations that allow you to add 2–4 chairs without renovation by pre-roughing plumbing and electrical for future positions." },
          { q: "Do I need a 3D print lab in my orthodontic office?", a: "If you're producing clear aligners in-house (SureSmile, uLab, or proprietary), yes. An in-house 3D print lab reduces per-aligner cost from $15–$25 (outsourced) to $2–$5 (in-house) and cuts turnaround from 5–10 days to same-day. UDGOK builds ventilated, resin-safe print rooms with sealed flooring, dedicated 20A circuits, and UV curing stations." },
          { q: "What technology infrastructure does a modern orthodontic office need?", a: "At minimum: (1) Cat6a Ethernet to every chair position, (2) dedicated 20A circuits for iTero/3Shape scanners, (3) a 72×72 inch HVAC closet sized for server equipment, (4) HDMI/USB-C drops for patient-facing monitors at each chair, and (5) a CBCT alcove with lead-lined walls if placing imaging on-site. UDGOK pre-wires for all major practice management systems including Dolphin, OrthoFi, and Cloud 9." },
          { q: "How long does it take to build an orthodontic office?", a: "Ground-up orthodontic office construction takes 4–6 months from permit issuance to certificate of occupancy. Tenant improvement build-outs take 3–4 months. UDGOK's design-build approach saves 4–6 weeks by overlapping architectural design, permit submittal, and equipment procurement." },
        ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
        name="Orthodontic Office Construction — Tulsa, Oklahoma"
        description="UDGOK designs and builds orthodontic offices in Tulsa, OK. Open bay treatment areas, Invisalign/iTero scan stations, 3D print labs, sterilization centers, and teen-friendly waiting areas — all purpose-built for modern orthodontic workflows."
        url="https://www.udgok.com/orthodontic-office-construction-tulsa"
        image="https://www.udgok.com/images/orthodontic-office-hero.png"
      />
      <LocalBusinessJsonLd
        description="Orthodontic office design-build contractor in Tulsa, Oklahoma. Specialist in open bay treatment layouts, digital orthodontic integration, and teen-friendly practice design."
        url="https://www.udgok.com/orthodontic-office-construction-tulsa"
        specialization="orthodontic office construction, orthodontist build-out, open bay treatment area, Invisalign office, iTero scanner station, orthodontic 3D print lab, dental specialty construction"
      />
      <ServicePage
        label="Orthodontic Specialists"
        title="Orthodontic Office Construction"
        description="Purpose-built spaces for modern orthodontics — from open bay treatment areas to Invisalign scan stations."
        imageSrc="/images/orthodontic-office-hero.png"
        imageAlt="Modern orthodontic office interior with open bay treatment area and digital integration in Tulsa, Oklahoma"
        intro="Orthodontic offices have fundamentally different space requirements than general dental practices. You need open treatment bays instead of enclosed operatories. Your patient flow moves 3× faster with shorter appointments. Your equipment includes iTero scanners, CBCT machines, and often an in-house 3D print lab. Most general contractors don't understand these differences — and you end up with a dental office that's been awkwardly converted for ortho. UDGOK builds purpose-designed orthodontic spaces from the ground up."
        stats={[
          { n: "15+", l: "Orthodontic Offices Built" },
          { n: "$165", l: "Avg Cost Per Sq Ft" },
          { n: "8-12", l: "Chair Open Bay Configs" },
          { n: "100%", l: "On-Budget Delivery" },
        ]}
        features={[
          { icon: "🪑", title: "Open Bay Design", desc: "6, 8, 10, or 12-chair open treatment bays with optimal sight lines for doctor supervision. Column-free spans up to 40 feet using steel framing for unobstructed layouts." },
          { icon: "📱", title: "Digital Workflow Integration", desc: "Built-in iTero and 3Shape scanner stations, CBCT alcoves with lead-lined walls, and dedicated data closets with Cat6a runs to every treatment position for cloud-based practice management." },
          { icon: "🖨️", title: "In-House 3D Print Labs", desc: "Ventilated 3D print rooms with sealed flooring for resin containment, dedicated power circuits for Form 3B+ printers, and post-processing stations with UV curing chambers and IPA wash stations." },
          { icon: "🎮", title: "Teen-Friendly Experience Zone", desc: "Gaming stations, phone charging bars, selfie walls with ring lighting, and Instagram-ready 'new smile' photo booths. Designed to make teens actually want to come to their appointments." },
          { icon: "🌊", title: "Sterilization Center", desc: "OSAP-compliant sterilization workflows with one-way instrument flow: dirty → ultrasonic → rinse → autoclave → clean storage. Hands-free sinks, stainless steel countertops, and dedicated exhaust ventilation." },
          { icon: "🏥", title: "Records & Consultation Suite", desc: "Private consultation rooms for treatment plan presentations with 55-65 inch displays, comfortable seating for parents and patients, and acoustic privacy for financial discussions." },
        ]}
        tldr="UDGOK is the only Tulsa contractor specializing in orthodontic office construction. We build open bay treatment areas, integrate iTero/3Shape digital scanning workflows, and design 3D print labs purpose-built for aligners. Average cost: $150–$200/sf in Tulsa. We've completed 15+ orthodontic offices across Oklahoma. Call (918) 520-3823 for a free consultation."
        faqs={PAGE_FAQS}
        sections={[
          { heading: "Why orthodontic offices need specialized construction", body: "A general dental operatory is a private 10×12 room with one chair, one sink, one suction line, and one air line. An orthodontic treatment bay is a 40-foot open span with 8–12 chairs, shared vacuum/air manifolds, digital scanner stations at every other position, and a doctor who needs visual oversight of all patients simultaneously. The HVAC requirements are different (40+ people in an open space vs. 2 people per room), the plumbing is different (shared manifolds vs. dedicated chair plumbing), the electrical is different (data-first vs. power-first), and the patient flow is 3× faster. Contractors who build general dental offices and try to 'adapt' for ortho inevitably produce inefficient layouts with bottlenecked corridors and inadequate infrastructure. UDGOK designs ortho-specific spaces from day one." },
          { heading: "How to design an open bay treatment area for orthodontics", body: "The ideal open bay uses column-free steel framing spanning 36–42 feet. Chairs are arranged in U-shape, L-shape, or linear configurations depending on floor plan geometry. Chair spacing is 5.5–6.5 feet center-to-center (tighter than general dental because ortho chairs are narrower). Each position gets: one vacuum drop, one air drop, one water drop, two power outlets, two Cat6a data drops, and one HDMI drop for a patient monitor. The doctor's path should allow visual contact with all chairs from any single position. UDGOK uses 3D walkthrough models to optimize doctor travel distance — our best layouts reduce average steps-per-patient to under 15." },
          { heading: "What does a modern orthodontic 3D print lab require?", body: "An in-house 3D print lab for clear aligners requires: (1) a 10×12 minimum room with sealed flooring (epoxy or vinyl) for resin containment; (2) dedicated exhaust ventilation — 6 ACH minimum with activated carbon filtration for VOC removal; (3) two to four 20-amp dedicated circuits for printers (Form 3B+, SprintRay Pro 95); (4) a post-processing station with IPA wash (FormWash) and UV cure chambers (FormCure) on separate circuits; (5) a compressed air supply for drying; and (6) a stainless steel work surface with integrated sink. Cost: $15,000–$30,000 for the room build-out, excluding printers and consumables." },
          { heading: "Cost comparison: orthodontic office vs. general dental office construction", body: "Orthodontic offices cost 10–15% less per square foot than general dental offices because: (1) open bays eliminate wall framing costs — you're building one large room instead of 6–8 separate operatories; (2) shared vacuum/air manifolds reduce plumbing costs by 30–40% compared to per-chair plumbing; (3) orthodontics requires no medical gas (nitrous oxide) — eliminating $8,000–$15,000 in piping. However, ortho offices require more infrastructure spending on data cabling, digital scanner stations, and wider HVAC systems for open-plan spaces. Net result: general dental costs $170–$250/sf in Tulsa; orthodontic offices cost $150–$200/sf." },
        ]}
        cta="Design Your Dream Ortho Practice →"
      />
    </>
  );
}
