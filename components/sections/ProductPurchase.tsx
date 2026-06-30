"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const INK  = "#2C2A1F";
const SAGE = "#6B7B5C";
const LINE = "#E8D4AE";

const hero = products[0];

const highlights = [
  "80% Olive Squalane — lightweight, sinks in under 60 seconds",
  "14.9% Niacinamide — supports the skin barrier, helps even tone",
  "2% Black Seed Oil — calms the scalp where tight styles cause friction",
  "One bottle, two rituals: face in the morning, hairline at night",
  "100% waterless oil nectar — never greasy, on skin or scalp",
];

export function ProductPurchase() {
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addToBag } = useCart();

  const handleAddToBag = () => {
    addToBag(hero.slug, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <section id="product" aria-label="Shop The Daily Solace Fluid" style={{
      backgroundColor: "#FBF8F3",
      padding: "clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
    }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{
        maxWidth: "1320px", margin: "0 auto", gap: "clamp(2.5rem, 6vw, 5rem)", alignItems: "start",
      }}>
        <div style={{
          position: "relative", aspectRatio: "4 / 5", backgroundColor: "#E8D4AE",
          maxWidth: "560px",
        }}>
          <Image src={hero.src} alt={hero.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          <span style={{
            position: "absolute", top: "1rem", left: "1rem",
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: INK, backgroundColor: "#F7F1E4", padding: "0.3rem 0.625rem",
          }}>
            {hero.tag}
          </span>
        </div>

        <div>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase", color: SAGE, marginBottom: "1rem",
          }}>
            Shop
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem, 3.5vw, 2.25rem)",
            fontWeight: 400, letterSpacing: "-0.015em", color: INK, marginBottom: "0.625rem",
          }}>
            {hero.name}
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.25rem", fontWeight: 600, color: INK, marginBottom: "1.75rem" }}>
            {hero.price} <span style={{ fontSize: "0.875rem", fontWeight: 400, color: SAGE }}>/ {hero.size}</span>
          </p>

          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75, color: SAGE, marginBottom: "2rem", maxWidth: "440px" }}>
            {hero.description}
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {highlights.map((h) => (
              <li key={h} style={{
                display: "flex", alignItems: "flex-start", gap: "0.625rem",
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.6, color: SAGE,
              }}>
                <span aria-hidden style={{ color: INK, lineHeight: 1.4 }}>—</span>
                {h}
              </li>
            ))}
          </ul>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, color: INK,
            letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.875rem",
          }}>
            Quantity
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", border: `1.5px solid ${LINE}` }}>
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty(q => Math.max(1, q - 1))}
                style={{ width: 42, height: 42, background: "none", border: "none", cursor: "pointer", color: INK, fontSize: "1rem" }}
              >
                −
              </button>
              <span style={{ width: 36, textAlign: "center", fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: INK }}>{qty}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQty(q => q + 1)}
                style={{ width: 42, height: 42, background: "none", border: "none", cursor: "pointer", color: INK, fontSize: "1rem" }}
              >
                +
              </button>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <button
              onClick={handleAddToBag}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#F7F1E4", border: "none", cursor: "pointer",
                backgroundColor: justAdded ? "#3F4A36" : INK, padding: "1.0625rem",
                transition: "background 0.25s",
              }}
              onMouseEnter={e => { if (!justAdded) (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
              onMouseLeave={e => { if (!justAdded) (e.currentTarget as HTMLElement).style.backgroundColor = INK; }}
            >
              {justAdded ? "Added to Bag" : "Add to Bag"}
            </button>
            <a href="/shop" onClick={() => addToBag(hero.slug, qty)} style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: INK, textDecoration: "none",
              border: `1.5px solid ${INK}`, padding: "1.0625rem",
              transition: "background 0.25s, color 0.25s",
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = INK; el.style.color = "#F7F1E4"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = INK; }}
            >
              Buy Now
            </a>
          </div>

          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: SAGE, letterSpacing: "0.02em" }}>
            Free UK shipping · UK Halal Certified
          </p>
        </div>
      </div>
    </section>
  );
}
