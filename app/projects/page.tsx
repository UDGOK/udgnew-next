import type { Metadata } from "next";
import ProjectsUI from "./ProjectsUI";
import { PROJECTS } from "./ProjectsData";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore UDGOK's portfolio of medical office, dental office, oral surgery, and commercial construction projects across Oklahoma and Texas.",
  alternates: { canonical: "https://www.udgok.com/projects" },
};

export default function ProjectsPage() {
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Our Projects", url: "https://www.udgok.com/projects" },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "CreativeWork",
        "name": p.title,
        "description": p.summary,
        "url": "https://www.udgok.com/projects",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <ProjectsUI />
    </>
  );
}
