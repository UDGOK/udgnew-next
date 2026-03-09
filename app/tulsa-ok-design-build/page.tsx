import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Tulsa OK | UDGOK",
  description: "Tulsa's top design-build contractor. UDGOK delivers integrated design-build for medical, dental, commercial, and retail projects across Tulsa, Oklahoma.",
  keywords: [
    "design-build contractor Tulsa OK",
    "general contractor Tulsa Oklahoma",
    "medical office construction Tulsa",
    "dental office construction Tulsa OK",
    "commercial construction Tulsa",
    "healthcare construction Tulsa Oklahoma",
    "tenant improvement Tulsa OK",
    "construction company Tulsa",
    "medical clinic build-out Tulsa",
    "dental clinic construction Tulsa",
    "office renovation Tulsa OK",
    "convenience store construction Tulsa",
    "shopping center construction Tulsa",
    "ground-up construction Tulsa Oklahoma",
  ],
  openGraph: {
    title: "Design-Build Contractor Tulsa OK | UDGOK",
    description: "Tulsa's integrated design-build contractor for medical, dental, and commercial construction. 100+ projects delivered.",
    url: "https://udgok.com/tulsa-ok-design-build",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/tulsa-ok-design-build" },
};

export default function TulsaDesignBuildPage() {
  return (
    <ServicePage
      label="Tulsa Design-Build"
      title="Design-Build in Tulsa, Oklahoma"
      description="Tulsa's integrated design-build contractor — one team, one contract, and a track record of 100+ delivered projects."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Design-build contractor Tulsa Oklahoma by UDGOK"
      tldr="UDGOK is Tulsa, Oklahoma's most experienced design-build contractor with over 100 delivered projects across medical, dental, commercial, and retail construction. Based at 7739 E 38th Street in Tulsa, we serve the entire metro including downtown, midtown, south Tulsa, and the BA Expressway corridor. Medical office construction in Tulsa costs $150–$350/sq ft; dental offices run $140–$280/sq ft."
      intro="UDGOK is Tulsa's most experienced design-build contractor. We've delivered over 100 projects across medical, dental, commercial, and retail sectors by keeping design and construction under one roof. Tulsa business owners and developers choose us because we're local — we know the permit offices, the subcontractors, and the neighborhoods where we build."
      stats={[
        { n: "100+", l: "Tulsa Projects" },
        { n: "20%", l: "Faster Than Design-Bid-Build" },
        { n: "Local", l: "Team & Subcontractors" },
        { n: "1", l: "Point of Contact" },
      ]}
      features={[
        { icon: "🏗️", title: "Integrated Design + Build", desc: "Architecture, engineering, and construction coordinated by one team to eliminate gaps and delays." },
        { icon: "💰", title: "Budget Certainty", desc: "Real-time cost control throughout design keeps your project within budget before and after GMP." },
        { icon: "🏥", title: "Healthcare Expertise", desc: "Tulsa's leader in medical and dental design-build with 80+ healthcare facilities delivered." },
        { icon: "🏬", title: "Commercial Projects", desc: "Retail, office, restaurant, and mixed-use design-build across Tulsa and surrounding suburbs." },
        { icon: "⚡", title: "Fast-Track Delivery", desc: "Phased permitting and overlapping design/construction phases cut months off your schedule." },
        { icon: "📋", title: "Local Permit Knowledge", desc: "Deep relationships with City of Tulsa, Tulsa County, and surrounding municipality plan review offices." },
      ]}
      faqs={[
        { q: "How much does commercial construction cost in Tulsa, Oklahoma?", a: "Commercial construction in Tulsa ranges from $120–$350 per square foot depending on project type. General commercial office space runs $120–$180/sq ft, medical offices $150–$350/sq ft, dental offices $140–$280/sq ft, and retail build-outs $80–$150/sq ft." },
        { q: "How long does it take to get a building permit in Tulsa?", a: "City of Tulsa commercial building permits typically take 2–4 weeks for plan review. Simple tenant improvements can be faster (10–15 days). UDGOK has established relationships with Tulsa Development Services that help streamline the process." },
        { q: "What areas of Tulsa does UDGOK serve?", a: "We build throughout Tulsa including downtown, midtown, south Tulsa, east Tulsa, and the Brookside/Cherry Street areas. Our office is located at 7739 E 38th Street, Tulsa, OK 74145. We also serve all surrounding suburbs including Broken Arrow, Bixby, Jenks, Owasso, and Sand Springs." },
        { q: "Does UDGOK handle both design and construction?", a: "Yes. UDGOK is a full-service design-build contractor. We manage architectural design, engineering, permitting, and construction under one contract. This saves 15–20% on cost and 20% on schedule versus traditional design-bid-build." },
        { q: "Is UDGOK a licensed Oklahoma general contractor?", a: "Yes. UDGOK (Upscale Development Group) is a licensed Oklahoma General Contractor. Our team includes PMP-certified project managers, OSHA 30 trained superintendents, and ASSE 6010 certified medical gas installers." },
      ]}
      cta="Start in Tulsa →"
    />
  );
}
