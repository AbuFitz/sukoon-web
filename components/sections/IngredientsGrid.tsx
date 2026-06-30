const ingredients = [
  {
    name: "Olive Squalane",
    latin: "80% of formula",
    description: "An ultra-lightweight botanical lipid that mimics skin's natural sebum. Sinks in under 60 seconds — never greasy.",
    bg: "#E8D4AE", fg: "#3F4A36", symbol: "١",
  },
  {
    name: "Vitamin B3",
    latin: "Niacinamide · 14.9%",
    description: "Strengthens the skin barrier, fades post-acne marks, and boosts microcirculation at the hairline root.",
    bg: "#A9BA98", fg: "#2C2A1F", symbol: "٢",
  },
  {
    name: "Black Seed Oil",
    latin: "Nigella Sativa · 2%",
    description: "Deodorized for daily wear. Destroys acne-causing bacteria and calms follicle inflammation at the scalp.",
    bg: "#3F4A36", fg: "#D9A356", symbol: "٣",
  },
  {
    name: "Vitamin E",
    latin: "Tocopherol · 3%",
    description: "Stabilizes the formula and deeply conditions a stressed scalp and skin barrier.",
    bg: "#D9A356", fg: "#2C2A1F", symbol: "٤",
  },
];

export function IngredientsGrid() {
  return (
    <section id="ingredients" style={{
      backgroundColor: "#FBF8F3",
      padding: "clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
      borderTop: "1px solid #E8E1D8",
    }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(2rem, 5vw, 3.5rem)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7B5C", marginBottom: "1rem" }}>
            The Formula
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
            fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.1,
            color: "#2C2A1F",
          }}>
            Four ingredients.<br />Chosen with intention.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1px", backgroundColor: "#E8E1D8" }}>
          {ingredients.map(ing => (
            <div key={ing.name} style={{ backgroundColor: "#FBF8F3" }}>
              <div style={{
                height: "clamp(140px, 20vw, 220px)",
                backgroundColor: ing.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                <span aria-hidden style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  color: ing.fg, opacity: 0.18, lineHeight: 1, userSelect: "none",
                }}>
                  {ing.symbol}
                </span>
                <span style={{
                  position: "absolute", bottom: "0.75rem", left: "1rem",
                  fontFamily: "var(--font-body)", fontSize: "0.4375rem",
                  fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
                  color: ing.fg, opacity: 0.55,
                }}>
                  {ing.latin}
                </span>
              </div>
              <div style={{ padding: "1.25rem 1.25rem 1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: "#2C2A1F", marginBottom: "0.625rem", letterSpacing: "0.01em" }}>
                  {ing.name}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.75, color: "#6B7B5C" }}>
                  {ing.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
