import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Convenience Store Construction Tulsa Oklahoma | UDGOK",
  description: "Convenience store and fuel canopy construction in Tulsa and Oklahoma. UDGOK builds ground-up c-stores, remodels, and fuel station upgrades for major brands and independents.",
  alternates: { canonical: "https://udgok.com/convenience-store-construction-tulsa" },
};

export default function ConvenienceStorePage() {
  return (
    <ServicePage
      label="C-Store Construction"
      title="Convenience Store Construction"
      description="Ground-up convenience stores, fuel canopies, and remodels for major brands and independent operators across Oklahoma and Texas."
      imageSrc="/images/modern-jacksons-convenience-store-exterior-dusk.jpg"
      imageAlt="Convenience store construction Tulsa by UDGOK"
      intro="Convenience store construction is a specialized discipline — from DEP-compliant underground fuel systems to dispenser canopies, food service kitchens, and high-visibility exterior lighting. UDGOK has built and remodeled c-stores for regional chains and independent operators who demand brand-quality results on tight schedules."
      stats={[
        { n: "40+", l: "C-Stores Built" },
        { n: "DEP", l: "Fuel System Compliant" },
        { n: "6 Months", l: "Ground-Up Timeline" },
        { n: "100%", l: "Brand Standards Met" },
      ]}
      features={[
        { icon: "⛽", title: "Fuel Systems", desc: "Underground storage tank installation, dispenser rough-in, vapor recovery, and DEP/EPA compliance documentation." },
        { icon: "🏗️", title: "Fuel Canopies", desc: "Steel canopy design and installation with LED lighting, fascia branding, and code-compliant clearances." },
        { icon: "🍕", title: "Food Service", desc: "Commercial kitchen rough-in, hood systems, grease interceptors, and NSF-compliant prep areas." },
        { icon: "🔆", title: "Exterior Lighting", desc: "High-visibility LED canopy and site lighting designed for safety, brand identity, and energy efficiency." },
        { icon: "♻️", title: "Remodels & Upgrades", desc: "Brand reimage programs, interior refreshes, and fuel equipment upgrades without closing your store." },
        { icon: "📋", title: "Permitting & Compliance", desc: "We manage fire marshal, DEQ, health department, and building permit processes start to finish." },
      ]}
      cta="Build Your C-Store →"
    />
  );
}
