import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "HTML Sitemap",
  description: "Navigate all pages on the UDGOK website. Find medical, dental, and commercial construction services, locations, tools, and insights.",
};

const sitemapData = [
  {
    category: "Main Pages",
    links: [
      { t: "Home", h: "/" },
      { t: "About", h: "/about" },
      { t: "Contact", h: "/contact" },
      { t: "Projects", h: "/projects" },
      { t: "Services", h: "/services" },
      { t: "Resource Hub", h: "/resources" },
    ]
  },
  {
    category: "Services",
    links: [
      { t: "Design-Build", h: "/design-build" },
      { t: "Medical Office Construction", h: "/medical-office-design-build-tulsa" },
      { t: "Dental Office Construction", h: "/dental-office-construction-tulsa" },
      { t: "Oral Surgery Centers", h: "/oral-surgeon-office-construction-tulsa" },
      { t: "Eye Clinic Construction", h: "/eye-clinic-construction-tulsa" },
      { t: "Medical Gas Installation", h: "/medical-gas-installation" },
      { t: "Tenant Improvements", h: "/tenant-improvements" },
      { t: "Preconstruction", h: "/preconstruction" },
      { t: "Virtual Design & Construction", h: "/virtual-design-construction" },
      { t: "Safety Program", h: "/safety-program" },
      { t: "AI & Robotics", h: "/ai-robotics" },
      { t: "Property Intelligence", h: "/property-intelligence" },
      { t: "Market Intelligence", h: "/market-intelligence" },
    ]
  },
  {
    category: "Commercial & Retail",
    links: [
      { t: "Commercial Contractor Tulsa", h: "/commercial-contractor-tulsa" },
      { t: "Construction Companies in Tulsa", h: "/construction-companies-tulsa" },
      { t: "Retail Construction Tulsa", h: "/retail-construction-tulsa" },
      { t: "Shopping Center Construction", h: "/shopping-center-construction-tulsa" },
      { t: "Convenience Store Construction", h: "/convenience-store-construction-tulsa" },
      { t: "Office Construction Tulsa", h: "/office-construction-tulsa" },
      { t: "Office Construction Bixby", h: "/office-construction-bixby" },
      { t: "Build to Suit Tulsa", h: "/build-to-suit-tulsa" },
      { t: "Hospitality Construction Bixby", h: "/hospitality-construction-bixby" },
      { t: "Hospitality Construction Broken Arrow", h: "/hospitality-construction-broken-arrow" },
      { t: "Industrial Buildings Tulsa", h: "/industrial-buildings-tulsa" },
      { t: "Tulsa Construction Costs 2026", h: "/tulsa-construction-costs" },
    ]
  },
  {
    category: "Industrial & Metal Buildings",
    links: [
      { t: "Warehouse Construction Tulsa", h: "/warehouse-construction-tulsa" },
      { t: "Pre-Engineered Metal Buildings", h: "/pre-engineered-metal-buildings-tulsa" },
      { t: "Cold Storage Construction", h: "/cold-storage-construction-tulsa" },
      { t: "Manufacturing Facility Construction", h: "/manufacturing-facility-construction-tulsa" },
      { t: "Flex Space Construction", h: "/flex-space-construction-tulsa" },
      { t: "Self-Storage Construction", h: "/self-storage-construction-tulsa" },
      { t: "Agricultural Buildings Oklahoma", h: "/agricultural-building-construction-oklahoma" },
      { t: "Industrial Renovation Tulsa", h: "/industrial-renovation-tulsa" },
    ]
  },
  {
    category: "Locations",
    links: [
      { t: "Tulsa, OK", h: "/tulsa-ok-design-build" },
      { t: "South Tulsa", h: "/construction-company-south-tulsa" },
      { t: "Midtown Tulsa", h: "/construction-company-midtown-tulsa" },
      { t: "Downtown Tulsa", h: "/construction-company-downtown-tulsa" },
      { t: "East Tulsa", h: "/construction-company-east-tulsa" },
      { t: "North Tulsa", h: "/construction-company-north-tulsa" },
      { t: "Broken Arrow, OK", h: "/broken-arrow-ok-design-build" },
      { t: "Bixby, OK", h: "/bixby-ok-design-build" },
      { t: "Jenks, OK", h: "/jenks-ok-design-build" },
      { t: "Owasso, OK", h: "/owasso-ok-design-build" },
      { t: "Sapulpa, OK", h: "/sapulpa-ok-design-build" },
      { t: "Haskell, OK", h: "/haskell-ok-design-build" },
      { t: "Sand Springs, OK", h: "/sand-springs-ok-design-build" },
      { t: "Tulsa Medical Construction", h: "/tulsa-medical-construction" },
      { t: "Bixby Dental Construction", h: "/bixby-dental-construction" },
      { t: "Oklahoma City", h: "/oklahoma-city-medical-construction" },
      { t: "Dallas, TX", h: "/dallas-medical-construction" },
    ]
  },
  {
    category: "Articles & Guides",
    links: [
      { t: "Dental Construction Cost Guide", h: "/dental-construction-costs" },
      { t: "Dental Office Construction Guide 2026", h: "/guide-dental-office-construction-tulsa" },
      { t: "Digital Twin Technology", h: "/digital-twin-technology" },
      { t: "Digital Twin Technology Guide 2026", h: "/digital-twin-technology-guide-2026" },
      { t: "Guide for Commercial Brokers", h: "/guide-commercial-brokers" },
      { t: "Guide for Developers", h: "/guide-developers" },
      { t: "AI Robotic Surgery 2026", h: "/ai-robotic-surgery-2026" },
    ]
  },
  {
    category: "Tools & Calculators",
    links: [
      { t: "All Construction Calculators", h: "/tools" },
      { t: "Concrete Calculator", h: "/calculator-concrete" },
      { t: "Drywall Calculator", h: "/calculator-drywall" },
      { t: "Paint Calculator", h: "/calculator-paint" },
      { t: "Brick Calculator", h: "/calculator-brick" },
      { t: "Roofing Calculator", h: "/calculator-roofing" },
      { t: "Flooring Calculator", h: "/calculator-flooring" },
    ]
  },
  {
    category: "Company",
    links: [
      { t: "Community", h: "/community" },
      { t: "Partners", h: "/partners" },
      { t: "Subcontractors", h: "/subcontractors" },
      { t: "Transparency", h: "/transparency" },
      { t: "Bid Portal", h: "/portal" },
      { t: "Privacy Policy", h: "/privacy-policy" },
      { t: "Terms of Service", h: "/terms-of-service" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <PageHero label="Navigation" title="HTML Sitemap" description="Complete index of UDGOK website pages." />
      <section style={{ maxWidth: "1200px", margin: "4rem auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
        {sitemapData.map((section, i) => (
          <div key={i}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, borderBottom: "4px solid #FF4800", paddingBottom: "1rem", marginBottom: "1.5rem", textTransform: "uppercase" }}>{section.category}</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link href={link.h} style={{ color: "#0B061B", textDecoration: "none", fontWeight: 600, fontSize: "1.1rem" }}>
                    {link.t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
