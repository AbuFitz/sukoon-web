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
    <article className="card" style={{ padding: "clamp(1rem, 2vw, 1.25rem)", display: "flex", flexDirection: "column" }}>
      <Link href={`/products/${product.handle}`} style={{ textDecoration: "none", display: "block" }}>
        <div className="card-sm" style={{
          position: "relative",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          backgroundColor: "#EFEFEF",
          marginBottom: "1rem",
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

        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "0.9375rem", color: "#111111", margin: "0 0 0.25rem",
        }}>
          {product.title}
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem",
          color: "#5C5C5C", margin: "0 0 1rem",
        }}>
          {product.price}
        </p>
      </Link>

      <button
        onClick={handleAdd}
        disabled={!product.variantId || adding || added}
        aria-label={added ? "Added to bag" : `Add ${product.title} to bag`}
        className="btn btn-dark"
        style={{
          width: "100%", marginTop: "auto",
          backgroundColor: added ? "#EFEFEF" : "#111111",
          color: added ? "#111111" : "#FFFFFF",
          borderColor: added ? "#E2E2E2" : "#111111",
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
    <section className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div style={{
        display: "flex", alignItems: "baseline", justifyContent: "space-between",
        gap: "1rem", marginBottom: "1.25rem",
      }}>
        <h2 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)",
          letterSpacing: "-0.02em", color: "#111111", margin: 0,
        }}>
          The Collection
        </h2>
        <Link href="/shop" className="badge">Shop all →</Link>
      </div>

      <div className="product-row">
        {products.map(p => <ProductCard key={p.handle} product={p} />)}
      </div>

      <style>{`
        .product-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 2vw, 1.25rem);
        }
        @media (max-width: 640px) {
          .product-row {
            display: flex;
            gap: 0.875rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            margin: 0 -1.25rem;
            padding: 0 1.25rem 0.25rem;
            -webkit-overflow-scrolling: touch;
          }
          .product-row::-webkit-scrollbar { display: none; }
          .product-row > article {
            flex: 0 0 78%;
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
}
