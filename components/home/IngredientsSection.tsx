"use client";

import { ingredients } from "@/lib/homepage";

export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      style={{ backgroundColor: "#F5F5F3", padding: "clamp(5rem, 9vw, 8rem) 0" }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 3rem)" }}>
        {/* Header */}
        <div style={{ marginBottom: "clamp(3rem, 5vw, 4.5rem)", maxWidth: 600 }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>The Formula</p>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            letterSpacing: "-0.025em", color: "#111111", margin: "0 0 1rem",
          }}>
            Five ingredients.<br />Nothing hidden.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.7, color: "#676764", margin: 0,
          }}>
            Every ingredient earns its place. No water. No fillers. No bullshit.
          </p>
        </div>

        {/* Ingredient list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {ingredients.map((ing, i) => (
            <div key={ing.name} style={{
              display: "grid",
              gridTemplateColumns: "3rem 1fr 1fr",
              gap: "clamp(1.5rem, 3vw, 3rem)",
              alignItems: "start",
              padding: "2rem 0",
              borderTop: i === 0 ? "1px solid #E3E3DF" : undefined,
              borderBottom: "1px solid #E3E3DF",
            }}
            className="ingredient-row"
            >
              {/* Number */}
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "0.75rem", letterSpacing: "0.1em",
                color: "#D4D4CF", paddingTop: "0.25rem",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Name + latin */}
              <div>
                <p style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "#111111", margin: "0 0 0.25rem",
                }}>
                  {ing.name}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontStyle: "italic",
                  fontSize: "0.8125rem", color: "#92928D", margin: "0 0 0",
                }}>
                  {ing.latin}
                </p>
              </div>

              {/* Description + percent */}
              <div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                  lineHeight: 1.65, color: "#676764", margin: "0 0 0.5rem",
                }}>
                  {ing.description}
                </p>
                <span style={{
                  fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.75rem",
                  letterSpacing: "0.08em", color: "#D4D4CF",
                }}>
                  {ing.percent}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked style */}
        <style>{`
          @media (max-width: 767px) {
            .ingredient-row {
              grid-template-columns: 2rem 1fr !important;
              grid-template-rows: auto auto;
            }
            .ingredient-row > div:last-child {
              grid-column: 2;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
