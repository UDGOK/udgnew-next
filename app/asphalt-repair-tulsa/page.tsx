import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Asphalt Repair Contractors Tulsa OK | Paving & Sealcoating | UDGOK",
    description: "Asphalt repair contractors near Tulsa, Oklahoma. UDGOK provides parking lot repair, asphalt patching, sealcoating, overlay, and full repaving for commercial properties across the Tulsa metro.",
    openGraph: {
        title: "Asphalt Repair Contractors Tulsa OK | UDGOK",
        description: "Commercial asphalt repair, paving, sealcoating, and parking lot maintenance in Tulsa, Oklahoma.",
        url: "https://www.udgok.com/asphalt-repair-tulsa",
        type: "website",
    },
    alternates: { canonical: "https://www.udgok.com/asphalt-repair-tulsa" },
};

export default function AsphaltRepairTulsaPage() {
    
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Asphalt Repair Contractors in Tulsa, Oklahoma", url: "https://www.udgok.com/asphalt-repair-tulsa" }
  ];
  const PAGE_FAQS = [
                    { q: "How much does asphalt repair cost in Tulsa?", a: "Pothole patching in Tulsa costs $50–$200 per pothole depending on size. Sealcoating runs $0.15–$0.30 per square foot. Asphalt overlay costs $3–$7 per square foot. Full parking lot repaving runs $4–$10 per square foot. A 10,000 sq ft parking lot sealcoat typically costs $1,500–$3,000. UDGOK provides free on-site estimates for all Tulsa asphalt work." },
                    { q: "How often should I sealcoat my parking lot in Oklahoma?", a: "In Oklahoma's climate, commercial parking lots should be sealcoated every 2–3 years. New asphalt should be sealcoated for the first time 6–12 months after installation. Regular sealcoating can extend pavement life from 15 years to 25+ years and is one of the most cost-effective maintenance investments for Tulsa property owners." },
                    { q: "Can asphalt be repaired in cold weather in Tulsa?", a: "Yes, but with limitations. Hot-mix asphalt requires temperatures above 45°F for proper compaction. For emergency winter repairs, we use cold-mix asphalt patches that work in any temperature. The ideal paving season in Tulsa is March through November. UDGOK schedules major asphalt work during optimal weather windows." },
                    { q: "Should I repair or replace my parking lot?", a: "If damage covers less than 25–30% of the surface, repairs and overlay are usually more cost-effective. If the subbase has failed, drainage is poor, or cracking covers more than 30%, full repaving is typically the better long-term investment. UDGOK provides free assessments to help Tulsa property owners make data-driven paving decisions." },
                    { q: "Does UDGOK handle asphalt work for commercial properties only?", a: "We primarily serve commercial properties — parking lots, multi-family complexes, office parks, and retail centers. We also handle large residential driveways and HOA common-area paving. For standard residential asphalt driveways, we recommend checking our concrete driveway services, which are more durable in Oklahoma's climate." },
                ];
  return (
        <>
            
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
                name="Asphalt Repair Contractors Tulsa"
                description="Commercial asphalt repair contractors in Tulsa, Oklahoma. Parking lot repair, patching, sealcoating, overlay, and full repaving services."
                url="https://www.udgok.com/asphalt-repair-tulsa"
            />
            <ServicePage
                label="Asphalt Repair"
                title="Asphalt Repair Contractors in Tulsa, Oklahoma"
                description="Parking lot repair, patching, sealcoating, overlay, and full repaving for commercial properties across the Tulsa metro."
                imageSrc="/images/asphalt-repair-tulsa.png"
                imageAlt="Asphalt repair contractor Tulsa Oklahoma — UDGOK"
                tldr="UDGOK provides commercial asphalt repair services across the Tulsa metro. We handle pothole patching ($50–$200 per pothole), sealcoating ($0.15–$0.30/sq ft), asphalt overlay ($3–$7/sq ft), and full repaving ($4–$10/sq ft). Our asphalt repair crews serve Tulsa, Broken Arrow, Bixby, Jenks, Owasso, and surrounding Oklahoma communities. Based at 7739 E 38th St in Tulsa, we specialize in commercial parking lots, driveways, and roadways that withstand Oklahoma's extreme heat, freeze-thaw cycles, and heavy traffic."
                intro="Oklahoma's extreme temperature swings — from 110°F summers to sub-zero winter nights — destroy asphalt faster than almost any other climate in the country. Potholes, alligator cracking, and drainage failures are year-round problems for Tulsa commercial property owners. UDGOK's asphalt repair contractors fix the damage and engineer lasting solutions that account for Oklahoma's expansive clay subsoils and weather patterns. From a single pothole patch to a complete parking lot repave, we keep your property safe, accessible, and professional-looking."
                stats={[
                    { n: "100+", l: "Lots Repaired" },
                    { n: "500K+", l: "SF Paved" },
                    { n: "$0.15", l: "Sealcoat Per SF" },
                    { n: "Tulsa", l: "Metro Coverage" },
                ]}
                features={[
                    { icon: "🕳️", title: "Pothole & Patch Repair", desc: "Hot-mix and cold-mix asphalt patching for potholes, utility cuts, and surface failures. We saw-cut clean edges for lasting patches that blend with existing pavement." },
                    { icon: "🛡️", title: "Sealcoating & Striping", desc: "Commercial-grade coal tar or asphalt emulsion sealcoating that extends pavement life 5–8 years. Includes crack filling, line striping, and ADA stall marking." },
                    { icon: "🔄", title: "Asphalt Overlay", desc: "Mill-and-overlay resurfacing that adds 1.5\"–3\" of new asphalt over existing pavement. Corrects surface defects without full demolition. Overlays run $3–$7/sq ft in Tulsa." },
                    { icon: "🏗️", title: "Full Repaving", desc: "Complete removal and repaving for parking lots and driveways beyond repair. Includes demolition, subgrade correction, compaction, and new asphalt installation." },
                    { icon: "🌧️", title: "Drainage Solutions", desc: "Parking lot drainage design, catch basin repair, and grading corrections that prevent standing water, base saturation, and premature pavement failure in Oklahoma's clay soils." },
                    { icon: "📋", title: "Maintenance Programs", desc: "Scheduled sealcoating, crack sealing, and inspection programs that extend asphalt lifespan and reduce total cost of ownership for commercial property managers." },
                ]}
                faqs={PAGE_FAQS}
                cta="Get Your Free Asphalt Estimate →"
            />
        </>
    );
}
