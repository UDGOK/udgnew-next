import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UDGOK — AI-Powered Medical & Dental Design-Build",
    template: "%s | UDGOK",
  },
  description:
    "Upscale Development Group specializes in medical office construction, dental office builds, oral surgery centers, and medical gas installation in Tulsa, Oklahoma City, Broken Arrow, Bixby, Jenks, and Dallas.",
  keywords: [
    "medical office construction Tulsa",
    "dental office build out Oklahoma",
    "oral surgery center construction",
    "medical gas installation",
    "healthcare construction Oklahoma City",
    "design-build contractor Tulsa",
  ],
  openGraph: {
    title: "Upscale Development Group | Medical & Dental Construction Specialists",
    description:
      "AI-Powered Design-Build firm specializing in medical, dental, and oral surgery center construction across Oklahoma and Texas.",
    type: "website",
    locale: "en_US",
  },
  icons: { icon: "/favicon.svg" },
  metadataBase: new URL("https://udgok.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="grain-overlay" />
        <SmoothScroll>
          <Navigation />
          <main className="pt-[80px]">{children}</main>
          <Footer />
        </SmoothScroll>
        <ScrollUI />
      </body>
    </html>
  );
}
