"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function ConcreteCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("4");
  const [result, setResult] = useState<number | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const l = parseFloat(length);
    const w = parseFloat(width);
    const t = parseFloat(thickness) / 12; // inches to feet
    if (l > 0 && w > 0 && t > 0) {
      const cubicFeet = l * w * t;
      const cubicYards = cubicFeet / 27;
      setResult(Math.ceil(cubicYards * 1.05 * 10) / 10); // 5% waste
    }
  };

  return (
    <>
      <PageHero label="Construction Tools" title="Concrete Calculator" description="Estimate the cubic yards of concrete needed for slabs, footings, and foundations." />
      <section style={{ maxWidth: "800px", margin: "4rem auto", padding: "0 2rem" }}>
        <form onSubmit={calculate} style={{ display: "flex", flexDirection: "column", gap: "2rem", background: "#F7F4F7", padding: "3rem", borderLeft: "4px solid #FF4800" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Length (feet)</label>
              <input type="number" required min="1" step="0.1" className="form-input" value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <div>
              <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Width (feet)</label>
              <input type="number" required min="1" step="0.1" className="form-input" value={width} onChange={(e) => setWidth(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>Thickness (inches)</label>
            <select className="form-select" value={thickness} onChange={(e) => setThickness(e.target.value)}>
              <option value="4">4 inches (Standard slab)</option>
              <option value="5">5 inches</option>
              <option value="6">6 inches (Heavy duty)</option>
              <option value="8">8 inches</option>
              <option value="12">12 inches</option>
            </select>
          </div>
          <button type="submit" style={{ padding: "1.25rem", background: "#0B061B", color: "#fff", fontWeight: 700, textTransform: "uppercase", border: "none", cursor: "pointer" }}>Calculate Yards</button>
        </form>

        {result !== null && (
          <div style={{ marginTop: "3rem", padding: "3rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", color: "#FF4800", marginBottom: "0.5rem" }}>Estimated Volume</div>
            <div style={{ fontSize: "4rem", fontWeight: 900, lineHeight: 1 }}>{result} <span style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.6)" }}>cu. yd.</span></div>
            <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "1rem", fontSize: "0.85rem" }}>Includes 5% waste factor. Order from a ready-mix supplier.</p>
          </div>
        )}
      </section>
    </>
  );
}
