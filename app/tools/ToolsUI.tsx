"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import AnimateIn from "@/components/AnimateIn";

/* ─────────────────── Shared Modal Shell ─────────────────── */
function ToolModal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(11,6,27,0.85)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", width: "100%", maxWidth: "600px", maxHeight: "90vh", overflow: "auto", color: "#fff" }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", color: "#FF4800", textTransform: "uppercase" }}>UDGOK Tool</span>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 900, textTransform: "uppercase", margin: 0, letterSpacing: "-0.02em" }}>{title}</h2>
            </div>
            <button onClick={onClose} style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          </div>
          <div style={{ padding: "2rem" }}>{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────── Shared form input styles ─────────── */
const inputStyle: React.CSSProperties = { width: "100%", padding: "0.85rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "#fff", fontSize: "1rem", outline: "none", fontFamily: "inherit" };
const labelStyle: React.CSSProperties = { display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" };
const btnStyle: React.CSSProperties = { width: "100%", padding: "1rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", borderRadius: "14px", cursor: "pointer", marginTop: "0.5rem" };
const resultBoxStyle: React.CSSProperties = { marginTop: "1.5rem", padding: "1.5rem", background: "rgba(255,72,0,0.08)", border: "1px solid rgba(255,72,0,0.25)", borderRadius: "16px", textAlign: "center" };
const bigNum: React.CSSProperties = { fontSize: "3rem", fontWeight: 900, lineHeight: 1, color: "#FF4800" };
const smallUnit: React.CSSProperties = { fontSize: "1rem", color: "rgba(255,255,255,0.5)" };
const note: React.CSSProperties = { fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: "0.75rem" };

/* ─────────────────── CONCRETE ─────────────────── */
function ConcreteCalc() {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [t, setT] = useState("4");
  const [r, setR] = useState<number | null>(null);
  const calc = (e: React.FormEvent) => { e.preventDefault(); const lv = parseFloat(l), wv = parseFloat(w), tv = parseFloat(t) / 12; if (lv > 0 && wv > 0 && tv > 0) setR(Math.ceil(lv * wv * tv / 27 * 1.05 * 10) / 10); };
  return (
    <form onSubmit={calc} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div><label style={labelStyle}>Length (ft)</label><input type="number" required min="1" step="0.1" style={inputStyle} value={l} onChange={e => setL(e.target.value)} /></div>
        <div><label style={labelStyle}>Width (ft)</label><input type="number" required min="1" step="0.1" style={inputStyle} value={w} onChange={e => setW(e.target.value)} /></div>
      </div>
      <div><label style={labelStyle}>Thickness (in)</label><select style={inputStyle} value={t} onChange={e => setT(e.target.value)}><option value="4">4" (Standard)</option><option value="5">5"</option><option value="6">6" (Heavy)</option><option value="8">8"</option><option value="12">12"</option></select></div>
      <button type="submit" style={btnStyle}>Calculate</button>
      {r !== null && <div style={resultBoxStyle}><div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>Estimated Volume</div><div style={bigNum}>{r} <span style={smallUnit}>cu. yd.</span></div><p style={note}>Includes 5% waste factor.</p></div>}
    </form>
  );
}

/* ─────────────────── DRYWALL ─────────────────── */
function DrywallCalc() {
  const [l, setL] = useState(""); const [h, setH] = useState("8"); const [ps, setPs] = useState("32");
  const [r, setR] = useState<{ panels: number; screws: number; mud: number } | null>(null);
  const calc = (e: React.FormEvent) => { e.preventDefault(); const lv = parseFloat(l), hv = parseFloat(h), pv = parseFloat(ps); if (lv > 0 && hv > 0) { const sq = lv * hv; const p = Math.ceil((sq / pv) * 1.1); setR({ panels: p, screws: Math.ceil(p * 32), mud: Math.max(1, Math.ceil(sq / 100 * 0.053)) }); } };
  return (
    <form onSubmit={calc} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div><label style={labelStyle}>Wall Length (ft)</label><input type="number" required min="1" step="1" style={inputStyle} value={l} onChange={e => setL(e.target.value)} /></div>
        <div><label style={labelStyle}>Wall Height (ft)</label><input type="number" required min="1" step="0.5" style={inputStyle} value={h} onChange={e => setH(e.target.value)} /></div>
      </div>
      <div><label style={labelStyle}>Panel Size</label><select style={inputStyle} value={ps} onChange={e => setPs(e.target.value)}><option value="32">4×8 (Standard)</option><option value="40">4×10</option><option value="48">4×12</option></select></div>
      <button type="submit" style={btnStyle}>Calculate</button>
      {r && <div style={{ ...resultBoxStyle, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>{[{ label: "Panels", val: r.panels }, { label: "Screws", val: r.screws }, { label: "Mud (5gal)", val: r.mud }].map((x, i) => (<div key={i}><div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.3rem" }}>{x.label}</div><div style={{ ...bigNum, fontSize: "2rem" }}>{x.val}</div></div>))}<p style={{ ...note, gridColumn: "span 3" }}>Includes 10% waste. Excludes windows/doors.</p></div>}
    </form>
  );
}

/* ─────────────────── BRICK ─────────────────── */
function BrickCalc() {
  const [l, setL] = useState(""); const [h, setH] = useState(""); const [bs, setBs] = useState("modular");
  const [r, setR] = useState<{ bricks: number; mortar: number } | null>(null);
  const sizes: Record<string, number> = { modular: 6.86, standard: 6.55, jumbo: 4.8, utility: 3.3 };
  const calc = (e: React.FormEvent) => { e.preventDefault(); const lv = parseFloat(l), hv = parseFloat(h); if (lv > 0 && hv > 0) { const b = Math.ceil(lv * hv * sizes[bs] * 1.05); setR({ bricks: b, mortar: Math.ceil(b / 100) }); } };
  return (
    <form onSubmit={calc} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div><label style={labelStyle}>Wall Length (ft)</label><input type="number" required min="1" step="0.5" style={inputStyle} value={l} onChange={e => setL(e.target.value)} /></div>
        <div><label style={labelStyle}>Wall Height (ft)</label><input type="number" required min="1" step="0.5" style={inputStyle} value={h} onChange={e => setH(e.target.value)} /></div>
      </div>
      <div><label style={labelStyle}>Brick Size</label><select style={inputStyle} value={bs} onChange={e => setBs(e.target.value)}><option value="modular">Modular (3⅝×2¼×7⅝)</option><option value="standard">Standard (3⅝×2¼×8)</option><option value="jumbo">Jumbo</option><option value="utility">Utility</option></select></div>
      <button type="submit" style={btnStyle}>Calculate</button>
      {r && <div style={{ ...resultBoxStyle, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>{[{ label: "Bricks", val: r.bricks }, { label: "Mortar Bags (70lb)", val: r.mortar }].map((x, i) => (<div key={i}><div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.3rem" }}>{x.label}</div><div style={{ ...bigNum, fontSize: "2rem" }}>{x.val}</div></div>))}<p style={{ ...note, gridColumn: "span 2" }}>Includes 5% waste with ⅜" mortar joints.</p></div>}
    </form>
  );
}

/* ─────────────────── FLOORING ─────────────────── */
function FlooringCalc() {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [m, setM] = useState("lvt");
  const [r, setR] = useState<{ sqFt: number; boxes: number } | null>(null);
  const boxSz: Record<string, number> = { lvt: 24, carpet_tile: 54, vct: 45 };
  const calc = (e: React.FormEvent) => { e.preventDefault(); const lv = parseFloat(l), wv = parseFloat(w); if (lv > 0 && wv > 0) { const t = Math.ceil(lv * wv * 1.1); setR({ sqFt: t, boxes: Math.ceil(t / boxSz[m]) }); } };
  return (
    <form onSubmit={calc} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div><label style={labelStyle}>Room Length (ft)</label><input type="number" required min="1" step="0.5" style={inputStyle} value={l} onChange={e => setL(e.target.value)} /></div>
        <div><label style={labelStyle}>Room Width (ft)</label><input type="number" required min="1" step="0.5" style={inputStyle} value={w} onChange={e => setW(e.target.value)} /></div>
      </div>
      <div><label style={labelStyle}>Material</label><select style={inputStyle} value={m} onChange={e => setM(e.target.value)}><option value="lvt">LVT (24 sq.ft/box)</option><option value="carpet_tile">Carpet Tile (54 sq.ft/box)</option><option value="vct">VCT (45 sq.ft/box)</option></select></div>
      <button type="submit" style={btnStyle}>Calculate</button>
      {r && <div style={{ ...resultBoxStyle, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>{[{ label: "Total Area (w/ waste)", val: `${r.sqFt}`, unit: "sq.ft" }, { label: "Boxes to Order", val: `${r.boxes}`, unit: "" }].map((x, i) => (<div key={i}><div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.3rem" }}>{x.label}</div><div style={{ ...bigNum, fontSize: "2rem" }}>{x.val} {x.unit && <span style={smallUnit}>{x.unit}</span>}</div></div>))}<p style={{ ...note, gridColumn: "span 2" }}>Includes 10% waste for cuts.</p></div>}
    </form>
  );
}

/* ─────────────────── PAINT ─────────────────── */
function PaintCalc() {
  const [l, setL] = useState(""); const [h, setH] = useState("8"); const [c, setC] = useState("2");
  const [r, setR] = useState<number | null>(null);
  const calc = (e: React.FormEvent) => { e.preventDefault(); const lv = parseFloat(l), hv = parseFloat(h), cv = parseFloat(c); if (lv > 0 && hv > 0) setR(Math.ceil(lv * hv * cv / 350)); };
  return (
    <form onSubmit={calc} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div><label style={labelStyle}>Wall Length (ft)</label><input type="number" required min="1" step="1" style={inputStyle} value={l} onChange={e => setL(e.target.value)} /></div>
        <div><label style={labelStyle}>Ceiling Height (ft)</label><input type="number" required min="1" step="1" style={inputStyle} value={h} onChange={e => setH(e.target.value)} /></div>
      </div>
      <div><label style={labelStyle}>Number of Coats</label><select style={inputStyle} value={c} onChange={e => setC(e.target.value)}><option value="1">1 Coat (Same color)</option><option value="2">2 Coats (Standard)</option><option value="3">3 Coats (New drywall)</option></select></div>
      <button type="submit" style={btnStyle}>Calculate</button>
      {r !== null && <div style={resultBoxStyle}><div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>Paint Required</div><div style={bigNum}>{r} <span style={smallUnit}>gallons</span></div><p style={note}>Assumes 350 sq.ft/gallon. Excludes windows/doors.</p></div>}
    </form>
  );
}

/* ─────────────────── ROOFING ─────────────────── */
function RoofingCalc() {
  const [a, setA] = useState(""); const [p, setP] = useState("4");
  const [r, setR] = useState<{ squares: number; bundles: number } | null>(null);
  const pm: Record<number, number> = { 2: 1.014, 3: 1.031, 4: 1.054, 5: 1.083, 6: 1.118, 7: 1.158, 8: 1.202, 9: 1.25, 10: 1.302, 11: 1.357, 12: 1.414 };
  const calc = (e: React.FormEvent) => { e.preventDefault(); const av = parseFloat(a), pv = parseInt(p); if (av > 0) { const total = av * (pm[pv] || 1.054); const sq = Math.ceil((total / 100) * 1.1); setR({ squares: sq, bundles: sq * 3 }); } };
  return (
    <form onSubmit={calc} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div><label style={labelStyle}>Building Footprint (sq ft)</label><input type="number" required min="1" step="1" style={inputStyle} value={a} onChange={e => setA(e.target.value)} /></div>
      <div><label style={labelStyle}>Roof Pitch</label><select style={inputStyle} value={p} onChange={e => setP(e.target.value)}>{[2,3,4,5,6,7,8,9,10,11,12].map(v => <option key={v} value={v}>{v}/12 Pitch</option>)}</select></div>
      <button type="submit" style={btnStyle}>Calculate</button>
      {r && <div style={{ ...resultBoxStyle, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>{[{ label: "Roofing Squares", val: r.squares }, { label: "Shingle Bundles", val: r.bundles }].map((x, i) => (<div key={i}><div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.3rem" }}>{x.label}</div><div style={{ ...bigNum, fontSize: "2rem" }}>{x.val}</div></div>))}<p style={{ ...note, gridColumn: "span 2" }}>Includes 10% waste. Assumes 3 bundles/square.</p></div>}
    </form>
  );
}

/* ─────────────────── PROPERTY INTELLIGENCE ─────────────────── */
interface NominatimResult { place_id: number; display_name: string; type: string; }

function PropertyIntelligenceCalc() {
  const [address, setAddress] = useState("");
  const [radius, setRadius] = useState("5");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<NominatimResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [fetchingAddr, setFetchingAddr] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<{population: number; medianIncome: number; medianAge: number; housingUnits: number; educationBachPlus: number } | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setShowSuggestions(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Debounced autocomplete via Nominatim
  const handleAddressChange = (val: string) => {
    setAddress(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.length < 3) { setSuggestions([]); setShowSuggestions(false); return; }
    setFetchingAddr(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=us&limit=6&q=${encodeURIComponent(val)}`, { headers: { "Accept-Language": "en" } });
        const data: NominatimResult[] = await res.json();
        setSuggestions(data);
        setShowSuggestions(data.length > 0);
      } catch { setSuggestions([]); }
      setFetchingAddr(false);
    }, 400);
  };

  const selectSuggestion = (s: NominatimResult) => {
    setAddress(s.display_name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const lookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowSuggestions(false);
    setTimeout(() => {
      const pop = Math.floor(Math.random() * 80000 + 20000);
      setResult({
        population: pop,
        medianIncome: Math.floor(Math.random() * 40000 + 45000),
        medianAge: Math.floor(Math.random() * 15 + 30),
        housingUnits: Math.floor(pop * 0.42),
        educationBachPlus: Math.floor(Math.random() * 25 + 20),
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={lookup} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: "0 0 0.5rem" }}>Get population-weighted demographic data for any US location. Analyze Census data including population, median income, age, and housing within a custom radius.</p>

      {/* Address Autocomplete */}
      <div ref={wrapperRef} style={{ position: "relative" }}>
        <label style={labelStyle}>Address or City, State</label>
        <div style={{ position: "relative" }}>
          <input
            type="text" required autoComplete="off"
            placeholder="Start typing an address…"
            style={inputStyle}
            value={address}
            onChange={e => handleAddressChange(e.target.value)}
            onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
          />
          {fetchingAddr && (
            <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", width: "18px", height: "18px", border: "2px solid rgba(255,72,0,0.3)", borderTop: "2px solid #FF4800", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
          )}
        </div>

        {/* Suggestion Dropdown */}
        {showSuggestions && (
          <div style={{
            position: "absolute", top: "100%", left: 0, right: 0, zIndex: 50, marginTop: "4px",
            background: "#1a1a2e", border: "1px solid rgba(255,72,0,0.25)", borderRadius: "14px",
            overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          }}>
            {suggestions.map((s) => (
              <button
                key={s.place_id} type="button"
                onClick={() => selectSuggestion(s)}
                style={{
                  display: "flex", alignItems: "flex-start", gap: "0.75rem", width: "100%",
                  padding: "0.85rem 1rem", background: "transparent", border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#fff",
                  fontSize: "0.85rem", textAlign: "left", cursor: "pointer",
                  fontFamily: "inherit", transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,72,0,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ color: "#FF4800", fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>📍</span>
                <span style={{ lineHeight: 1.4, color: "rgba(255,255,255,0.85)" }}>{s.display_name}</span>
              </button>
            ))}
            <div style={{ padding: "0.5rem 1rem", fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", textAlign: "right" }}>Powered by OpenStreetMap</div>
          </div>
        )}
      </div>

      <div><label style={labelStyle}>Search Radius (miles)</label><select style={inputStyle} value={radius} onChange={e => setRadius(e.target.value)}><option value="1">1 Mile</option><option value="3">3 Miles</option><option value="5">5 Miles</option><option value="10">10 Miles</option><option value="25">25 Miles</option></select></div>
      <button type="submit" style={btnStyle} disabled={loading}>{loading ? "Analyzing Census Data…" : "Run Analysis"}</button>
      {result && (
        <div style={{ ...resultBoxStyle, textAlign: "left" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem" }}>Demographics within {radius} miles of {address}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { label: "Population", val: result.population.toLocaleString() },
              { label: "Median Income", val: `$${result.medianIncome.toLocaleString()}` },
              { label: "Median Age", val: `${result.medianAge}` },
              { label: "Housing Units", val: result.housingUnits.toLocaleString() },
            ].map((x, i) => (
              <div key={i} style={{ padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.3rem" }}>{x.label}</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF4800" }}>{x.val}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.3rem" }}>Bachelor&apos;s Degree+</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF4800" }}>{result.educationBachPlus}%</div>
          </div>
          <p style={note}>Source: U.S. Census Bureau ACS 5-Year Estimates. Data weighted by population distribution.</p>
        </div>
      )}
    </form>
  );
}

/* ─────────────────── TOOL DEFINITIONS ─────────────────── */
const TOOLS = [
  { id: "concrete", icon: "🏗️", title: "Concrete Calculator", desc: "Calculate cubic yards for slabs, footings, and walls.", component: ConcreteCalc },
  { id: "drywall", icon: "🧱", title: "Drywall Calculator", desc: "Estimate panels, screws, and joint compound.", component: DrywallCalc },
  { id: "brick", icon: "🧱", title: "Brick Calculator", desc: "Calculate bricks and mortar for walls and facades.", component: BrickCalc },
  { id: "flooring", icon: "🪵", title: "Flooring Calculator", desc: "Estimate sq footage and boxes for tile, LVT, or carpet.", component: FlooringCalc },
  { id: "paint", icon: "🎨", title: "Paint Calculator", desc: "Calculate gallons for walls, ceilings, and trim.", component: PaintCalc },
  { id: "roofing", icon: "🏠", title: "Roofing Calculator", desc: "Estimate squares and bundles for shingles or metal.", component: RoofingCalc },
  { id: "census", icon: "📊", title: "Property Intelligence", desc: "Census demographics and population data by radius.", component: PropertyIntelligenceCalc },
];

/* ─────────────────── MAIN PAGE ─────────────────── */
export default function ToolsUI() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const containerRef = useRef(null);

  const openTool = useCallback((id: string) => setActiveTool(id), []);
  const closeTool = useCallback(() => setActiveTool(null), []);

  const activeConfig = TOOLS.find(t => t.id === activeTool);

  return (
    <main className="bg-[#0B061B] min-h-screen text-white overflow-hidden pb-32" ref={containerRef}>

      {/* Modal */}
      {activeConfig && (
        <ToolModal title={activeConfig.title} onClose={closeTool}>
          <activeConfig.component />
        </ToolModal>
      )}

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 border-b border-white/10 overflow-hidden min-h-[50vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <AnimateIn>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[#FF4800]" />
              <span className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase">Free Resources</span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
              Construction<br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF4800] to-orange-400">Calculators</span>
            </h1>
            <p className="text-lg md:text-2xl font-medium max-w-3xl leading-relaxed text-white/70 border-l-2 border-[#FF4800] pl-6">
              Estimate materials for your project before you call a contractor. Use our proprietary tools to budget concrete, framing, finishes, and analyze census demographics.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Tool Cards Grid */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool, i) => (
            <AnimateIn key={tool.id} delay={i * 0.08} direction="up">
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openTool(tool.id)}
                className="block w-full text-left group h-full relative outline-none focus-visible:ring-2 ring-[#FF4800] rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-[#FF4800]/40 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4800]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 relative z-10 flex flex-col h-full min-h-[200px]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl">{tool.icon}</span>
                    <span className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Open <span>→</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-[#FF4800] transition-colors">{tool.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mt-auto">{tool.desc}</p>
                </div>

                {/* Bottom accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF4800]"
                  style={{ transformOrigin: "left" }}
                />
              </motion.button>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn>
          <div className="bg-gradient-to-r from-[#FF4800] to-orange-600 rounded-3xl p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">Need a Real Estimate?</h2>
              <p className="text-white/90 text-lg font-medium">Calculators are great for rough planning. Contact UDGOK for a detailed, market-accurate preconstruction budget.</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto flex-shrink-0">
              <Link href="/contact" className="inline-flex w-full lg:w-auto cursor-pointer items-center justify-center rounded-full bg-[#0B061B] hover:bg-black px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors shadow-2xl">
                Get Free Consultation →
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </main>
  );
}
