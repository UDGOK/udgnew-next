import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Flex Space Construction Tulsa OK | Light Industrial & Office/Warehouse | UDGOK",
    description: "Flex space and light industrial construction in Tulsa, Oklahoma. Hybrid office/warehouse buildings with storefront entries and rear dock loading. Multi-tenant or single-user. $40–$90/sf.",
    keywords: [
        "flex space construction tulsa", "light industrial construction tulsa ok",
        "flex space builder oklahoma", "office warehouse construction tulsa",
        "light industrial building tulsa", "flex space cost per square foot",
        "multi-tenant industrial tulsa", "flex space contractor oklahoma",
        "office warehouse combo tulsa ok", "light industrial contractor tulsa",
    ],
    openGraph: { title: "Flex Space Construction Tulsa OK | UDGOK", description: "Hybrid office/warehouse buildings — multi-tenant or single-user. $40–$90/sf.", url: "https://udgok.com/flex-space-construction-tulsa" },
    alternates: { canonical: "https://udgok.com/flex-space-construction-tulsa" },
};

export default function FlexSpaceConstructionTulsaPage() {
    return (
        <>
            <ServiceJsonLd name="Flex Space Construction Tulsa" description="Flex space and light industrial construction in Tulsa — hybrid office/warehouse buildings." url="https://udgok.com/flex-space-construction-tulsa" />
            <ServicePage
                label="Flex Space"
                title="Flex Space & Light Industrial Construction in Tulsa"
                description="Hybrid office/warehouse buildings with storefront entries, rear dock or grade loading, and flexible bay configurations."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Flex space construction Tulsa Oklahoma — UDGOK"
                tldr="UDGOK builds flex space and light industrial buildings across the Tulsa metro. Flex space — hybrid office/warehouse buildings with professional storefront office entries and rear dock or grade-level loading — is Tulsa's fastest-growing commercial building type. Multi-tenant flex facilities cost $40–$70/sf. Single-user flex buildings with higher-end office finishes cost $60–$90/sf. Typical bay sizes are 2,000–5,000 SF with 14–20' clear warehouse heights and 200–400 SF of front office per bay."
                intro="Flex space is the Swiss Army knife of commercial real estate — perfect for distribution, e-commerce fulfillment, service businesses, showrooms, and companies that need both office and warehouse under one roof. UDGOK designs flex buildings with future adaptability in mind: bay walls can be removed to combine bays, office ratios can be adjusted, and dock doors can be added as needs change."
                stats={[
                    { n: "$40–$90", l: "Cost Per SF" },
                    { n: "2K–5K", l: "Bay Sizes (SF)" },
                    { n: "20'", l: "Clear Heights" },
                    { n: "Multi-Tenant", l: "Or Single-User" },
                ]}
                features={[
                    { icon: "🏢", title: "Professional Storefronts", desc: "Aluminum storefront office entries with architectural finishes — your flex space looks like an office from the street, not an industrial building." },
                    { icon: "🚛", title: "Rear Loading Options", desc: "Dock-high doors, grade-level overhead doors, or drive-in doors. Configured based on bay size and tenant operations." },
                    { icon: "🔀", title: "Flexible Bay Configurations", desc: "Demising walls designed for future removal. Combine or split bays as tenant needs change without structural modification." },
                    { icon: "🌡️", title: "Climate-Controlled Warehouse", desc: "HVAC systems for temperature-controlled warehouse areas — essential for e-commerce, pharmaceuticals, and temperature-sensitive products." },
                    { icon: "🏗️", title: "Tilt-Up & PEMB Options", desc: "Concrete tilt-up for a more permanent, premium appearance. PEMB for faster delivery and lower cost. Both options available." },
                    { icon: "📐", title: "Speculative & Build-to-Suit", desc: "UDGOK builds both speculative multi-tenant flex facilities for investors and single-user build-to-suit flex buildings for owner-occupants." },
                ]}
                faqs={[
                    { q: "How much does flex space cost to build in Tulsa?", a: "Multi-tenant flex space costs $40–$70/sf in Tulsa. Single-user flex buildings with higher-end office finishes cost $60–$90/sf. A 10-bay, 30,000 SF multi-tenant flex facility costs $1.2M–$2.1M." },
                    { q: "What is a typical bay size for flex space?", a: "Flex bays typically range from 2,000 to 5,000 SF with 200–400 SF of front office and the remainder as warehouse. Clear warehouse heights of 14–20'. Standard bay widths are 25–30'." },
                    { q: "What businesses use flex space?", a: "Flex space tenants include e-commerce fulfillment, distribution, plumbing/HVAC/electrical contractors, automotive shops, showrooms, light manufacturing, creative studios, and service businesses that need both office and warehouse." },
                    { q: "Can bays be combined in a flex building?", a: "Yes. UDGOK designs demising walls as non-bearing partitions that can be removed to combine adjacent bays without structural modification. This provides maximum flexibility for tenant changes." },
                ]}
                cta="Start Your Flex Space Project →"
            />
        </>
    );
}
