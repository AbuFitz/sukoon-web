import { ingredients } from "@/lib/homepage";

export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      className="stack-panel stack-inner"
      style={{ backgroundColor: "#FFFFFF", paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 3rem)" }}>
        {/* Header */}
        <div style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 500,
            fontSize: "clamp(1.875rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.03em", color: "#111111", margin: "0 0 0.75rem", lineHeight: 1.05,
          }}>
            Five ingredients. Nothing hidden.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.6, color: "#636360", margin: 0,
          }}>
            Every ingredient earns its place. No water. No fillers.
          </p>
        </div>

        {/* Formula index */}
        <div style={{ borderTop: "1px solid #D0D0CB" }}>
          {ingredients.map((ing, i) => (
            <div key={ing.name} style={{
              display: "grid",
              gridTemplateColumns: "3.5rem 1fr 1fr",
              gap: "clamp(1.25rem, 3vw, 2.5rem)",
              alignItems: "baseline",
              padding: "1.375rem 0",
              borderBottom: "1px solid #D0D0CB",
            }}
            className="ingredient-row"
            >
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 600,
                fontSize: "0.9375rem", color: "#969690",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <p style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "1rem", color: "#111111", margin: 0,
                }}>
                  {ing.name}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem", color: "#969690", margin: "0.125rem 0 0",
                }}>
                  {ing.latin} · {ing.percent}
                </p>
              </div>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                lineHeight: 1.5, color: "#636360", margin: 0,
              }}>
                {ing.description}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 640px) {
            .ingredient-row {
              grid-template-columns: 2rem 1fr !important;
              grid-template-rows: auto auto;
              row-gap: 0.5rem;
            }
            .ingredient-row > p:last-child {
              grid-column: 2;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
