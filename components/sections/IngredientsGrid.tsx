const ingredients = [
  {
    name: "Black Seed",
    latin: "Nigella Sativa",
    description: "Revered for centuries in Islamic medicine. Rich in thymoquinone — potently anti-inflammatory and deeply restorative.",
    bg: "#2A2F1E",
    fg: "#9BA584",
    symbol: "١",
  },
  {
    name: "Argan Oil",
    latin: "Argania Spinosa",
    description: "Cold-pressed from Moroccan kernels. Lightweight, fast-absorbing. Delivers vitamin E and essential fatty acids without heaviness.",
    bg: "#C4A882",
    fg: "#3D2B14",
    symbol: "٢",
  },
  {
    name: "Rosehip",
    latin: "Rosa Canina",
    description: "Wild-harvested and exceptionally rich in vitamin C. Brightens, firms, and works quietly overnight.",
    bg: "#9B4A3A",
    fg: "#F5E8DC",
    symbol: "٣",
  },
  {
    name: "Chamomile",
    latin: "Matricaria Chamomilla",
    description: "The gentlest anti-inflammatory in the formulation. Calms redness and adds warmth to the ritual.",
    bg: "#C8BB88",
    fg: "#2E2B14",
    symbol: "٤",
  },
];

export function IngredientsGrid() {
  return (
    <section
      id="ingredients"
      style={{
        backgroundColor: "#FBF8F3",
        padding: "clamp(3.5rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem)",
        borderTop: "1px solid #E8E1D8",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(2rem, 5vw, 3.5rem)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9BA584", marginBottom: "1rem" }}>
            The Formula
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.875rem, 4vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
              color: "#2A2F1E",
              maxWidth: "480px",
            }}
          >
            Four ingredients. Chosen with intention.
          </h2>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "1px", backgroundColor: "#E8E1D8" }}
        >
          {ingredients.map((ing) => (
            <div key={ing.name} style={{ backgroundColor: "#FBF8F3" }}>
              <div
                style={{
                  height: "clamp(160px, 22vw, 240px)",
                  backgroundColor: ing.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span aria-hidden style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem, 8vw, 7rem)", color: ing.fg, opacity: 0.2, lineHeight: 1, userSelect: "none" }}>
                  {ing.symbol}
                </span>
                <span style={{ position: "absolute", bottom: "0.875rem", left: "1rem", fontFamily: "var(--font-body)", fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: ing.fg, opacity: 0.65 }}>
                  {ing.latin}
                </span>
              </div>
              <div style={{ padding: "1.25rem 1.25rem 1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.5vw, 1.375rem)", fontWeight: 500, color: "#2A2F1E", marginBottom: "0.625rem" }}>
                  {ing.name}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", lineHeight: 1.75, color: "#6B7451" }}>
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
