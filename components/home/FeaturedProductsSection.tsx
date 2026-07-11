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
      style={{
        background: "#FFFFFF",
        border: `1px solid ${hovered ? "rgba(69,84,61,0.28)" : "rgba(69,84,61,0.14)"}`,
        display: "flex", flexDirection: "column",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 18px 42px rgba(48,55,43,0.07)" : "none",
        transition: "transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease",
      }}
    >
      {/* Image */}
      <a
        href={`/products/${product.handle}`}
        style={{ display: "block", position: "relative", aspectRatio: "1 / 1.12", overflow: "hidden", backgroundColor: "#f0ece2" }}
        tabIndex={-1}
      >
        <Image
          src={imgSrc}
          alt={product.title}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
          style={{
            objectFit: "contain",
            padding: "2rem",
            transition: "transform 500ms cubic-bezier(0.2,0.7,0.2,1)",
            transform: hovered ? "scale(1.025)" : "scale(1)",
          }}
          unoptimized
        />
      </a>

      {/* Info */}
      <div style={{ padding: "1.125rem 1.125rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.3rem", flex: 1 }}>
        <a href={`/products/${product.handle}`} style={{ textDecoration: "none", color: "inherit" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1.0625rem", fontWeight: 500,
            color: "#292b25", lineHeight: 1.3, margin: 0,
          }}>
            {product.title}
          </p>
        </a>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#64685f", margin: 0 }}>
          {product.price}
        </p>

        {variantId ? (
          <button
            onClick={handleAdd}
            disabled={justAdded || loading}
            style={{
              marginTop: "1rem",
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: justAdded ? "#45543d" : "#FFFFFF",
              backgroundColor: justAdded ? "transparent" : "#45543d",
              border: "1px solid #45543d",
              padding: "0.875rem",
              cursor: "pointer",
              transition: "background-color 220ms ease, color 220ms ease, transform 220ms ease",
              width: "100%",
              transform: justAdded ? "none" : undefined,
            }}
            onMouseEnter={e => { if (!justAdded) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
          >
            {justAdded ? "Added ✓" : "Add to Bag"}
          </button>
        ) : (
          <a
            href={`/products/${product.handle}`}
            style={{
              marginTop: "1rem",
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#45543d",
              border: "1px solid rgba(69,84,61,0.55)",
              padding: "0.875rem",
              textDecoration: "none", textAlign: "center",
              display: "block",
              transition: "border-color 220ms ease, transform 220ms ease",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#45543d"; el.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(69,84,61,0.55)"; el.style.transform = "none"; }}
          >
            View Product
          </a>
        )}
      </div>
    </div>
  );
}

export function FeaturedProductsSection({ products }: { products: FeaturedProduct[] }) {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "104px 0", borderTop: "1px solid #eceae2" }}>
      <div style={{ width: "min(calc(100% - 80px), 1400px)", margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: 56, flexWrap: "wrap", gap: "1.5rem",
        }}>
          <FadeIn direction="up" delay={0.05}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.625rem, 4vw, 4.125rem)",
              lineHeight: 0.98, letterSpacing: "-0.03em",
              color: "#292b25", margin: 0,
            }}>
              Simple rituals.<br />Visible results.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.12}>
            <a
              href="/shop"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 400,
                color: "#292b25", textDecoration: "none", letterSpacing: "0.01em",
                borderBottom: "1px solid rgba(41,43,37,0.35)", paddingBottom: 2,
                flexShrink: 0, alignSelf: "flex-end",
                transition: "color 200ms ease, border-color 200ms ease",
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.color = "#45543d"; el.style.borderColor = "#45543d"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.color = "#292b25"; el.style.borderColor = "rgba(41,43,37,0.35)"; }}
            >
              View all products →
            </a>
          </FadeIn>
        </div>

        {/* Grid */}
        <FadeInStagger stagger={0.08} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 28 }}>
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
