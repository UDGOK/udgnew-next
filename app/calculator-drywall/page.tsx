"use client";
import { HowToJsonLd } from "@/components/JsonLd";
import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function DrywallCalculator() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("8");
  const [panelSize, setPanelSize] = useState("32"); // 4x8 = 32
  const [result, setResult] = useState<{ panels: number; screws: number; mud: number } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const l = parseFloat(length);
    const h = parseFloat(height);
    const p = parseFloat(panelSize);
    
    if (l > 0 && h > 0) {
      const sqFt = l * h;
      const panels = Math.ceil((sqFt / p) * 1.1); // 10% waste
      const screws = Math.ceil(panels * 32); // ~32 screws per panel
      const mud = Math.ceil((sqFt / 100) * 0.053); // ~0.053 buckets (5gal) per 100 sq ft
      setResult({ panels, screws, mud: mud < 1 ? 1 : mud });
    }
  };

  return (
    <>
      <HowToJsonLd
        name="Drywall Sheet Calculator"
        description="Estimate the number of 4x8 drywall sheets needed for walls based on room dimensions."
        steps={[{"name":"Enter Room Length","text":"Enter the total room length in feet."},{"name":"Enter Room Width","text":"Enter the room width in feet."},{"name":"Enter Wall Height","text":"Enter the wall height in feet (typically 8 or 9 feet)."},{"name":"Get Result","text":"Click Calculate to get the number of 4x8 drywall sheets needed."}]}
        totalTime="PT2M"
      />
      <PageHero label="Construction Tools" title="Drywall Calculator" description="Estimate panels, screws, and joint compound needed for commercial framing." />
      <section style={{ maxWidth: "800px", margin: "4rem auto", padding: "0 2rem" }}>
        <form onSubmit={calculate} style={{ display: "flex", flexDirection: "column", gap: "2rem", background: "#F7F4F7", padding: "3rem", borderLeft: "4px solid #FF4800" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Total Wall Length (ft)</label>
              <input type="number" required min="1" step="1" className="form-input" value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Wall Height (ft)</label>
              <input type="number" required min="1" step="0.5" className="form-input" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Panel Size</label>
            <select className="form-select" value={panelSize} onChange={(e) => setPanelSize(e.target.value)}>
              <option value="32">4&apos; x 8&apos; (Standard)</option>
              <option value="40">4&apos; x 10&apos;</option>
              <option value="48">4&apos; x 12&apos;</option>
              <option value="54">54&quot; x 12&apos; (Stand-up)</option>
            </select>
          </div>
          <button type="submit" style={{ padding: "1.25rem", background: "#0B061B", color: "#fff", fontWeight: 700, textTransform: "uppercase", border: "none", cursor: "pointer" }}>Calculate Material</button>
        </form>

        {result && (
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            <div style={{ padding: "3rem 1rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Panels</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>{result.panels}</div>
            </div>
            <div style={{ padding: "3rem 1rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Screws</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>{result.screws}</div>
            </div>
            <div style={{ padding: "3rem 1rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Mud (5gal)</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>{result.mud}</div>
            </div>
            <p style={{ gridColumn: "span 3", color: "#666", textAlign: "center", fontSize: "0.85rem" }}>Includes 10% waste factor for panels. Does not account for windows/doors.</p>
          </div>
        )}
      </section>
    </>
  );
}
