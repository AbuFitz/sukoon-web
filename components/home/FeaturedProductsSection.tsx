"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { productImageMap, type FeaturedHandle } from "@/lib/homepage";

export type FeaturedProduct = {
  handle: string;
  title: string;
  price: string;
  variantId?: string;
};

function ProductCard({ product, index }: { product: FeaturedProduct; index: number }) {
  const { addToCart, loading } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [imgHover, setImgHover] = useState(false);
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
      className={index === 1 ? "md:translate-y-[30px]" : undefined}
      style={{ background: "#FFFFFF", border: "1px solid rgba(63,76,56,0.12)", display: "flex", flexDirection: "column" }}
    >
      <a
        href={`/products/${product.handle}`}
        style={{ display: "block", position: "relative", aspectRatio: "1 / 1.05", overflow: "hidden", backgroundColor: "#f4f0e8" }}
        onMouseEnter={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
      >
        <Image
          src={imgSrc}
          alt={product.title}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
          style={{ objectFit: "contain", padding: "2rem", transition: "transform 500ms ease", transform: imgHover ? "scale(1.025)" : "scale(1)" }}
          unoptimized
        />
      </a>

      <div style={{ padding: "18px 18px 20px", display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1 }}>
        <a href={`/products/${product.handle}`} style={{ textDecoration: "none", color: "inherit" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500, color: "#292b25", lineHeight: 1.35, margin: 0 }}>
            {product.title}
          </p>
        </a>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#64685f", margin: 0 }}>{product.price}</p>

        {variantId ? (
          <button
            onClick={handleAdd}
            disabled={justAdded || loading}
            style={{
              marginTop: "0.875rem",
              fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: justAdded ? "#3F4A36" : "#FFFFFF",
              backgroundColor: justAdded ? "transparent" : "#3F4A36",
              border: "1px solid #3F4A36",
              padding: "0.8125rem", cursor: "pointer",
              transition: "background 180ms ease, color 180ms ease",
              width: "100%",
            }}
          >
            {justAdded ? "Added ✓" : "Add to Bag"}
          </button>
        ) : (
          <a
            href={`/products/${product.handle}`}
            style={{
              marginTop: "0.875rem",
              fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "#3F4A36", border: "1px solid rgba(63,76,56,0.35)",
              padding: "0.8125rem", textDecoration: "none", textAlign: "center",
              display: "block", transition: "border-color 180ms ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3F4A36"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(63,76,56,0.35)"; }}
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
    <section style={{ backgroundColor: "#faf8f3", padding: "88px 0 130px" }}>
      <div style={{ width: "min(100% - 80px, 1380px)", margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: "1.5rem" }}>
          <div style={{ position: "relative" }}>
            {/* Oversized watermark word */}
            <span aria-hidden="true" style={{
              position: "absolute",
              left: -8, top: -50,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(90px, 11vw, 172px)",
              color: "rgba(63,76,56,0.032)",
              lineHeight: 1, pointerEvents: "none", userSelect: "none",
              whiteSpace: "nowrap", fontWeight: 400, letterSpacing: "-0.02em",
            }}>
              Ritual
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.625rem, 3.8vw, 3.75rem)",
              lineHeight: 0.98, letterSpacing: "-0.025em",
              color: "#292b25", margin: 0, position: "relative",
            }}>
              Simple rituals. Visible results.
            </h2>
          </div>

          <a
            href="/shop"
            style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 400,
              color: "#292b25", textDecoration: "none", letterSpacing: "0.01em",
              borderBottom: "1px solid currentColor", paddingBottom: 2,
              flexShrink: 0, alignSelf: "flex-end", transition: "color 180ms ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#3F4A36"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#292b25"; }}
          >
            View all products →
          </a>
        </div>

        {/* Grid — index 1 card offsets down on md+ via Tailwind class */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 30, alignItems: "start" }}>
          {products.map((p, i) => <ProductCard key={p.handle} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
