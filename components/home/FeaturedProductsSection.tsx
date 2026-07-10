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

function ProductCard({ product }: { product: FeaturedProduct }) {
  const { addToCart, loading } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [imgHover, setImgHover] = useState(false);
  const unavailable = !product.variantId;
  const imgSrc = productImageMap[product.handle as FeaturedHandle] ?? "/images/products/daily-solace-30ml-placeholder.svg";

  const handleAdd = async () => {
    if (unavailable || loading || justAdded) return;
    await addToCart(product.variantId!, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid rgba(63,76,56,0.12)",
      display: "flex", flexDirection: "column",
    }}>
      {/* Image */}
      <a
        href={`/products/${product.handle}`}
        style={{ display: "block", position: "relative", aspectRatio: "1 / 1.08", overflow: "hidden", backgroundColor: "#f4f0e8" }}
        onMouseEnter={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
      >
        <Image
          src={imgSrc}
          alt={product.title}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
          style={{
            objectFit: "contain",
            padding: "2rem",
            transition: "transform 500ms ease",
            transform: imgHover ? "scale(1.025)" : "scale(1)",
          }}
          unoptimized
        />
      </a>

      {/* Info */}
      <div style={{ padding: "1.375rem 1.375rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
        <a
          href={`/products/${product.handle}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500,
            color: "#292b25", lineHeight: 1.35, margin: 0,
          }}>
            {product.title}
          </p>
        </a>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem",
          color: "#64685f", margin: 0,
        }}>
          {product.price}
        </p>

        <button
          onClick={handleAdd}
          disabled={unavailable || justAdded}
          style={{
            marginTop: "0.75rem",
            fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
            letterSpacing: "0.06em", textTransform: "uppercase",
            color: justAdded ? "#3F4A36" : "#FFFFFF",
            backgroundColor: justAdded ? "transparent" : "#3F4A36",
            border: "1px solid #3F4A36",
            padding: "0.8125rem",
            cursor: unavailable ? "not-allowed" : "pointer",
            opacity: unavailable ? 0.45 : 1,
            transition: "background 180ms ease, color 180ms ease",
            width: "100%",
          }}
        >
          {justAdded ? "Added ✓" : unavailable ? "Unavailable" : "Add to Bag"}
        </button>
      </div>
    </div>
  );
}

export function FeaturedProductsSection({ products }: { products: FeaturedProduct[] }) {
  return (
    <section style={{ backgroundColor: "#faf8f3", padding: "86px 0 104px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(2rem, 5vw, 3.5rem)" }}>

        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: 48, flexWrap: "wrap", gap: "1.5rem",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#78836e", marginBottom: "0.75rem",
            }}>
              Shop Essentials
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.5rem, 3.8vw, 4rem)",
              lineHeight: 0.98, letterSpacing: "-0.025em",
              color: "#292b25", margin: 0,
            }}>
              Simple rituals. Visible results.
            </h2>
          </div>

          <a
            href="/shop"
            style={{
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
              color: "#292b25", textDecoration: "none", letterSpacing: "0.02em",
              borderBottom: "1px solid currentColor", paddingBottom: 2,
              flexShrink: 0, alignSelf: "flex-end",
              transition: "color 180ms ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#3F4A36"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#292b25"; }}
          >
            View all products →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 28 }}>
          {products.map(p => <ProductCard key={p.handle} product={p} />)}
        </div>

      </div>
    </section>
  );
}
