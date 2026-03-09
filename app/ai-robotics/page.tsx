import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "AI & Robotics in Construction | UDGOK",
  description: "UDGOK leverages AI, robotics, and advanced technology to deliver faster, smarter, and more precise construction for medical and commercial projects across Oklahoma and Texas.",
  keywords: [
    "AI construction Oklahoma",
    "robotics construction Tulsa",
    "robotic layout construction",
    "AI estimating construction",
    "drone photogrammetry construction",
    "generative design construction",
    "construction technology Oklahoma",
    "BIM digital twin construction",
  ],
  openGraph: {
    title: "AI & Robotics in Construction | UDGOK",
    description: "AI-powered estimating, robotic layout, drone photogrammetry, and generative design for construction projects.",
    url: "https://udgok.com/ai-robotics",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/ai-robotics" },
};

export default function AIRoboticsPage() {
  return (
    <ServicePage
      label="Innovation"
      title="AI & Robotics"
      description="UDGOK is deploying AI and robotics to deliver construction that is faster, more precise, and more transparent than traditional methods."
      imageSrc="/images/ai_commercial_retail_plaza.png"
      imageAlt="AI and robotics in construction by UDGOK"
      tldr="UDGOK deploys AI-powered estimating trained on 100+ completed projects, robotic total stations for sub-millimeter layout accuracy, drone photogrammetry for weekly progress mapping, and generative design tools for optimizing clinical floor plans. These technologies reduce estimating time by 40%, eliminate layout errors, and produce better project outcomes for medical and commercial construction clients."
      intro="The construction industry is being transformed by artificial intelligence, machine learning, and robotic systems. UDGOK is at the forefront — deploying AI-powered estimating, robotic total stations for precision layout, drone photogrammetry for progress tracking, and generative design tools that optimize space and cost simultaneously."
      stats={[
        { n: "AI", l: "Powered Estimating" },
        { n: "3D", l: "Robotic Layout" },
        { n: "Drone", l: "Progress Mapping" },
        { n: "BIM", l: "Digital Twin" },
      ]}
      features={[
        { icon: "🤖", title: "Robotic Layout", desc: "Robotic total stations place thousands of layout points per day with sub-millimeter accuracy — eliminating human error on complex medical facility layouts." },
        { icon: "🧠", title: "AI Estimating", desc: "Machine learning models trained on 100+ completed projects produce faster, more accurate cost estimates at every phase of design." },
        { icon: "🚁", title: "Drone Photogrammetry", desc: "Weekly drone flights produce georeferenced progress maps, cut-fill calculations, and as-built point clouds for BIM comparison." },
        { icon: "🏗️", title: "Generative Design", desc: "AI-driven space planning tools that evaluate thousands of layout configurations to find the optimal floor plan for your clinical workflow and budget." },
        { icon: "📱", title: "Field Intelligence", desc: "Mobile-first field management with real-time RFI tracking, photo documentation, and punch list management connected to the BIM model." },
        { icon: "📊", title: "Predictive Analytics", desc: "Schedule risk analysis and cost forecasting powered by historical project data — catching problems before they become change orders." },
      ]}
      faqs={[
        { q: "How does UDGOK use AI in construction?", a: "We use AI in three key areas: cost estimating (machine learning models trained on our project history), generative design (AI algorithms that optimize floor plans for workflow and cost), and predictive analytics (risk forecasting that identifies schedule and budget threats early)." },
        { q: "What is robotic layout in construction?", a: "Robotic layout uses robotic total stations to automatically place thousands of control points on a construction floor with sub-millimeter accuracy. This eliminates manual tape-and-chalk layout errors that are common in complex medical and dental facilities." },
        { q: "How do drones help in construction?", a: "UDGOK flies drones weekly on active projects to produce georeferenced aerial maps, volumetric cut-fill calculations for earthwork, and 3D point clouds that compare as-built conditions to BIM models. This provides real-time progress visibility for owners and catches deviations early." },
        { q: "Does technology increase construction costs?", a: "No. The technology investment is absorbed in our overhead and actually reduces project costs by preventing rework, catching design errors earlier, and producing more accurate estimates. Clients receive better outcomes at the same or lower cost." },
      ]}
      cta="Explore Our Technology →"
    />
  );
}
