"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";
import { homepageImages, ingredients } from "@/lib/homepage";

const TEXT   = "#111111";
const MUTED  = "#9A9A9A";
const BORDER = "#E2E2E2";

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
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700,
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
          color: "#5C5C5C", margin: "0 0 1.125rem", paddingRight: "1.5rem",
        }}>
          {content}
        </p>
      )}
    </div>
  );
}

function RelatedCard({ product }: { product: typeof products[number] }) {
  return (
    <a href={`/products/${product.slug}`} className="card" style={{ textDecoration: "none", display: "block", padding: "0.875rem" }}>
      <div className="card-sm" style={{
        position: "relative", aspectRatio: "4 / 5",
        overflow: "hidden",
        backgroundColor: "#EFEFEF", marginBottom: "0.75rem",
      }}>
        <Image
          src={product.src} alt={product.name} fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="img-hover"
          style={{ objectFit: "cover" }}
        />
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9375rem", color: TEXT, margin: "0 0 0.2rem" }}>
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
  const sizeOptions = products.filter(p => p.slug.startsWith("daily-solace-fluid"));

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
    <div className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)" }}>
      {/* Main grid */}
      <div
        className="product-grid"
        style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "clamp(1rem, 2vw, 1.25rem)", alignItems: "start", marginBottom: "clamp(1rem, 2vw, 1.25rem)" }}
      >
        {/* Gallery card */}
        <div className="card" style={{ position: "sticky", top: 92, padding: "clamp(1rem, 2vw, 1.25rem)" }}>
          <div className="card-sm" style={{
            position: "relative", aspectRatio: "4 / 5",
            maxHeight: "clamp(440px, 50vw, 600px)",
            overflow: "hidden", backgroundColor: "#EFEFEF",
          }}>
            {tag && <span className="badge" style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 2, backgroundColor: TEXT, color: "#FFFFFF" }}>{tag}</span>}
            <Image
              src={imageSrc} alt={title} fill priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Configurator card */}
        <div className="card" style={{ padding: "clamp(1.5rem, 3vw, 2rem)" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: MUTED,
            margin: "0 0 0.5rem",
          }}>
            {size}
          </p>
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(1.625rem, 2.4vw, 2.125rem)",
            letterSpacing: "-0.03em", color: TEXT,
            margin: "0 0 0.625rem", lineHeight: 1.05,
          }}>
            {title}
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1.25rem", fontWeight: 700,
            color: TEXT, margin: "0 0 1.5rem",
          }}>
            {price}
          </p>

          {/* Size toggle — real navigation between the two sizes */}
          {sizeOptions.length > 1 && (
            <div className="toggle" role="tablist" aria-label="Select size" style={{ marginBottom: "1.25rem", width: "100%" }}>
              {sizeOptions.map(opt => (
                <Link
                  key={opt.slug}
                  href={`/products/${opt.slug}`}
                  role="tab"
                  aria-selected={opt.slug === handle}
                  className="toggle-option"
                  data-active={opt.slug === handle}
                  style={{ flex: 1, textAlign: "center", textDecoration: "none", display: "block" }}
                >
                  {opt.size} — {opt.price}
                </Link>
              ))}
            </div>
          )}

          {/* Qty selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED }}>
              Qty
            </span>
            <div className="toggle" style={{ padding: 4 }}>
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty(q => Math.max(1, q - 1))}
                style={{
                  width: 34, height: 34, background: "none", border: "none", borderRadius: 8,
                  cursor: "pointer", color: TEXT, fontSize: "1.1rem",
                  fontFamily: "var(--font-body)",
                }}
              >−</button>
              <span style={{
                width: 30, textAlign: "center",
                fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: TEXT,
              }}>
                {qty}
              </span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQty(q => q + 1)}
                style={{
                  width: 34, height: 34, background: "none", border: "none", borderRadius: 8,
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
              backgroundColor: justAdded ? "#EFEFEF" : "#111111",
              color: justAdded ? "#111111" : "#FFFFFF",
              borderColor: justAdded ? "#E2E2E2" : "#111111",
              cursor: !variantId ? "not-allowed" : "pointer",
              opacity: !variantId ? 0.5 : 1,
              marginBottom: "1.25rem",
            }}
          >
            {justAdded ? "Added to bag" : loading ? "Adding…" : !variantId ? "Unavailable" : "Add to Bag"}
          </button>

          {/* Trust badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {["Free UK delivery", "30-day returns", "Made in the UK"].map(t => (
              <span key={t} className="badge" style={{ backgroundColor: "#EFEFEF" }}>{t}</span>
            ))}
          </div>

          {/* Accordions */}
          <div style={{ borderBottom: `1px solid ${BORDER}` }}>
            {accordionItems.map((a, i) => (
              <Accordion key={a.id} label={a.label} content={a.content!} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>

      {/* Active ingredients bento */}
      <div style={{ marginBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <span className="eyebrow">Active Ingredients</span>
        <div className="pdp-ingredient-grid" style={{ marginTop: "0.75rem" }}>
          {ingredients.map(ing => (
            <div key={ing.name} className="card" style={{ padding: "clamp(1.25rem, 2.5vw, 1.5rem)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.625rem" }}>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9375rem", color: TEXT }}>{ing.name}</span>
                <span className="badge">{ing.percent}</span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, margin: "0 0 0.5rem", fontStyle: "italic" }}>{ing.latin}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.5, color: "#5C5C5C", margin: 0 }}>{ing.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial break */}
      <div className="card" style={{ position: "relative", aspectRatio: "21 / 9", backgroundColor: "#EFEFEF", overflow: "hidden", marginBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <Image
          src={homepageImages.benefits}
          alt="The Daily Solace Fluid in use"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <p style={{
          position: "absolute", left: "clamp(1.25rem, 3vw, 2.5rem)", bottom: "clamp(1.25rem, 3vw, 2.5rem)",
          fontFamily: "var(--font-body)", fontSize: "clamp(1.125rem, 2.2vw, 1.625rem)", fontWeight: 700,
          letterSpacing: "-0.02em", lineHeight: 1.15, color: "#FFFFFF", margin: 0, maxWidth: 420,
          textShadow: "0 2px 20px rgba(0,0,0,0.35)",
        }}>
          Sixty seconds. Every morning.
        </p>
      </div>

      {/* You may also like */}
      {related.length > 0 && (
        <div style={{ marginBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1rem" }}>
            <h2 style={{
              fontFamily: "var(--font-body)", fontWeight: 700,
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              letterSpacing: "-0.02em", color: TEXT, margin: 0,
            }}>
              You may also like
            </h2>
            <Link href="/shop" className="badge">Shop all →</Link>
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-3"
            style={{ gap: "clamp(1rem, 2vw, 1.25rem)", maxWidth: 900 }}
          >
            {related.map(p => <RelatedCard key={p.slug} product={p} />)}
          </div>
        </div>
      )}

      <style>{`
        .pdp-ingredient-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 2vw, 1.25rem);
        }
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr !important; }
          .product-grid > div:first-child { position: static !important; }
          .pdp-ingredient-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .pdp-ingredient-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
