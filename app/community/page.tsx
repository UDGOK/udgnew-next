import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Community Involvement | UDGOK",
  description: "UDGOK's commitment to the Tulsa and Oklahoma community. Sponsorships, charitable giving, workforce development, and building the places that serve our neighbors.",
  alternates: { canonical: "https://udgok.com/community" },
};

export default function CommunityPage() {
  return (
    <ServicePage
      label="Community"
      title="In The Community"
      description="We don't just build in Oklahoma communities — we're part of them. Sponsorships, giving, and workforce investment that go beyond the jobsite."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="UDGOK community involvement in Tulsa Oklahoma"
      intro="UDGOK was founded in Tulsa and has grown up alongside this community. The medical offices, dental clinics, and commercial centers we build serve our neighbors, employ local trades, and contribute to the economic vitality of every city where we work. We take that responsibility seriously — both on and off the jobsite."
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
      cta="Join Our Community →"
    />
  );
}
