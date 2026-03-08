import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "Developer's Guide to Medical Office Construction | UDGOK",
  description: "A complete guide for real estate developers building medical office projects in Oklahoma. Site selection, programming, budgeting, permitting, and delivery strategy.",
  alternates: { canonical: "https://udgok.com/guide-developers" },
};

export default function GuideDevelopersPage() {
  const customHTML = `
    <h2>Site Selection & Feasibility</h2>
    <p>The right site for a medical office building is different from general commercial real estate. You need to evaluate patient traffic patterns, physician referral corridors, parking ratios (typically 5:1,000 for medical vs. 3:1,000 for office), and proximity to hospital campuses. Utility capacity is critical — medical facilities have 3-5x the electrical and water demand of standard office. Zoning for medical use should be confirmed early, as rezoning adds months to your schedule.</p>
    
    <h2>Programming & Tenant Requirements</h2>
    <p>Every healthcare tenant has specific space requirements that drive construction cost. A primary care physician needs 1,800-2,400 SF per physician, while a dental practice needs 350-450 SF per operatory plus support spaces. Understand your tenant mix before finalizing floor plate. Shell buildings designed for healthcare should include 12-14 foot slab-to-slab heights (vs. 10 feet for office), oversized mechanical shafts, and structural capacity for medical equipment loads.</p>

    <h2>Budget & Pro Forma</h2>
    <p>Medical office construction in Tulsa currently ranges from $180-280 per SF for tenant improvements and $220-350 per SF for ground-up shell-plus-TI, depending on specialty. Add soft costs (design, permits, financing, leasing commissions) of 25-35% on top of hard costs. Build a 10-15% contingency into your pro forma. Escalation of 5-8% annually should be modeled on projects with 18+ month lead times. Our preconstruction team can provide project-specific budgets within one week.</p>

    <h2>Delivery Strategy</h2>
    <p>Design-build is the most efficient delivery method for medical office, reducing typical schedules by 15-20% versus design-bid-build. Consider phasing: build the shell first, then complete tenant improvements as leases are signed. This approach reduces pre-leasing requirements and accelerates your first-occupancy date. For multi-tenant buildings, sequence tenant improvements to prioritize anchor tenants and commission systems in occupied zones without impacting existing tenants.</p>

    <h2>Permitting & Regulatory</h2>
    <p>Medical facilities trigger multiple regulatory layers beyond standard commercial permitting: OSHA healthcare standards, NFPA 99 for medical gas, ADA for healthcare facilities (stricter than commercial), and state health department approval for certain use types. In Oklahoma, ambulatory surgery centers require ODHSEM licensing. Dental offices with nitrous require DEQ review of waste anesthetic gas systems. Budget 60-90 days for medical permit review in Tulsa versus 30-45 for standard commercial.</p>

    <h2>Working with UDGOK</h2>
    <p>Engage UDGOK at the earliest stage possible — ideally at site selection — to get accurate cost feedback during feasibility. Our preconstruction team provides free conceptual budgets for serious development opportunities. We'll participate in tenant negotiations to ensure lease TI allowances reflect actual market costs. Our design-build model gives you a single point of accountability from schematic design through certificate of occupancy, with real-time cost reporting throughout.</p>
  `;

  return (
    <BlogPostLayout
      title="The Developer's Guide to Medical Office Construction"
      description="From site selection through certificate of occupancy — everything a real estate developer needs to know to deliver a successful medical office project in Oklahoma."
      date="March 2026"
      category="Market Data"
      readTime="8 MIN READ"
      heroImage="/images/ai-medical-exterior.png"
    >
      <div dangerouslySetInnerHTML={{ __html: customHTML }} />
    </BlogPostLayout>
  );
}
