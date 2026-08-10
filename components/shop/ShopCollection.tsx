"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import type { VariantInfo } from "@/lib/shopify";

const TEXT   = "#111111";
const MUTED  = "#9A9A9A";

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
    <article className="card" style={{ padding: "clamp(1rem, 2vw, 1.25rem)", display: "flex", flexDirection: "column" }}>
      <a
        href={`/products/${product.slug}`}
        style={{ display: "block", position: "relative", textDecoration: "none", marginBottom: "1rem" }}
      >
        {product.tag && (
          <span className="badge" style={{
            position: "absolute", top: "0.75rem", left: "0.75rem", zIndex: 2,
            backgroundColor: TEXT, color: "#FFFFFF",
          }}>
            {product.tag}
          </span>
        )}
        <div className="card-sm" style={{
          position: "relative",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          backgroundColor: "#EFEFEF",
        }}>
          <Image
            src={product.src}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 31vw"
            className="img-hover"
            style={{ objectFit: "cover" }}
          />
        </div>
      </a>

      <a href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.75rem" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "0.9375rem", color: TEXT, margin: 0,
          }}>
            {product.name}
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9375rem", color: TEXT, margin: 0, whiteSpace: "nowrap" }}>
            {product.price}
          </p>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, margin: "0.125rem 0 1rem" }}>
          {product.size}
        </p>
      </a>

      {variantId && !availableForSale ? (
        <button className="btn" disabled style={{
          width: "100%", marginTop: "auto",
          backgroundColor: "#EFEFEF", color: MUTED, border: "1px solid #E2E2E2", cursor: "default",
        }}>
          Sold out
        </button>
      ) : (
        <button
          onClick={handleAdd}
          disabled={!variantId || loading || justAdded}
          aria-label={`Add ${product.name} to bag`}
          className="btn btn-dark"
          style={{
            width: "100%", marginTop: "auto",
            backgroundColor: justAdded ? "#EFEFEF" : "#111111",
            color: justAdded ? "#111111" : "#FFFFFF",
            borderColor: justAdded ? "#E2E2E2" : "#111111",
            opacity: !variantId ? 0.45 : 1,
            cursor: !variantId ? "default" : loading ? "wait" : "pointer",
          }}
        >
          {justAdded ? "Added" : loading ? "Adding…" : "Add to Bag"}
        </button>
      )}
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
    <section className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)" }}>
      {/* Controls */}
      <div className="card" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: "1rem", flexWrap: "wrap", marginBottom: "1.25rem",
        padding: "0.875rem 1.5rem",
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
              fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600,
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
        className="grid grid-cols-2 lg:grid-cols-3"
        style={{ gap: "clamp(1rem, 2vw, 1.25rem)" }}
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
    </section>
  );
}
