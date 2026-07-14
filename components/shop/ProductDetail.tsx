"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";

type Props = {
  handle: string;
  title: string;
  size: string;
  price: string;
  description: string;
  imageSrc: string;
  tag: string;
  variantId?: string;
};

function RelatedCard({ product }: { product: typeof products[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`/products/${product.slug}`}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "relative", aspectRatio: "3 / 4",
        backgroundColor: "#ede9e0", overflow: "hidden", marginBottom: "1rem",
      }}>
        <Image
          src={product.src} alt={product.name} fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{
            objectFit: "cover",
            transition: "transform 700ms cubic-bezier(0.2,0.7,0.2,1)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
      </div>
      <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.25rem", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#292b25", margin: "0 0 0.25rem" }}>
        {product.name}
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500, color: "#292b25", margin: 0 }}>
        {product.price}
      </p>
    </a>
  );
}

export function ProductDetail({ handle, title, size, price, description, imageSrc, tag, variantId }: Props) {
  const { addToCart, loading } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const related = products.filter(p => p.slug !== handle).slice(0, 2);

  const handleAdd = async () => {
    if (!variantId || loading || justAdded) return;
    await addToCart(variantId, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2200);
  };

  const handleBuyNow = async () => {
    if (!variantId || loading) return;
    const url = await addToCart(variantId, qty);
    if (url) window.location.href = url;
  };

  return (
    <div style={{ backgroundColor: "#faf8f4" }}>
      {/* Main grid */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(2rem, 4vw, 4rem) clamp(2rem, 5vw, 5rem)" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "clamp(2.5rem, 5vw, 6rem)", alignItems: "start" }}
        >
          {/* ── Image ── */}
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ position: "relative", aspectRatio: "4 / 5", backgroundColor: "#ede9e0", overflow: "hidden" }}>
              {tag && (
                <span style={{
                  position: "absolute", top: "1.25rem", left: "1.25rem", zIndex: 2,
                  fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "#FFFFFF", backgroundColor: "#292b25",
                  padding: "0.35rem 0.8rem",
                }}>
                  {tag}
                </span>
              )}
              <Image
                src={imageSrc} alt={title} fill priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* ── Details ── */}
          <div style={{ paddingTop: "0.25rem" }}>
            {/* Size */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#9a9f95", margin: "0 0 0.875rem",
            }}>
              {size}
            </p>

            {/* Title */}
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.75rem, 4vw, 4rem)",
              lineHeight: 0.97, letterSpacing: "-0.03em",
              color: "#292b25", margin: "0 0 1.25rem",
            }}>
              {title}
            </h1>

            {/* Price */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1.5rem", fontWeight: 600,
              color: "#292b25", margin: "0 0 1.75rem",
            }}>
              {price}
            </p>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75,
              color: "#64685f", margin: "0 0 2.25rem", maxWidth: 420,
            }}>
              {description}
            </p>

            <div style={{ height: 1, backgroundColor: "#e8e4da", margin: "0 0 2rem" }} />

            {/* Qty + Add to bag */}
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "stretch" }}>
              <div style={{
                display: "flex", alignItems: "center",
                border: "1px solid rgba(41,43,37,0.25)", flexShrink: 0,
              }}>
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{ width: 44, height: 52, background: "none", border: "none", cursor: "pointer", color: "#292b25", fontSize: "1.125rem" }}
                >−</button>
                <span style={{ width: 32, textAlign: "center", fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#292b25" }}>{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty(q => q + 1)}
                  style={{ width: 44, height: 52, background: "none", border: "none", cursor: "pointer", color: "#292b25", fontSize: "1.125rem" }}
                >+</button>
              </div>

              <button
                onClick={handleAdd}
                disabled={!variantId || loading || justAdded}
                style={{
                  flex: 1, height: 52,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: justAdded ? "#292b25" : "#FFFFFF",
                  backgroundColor: justAdded ? "transparent" : "#292b25",
                  border: "1px solid #292b25",
                  cursor: !variantId ? "not-allowed" : "pointer",
                  opacity: !variantId ? 0.5 : 1,
                  transition: "background-color 200ms ease, color 200ms ease",
                }}
              >
                {justAdded ? "Added ✓" : loading ? "Adding…" : !variantId ? "Unavailable" : "Add to Bag"}
              </button>
            </div>

            {/* Buy Now */}
            {variantId && (
              <button
                onClick={handleBuyNow}
                disabled={loading}
                style={{
                  width: "100%", height: 52,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#FFFFFF", backgroundColor: "#3F4A36",
                  border: "1px solid #3F4A36",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background-color 200ms ease",
                  marginBottom: "1.5rem",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2e3829"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
              >
                Buy Now
              </button>
            )}

            {/* Simple trust line */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.75rem",
              color: "#9a9f95", letterSpacing: "0.02em",
            }}>
              Free UK delivery over £40 &nbsp;·&nbsp; 30-day returns &nbsp;·&nbsp; Made in the UK
            </p>
          </div>
        </div>
      </div>

      {/* You may also like */}
      {related.length > 0 && (
        <div style={{
          borderTop: "1px solid #e8e4da",
          padding: "clamp(3rem, 5vw, 5rem) clamp(2rem, 5vw, 5rem)",
          backgroundColor: "#faf8f4",
        }}>
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "2rem" }}>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 400,
                fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
                lineHeight: 1.05, letterSpacing: "-0.025em",
                color: "#292b25", margin: 0,
              }}>
                You may also like
              </h2>
              <a
                href="/shop"
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#64685f", textDecoration: "none",
                  borderBottom: "1px solid rgba(100,104,95,0.4)", paddingBottom: 2,
                }}
              >
                View all
              </a>
            </div>
            <div className="grid grid-cols-2" style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              {related.map(p => <RelatedCard key={p.slug} product={p} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
