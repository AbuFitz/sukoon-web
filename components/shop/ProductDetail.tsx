"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";
import { homepageImages, ingredients } from "@/lib/homepage";

const TEXT   = "#000000";
const MUTED  = "#A3A3A3";
const BORDER = "#E5E5E5";

const TRANSPARENCY = ["Made in UK", "Halal Certified", "Vegan & Cruelty Free", "100% Waterless"];

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
          color: "#525252", margin: "0 0 1.125rem", paddingRight: "1.5rem",
        }}>
          {content}
        </p>
      )}
    </div>
  );
}

export function ProductDetail({ handle, title, size, price, description, imageSrc, tag, variantId }: Props) {
  const { addToCart, loading } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

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
    <div className="container" style={{ paddingTop: "clamp(2rem, 4vw, 3rem)", paddingBottom: "clamp(3rem, 5vw, 4.5rem)" }}>
      {/* Main grid */}
      <div
        className="block product-grid"
        style={{ display: "grid", gridTemplateColumns: "7fr 5fr", overflow: "hidden", marginBottom: "clamp(2rem, 4vw, 3rem)" }}
      >
        {/* Gallery */}
        <div style={{ position: "sticky", top: 93, alignSelf: "start" }}>
          <div style={{
            position: "relative", aspectRatio: "4 / 5",
            maxHeight: "clamp(440px, 50vw, 640px)",
            overflow: "hidden", backgroundColor: "#F5F5F5", borderRight: "1px solid #E5E5E5",
          }}>
            {tag && <span className="tag tag-fill" style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 2 }}>{tag}</span>}
            <Image
              src={imageSrc} alt={title} fill priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Configurator */}
        <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          <p className="tracked" style={{
            fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 700, color: MUTED,
            margin: "0 0 0.625rem",
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

          {/* Size selector cards — real navigation between the two sizes */}
          {sizeOptions.length > 1 && (
            <div className="size-selector" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {sizeOptions.map(opt => (
                <Link
                  key={opt.slug}
                  href={`/products/${opt.slug}`}
                  aria-current={opt.slug === handle}
                  className="selector-card"
                  data-active={opt.slug === handle}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <span className="tracked-wide" style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, color: "#A3A3A3", marginBottom: "0.5rem" }}>
                    {opt.size}
                  </span>
                  <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 700, color: "#000000" }}>
                    {opt.price}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* Qty selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="tracked" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 700, color: MUTED }}>
              Qty
            </span>
            <div style={{ display: "flex", alignItems: "center", border: `1px solid ${BORDER}`, borderRadius: 2 }}>
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty(q => Math.max(1, q - 1))}
                style={{
                  width: 34, height: 34, background: "none", border: "none",
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
                  width: 34, height: 34, background: "none", border: "none",
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
            className="btn btn-dark tracked-wide"
            style={{
              width: "100%", height: 52,
              backgroundColor: justAdded ? "#FFFFFF" : "#000000",
              color: justAdded ? "#000000" : "#FFFFFF",
              borderColor: "#000000",
              cursor: !variantId ? "not-allowed" : "pointer",
              opacity: !variantId ? 0.4 : 1,
              marginBottom: "1.5rem",
            }}
          >
            {justAdded ? "Added to Bag" : loading ? "Adding…" : !variantId ? "Unavailable" : `Add to Bag — ${price}`}
          </button>

          {/* Transparency bar */}
          <div className="divider" style={{ marginBottom: "1rem" }} />
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            {TRANSPARENCY.map((t, i) => (
              <span key={t} className="tracked" style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
                color: "#525252", paddingRight: "0.875rem", marginRight: "0.875rem",
                marginBottom: "0.375rem",
                borderRight: i < TRANSPARENCY.length - 1 ? "1px solid #E5E5E5" : "none",
              }}>
                {t}
              </span>
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

      {/* Active ingredients */}
      <div style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
        <span className="eyebrow">Formula Breakdown</span>
        <div className="block" style={{ overflow: "hidden", marginTop: "0.75rem" }}>
          {ingredients.map((ing, i) => (
            <div key={ing.name} className="pdp-ingredient-row" style={{ borderTop: i > 0 ? "1px solid #E5E5E5" : "none" }}>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1rem", color: TEXT }}>{ing.percent}</span>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9375rem", color: TEXT, margin: 0 }}>{ing.name}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, margin: "0.125rem 0 0" }}>{ing.latin}</p>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.5, color: "#525252", margin: 0 }}>{ing.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial break */}
      <div className="block" style={{ position: "relative", aspectRatio: "21 / 9", backgroundColor: "#F5F5F5", overflow: "hidden" }}>
        <Image
          src={homepageImages.benefits}
          alt="The Daily Solace Fluid in use"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", filter: "grayscale(0.15)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 45%)" }} />
        <p style={{
          position: "absolute", left: "clamp(1.25rem, 3vw, 2.5rem)", bottom: "clamp(1.25rem, 3vw, 2.5rem)",
          fontFamily: "var(--font-body)", fontSize: "clamp(1.125rem, 2.2vw, 1.625rem)", fontWeight: 700,
          letterSpacing: "-0.02em", lineHeight: 1.15, color: "#FFFFFF", margin: 0, maxWidth: 420,
        }}>
          Sixty seconds. Every morning.
        </p>
      </div>

      <style>{`
        .pdp-ingredient-row {
          display: grid;
          grid-template-columns: 4.5rem 1fr 1.5fr;
          gap: clamp(1rem, 3vw, 2rem);
          align-items: center;
          padding: 1.25rem clamp(1.25rem, 3vw, 1.75rem);
        }
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr !important; }
          .product-grid > div:first-child { position: static !important; }
        }
        @media (max-width: 640px) {
          .pdp-ingredient-row {
            grid-template-columns: 2.5rem 1fr;
            grid-template-rows: auto auto;
            row-gap: 0.5rem;
          }
          .pdp-ingredient-row > p:last-child { grid-column: 1 / -1; }
        }
      `}</style>
    </div>
  );
}
