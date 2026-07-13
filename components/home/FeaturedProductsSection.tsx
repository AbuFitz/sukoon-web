"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { productImageMap, type FeaturedHandle } from "@/lib/homepage";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export type FeaturedProduct = {
  handle: string;
  title: string;
  price: string;
  variantId?: string;
};

function ProductCard({ product }: { product: FeaturedProduct }) {
  const { addToCart, loading } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const variantId = product.variantId;
  const imgSrc = productImageMap[product.handle as FeaturedHandle] ?? "/images/products/daily-solace-30ml-placeholder.svg";

  const handleAdd = async () => {
    if (!variantId || loading || justAdded) return;
    await addToCart(variantId, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Frameless image — sits directly on section bg */}
      <a
        href={`/products/${product.handle}`}
        style={{ display: "block", position: "relative", aspectRatio: "3 / 4", overflow: "hidden" }}
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={imgSrc}
          alt={product.title}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
          style={{
            objectFit: "cover",
            transition: "transform 600ms cubic-bezier(0.2,0.7,0.2,1)",
            transform: hovered ? "scale(1.03)" : "scale(1)",
          }}
        />
      </a>

      {/* Info — clean, no card chrome */}
      <div style={{ paddingTop: "1.375rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <a href={`/products/${product.handle}`} style={{ textDecoration: "none", color: "inherit" }}>
          <p style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "1.4375rem", letterSpacing: "-0.018em", lineHeight: 1.1,
            color: "#292b25", margin: 0,
            transition: "color 200ms ease",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#45543d")}
            onMouseLeave={e => (e.currentTarget.style.color = "#292b25")}
          >
            {product.title}
          </p>
        </a>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem",
          color: "#78836e", margin: 0,
        }}>
          {product.price}
        </p>

        <div style={{ marginTop: "1rem" }}>
          {variantId ? (
            <button
              onClick={handleAdd}
              disabled={justAdded || loading}
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: justAdded ? "#45543d" : "#FFFFFF",
                backgroundColor: justAdded ? "transparent" : "#45543d",
                border: "1px solid #45543d",
                padding: "0 1.5rem", height: 44,
                cursor: "pointer", width: "100%",
                transition: "background-color 220ms ease, color 220ms ease, transform 200ms ease",
              }}
              onMouseEnter={e => { if (!justAdded) { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#34402f"; el.style.borderColor = "#34402f"; el.style.transform = "translateY(-1px)"; } }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; if (!justAdded) { el.style.backgroundColor = "#45543d"; el.style.borderColor = "#45543d"; } el.style.transform = "none"; }}
            >
              {justAdded ? "Added ✓" : "Add to Bag"}
            </button>
          ) : (
            <a
              href={`/products/${product.handle}`}
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#292b25", textDecoration: "none",
                border: "1px solid rgba(41,43,37,0.3)",
                padding: "0 1.5rem", height: 44,
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "100%",
                transition: "border-color 200ms ease, transform 200ms ease",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#292b25"; el.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(41,43,37,0.3)"; el.style.transform = "none"; }}
            >
              View Product
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProductsSection({ products }: { products: FeaturedProduct[] }) {
  return (
    <section style={{ backgroundColor: "#faf8f4", padding: "clamp(5rem, 9vw, 8rem) 0" }}>
      <div style={{ width: "min(calc(100% - 80px), 1400px)", margin: "0 auto" }}>

        {/* Minimal tagline */}
        <FadeIn direction="up" delay={0.05}>
          <p style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(1.25rem, 1.8vw, 1.625rem)",
            letterSpacing: "-0.01em", fontStyle: "italic",
            color: "#8a9482", margin: "0 0 clamp(3rem, 5vw, 4.5rem)",
          }}>
            Simple rituals. Visible results.
          </p>
        </FadeIn>

        {/* Frameless product grid */}
        <FadeInStagger stagger={0.08} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(2rem, 4vw, 3.5rem)" }}>
            {products.map(p => (
              <FadeInItem key={p.handle}>
                <ProductCard product={p} />
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
