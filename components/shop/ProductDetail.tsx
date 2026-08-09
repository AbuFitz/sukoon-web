"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";

const TEXT   = "#111111";
const MUTED  = "#92928D";
const BORDER = "#E3E3DF";

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

const ACCORDIONS = [
  {
    id: "description",
    label: "Description",
    content: null, // filled from props
  },
  {
    id: "benefits",
    label: "Benefits",
    content: "Deeply nourishing without heaviness. Balances the skin barrier, reduces redness and inflammation, and leaves skin visibly smoother. Suitable for all skin types including sensitive and oily skin.",
  },
  {
    id: "ingredients",
    label: "Ingredients",
    content: "Olea Europaea (Olive) Squalane, Nigella Sativa (Black Seed) Oil, Niacinamide (Vitamin B3), Tocopherol (Vitamin E), Bisabolol.",
  },
  {
    id: "how-to-use",
    label: "How to use",
    content: "After cleansing, apply 2–3 drops to damp skin. Press gently into the face and hairline. Can be used morning and evening. A little goes a long way.",
  },
  {
    id: "shipping",
    label: "Shipping & returns",
    content: "Free UK delivery on orders over £40. Standard delivery 3–5 working days. Express next-day available. Returns accepted within 30 days of purchase for unopened items.",
  },
];

function Accordion({ label, content }: { label: string; content: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.125rem 0", background: "none", border: "none", cursor: "pointer",
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500,
          color: TEXT, textAlign: "left",
        }}
        aria-expanded={open}
      >
        {label}
        <span style={{
          fontSize: "1.25rem", fontWeight: 300, color: MUTED,
          transition: "transform 0.25s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          display: "inline-block",
        }}>+</span>
      </button>
      {open && (
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7,
          color: "#676764", margin: "0 0 1.25rem", paddingRight: "1.5rem",
        }}>
          {content}
        </p>
      )}
    </div>
  );
}

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
        position: "relative", aspectRatio: "4 / 5",
        borderRadius: 22, overflow: "hidden",
        backgroundColor: "#F0F0EE", marginBottom: "1rem",
      }}>
        <Image
          src={product.src} alt={product.name} fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9375rem", color: TEXT, margin: "0 0 0.25rem" }}>
        {product.name}
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, margin: "0 0 0.25rem" }}>
        {product.size}
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500, color: TEXT, margin: 0 }}>
        {product.price}
      </p>
    </a>
  );
}

export function ProductDetail({ handle, title, size, price, description, imageSrc, tag, variantId }: Props) {
  const { addToCart, loading } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const related = products.filter(p => p.slug !== handle).slice(0, 3);

  const handleAdd = async () => {
    if (!variantId || loading || justAdded) return;
    await addToCart(variantId, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2200);
  };

  const handleBuyNow = async () => {
    if (!variantId || loading) return;
    const url = await addToCart(variantId, qty);
    if (url) window.location.href = url;
  };

  const accordionItems = ACCORDIONS.map(a =>
    a.id === "description" ? { ...a, content: description } : a
  );

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Main grid */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(2rem, 4vw, 4rem) clamp(1.25rem, 4vw, 3rem)" }}>
        <div
          className="product-grid"
          style={{ display: "grid", gridTemplateColumns: "58fr 42fr", gap: "clamp(2.5rem, 5vw, 6rem)", alignItems: "start" }}
        >
          {/* Image column */}
          <div style={{ position: "sticky", top: 120 }}>
            <div style={{
              position: "relative", aspectRatio: "4 / 5",
              borderRadius: 24, overflow: "hidden", backgroundColor: "#F0F0EE",
            }}>
              {tag && (
                <span style={{
                  position: "absolute", top: "1.25rem", left: "1.25rem", zIndex: 2,
                  fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "#FFFFFF", backgroundColor: TEXT,
                  padding: "0.3rem 0.75rem", borderRadius: 4,
                }}>
                  {tag}
                </span>
              )}
              <Image
                src={imageSrc} alt={title} fill priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Details column */}
          <div style={{ paddingTop: "0.5rem" }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
              letterSpacing: "0.16em", textTransform: "uppercase", color: MUTED,
              margin: "0 0 0.75rem",
            }}>
              {size}
            </p>
            <h1 style={{
              fontFamily: "var(--font-body)", fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              letterSpacing: "-0.03em", color: TEXT,
              margin: "0 0 0.75rem", lineHeight: 1.1,
            }}>
              {title}
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1.25rem", fontWeight: 500,
              color: TEXT, margin: "0 0 2rem",
            }}>
              {price}
            </p>

            {/* Qty selector */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, marginRight: "0.5rem" }}>
                Qty
              </span>
              <div style={{
                display: "flex", alignItems: "center",
                border: `1.5px solid ${BORDER}`, borderRadius: 10,
              }}>
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{
                    width: 40, height: 44, background: "none", border: "none",
                    cursor: "pointer", color: TEXT, fontSize: "1.1rem",
                    fontFamily: "var(--font-body)",
                  }}
                >−</button>
                <span style={{
                  width: 32, textAlign: "center",
                  fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: TEXT,
                }}>
                  {qty}
                </span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty(q => q + 1)}
                  style={{
                    width: 40, height: 44, background: "none", border: "none",
                    cursor: "pointer", color: TEXT, fontSize: "1.1rem",
                    fontFamily: "var(--font-body)",
                  }}
                >+</button>
              </div>
            </div>

            {/* Add to bag */}
            <button
              onClick={handleAdd}
              disabled={!variantId || loading || justAdded}
              style={{
                width: "100%", height: 56,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
                letterSpacing: "0.04em",
                color: justAdded ? TEXT : "#FFFFFF",
                backgroundColor: justAdded ? "transparent" : TEXT,
                border: `1.5px solid ${TEXT}`,
                borderRadius: 12,
                cursor: !variantId ? "not-allowed" : "pointer",
                opacity: !variantId ? 0.5 : 1,
                transition: "background-color 0.2s ease, color 0.2s ease",
                marginBottom: "0.625rem",
              }}
            >
              {justAdded ? "Added to bag ✓" : loading ? "Adding…" : !variantId ? "Unavailable" : "Add to bag"}
            </button>

            {/* Buy now */}
            {variantId && (
              <button
                onClick={handleBuyNow}
                disabled={loading}
                style={{
                  width: "100%", height: 56,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: TEXT, backgroundColor: "#F5F5F3",
                  border: `1.5px solid ${BORDER}`,
                  borderRadius: 12,
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background-color 0.2s ease",
                  marginBottom: "1.5rem",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = BORDER; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F5F5F3"; }}
              >
                Buy now
              </button>
            )}

            {/* Trust line */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.8125rem",
              color: MUTED, margin: "0 0 2rem", lineHeight: 1.6,
            }}>
              Free UK delivery over £40 &nbsp;·&nbsp; 30-day returns &nbsp;·&nbsp; Made in the UK
            </p>

            {/* Accordions */}
            <div style={{ borderBottom: `1px solid ${BORDER}` }}>
              {accordionItems.map(a => (
                <Accordion key={a.id} label={a.label} content={a.content!} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      {related.length > 0 && (
        <div style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 3rem)",
          backgroundColor: "#FFFFFF",
        }}>
          <div style={{ maxWidth: 1320, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "2.5rem" }}>
              <h2 style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                letterSpacing: "-0.025em", color: TEXT, margin: 0,
              }}>
                You may also like
              </h2>
              <a
                href="/shop"
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                  color: MUTED, textDecoration: "none",
                  borderBottom: `1px solid ${BORDER}`, paddingBottom: 2,
                }}
              >
                View all
              </a>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-3"
              style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              {related.map(p => <RelatedCard key={p.slug} product={p} />)}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
