"use client";

import Image from "next/image";
import Link from "next/link";
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
    <article className="product-card">
      <Link href={`/products/${product.handle}`} style={{ textDecoration: "none", display: "block" }}>
        <div style={{
          position: "relative",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          backgroundColor: "#F4F4F2",
          borderRadius: 14,
          marginBottom: "0.875rem",
        }}>
          <Image
            src={src}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 80vw, 33vw"
            className="img-hover"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.75rem" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 600,
            fontSize: "0.9375rem", color: "#111111", margin: 0,
          }}>
            {product.title}
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9375rem",
            color: "#111111", margin: 0, whiteSpace: "nowrap",
          }}>
            {product.price}
          </p>
        </div>
      </Link>

      <button
        onClick={handleAdd}
        disabled={!product.variantId || adding || added}
        aria-label={added ? "Added to bag" : `Add ${product.title} to bag`}
        className="btn btn-dark"
        style={{
          width: "100%", marginTop: "0.75rem",
          backgroundColor: added ? "#F4F4F2" : "#111111",
          color: added ? "#111111" : "#FFFFFF",
          borderColor: added ? "#D0D0CB" : "#111111",
          opacity: !product.variantId ? 0.45 : 1,
          cursor: !product.variantId ? "default" : adding ? "wait" : "pointer",
        }}
      >
        {added ? "Added" : adding ? "Adding…" : "Add to Bag"}
      </button>
    </article>
  );
}

export function FeaturedProductsSection({ products }: { products: FeaturedProduct[] }) {
  return (
    <section className="stack-panel stack-inner" style={{ backgroundColor: "#FFFFFF", paddingBottom: "clamp(3rem, 5vw, 4.5rem)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 3rem)" }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          gap: "1rem", marginBottom: "1.75rem",
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 600,
            fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
            letterSpacing: "-0.02em", color: "#111111", margin: 0,
          }}>
            The Collection
          </h2>
          <a href="/shop" style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600,
            color: "#111111", textDecoration: "none",
          }}>
            Shop all →
          </a>
        </div>

        {/* Grid (desktop) / horizontal scroll (mobile) */}
        <div className="product-row">
          {products.map(p => <ProductCard key={p.handle} product={p} />)}
        </div>
      </div>

      <style>{`
        .product-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 767px) {
          .product-row {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            margin: 0 -1.25rem;
            padding: 0 1.25rem;
            -webkit-overflow-scrolling: touch;
          }
          .product-row::-webkit-scrollbar { display: none; }
          .product-card {
            flex: 0 0 78%;
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
}
