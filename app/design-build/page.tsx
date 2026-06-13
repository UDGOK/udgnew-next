import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, LocalBusinessJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Design-Build Contractor Tulsa & Oklahoma City | Medical & Dental",
  description: "Tulsa's top design-build contractor for medical & dental projects. One contract, one team. 100+ projects delivered 20% faster with 15% cost savings.",
  openGraph: {
    title: "Design-Build Contractor Tulsa OK | 100+ Projects | UDGOK",
    description: "One contract, one team. Tulsa's most experienced design-build contractor for medical, dental, and commercial projects.",
    url: "https://www.udgok.com/design-build",
    type: "website",
  },
  alternates: { canonical: "https://www.udgok.com/design-build" },
};

export default function DesignBuildPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Design-Build Delivery Tulsa", url: "https://www.udgok.com/design-build" }
  ];
  const PAGE_FAQS = [
          { q: "What is design-build construction?", a: "Design-build is a project delivery method where a single firm handles both architectural design and construction under one contract. This eliminates the coordination gaps between separate architects and contractors, resulting in faster schedules, fewer change orders, and lower total costs." },
          { q: "How much does design-build save versus traditional construction?", a: "Design-build typically saves 15–20% on total project cost compared to design-bid-build. On a $500,000 project, that's $50,000–$100,000 in savings from eliminated markup layers, reduced change orders, and shorter construction timelines." },
          { q: "How fast can UDGOK deliver a design-build project?", a: "Timelines depend on scope, but UDGOK has delivered dental office build-outs in as fast as 90 days. A standard 3,000 sq ft medical or dental office takes 4–6 months from first meeting to certificate of occupancy." },
          { q: "Does design-build cost more upfront?", a: "No. Design-build fees are typically comparable to separate architecture and construction fees, but you pay one entity instead of two. The GMP (Guaranteed Maximum Price) structure also provides budget certainty from the start." },
          { q: "Is design-build right for my project?", a: "Design-build works best when you want speed, budget certainty, and single-source accountability. If your project requires competitive bidding or you prefer selecting your own architect independently, design-bid-build may be more appropriate. UDGOK offers free consultations to help you determine the best delivery method." },
          { q: "How does design-build work for dental offices in Oklahoma?", a: "For dental offices, design-build is particularly valuable because the builder understands specialty requirements from day one. Instead of an architect designing operatory layouts without knowing plumbing costs, UDGOK's design-build team prices and designs simultaneously. This means your dental chair outlets, vacuum lines, compressed air, and medical gas systems are correctly planned from schematic design — eliminating expensive mid-construction changes. Most Oklahoma dental design-build projects complete 4–6 weeks faster than traditional delivery." },
          { q: "What is the design-build process timeline?", a: "A typical UDGOK design-build project follows this approximate timeline: Week 1–2 — Programming and site evaluation. Week 3–6 — Schematic design with real-time cost modeling. Week 6–8 — Construction documents and permit submission. Week 8–10 — Permitting (overlapped with procurement). Week 10–22 — Construction. Week 22–24 — Commissioning, inspections, and certificate of occupancy. Total: approximately 5–6 months for a standard healthcare build-out." },
          { q: "Can UDGOK handle permitting for my design-build project?", a: "Yes. Permitting is included in every UDGOK design-build contract. We prepare all construction documents, submit permit applications to the City of Tulsa or applicable jurisdiction, manage plan review comments, and coordinate all inspections through certificate of occupancy. Tulsa commercial permits typically take 2–4 weeks for review. Our team has established relationships with local building departments that help expedite the process." },
        ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
        name="Design-Build Construction"
        description="Integrated design-build delivery for medical, dental, and commercial construction. One contract, one team, zero gaps between design and construction."
        url="https://www.udgok.com/design-build"
      />
      <LocalBusinessJsonLd
        description="Tulsa, Oklahoma's leading design-build contractor for medical, dental, and commercial construction. 100+ projects delivered 20% faster with 15% cost savings versus traditional design-bid-build."
        url="https://www.udgok.com/design-build"
        specialization="Design-build construction, Integrated design-build, Medical design-build, Dental design-build, Commercial design-build, Guaranteed Maximum Price, Fast-track construction"
      />
      <ServicePage
        label="Design-Build"
        title="Design-Build Delivery Tulsa"
        description="One contract, one team, zero gaps. UDGOK integrates design and construction for faster delivery and better outcomes."
        imageSrc="/images/ai_commercial_retail_plaza.png"
        imageAlt="Design-build contractor Tulsa by UDGOK"
        tldr="UDGOK is Tulsa, Oklahoma's leading design-build contractor with 100+ delivered projects. Design-build combines architecture, engineering, and construction under one contract, saving clients 15–20% on cost and 20% on schedule versus traditional design-bid-build. We deliver <a href='/medical-office-design-build-tulsa'>medical offices</a>, <a href='/dental-office-construction-tulsa'>dental clinics</a>, retail spaces, and commercial buildings from concept to certificate of occupancy."
        intro="Traditional design-bid-build separates your architect and contractor — creating gaps, change orders, and delays. UDGOK's design-build model puts design and construction under one contract and one roof. You get a single point of accountability, real-time cost transparency, and a team that designs what it can actually build."
        stats={[
          { n: "20%", l: "Faster Delivery" },
          { n: "15%", l: "Average Cost Savings" },
          { n: "1", l: "Contract. One Team." },
          { n: "100+", l: "Projects Delivered" },
        ]}
        features={[
          { icon: "🏗️", title: "Integrated Team", desc: "Architects, engineers, and builders collaborate from day one — eliminating the handoff friction of traditional delivery." },
          { icon: "💰", title: "Real-Time Cost Control", desc: "Design decisions are made with live cost data so your budget is protected at every milestone." },
          { icon: "⚡", title: "Faster Schedules", desc: "Construction begins before design is 100% complete through phased permitting and fast-track delivery." },
          { icon: "📐", title: "Design Excellence", desc: "We don't sacrifice design quality for speed. Our in-house design team creates spaces that inspire and perform." },
          { icon: "🔄", title: "Single Accountability", desc: "One contract means no finger-pointing between your architect and contractor. UDGOK owns the outcome." },
          { icon: "📊", title: "Transparent Reporting", desc: "Weekly owner updates with real-time cost reporting, schedule tracking, and issue logs." },
        ]}
        sections={[
          {
            heading: "What is design-build and how does it differ from design-bid-build?",
            body: `<p><strong>Design-build</strong> is a project delivery method where one entity (the design-builder) holds a single contract with the project owner for both design and construction services. This contrasts with <strong>design-bid-build</strong>, where the owner separately contracts an architect and then competitively bids the construction.</p>
<table><thead><tr><th>Factor</th><th>Design-Build</th><th>Design-Bid-Build</th></tr></thead>
<tbody>
<tr><td>Contracts</td><td>1 contract</td><td>2+ contracts</td></tr>
<tr><td>Schedule</td><td>20% faster on average</td><td>Sequential phases</td></tr>
<tr><td>Cost Growth</td><td>2–3% average</td><td>5–10% average</td></tr>
<tr><td>Change Orders</td><td>Minimal (under 3%)</td><td>5–10% of contract value</td></tr>
<tr><td>Accountability</td><td>Single-source</td><td>Split between A/E and GC</td></tr>
</tbody></table>
<p>According to the Design-Build Institute of America (DBIA), design-build projects are delivered <strong>33% faster</strong> than design-bid-build and experience <strong>6% lower cost growth</strong>.</p>`,
          },
          {
            heading: "How much does design-build cost compared to traditional construction?",
            body: `<p>Design-build typically saves <strong>15–20% on total project cost</strong> versus design-bid-build. These savings come from:</p>
<ul>
<li><strong>Eliminated markup layers:</strong> No separate A/E fee + GC markup stacking</li>
<li><strong>Early value engineering:</strong> The builder identifies cost savings during design, not after bidding</li>
<li><strong>Reduced change orders:</strong> UDGOK averages under 3% change orders vs. 5–10% industry average</li>
<li><strong>Faster delivery:</strong> Shortened schedule reduces financing costs, carrying costs, and lost revenue</li>
</ul>
<p>For a $500,000 medical office project, design-build savings typically range from $50,000–$100,000 compared to traditional delivery.</p>`,
          },
          {
            heading: "What types of projects are best suited for design-build?",
            body: `<p>Design-build is ideal for projects where speed, budget certainty, and single-source accountability matter. UDGOK recommends design-build for:</p>
<ul>
<li><strong>Medical and dental offices:</strong> Specialized MEP systems benefit from early builder involvement</li>
<li><strong>Tenant improvements:</strong> Tight lease deadlines require overlapping design and construction</li>
<li><strong>Retail and restaurant build-outs:</strong> Speed-to-market drives revenue</li>
<li><strong>Multi-practice professional offices:</strong> Complex coordination benefits from integrated delivery</li>
<li><strong>Ground-up commercial buildings:</strong> Site work and design run in parallel</li>
</ul>
<p>Design-build is less common for public sector projects requiring competitive bidding, though Oklahoma allows design-build for public entities under the Oklahoma Public Competitive Bidding Act with certain exemptions.</p>`,
          },
          {
            heading: "What is included in a design-build contract?",
            body: `<p>A comprehensive design-build contract from UDGOK typically includes:</p>
<ul>
<li><strong>Architectural design:</strong> Full floor plans, elevations, and interior design</li>
<li><strong>Engineering:</strong> Structural, mechanical, electrical, and plumbing (MEP) engineering</li>
<li><strong>Permitting:</strong> Building permit application, plan review management, and inspection coordination</li>
<li><strong>Construction:</strong> All general contracting, subcontractor management, and self-performed work</li>
<li><strong>Guaranteed Maximum Price (GMP):</strong> A price ceiling with savings shared back to the owner</li>
<li><strong>Schedule guarantee:</strong> A contractual completion date with liquidated damages for delay</li>
<li><strong>Commissioning:</strong> System testing, punch list completion, and owner training</li>
</ul>
<p>Not included: Furniture, fixtures, and equipment (FF&E), medical/dental equipment, and specialty items the owner procures directly.</p>`,
          },
        ]}
        faqs={PAGE_FAQS}
        cta="Start Your Design-Build Project →"
        videoSrc="/videos/women-on-field-ipad.mp4"
        videoLabel="Behind the Scenes"
        videoHeadingStart="Design Meets"
        videoHeadingAccent="Construction"
      />
    </>
  );
}
