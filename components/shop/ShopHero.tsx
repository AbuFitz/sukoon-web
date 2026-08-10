import { DropMark } from "@/components/ui/DropMark";
import { products } from "@/lib/products";

export function ShopHero() {
  return (
    <section style={{
      backgroundColor: "#FFFFFF",
      padding: "clamp(2.25rem, 4vw, 3.25rem) clamp(1.25rem, 4vw, 3rem) clamp(1.5rem, 2.5vw, 2rem)",
    }}>
      <div style={{
        maxWidth: 1440, margin: "0 auto",
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        gap: "1.5rem", flexWrap: "wrap",
      }}>
        <div>
          <DropMark size={9} color="#111111" style={{ marginBottom: "0.875rem" }} />
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 600,
            fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
            letterSpacing: "-0.04em", lineHeight: 1.0, color: "#111111", margin: "0 0 0.625rem",
          }}>
            Shop Sukoon
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#636360", margin: 0, maxWidth: 420,
          }}>
            The full Daily Solace range — face, hairline, and the bundle that does both.
          </p>
        </div>
        <span className="ghost-num" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
          {String(products.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
