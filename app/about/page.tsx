import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import AboutUI from "./AboutUI";

export const metadata: Metadata = {
  title: "About UDGOK | Tulsa's Premier Design-Build Contractor",
  description: "Learn about Upscale Development Group — Tulsa's premier medical and dental office construction firm serving Oklahoma and North Texas since 2015.",
  alternates: { canonical: "https://www.udgok.com/about" },
};

export default function AboutPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "About UDGOK", url: "https://www.udgok.com/about" }
  ];
  return (
    <>
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <AboutUI />
    </>
  );
}
