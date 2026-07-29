import type { Metadata } from "next";
import CalculatorUI from "./CalculatorUI";
import { HowToJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Concrete Calculator",
  description: "Estimate the cubic yards of concrete needed for slabs, footings, and foundations.",
  alternates: { canonical: "https://www.udgok.com/calculator-concrete" },
};

export default function Page() {
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Concrete Calculator", url: "https://www.udgok.com/calculator-concrete" },
  ];

  return (
    <>
      <HowToJsonLd
        name="Concrete Volume Calculator"
        description="Calculate cubic yards of concrete needed for slabs, footings, and foundations with automatic 5% waste factor."
        steps={[{"name":"Enter Length","text":"Enter the length of the area in feet."},{"name":"Enter Width","text":"Enter the width of the area in feet."},{"name":"Select Thickness","text":"Choose the slab thickness in inches (4, 5, 6, 8, or 12 inches)."},{"name":"Get Result","text":"Click Calculate to get the estimated cubic yards including 5% waste factor."}]}
        totalTime="PT2M"
      />
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <CalculatorUI />
    </>
  );
}
