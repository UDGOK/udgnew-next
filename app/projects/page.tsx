import type { Metadata } from "next";
import ProjectsUI from "./ProjectsUI";

export const metadata: Metadata = {
  title: "Our Projects | UDGOK",
  description: "Explore UDGOK's portfolio of medical office, dental office, oral surgery, and commercial construction projects across Oklahoma and Texas.",
  alternates: { canonical: "https://udgok.com/projects" },
};

export default function ProjectsPage() {
  return <ProjectsUI />;
}
