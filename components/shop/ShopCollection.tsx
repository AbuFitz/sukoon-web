"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import type { VariantInfo } from "@/lib/shopify";

const INK  = "#252820";
const TEXT = "#4f534a";
const SAGE = "#45543d";

function ProductCard({
  product,
  variantInfo,
  priority = false,
}: {
  product: typeof products[number];
  variantInfo?: VariantInfo;
  priority?: boolean;
}) {
  const { addToCart, loading } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const variantId = variantInfo?.variantId;
  const availableForSale = variantInfo?.availableForSale ?? true;

  const handleAdd = async () => {
    if (!variantId || !availableForSale || loading || justAdded) return;
    await addToCart(variantId, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column",
        backgroundColor: "#faf8f3",
        border: "1px solid rgba(53,65,47,0.12)",
        transition: "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease",
        transform: hovered ? "translateY(-4px)" : "none",
        borderColor: hovered ? "rgba(53,65,47,0.24)" : "rgba(53,65,47,0.12)",
        boxShadow: hovered ? "0 18px 40px rgba(39,47,35,0.07)" : "none",
      }}
    >
      {/* Image */}
      <a
        href={`/products/${product.slug}`}
        style={{ display: "block", position: "relative", overflow: "hidden", backgroundColor: "#f4f0e8" }}
        tabIndex={-1}
        aria-hidden
      >
        {product.tag && (
          <span style={{
            position: "absolute", top: "1rem", left: "1rem", zIndex: 2,
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#FFFFFF", backgroundColor: INK,
            padding: "0.3rem 0.7rem",
          }}>
            {product.tag}
          </span>
        )}
        <div style={{ position: "relative", aspectRatio: "4 / 5" }}>
          <Image
            src={product.src}
            alt={product.name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            style={{
              objectFit: "cover",
              transition: "transform 500ms cubic-bezier(0.2,0.7,0.2,1)",
              transform: hovered ? "scale(1.025)" : "scale(1)",
            }}
          />
        </div>
      </a>

      {/* Body */}
      <div style={{ padding: 24, display: "flex", flex: 1, flexDirection: "column" }}>
        <a href={`/products/${product.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(1.375rem, 1.8vw, 1.75rem)",
            letterSpacing: "-0.018em", lineHeight: 1.15,
            color: INK, margin: 0,
          }}>
            {product.name}
          </h2>
        </a>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.6,
          color: TEXT, margin: "0.875rem 0 1.5rem",
        }}>
          {product.description}
        </p>

        {/* Footer */}
        <div style={{ marginTop: "auto" }}>
          <span style={{
            display: "block", marginBottom: "1.125rem",
            fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600,
            color: INK,
          }}>
            {product.price}
          </span>

          {variantId && !availableForSale ? (
            <button
              disabled
              style={{
                width: "100%", minHeight: 50,
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                letterSpacing: "0.11em", textTransform: "uppercase",
                color: "#9a9a90", backgroundColor: "#f0ede8",
                border: "1px solid #ddd9d0",
                cursor: "not-allowed",
              }}
            >
              Out of Stock
            </button>
          ) : variantId ? (
            <button
              onClick={handleAdd}
              disabled={justAdded || loading}
              style={{
                width: "100%", minHeight: 50,
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                letterSpacing: "0.11em", textTransform: "uppercase",
                color: justAdded ? SAGE : "#FFFFFF",
                backgroundColor: justAdded ? "transparent" : SAGE,
                border: `1px solid ${SAGE}`,
                cursor: "pointer",
                transition: "background-color 180ms ease, color 180ms ease",
              }}
              onMouseEnter={e => { if (!justAdded) { (e.currentTarget as HTMLElement).style.backgroundColor = "#2d3628"; (e.currentTarget as HTMLElement).style.borderColor = "#2d3628"; } }}
              onMouseLeave={e => { if (!justAdded) { (e.currentTarget as HTMLElement).style.backgroundColor = SAGE; (e.currentTarget as HTMLElement).style.borderColor = SAGE; } }}
            >
              {justAdded ? "Added ✓" : "Add to Bag"}
            </button>
          ) : (
            <a
              href={`/products/${product.slug}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "100%", minHeight: 50,
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                letterSpacing: "0.11em", textTransform: "uppercase",
                color: "#FFFFFF", backgroundColor: SAGE,
                border: `1px solid ${SAGE}`, textDecoration: "none",
              }}
            >
              View Product
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const FILTERS = ["All Products"] as const;
type Filter = typeof FILTERS[number];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export function ShopCollection({ variantIds = {} }: { variantIds?: Record<string, VariantInfo> }) {
  const [filter] = useState<Filter>("All Products");
  const [sort, setSort] = useState("featured");

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, ""));
    if (sort === "price-desc") return parseFloat(b.price.replace(/[^0-9.]/g, "")) - parseFloat(a.price.replace(/[^0-9.]/g, ""));
    return 0;
  });

  return (
    <section aria-label="Product collection" style={{ backgroundColor: "#FFFFFF", padding: "64px 0 104px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(2rem, 5vw, 3.5rem)" }}>

        {/* Controls */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem", marginBottom: 48,
        }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: "2rem" }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                style={{
                  position: "relative",
                  padding: "8px 0",
                  background: "transparent", border: 0,
                  fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                  color: filter === f ? INK : TEXT,
                  cursor: "pointer",
                  fontWeight: filter === f ? 500 : 400,
                }}
              >
                {f}
                {filter === f && (
                  <span style={{
                    position: "absolute", left: 0, right: 0, bottom: 0,
                    height: 1, backgroundColor: INK,
                  }} />
                )}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: TEXT }}>
              Sort by:
            </span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.875rem",
                color: INK, background: "transparent",
                border: 0, outline: "none", cursor: "pointer",
                appearance: "none", WebkitAppearance: "none",
                paddingRight: "1rem",
              }}
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 28 }}
        >
          {sorted.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              variantInfo={variantIds[p.slug]}
              priority={i === 0}
            />
          ))}
        </div>

        {/* Footer meta */}
        <div style={{
          marginTop: 64, paddingTop: "1.5rem",
          borderTop: "1px solid rgba(53,65,47,0.1)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "0.75rem",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: TEXT, margin: 0 }}>
            {products.length} products
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: TEXT, margin: 0 }}>
            Free UK delivery on orders over £50
          </p>
        </div>
      </div>
    </section>
  );
}
