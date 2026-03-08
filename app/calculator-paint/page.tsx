"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function PaintingCalculator() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("8");
  const [coats, setCoats] = useState("2");
  const [result, setResult] = useState<number | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const l = parseFloat(length);
    const h = parseFloat(height);
    const c = parseFloat(coats);
    if (l > 0 && h > 0) {
      // 1 gallon covers approx 350 sq ft
      const sqFt = l * h * c;
      const gallons = Math.ceil(sqFt / 350);
      setResult(gallons);
    }
  };

  return (
    <>
      <PageHero label="Construction Tools" title="Paint Calculator" description="Estimate the gallons of paint needed for your commercial space." />
      <section style={{ maxWidth: "800px", margin: "4rem auto", padding: "0 2rem" }}>
        <form onSubmit={calculate} style={{ display: "flex", flexDirection: "column", gap: "2rem", background: "#F7F4F7", padding: "3rem", borderLeft: "4px solid #FF4800" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Total Wall Length (ft)</label>
              <input type="number" required min="1" step="1" className="form-input" value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Ceiling Height (ft)</label>
              <input type="number" required min="1" step="1" className="form-input" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Number of Coats</label>
            <select className="form-select" value={coats} onChange={(e) => setCoats(e.target.value)}>
              <option value="1">1 Coat (Repainting same color)</option>
              <option value="2">2 Coats (Standard)</option>
              <option value="3">3 Coats (New drywall/Dark colors)</option>
            </select>
          </div>
          <button type="submit" style={{ padding: "1.25rem", background: "#0B061B", color: "#fff", fontWeight: 700, textTransform: "uppercase", border: "none", cursor: "pointer" }}>Calculate Gallons</button>
        </form>

        {result !== null && (
          <div style={{ marginTop: "3rem", padding: "3rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Estimated Paint Required</div>
            <div style={{ fontSize: "4rem", fontWeight: 900, lineHeight: 1 }}>{result} <span style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.6)" }}>gallons</span></div>
            <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "1rem", fontSize: "0.85rem" }}>Assumes 350 sq.ft. per gallon coverage. Does not account for windows/doors.</p>
          </div>
        )}
      </section>
    </>
  );
}
