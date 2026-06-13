import type { Metadata } from "next";
import CalculatorUI from "./CalculatorUI";
import { HowToJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Flooring Calculator | UDGOK",
  description: "Estimate the total square footage and boxes needed for commercial flooring.",
  alternates: { canonical: "https://www.udgok.com/calculator-flooring" },
};

export default function Page() {
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Commercial Flooring Calculator", url: "https://www.udgok.com/calculator-flooring" },
  ];

  return (
    <>
      <HowToJsonLd
        name="Flooring Material Calculator"
        description="Estimate square footage of flooring material needed for rooms including waste."
        steps={[{"name":"Enter Room Dimensions","text":"Enter the room length and width in feet."},{"name":"Get Result","text":"Click Calculate for total square footage with 10% waste factor."}]}
        totalTime="PT2M"
      />
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <CalculatorUI />
    </>
  );
}
