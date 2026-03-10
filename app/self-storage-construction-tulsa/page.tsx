import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Self-Storage Facility Construction Tulsa OK | Climate-Controlled & Drive-Up | UDGOK",
    description: "Self-storage facility construction in Tulsa, Oklahoma. Drive-up units, climate-controlled multi-story, boat/RV storage. Roll-up doors, hallway systems, security infrastructure. $35–$85/sf.",
    keywords: [
        "self storage construction tulsa", "self storage builder oklahoma",
        "storage facility construction tulsa ok", "climate controlled storage construction",
        "self storage building cost", "self storage contractor tulsa",
        "mini storage construction oklahoma", "storage facility cost per square foot",
        "self storage development tulsa", "build a storage facility oklahoma",
    ],
    openGraph: { title: "Self-Storage Construction Tulsa OK | UDGOK", description: "Drive-up and climate-controlled self-storage facilities. $35–$85/sf.", url: "https://udgok.com/self-storage-construction-tulsa" },
    alternates: { canonical: "https://udgok.com/self-storage-construction-tulsa" },
};

export default function SelfStorageConstructionTulsaPage() {
    return (
        <>
            <ServiceJsonLd name="Self-Storage Construction Tulsa" description="Self-storage facility construction in Tulsa — drive-up units, climate-controlled, boat/RV storage." url="https://udgok.com/self-storage-construction-tulsa" />
            <ServicePage
                label="Self-Storage"
                title="Self-Storage Facility Construction in Tulsa, Oklahoma"
                description="Drive-up units, climate-controlled multi-story, and boat/RV storage with roll-up doors, hallway systems, and security."
                imageSrc="/images/ai_commercial_retail_plaza.png"
                imageAlt="Self-storage construction Tulsa Oklahoma — UDGOK"
                tldr="UDGOK builds self-storage facilities across the Tulsa metro for investors and operators. Single-story drive-up storage costs $35–$55/sf. Multi-story climate-controlled storage costs $55–$85/sf. A typical 50,000 rentable SF self-storage facility costs $2.5M–$4.25M depending on configuration. UDGOK handles site development, building construction, roll-up door installation, hallway systems, climate control, security infrastructure, and management office build-out under one design-build contract."
                intro="Self-storage is one of the strongest asset classes in Oklahoma commercial real estate — and one of the most construction-efficient building types. A well-designed facility maximizes rentable square footage per dollar of construction cost. UDGOK works with storage operators and investors to optimize unit mix, building layout, and site utilization for maximum revenue per square foot."
                stats={[
                    { n: "$35–$85", l: "Cost Per SF" },
                    { n: "50K+", l: "SF Facilities" },
                    { n: "Climate", l: "Controlled Options" },
                    { n: "Turnkey", l: "Full Scope" },
                ]}
                features={[
                    { icon: "🚗", title: "Drive-Up Storage", desc: "Single-story buildings with individual roll-up doors accessed directly from driveways. Lowest cost per SF at $35–$55. Ideal for furniture, seasonal items, and business overflow." },
                    { icon: "🌡️", title: "Climate-Controlled Storage", desc: "Multi-story buildings with interior hallway access, HVAC climate control (55–85°F year-round), and humidity management. Premium rental rates justify higher construction cost." },
                    { icon: "🚤", title: "Boat & RV Storage", desc: "Covered and enclosed boat/RV storage with tall overhead doors (12–14' clear). Concrete approach ramp, turning radius, and pull-through configurations." },
                    { icon: "🔐", title: "Security Infrastructure", desc: "Perimeter fencing, gated entry with keypad/card access, security cameras, motion lighting, individual door alarms, and management office with monitoring equipment." },
                    { icon: "📐", title: "Unit Mix Optimization", desc: "We analyze your market to determine the optimal mix of unit sizes (5x5, 5x10, 10x10, 10x15, 10x20, 10x30) for maximum revenue per buildable SF." },
                    { icon: "🏢", title: "Management Office", desc: "Professional retail-facing management office with customer counter, merchandise display, and restroom. Designed to project a premium brand image." },
                ]}
                faqs={[
                    { q: "How much does it cost to build a self-storage facility in Tulsa?", a: "Single-story drive-up storage: $35–$55/sf. Multi-story climate-controlled: $55–$85/sf. A 50,000 rentable SF facility costs $2.5M–$4.25M. Costs include site development, buildings, doors, hallway systems, HVAC (if climate-controlled), security, and management office." },
                    { q: "What is the best unit mix for self-storage?", a: "The optimal mix varies by market. A common Tulsa metro mix is: 10% 5x5, 20% 5x10, 30% 10x10, 20% 10x15, 15% 10x20, 5% 10x30. UDGOK works with your feasibility study to determine the right mix." },
                    { q: "How long does it take to build a storage facility?", a: "A single-phase, 30,000 SF drive-up facility: 4–6 months. A two-story, 50,000 SF climate-controlled facility: 6–10 months. Multi-phase developments with 100,000+ SF are delivered in 2–3 phases over 12–18 months." },
                    { q: "Should I build climate-controlled or drive-up storage?", a: "Climate-controlled commands 30–50% higher rental rates but costs 40–60% more to build. In the Tulsa market, climate-controlled facilities fill faster and retain tenants longer. Most new facilities include a mix of both for optimal revenue." },
                ]}
                cta="Start Your Storage Project →"
            />
        </>
    );
}
