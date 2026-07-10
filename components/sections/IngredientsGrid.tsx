const ingredients = [
  {
    number: "01",
    name: "Olive Squalane",
    latin: "Squalane",
    percent: "80%",
    description: "Skin already knows this molecule. A dry oil that disappears in under sixty seconds — never settles on the surface, never blocks a pore.",
    swatch: "#E8D4AE",
  },
  {
    number: "02",
    name: "Vitamin B3",
    latin: "Myristyl Nicotinate",
    percent: "14.9%",
    description: "Strengthens what friction weakens. The barrier on your face. The follicles along your hairline. Both, at once.",
    swatch: "#98A47D",
  },
  {
    number: "03",
    name: "Black Seed Oil",
    latin: "Nigella Sativa",
    percent: "2%",
    description: "Refined until the sharp scent is gone. The active remains. Purifies. Settles inflammation at the root.",
    swatch: "#3F4A36",
  },
  {
    number: "04",
    name: "Vitamin E",
    latin: "Tocopherol",
    percent: "3%",
    description: "Keeps every botanical oil in this bottle honest. Protects against oxidation. Quietly does the most.",
    swatch: "#D9A356",
  },
  {
    number: "05",
    name: "Vanilla Extract",
    latin: "Vanilla Planifolia",
    percent: "0.1%",
    description: "A soft, comforting finish. Neutralises herbal undertones without synthetic fragrance. All-day wear, zero irritation.",
    swatch: "#F7F1E4",
  },
];

export function IngredientsGrid() {
  return (
    <section id="ingredients" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E8E2D8" }}>

      {/* Colour bar — five swatches */}
      <div style={{ display: "flex", height: "6px" }}>
        {ingredients.map(ing => (
          <div key={ing.name} style={{ flex: 1, backgroundColor: ing.swatch }} />
        ))}
      </div>

      <div style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "2rem", alignItems: "end",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
            borderBottom: "1px solid #E8E2D8",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
                letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
                marginBottom: "1.25rem",
              }}>
                The Formula
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.05,
                color: "#2C2A1F", margin: 0,
              }}>
                Five ingredients.<br />Nothing extra.
              </h2>
            </div>
            <p className="hidden md:block" style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
              color: "#6B6860", maxWidth: "360px", margin: 0, alignSelf: "end",
            }}>
              Every component earns its place. No fillers, no water, no padding the formula with things that don&rsquo;t work.
            </p>
          </div>

          {/* Desktop — numbered rows */}
          <div className="hidden md:block">
            {ingredients.map((ing, i) => (
              <div key={ing.name} style={{
                display: "grid",
                gridTemplateColumns: "3.5rem 1.5fr 2fr 6rem",
                gap: "clamp(2rem, 4vw, 4rem)",
                alignItems: "center",
                padding: "clamp(1.5rem, 3vw, 2.25rem) 0",
                borderBottom: i < ingredients.length - 1 ? "1px solid #E8E2D8" : "none",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "0.875rem",
                  color: "#D0C9BE", lineHeight: 1,
                }}>
                  {ing.number}
                </span>
                <div>
                  <p style={{
                    fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                    fontWeight: 400, color: "#2C2A1F", margin: "0 0 0.25rem",
                    lineHeight: 1.2,
                  }}>
                    {ing.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 500,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "#9C9589", margin: 0,
                  }}>
                    {ing.latin}
                  </p>
                </div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.75,
                  color: "#6B6860", margin: 0,
                }}>
                  {ing.description}
                </p>
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    backgroundColor: ing.swatch, marginLeft: "auto", marginBottom: "0.375rem",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }} />
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                    letterSpacing: "0.1em", color: "#9C9589",
                  }}>
                    {ing.percent}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile — card stack */}
          <div className="flex flex-col md:hidden">
            {ingredients.map((ing, i) => (
              <div key={ing.name} style={{
                display: "grid", gridTemplateColumns: "1fr auto",
                gap: "1.25rem", alignItems: "flex-start",
                padding: "1.75rem 0",
                borderBottom: i < ingredients.length - 1 ? "1px solid #E8E2D8" : "none",
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", color: "#D0C9BE" }}>
                      {ing.number}
                    </span>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
                      letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C9589", margin: 0,
                    }}>
                      {ing.latin}
                    </p>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-display)", fontSize: "1.25rem",
                    fontWeight: 400, color: "#2C2A1F", margin: "0 0 0.625rem", lineHeight: 1.2,
                  }}>
                    {ing.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7,
                    color: "#6B6860", margin: 0,
                  }}>
                    {ing.description}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem", flexShrink: 0 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    backgroundColor: ing.swatch, border: "1px solid rgba(0,0,0,0.06)",
                  }} />
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
                    letterSpacing: "0.1em", color: "#9C9589",
                  }}>
                    {ing.percent}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
