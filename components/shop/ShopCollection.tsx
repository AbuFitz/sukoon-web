"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

function ProductCard({
  product,
  variantId,
  priority = false,
}: {
  product: typeof products[number];
  variantId?: string;
  priority?: boolean;
}) {
  const { addToCart, loading } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAdd = async () => {
    if (!variantId || loading || justAdded) return;
    await addToCart(variantId, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Image */}
      <a
        href={`/products/${product.slug}`}
        style={{ display: "block", position: "relative", overflow: "hidden", backgroundColor: "#f0ece4" }}
        tabIndex={-1}
        aria-hidden
      >
        {product.tag && (
          <span style={{
            position: "absolute", top: "1rem", left: "1rem", zIndex: 2,
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#FFFFFF", backgroundColor: "#292b25",
            padding: "0.3rem 0.7rem",
          }}>
            {product.tag}
          </span>
        )}
        <div style={{ position: "relative", aspectRatio: "3 / 4" }}>
          <Image
            src={product.src}
            alt={product.name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            style={{
              objectFit: "cover",
              transition: "transform 600ms cubic-bezier(0.2,0.7,0.2,1)",
              transform: hovered ? "scale(1.03)" : "scale(1)",
            }}
          />
        </div>
      </a>

      {/* Info */}
      <div style={{ paddingTop: "1.375rem", display: "flex", flexDirection: "column", gap: "0.25rem", flex: 1 }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: "#8a9482", margin: 0,
        }}>
          {product.size}
        </p>
        <a href={`/products/${product.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
          <p style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "1.4375rem", letterSpacing: "-0.018em", lineHeight: 1.1,
            color: "#292b25", margin: "0.3rem 0 0",
          }}>
            {product.name}
          </p>
        </a>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem",
          color: "#64685f", margin: "0.5rem 0 0",
        }}>
          {product.price}
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7,
          color: "#78836e", margin: "0.75rem 0 0", maxWidth: 340,
        }}>
          {product.description}
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.375rem", flexWrap: "wrap" }}>
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
                padding: "0 1.5rem", height: 46, cursor: "pointer",
                transition: "background-color 220ms ease, color 220ms ease, transform 200ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { if (!justAdded) { (e.currentTarget as HTMLElement).style.backgroundColor = "#34402f"; (e.currentTarget as HTMLElement).style.borderColor = "#34402f"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; } }}
              onMouseLeave={e => { if (!justAdded) { (e.currentTarget as HTMLElement).style.backgroundColor = "#45543d"; (e.currentTarget as HTMLElement).style.borderColor = "#45543d"; } (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              {justAdded ? "Added ✓" : "Add to Bag"}
            </button>
          ) : (
            <a
              href={`/products/${product.slug}`}
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#FFFFFF", backgroundColor: "#45543d",
                border: "1px solid #45543d",
                padding: "0 1.5rem", height: 46,
                display: "inline-flex", alignItems: "center",
                textDecoration: "none",
              }}
            >
              Shop Now
            </a>
          )}
          <a
            href={`/products/${product.slug}`}
            style={{
              fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#292b25", textDecoration: "none",
              border: "1px solid rgba(41,43,37,0.3)",
              padding: "0 1.5rem", height: 46, display: "inline-flex", alignItems: "center",
              transition: "border-color 200ms ease, transform 200ms ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#292b25"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(41,43,37,0.3)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >
            View Details
          </a>
        </div>
      </div>
    </article>
  );
}

export function ShopCollection({ variantIds = {} }: { variantIds?: Record<string, string> }) {
  return (
    <section aria-label="Product collection" style={{ backgroundColor: "#faf8f4" }}>
      {/* Page header */}
      <div style={{
        borderBottom: "1px solid #e8e4da",
        padding: "clamp(3rem, 5vw, 4.5rem) clamp(2rem, 5vw, 5rem) clamp(2rem, 3.5vw, 3rem)",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#8a9482", margin: "0 0 0.875rem",
            }}>
              Shop All
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              lineHeight: 0.97, letterSpacing: "-0.032em",
              color: "#292b25", margin: 0,
            }}>
              The Daily Solace<br />
              <em style={{ fontStyle: "italic" }}>Collection</em>
            </h1>
          </div>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7,
            color: "#64685f", maxWidth: 360, margin: 0,
          }}>
            One formula. Five ingredients. Two rituals — face in the morning, hairline at night.
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) clamp(2rem, 5vw, 5rem)" }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              variantId={variantIds[p.slug]}
              priority={i === 0}
            />
          ))}
        </div>

        {/* Product count / divider line */}
        <div style={{
          marginTop: "clamp(3rem, 5vw, 5rem)",
          paddingTop: "2rem",
          borderTop: "1px solid #e8e4da",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.75rem",
            color: "#9a9f95", margin: 0, letterSpacing: "0.02em",
          }}>
            {products.length} products
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.75rem",
            color: "#9a9f95", margin: 0,
          }}>
            Free UK delivery over £40
          </p>
        </div>
      </div>
    </section>
  );
}
