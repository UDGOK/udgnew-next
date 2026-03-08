import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Tenant Improvements Tulsa Oklahoma | UDGOK",
  description: "Commercial tenant improvement and build-out contractor in Tulsa, OK. UDGOK delivers fast, high-quality TI work for medical, dental, retail, and office spaces.",
  alternates: { canonical: "https://udgok.com/tenant-improvements" },
};

export default function TenantImprovementsPage() {
  return (
    <ServicePage
      label="Tenant Improvements"
      title="Tenant Improvements & Build-Outs"
      description="Fast, quality commercial build-outs for medical, dental, retail, and office spaces across Tulsa and Oklahoma."
      imageSrc="/images/upscale-building-historical.png"
      imageAlt="Tenant improvements Tulsa by UDGOK"
      intro="Your lease clock is running the moment you sign. UDGOK specializes in fast-track tenant improvement construction — coordinating landlord work, city permits, and specialty trades to deliver your space on time and on budget. We've completed TI projects ranging from 1,000 SF retail suites to 20,000 SF medical campuses."
      stats={[
        { n: "200+", l: "TI Projects" },
        { n: "30 Days", l: "Typical Permit Turnaround" },
        { n: "100%", l: "On-Time Rate" },
        { n: "All", l: "Sectors Served" },
      ]}
      features={[
        { icon: "🏢", title: "Office Build-Outs", desc: "Open plans, private offices, conference rooms, and break rooms built to your brand standards." },
        { icon: "🏥", title: "Medical TI", desc: "ADA-compliant exam rooms, nurse stations, and clinical spaces within existing shell buildings." },
        { icon: "🦷", title: "Dental TI", desc: "Operatory rough-in, medical gas, dental vacuum, and cabinetry coordination in existing suites." },
        { icon: "🛍️", title: "Retail Build-Outs", desc: "Storefront improvements, interior merchandising layouts, and custom display installations." },
        { icon: "📋", title: "Permit Expediting", desc: "We manage all city permit applications, landlord approvals, and inspector coordination." },
        { icon: "🔧", title: "MEP Coordination", desc: "Full mechanical, electrical, and plumbing coordination with your landlord's base building systems." },
      ]}
      cta="Get a TI Estimate →"
    />
  );
}
