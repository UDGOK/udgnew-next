import type { Metadata } from "next";
import CalculatorUI from "./CalculatorUI";
import { HowToJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Drywall Calculator | UDGOK",
  description: "Estimate panels, screws, and joint compound needed for commercial framing.",
  alternates: { canonical: "https://www.udgok.com/calculator-drywall" },
};

export default function Page() {
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Drywall Calculator", url: "https://www.udgok.com/calculator-drywall" },
  ];

  return (
    <>
      <HowToJsonLd
        name="Drywall Sheet Calculator"
        description="Estimate the number of 4x8 drywall sheets needed for walls based on room dimensions."
        steps={[{"name":"Enter Room Length","text":"Enter the total room length in feet."},{"name":"Enter Room Width","text":"Enter the room width in feet."},{"name":"Enter Wall Height","text":"Enter the wall height in feet (typically 8 or 9 feet)."},{"name":"Get Result","text":"Click Calculate to get the number of 4x8 drywall sheets needed."}]}
        totalTime="PT2M"
      />
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <CalculatorUI />
    </>
  );
}
