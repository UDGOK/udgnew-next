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
    default: "UDGOK — AI-Powered Medical & Dental Design-Build | Tulsa, OK",
    template: "%s | UDGOK",
  },
  description:
    "Upscale Development Group specializes in medical office construction, dental office builds, oral surgery centers, and medical gas installation in Tulsa, Oklahoma City, Broken Arrow, Bixby, Jenks, and Dallas. Licensed Oklahoma general contractor.",
  keywords: [
    "medical office construction Tulsa",
    "dental office build out Oklahoma",
    "oral surgery center construction",
    "medical gas installation",
    "healthcare construction Oklahoma City",
    "design-build contractor Tulsa",
    "commercial construction Oklahoma",
    "tenant improvement Tulsa",
    "dental clinic construction Broken Arrow",
    "medical office Bixby OK",
    "construction company Jenks OK",
    "healthcare design-build Dallas",
    "preconstruction services Oklahoma",
    "virtual design construction",
    "eye clinic construction Tulsa",
    "convenience store construction",
  ],
  openGraph: {
    title: "Upscale Development Group | Medical & Dental Construction Specialists",
    description:
      "AI-Powered Design-Build firm specializing in medical, dental, and oral surgery center construction across Oklahoma and Texas.",
    type: "website",
    locale: "en_US",
    siteName: "UDGOK — Upscale Development Group",
    url: "https://udgok.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "UDGOK — AI-Powered Medical & Dental Design-Build",
    description:
      "Tulsa's trusted Design-Build partner for medical offices, dental clinics, and commercial construction. Serving Oklahoma and North Texas.",
  },
  alternates: {
    canonical: "https://udgok.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.svg" },
  metadataBase: new URL("https://udgok.com"),
  category: "construction",
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
