"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function BrickCalculator() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [brickSize, setBrickSize] = useState("modular");
  const [result, setResult] = useState<{ bricks: number; mortar: number } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const l = parseFloat(length);
    const h = parseFloat(height);
    
    // Bricks per sq ft depending on type
    const sizes = {
      modular: 6.86,
      standard: 6.55,
      jumbo: 4.8,
      utility: 3.3
    };
    
    if (l > 0 && h > 0) {
      const sqFt = l * h;
      const bricksPerSqFt = sizes[brickSize as keyof typeof sizes];
      const bricks = Math.ceil(sqFt * bricksPerSqFt * 1.05); // 5% waste
      
      // Rough estimate: ~1 bag of mortar (70lb) per 100 modular bricks
      const mortarBags = Math.ceil((bricks / 100));
      
      setResult({ bricks, mortar: mortarBags });
    }
  };

  return (
    <>
      <PageHero label="Construction Tools" title="Brick Calculator" description="Estimate the number of bricks and mortar required for a wall." />
      <section style={{ maxWidth: "800px", margin: "4rem auto", padding: "0 2rem" }}>
        <form onSubmit={calculate} style={{ display: "flex", flexDirection: "column", gap: "2rem", background: "#F7F4F7", padding: "3rem", borderLeft: "4px solid #FF4800" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Wall Length (ft)</label>
              <input type="number" required min="1" step="0.5" className="form-input" value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Wall Height (ft)</label>
              <input type="number" required min="1" step="0.5" className="form-input" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Brick Size</label>
            <select className="form-select" value={brickSize} onChange={(e) => setBrickSize(e.target.value)}>
              <option value="modular">Modular (3-5/8" x 2-1/4" x 7-5/8")</option>
              <option value="standard">Standard (3-5/8" x 2-1/4" x 8")</option>
              <option value="jumbo">Jumbo (3-5/8" x 2-3/4" x 8")</option>
              <option value="utility">Utility (3-5/8" x 3-5/8" x 11-5/8")</option>
            </select>
          </div>
          <button type="submit" style={{ padding: "1.25rem", background: "#0B061B", color: "#fff", fontWeight: 700, textTransform: "uppercase", border: "none", cursor: "pointer" }}>Calculate Material</button>
        </form>

        {result && (
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div style={{ padding: "3rem 1rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Bricks Required</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>{result.bricks}</div>
            </div>
            <div style={{ padding: "3rem 1rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Mortar Bags (70 lb)</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>{result.mortar}</div>
            </div>
            <p style={{ gridColumn: "span 2", color: "#666", textAlign: "center", fontSize: "0.85rem" }}>Includes standard 3/8" mortar joints and 5% waste factor for bricks.</p>
          </div>
        )}
      </section>
    </>
  );
}
