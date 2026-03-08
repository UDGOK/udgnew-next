import type { Metadata } from "next";
import HomeUI from "./HomeUI";

export const metadata: Metadata = {
  title: "UDGOK — AI-Powered Medical & Dental Design-Build",
  description:
    "Upscale Development Group specializes in medical office construction, dental office builds, oral surgery centers, and medical gas installation across Oklahoma and Texas.",
  alternates: { canonical: "https://udgok.com" },
};

export default function HomePage() {
  return <HomeUI />;
}
