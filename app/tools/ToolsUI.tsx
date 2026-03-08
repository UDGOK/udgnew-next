"use client";
import Link from "next/link";
import Image from "next/image";
import MarqueeBanner from "@/components/MarqueeBanner";

const calculators = [
  { title: "Concrete Calculator", desc: "Calculate cubic yards of concrete needed for slabs, footings, and walls.", image: "/images/concrete-calculator.png", href: "/tools/concrete" },
  { title: "Drywall Calculator", desc: "Estimate sheets of drywall needed for walls and ceilings by room dimensions.", image: "/images/drywall-calculator.png", href: "/tools/drywall" },
  { title: "Brick Calculator", desc: "Calculate the number of bricks required for walls, facades, and paving.", image: "/images/brick-calculator.png", href: "/tools/brick" },
  { title: "Flooring Calculator", desc: "Estimate square footage and materials needed for tile, hardwood, or LVP flooring.", image: "/images/flooring-calculator.png", href: "/tools/flooring" },
  { title: "Paint Calculator", desc: "Calculate gallons of paint needed for walls, ceilings, and trim by room.", image: "/images/paint-calculator.png", href: "/tools/paint" },
  { title: "Roofing Calculator", desc: "Estimate roofing squares and materials needed for shingles or metal roofing.", image: "/images/roofing-calculator.png", href: "/tools/roofing" },
];

export default function ToolsUI() {
  return (
    <>
      <section style={{ background: "#0B061B", padding: "8rem 4rem 6rem", borderBottom: "4px solid #0B061B" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", color: "#FF4800", textTransform: "uppercase" }}>◾ Free Tools</span>
        <h1 style={{ fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, textTransform: "uppercase", color: "#fff", marginTop: "2rem", marginBottom: "2rem" }}>
          Calculators<br />&amp; <span style={{ color: "#FF4800" }}>Tools</span>
        </h1>
        <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "600px" }}>
          Free construction estimating tools to help you plan your project. Calculate materials before you call a contractor — then call us.
        </p>
      </section>
      <MarqueeBanner />
      <section style={{ borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "3rem 2rem", borderBottom: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>Material Calculators</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {calculators.map((calc, i) => (
            <Link key={i} href={calc.href} style={{ display: "block", textDecoration: "none", color: "#0B061B", borderRight: (i + 1) % 3 !== 0 ? "4px solid #0B061B" : "none", borderBottom: i < 3 ? "4px solid #0B061B" : "none", transition: "background 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#F7F4F7")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderBottom: "4px solid #0B061B", overflow: "hidden" }}>
                <Image src={calc.image} alt={calc.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "2.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>{calc.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{calc.desc}</p>
                <div style={{ marginTop: "1.5rem", fontSize: "0.8rem", fontWeight: 700, color: "#FF4800" }}>Open Calculator →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "8fr 4fr", borderBottom: "4px solid #0B061B" }}>
        <div style={{ padding: "5rem 4rem", borderRight: "4px solid #0B061B" }}>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Ready for a<br /><span style={{ color: "#FF4800" }}>real estimate?</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}>
            Calculators give you a starting point. Contact UDGOK for a detailed project estimate based on actual local subcontractor pricing.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", flexDirection: "column", gap: "1rem" }}>
          <Link href="/contact" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
            Get a Free Estimate →
          </Link>
          <Link href="tel:+19185203823" style={{ display: "block", width: "100%", padding: "1.25rem", background: "#0B061B", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
            (918) 520-3823
          </Link>
        </div>
      </section>
    </>
  );
}
