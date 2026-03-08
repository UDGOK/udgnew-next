import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "Commercial Broker's Construction Guide | UDGOK",
  description: "A construction guide for commercial real estate brokers in Oklahoma. Help your healthcare and commercial tenants understand TI costs, timelines, and what to ask their contractor.",
  alternates: { canonical: "https://udgok.com/guide-commercial-brokers" },
};

export default function GuideBrokersPage() {
  const customHTML = `
    <h2>Understanding TI Allowances</h2>
    <p>Tenant improvement allowances are typically negotiated as a dollar amount per square foot of leasable area. In Tulsa's current market, TI allowances for medical office range from $80-140/SF, while standard commercial office runs $50-90/SF. Dental offices require $120-180/SF due to plumbing, medical gas, and equipment rough-in requirements. Help your clients understand that TI allowances that sound generous may still leave them funding a significant gap — especially for healthcare tenants with specialized build-out needs.</p>
    
    <h2>Construction Timelines for Healthcare Tenants</h2>
    <p>Medical and dental construction takes longer than standard commercial build-outs. A standard office TI in an existing shell runs 60-90 days from permit. A dental office runs 90-120 days. A medical office with exam rooms, nurse stations, and specialized MEP runs 120-150 days. An oral surgery center can run 6-9 months. These timelines start after permit issuance — add 30-60 days for plan review in Tulsa. Factor construction time into your lease commencement negotiations so your client isn't paying double rent during build-out.</p>

    <h2>Lease Language That Protects Your Clients</h2>
    <p>Key lease provisions for construction: (1) Landlord work vs. tenant work — be explicit about who delivers what before TI commences. (2) Permit contingency — include a clause that delays rent commencement if permits are delayed beyond a defined period. (3) TI disbursement — understand the landlord's inspection and disbursement process before your client starts spending. (4) Allowance for healthcare-specific items — some landlords exclude medical gas, plumbing upgrades, or electrical service increases from TI reimbursement.</p>

    <h2>What to Look for in a Healthcare GC</h2>
    <p>Not every commercial contractor can build a dental or medical office. Look for: (1) ASSE 6010 certified medical gas installers on staff or under contract. (2) Direct experience with dental chair rough-in, operatory plumbing, and equipment coordination. (3) Knowledge of NFPA 99 and relevant healthcare codes. (4) References from dental equipment vendors and practice management consultants — they see the work at handoff. (5) A superintendent who has built at least 10 dental offices, not a GC who built one and called it a specialty.</p>

    <h2>Representing Healthcare Tenants</h2>
    <p>Healthcare tenants require a broker who understands their world. Key considerations: parking (medical uses need 5:1,000, dental even more), patient access and ADA compliance, utility capacity (dental uses 200A 3-phase minimum per operatory), HVAC requirements (dental sterilization rooms need dedicated exhaust), and signage visibility for patient-facing practices. The right building for a CPA is the wrong building for a dental group — understand the operational requirements before you show properties.</p>

    <h2>Working with UDGOK on Your Deals</h2>
    <p>UDGOK is a resource for brokers representing healthcare and commercial tenants. We'll provide free budget consultation during your deal-making process so your clients understand true build-out costs before signing a lease. We participate in landlord-tenant negotiations to help structure TI allowances appropriately. And when the lease is signed, we deliver on time — which protects your reputation as the broker who brought a great tenant that executed without drama. Call us early, not after the lease is signed.</p>
  `;

  return (
    <BlogPostLayout
      title="The Commercial Broker's Guide to Construction"
      description="Everything a Tulsa commercial real estate broker needs to know to better serve healthcare and commercial tenants through their build-out process."
      date="February 2026"
      category="Commercial Real Estate"
      readTime="6 MIN READ"
      heroImage="/images/ai-construction-mep.png"
    >
      <div dangerouslySetInnerHTML={{ __html: customHTML }} />
    </BlogPostLayout>
  );
}
