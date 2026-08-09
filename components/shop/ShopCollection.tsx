"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import type { VariantInfo } from "@/lib/shopify";

const TEXT   = "#111111";
const MUTED  = "#92928D";
const BORDER = "#E3E3DF";

const SORT_OPTIONS = [
  { value: "featured",   label: "Featured" },
  { value: "price-asc",  label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

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

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!variantId || !availableForSale || loading || justAdded) return;
    await addToCart(variantId, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      {/* Image */}
      <a
        href={`/products/${product.slug}`}
        style={{ display: "block", position: "relative", textDecoration: "none", marginBottom: "1.125rem" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {product.tag && (
          <span style={{
            position: "absolute", top: "1rem", left: "1rem", zIndex: 2,
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#FFFFFF", backgroundColor: TEXT,
            padding: "0.3rem 0.75rem", borderRadius: 4,
          }}>
            {product.tag}
          </span>
        )}
        <div style={{
          position: "relative",
          aspectRatio: "4 / 5",
          borderRadius: 22,
          overflow: "hidden",
          backgroundColor: "#F0F0EE",
        }}>
          <Image
            src={product.src}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          />
        </div>
      </a>

      {/* Info */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
        <a href={`/products/${product.slug}`} style={{ textDecoration: "none", flex: 1 }}>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 500,
            fontSize: "0.9375rem", color: TEXT,
            margin: "0 0 0.25rem", lineHeight: 1.3,
          }}>
            {product.name}
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, margin: "0 0 0.25rem" }}>
            {product.size}
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500, color: TEXT, margin: 0 }}>
            {product.price}
          </p>
        </a>

        {variantId && availableForSale && (
          <button
            onClick={handleAdd}
            disabled={loading || justAdded}
            aria-label={`Add ${product.name} to bag`}
            style={{
              flexShrink: 0,
              fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
              letterSpacing: "0.04em",
              color: justAdded ? MUTED : TEXT,
              backgroundColor: "transparent",
              border: `1.5px solid ${justAdded ? BORDER : TEXT}`,
              borderRadius: 10, padding: "0.5rem 0.875rem",
              cursor: loading ? "wait" : "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
              marginTop: "0.125rem",
            }}
            onMouseEnter={e => {
              if (!justAdded) {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = TEXT;
                el.style.color = "#FFFFFF";
              }
            }}
            onMouseLeave={e => {
              if (!justAdded) {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.color = TEXT;
              }
            }}
          >
            {justAdded ? "Added ✓" : loading ? "…" : "Add"}
          </button>
        )}

        {variantId && !availableForSale && (
          <span style={{
            flexShrink: 0, fontFamily: "var(--font-body)", fontSize: "0.75rem",
            color: MUTED, marginTop: "0.125rem",
          }}>
            Sold out
          </span>
        )}
      </div>
    </article>
  );
}

export function ShopCollection({ variantIds = {} }: { variantIds?: Record<string, VariantInfo> }) {
  const [sort, setSort] = useState("featured");

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, ""));
    if (sort === "price-desc") return parseFloat(b.price.replace(/[^0-9.]/g, "")) - parseFloat(a.price.replace(/[^0-9.]/g, ""));
    return 0;
  });

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "clamp(3rem, 5vw, 5rem) 0 clamp(5rem, 9vw, 8rem)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 3rem)" }}>
        {/* Controls */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "1rem", flexWrap: "wrap", marginBottom: "clamp(2rem, 3vw, 3rem)",
          paddingBottom: "1rem", borderBottom: `1px solid ${BORDER}`,
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, margin: 0 }}>
            {products.length} products
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <label htmlFor="shop-sort" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED }}>
              Sort:
            </label>
            <select
              id="shop-sort"
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.875rem",
                color: TEXT, background: "transparent",
                border: "none", outline: "none", cursor: "pointer",
              }}
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(2rem, 3vw, 3rem)" }}
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
      </div>
    </section>
  );
}
