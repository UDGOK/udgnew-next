import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { LocalBusinessJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Construction & Design-Build Glenpool OK",
  description:
    "Glenpool's premier commercial design-build contractor. Specializing in retail, medical, and light industrial construction along the Highway 75 corridor.",
  openGraph: {
    title: "Commercial Construction & Design-Build | Glenpool OK",
    description: "Premium commercial construction services in Glenpool, Oklahoma. Retail, medical, and industrial facilities.",
    url: "https://www.udgok.com/glenpool-ok-design-build",
    type: "website",
    images: [{ url: "https://www.udgok.com/images/glenpool-hero.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.udgok.com/glenpool-ok-design-build" },
};

export default function GlenpoolPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Glenpool Commercial Construction", url: "https://www.udgok.com/glenpool-ok-design-build" }
  ];
  const PAGE_FAQS = [
          { q: "What types of commercial construction do you handle in Glenpool?", a: "We build a wide variety of commercial projects including retail strip centers, quick-service restaurants, dental/medical clinics, professional offices, and pre-engineered metal buildings (PEMB) for warehousing and light industrial." },
          { q: "Why is design-build better than traditional construction?", a: "Design-build puts both the architectural design and the physical construction under a single contract with UDGOK. This eliminates adversarial conflicts between architects and builders, allows for faster project starts through overlapping phases, and provides guaranteed pricing much earlier in the process." },
          { q: "Do you help with site selection and feasibility in Glenpool?", a: "Yes. During our pre-construction phase, we can assess potential lots for zoning compliance, utility access, soil conditions, and site development costs (like grading and retention ponds) before you finalize a land purchase." },
          { q: "How do you handle local Glenpool city inspections?", a: "We manage the entire municipal process. We coordinate directly with the City of Glenpool for building permits, handle health department reviews if applicable (for food service or medical), and schedule all necessary phase inspections up to the final Certificate of Occupancy." },
          { q: "What is the typical commercial construction cost in Glenpool, OK?", a: "For standard retail or flex space shells, costs typically run $100–$150 per square foot. Highly specialized spaces like medical offices or restaurants require advanced MEP (mechanical, electrical, plumbing) systems and usually cost $180–$250+ per square foot. We provide highly accurate line-item budgets during the design phase." },
        ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><LocalBusinessJsonLd
        description="Commercial design-build construction company serving Glenpool, Oklahoma and the Highway 75 corridor."
        url="https://www.udgok.com/glenpool-ok-design-build"
        specialization="commercial construction, design-build, retail development, medical office construction, light industrial"
      />
      <ServicePage
        label="Glenpool, Oklahoma"
        title="Glenpool Commercial Construction"
        description="High-performance design-build facilities driving growth along the Highway 75 corridor."
        imageSrc="/images/glenpool-hero.png"
        imageAlt="Modern commercial construction site in Glenpool Oklahoma"
        intro="As a key growth sector connecting South Tulsa County, Glenpool demands commercial construction that combines rapid execution with enduring quality. Whether you are developing a new retail center facing Highway 75, building a local medical clinic, or expanding an industrial footprint, UDGOK offers the design-build expertise to make your project a reality."
        stats={[
          { n: "100%", l: "On-Time Delivery" },
          { n: "Hwy 75", l: "Corridor Focus" },
          { n: "Top", l: "Safety Record" },
        ]}
        features={[
          { icon: "🏗️", title: "Master Design-Build", desc: "Streamlined project delivery that unifies architecture, engineering, and construction under one contract, maximizing your ROI and minimizing risk." },
          { icon: "🏪", title: "Retail & Franchise Builds", desc: "High-traffic retail spaces, standalone restaurants, and convenience stores designed for visibility and customer flow." },
          { icon: "⚕️", title: "Medical facility Construction", desc: "Purpose-built healthcare spaces including dental clinics, urgent care centers, and specialized treatment facilities meeting all health codes." },
          { icon: "🏛️", title: "Corporate Office Spaces", desc: "Modern, tech-forward office build-outs and ground-up headquarters optimized for employee productivity and brand identity." },
          { icon: "🏭", title: "Pre-Engineered Metal Buildings", desc: "Durable, cost-effective PEMB solutions perfect for Glenpool's growing light industrial, warehouse, and distribution needs." },
          { icon: "📋", title: "Site Development & Permitting", desc: "Comprehensive site surveying, civil engineering, earthwork, and seamless coordination with City of Glenpool planning and zoning." },
        ]}
        tldr="UDGOK is a dedicated commercial construction and design-build contractor for Glenpool, OK, focusing on retail, medical, and light industrial developments along the Highway 75 corridor. Our single-source design-build approach ensures faster timelines and strict budget control. Call (918) 520-3823 for a project estimate."
        faqs={PAGE_FAQS}
        cta="Start Your Glenpool Project →"
      />
    </>
  );
}
