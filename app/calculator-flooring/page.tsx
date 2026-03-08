"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function FlooringCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [material, setMaterial] = useState("lvt");
  const [result, setResult] = useState<{ sqFt: number; boxes: number } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const l = parseFloat(length);
    const w = parseFloat(width);
    
    // Assumed box sizes
    const boxSizes = {
      lvt: 24, // 24 sqft/box
      carpet_tile: 54, // 54 sqft/box
      vct: 45, // 45 sqft/box
    };
    
    if (l > 0 && w > 0) {
      const area = l * w;
      const totalArea = Math.ceil(area * 1.1); // 10% waste factor
      const boxSize = boxSizes[material as keyof typeof boxSizes];
      const boxes = Math.ceil(totalArea / boxSize);
      
      setResult({ sqFt: totalArea, boxes });
    }
  };

  return (
    <>
      <PageHero label="Construction Tools" title="Commercial Flooring Calculator" description="Estimate the total square footage and boxes needed for commercial flooring." />
      <section style={{ maxWidth: "800px", margin: "4rem auto", padding: "0 2rem" }}>
        <form onSubmit={calculate} style={{ display: "flex", flexDirection: "column", gap: "2rem", background: "#F7F4F7", padding: "3rem", borderLeft: "4px solid #FF4800" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Room Length (ft)</label>
              <input type="number" required min="1" step="0.5" className="form-input" value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Room Width (ft)</label>
              <input type="number" required min="1" step="0.5" className="form-input" value={width} onChange={(e) => setWidth(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Flooring Material</label>
            <select className="form-select" value={material} onChange={(e) => setMaterial(e.target.value)}>
              <option value="lvt">Luxury Vinyl Tile (LVT) - 24 sq.ft/box</option>
              <option value="carpet_tile">Carpet Tile - 54 sq.ft/box</option>
              <option value="vct">Vinyl Composition Tile (VCT) - 45 sq.ft/box</option>
            </select>
          </div>
          <button type="submit" style={{ padding: "1.25rem", background: "#0B061B", color: "#fff", fontWeight: 700, textTransform: "uppercase", border: "none", cursor: "pointer" }}>Calculate Flooring</button>
        </form>

        {result && (
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div style={{ padding: "3rem 1rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Total Area Included Waste</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>{result.sqFt} <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)" }}>sq.ft</span></div>
            </div>
            <div style={{ padding: "3rem 1rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Boxes to Order</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>{result.boxes}</div>
            </div>
            <p style={{ gridColumn: "span 2", color: "#666", textAlign: "center", fontSize: "0.85rem" }}>Includes 10% waste factor for cuts and patterns.</p>
          </div>
        )}
      </section>
    </>
  );
}
