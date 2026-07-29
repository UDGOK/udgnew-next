import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import TransparencyUI from "./TransparencyUI";

export const metadata: Metadata = {
    title: "AI Transparency | Responsible AI Use in Construction",
    description: "How UDGOK uses artificial intelligence in construction — full disclosure of AI tools, data protection, human oversight.",
    openGraph: {
      images: [{ url: "https://www.udgok.com/images/og-default.png", width: 1200, height: 630, alt: "UDGOK — Medical & Dental Design-Build Construction in Tulsa, Oklahoma" }],
        title: "AI Transparency | Responsible AI in Construction | UDGOK",
        description: "Full disclosure of how UDGOK uses AI in construction — tools, data protection, human oversight, and accountability.",
        url: "https://www.udgok.com/transparency",
        type: "website",
    },
    alternates: { canonical: "https://www.udgok.com/transparency" },
};

export default function TransparencyPage() {
    
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "AI Transparency", url: "https://www.udgok.com/transparency" }
  ];
  return (
    <>
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <TransparencyUI />
    </>
  );
}
