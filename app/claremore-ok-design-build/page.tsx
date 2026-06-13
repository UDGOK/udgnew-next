import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Construction & Design-Build Claremore OK",
  description:
    "Claremore's premier commercial design-build contractor. Specializing in medical clinics, retail centers, and industrial facilities in Rogers County. View our Oklahoma portfolio.",
  openGraph: {
    title: "Commercial Construction & Design-Build | Claremore OK | UDGOK",
    description: "Premium commercial construction and design-build services in Claremore, Oklahoma. Medical, retail, and industrial facilities.",
    url: "https://www.udgok.com/claremore-ok-design-build",
    type: "website",
    images: [{ url: "https://www.udgok.com/images/claremore-hero.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.udgok.com/claremore-ok-design-build" },
};

export default function ClaremorePage() {
  return (
    <>
      <LocalBusinessJsonLd
        description="Commercial design-build construction company serving Claremore and Rogers County, Oklahoma."
        url="https://www.udgok.com/claremore-ok-design-build"
        specialization="commercial construction, design-build, medical office construction, retail construction, industrial facilities"
      />
      <ServicePage
        label="Claremore, Oklahoma"
        title="Claremore Commercial Construction"
        description="Premium design-build execution for growing businesses and healthcare providers in Rogers County."
        imageSrc="/images/claremore-hero.png"
        imageAlt="Modern commercial design-build construction project in Claremore Oklahoma"
        intro="As Claremore and Rogers County continue their rapid economic expansion, proper commercial construction requires a contractor who understands local zoning, soil conditions, and municipal permitting processes. From the Hwy 66 / Hwy 20 corridors to the industrial parks, UDGOK delivers specialized design-build solutions tailored to Claremore’s growth."
        stats={[
          { n: "100%", l: "On-Budget Delivery" },
          { n: "Rogers", l: "County Coverage" },
          { n: "15+", l: "Years Experience" },
        ]}
        features={[
          { icon: "🏗️", title: "Commercial Design-Build", desc: "A single-source responsibility model integrating architecture, engineering, and construction to deliver Claremore commercial projects faster and under budget." },
          { icon: "⚕️", title: "Medical & Dental Clinics", desc: "Specialized healthcare construction including dental operatories, medical imaging suites, and ADA-compliant patient facilities designed for modern care." },
          { icon: "🛍️", title: "Retail & Dining", desc: "High-visibility retail strip centers, standalone restaurant build-outs, and franchise construction along Claremore's main commercial arteries." },
          { icon: "🏭", title: "Industrial & Manufacturing", desc: "Pre-engineered metal buildings (PEMB), warehouse facilities, and light industrial spaces engineered for operational efficiency." },
          { icon: "🔄", title: "Tenant Improvements", desc: "Fast-track interior renovations and white-box build-outs to get your Claremore business open and generating revenue quickly." },
          { icon: "📋", title: "Local Permitting & Compliance", desc: "Seamless navigation of Claremore city planning, Rogers county zoning, and local utility coordination to avoid bureaucratic delays." },
        ]}
        tldr="UDGOK is a leading commercial construction and design-build contractor serving Claremore, Oklahoma, and Rogers County. We specialize in medical offices, retail centers, and industrial facilities, offering a single-source design-build methodology that accelerates project delivery and controls costs. Call (918) 520-3823 for a project consultation."
        faqs={[
          { q: "What types of commercial projects do you build in Claremore?", a: "We specialize in medical and dental offices, retail strip centers, standalone restaurants, pre-engineered metal buildings (PEMB), and tenant improvement build-outs across Claremore and Rogers County." },
          { q: "Do you handle the architectural design and planning?", a: "Yes. Our design-build approach means we manage the entire process from initial site planning and architectural blueprints to engineering and final construction. This single-source responsibility prevents cost overruns and speeds up the timeline." },
          { q: "How much does commercial construction cost per square foot in Claremore?", a: "Costs vary by facility type. Standard retail/flex space usually ranges from $100–$160 per square foot. Specialized medical or dental clinics range from $180–$250+ per square foot due to complex plumbing, medical gas, and advanced HVAC requirements." },
          { q: "Do you manage the City of Claremore permitting process?", a: "Absolutely. We handle all pre-construction compliance, including submitting plans to the Claremore planning commission, securing necessary building permits, scheduling inspections, and coordinating with local utilities for site connections." },
          { q: "How long does a typical design-build project take?", a: "A standard commercial shell and core takes about 4–6 months once permits are issued. Complex medical or highly customized facilities may take 6–9 months. Tenant interior fit-outs are much faster, typically concluding in 8–12 weeks." },
        ]}
        cta="Start Your Claremore Project →"
      />
    </>
  );
}
