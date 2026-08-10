import { ingredients } from "@/lib/homepage";

export function IngredientsSection() {
  return (
    <section id="ingredients" className="container" style={{ paddingTop: "clamp(3rem, 5vw, 4.5rem)", paddingBottom: "clamp(3rem, 5vw, 4.5rem)" }}>
      <div style={{ marginBottom: "1.75rem", maxWidth: 560 }}>
        <span className="eyebrow">Formula Breakdown</span>
        <h2 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
          letterSpacing: "-0.025em", color: "#000000", margin: "0.5rem 0 0",
        }}>
          Five ingredients. Nothing hidden.
        </h2>
      </div>

      <div className="block" style={{ overflow: "hidden" }}>
        {/* Header row */}
        <div className="ingredient-row ingredient-row--head">
          <span className="tracked-wide" style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, color: "#A3A3A3" }}>%</span>
          <span className="tracked-wide" style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, color: "#A3A3A3" }}>Ingredient</span>
          <span className="tracked-wide" style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, color: "#A3A3A3" }}>Primary Role</span>
        </div>

        {ingredients.map((ing) => (
          <div key={ing.name} className="ingredient-row" style={{ borderTop: "1px solid #E5E5E5" }}>
            <span style={{
              fontFamily: "var(--font-body)", fontWeight: 700,
              fontSize: "1.0625rem", color: "#000000",
            }}>
              {ing.percent}
            </span>

            <div>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "0.9375rem", color: "#000000", margin: 0,
              }}>
                {ing.name}
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem", color: "#A3A3A3", margin: "0.125rem 0 0",
              }}>
                {ing.latin}
              </p>
            </div>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem",
              lineHeight: 1.55, color: "#525252", margin: 0,
            }}>
              {ing.description}
            </p>
          </div>
        ))}

        <style>{`
          .ingredient-row {
            display: grid;
            grid-template-columns: 4.5rem 1fr 1.5fr;
            gap: clamp(1rem, 3vw, 2.5rem);
            align-items: center;
            padding: 1.25rem clamp(1.25rem, 3vw, 2rem);
          }
          .ingredient-row--head {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          @media (max-width: 640px) {
            .ingredient-row {
              grid-template-columns: 2.5rem 1fr;
              grid-template-rows: auto auto;
              row-gap: 0.5rem;
            }
            .ingredient-row--head span:last-child { display: none; }
            .ingredient-row > p:last-child {
              grid-column: 1 / -1;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
