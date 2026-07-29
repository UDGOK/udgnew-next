import type { Metadata } from "next";
import ResourcesUI from "./ResourcesUI";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Construction Resources & Insights | Oklahoma & Texas",
  description: "Explore UDGOK's Knowledge Hub. Detailed guides, calculators, and articles on medical, dental, and commercial construction costs, compliance, and design.",
  alternates: { canonical: "https://www.udgok.com/resources" },
};

export default function ResourcesPage() {
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Resources & Insights", url: "https://www.udgok.com/resources" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <ResourcesUI />
    </>
  );
}
