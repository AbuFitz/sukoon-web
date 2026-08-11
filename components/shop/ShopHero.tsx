import { products } from "@/lib/products";

export function ShopHero() {
  return (
    <section className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)" }}>
      <div className="card" style={{
        padding: "clamp(1.75rem, 3.5vw, 2.5rem)",
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        gap: "1.5rem", flexWrap: "wrap",
      }}>
        <div>
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            letterSpacing: "-0.03em", lineHeight: 1.05, color: "#0D0F10", margin: "0 0 0.625rem",
          }}>
            Shop Sukoon
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#4A5256", margin: 0, maxWidth: 420,
          }}>
            One formula, two sizes — face in the morning, hairline whenever it needs it.
          </p>
        </div>
        <span className="badge">{products.length} products</span>
      </div>
    </section>
  );
}
