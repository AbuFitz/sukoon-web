const ingredients = [
  {
    number: "01",
    name: "Olive Squalane",
    latin: "Squalane",
    percent: "80%",
    description: "Skin already knows this molecule. A dry oil that disappears in under sixty seconds — never settles, never blocks a pore.",
    swatch: "#E8D4AE",
    fg: "#3F4A36",
  },
  {
    number: "02",
    name: "Vitamin B3",
    latin: "Myristyl Nicotinate",
    percent: "14.9%",
    description: "Strengthens what friction weakens. The barrier on your face. The follicles along your hairline. Both, at once.",
    swatch: "#98A47D",
    fg: "#2C2A1F",
  },
  {
    number: "03",
    name: "Black Seed Oil",
    latin: "Nigella Sativa",
    percent: "2%",
    description: "Refined until the sharp scent is gone. The active remains. Purifies. Settles inflammation at the root.",
    swatch: "#3F4A36",
    fg: "#E8D4AE",
  },
  {
    number: "04",
    name: "Vitamin E",
    latin: "Tocopherol",
    percent: "3%",
    description: "Keeps every botanical oil in this bottle honest. Protects against oxidation. Quietly does the most.",
    swatch: "#D9A356",
    fg: "#2C2A1F",
  },
  {
    number: "05",
    name: "Vanilla Extract",
    latin: "Vanilla Planifolia",
    percent: "0.1%",
    description: "A soft, comforting finish. Neutralises herbal undertones without synthetic fragrance. All-day wear, zero irritation.",
    swatch: "#F7F1E4",
    fg: "#2C2A1F",
  },
];

export function IngredientsGrid() {
  return (
    <section id="ingredients" style={{ backgroundColor: "#2C2A1F" }}>

      {/* Header */}
      <div style={{
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem) 0",
        maxWidth: "1320px", margin: "0 auto",
      }}>
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1.5rem",
          paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
          borderBottom: "1px solid rgba(232,212,174,0.12)",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
              marginBottom: "1rem",
            }}>
              The Formula
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.05,
              color: "#F7F1E4", margin: 0,
            }}>
              Five ingredients.<br />Nothing extra.
            </h2>
          </div>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.8,
            color: "rgba(247,241,228,0.4)", maxWidth: "340px", margin: 0,
          }}>
            Every component earns its place. No fillers, no water, no padding the formula with things that don&rsquo;t work.
          </p>
        </div>
      </div>

      {/* Desktop — all 5 in one row */}
      <div className="hidden md:grid" style={{
        gridTemplateColumns: "repeat(5, 1fr)",
        maxWidth: "1320px", margin: "0 auto",
        padding: "0 clamp(1.5rem, 6vw, 5rem) clamp(4rem, 8vw, 7rem)",
        gap: "0",
      }}>
        {ingredients.map((ing, i) => (
          <div key={ing.name} style={{
            padding: "clamp(1.75rem, 3vw, 2.5rem) clamp(1.25rem, 2vw, 2rem)",
            paddingLeft: i === 0 ? "0" : undefined,
            paddingRight: i === ingredients.length - 1 ? "0" : undefined,
            borderRight: i < ingredients.length - 1 ? "1px solid rgba(232,212,174,0.12)" : "none",
            display: "flex", flexDirection: "column", gap: "1.25rem",
            marginTop: "clamp(2rem, 4vw, 3.5rem)",
          }}>
            {/* Swatch + number */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                backgroundColor: ing.swatch,
                border: "1px solid rgba(255,255,255,0.08)",
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "0.75rem",
                color: "rgba(247,241,228,0.2)", lineHeight: 1,
              }}>
                {ing.number}
              </span>
            </div>

            {/* Name */}
            <div>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                fontWeight: 400, color: "#F7F1E4", margin: "0 0 0.25rem", lineHeight: 1.2,
              }}>
                {ing.name}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "rgba(247,241,228,0.3)", margin: 0,
              }}>
                {ing.latin}
              </p>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.75,
              color: "rgba(247,241,228,0.45)", margin: 0,
            }}>
              {ing.description}
            </p>

            {/* Percent */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
              letterSpacing: "0.1em", color: "#98A47D", margin: "auto 0 0",
            }}>
              {ing.percent} of formula
            </p>
          </div>
        ))}
      </div>

      {/* Mobile — stacked rows */}
      <div className="flex flex-col md:hidden" style={{
        padding: "0 clamp(1.5rem, 6vw, 2.5rem) clamp(3.5rem, 8vw, 5rem)",
      }}>
        {ingredients.map((ing, i) => (
          <div key={ing.name} style={{
            display: "grid", gridTemplateColumns: "auto 1fr",
            gap: "1.25rem", alignItems: "flex-start",
            padding: "1.75rem 0",
            borderBottom: i < ingredients.length - 1 ? "1px solid rgba(232,212,174,0.1)" : "none",
            marginTop: i === 0 ? "2rem" : "0",
          }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", paddingTop: "2px" }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                backgroundColor: ing.swatch, flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "0.6875rem",
                color: "rgba(247,241,228,0.2)",
              }}>
                {ing.number}
              </span>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "1.1875rem",
                fontWeight: 400, color: "#F7F1E4", margin: "0 0 0.25rem", lineHeight: 1.2,
              }}>
                {ing.name}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "rgba(247,241,228,0.3)", margin: "0 0 0.75rem",
              }}>
                {ing.latin} · {ing.percent}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7,
                color: "rgba(247,241,228,0.45)", margin: 0,
              }}>
                {ing.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
