"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";
import { homepageImages } from "@/lib/homepage";

const TEXT   = "#111111";
const MUTED  = "#969690";
const BORDER = "#E5E5E2";

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
  { id: "description", label: "Description", content: null as string | null },
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
    content: "Free UK delivery on orders over £40. Standard delivery 3–5 working days. Returns accepted within 30 days of purchase for unopened items.",
  },
];

function Accordion({ label, content, defaultOpen = false }: { label: string; content: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderTop: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1rem 0", background: "none", border: "none", cursor: "pointer",
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
          color: TEXT, textAlign: "left",
        }}
        aria-expanded={open}
      >
        {label}
        <span style={{
          fontSize: "1.25rem", fontWeight: 400, color: MUTED,
          transition: "transform 0.2s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          display: "inline-block",
        }}>+</span>
      </button>
      {open && (
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65,
          color: "#636360", margin: "0 0 1.125rem", paddingRight: "1.5rem",
        }}>
          {content}
        </p>
      )}
    </div>
  );
}

function RelatedCard({ product }: { product: typeof products[number] }) {
  return (
    <a href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div style={{
        position: "relative", aspectRatio: "4 / 5",
        overflow: "hidden", borderRadius: 14,
        backgroundColor: "#F4F4F2", marginBottom: "0.75rem",
      }}>
        <Image
          src={product.src} alt={product.name} fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="img-hover"
          style={{ objectFit: "cover" }}
        />
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9375rem", color: TEXT, margin: "0 0 0.2rem" }}>
        {product.name}
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: TEXT, margin: 0 }}>
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

  const accordionItems = ACCORDIONS.map(a =>
    a.id === "description" ? { ...a, content: description } : a
  );

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Main grid */}
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 3rem)" }}>
        <div
          className="product-grid"
          style={{ display: "grid", gridTemplateColumns: "60fr 40fr", gap: "clamp(2rem, 4vw, 4rem)", alignItems: "start" }}
        >
          {/* Image column */}
          <div style={{ position: "sticky", top: 90 }}>
            <div style={{
              position: "relative", aspectRatio: "4 / 5",
              overflow: "hidden", backgroundColor: "#F4F4F2", borderRadius: 16,
            }}>
              {tag && (
                <span style={{
                  position: "absolute", top: "1.25rem", left: "1.25rem", zIndex: 2,
                  fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                  color: "#FFFFFF", backgroundColor: TEXT,
                  padding: "0.3rem 0.75rem", borderRadius: 6,
                }}>
                  {tag}
                </span>
              )}
              <Image
                src={imageSrc} alt={title} fill priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Details column */}
          <div style={{ paddingTop: "0.25rem" }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500, color: MUTED,
              margin: "0 0 0.5rem",
            }}>
              {size}
            </p>
            <h1 style={{
              fontFamily: "var(--font-body)", fontWeight: 600,
              fontSize: "clamp(1.625rem, 2.4vw, 2.125rem)",
              letterSpacing: "-0.02em", color: TEXT,
              margin: "0 0 0.625rem", lineHeight: 1.1,
            }}>
              {title}
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1.1875rem", fontWeight: 600,
              color: TEXT, margin: "0 0 1.75rem",
            }}>
              {price}
            </p>

            {/* Qty selector */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, marginRight: "0.25rem" }}>
                Qty
              </span>
              <div style={{
                display: "flex", alignItems: "center",
                border: `1px solid ${BORDER}`, borderRadius: 8,
              }}>
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{
                    width: 38, height: 42, background: "none", border: "none",
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
                    width: 38, height: 42, background: "none", border: "none",
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
              className="btn btn-dark"
              style={{
                width: "100%", height: 52,
                backgroundColor: justAdded ? "#F4F4F2" : "#111111",
                color: justAdded ? "#111111" : "#FFFFFF",
                borderColor: justAdded ? "#D0D0CB" : "#111111",
                cursor: !variantId ? "not-allowed" : "pointer",
                opacity: !variantId ? 0.5 : 1,
                marginBottom: "1.25rem",
              }}
            >
              {justAdded ? "Added to bag" : loading ? "Adding…" : !variantId ? "Unavailable" : "Add to Bag"}
            </button>

            {/* Trust line */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.8125rem",
              color: MUTED, margin: "0 0 1.75rem", lineHeight: 1.5,
            }}>
              Free UK delivery over £40 · 30-day returns · Made in the UK
            </p>

            {/* Accordions */}
            <div style={{ borderBottom: `1px solid ${BORDER}` }}>
              {accordionItems.map((a, i) => (
                <Accordion key={a.id} label={a.label} content={a.content!} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Editorial break */}
      <div style={{ position: "relative", aspectRatio: "21 / 9", backgroundColor: "#F4F4F2" }}>
        <Image
          src={homepageImages.benefits}
          alt="The Daily Solace Fluid in use"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* You may also like */}
      {related.length > 0 && (
        <div style={{
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem)",
          backgroundColor: "#FFFFFF",
        }}>
          <div style={{ maxWidth: 1440, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <h2 style={{
                fontFamily: "var(--font-body)", fontWeight: 600,
                fontSize: "clamp(1.375rem, 2vw, 1.75rem)",
                letterSpacing: "-0.02em", color: TEXT, margin: 0,
              }}>
                You may also like
              </h2>
              <a
                href="/shop"
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600,
                  color: TEXT, textDecoration: "none",
                }}
              >
                Shop all →
              </a>
            </div>
            <div
              className="grid grid-cols-2 sm:grid-cols-3"
              style={{ gap: "18px", maxWidth: 900 }}
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
