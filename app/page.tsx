import type { Metadata } from "next";
import HomeUI from "./HomeUI";

export const metadata: Metadata = {
  title: "Medical & Dental Design-Build Contractor | Tulsa & Oklahoma City",
  description:
    "Tulsa's premier medical & dental design-build contractor. 100+ healthcare projects delivered 30–40% faster. Serving Oklahoma & North Texas since 2015.",
  alternates: { canonical: "https://udgok.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": 0,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return <HomeUI />;
}
