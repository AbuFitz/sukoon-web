"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const ingredients = [
  { name: "Olive Squalane", pct: "80%",   note: "Absorbs in under 60 seconds — never greasy" },
  { name: "Vitamin B3",     pct: "14.9%", note: "Strengthens the barrier, supports even tone" },
  { name: "Black Seed Oil", pct: "2%",    note: "Settles inflammation at the scalp and hairline" },
  { name: "Vitamin E",      pct: "3%",    note: "Antioxidant protection, keeps the formula stable" },
  { name: "Vanilla Extract",pct: "0.1%",  note: "Comforting finish, zero synthetic fragrance" },
];

const trust = [
  "Free UK delivery over £40",
  "30-day returns",
  "Halal certified",
  "Vegan & cruelty free",
];

type Props = {
  handle: string;
  title: string;
  size: string;
  price: string;
  description: string;
  imageSrc: string;
  tag: string;
  variantId?: string;
};

export function ProductDetail({ handle, title, size, price, description, imageSrc, tag, variantId }: Props) {
  const { addToCart, loading } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);

  const handleAdd = async () => {
    if (!variantId || loading || justAdded) return;
    await addToCart(variantId, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div style={{ backgroundColor: "#faf8f4" }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{
        borderBottom: "1px solid #e8e4da",
        padding: "0 clamp(2rem, 5vw, 5rem)",
      }}>
        <div style={{
          maxWidth: 1400, margin: "0 auto",
          display: "flex", gap: "0.5rem", alignItems: "center",
          height: 48,
          fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#9a9f95",
        }}>
          <a href="/" style={{ color: "#9a9f95", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#45543d")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9a9f95")}>Home</a>
          <span aria-hidden>›</span>
          <a href="/shop" style={{ color: "#9a9f95", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#45543d")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9a9f95")}>Shop</a>
          <span aria-hidden>›</span>
          <span style={{ color: "#292b25" }}>{title}</span>
        </div>
      </nav>

      {/* Main grid */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) clamp(2rem, 5vw, 5rem)" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "clamp(3rem, 6vw, 7rem)", alignItems: "start" }}
        >
          {/* ── Image ── */}
          <div style={{ position: "sticky", top: 100 }}>
            <div
              onMouseEnter={() => setImgHovered(true)}
              onMouseLeave={() => setImgHovered(false)}
              style={{
                position: "relative", aspectRatio: "4 / 5",
                backgroundColor: "#ede9e0", overflow: "hidden",
              }}
            >
              {tag && (
                <span style={{
                  position: "absolute", top: "1.25rem", left: "1.25rem", zIndex: 2,
                  fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "#FFFFFF", backgroundColor: "#292b25",
                  padding: "0.35rem 0.8rem",
                }}>
                  {tag}
                </span>
              )}
              <Image
                src={imageSrc}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  transition: "transform 700ms cubic-bezier(0.2,0.7,0.2,1)",
                  transform: imgHovered ? "scale(1.04)" : "scale(1)",
                }}
              />
            </div>
          </div>

          {/* ── Details ── */}
          <div style={{ paddingTop: "0.25rem" }}>
            {/* Category label */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#8a9482", margin: "0 0 1.125rem",
            }}>
              Daily Solace Collection
            </p>

            {/* Title */}
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.25rem, 3.5vw, 3.25rem)",
              lineHeight: 1.0, letterSpacing: "-0.028em",
              color: "#292b25", margin: "0 0 0.625rem",
            }}>
              {title}
            </h1>

            {/* Size */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem",
              color: "#8a9482", margin: "0 0 1.125rem",
            }}>
              {size}
            </p>

            {/* Price */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1.5rem", fontWeight: 600,
              color: "#292b25", margin: "0 0 1.75rem",
            }}>
              {price}
            </p>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.78,
              color: "#64685f", margin: "0 0 2.25rem", maxWidth: 460,
            }}>
              {description}
            </p>

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: "#e8e4da", margin: "0 0 2rem" }} />

            {/* Qty + Add to bag */}
            <div style={{ display: "flex", gap: "0.875rem", marginBottom: "1.5rem", alignItems: "stretch" }}>
              {/* Qty stepper */}
              <div style={{
                display: "flex", alignItems: "center",
                border: "1px solid rgba(41,43,37,0.25)", flexShrink: 0,
              }}>
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{
                    width: 44, height: 50, background: "none", border: "none",
                    cursor: "pointer", color: "#292b25", fontSize: "1.125rem",
                    fontFamily: "var(--font-body)",
                    transition: "color 150ms",
                  }}
                >−</button>
                <span style={{
                  width: 36, textAlign: "center",
                  fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#292b25",
                }}>
                  {qty}
                </span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty(q => q + 1)}
                  style={{
                    width: 44, height: 50, background: "none", border: "none",
                    cursor: "pointer", color: "#292b25", fontSize: "1.125rem",
                    fontFamily: "var(--font-body)",
                    transition: "color 150ms",
                  }}
                >+</button>
              </div>

              {/* Add to bag */}
              <button
                onClick={handleAdd}
                disabled={!variantId || loading || justAdded}
                style={{
                  flex: 1, height: 50,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: justAdded ? "#45543d" : "#FFFFFF",
                  backgroundColor: justAdded ? "transparent" : "#45543d",
                  border: "1px solid #45543d",
                  cursor: !variantId ? "not-allowed" : "pointer",
                  opacity: !variantId ? 0.5 : 1,
                  transition: "background-color 220ms ease, color 220ms ease, transform 200ms ease",
                }}
                onMouseEnter={e => { if (!justAdded && variantId) { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#34402f"; el.style.borderColor = "#34402f"; el.style.transform = "translateY(-1px)"; } }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; if (!justAdded) { el.style.backgroundColor = "#45543d"; el.style.borderColor = "#45543d"; } el.style.transform = "none"; }}
              >
                {justAdded ? "Added to Bag ✓" : loading ? "Adding…" : !variantId ? "Unavailable" : "Add to Bag"}
              </button>
            </div>

            {/* View bag link after add */}
            {justAdded && (
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                color: "#64685f", marginBottom: "1.5rem",
                animation: "fadeIn 300ms ease",
              }}>
                <a href="/cart" style={{ color: "#45543d", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  View your bag →
                </a>
              </p>
            )}

            {/* Trust badges */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: "1rem",
              marginBottom: "2.5rem",
            }}>
              {trust.map(t => (
                <span key={t} style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem",
                  color: "#78836e",
                  display: "flex", alignItems: "center", gap: "0.375rem",
                }}>
                  <span style={{ color: "#8a9482" }}>✓</span> {t}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: "#e8e4da", margin: "0 0 2rem" }} />

            {/* Ingredients */}
            <div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#292b25", margin: "0 0 1.25rem",
              }}>
                What&apos;s inside
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
                {ingredients.map((ing, i) => (
                  <li
                    key={ing.name}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2.5rem 1fr",
                      gap: "0 1.125rem",
                      alignItems: "baseline",
                      padding: "1rem 0",
                      borderTop: i === 0 ? "1px solid #e8e4da" : "none",
                      borderBottom: "1px solid #e8e4da",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                      color: "#8a9482", letterSpacing: "0.08em",
                      paddingTop: "0.1rem",
                    }}>
                      {ing.pct}
                    </span>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
                        color: "#292b25", margin: "0 0 0.2rem",
                      }}>
                        {ing.name}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.6,
                        color: "#78836e", margin: 0,
                      }}>
                        {ing.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related / back to shop */}
      <div style={{
        borderTop: "1px solid #e8e4da",
        padding: "2.5rem clamp(2rem, 5vw, 5rem)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <a
          href="/shop"
          style={{
            fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#64685f", textDecoration: "none",
            borderBottom: "1px solid rgba(100,104,95,0.4)",
            paddingBottom: 2,
            transition: "color 200ms, border-color 200ms",
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#45543d"; el.style.borderColor = "#45543d"; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#64685f"; el.style.borderColor = "rgba(100,104,95,0.4)"; }}
        >
          ← Back to the collection
        </a>
      </div>
    </div>
  );
}
