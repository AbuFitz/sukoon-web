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
  availableForSale?: boolean;
};

function ProductCard({ product, compact = false }: { product: FeaturedProduct; compact?: boolean }) {
  const { addToCart, loading } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const variantId = product.variantId;
  const availableForSale = product.availableForSale ?? true;
  const imgSrc = productImageMap[product.handle as FeaturedHandle] ?? "/images/products/daily-solace-30ml-placeholder.svg";

  const handleAdd = async () => {
    if (!variantId || !availableForSale || loading || justAdded) return;
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
      {/* Image */}
      <a
        href={`/products/${product.handle}`}
        style={{ display: "block", position: "relative", aspectRatio: compact ? "3 / 4" : "3 / 4", overflow: "hidden", backgroundColor: "#f0ede6" }}
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={imgSrc}
          alt={product.title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 70vw"
          style={{
            objectFit: "cover",
            transition: "transform 600ms cubic-bezier(0.2,0.7,0.2,1)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
      </a>

      {/* Info */}
      <div style={{ paddingTop: compact ? "0.875rem" : "1.375rem", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.5rem" }}>
          <a href={`/products/${product.handle}`} style={{ textDecoration: "none", color: "inherit", flex: 1, minWidth: 0 }}>
            <p style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: compact ? "clamp(1rem, 1.3vw, 1.25rem)" : "1.4375rem",
              letterSpacing: "-0.014em", lineHeight: 1.1,
              color: "#292b25", margin: 0,
              transition: "color 200ms ease",
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#45543d")}
              onMouseLeave={e => (e.currentTarget.style.color = "#292b25")}
            >
              {product.title}
            </p>
          </a>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: compact ? "0.8125rem" : "0.9375rem",
            color: "#292b25", fontWeight: 500, flexShrink: 0,
          }}>
            {product.price}
          </span>
        </div>

        <div style={{ marginTop: compact ? "0.75rem" : "1rem" }}>
          {variantId && !availableForSale ? (
            <button
              disabled
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#9a9a90", backgroundColor: "#f0ede8",
                border: "1px solid #ddd9d0",
                padding: "0 1rem", height: compact ? 36 : 44,
                cursor: "not-allowed", width: "100%",
              }}
            >
              Out of Stock
            </button>
          ) : variantId ? (
            <button
              onClick={handleAdd}
              disabled={justAdded || loading}
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: justAdded ? "#45543d" : "#FFFFFF",
                backgroundColor: justAdded ? "transparent" : "#292b25",
                border: "1px solid #292b25",
                padding: "0 1rem", height: compact ? 36 : 44,
                cursor: "pointer", width: "100%",
                transition: "background-color 200ms ease, color 200ms ease",
              }}
              onMouseEnter={e => { if (!justAdded) { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#45543d"; el.style.borderColor = "#45543d"; } }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; if (!justAdded) { el.style.backgroundColor = "#292b25"; el.style.borderColor = "#292b25"; } }}
            >
              {justAdded ? "Added ✓" : "Add to Bag"}
            </button>
          ) : (
            <a
              href={`/products/${product.handle}`}
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#292b25", textDecoration: "none",
                border: "1px solid rgba(41,43,37,0.3)",
                padding: "0 1rem", height: compact ? 36 : 44,
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "100%",
                transition: "border-color 200ms ease, background-color 200ms ease",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#292b25"; el.style.backgroundColor = "#292b25"; el.style.color = "#fff"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(41,43,37,0.3)"; el.style.backgroundColor = "transparent"; el.style.color = "#292b25"; }}
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
    <section style={{ backgroundColor: "#faf8f4", padding: "clamp(3rem, 5vw, 5rem) 0" }}>
      <div style={{ width: "min(calc(100% - 48px), 1400px)", margin: "0 auto" }}>

        {/* Bold editorial header */}
        <FadeIn direction="up" delay={0.05}>
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            borderBottom: "1.5px solid #292b25", paddingBottom: "clamp(0.75rem, 1.5vw, 1rem)",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase", color: "#45543d",
                margin: "0 0 0.5rem",
              }}>
                The Collection
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 400,
                fontSize: "clamp(2rem, 3.2vw, 3.5rem)",
                lineHeight: 0.95, letterSpacing: "-0.024em",
                color: "#292b25", margin: 0,
              }}>
                Simple rituals.<br /><em>Visible results.</em>
              </h2>
            </div>
            <a
              href="/shop"
              className="hidden md:flex"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#292b25", textDecoration: "none",
                borderBottom: "1px solid #292b25", paddingBottom: "2px",
                whiteSpace: "nowrap", alignItems: "center", gap: "0.4rem",
                transition: "color 200ms ease, border-color 200ms ease",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#45543d"; el.style.borderColor = "#45543d"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#292b25"; el.style.borderColor = "#292b25"; }}
            >
              Shop All →
            </a>
          </div>
        </FadeIn>

        {/* Desktop grid — 4 cols, compact */}
        <FadeInStagger stagger={0.07} delay={0.1}>
          <div className="hidden md:grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(1rem, 2vw, 1.75rem)" }}>
            {products.map(p => (
              <FadeInItem key={p.handle}>
                <ProductCard product={p} compact />
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>

        {/* Mobile horizontal scroll */}
        <div className="flex md:hidden" style={{
          overflowX: "auto", scrollSnapType: "x mandatory",
          gap: "1rem", paddingBottom: "1rem",
          marginLeft: "calc(-1 * clamp(1rem, 4vw, 1.5rem))",
          marginRight: "calc(-1 * clamp(1rem, 4vw, 1.5rem))",
          paddingLeft: "clamp(1rem, 4vw, 1.5rem)",
          paddingRight: "clamp(1rem, 4vw, 1.5rem)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}>
          {products.map(p => (
            <div key={p.handle} style={{ flex: "0 0 68vw", maxWidth: 260, scrollSnapAlign: "start" }}>
              <ProductCard product={p} compact />
            </div>
          ))}
          {/* trailing spacer so last card isn't flush edge */}
          <div style={{ flex: "0 0 clamp(1rem, 4vw, 1.5rem)" }} />
        </div>

        {/* Mobile shop all link */}
        <div className="flex md:hidden" style={{ marginTop: "1.5rem" }}>
          <a href="/shop" style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#292b25", textDecoration: "none",
            borderBottom: "1px solid #292b25", paddingBottom: "2px",
          }}>
            Shop All →
          </a>
        </div>
      </div>
    </section>
  );
}
