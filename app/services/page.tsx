import type { Metadata } from "next";
import ServicesUI from "./ServicesUI";

export const metadata: Metadata = {
  title: "Construction Services | UDGOK Oklahoma & Texas",
  description: "Full-service medical, dental, and commercial construction across Oklahoma and Texas. UDGOK delivers design-build, healthcare construction, tenant improvements, and specialty services.",
  alternates: { canonical: "https://udgok.com/services" },
};

export default function ServicesPage() {
  return <ServicesUI />;
}
