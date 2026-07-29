import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "PMP Construction Project Management Tulsa",
  description:
    "PMP-certified construction project management in Tulsa, Oklahoma. CPM scheduling, risk management, real-time cost control.",
  openGraph: {
    images: [{ url: "https://www.udgok.com/images/og-default.png", width: 1200, height: 630, alt: "UDGOK — Medical & Dental Design-Build Construction in Tulsa, Oklahoma" }],
    title: "PMP-Certified Project Management | UDGOK Tulsa",
    description:
      "Professional PMI methodologies applied to commercial construction. On time. On budget. No surprises.",
    url: "https://www.udgok.com/project-management-pmp-led",
    type: "website",
  },
  alternates: { canonical: "https://www.udgok.com/project-management-pmp-led" },
};

export default function ProjectManagementPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "PMP-Certified Project Leadership", url: "https://www.udgok.com/project-management-pmp-led" }
  ];
  const PAGE_FAQS = [
          { q: "What does PMP-certified project management mean for my construction project?", a: "PMP certification means your project manager has passed a rigorous PMI exam covering scope management, cost control, scheduling, risk management, and stakeholder communication. This translates to fewer change orders, tighter schedule adherence, and full budget transparency on your construction project." },
          { q: "How does UDGOK track construction schedules?", a: "We use Critical Path Method (CPM) scheduling — the industry standard for identifying the longest sequence of dependent activities. We monitor float (schedule flexibility), track schedule performance index (SPI), publish weekly look-ahead schedules, and immediately flag any activity that threatens the critical path." },
          { q: "Can I access project information remotely?", a: "Yes. UDGOK provides cloud-based access to all project documents including plans, RFIs, submittals, daily reports, photo logs, budgets, and schedules. You can view real-time project status from any device, anywhere — no software installation required." },
          { q: "How does UDGOK prevent cost overruns?", a: "We prevent cost overruns through accurate preconstruction budgets, real-time committed cost tracking, proactive value engineering, and immediate change order documentation. You see your budget status at any time — approved costs, committed costs, pending changes, and projected final cost." },
          { q: "What size projects does UDGOK manage?", a: "UDGOK manages commercial construction projects from 1,500 SF tenant improvements to 50,000+ SF ground-up commercial buildings. Our sweet spot is 2,000–20,000 SF medical, dental, and commercial projects in the Tulsa metro area." },
        ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
        name="PMP Construction Project Management"
        description="Professional construction project management utilizing PMI methodologies, CPM scheduling, and cloud-based collaboration tools for commercial projects in Tulsa, Oklahoma."
        url="https://www.udgok.com/project-management-pmp-led"
      />
      <ServicePage
        label="Project Management"
        title="PMP-Certified Project Leadership"
        description="Bringing professional PMI methodologies to commercial construction. On time. On budget. No surprises."
        imageSrc="/images/project-management-hero.png"
        imageAlt="PMP construction project management Tulsa by UDGOK"
        tldr="UDGOK delivers PMP-certified construction project management for commercial, medical, and dental builds in Tulsa and Oklahoma. Our project managers apply PMI's five process groups — Initiation, Planning, Execution, Monitoring & Control, and Closeout — using Critical Path Method (CPM) scheduling, real-time cost tracking, and cloud-based communication. This methodology reduces change orders by 30%, keeps 100% of projects on schedule, and provides full budget transparency from groundbreaking to occupancy."
        intro="We don't just 'manage' construction — we engineer success using proven Project Management Professional (PMP) frameworks. This means rigorous attention to scope, schedule, and cost at every phase. Our project managers leverage CPM scheduling, value engineering, and cloud-based collaboration tools to keep stakeholders aligned and projects on track."
        stats={[
          { n: "100%", l: "On-Time Completion" },
          { n: "30%", l: "Fewer Change Orders" },
          { n: "24/7", l: "Cloud Access" },
          { n: "100+", l: "Projects Managed" },
        ]}
        features={[
          { icon: "📅", title: "CPM Scheduling", desc: "Critical Path Method scheduling identifies bottlenecks before they delay your project. We track float, predecessor logic, and resource leveling daily." },
          { icon: "💰", title: "Real-Time Cost Control", desc: "Live budget tracking with value engineering at every decision point. You see approved costs, committed costs, and projected final cost — no surprises at closeout." },
          { icon: "🛡️", title: "Risk Management", desc: "Proactive identification and mitigation of risks related to weather, supply chain disruptions, subcontractor performance, and permitting delays." },
          { icon: "☁️", title: "Cloud-Based Communication", desc: "Instant access to plans, RFIs, submittals, daily logs, and photo documentation from any device, anywhere. Full project transparency." },
          { icon: "📸", title: "Photo Documentation", desc: "Weekly (or daily) georeferenced photo logs tracking progress at every phase. Full visual record for quality assurance and dispute prevention." },
          { icon: "📊", title: "Financial Reporting", desc: "Live view of change orders, budget status, pay applications, and cost-to-complete projections. Monthly owner reports with full audit trail." },
        ]}
        sections={[
          {
            heading: "What is PMP construction project management and why does it matter?",
            body: `<p>PMP (Project Management Professional) is the gold standard certification from the Project Management Institute (PMI). Unlike general "project coordination" — which many contractors offer — PMP methodology applies a structured framework across five process groups:</p>
<ul>
<li><strong>Initiation:</strong> Defining project scope, securing permits, setting stakeholder expectations, and assembling the project team</li>
<li><strong>Planning:</strong> Building the CPM schedule, finalizing budgets, developing risk registers, and establishing communication protocols</li>
<li><strong>Execution:</strong> Mobilization, construction, quality control inspections, safety management, and subcontractor coordination</li>
<li><strong>Monitoring & Control:</strong> Tracking KPIs (SPI, CPI), managing change orders, earned value analysis, and ensuring code compliance</li>
<li><strong>Closeout:</strong> Punch list completion, O&M manual delivery, warranty hand-off, commissioning, and final occupancy</li>
</ul>
<p>This structure ensures no step is skipped, no risk is overlooked, and every dollar is tracked from groundbreaking to ribbon-cutting.</p>`,
          },
          {
            heading: "What construction management technology does UDGOK use?",
            body: `<p>We leverage industry-leading construction technology to keep every stakeholder aligned and informed:</p>
<ul>
<li><strong>Cloud-Based Project Management:</strong> Instant access to plans, RFIs, submittals, schedules, and daily logs from any device</li>
<li><strong>CPM Scheduling Software:</strong> Critical path analysis with resource leveling, look-ahead schedules, and milestone tracking</li>
<li><strong>Photo Documentation:</strong> Georeferenced daily/weekly photo logs with automatic organization by location and trade</li>
<li><strong>Financial Tracking:</strong> Real-time budget vs. actual cost tracking, change order logs, and pay application management</li>
<li><strong>BIM/VDC Coordination:</strong> 3D model coordination for clash detection on complex medical and commercial projects</li>
<li><strong>AI-Powered Estimating:</strong> Machine learning models trained on 100+ projects deliver budget certainty within 48 hours</li>
</ul>
<p>Gone are the days of paper napkins and guesswork. Every data point is captured, tracked, and available for your review in real time.</p>`,
          },
        ]}
        faqs={PAGE_FAQS}
        cta="Schedule Consultation →"
      />
    </>
  );
}
