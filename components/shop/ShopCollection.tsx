"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import type { VariantInfo } from "@/lib/shopify";

const TEXT   = "#0D0F10";
const MUTED  = "#8A9296";

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
    <article style={{ display: "flex", flexDirection: "column" }}>
      <a
        href={`/products/${product.slug}`}
        style={{ display: "block", position: "relative", textDecoration: "none", marginBottom: "1.125rem" }}
      >
        {product.tag && (
          <span className="badge" style={{
            position: "absolute", top: "0.75rem", left: "0.75rem", zIndex: 2,
            backgroundColor: TEXT, color: "#FFFFFF",
          }}>
            {product.tag}
          </span>
        )}
        <div style={{
          position: "relative",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          borderRadius: "var(--radius-2xl)",
          backgroundColor: "#ECEFF1",
        }}>
          <Image
            src={product.src}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 90vw, 40vw"
            className="img-hover"
            style={{ objectFit: "cover" }}
          />
        </div>
      </a>

      <a href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.75rem" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "1rem", color: TEXT, margin: 0,
          }}>
            {product.name}
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1rem", color: TEXT, margin: 0, whiteSpace: "nowrap" }}>
            {product.price}
          </p>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, margin: "0.125rem 0 1.125rem" }}>
          {product.size}
        </p>
      </a>

      {variantId && !availableForSale ? (
        <button className="btn" disabled style={{
          width: "100%", marginTop: "auto",
          backgroundColor: "#ECEFF1", color: MUTED, border: "1px solid #DCE1E3", cursor: "default",
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
            backgroundColor: justAdded ? "#ECEFF1" : "#0D0F10",
            color: justAdded ? "#0D0F10" : "#FFFFFF",
            borderColor: justAdded ? "#DCE1E3" : "#0D0F10",
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
  return (
    <div style={{ padding: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
      <div
        className="grid grid-cols-2"
        style={{ gap: "clamp(1.25rem, 3vw, 2rem)", maxWidth: 640 }}
      >
        {products.map((p, i) => (
          <ProductCard
            key={p.slug}
            product={p}
            variantInfo={variantIds[p.slug]}
            priority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}
