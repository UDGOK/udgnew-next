import type { Metadata } from "next";
import CalculatorUI from "./CalculatorUI";
import { HowToJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Brick Calculator",
  description: "Estimate the number of bricks and mortar required for a wall.",
  alternates: { canonical: "https://www.udgok.com/calculator-brick" },
};

export default function Page() {
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Brick Calculator", url: "https://www.udgok.com/calculator-brick" },
  ];

  return (
    <>
      <HowToJsonLd
        name="Brick Quantity Calculator"
        description="Estimate the number of bricks needed for walls and structures based on dimensions."
        steps={[{"name":"Enter Wall Dimensions","text":"Enter the wall length and height in feet."},{"name":"Select Brick Size","text":"Choose standard or engineering brick size."},{"name":"Get Result","text":"Click Calculate to see the total bricks needed including waste factor."}]}
        totalTime="PT2M"
      />
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <CalculatorUI />
    </>
  );
}
