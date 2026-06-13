import type { Metadata } from "next";
import CalculatorUI from "./CalculatorUI";
import { HowToJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Roofing Calculator | UDGOK",
  description: "Estimate roofing squares and bundles based on footprint area and roof pitch.",
  alternates: { canonical: "https://www.udgok.com/calculator-roofing" },
};

export default function Page() {
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Roofing Calculator", url: "https://www.udgok.com/calculator-roofing" },
  ];

  return (
    <>
      <HowToJsonLd
        name="Roofing Material Calculator"
        description="Calculate squares of roofing material needed based on roof dimensions and pitch."
        steps={[{"name":"Enter Roof Dimensions","text":"Enter the roof length and width in feet."},{"name":"Select Roof Pitch","text":"Choose the roof pitch factor for accurate square footage."},{"name":"Get Result","text":"Click Calculate to see roofing squares needed with waste factor."}]}
        totalTime="PT2M"
      />
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <CalculatorUI />
    </>
  );
}
