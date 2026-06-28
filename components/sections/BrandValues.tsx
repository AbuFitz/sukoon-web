function LeafOutline() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 28c0 0-10-6-10-16 0-6 4.5-10 10-10s10 4 10 10c0 10-10 16-10 16z"/>
      <path d="M16 28V16M16 16C14 13 11 11 8 10M16 16c2-3 5-5 8-6"/>
    </svg>
  );
}
function DropOutline() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4L6 18a10 10 0 1 0 20 0L16 4z"/>
    </svg>
  );
}
function HeartOutline() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 27S4 19 4 11a7 7 0 0 1 12-4.9A7 7 0 0 1 28 11c0 8-12 16-12 16z"/>
    </svg>
  );
}
function BoxOutline() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M27 10L16 4 5 10v12l11 6 11-6V10z"/>
      <polyline points="5,10 16,16 27,10"/>
      <line x1="16" y1="16" x2="16" y2="28"/>
    </svg>
  );
}
function SeedOutline() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="16" cy="16" rx="8" ry="12" transform="rotate(-20 16 16)"/>
      <line x1="16" y1="4" x2="16" y2="28"/>
    </svg>
  );
}

const values = [
  { Icon: LeafOutline,  title: "Plant Derived",         body: "Every ingredient is chosen from the natural world. Nothing synthetic. Nothing unnecessary." },
  { Icon: HeartOutline, title: "Cruelty Free",           body: "Tested on nothing that cannot consent to being tested on. Always." },
  { Icon: DropOutline,  title: "Small Batch",            body: "Made in limited quantities so freshness and attention to detail never becomes routine." },
  { Icon: BoxOutline,   title: "Recyclable Packaging",   body: "Heavy frosted glass. Minimal print. Designed to be kept, refilled, or returned to the earth." },
  { Icon: SeedOutline,  title: "Minimal Ingredients",    body: "We count every ingredient. If it does not earn its place, it is not included." },
];

export function BrandValues() {
  return (
    <section
      aria-label="Brand values"
      style={{
        backgroundColor: "#FBF8F3",
        padding: "clamp(5rem, 12vh, 10rem) clamp(2rem, 6vw, 5rem)",
        borderTop: "1px solid #EAE4D9",
      }}
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

        <div style={{ marginBottom: "clamp(3rem, 6vh, 5rem)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A27E", marginBottom: "1.25rem" }}>
            What We Stand For
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-0.01em", color: "#2E3423", maxWidth: "420px" }}>
            Principles, not promises.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0",
            borderTop: "1px solid #DDD5C8",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        >
          {values.map(({ Icon, title, body }) => (
            <div
              key={title}
              style={{
                padding: "2.5rem 2rem",
                borderRight: "1px solid #DDD5C8",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div style={{ color: "#6B7451" }}>
                <Icon />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  color: "#2E3423",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  lineHeight: 1.8,
                  color: "#6B7451",
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
