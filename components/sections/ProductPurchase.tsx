"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const INK  = "#2C2A1F";
const SAGE = "#98A47D";
const SAND = "#E8D4AE";

const hero = products[0];

const claims = [
  { stat: "80%", desc: "Olive Squalane" },
  { stat: "5", desc: "Ingredients total" },
  { stat: "0%", desc: "Water or fillers" },
];

export function ProductPurchase({ variantId }: { variantId?: string }) {
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart, loading } = useCart();

  const handleAddToBag = async () => {
    if (!variantId) return;
    await addToCart(variantId, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const unavailable = !variantId;

  return (
    <section id="product" aria-label="Shop The Daily Solace Fluid" style={{
      backgroundColor: "#FAFAF8",
      padding: "clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
      borderBottom: "1px solid #E8E2D8",
    }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        {/* Desktop grid */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{
          gap: "clamp(3rem, 7vw, 7rem)", alignItems: "start",
        }}>

          {/* ── Image ── */}
          <div style={{ position: "relative", aspectRatio: "4 / 5", backgroundColor: "#F0E9DA" }}>
            <Image src={hero.src} alt={hero.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
          </div>

          {/* ── Text ── */}
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase", color: SAGE,
              marginBottom: "1.25rem",
            }}>
              Hero Product
            </p>

            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
              fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.1,
              color: INK, marginBottom: "1.5rem",
            }}>
              {hero.name}
            </h2>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.85,
              color: "#6B6860", marginBottom: "2rem", maxWidth: "420px",
            }}>
              {hero.description}
            </p>

            {/* Stat trio */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: `1px solid ${SAND}`, borderLeft: `1px solid ${SAND}`,
              marginBottom: "2.5rem",
            }}>
              {claims.map(c => (
                <div key={c.desc} style={{
                  borderBottom: `1px solid ${SAND}`, borderRight: `1px solid ${SAND}`,
                  padding: "1.125rem 1rem", textAlign: "center",
                }}>
                  <p style={{
                    fontFamily: "var(--font-display)", fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                    fontWeight: 400, color: INK, lineHeight: 1, marginBottom: "0.375rem",
                  }}>
                    {c.stat}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
                    letterSpacing: "0.1em", textTransform: "uppercase", color: SAGE,
                    lineHeight: 1.4,
                  }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Price + Qty row */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              marginBottom: "1.25rem",
            }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.375rem", fontWeight: 700, color: INK }}>
                {hero.price}
                <span style={{ fontSize: "0.875rem", fontWeight: 400, color: SAGE, marginLeft: "0.5rem" }}>
                  / {hero.size}
                </span>
              </p>
              <div style={{ display: "flex", alignItems: "center", border: `1px solid ${SAND}` }}>
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{ width: 44, height: 44, background: "none", border: "none", cursor: "pointer", color: INK, fontSize: "1.125rem" }}
                >−</button>
                <span style={{ width: 32, textAlign: "center", fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: INK }}>{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty(q => q + 1)}
                  style={{ width: 44, height: 44, background: "none", border: "none", cursor: "pointer", color: INK, fontSize: "1.125rem" }}
                >+</button>
              </div>
            </div>

            <button
              onClick={handleAddToBag}
              disabled={unavailable || loading || justAdded}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "100%", fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#FFFFFF", border: "none", cursor: unavailable ? "not-allowed" : "pointer",
                backgroundColor: justAdded ? "#3F4A36" : INK, padding: "1.125rem",
                transition: "background 0.25s", opacity: unavailable ? 0.5 : 1,
                marginBottom: "1.25rem",
              }}
              onMouseEnter={e => { if (!justAdded && !unavailable) (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
              onMouseLeave={e => { if (!justAdded) (e.currentTarget as HTMLElement).style.backgroundColor = INK; }}
            >
              {justAdded ? "✓ Added to Bag" : loading ? "Adding…" : unavailable ? "Unavailable" : "Add to Bag"}
            </button>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {["Free UK shipping over £40", "30-day returns", "UK Halal Certified"].map(t => (
                <span key={t} style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#9C9589",
                  display: "flex", alignItems: "center", gap: "0.375rem",
                }}>
                  <span style={{ color: SAGE }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
