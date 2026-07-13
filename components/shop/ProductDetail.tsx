"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";

const ingredients = [
  { name: "Olive Squalane", pct: "80%",   note: "Absorbs in under 60 seconds — never greasy" },
  { name: "Vitamin B3",     pct: "14.9%", note: "Strengthens the barrier, supports even tone" },
  { name: "Black Seed Oil", pct: "2%",    note: "Settles inflammation at the scalp and hairline" },
  { name: "Vitamin E",      pct: "3%",    note: "Antioxidant protection, keeps the formula stable" },
  { name: "Vanilla Extract",pct: "0.1%",  note: "Comforting finish, zero synthetic fragrance" },
];

const trust = [
  { label: "Free UK delivery", sub: "on orders over £40" },
  { label: "30-day returns",   sub: "no questions asked" },
  { label: "Halal certified",  sub: "by accredited body" },
  { label: "Vegan",            sub: "& cruelty free" },
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

function RelatedCard({ product }: { product: typeof products[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`/products/${product.slug}`}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "relative",
        aspectRatio: "3 / 4",
        backgroundColor: "#ede9e0",
        overflow: "hidden",
        marginBottom: "1.25rem",
      }}>
        <Image
          src={product.src}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{
            objectFit: "cover",
            transition: "transform 700ms cubic-bezier(0.2,0.7,0.2,1)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
      </div>
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
        letterSpacing: "0.16em", textTransform: "uppercase",
        color: "#8a9482", margin: "0 0 0.375rem",
      }}>
        {product.size}
      </p>
      <p style={{
        fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "1.25rem", lineHeight: 1.1, letterSpacing: "-0.02em",
        color: "#292b25", margin: "0 0 0.375rem",
      }}>
        {product.name}
      </p>
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500,
        color: "#45543d", margin: 0,
      }}>
        {product.price}
      </p>
    </a>
  );
}

export function ProductDetail({ handle, title, size, price, description, imageSrc, tag, variantId }: Props) {
  const { addToCart, loading } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);

  const related = products.filter(p => p.slug !== handle).slice(0, 2);

  const handleAdd = async () => {
    if (!variantId || loading || justAdded) return;
    await addToCart(variantId, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2200);
  };

  return (
    <div style={{ backgroundColor: "#faf8f4" }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ borderBottom: "1px solid #e8e4da" }}>
        <div style={{
          maxWidth: 1400, margin: "0 auto",
          padding: "0 clamp(2rem, 5vw, 5rem)",
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
          {/* ── Image panel ── */}
          <div style={{ position: "sticky", top: 100 }}>
            <div
              onMouseEnter={() => setImgHovered(true)}
              onMouseLeave={() => setImgHovered(false)}
              style={{ position: "relative", aspectRatio: "4 / 5", backgroundColor: "#ede9e0", overflow: "hidden" }}
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

            {/* Caption below image */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.6875rem",
              color: "#a09b93", margin: "1rem 0 0",
              display: "flex", alignItems: "center", gap: "0.5rem",
            }}>
              <span style={{
                display: "inline-block", width: 18, height: "0.5px",
                backgroundColor: "#a09b93",
              }} />
              Five ingredients. Nothing more.
            </p>
          </div>

          {/* ── Details ── */}
          <div style={{ paddingTop: "0.25rem" }}>
            {/* Eyebrow */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#8a9482", margin: "0 0 1rem",
            }}>
              Daily Solace Collection
            </p>

            {/* Title */}
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.25rem, 3.5vw, 3.25rem)",
              lineHeight: 1.0, letterSpacing: "-0.028em",
              color: "#292b25", margin: "0 0 0.5rem",
            }}>
              {title}
            </h1>

            {/* Size + price row */}
            <div style={{
              display: "flex", alignItems: "baseline",
              gap: "1.25rem", margin: "0 0 1.5rem",
            }}>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                color: "#8a9482",
              }}>
                {size}
              </span>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "1.375rem", fontWeight: 600,
                color: "#292b25",
              }}>
                {price}
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.78,
              color: "#64685f", margin: "0 0 2rem", maxWidth: 460,
            }}>
              {description}
            </p>

            {/* Key claims strip */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem", margin: "0 0 2rem",
            }}>
              {["Absorbs in 60s", "No synthetic fragrance", "Halal certified", "Vegan & cruelty free"].map(claim => (
                <div key={claim} style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    backgroundColor: "#8a9e7f", flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                    color: "#64685f",
                  }}>{claim}</span>
                </div>
              ))}
            </div>

            <div style={{ height: 1, backgroundColor: "#e8e4da", margin: "0 0 2rem" }} />

            {/* Qty + Add to bag */}
            <div style={{ display: "flex", gap: "0.875rem", marginBottom: "1.25rem", alignItems: "stretch" }}>
              <div style={{
                display: "flex", alignItems: "center",
                border: "1px solid rgba(41,43,37,0.25)", flexShrink: 0,
              }}>
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{
                    width: 44, height: 52, background: "none", border: "none",
                    cursor: "pointer", color: "#292b25", fontSize: "1.125rem",
                    fontFamily: "var(--font-body)",
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
                    width: 44, height: 52, background: "none", border: "none",
                    cursor: "pointer", color: "#292b25", fontSize: "1.125rem",
                    fontFamily: "var(--font-body)",
                  }}
                >+</button>
              </div>

              <button
                onClick={handleAdd}
                disabled={!variantId || loading || justAdded}
                style={{
                  flex: 1, height: 52,
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
                {justAdded ? "Added ✓" : loading ? "Adding…" : !variantId ? "Unavailable" : "Add to Bag"}
              </button>
            </div>

            {justAdded && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#64685f", marginBottom: "1.25rem" }}>
                <a href="/cart" style={{ color: "#45543d", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  View your bag →
                </a>
              </p>
            )}

            {/* Trust row */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "0.875rem 1.5rem",
              padding: "1.5rem",
              backgroundColor: "#f2ede4",
              marginBottom: "2.5rem",
            }}>
              {trust.map(t => (
                <div key={t.label} style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600,
                    color: "#45543d",
                  }}>
                    {t.label}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.6875rem",
                    color: "#9a9f95",
                  }}>
                    {t.sub}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ height: 1, backgroundColor: "#e8e4da", margin: "0 0 2rem" }} />

            {/* Ingredients */}
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#292b25", margin: "0 0 0.375rem",
                }}>
                  What&apos;s inside
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                  color: "#9a9f95", margin: 0,
                }}>
                  Five ingredients. Every one named. Every one earning its place.
                </p>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {ingredients.map((ing, i) => (
                  <li
                    key={ing.name}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "3rem 1fr",
                      gap: "0 1.125rem",
                      alignItems: "start",
                      padding: "1.125rem 0",
                      borderTop: i === 0 ? "1px solid #e8e4da" : "none",
                      borderBottom: "1px solid #e8e4da",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                      color: "#8a9e7f", letterSpacing: "0.06em",
                      paddingTop: "0.175rem",
                    }}>
                      {ing.pct}
                    </span>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
                        color: "#292b25", margin: "0 0 0.25rem",
                      }}>
                        {ing.name}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.65,
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

      {/* You may also like */}
      {related.length > 0 && (
        <div style={{
          borderTop: "1px solid #e8e4da",
          padding: "clamp(3.5rem, 6vw, 5.5rem) clamp(2rem, 5vw, 5rem)",
          backgroundColor: "#faf8f4",
        }}>
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ marginBottom: "2.5rem", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#8a9482", margin: "0 0 0.5rem",
                }}>
                  The Collection
                </p>
                <h2 style={{
                  fontFamily: "var(--font-display)", fontWeight: 400,
                  fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
                  lineHeight: 1.05, letterSpacing: "-0.025em",
                  color: "#292b25", margin: 0,
                }}>
                  You may also like
                </h2>
              </div>
              <a
                href="/shop"
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#64685f", textDecoration: "none",
                  borderBottom: "1px solid rgba(100,104,95,0.4)",
                  paddingBottom: 2,
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#45543d"; el.style.borderColor = "#45543d"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#64685f"; el.style.borderColor = "rgba(100,104,95,0.4)"; }}
              >
                View all
              </a>
            </div>

            <div
              className="grid grid-cols-2"
              style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              {related.map(p => <RelatedCard key={p.slug} product={p} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
