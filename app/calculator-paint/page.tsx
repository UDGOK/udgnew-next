import type { Metadata } from "next";
import CalculatorUI from "./CalculatorUI";
import { HowToJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Paint Calculator",
  description: "Estimate the gallons of paint needed for your commercial space.",
  alternates: { canonical: "https://www.udgok.com/calculator-paint" },
};

export default function Page() {
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Paint Calculator", url: "https://www.udgok.com/calculator-paint" },
  ];

  return (
    <>
      <HowToJsonLd
        name="Paint Coverage Calculator"
        description="Calculate gallons of paint needed for a room based on wall area and coverage rate."
        steps={[{"name":"Enter Wall Dimensions","text":"Enter the total wall area or room dimensions."},{"name":"Select Paint Type","text":"Choose the paint type for coverage rate calculation."},{"name":"Get Result","text":"Click Calculate to see gallons of paint needed including a coat factor."}]}
        totalTime="PT2M"
      />
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <CalculatorUI />
    </>
  );
}
