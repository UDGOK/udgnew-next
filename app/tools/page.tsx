import type { Metadata } from "next";
import ToolsUI from "./ToolsUI";

export const metadata: Metadata = {
  title: "Construction Calculators & Tools | UDGOK",
  description: "Free construction cost calculators from UDGOK. Estimate concrete, drywall, brick, flooring, paint, and roofing materials for your project in Oklahoma.",
  alternates: { canonical: "https://udgok.com/tools" },
};

export default function ToolsPage() {
  return <ToolsUI />;
}
