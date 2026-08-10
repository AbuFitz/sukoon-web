import { ingredients } from "@/lib/homepage";

function Cell({ ing }: { ing: (typeof ingredients)[number] }) {
  return (
    <div style={{
      padding: "clamp(1.5rem, 3vw, 2.25rem)",
      display: "flex", alignItems: "center", gap: "clamp(1.25rem, 3vw, 2rem)",
    }}>
      <span style={{
        fontFamily: "var(--font-body)", fontWeight: 700,
        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
        letterSpacing: "-0.03em", color: "#111111", flexShrink: 0,
      }}>
        {ing.percent}
      </span>
      <div>
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "0.9375rem", color: "#111111", margin: "0 0 0.125rem",
        }}>
          {ing.name}
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.8125rem",
          lineHeight: 1.45, color: "#5C5C5C", margin: 0,
        }}>
          {ing.description}
        </p>
      </div>
    </div>
  );
}

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

      <div className="card formula-bento">
        {ingredients.map(ing => <Cell key={ing.name} ing={ing} />)}
      </div>

      <style>{`
        .formula-bento {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .formula-bento > div:nth-child(1) { border-right: 1px solid #E2E2E2; }
        .formula-bento > div:nth-child(3) { border-top: 1px solid #E2E2E2; border-right: 1px solid #E2E2E2; }
        .formula-bento > div:nth-child(4) { border-top: 1px solid #E2E2E2; }
        .formula-bento > div:nth-child(5) { border-top: 1px solid #E2E2E2; grid-column: 1 / -1; }
        @media (max-width: 640px) {
          .formula-bento { grid-template-columns: 1fr; }
          .formula-bento > div { border-right: none !important; border-top: none; }
          .formula-bento > div:nth-child(n + 2) { border-top: 1px solid #E2E2E2 !important; }
        }
      `}</style>
    </section>
  );
}
