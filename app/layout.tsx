import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";
import SmoothScroll from "@/components/SmoothScroll";
import { organizationGraph } from "@/lib/schema";

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
  openGraph: {
    title: "Upscale Development Group | Medical & Dental Construction Specialists",
    description:
      "AI-Powered Design-Build firm specializing in medical, dental, and oral surgery center construction across Oklahoma and Texas.",
    type: "website",
    locale: "en_US",
    siteName: "UDGOK — Upscale Development Group",
    url: "https://www.udgok.com",
    images: [
      {
        url: "https://www.udgok.com/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "UDGOK — Medical & Dental Design-Build Construction in Tulsa, Oklahoma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UDGOK — AI-Powered Medical & Dental Design-Build",
    description:
      "Tulsa's trusted Design-Build partner for medical offices, dental clinics, and commercial construction. Serving Oklahoma and North Texas.",
    images: ["https://www.udgok.com/images/og-default.png"],
  },
  // NOTE: no `alternates.canonical` here, deliberately.
  //
  // A canonical declared in the root layout is INHERITED by every child page
  // that does not declare its own — which is why /portal and /sitemap-page both
  // emitted <link rel="canonical" href="https://www.udgok.com">, telling Google
  // they were duplicates of the homepage. Canonicals are per-page by
  // definition; app/page.tsx sets the homepage's own.
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
  metadataBase: new URL("https://www.udgok.com"),
  category: "construction",
  other: {
    "theme-color": "#0B061B",
    "color-scheme": "dark",
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Only mount ClerkProvider when a publishable key is configured. In production
  // Clerk throws "Missing publishableKey" without it, which would crash every
  // page since this provider wraps the whole site. The /portal routes still
  // require the key to be set in the environment to function.
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const tree = (
    <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <meta name="theme-color" content="#0B061B" media="(prefers-color-scheme: dark)" />
          <meta name="theme-color" content="#FF4800" media="(prefers-color-scheme: light)" />
          {/*
            Site identity as a single JSON-LD @graph, emitted on every page.
            All facts live in lib/schema.ts — see the header comment there for
            why (they used to be restated in three files and disagreed).
          */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationGraph()) }}
          />
        </head>
        <body className={`${inter.variable} font-sans antialiased`}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[#FF4800] focus:text-white focus:rounded-lg focus:text-sm focus:font-bold">Skip to main content</a>
          <div className="grain-overlay" />
          <SmoothScroll>
            <Navigation />
            <main id="main-content" className="pt-[80px]">{children}</main>
            <Footer />
          </SmoothScroll>
          <ScrollUI />
        </body>
      </html>
  );

  return hasClerk ? <ClerkProvider>{tree}</ClerkProvider> : tree;
}
