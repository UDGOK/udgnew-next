import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Concrete Driveway Contractor Tulsa OK | Install, Repair & Removal",
    description: "Tulsa's trusted concrete driveway contractor. UDGOK builds, repairs, and replaces concrete driveways across Tulsa, Bixby, Broken Arrow & Oklahoma. Stamped, brushed & exposed aggregate. Free estimates.",
    openGraph: {
        title: "Concrete Driveway Contractor Tulsa OK | UDGOK",
        description: "Professional concrete driveway installation, repair, and removal in Tulsa, Oklahoma. Stamped, brushed & exposed aggregate finishes.",
        url: "https://www.udgok.com/concrete-driveway-tulsa",
        type: "website",
    },
    alternates: { canonical: "https://www.udgok.com/concrete-driveway-tulsa" },
};

export default function ConcreteDrivewayTulsaPage() {
    
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Concrete Driveway Contractor in Tulsa, Oklahoma", url: "https://www.udgok.com/concrete-driveway-tulsa" }
  ];
  const PAGE_FAQS = [
                    { q: "How much does a concrete driveway cost in Tulsa?", a: "A standard brushed concrete driveway in Tulsa costs $8–$12 per square foot installed. Stamped or decorative concrete runs $12–$18 per square foot. A typical 600 sq ft single-car driveway costs $4,800–$7,200 for standard finish. A 1,000 sq ft double-wide driveway costs $8,000–$18,000 depending on finish type. UDGOK provides free detailed estimates for all Tulsa driveway projects." },
                    { q: "How long does it take to install a concrete driveway in Tulsa?", a: "A standard residential concrete driveway takes 2–4 days for demolition, excavation, forming, and pouring. Concrete requires 7 days minimum curing before light vehicle traffic and 28 days for full strength. Total project timeline from start to driving on it is typically 10–14 days. Stamped or colored concrete may add 1–2 days." },
                    { q: "Does UDGOK remove old concrete driveways?", a: "Yes. We provide complete concrete removal services in Tulsa at $3–$6 per square foot, including demolition, hauling, and disposal. We can remove your existing driveway and pour a new one in a single project. Concrete removal in Tulsa OK includes all debris hauling and site cleanup." },
                    { q: "What concrete driveway finish is best for Oklahoma weather?", a: "Brushed (broom finish) concrete is the most popular and cost-effective driveway finish in Tulsa — it provides slip resistance and handles freeze-thaw well. Exposed aggregate is also excellent for Oklahoma weather. Stamped concrete looks premium but requires periodic resealing (every 2–3 years) to maintain appearance through Oklahoma's seasonal swings." },
                    { q: "Do I need a permit for a concrete driveway in Tulsa?", a: "In most cases, yes. The City of Tulsa requires a right-of-way approach permit for driveway work that connects to a public street. If you're expanding or relocating your driveway, additional zoning compliance may be required. UDGOK handles all Tulsa driveway permitting as part of our service." },
                    { q: "How do I find a reliable concrete driveway contractor near me in Tulsa?", a: "Look for a concrete driveway specialist with Oklahoma contractor licensing, proof of insurance, a local physical address, and verifiable project references. UDGOK is based in Tulsa at 7739 E 38th St and has poured 200+ driveways across the Tulsa metro. We provide free written estimates with detailed line-item pricing." },
                ];
  return (
        <>
            
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
                name="Concrete Driveway Contractor Tulsa"
                description="Professional concrete driveway contractor in Tulsa, Oklahoma. Installation, repair, replacement, and removal of concrete driveways for residential and commercial properties."
                url="https://www.udgok.com/concrete-driveway-tulsa"
            />
            <ServicePage
                label="Concrete Driveways"
                title="Concrete Driveway Contractor in Tulsa, Oklahoma"
                description="Professional concrete driveway installation, repair, replacement, and removal across the Tulsa metro — built to last 30+ years."
                imageSrc="/images/concrete-driveway-tulsa.png"
                imageAlt="Concrete driveway contractor Tulsa Oklahoma — UDGOK"
                tldr="UDGOK is a full-service concrete driveway contractor in Tulsa, Oklahoma. We install new concrete driveways ($8–$18 per square foot), repair cracked or settled driveways, remove old concrete, and pour replacements. We offer brushed, stamped, exposed aggregate, and colored concrete finishes. A typical 600 sq ft residential driveway in Tulsa costs $4,800–$10,800 installed. We also handle concrete removal at $3–$6 per square foot. Based in Tulsa at 7739 E 38th St, we serve the entire Tulsa metro including Bixby, Broken Arrow, Jenks, Owasso, and Sand Springs."
                intro="Your driveway is the first thing visitors see — and in Oklahoma weather, concrete takes a beating from freeze-thaw cycles, expansive clay soils, and summer heat. UDGOK builds concrete driveways designed for Tulsa's specific soil and climate conditions, with proper subgrade preparation, reinforcement, and control joints that prevent the cracks and settling common across Oklahoma. Whether you need a new pour, a full replacement, or concrete removal, our concrete driveway specialists handle every step from demolition through final sealing."
                stats={[
                    { n: "200+", l: "Driveways Poured" },
                    { n: "30yr", l: "Designed Lifespan" },
                    { n: "$8–18", l: "Per Sq Ft Installed" },
                    { n: "Tulsa", l: "Metro Coverage" },
                ]}
                features={[
                    { icon: "🏗️", title: "New Driveway Installation", desc: "Complete concrete driveway construction from excavation and subgrade prep through forming, pouring, finishing, and curing. 4\" minimum thickness with fiber mesh or rebar reinforcement." },
                    { icon: "🔨", title: "Driveway Repair & Resurfacing", desc: "Crack repair, mudjacking, partial slab replacement, and decorative overlay resurfacing. We fix settlement, spalling, and surface deterioration without full replacement when possible." },
                    { icon: "🪨", title: "Concrete Removal & Replacement", desc: "Old driveway demolition, concrete removal, hauling, and new pour. We handle Tulsa disposal requirements and recycle concrete material when possible. Removal runs $3–$6 per sq ft." },
                    { icon: "✨", title: "Stamped & Decorative Concrete", desc: "Stamped patterns, exposed aggregate, colored concrete, and stained finishes that add curb appeal and value. Popular Tulsa patterns include ashlar slate, cobblestone, and flagstone." },
                    { icon: "🌡️", title: "Oklahoma Climate Engineering", desc: "Proper expansion joints, control joints, and subgrade compaction designed for Oklahoma's clay soils and freeze-thaw cycles. We build driveways that handle Tulsa weather without cracking." },
                    { icon: "📋", title: "Tulsa Permits & Code Compliance", desc: "We handle City of Tulsa driveway permits, right-of-way approach permits, setback requirements, and drainage compliance. Established relationships with Tulsa DBCA for efficient approvals." },
                ]}
                faqs={PAGE_FAQS}
                cta="Get Your Free Driveway Estimate →"
            />
        </>
    );
}
