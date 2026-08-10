import { ingredients } from "@/lib/homepage";

export function IngredientsSection() {
  return (
    <section id="ingredients" className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div style={{ marginBottom: "1.25rem", maxWidth: 560 }}>
        <span className="eyebrow">Formula</span>
        <h2 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)",
          letterSpacing: "-0.02em", color: "#111111", margin: "0.5rem 0 0", lineHeight: 1.1,
        }}>
          Five ingredients. Nothing hidden.
        </h2>
      </div>

      <div className="ingredient-grid">
        {ingredients.map((ing, i) => (
          <div key={ing.name} className="card" style={{
            padding: "clamp(1.5rem, 3vw, 2rem)",
            display: "flex", flexDirection: "column", gap: "0.75rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="badge">{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9375rem", color: "#111111" }}>
                {ing.percent}
              </span>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "1.0625rem", color: "#111111", margin: "0 0 0.125rem",
              }}>
                {ing.name}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#9A9A9A", margin: 0,
              }}>
                {ing.latin}
              </p>
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem",
              lineHeight: 1.55, color: "#5C5C5C", margin: 0,
            }}>
              {ing.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .ingredient-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 2vw, 1.25rem);
        }
        @media (max-width: 900px) {
          .ingredient-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .ingredient-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
