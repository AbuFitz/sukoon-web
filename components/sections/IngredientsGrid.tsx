const ingredients = [
  {
    name: "Black Seed",
    latin: "Nigella Sativa",
    description: "Revered for its ability to balance and nourish the skin. A powerful antioxidant that supports clarity and skin resilience.",
    bg: "#2A2F1E", fg: "#9BA584", symbol: "١",
  },
  {
    name: "Argan Oil",
    latin: "Argania Spinosa",
    description: "Cold-pressed from Moroccan kernels. Rich in essential fatty acids and vitamin E to nourish, soften and restore elasticity.",
    bg: "#BFA882", fg: "#3D2B14", symbol: "٢",
  },
  {
    name: "Rosehip",
    latin: "Rosa Canina",
    description: "Wild-harvested and gently cold-pressed. Supports skin renewal and brightens the look of dull skin.",
    bg: "#8C3D32", fg: "#F5E4DC", symbol: "٣",
  },
  {
    name: "Chamomile",
    latin: "Matricaria Chamomilla",
    description: "Steam-distilled for calm and comfort. Helps soothe sensitivity and support even skin tone.",
    bg: "#B5A96A", fg: "#2A2710", symbol: "٤",
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
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9BA584", marginBottom: "1rem" }}>
            The Formula
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
            fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.1,
            color: "#2A2F1E",
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
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: "#2A2F1E", marginBottom: "0.625rem", letterSpacing: "0.01em" }}>
                  {ing.name}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.75, color: "#6B7451" }}>
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
