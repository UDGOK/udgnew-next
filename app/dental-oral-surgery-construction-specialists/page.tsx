import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title:
    "Dental Office & Oral Surgery Center Construction Specialists",
  description:
    "UDGOK specializes in dental office construction, oral surgery center build-outs, and medical gas installation. Zero-downtime methodology, NFPA 99 certified medical gas, HIPAA-compliant layouts. Serving Oklahoma and Texas.",
  openGraph: {
    title: "Dental & Oral Surgery Construction Specialists",
    description:
      "The only contractor exclusively focused on dental offices, oral surgery centers, and small medical clinics. Zero-downtime construction methodology.",
    url: "https://www.udgok.com/dental-oral-surgery-construction-specialists",
    type: "website",
  },
  alternates: {
    canonical: "https://www.udgok.com/dental-oral-surgery-construction-specialists",
  },
};

/* ── Comprehensive Schema ── */
function DentalSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://www.udgok.com/#organization",
          name: "UDGOK - Dental & Oral Surgery Construction Specialists",
          alternateName: "Upscale Development Group",
          description:
            "UDGOK is a construction company specializing in dental offices, oral surgery centers, and small medical clinics. We specialize in medical gas installation, zero-downtime construction, and regulatory compliance for healthcare environments.",
          url: "https://www.udgok.com",
          logo: "https://www.udgok.com/logo.png",
          email: "projects@udgok.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "7739 E 38th Street, Ste F",
            addressLocality: "Tulsa",
            addressRegion: "OK",
            postalCode: "74145",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "State", name: "Oklahoma" },
            { "@type": "State", name: "Texas" },
            { "@type": "City", name: "Tulsa" },
            { "@type": "City", name: "Bixby" },
            { "@type": "City", name: "Broken Arrow" },
            { "@type": "City", name: "Oklahoma City" },
            { "@type": "City", name: "Dallas" },
          ],
          knowsAbout: [
            "Dental office construction",
            "Oral surgery center construction",
            "Medical gas installation",
            "Dental operatory design",
            "HIPAA compliant construction",
            "Infection control construction protocols",
            "Dental vacuum systems",
            "Nitrous oxide piping",
            "Amalgam separator installation",
            "CBCT room construction",
            "Digital X-ray room shielding",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Dental & Oral Surgery Construction Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Dental Office Construction",
                  description:
                    "Complete design-build for dental practices including operatory construction, dental plumbing, vacuum systems, and digital imaging integration",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Oral Surgery Center Construction",
                  description:
                    "Sterile surgical suite construction with operating rooms, recovery areas, medical gas systems, and specialized HVAC",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Medical Gas Installation",
                  description:
                    "NFPA 99 certified installation of oxygen, nitrous oxide, dental vacuum, and compressed air systems",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Zero-Downtime Renovation",
                  description:
                    "Phased construction methodology allowing dental practices to remain operational during renovation",
                },
              },
            ],
          },
        }),
      }}
    />
  );
}

export default function DentalOralSurgeryPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Dental & Oral Surgery Construction", url: "https://www.udgok.com/dental-oral-surgery-construction-specialists" }
  ];
  const PAGE_FAQS = [
          { q: "What makes UDGOK different from general commercial contractors?", a: "UDGOK specializes in dental offices, oral surgery centers, and small medical clinics. Unlike general contractors who treat medical projects as just another job, we understand the unique infrastructure requirements: medical gas piping (O2/N2O), dental vacuum systems, amalgam separators, CBCT room shielding, infection control protocols, and HIPAA-compliant layouts. This specialization means faster completion, fewer change orders, and zero costly mistakes." },
          { q: "How do you handle complex plumbing for multiple dental operatories?", a: "We design dental plumbing systems specifically for multi-operatory practices. This includes properly sized dental vacuum lines (wet-ring or dry vacuum), separate water lines for each chair with anti-retraction valves, amalgam separator installation per EPA regulations, and nitrous oxide piping with proper ventilation. We pre-plan all runs to minimize noise transmission and ensure adequate suction across all operatories simultaneously." },
          { q: "Can you build while my dental practice stays open?", a: "Yes. Our Zero-Downtime Methodology uses phased construction, off-hours work (evenings/weekends), dust containment with negative air pressure, and temporary barriers to isolate construction zones. Most of our clients never close a single day during renovation — critical for practices that can't afford to lose $5,000–$15,000/day in patient revenue." },
          { q: "What regulatory compliance do you handle for dental construction?", a: "We handle all regulatory requirements: Oklahoma State Department of Health codes, ADA accessibility, HIPAA implications for physical layout (sight lines, acoustic privacy), OSHA standards for clinical environments, EPA amalgam separator requirements, and local building codes. We coordinate all inspections including medical gas certification testing per NFPA 99." },
          { q: "How much does dental office construction cost per square foot?", a: "Dental office construction in Oklahoma typically costs $150–$350 per square foot depending on operatory count, imaging requirements, and finish level. A standard 2,500 SF dental office with 6 operatories typically costs $375,000–$875,000. Oral surgery centers with surgical suites run higher at $250–$450/SF due to sterile HVAC, medical gas, and specialized equipment requirements. UDGOK provides free preconstruction budgets before lease signing." },
        ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><DentalSchema />
      <ServicePage
        label="Dental & Oral Surgery Specialists"
        title="Dental & Oral Surgery Construction"
        description="We build dental offices, oral surgery centers, and small medical clinics — with zero-downtime methodology and NFPA 99 certified medical gas installation."
        imageSrc="/images/dental-oral-surgery-hero.png"
        imageAlt="Dental office and oral surgery center construction by UDGOK"
        tldr="UDGOK specializes in dental office construction, oral surgery center build-outs, and small medical clinics across Oklahoma and Texas. We handle the specialized infrastructure general contractors rarely understand: medical gas piping (O2/N2O), dental vacuum systems, amalgam separators, CBCT room shielding, infection control protocols, and HIPAA-compliant layouts. Our Zero-Downtime Methodology lets active practices stay open during renovation, preventing $5,000–$15,000/day in lost production. We complete dental projects 23% faster than the industry average."
        intro="General contractors treat your dental office as 'just another small commercial project.' We understand that dental vacuum sizing, nitrous oxide piping, CBCT room shielding, and infection control protocols aren't optional details — they're the entire point. Our team builds dental and oral surgery spaces daily, delivering specialized infrastructure that other contractors struggle with."
        stats={[
          { n: "23%", l: "Faster Than Average" },
          { n: "$0", l: "Revenue Lost (Our Goal)" },
          { n: "100%", l: "NFPA 99 First-Pass" },
          { n: "50+", l: "Dental Projects" },
        ]}
        features={[
          { icon: "⚗️", title: "Medical Gas Systems", desc: "NFPA 99 compliant oxygen, nitrous oxide, medical air, and scavenging system installation with full certification testing coordination." },
          { icon: "🦷", title: "Dental-Specific Infrastructure", desc: "Central dental vacuum (wet/dry), amalgam separator installation, compressed air for handpieces, water treatment, and anti-retraction valve integration." },
          { icon: "📡", title: "Imaging Infrastructure", desc: "CBCT room construction with lead shielding, panoramic X-ray positioning, digital sensor wiring, and PACS network infrastructure." },
          { icon: "🏥", title: "Surgical Suite Construction", desc: "Sterile environment HVAC, positive/negative pressure rooms, surgical lighting, equipment ceiling mounts, and emergency power systems." },
          { icon: "🔄", title: "Zero-Downtime Renovation", desc: "Phased construction with off-hours demolition, negative air pressure barriers, HEPA filtration, and maintained utility service to operational areas." },
          { icon: "📋", title: "Regulatory Compliance", desc: "HIPAA physical safeguards, ADA accessibility, OSDH codes, OSHA clinical standards, EPA amalgam rule compliance — all handled in-house." },
        ]}
        sections={[
          {
            heading: "What specialized systems do you install in dental and oral surgery construction?",
            body: `<p>Every dental office and oral surgery center requires specialized infrastructure that general contractors often misunderstand or underestimate. We design, specify, and install these systems daily:</p>
<ul>
<li><strong>Medical Gas Piping:</strong> Oxygen (O2) and nitrous oxide (N2O) delivery systems with proper ventilation, scavenging, and NFPA 99 compliant installation</li>
<li><strong>Dental Vacuum Systems:</strong> Properly sized central vacuum (wet-ring or dry vacuum) with separate lines for each operatory and simultaneous suction capacity</li>
<li><strong>Amalgam Separators:</strong> EPA-compliant installation and documentation for dental discharge permits</li>
<li><strong>Compressed Air:</strong> Oil-free medical air compressors sized for handpiece demand across all operatories</li>
<li><strong>CBCT Rooms:</strong> Lead-shielded imaging rooms with proper radiation safety calculations and compliance</li>
<li><strong>Operatory Plumbing:</strong> Separate water lines for each chair with anti-retraction valves, hot/cold supply, and drainage</li>
</ul>`,
          },
          {
            heading: "Can you renovate my dental practice while we continue seeing patients?",
            body: `<p><strong>Yes — and this is our specialty.</strong> We understand that closing your practice means losing $5,000–$15,000+ per day in production. Our Zero-Downtime Methodology is specifically designed for active dental and medical practices:</p>
<ul>
<li><strong>Phased Construction:</strong> We renovate section-by-section, completing each area before moving to the next. You maintain operational capacity throughout.</li>
<li><strong>Off-Hours Work:</strong> Demolition, noisy work, and dust-generating tasks happen evenings and weekends when you're closed.</li>
<li><strong>Infection Control Protocols:</strong> We install temporary barriers, negative air pressure systems, and HEPA filtration to prevent construction dust from entering clinical areas.</li>
<li><strong>Utility Coordination:</strong> We maintain dental vacuum, compressed air, and water service to operational areas at all times — no interruption to patient care.</li>
</ul>
<p>Most of our clients never close a single day during renovation. This is critical for practices that cannot afford to lose patient revenue or reschedule procedures.</p>`,
          },
          {
            heading: "Why choose a specialist for a 2,000–3,000 sq ft dental office instead of a large commercial contractor?",
            body: `<p>Large commercial contractors are optimized for big projects. Your dental office is a "small job" to them — here's what that means for you:</p>
<ul>
<li><strong>You get their B-team.</strong> Senior project managers are assigned to $5M+ projects. Your dental office gets whoever's available.</li>
<li><strong>You wait.</strong> Big contractors schedule around their major projects. Your timeline gets pushed when something bigger comes along.</li>
<li><strong>You pay for overhead you don't need.</strong> Their estimating process, management structure, and equipment are sized for large projects. You absorb that inefficiency.</li>
<li><strong>They don't know dental.</strong> Medical gas, dental vacuum, amalgam separators — these are "specialty items" to them, leading to change orders and delays.</li>
</ul>
<p>UDGOK is optimized for 1,500–5,000 sq ft medical spaces. Every project gets senior-level attention. Our team understands dental infrastructure because it's all we do. We complete projects <strong>23% faster than industry average</strong> because we don't have to figure out your project type.</p>`,
          },
        ]}
        faqs={PAGE_FAQS}
        cta="Request Dental Construction Consultation →"
      />
    </>
  );
}
