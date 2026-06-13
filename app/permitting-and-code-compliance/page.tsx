import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Permitting & Code Compliance Tulsa Oklahoma | UDGOK",
  description:
    "Expert construction permitting and code compliance services in Tulsa, Broken Arrow, Jenks, and Owasso. We navigate IBC 2018, ADA, NFPA, and local zoning so you can build faster with zero delays.",
  openGraph: {
    title: "Permitting & Code Compliance Tulsa | UDGOK",
    description:
      "We cut through the red tape. Expert navigation of building codes and municipal processes in Tulsa and surrounding areas.",
    url: "https://www.udgok.com/permitting-and-code-compliance",
    type: "website",
  },
  alternates: { canonical: "https://www.udgok.com/permitting-and-code-compliance" },
};

export default function PermittingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Permitting and Code Compliance"
        description="Construction permitting, zoning, building code compliance, and inspection management for commercial projects in Tulsa, Oklahoma."
        url="https://www.udgok.com/permitting-and-code-compliance"
      />
      <ServicePage
        label="Permitting & Code Compliance"
        title="Permitting & Code Compliance"
        description="We cut through the red tape. Expert navigation of building codes and municipal processes in Tulsa and surrounding areas."
        imageSrc="/images/permitting-code-compliance-hero.png"
        imageAlt="Construction permitting and code compliance services Tulsa by UDGOK"
        tldr="UDGOK manages the entire permitting lifecycle for commercial construction projects in Tulsa, Broken Arrow, Jenks, Owasso, and surrounding Oklahoma cities. Commercial building permits in Tulsa take 6–8 weeks for new builds and 3–5 weeks for tenant improvements. We handle pre-application meetings, plan review management, all required inspections (foundation, framing, MEP, final), and Certificate of Occupancy acquisition — ensuring strict compliance with IBC 2018, NEC 2020, ADA, and NFPA standards."
        intro="Construction in Oklahoma is governed by the International Building Code (IBC) 2018 with local amendments. Navigating multiple jurisdictions — each with different review timelines, portal systems, and inspector expectations — can delay your project by weeks. UDGOK handles every step from pre-application meetings to Certificate of Occupancy, so your timeline stays on track."
        stats={[
          { n: "100+", l: "Permits Obtained" },
          { n: "3-8 Wks", l: "Typical Turnaround" },
          { n: "100%", l: "First-Pass Approval Rate" },
          { n: "5+", l: "Jurisdictions Covered" },
        ]}
        features={[
          { icon: "📋", title: "Pre-Application Meetings", desc: "We meet with city officials early to identify zoning, utility, or code issues before you invest in full construction documents." },
          { icon: "📐", title: "Plan Review Management", desc: "We respond to all city comments on architectural, MEP, and structural drawings — resolving red lines and resubmitting within 48 hours." },
          { icon: "🔍", title: "Inspection Scheduling", desc: "We schedule and manage all required inspections: foundation, framing, MEP rough-in, fire alarm, and final — coordinating directly with inspectors." },
          { icon: "🏛️", title: "Zoning & Variance Analysis", desc: "Before you sign a lease, we verify that your intended use is permitted under current zoning — and manage variance applications if needed." },
          { icon: "🏆", title: "Certificate of Occupancy", desc: "The final goal. We ensure all documentation, punch list items, and inspector sign-offs are complete to get you open on schedule." },
          { icon: "♿", title: "ADA & Accessibility", desc: "Full compliance with Americans with Disabilities Act requirements including accessible routes, restrooms, parking ratios, and signage." },
        ]}
        sections={[
          {
            heading: "How long does it take to get a commercial building permit in Tulsa?",
            body: `<p>Permit timelines vary by jurisdiction and project complexity. Here are estimated timelines for the Tulsa metro area (2026 data):</p>
<table><thead><tr><th>City</th><th>Permit Type</th><th>Estimated Timeline</th></tr></thead>
<tbody>
<tr><td>Tulsa</td><td>Commercial New Build</td><td>6–8 Weeks</td></tr>
<tr><td>Tulsa</td><td>Tenant Improvement (TI)</td><td>3–5 Weeks</td></tr>
<tr><td>Broken Arrow</td><td>Commercial</td><td>4–6 Weeks</td></tr>
<tr><td>Jenks</td><td>Commercial</td><td>2–4 Weeks</td></tr>
<tr><td>Owasso</td><td>Commercial</td><td>3–5 Weeks</td></tr>
</tbody></table>
<p>*Timelines vary based on project complexity, city workload, and completeness of submitted documents. UDGOK's experience with local reviewers helps minimize revision cycles.</p>`,
          },
          {
            heading: "What building codes apply to commercial construction in Oklahoma?",
            body: `<p>Oklahoma commercial construction must comply with multiple code standards. UDGOK ensures strict adherence to all applicable codes:</p>
<ul>
<li><strong>IBC 2018:</strong> International Building Code — structural safety, fire-resistance ratings, means of egress, and occupancy classifications</li>
<li><strong>NEC 2017/2020:</strong> National Electrical Code — all electrical systems, panel sizing, circuiting, and grounding</li>
<li><strong>IPC/IMC 2018:</strong> International Plumbing Code and International Mechanical Code — plumbing fixtures, HVAC systems, and ventilation</li>
<li><strong>ADA:</strong> Americans with Disabilities Act — accessible routes, restrooms, parking, signage, and counter heights</li>
<li><strong>NFPA:</strong> National Fire Protection Association — fire alarm systems, sprinkler requirements, and fire-rated assemblies</li>
<li><strong>OSDH:</strong> Oklahoma State Department of Health — additional requirements for medical, dental, and food service facilities</li>
</ul>
<p>Each jurisdiction may adopt different editions or local amendments. UDGOK tracks these differences across Tulsa, Broken Arrow, Jenks, Owasso, and Sand Springs to prevent costly re-submissions.</p>`,
          },
          {
            heading: "What is the commercial construction permitting process in Oklahoma?",
            body: `<p>The commercial permitting process in Oklahoma follows a structured sequence. UDGOK manages every step:</p>
<ol>
<li><strong>Pre-Application Meeting:</strong> We meet with city planning and zoning staff to confirm your proposed use is permitted, identify any required variances, and discuss utility availability.</li>
<li><strong>Document Preparation:</strong> Complete construction documents including architectural, structural, MEP (mechanical/electrical/plumbing) drawings, and specifications are assembled for submittal.</li>
<li><strong>Plan Review Submittal:</strong> Documents are submitted to the city for review by building, fire, plumbing, mechanical, and electrical reviewers — each providing independent comments.</li>
<li><strong>Comment Resolution:</strong> We respond to all reviewer comments, make required drawing revisions, and resubmit until approval is granted.</li>
<li><strong>Permit Issuance:</strong> Once all departments approve, the building permit is issued and construction can begin.</li>
<li><strong>Construction Inspections:</strong> Required inspections at key milestones — foundation, framing, MEP rough-in, insulation, fire alarm, and final.</li>
<li><strong>Certificate of Occupancy (CO):</strong> After passing final inspection, the CO is issued — authorizing you to occupy and operate in the space.</li>
</ol>`,
          },
        ]}
        faqs={[
          { q: "How much does a commercial building permit cost in Tulsa?", a: "Commercial building permit fees in Tulsa are based on project valuation. Typical fees range from $1,500–$5,000 for tenant improvements and $5,000–$25,000+ for ground-up commercial construction. Additional fees may apply for mechanical, electrical, and plumbing permits, fire alarm permits, and plan review fees." },
          { q: "Does UDGOK handle permits in Broken Arrow and Jenks?", a: "Yes. UDGOK manages permits across the entire Tulsa metro including Tulsa, Broken Arrow, Jenks, Owasso, Bixby, Sand Springs, and Oklahoma City. We have working relationships with plan reviewers and inspectors in all of these jurisdictions." },
          { q: "What happens if a permit is rejected?", a: "Plan review comments are normal — not rejections. UDGOK responds to all reviewer comments within 48 hours, makes required drawing revisions, and resubmits. Our experience with local code requirements means fewer comment cycles and faster approvals than most contractors achieve." },
          { q: "Do I need a separate permit for medical gas installation?", a: "Medical gas systems require separate certification testing per NFPA 99, but the installation is typically covered under the mechanical permit. UDGOK coordinates all medical gas inspections and third-party certification for dental and medical facilities." },
          { q: "Can UDGOK expedite the permitting process?", a: "Yes. UDGOK's familiarity with local plan reviewers, complete initial submittals, and rapid comment response times result in faster permit turnaround. We also attend pre-application meetings to resolve potential issues before formal submittal, which eliminates the most common cause of delays." },
        ]}
        cta="Expedite Your Permit →"
      />
    </>
  );
}
