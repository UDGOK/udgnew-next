"use client";

const items = [
  "Medical Office Construction",
  "Dental Office Build-Out",
  "Oral Surgery Centers",
  "Medical Gas Installation",
  "Design-Build",
  "Virtual Design & Construction",
  "Tenant Improvements",
  "Oklahoma · Texas",
];

export default function MarqueeBanner() {
  const tripled = [...items, ...items, ...items];
  return (
    <div
      style={{
        background: "#FF4800",
        padding: "1.25rem 0",
        overflow: "hidden",
        borderBottom: "4px solid #0B061B",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, #FF4800, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, #FF4800, transparent)", zIndex: 2, pointerEvents: "none" }} />

      <div className="marquee-track">
        {tripled.map((item, i) => (
          <span
            key={i}
            style={{
              flexShrink: 0,
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#fff",
              padding: "0 2.5rem",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {item}
            <span style={{ width: "5px", height: "5px", background: "rgba(255,255,255,0.6)", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
