"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function RoofingCalculator() {
  const [area, setArea] = useState("");
  const [pitch, setPitch] = useState("4");
  const [result, setResult] = useState<{ squares: number; bundles: number } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const sqFt = parseFloat(area);
    const p = parseFloat(pitch);
    
    // Pitch multiplier (simplified)
    const pitchMultipliers = {
      2: 1.014, 3: 1.031, 4: 1.054, 5: 1.083, 6: 1.118,
      7: 1.158, 8: 1.202, 9: 1.25, 10: 1.302, 11: 1.357, 12: 1.414
    };
    
    if (sqFt > 0) {
      const multiplier = pitchMultipliers[p as keyof typeof pitchMultipliers] || 1.054;
      const totalArea = sqFt * multiplier;
      
      const squares = Math.ceil((totalArea / 100) * 1.1); // 10% waste
      const bundles = squares * 3; // 3 bundles per square for architectural shingles
      
      setResult({ squares, bundles });
    }
  };

  return (
    <>
      <PageHero label="Construction Tools" title="Roofing Calculator" description="Estimate roofing squares and bundles based on footprint area and roof pitch." />
      <section style={{ maxWidth: "800px", margin: "4rem auto", padding: "0 2rem" }}>
        <form onSubmit={calculate} style={{ display: "flex", flexDirection: "column", gap: "2rem", background: "#F7F4F7", padding: "3rem", borderLeft: "4px solid #FF4800" }}>
          <div>
            <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Building Footprint Area (sq ft)</label>
            <input type="number" required min="1" step="1" className="form-input" value={area} onChange={(e) => setArea(e.target.value)} />
          </div>
          <div>
            <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Roof Pitch</label>
            <select className="form-select" value={pitch} onChange={(e) => setPitch(e.target.value)}>
              {[2,3,4,5,6,7,8,9,10,11,12].map(p => (
                <option key={p} value={p}>{p}/12 Pitch</option>
              ))}
            </select>
          </div>
          <button type="submit" style={{ padding: "1.25rem", background: "#0B061B", color: "#fff", fontWeight: 700, textTransform: "uppercase", border: "none", cursor: "pointer" }}>Calculate Shingles</button>
        </form>

        {result && (
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div style={{ padding: "3rem 1rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Roofing Squares</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>{result.squares}</div>
            </div>
            <div style={{ padding: "3rem 1rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Shingle Bundles</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>{result.bundles}</div>
            </div>
            <p style={{ gridColumn: "span 2", color: "#666", textAlign: "center", fontSize: "0.85rem" }}>Includes 10% waste factor and assumes standard architectural shingles (3 bundles/square).</p>
          </div>
        )}
      </section>
    </>
  );
}
