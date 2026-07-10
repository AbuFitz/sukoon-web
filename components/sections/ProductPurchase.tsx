"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const hero = products[0];

export function ProductPurchase({ variantId }: { variantId?: string }) {
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart, loading } = useCart();

  const unavailable = !variantId;

  const handleAddToBag = async () => {
    if (unavailable) return;
    await addToCart(variantId!, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <section id="product" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "clamp(600px, 80vh, 900px)" }}>

        {/* Image — full bleed left half */}
        <div style={{ position: "relative", minHeight: "clamp(420px, 60vw, 800px)", backgroundColor: "#EDE7DC" }}>
          <Image
            src={hero.src}
            alt={hero.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Details — right half, vertically centred */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(3rem, 6vw, 6rem) clamp(2rem, 6vw, 6rem)",
          borderLeft: "1px solid #EDE7DC",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "1.5rem",
          }}>
            Bestseller
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.1,
            color: "#2C2A1F", marginBottom: "0.625rem",
          }}>
            {hero.name}
          </h2>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1.25rem", fontWeight: 600,
            color: "#2C2A1F", marginBottom: "0.375rem",
          }}>
            {hero.price}
            <span style={{ fontWeight: 400, fontSize: "0.875rem", color: "#8A8275", marginLeft: "0.5rem" }}>
              / {hero.size}
            </span>
          </p>

          <div style={{ height: "1px", backgroundColor: "#EDE7DC", margin: "1.75rem 0" }} />

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.85,
            color: "#6B6860", marginBottom: "2rem",
          }}>
            {hero.description}
          </p>

          {/* Key facts */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem", marginBottom: "2.25rem",
          }}>
            {[
              "5 natural ingredients",
              "Absorbs in under 60s",
              "100% waterless formula",
              "UK Halal Certified",
            ].map(f => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#98A47D", fontSize: "0.75rem", flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#6B6860" }}>{f}</span>
              </div>
            ))}
          </div>

          {/* Qty + Add */}
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid #EDE7DC" }}>
              <button
                aria-label="Decrease"
                onClick={() => setQty(q => Math.max(1, q - 1))}
                style={{ width: 44, height: 52, background: "none", border: "none", cursor: "pointer", color: "#2C2A1F", fontSize: "1.125rem" }}
              >−</button>
              <span style={{ width: 28, textAlign: "center", fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#2C2A1F" }}>{qty}</span>
              <button
                aria-label="Increase"
                onClick={() => setQty(q => q + 1)}
                style={{ width: 44, height: 52, background: "none", border: "none", cursor: "pointer", color: "#2C2A1F", fontSize: "1.125rem" }}
              >+</button>
            </div>
            <button
              onClick={handleAddToBag}
              disabled={unavailable || loading || justAdded}
              style={{
                flex: 1, fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#FFFFFF", border: "none", cursor: unavailable ? "not-allowed" : "pointer",
                backgroundColor: justAdded ? "#3F4A36" : "#2C2A1F",
                transition: "background 0.25s", opacity: unavailable ? 0.5 : 1,
              }}
              onMouseEnter={e => { if (!justAdded && !unavailable) (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
              onMouseLeave={e => { if (!justAdded) (e.currentTarget as HTMLElement).style.backgroundColor = "#2C2A1F"; }}
            >
              {justAdded ? "✓ Added to Bag" : loading ? "Adding…" : unavailable ? "Unavailable" : "Add to Bag"}
            </button>
          </div>

          <a href="/shop" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#2C2A1F", textDecoration: "none",
            border: "1px solid #EDE7DC", padding: "1rem",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2C2A1F"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#EDE7DC"; }}
          >
            See All Sizes & Bundles
          </a>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#8A8275",
            marginTop: "1.25rem", textAlign: "center",
          }}>
            Free UK delivery over £40 · 30-day returns
          </p>
        </div>
      </div>
    </section>
  );
}
