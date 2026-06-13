import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Community Involvement Tulsa | UDGOK",
  description: "UDGOK's commitment to the Tulsa and Oklahoma community. Local hiring, workforce development, sponsorships, and building healthcare facilities that serve our neighbors.",
  openGraph: {
    title: "Community Involvement | UDGOK Construction",
    description: "We don't just build in Oklahoma communities — we're part of them.",
    url: "https://www.udgok.com/community",
    type: "website",
  },
  alternates: { canonical: "https://www.udgok.com/community" },
};

export default function CommunityPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "In The Community", url: "https://www.udgok.com/community" }
  ];
  const PAGE_FAQS = [
        { q: "Is UDGOK an Oklahoma-owned company?", a: "Yes. UDGOK (Upscale Development Group) is 100% Oklahoma-owned and headquartered in Tulsa at 7739 E 38th Street. We are deeply rooted in the Oklahoma construction community with over 200 projects delivered." },
        { q: "Does UDGOK hire local workers?", a: "Yes. We maintain a local-first hiring policy, prioritizing Tulsa-area subcontractors and suppliers to keep construction dollars in the local economy. Our subcontractor network spans all of northeast Oklahoma." },
        { q: "How does UDGOK support the community?", a: "We sponsor 10+ community organizations annually, partner with OSU-Tulsa and Tulsa Tech for workforce development, and build healthcare facilities that expand medical access in underserved communities across the Tulsa metro." },
      ];
  return (
    <>
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} />
      <ServicePage
      label="Community"
      title="In The Community"
      description="We don't just build in Oklahoma communities — we're part of them. Sponsorships, giving, and workforce investment that go beyond the jobsite."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="UDGOK community involvement in Tulsa Oklahoma"
      tldr="UDGOK is a 100% Oklahoma-owned construction company based in Tulsa. We prioritize local hiring, partner with OSU-Tulsa and Tulsa Tech for workforce development, and sponsor 10+ community organizations annually. The 200+ medical, dental, and commercial projects we've delivered have created hundreds of millions in local economic activity and expanded healthcare access across the Tulsa metro."
      intro="UDGOK was founded in Tulsa and has grown up alongside this community. The medical offices, dental clinics, and commercial centers we build serve our neighbors, employ local trades, and contribute to the economic vitality of every city where we work."
      stats={[
        { n: "Local", l: "First Hiring Policy" },
        { n: "10+", l: "Annual Sponsorships" },
        { n: "Tulsa", l: "Proudly Based" },
        { n: "100%", l: "Oklahoma-Owned" },
      ]}
      features={[
        { icon: "🎓", title: "Workforce Development", desc: "Partnership with OSU-Tulsa and Tulsa Tech to develop the next generation of construction professionals." },
        { icon: "🏗️", title: "Local Hiring", desc: "We prioritize Tulsa-area subcontractors and suppliers, keeping construction dollars in the local economy." },
        { icon: "🤝", title: "Community Sponsorships", desc: "Active sponsor of local events, youth athletics, and community organizations throughout the Tulsa metro." },
        { icon: "🏥", title: "Healthcare Access", desc: "The dental and medical facilities we build expand access to healthcare in underserved Oklahoma communities." },
        { icon: "🌱", title: "Sustainable Building", desc: "Energy-efficient construction practices that reduce long-term operating costs for community institutions." },
        { icon: "💼", title: "Economic Impact", desc: "200+ projects delivered means hundreds of millions in local economic activity and thousands of jobs created." },
      ]}
      faqs={PAGE_FAQS}
      cta="Join Our Community →"
    />
  
    </>
  );
}
