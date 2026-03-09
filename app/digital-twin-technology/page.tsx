import type { Metadata } from "next";
import DigitalTwinUI from "./DigitalTwinUI";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Digital Twin Technology in Construction: 2026 Guide | UDGOK",
  description:
    "A complete guide to how Digital Twin Technology, BIM, IoT, and AI are transforming construction, healthcare, energy, and smart cities in Texas, Oklahoma, and California.",
  alternates: { canonical: "https://udgok.com/digital-twin-technology" },
  openGraph: {
    title: "The 2026 Guide to Digital Twin Technology | UDGOK",
    description: "How AI, IoT, and 3D virtual replicas are transforming commercial construction, energy, and smart cities.",
    type: "article",
  },
};

export default function DigitalTwinPage() {
  return (
    <>
      <ArticleJsonLd
        title="The 2026 Guide to Digital Twin Technology"
        description="How AI, IoT, and 3D virtual replicas are transforming commercial construction, energy, and smart cities across Texas, Oklahoma, and California."
        url="https://udgok.com/digital-twin-technology"
        datePublished="2026-03-01"
        dateModified="2026-03-08"
        image="https://udgok.com/images/digital-twin-guide-2026.png"
      />
      <DigitalTwinUI />
    </>
  );
}
