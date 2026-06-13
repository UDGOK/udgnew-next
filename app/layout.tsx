import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";
import SmoothScroll from "@/components/SmoothScroll";
import { AutoBreadcrumbJsonLd } from "@/components/AutoBreadcrumbJsonLd";

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
  alternates: {
    canonical: "https://www.udgok.com",
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
              "@id": "https://www.udgok.com/#organization",
              name: "UDGOK — Upscale Development Group of Oklahoma",
              alternateName: "UDGOK",
              url: "https://www.udgok.com",
              logo: "https://www.udgok.com/logo.png",
              description: "Top-rated construction company in Tulsa, Oklahoma. UDGOK builds commercial, medical, dental, industrial, and retail projects. 100+ projects delivered. Design-build, GMP pricing, AI-powered estimating.",
              founder: {
                "@type": "Person",
                name: "Yasir Jahangir",
                jobTitle: "Founder & President",
                sameAs: [
                  "https://www.linkedin.com/company/upscale-development-group"
                ]
              },
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: [".speakable-content"]
              },
              foundingDate: "2015",
              telephone: "+1-918-520-3823",
              email: "projects@udgok.com",
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
              sameAs: [
                "https://www.linkedin.com/company/upscale-development-group",
                "https://www.facebook.com/udgok",
                "https://www.instagram.com/udgok",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Construction Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Office Design-Build", url: "https://www.udgok.com/medical-office-design-build-tulsa" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Office Construction", url: "https://www.udgok.com/dental-office-construction-tulsa" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Gas Installation", url: "https://www.udgok.com/medical-gas-installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Engineered Metal Buildings", url: "https://www.udgok.com/pre-engineered-metal-buildings-tulsa" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Construction", url: "https://www.udgok.com/warehouse-construction-tulsa" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design-Build Delivery", url: "https://www.udgok.com/design-build" } },
                ],
              },
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
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[#FF4800] focus:text-white focus:rounded-lg focus:text-sm focus:font-bold">Skip to main content</a>
          <div className="grain-overlay" />
          <SmoothScroll>
            <Navigation />
            <AutoBreadcrumbJsonLd />
            <main id="main-content" className="pt-[80px]">{children}</main>
            <Footer />
          </SmoothScroll>
          <ScrollUI />
        </body>
      </html>
    </ClerkProvider>
  );
}
