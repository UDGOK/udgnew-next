import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import ToolsUI from "./ToolsUI";

export const metadata: Metadata = {
  title: "Construction Calculators & Tools | UDGOK",
  description: "Free construction cost calculators from UDGOK. Estimate concrete, drywall, brick, flooring, paint, and roofing materials for your project in Oklahoma.",
  alternates: { canonical: "https://www.udgok.com/tools" },
};

export default function ToolsPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Construction Calculators & Tools", url: "https://www.udgok.com/tools" }
  ];
  return (
    <>
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <ToolsUI />
    </>
  );
}
