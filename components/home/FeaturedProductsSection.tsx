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
  availableForSale?: boolean;
};

function ProductCard({ product }: { product: FeaturedProduct }) {
  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const src = productImageMap[product.handle as FeaturedHandle]
    ?? "https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=85&fit=crop";

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.variantId || adding || added) return;
    setAdding(true);
    await addToCart(product.variantId, 1);
    setAdding(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <a
      href={`/products/${product.handle}`}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{
        position: "relative",
        aspectRatio: "4 / 5",
        borderRadius: 22,
        overflow: "hidden",
        backgroundColor: "#F0F0EE",
        marginBottom: "1.125rem",
      }}>
        <Image
          src={src}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
      </div>

      {/* Info */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem" }}>
        <div>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 500,
            fontSize: "0.9375rem", color: "#111111",
            margin: "0 0 0.25rem", lineHeight: 1.3,
          }}>
            {product.title}
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem",
            color: "#92928D", margin: 0,
          }}>
            {product.price}
          </p>
        </div>

        {product.variantId && (
          <button
            onClick={handleAdd}
            disabled={adding || added}
            aria-label={added ? "Added to bag" : `Add ${product.title} to bag`}
            style={{
              flexShrink: 0,
              fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
              letterSpacing: "0.04em",
              color: added ? "#676764" : "#111111",
              backgroundColor: "transparent",
              border: `1.5px solid ${added ? "#E3E3DF" : "#111111"}`,
              borderRadius: 10,
              padding: "0.5rem 1rem",
              cursor: adding ? "wait" : "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              if (!added) {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#111111";
                el.style.color = "#FFFFFF";
              }
            }}
            onMouseLeave={e => {
              if (!added) {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.color = "#111111";
              }
            }}
          >
            {added ? "Added ✓" : adding ? "…" : "Add to Bag"}
          </button>
        )}
      </div>
    </a>
  );
}

export function FeaturedProductsSection({ products }: { products: FeaturedProduct[] }) {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "clamp(5rem, 9vw, 8rem) 0" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 3rem)" }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          gap: "1rem", marginBottom: "clamp(2.5rem, 4vw, 3.5rem)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            letterSpacing: "-0.025em", color: "#111111", margin: 0,
          }}>
            The Collection
          </h2>
          <a href="/shop" style={{
            fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 400,
            color: "#92928D", textDecoration: "none",
            borderBottom: "1px solid #E3E3DF", paddingBottom: 2,
            whiteSpace: "nowrap", flexShrink: 0,
            transition: "color 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#111111"; el.style.borderColor = "#111111"; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#92928D"; el.style.borderColor = "#E3E3DF"; }}
          >
            View all
          </a>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          {products.map(p => <ProductCard key={p.handle} product={p} />)}
        </div>
      </div>
    </section>
  );
}
