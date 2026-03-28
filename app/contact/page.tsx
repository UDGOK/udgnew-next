import type { Metadata } from "next";
import ContactUI from "./ContactUI";

export const metadata: Metadata = {
  title: "Contact Us | Medical Construction Tulsa OK",
  description: "Contact UDGOK for medical office, dental clinic, and commercial construction in Tulsa, Oklahoma City, and Dallas. Call (918) 520-3823 or submit a project inquiry online.",
  keywords: [
    "contact UDGOK",
    "construction company Tulsa contact",
    "medical construction quote Tulsa",
    "dental construction estimate Oklahoma",
  ],
  openGraph: {
    title: "Contact Us | Medical Construction Tulsa OK | UDGOK",
    description: "Call (918) 520-3823 or submit a project inquiry. UDGOK serves Oklahoma and North Texas.",
    url: "https://udgok.com/contact",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/contact" },
};

export default function ContactPage() {
  return <ContactUI />;
}
