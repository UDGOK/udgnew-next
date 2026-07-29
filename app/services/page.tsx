import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import ServicesUI from "./ServicesUI";

export const metadata: Metadata = {
  title: "Construction Services | Oklahoma & North Texas",
  description: "Full-service medical, dental, and commercial construction across Oklahoma and Texas. UDGOK delivers design-build, healthcare construction.",
  alternates: { canonical: "https://www.udgok.com/services" },
};

export default function ServicesPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Construction Services", url: "https://www.udgok.com/services" }
  ];
  return (
    <>
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <ServicesUI />
    </>
  );
}
