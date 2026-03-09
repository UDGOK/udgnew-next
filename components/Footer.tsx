"use client";
import Link from "next/link";
import Script from "next/script";

const LI = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.9rem", lineHeight: "2" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF4800"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
    >
      {children}
    </Link>
  </li>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Pre-footer CTA */}
      <div style={{
        background: "#FF4800",
        padding: "4rem 2rem",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: "2rem",
        borderTop: "4px solid #0B061B"
      }}>
        <div>
          <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,3vw,2.5rem)", textTransform: "uppercase", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
            Ready to Build in Oklahoma?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", margin: 0 }}>
            Let&apos;s discuss your medical, dental, or commercial construction project.
          </p>
        </div>
        <Link
          href="/contact"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            padding: "1rem 2.5rem", background: "#0B061B", color: "#fff",
            fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1a1525"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0B061B"; }}
        >
          Start Your Project →
        </Link>
      </div>

      {/* Main Footer */}
      <footer
        style={{
          background: "linear-gradient(180deg, #0B061B 0%, #000 100%)",
          color: "#fff", padding: "5rem 2rem 0",
        }}
        itemScope itemType="https://schema.org/WPFooter"
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "1.5rem" }}>
              <span style={{ width: "12px", height: "12px", background: "#FF4800", transform: "rotate(45deg)", display: "inline-block" }} />
              <span style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff" }}>UDGOK</span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Tulsa&apos;s trusted Design-Build partner for medical offices, dental clinics, and commercial construction. Serving Oklahoma and North Texas since 2015.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <SocialLink href="https://www.linkedin.com/company/upscale-development-group" label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </SocialLink>
              <SocialLink href="https://www.facebook.com/udgok" label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </SocialLink>
              <SocialLink href="https://www.instagram.com/udgok" label="Instagram">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </SocialLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "2px solid #FF4800" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <LI href="/design-build">Design-Build</LI>
              <LI href="/medical-office-design-build-tulsa">Medical Office</LI>
              <LI href="/dental-office-construction-tulsa">Dental Construction</LI>
              <LI href="/convenience-store-construction-tulsa">Convenience Stores</LI>
              <LI href="/virtual-design-construction">Virtual Design (VDC)</LI>
              <LI href="/preconstruction">Preconstruction</LI>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "2px solid #FF4800" }}>Service Areas</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <LI href="/tulsa-ok-design-build">Tulsa, OK</LI>
              <LI href="/broken-arrow-ok-design-build">Broken Arrow, OK</LI>
              <LI href="/bixby-ok-design-build">Bixby, OK</LI>
              <LI href="/jenks-ok-design-build">Jenks, OK</LI>
              <LI href="/owasso-ok-design-build">Owasso, OK</LI>
              <LI href="/sapulpa-ok-design-build">Sapulpa, OK</LI>
              <LI href="/haskell-ok-design-build">Haskell, OK</LI>
              <LI href="/oklahoma-city-medical-construction">Oklahoma City</LI>
              <LI href="/dallas-medical-construction">Dallas / Plano, TX</LI>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "2px solid #FF4800" }}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <LI href="/about">About Us</LI>
              <LI href="/projects">Our Work</LI>
              <LI href="/tools">Tools &amp; Calculators</LI>
              <LI href="/resources">Resources</LI>
              <LI href="/subcontractors">Subcontractor Portal</LI>
              <LI href="/contact">Contact</LI>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "2px solid #FF4800" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <svg style={{ color: "#FF4800", flexShrink: 0, marginTop: "2px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>7739 E 38th Street, Ste F<br />Tulsa, OK 74145</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <svg style={{ color: "#FF4800", flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.27 12a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.163 1.12.414 2.225.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.585.286 1.69.537 2.81.7A2 2 0 0122 16.92z" /></svg>
                <Link href="tel:+19185203823" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>(918) 520-3823</Link>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <svg style={{ color: "#FF4800", flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <Link href="mailto:projects@udgok.com" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>projects@udgok.com</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          maxWidth: "1400px", margin: "4rem auto 0",
          padding: "2rem 0", borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", margin: 0 }}>
            © {year} Upscale Development Group. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-of-service", label: "Terms of Service" },
              { href: "/sitemap-page", label: "Sitemap" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.8rem" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
            Oklahoma Licensed General Contractor
          </div>
        </div>
      </footer>

      {/* JSON-LD Schema — LocalBusiness */}
      <Script id="schema-local-business" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "name": "Upscale Development Group",
          "alternateName": "UDGOK",
          "url": "https://udgok.com",
          "logo": "https://udgok.com/images/logo.png",
          "description": "Tulsa-based AI-powered Design-Build construction firm specializing in medical offices, dental clinics, oral surgery centers, eye clinics, and commercial buildings across Oklahoma and North Texas.",
          "foundingDate": "2015",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 10,
            "maxValue": 50
          },
          "priceRange": "$$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7739 E 38th Street, Ste F",
            "addressLocality": "Tulsa",
            "addressRegion": "OK",
            "postalCode": "74145",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.1039,
            "longitude": -95.8903
          },
          "telephone": "+1-918-520-3823",
          "email": "projects@udgok.com",
          "openingHours": "Mo-Fr 07:00-18:00",
          "areaServed": [
            {"@type": "City", "name": "Tulsa", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Broken Arrow", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Bixby", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Jenks", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Owasso", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Sapulpa", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Haskell", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Sand Springs", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Oklahoma City", "containedInPlace": {"@type": "State", "name": "Oklahoma"}},
            {"@type": "City", "name": "Dallas", "containedInPlace": {"@type": "State", "name": "Texas"}},
            {"@type": "City", "name": "Plano", "containedInPlace": {"@type": "State", "name": "Texas"}}
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Construction Services",
            "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Medical Office Design-Build", "url": "https://udgok.com/medical-office-design-build-tulsa"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Dental Office Construction", "url": "https://udgok.com/dental-office-construction-tulsa"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Oral Surgery Center Construction", "url": "https://udgok.com/oral-surgeon-office-construction-tulsa"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Eye Clinic Construction", "url": "https://udgok.com/eye-clinic-construction-tulsa"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Medical Gas Installation", "url": "https://udgok.com/medical-gas-installation"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Commercial Tenant Improvements", "url": "https://udgok.com/tenant-improvements"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Virtual Design & Construction (VDC)", "url": "https://udgok.com/virtual-design-construction"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Preconstruction Services", "url": "https://udgok.com/preconstruction"}}
            ]
          },
          "sameAs": [
            "https://www.linkedin.com/company/upscale-development-group",
            "https://www.facebook.com/udgok",
            "https://www.instagram.com/udgok"
          ],
          "knowsAbout": [
            "Medical office construction",
            "Dental clinic design-build",
            "Healthcare facility construction",
            "Medical gas installation and certification",
            "Commercial construction management",
            "BIM and virtual design construction",
            "ADA compliance for healthcare facilities",
            "HVAC systems for medical environments",
            "Oral surgery center construction",
            "Eye clinic construction",
            "Convenience store construction",
            "Shopping center construction",
            "Preconstruction cost estimation",
            "General contractor Oklahoma"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-918-520-3823",
              "contactType": "customer service",
              "email": "projects@udgok.com",
              "areaServed": ["US"],
              "availableLanguage": ["English"]
            }
          ]
        }
      `}</Script>

      {/* JSON-LD Schema — WebSite with SearchAction */}
      <Script id="schema-website" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "UDGOK — Upscale Development Group",
          "url": "https://udgok.com",
          "description": "AI-Powered Medical and Dental Design-Build Construction in Oklahoma and Texas.",
          "publisher": {
            "@type": "Organization",
            "name": "Upscale Development Group",
            "url": "https://udgok.com"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://udgok.com/resources?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", "h2", ".hero-subtitle", "[data-speakable]"]
          }
        }
      `}</Script>
    </>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: "36px", height: "36px", background: "rgba(255,255,255,0.1)",
        borderRadius: "50%", display: "flex", alignItems: "center",
        justifyContent: "center", color: "rgba(255,255,255,0.7)",
        textDecoration: "none", transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#FF4800";
        el.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.1)";
        el.style.color = "rgba(255,255,255,0.7)";
      }}
    >
      {children}
    </a>
  );
}
