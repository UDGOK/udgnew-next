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
      { t: "Insights", h: "/insights" },
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
      { t: "Virtual Design Construction", h: "/virtual-design-construction" },
    ]
  },
  {
    category: "Locations",
    links: [
      { t: "Tulsa, OK", h: "/tulsa-ok-design-build" },
      { t: "Broken Arrow, OK", h: "/broken-arrow-ok-design-build" },
      { t: "Bixby, OK", h: "/bixby-ok-design-build" },
      { t: "Jenks, OK", h: "/jenks-ok-design-build" },
      { t: "Owasso, OK", h: "/owasso-ok-design-build" },
      { t: "Sand Springs, OK", h: "/sand-springs-ok-design-build" },
      { t: "Oklahoma City", h: "/oklahoma-city-medical-construction" },
      { t: "Dallas, TX", h: "/dallas-medical-construction" },
    ]
  },
  {
    category: "Resources & Tools",
    links: [
      { t: "Resource Hub", h: "/resources" },
      { t: "Construction Calculators", h: "/tools" },
      { t: "Concrete Calculator", h: "/calculator-concrete" },
      { t: "Drywall Calculator", h: "/calculator-drywall" },
      { t: "Paint Calculator", h: "/calculator-paint" },
      { t: "Brick Calculator", h: "/calculator-brick" },
      { t: "Roofing Calculator", h: "/calculator-roofing" },
      { t: "Flooring Calculator", h: "/calculator-flooring" },
      { t: "Property Intelligence", h: "/property-intelligence" },
      { t: "Subcontractors", h: "/subcontractors" },
      { t: "Community", h: "/community" },
      { t: "Partners", h: "/partners" },
      { t: "Safety Program", h: "/safety-program" },
    ]
  },
  {
    category: "Legal & Info",
    links: [
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
