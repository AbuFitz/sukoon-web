import { ingredients } from "@/lib/homepage";

export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      className="stack-panel stack-inner"
      style={{ backgroundColor: "#FFFFFF", paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 3rem)" }}>
        {/* Header */}
        <div style={{ marginBottom: "clamp(2.5rem, 5vw, 3.5rem)", maxWidth: 560 }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 600,
            fontSize: "clamp(2rem, 3.6vw, 3rem)",
            letterSpacing: "-0.035em", color: "#111111", margin: "0 0 0.75rem", lineHeight: 1.0,
          }}>
            Five ingredients.
            <br />
            Nothing hidden.
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
            <div key={ing.name} className="ingredient-row" style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "9rem 1fr 1fr",
              gap: "clamp(1.25rem, 3vw, 2.5rem)",
              alignItems: "center",
              padding: "clamp(1.5rem, 3vw, 2.25rem) 0",
              borderBottom: "1px solid #D0D0CB",
              overflow: "hidden",
            }}
            >
              <span aria-hidden className="ghost-num" style={{
                fontSize: "clamp(4.5rem, 7vw, 6.5rem)",
                position: "relative", left: "-0.5rem",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <p style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)", color: "#111111", margin: 0,
                  letterSpacing: "-0.01em",
                }}>
                  {ing.name}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem", color: "#969690", margin: "0.25rem 0 0",
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
              grid-template-columns: 3.5rem 1fr !important;
              grid-template-rows: auto auto;
              row-gap: 0.5rem;
            }
            .ingredient-row .ghost-num {
              font-size: 2.75rem !important;
              left: 0 !important;
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
