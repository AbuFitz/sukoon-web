const ingredients = [
  {
    number: "01",
    name: "Olive Squalane",
    latin: "Squalane",
    percent: "80%",
    description: "Skin already knows this molecule. A dry oil that disappears in under sixty seconds — never settles on the surface, never blocks a pore.",
    bg: "#E8D4AE", fg: "#3F4A36",
  },
  {
    number: "02",
    name: "Vitamin B3",
    latin: "Myristyl Nicotinate",
    percent: "14.9%",
    description: "Strengthens what friction weakens. The barrier on your face. The follicles along your hairline. Both, at once.",
    bg: "#98A47D", fg: "#2C2A1F",
  },
  {
    number: "03",
    name: "Black Seed Oil",
    latin: "Nigella Sativa",
    percent: "2%",
    description: "Refined until the sharp scent is gone. The active remains. Purifies. Settles inflammation at the root.",
    bg: "#3F4A36", fg: "#E8D4AE",
  },
  {
    number: "04",
    name: "Vitamin E",
    latin: "Tocopherol",
    percent: "3%",
    description: "Keeps every botanical oil in this bottle honest. Protects against oxidation. Quietly does the most.",
    bg: "#D9A356", fg: "#2C2A1F",
  },
  {
    number: "05",
    name: "Vanilla Extract",
    latin: "Vanilla Planifolia",
    percent: "0.1%",
    description: "A soft, comforting finish. Neutralises herbal undertones without synthetic fragrance. All-day wear, zero irritation.",
    bg: "#F7F1E4", fg: "#2C2A1F",
  },
];

export function IngredientsGrid() {
  return (
    <section id="ingredients" style={{
      backgroundColor: "#2C2A1F",
      padding: "clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)",
    }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex", flexDirection: "column", gap: "1rem",
          marginBottom: "clamp(2.5rem, 6vw, 5rem)",
          borderBottom: "1px solid rgba(232,212,174,0.15)",
          paddingBottom: "clamp(2rem, 5vw, 3.5rem)",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
          }}>
            Formula
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.05,
              color: "#F7F1E4", margin: 0,
            }}>
              Five ingredients.<br />Nothing extra.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.75,
              color: "rgba(247,241,228,0.45)", maxWidth: "360px", margin: 0,
            }}>
              Every component earns its place. No fillers, no water, no padding the formula.
            </p>
          </div>
        </div>

        {/* Desktop: horizontal list — numbered rows */}
        <div className="hidden md:block">
          {ingredients.map((ing, i) => (
            <div key={ing.name} style={{
              display: "grid",
              gridTemplateColumns: "3rem 1fr 1fr auto",
              gap: "clamp(1.5rem, 4vw, 3.5rem)",
              alignItems: "center",
              padding: "clamp(1.25rem, 3vw, 2rem) 0",
              borderBottom: "1px solid rgba(232,212,174,0.12)",
            }}>
              {/* Number */}
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                letterSpacing: "0.1em", color: "rgba(247,241,228,0.25)",
              }}>
                {ing.number}
              </span>

              {/* Name + latin */}
              <div>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                  fontWeight: 400, color: "#F7F1E4", margin: "0 0 0.25rem",
                }}>
                  {ing.name}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 500,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(247,241,228,0.35)", margin: 0,
                }}>
                  {ing.latin}
                </p>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.75,
                color: "rgba(247,241,228,0.5)", margin: 0, maxWidth: "380px",
              }}>
                {ing.description}
              </p>

              {/* Percentage swatch */}
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem", flexShrink: 0,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  backgroundColor: ing.bg, flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                  letterSpacing: "0.1em", color: "rgba(247,241,228,0.35)",
                }}>
                  {ing.percent}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: card stack */}
        <div className="flex flex-col md:hidden" style={{ gap: "1px", backgroundColor: "rgba(232,212,174,0.12)" }}>
          {ingredients.map((ing) => (
            <div key={ing.name} style={{
              backgroundColor: "#2C2A1F",
              padding: "1.5rem 0",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              alignItems: "flex-start",
            }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "rgba(247,241,228,0.3)", margin: "0 0 0.375rem",
                }}>
                  {ing.number} · {ing.latin}
                </p>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "1.25rem",
                  fontWeight: 400, color: "#F7F1E4", margin: "0 0 0.625rem",
                }}>
                  {ing.name}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.7,
                  color: "rgba(247,241,228,0.45)", margin: 0,
                }}>
                  {ing.description}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem", flexShrink: 0, paddingTop: "0.25rem" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: ing.bg }} />
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
                  letterSpacing: "0.1em", color: "rgba(247,241,228,0.3)",
                }}>
                  {ing.percent}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
