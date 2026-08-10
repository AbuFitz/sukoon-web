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

function AddButton({
  product, adding, added, onAdd,
}: { product: FeaturedProduct; adding: boolean; added: boolean; onAdd: (e: React.MouseEvent) => void }) {
  return (
    <button
      onClick={onAdd}
      disabled={!product.variantId || adding || added}
      aria-label={added ? "Added to bag" : `Add ${product.title} to bag`}
      className="add-fab"
      style={{
        position: "absolute", bottom: "0.75rem", right: "0.75rem", zIndex: 2,
        width: 40, height: 40, borderRadius: "50%", border: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        backgroundColor: added ? "#FAFAFA" : !product.variantId ? "#B8B8B2" : "#111111",
        color: added ? "#111111" : "#FFFFFF",
        cursor: !product.variantId ? "default" : adding ? "wait" : "pointer",
        boxShadow: "0 6px 18px rgba(17,17,16,0.22)",
        transition: "transform 0.18s ease, background-color 0.18s ease",
      }}
    >
      {added ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
      )}
    </button>
  );
}

function ProductCard({ product, large }: { product: FeaturedProduct; large?: boolean }) {
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
    <article className={`product-card ${large ? "product-card--large" : ""}`}>
      <div style={{ position: "relative" }}>
        <Link href={`/products/${product.handle}`} style={{ textDecoration: "none", display: "block" }}>
          <div className="cut-corner" style={{
            position: "relative",
            aspectRatio: large ? "4 / 5.6" : "4 / 5",
            overflow: "hidden",
            backgroundColor: "#F4F4F2",
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
        </Link>
        <AddButton product={product} adding={adding} added={added} onAdd={handleAdd} />
      </div>

      <Link href={`/products/${product.handle}`} style={{ textDecoration: "none", display: "block" }}>
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
    </article>
  );
}

export function FeaturedProductsSection({ products }: { products: FeaturedProduct[] }) {
  return (
    <section
      className="stack-panel stack-panel--pull-lg stack-inner"
      style={{ backgroundColor: "#FFFFFF", paddingBottom: "clamp(3rem, 5vw, 4.5rem)" }}
    >
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

        {/* Asymmetric: first product runs larger, the other two stack beside it */}
        <div className="product-row">
          {products.map((p, i) => <ProductCard key={p.handle} product={p} large={i === 0} />)}
        </div>
      </div>

      <style>{`
        .product-row {
          display: grid;
          grid-template-columns: 1.35fr 1fr 1fr;
          gap: 18px;
        }
        .add-fab { opacity: 0; transform: scale(0.85); }
        @media (hover: none) {
          .add-fab { opacity: 1; transform: none; }
        }
        .product-card:hover .add-fab,
        .product-card:focus-within .add-fab { opacity: 1; transform: scale(1); }
        @media (max-width: 900px) {
          .product-row {
            grid-template-columns: 1fr 1fr;
          }
          .product-card--large {
            grid-column: 1 / -1;
          }
          .product-card--large .cut-corner {
            aspect-ratio: 16 / 9;
          }
        }
        @media (max-width: 640px) {
          .product-row {
            display: flex;
            grid-template-columns: unset;
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
          .product-card--large {
            grid-column: unset;
          }
          .product-card--large .cut-corner {
            aspect-ratio: 4 / 5;
          }
        }
      `}</style>
    </section>
  );
}
