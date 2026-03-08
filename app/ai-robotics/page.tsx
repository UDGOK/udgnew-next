import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "AI & Robotics in Construction | UDGOK",
  description: "UDGOK leverages AI, robotics, and advanced technology to deliver faster, smarter, and more precise construction for medical and commercial projects across Oklahoma and Texas.",
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
      intro="The construction industry is being transformed by artificial intelligence, machine learning, and robotic systems. UDGOK is at the forefront of this transformation — deploying AI-powered estimating, robotic total stations for precision layout, drone photogrammetry for progress tracking, and generative design tools that optimize space and cost simultaneously. Our clients benefit from technology that was unimaginable a decade ago."
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
      cta="Explore Our Technology →"
    />
  );
}
