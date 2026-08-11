"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { productImageMap, type FeaturedHandle, type FeaturedProduct } from "@/lib/homepage";

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
    <article style={{ display: "flex", flexDirection: "column" }}>
      <Link href={`/products/${product.handle}`} style={{ textDecoration: "none", display: "block" }}>
        <div style={{
          position: "relative",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          borderRadius: "var(--radius-2xl)",
          backgroundColor: "#ECEFF1",
          marginBottom: "1.125rem",
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
          fontSize: "1rem", color: "#0D0F10", margin: "0 0 0.25rem",
        }}>
          {product.title}
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "1.0625rem",
          letterSpacing: "-0.01em", color: "#0D0F10", margin: "0 0 1rem",
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
          backgroundColor: added ? "#ECEFF1" : "#0D0F10",
          color: added ? "#0D0F10" : "#FFFFFF",
          borderColor: added ? "#DCE1E3" : "#0D0F10",
          opacity: !product.variantId ? 0.45 : 1,
          cursor: !product.variantId ? "default" : adding ? "wait" : "pointer",
        }}
      >
        {added ? "Added" : adding ? "Adding…" : "Add to Bag"}
      </button>
    </article>
  );
}

export function CollectionSection({ products }: { products: FeaturedProduct[] }) {
  return (
    <section id="collection" className="container" style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)",
          letterSpacing: "-0.02em", color: "#0D0F10", margin: 0,
        }}>
          The Daily Solace Fluid
        </h2>
      </div>

      <div className="product-row">
        {products.map(p => <ProductCard key={p.handle} product={p} />)}
      </div>

      <style>{`
        .product-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(0.875rem, 3vw, 2rem);
          max-width: 640px;
        }
      `}</style>
    </section>
  );
}
