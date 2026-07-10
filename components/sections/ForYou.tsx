"use client";

const cards = [
  {
    num: "01",
    eyebrow: "For the tight-style wearer",
    body: "Braids, weaves, ponytails, cornrows — daily tension at the hairline is cumulative and quiet. The thinning it causes has been documented for decades. The products for it have not.",
    stat: "Daily tension",
  },
  {
    num: "02",
    eyebrow: "For the minimalist",
    body: "One bottle. Sixty seconds. No ten-step routine. No separate hairline product. The Daily Solace Fluid is the whole thing.",
    stat: "One ritual",
  },
  {
    num: "03",
    eyebrow: "For the conscious buyer",
    body: "Five ingredients. UK Halal Certified. Made in Britain. Nothing in this formula is there by accident or to pad the label.",
    stat: "5 ingredients",
  },
];

export function ForYou() {
  return (
    <section
      aria-label="Who this is for"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)",
        borderTop: "1px solid #E8E2D8",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        {/* Header row */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: "2rem",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(2rem, 4vw, 3rem)",
          borderBottom: "1px solid #E8E2D8",
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
            fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "#2C2A1F", margin: 0, maxWidth: "560px",
          }}>
            Finally — something made with you in mind.
          </h2>
          <a href="/shop" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#FFFFFF", backgroundColor: "#2C2A1F",
            padding: "1rem 1.75rem", textDecoration: "none",
            flexShrink: 0, transition: "background 0.25s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#98A47D"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2C2A1F"; }}
          >
            Shop Now
          </a>
        </div>

        {/* Cards — desktop: 3 col, mobile: stack */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "0", borderLeft: "1px solid #E8E2D8" }}>
          {cards.map((c) => (
            <div key={c.eyebrow} style={{
              padding: "clamp(2rem, 4vw, 2.75rem) clamp(1.75rem, 3vw, 2.5rem)",
              borderRight: "1px solid #E8E2D8",
              borderBottom: "1px solid #E8E2D8",
              display: "flex", flexDirection: "column", gap: "1.25rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "2.25rem",
                  fontWeight: 400, color: "#E8E2D8", lineHeight: 1,
                }}>
                  {c.num}
                </span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#98A47D", backgroundColor: "rgba(152,164,125,0.1)",
                  padding: "0.35rem 0.75rem",
                }}>
                  {c.stat}
                </span>
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase", color: "#2C2A1F",
              }}>
                {c.eyebrow}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                lineHeight: 1.8, color: "#6B6860",
              }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
