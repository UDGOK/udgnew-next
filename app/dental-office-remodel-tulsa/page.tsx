import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dental Office Remodel & Renovation Tulsa OK",
  description:
    "Tulsa's top-rated dental office remodel contractor. Minimal-downtime renovations for existing practices — operatory upgrades, ADA compliance retrofits, and full cosmetic overhauls. 80+ dental projects completed.",
  keywords: [
    "dental office remodel Tulsa",
    "dental renovation contractor Oklahoma",
    "dental office renovation Tulsa OK",
    "dental practice remodel near me",
    "dental operatory upgrade Tulsa",
    "dental office redesign Oklahoma",
    "dental clinic renovation Broken Arrow",
    "dental office facelift Tulsa",
  ],
  openGraph: {
    title: "Dental Office Remodel & Renovation | Tulsa OK | UDGOK",
    description: "Minimal-downtime dental renovations in Tulsa. Operatory upgrades, ADA retrofits, and cosmetic overhauls — 80+ dental projects completed.",
    url: "https://udgok.com/dental-office-remodel-tulsa",
    type: "website",
    images: [{ url: "https://udgok.com/images/dental-remodel-hero.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://udgok.com/dental-office-remodel-tulsa" },
};

export default function DentalRemodelPage() {
  return (
    <>
      <ServiceJsonLd
        name="Dental Office Remodel & Renovation — Tulsa, Oklahoma"
        description="UDGOK provides minimal-downtime dental office remodels and renovations in Tulsa, OK. Operatory upgrades, ADA compliance retrofits, cabinetry replacement, HVAC modernization, and cosmetic overhauls for existing dental practices."
        url="https://udgok.com/dental-office-remodel-tulsa"
        image="https://udgok.com/images/dental-remodel-hero.png"
      />
      <LocalBusinessJsonLd
        description="Dental office remodel and renovation contractor in Tulsa, Oklahoma. Minimal-downtime practice renovations with 80+ dental projects completed."
        url="https://udgok.com/dental-office-remodel-tulsa"
        specialization="dental office remodel, dental renovation, operatory upgrade, ADA retrofit, dental practice renovation, dental cabinetry, dental HVAC modernization"
      />
      <ServicePage
        label="Dental Renovations"
        title="Dental Office Remodel & Renovation"
        description="Minimal-downtime renovations that transform your existing practice — without shutting your doors."
        imageSrc="/images/dental-remodel-hero.png"
        imageAlt="Modern dental office mid-renovation in Tulsa, Oklahoma — showing the transformation from old to new"
        intro="Remodeling an active dental practice is fundamentally different from ground-up construction. Your patients are still coming in tomorrow. Your hygienists need working suction. Your sterilization center can't go offline. UDGOK has renovated 40+ existing dental offices across Oklahoma — and we've perfected the art of phased construction that keeps your practice producing revenue while we transform the space around you. See our <a href='/guide-dental-buildout-checklist-oklahoma'>dental build-out checklist</a> for a comprehensive planning guide."
        stats={[
          { n: "40+", l: "Dental Remodels Completed" },
          { n: "87%", l: "Projects On-Time" },
          { n: "2-4wk", l: "Avg Operatory Turnaround" },
          { n: "0", l: "Revenue Days Lost" },
        ]}
        features={[
          { icon: "🔄", title: "Phased Construction", desc: "We renovate your office section-by-section so you never close. Patients are seen in finished operatories while adjacent rooms are under construction behind dust barriers." },
          { icon: "⚡", title: "After-Hours & Weekend Work", desc: "Demolition, noisy work, and HVAC tie-ins are scheduled outside patient hours. We start at 6 PM Friday and hand you a finished operatory Monday morning." },
          { icon: "🦷", title: "Operatory Upgrades", desc: "Chair pad replacements, cabinetry modernization, 12 o'clock delivery system installs, integrated monitor mounts, and LED operatory lighting upgrades." },
          { icon: "♿", title: "ADA Compliance Retrofits", desc: "Doorway widening, accessible restroom conversions, ramp additions, and countertop height adjustments to meet current ADA Title III requirements." },
          { icon: "🌡️", title: "HVAC & Infection Control", desc: "Dedicated operatory HVAC zones, HEPA filtration upgrades, negative-pressure isolation rooms, and ASHRAE 170 compliant air handling for modern infection control." },
          { icon: "💧", title: "Plumbing & Gas System Updates", desc: "Vacuum and compressor system upgrades, nitrous oxide plumbing relocation, amalgam separator installation, and waterline manifold replacements." },
        ]}
        tldr="UDGOK is Tulsa's top dental office remodel contractor. We renovate existing dental practices using phased construction so you never close your doors. We've completed 40+ dental remodels across Oklahoma with zero lost revenue days. Average operatory turnaround is 2–4 weeks. Call (918) 520-3823 for a free renovation consultation."
        faqs={[
          { q: "Can I keep my dental practice open during a remodel?", a: "Yes. UDGOK uses phased construction — we renovate one section at a time behind dust barriers and HEPA-filtered negative pressure containment. Your practice stays open and producing revenue throughout the entire renovation." },
          { q: "How much does a dental office remodel cost in Tulsa?", a: "Dental office remodels in Tulsa cost $80–$200 per square foot depending on scope. A cosmetic refresh (paint, flooring, cabinetry) runs $80–$120/sf. A full renovation with HVAC, plumbing, and operatory reconfiguration runs $150–$200/sf. A typical 4-operatory refresh costs $45,000–$80,000." },
          { q: "How long does a dental renovation take?", a: "A cosmetic refresh takes 2–4 weeks. A full operatory renovation takes 6–10 weeks when phased to keep the practice open. A complete gut-and-rebuild takes 3–5 months. UDGOK schedules demolition and noisy work on evenings and weekends." },
          { q: "Do I need permits for a dental office remodel?", a: "Yes if you're changing plumbing, electrical, HVAC, or structural elements. Cosmetic updates (paint, flooring, cabinetry) typically don't require permits. UDGOK handles all permit applications, inspections, and code compliance." },
          { q: "What ADA requirements apply to dental office renovations?", a: "When you remodel more than 30% of a dental office, ADA requires you to bring the entire facility up to current accessibility standards. This includes 32-inch clear doorways, accessible restrooms, wheelchair-accessible operatories, and proper signage. UDGOK's preconstruction audit identifies all ADA triggers before construction begins." },
          { q: "Does UDGOK handle dental equipment installation during a remodel?", a: "We coordinate with your equipment vendors (A-dec, Pelton & Crane, Midmark, etc.) to ensure rough-in specifications are exact. We handle all structural, electrical, plumbing, and data prep. Equipment vendors typically handle final installation and calibration." },
        ]}
        sections={[
          { heading: "What is phased dental office renovation?", body: "Phased renovation is a construction method where we divide your dental office into isolated work zones and renovate one zone at a time. Zone 1 goes under construction behind negative-pressure dust barriers while you see patients in Zones 2 and 3. When Zone 1 is complete, patients move there while Zone 2 begins. This cycle repeats until the entire office is finished. UDGOK has refined this process over 40+ dental renovations to minimize downtime to zero lost production days. The key requirements are: (1) HEPA-filtered negative pressure in the construction zone, (2) dust barriers rated for healthcare environments, (3) after-hours demolition scheduling, and (4) weekend plumbing and HVAC tie-ins." },
          { heading: "How much does a dental operatory remodel cost in Oklahoma?", body: "Single operatory remodels in Oklahoma cost $12,000–$25,000 depending on scope. A basic cosmetic refresh (new cabinetry, flooring, lighting, paint) costs $12,000–$15,000 per operatory. A full gut-and-rebuild with new plumbing rough-ins, suction/air manifolds, electrical upgrades, and 12 o'clock delivery system prep costs $18,000–$25,000. Multi-operatory discounts typically reduce per-unit costs by 10–15%. UDGOK provides free preconstruction budgets with line-item cost breakdowns." },
          { heading: "When should you remodel instead of relocate?", body: "Remodeling is the right choice when: (1) your lease has 5+ years remaining, (2) your location is established with strong patient referral patterns, (3) the building structure is sound, and (4) the renovation cost is under 60% of new construction cost. Our rule of thumb: if the renovation exceeds $250/sf for a standard dental office, it's more cost-effective to build new. UDGOK offers a free build-vs-remodel analysis that compares total cost of ownership over 10 years for both scenarios." },
          { heading: "What HVAC upgrades does a dental remodel need?", body: "Modern dental infection control standards (post-2020) require: dedicated HVAC zones for operatories vs. common areas, minimum 6 air changes per hour (ACH) in treatment rooms, MERV-13 or higher filtration, and the ability to create negative pressure in isolation operatories. Most dental offices built before 2018 don't meet these standards. A typical HVAC modernization for a 6-operatory dental office costs $25,000–$45,000 and includes new ductwork, variable air volume (VAV) boxes, and a dedicated condenser unit." },
        ]}
        cta="Get a Free Remodel Estimate →"
      />
    </>
  );
}
