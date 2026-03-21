"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Device {
  device_name: string;
  applicant: string;
  decision_date: string;
  advisory_committee_description: string;
  product_code: string;
  k_number: string;
}

interface Props {
  /** Pre-filled search category, e.g. "dental", "ophthalmic" */
  defaultSearch?: string;
  /** Section heading */
  heading?: string;
  /** Subtitle text */
  subtitle?: string;
}

export default function FDADeviceSearch({
  defaultSearch = "dental",
  heading = "FDA-Cleared Medical Devices",
  subtitle = "Live data from the U.S. Food & Drug Administration — 172,000+ cleared devices",
}: Props) {
  const [query, setQuery] = useState(defaultSearch);
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [total, setTotal] = useState(0);

  const search = useCallback(async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const q = encodeURIComponent(query.trim());
      // First try: search by advisory committee description
      const res = await fetch(
        `https://api.fda.gov/device/510k.json?search=advisory_committee_description:${q}&limit=8&sort=decision_date:desc`
      );
      if (res.ok) {
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          setDevices(data.results);
          setTotal(data.meta?.results?.total || 0);
          setLoading(false);
          return;
        }
      }
      // Fallback: search by device name
      const res2 = await fetch(
        `https://api.fda.gov/device/510k.json?search=device_name:${q}&limit=8&sort=decision_date:desc`
      );
      if (res2.ok) {
        const data2 = await res2.json();
        setDevices(data2.results || []);
        setTotal(data2.meta?.results?.total || 0);
      } else {
        setDevices([]);
        setTotal(0);
      }
    } catch {
      setDevices([]);
      setTotal(0);
    }
    setLoading(false);
  }, [query]);

  const categories = [
    { label: "Dental", value: "dental" },
    { label: "Ophthalmic", value: "ophthalmic" },
    { label: "Radiology", value: "radiology" },
    { label: "Anesthesia", value: "anesthesiology" },
    { label: "Cardiovascular", value: "cardiovascular" },
    { label: "General Hospital", value: "general hospital" },
    { label: "Orthopedic", value: "orthopedic" },
    { label: "Clinical Chemistry", value: "clinical chemistry" },
  ];

  return (
    <div style={{ background: "#0B061B", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.08)", padding: "clamp(1.5rem, 4vw, 3rem)", marginTop: "3rem" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <div style={{ width: 10, height: 10, background: "#00FF88", borderRadius: "50%", boxShadow: "0 0 12px #00FF88" }} />
        <span style={{ color: "#00FF88", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Live API</span>
      </div>
      <h3 style={{ color: "#fff", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 900, letterSpacing: "-0.03em", margin: "0 0 0.5rem" }}>{heading}</h3>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>{subtitle}</p>

      {/* Category Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => { setQuery(cat.value); }}
            style={{
              padding: "0.4rem 0.9rem", borderRadius: "100px", border: "1px solid",
              borderColor: query === cat.value ? "#FF4800" : "rgba(255,255,255,0.12)",
              background: query === cat.value ? "rgba(255,72,0,0.15)" : "rgba(255,255,255,0.04)",
              color: query === cat.value ? "#FF4800" : "rgba(255,255,255,0.6)",
              fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              cursor: "pointer", transition: "all 0.2s",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && search()}
          placeholder="Search FDA device database..."
          style={{
            flex: 1, padding: "0.75rem 1rem", background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem",
            color: "#fff", fontSize: "0.9rem", outline: "none",
          }}
        />
        <button
          onClick={search}
          disabled={loading}
          style={{
            padding: "0.75rem 1.5rem", background: "#FF4800", border: "none",
            borderRadius: "0.75rem", color: "#fff", fontSize: "0.8rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
            opacity: loading ? 0.6 : 1, transition: "opacity 0.2s",
          }}
        >
          {loading ? "..." : "Search"}
        </button>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {searched && (
          <motion.div
            key={query + total}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {total > 0 && (
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginBottom: "1rem" }}>
                Found <span style={{ color: "#FF4800", fontWeight: 700 }}>{total.toLocaleString()}</span> FDA-cleared devices — showing latest 8
              </p>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem" }}>
              {devices.map((d, i) => (
                <motion.div
                  key={d.k_number || i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "1rem", padding: "1rem", transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,72,0,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <span style={{ color: "#FF4800", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", background: "rgba(255,72,0,0.1)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                      {d.k_number}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem" }}>
                      {d.decision_date ? new Date(d.decision_date).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "—"}
                    </span>
                  </div>
                  <h4 style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.3, margin: "0 0 0.4rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {d.device_name || "Unknown Device"}
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", margin: 0 }}>
                    {d.applicant || "—"}
                  </p>
                  <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", background: "rgba(255,255,255,0.05)", padding: "0.15rem 0.4rem", borderRadius: "4px" }}>
                      {d.advisory_committee_description || d.product_code}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {devices.length === 0 && !loading && (
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textAlign: "center", padding: "2rem 0" }}>
                No devices found. Try a different category or search term.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!searched && (
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", textAlign: "center", padding: "1.5rem 0" }}>
          Select a category or type a keyword, then press Search to query the FDA database in real time.
        </p>
      )}

      <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.6rem", marginTop: "1rem", textAlign: "center" }}>
        Data sourced from openFDA (api.fda.gov) • U.S. Food & Drug Administration • Updated in real time
      </p>
    </div>
  );
}
