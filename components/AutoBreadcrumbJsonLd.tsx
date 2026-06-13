"use client";
import { usePathname } from "next/navigation";

/* ─── BreadcrumbList ─── */
function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Auto-breadcrumb from pathname ─── */
export function AutoBreadcrumbJsonLd() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const base = "https://www.udgok.com";
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", url: base }];

  let path = "";
  for (const seg of segments) {
    path += `/${seg}`;
    const label = seg
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace(/Ok\b/g, "OK")
      .replace(/Tulsa/g, "Tulsa")
      .replace(/Udgok/g, "UDGOK");
    items.push({ name: label, url: `${base}${path}` });
  }

  return <BreadcrumbJsonLd items={items} />;
}
