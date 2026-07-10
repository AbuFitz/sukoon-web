"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const INK  = "#2C2A1F";
const SAGE = "#98A47D";
const SAND = "#E8D4AE";
const LINEN = "#FBF8F3";

const highlights = [
  "80% Olive Squalane — absorbs in under 60 seconds, never greasy",
  "14.9% Niacinamide — strengthens the barrier, supports even tone",
  "2% Black Seed Oil — settles inflammation at the scalp and hairline",
  "0.1% Vanilla Extract — comforting all-day finish, zero irritation",
  "One bottle. Face in the morning, hairline at night",
];

export function ProductDetailGrid({ variantIds = {} }: { variantIds?: Record<string, string> }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const active = products[activeIdx];
  const { addToCart, loading } = useCart();
  const activeVariantId = variantIds[active.slug];

  const handleAddToBag = async () => {
    if (!activeVariantId) return;
    await addToCart(activeVariantId, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <section aria-label="Product detail" style={{
      backgroundColor: LINEN,
      padding: "clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem) clamp(4rem, 9vw, 7rem)",
    }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{
          gap: "clamp(2.5rem, 7vw, 6rem)", alignItems: "start",
        }}>

          {/* ── Image panel ── */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "relative", aspectRatio: "4 / 5",
              backgroundColor: SAND, overflow: "hidden",
            }}>
              <Image
                src={active.src}
                alt={active.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            {/* Floating tag */}
            {active.tag && (
              <span style={{
                position: "absolute", top: "1.25rem", left: "1.25rem",
                fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#F7F1E4", backgroundColor: INK,
                padding: "0.35rem 0.75rem",
              }}>
                {active.tag}
              </span>
            )}
            {/* Size thumbs */}
            <div style={{ display: "flex", gap: "0.625rem", marginTop: "0.875rem" }}>
              {products.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => setActiveIdx(i)}
                  aria-label={p.name}
                  style={{
                    width: 52, height: 52, padding: 0, cursor: "pointer", border: "none",
                    outline: i === activeIdx ? `2px solid ${INK}` : `1px solid ${SAND}`,
                    outlineOffset: i === activeIdx ? "2px" : "0",
                    backgroundColor: SAND, overflow: "hidden", flexShrink: 0,
                    transition: "outline 0.2s",
                    position: "relative",
                  }}
                >
                  <Image src={p.src} alt={p.name} fill style={{ objectFit: "cover" }} sizes="52px" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Details panel ── */}
          <div style={{ paddingTop: "0.5rem" }}>
            {/* Breadcrumb */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase", color: SAGE,
              marginBottom: "1rem",
            }}>
              Daily Solace Collection
            </p>

            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.1,
              color: INK, marginBottom: "0.5rem",
            }}>
              {active.name}
            </h2>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1.375rem", fontWeight: 600,
              color: INK, marginBottom: "0.5rem",
            }}>
              {active.price}
            </p>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.8125rem",
              color: SAGE, marginBottom: "2rem",
            }}>
              {active.size}
            </p>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
              color: "#6B6860", marginBottom: "2.25rem", maxWidth: "440px",
            }}>
              {active.description}
            </p>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: SAND, marginBottom: "2rem" }} />

            {/* Product selector */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", color: INK,
              marginBottom: "0.875rem",
            }}>
              Choose your size
            </p>
            <div role="radiogroup" aria-label="Size" style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
              {products.map((p, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={p.slug}
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => { setActiveIdx(i); setQty(1); }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      width: "100%", textAlign: "left", cursor: "pointer",
                      padding: "0.875rem 1rem",
                      border: `1.5px solid ${isActive ? INK : SAND}`,
                      backgroundColor: isActive ? "#FFFFFF" : "transparent",
                      transition: "border-color 0.2s ease, background-color 0.2s ease",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span aria-hidden style={{
                        width: 15, height: 15, borderRadius: "50%",
                        border: `1.5px solid ${isActive ? INK : SAND}`,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        {isActive && <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: INK }} />}
                      </span>
                      <span>
                        <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: INK }}>
                          {p.size}
                        </span>
                        {p.tag && (
                          <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: SAGE, marginTop: "1px" }}>
                            {p.tag}
                          </span>
                        )}
                      </span>
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: INK }}>
                      {p.price}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Qty + Add to bag row */}
            <div style={{ display: "flex", gap: "0.875rem", marginBottom: "2rem", alignItems: "stretch" }}>
              {/* Qty stepper */}
              <div style={{
                display: "flex", alignItems: "center",
                border: `1.5px solid ${SAND}`, flexShrink: 0,
              }}>
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{ width: 40, height: 48, background: "none", border: "none", cursor: "pointer", color: INK, fontSize: "1.125rem" }}
                >
                  −
                </button>
                <span style={{ width: 32, textAlign: "center", fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: INK }}>{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty(q => q + 1)}
                  style={{ width: 40, height: 48, background: "none", border: "none", cursor: "pointer", color: INK, fontSize: "1.125rem" }}
                >
                  +
                </button>
              </div>

              {/* Add to bag */}
              <button
                onClick={handleAddToBag}
                disabled={!activeVariantId || loading || justAdded}
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "#F7F1E4", border: "none", cursor: !activeVariantId ? "not-allowed" : "pointer",
                  backgroundColor: justAdded ? "#3F4A36" : INK,
                  transition: "background-color 0.25s", opacity: !activeVariantId ? 0.5 : 1,
                }}
                onMouseEnter={e => { if (!justAdded && activeVariantId) (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
                onMouseLeave={e => { if (!justAdded) (e.currentTarget as HTMLElement).style.backgroundColor = INK; }}
              >
                {justAdded ? "✓ Added" : loading ? "Adding…" : !activeVariantId ? "Unavailable" : "Add to Bag"}
              </button>
            </div>

            {/* Highlights */}
            <div style={{ borderTop: `1px solid ${SAND}`, paddingTop: "1.5rem" }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase", color: INK,
                marginBottom: "1rem",
              }}>
                What&apos;s inside
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {highlights.map((h) => (
                  <li key={h} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.625rem",
                    fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.65, color: "#6B6860",
                  }}>
                    <span aria-hidden style={{ color: SAGE, lineHeight: 1.4, flexShrink: 0, fontWeight: 600 }}>—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust line */}
            <div style={{
              marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${SAND}`,
              display: "flex", gap: "1.5rem", flexWrap: "wrap",
            }}>
              {["Free UK delivery over £40", "30-day returns", "UK Halal Certified"].map(t => (
                <span key={t} style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#6B6860",
                  display: "flex", alignItems: "center", gap: "0.375rem",
                }}>
                  <span aria-hidden style={{ color: SAGE, fontSize: "0.75rem" }}>✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
