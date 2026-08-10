"use client";

export function Marquee({
  items,
  speed = 32,
  dark = true,
}: {
  items: string[];
  speed?: number;
  dark?: boolean;
}) {
  const track = [...items, ...items, ...items, ...items];

  return (
    <div
      aria-hidden="true"
      style={{
        overflow: "hidden",
        backgroundColor: dark ? "#111111" : "#F5F5F3",
        borderTop: dark ? "none" : "1px solid #E3E3DF",
        borderBottom: dark ? "none" : "1px solid #E3E3DF",
        padding: "0.875rem 0",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          width: "max-content",
          animation: `sukoon-marquee ${speed}s linear infinite`,
        }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: dark ? "#F5F5F3" : "#111111",
              whiteSpace: "nowrap",
              padding: "0 1.75rem",
            }}
          >
            {item}
            <span style={{ marginLeft: "1.75rem", color: dark ? "#4A4A48" : "#D4D4CF" }} aria-hidden>
              &#9670;
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes sukoon-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
