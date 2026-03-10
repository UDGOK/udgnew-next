import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
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
    "construction companies in tulsa",
    "construction companies in tulsa ok",
    "construction company tulsa",
    "tulsa construction company",
    "commercial builders tulsa",
    "general contractor tulsa ok",
    "dental clinic construction Broken Arrow",
    "medical office Bixby OK",
    "construction company Jenks OK",
    "healthcare design-build Dallas",
    "preconstruction services Oklahoma",
    "virtual design construction",
    "eye clinic construction Tulsa",
    "convenience store construction",
    "construction company Sapulpa OK",
    "general contractor Haskell OK",
    "dental construction Owasso OK",
    "industrial construction tulsa",
    "shopping center construction Tulsa OK",
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
  other: {
    "theme-color": "#0B061B",
    "color-scheme": "dark",
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <meta name="theme-color" content="#0B061B" media="(prefers-color-scheme: dark)" />
          <meta name="theme-color" content="#FF4800" media="(prefers-color-scheme: light)" />
          {/* Organization + LocalBusiness JSON-LD — appears on every page */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "GeneralContractor"],
              "@id": "https://udgok.com/#organization",
              name: "UDGOK — Upscale Development Group of Oklahoma",
              alternateName: "UDGOK",
              url: "https://udgok.com",
              logo: "https://udgok.com/logo.png",
              description: "Top-rated construction company in Tulsa, Oklahoma. UDGOK builds commercial, medical, dental, industrial, and retail projects. 100+ projects delivered. Design-build, GMP pricing, AI-powered estimating.",
              foundingDate: "2006",
              telephone: "+1-918-520-3823",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7739 E 38th St",
                addressLocality: "Tulsa",
                addressRegion: "OK",
                postalCode: "74145",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.0998,
                longitude: -95.8830,
              },
              areaServed: [
                { "@type": "City", name: "Tulsa" },
                { "@type": "City", name: "Broken Arrow" },
                { "@type": "City", name: "Bixby" },
                { "@type": "City", name: "Jenks" },
                { "@type": "City", name: "Owasso" },
                { "@type": "City", name: "Sand Springs" },
                { "@type": "City", name: "Sapulpa" },
                { "@type": "City", name: "Oklahoma City" },
                { "@type": "City", name: "Dallas" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
              },
              priceRange: "$$$",
              knowsAbout: [
                "Commercial Construction", "Medical Office Construction", "Dental Office Construction",
                "Industrial Construction", "Pre-Engineered Metal Buildings", "Design-Build Construction",
                "Tenant Improvements", "Construction Management", "Retail Construction",
              ],
            })
          }} />
        </head>
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
    </ClerkProvider>
  );
}
