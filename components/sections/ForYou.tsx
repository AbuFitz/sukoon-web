"use client";

const cards = [
  {
    eyebrow: "For the tight-style wearer",
    body: "Braids, weaves, ponytails, cornrows — daily tension at the hairline is cumulative and quiet. The thinning it causes has been documented for decades. The products for it have not.",
  },
  {
    eyebrow: "For the minimalist",
    body: "One bottle. Sixty seconds. No ten-step routine. No separate hairline product. The Daily Solace Fluid is the whole thing.",
  },
  {
    eyebrow: "For the conscious buyer",
    body: "Four ingredients. UK Halal Certified. Made in Britain. Nothing in this formula is there by accident or to pad the label.",
  },
];

export function ForYou() {
  return (
    <section
      aria-label="Who this is for"
      style={{
        backgroundColor: "#2C2A1F",
        padding: "clamp(4rem, 9vw, 7rem) clamp(2rem, 7vw, 7rem)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.01em",
            color: "#F7F1E4",
          }}>
            Finally — something made<br />with you in mind.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1px", backgroundColor: "rgba(251,248,243,0.1)" }}>
          {cards.map((c) => (
            <div key={c.eyebrow} style={{
              backgroundColor: "#2C2A1F",
              padding: "clamp(2rem, 4vw, 2.75rem) clamp(1.5rem, 3vw, 2.25rem)",
            }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#98A47D", marginBottom: "1.25rem",
              }}>
                {c.eyebrow}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                lineHeight: 1.85, color: "rgba(251,248,243,0.65)",
              }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "clamp(2.5rem, 5vw, 3.5rem)",
          display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center",
        }}>
          <a href="/shop" style={{
            display: "inline-flex", alignItems: "center", gap: "0.625rem",
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#2C2A1F", textDecoration: "none",
            backgroundColor: "#F7F1E4",
            padding: "1rem 1.875rem",
            transition: "background 0.3s ease",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#98A47D"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F7F1E4"; }}
          >
            Shop The Daily Solace Fluid
          </a>
          <a href="/about" style={{
            fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
            color: "rgba(251,248,243,0.55)", textDecoration: "underline", textUnderlineOffset: "3px",
          }}>
            Read the story
          </a>
        </div>
      </div>
    </section>
  );
}
