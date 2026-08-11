"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";
import { homepageImages, ingredients } from "@/lib/homepage";

const TEXT   = "#0D0F10";
const MUTED  = "#8A9296";
const BORDER = "#DCE1E3";

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

const RITUAL_STEPS = [
  { n: "01", label: "Cleanse", body: "Start on clean, damp skin — face or hairline." },
  { n: "02", label: "Apply", body: "Press 2–3 drops in. No rubbing, no dragging." },
  { n: "03", label: "Repeat", body: "Morning and evening. A little goes a long way." },
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
          color: "#4A5256", margin: "0 0 1.125rem", paddingRight: "1.5rem",
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
        backgroundColor: "#ECEFF1", marginBottom: "0.75rem",
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
  const [activeImage, setActiveImage] = useState(0);

  const related = products.filter(p => p.slug !== handle).slice(0, 3);
  const sizeOptions = products.filter(p => p.slug.startsWith("daily-solace-fluid"));

  const gallery = [
    { src: imageSrc, alt: title },
    { src: homepageImages.benefits, alt: "Applying the Daily Solace Fluid to the face" },
    { src: homepageImages.story, alt: "The Daily Solace Fluid ritual, dropper and dish" },
  ];

  const handleAdd = async () => {
    if (!variantId || loading || justAdded) return;
    await addToCart(variantId, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2200);
  };

  return (
    <div className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)" }}>
      {/* Main grid */}
      <div
        className="product-grid"
        style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "clamp(1rem, 2vw, 1.25rem)", alignItems: "start", marginBottom: "clamp(1rem, 2vw, 1.25rem)" }}
      >
        {/* Gallery */}
        <div style={{ position: "sticky", top: 92 }}>
          <div className="card" style={{ padding: "clamp(1rem, 2vw, 1.25rem)", marginBottom: "0.75rem" }}>
            <div className="card-sm" style={{
              position: "relative", width: "100%", aspectRatio: "4 / 5",
              overflow: "hidden", backgroundColor: "#ECEFF1",
            }}>
              {tag && <span className="badge" style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 2, backgroundColor: TEXT, color: "#FFFFFF" }}>{tag}</span>}
              <Image
                src={gallery[activeImage].src} alt={gallery[activeImage].alt} fill priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="pdp-thumb-row">
            {gallery.map((g, i) => (
              <button
                key={g.src + i}
                onClick={() => setActiveImage(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === activeImage}
                className="card-sm"
                style={{
                  position: "relative", aspectRatio: "4 / 5", padding: 0, overflow: "hidden",
                  border: i === activeImage ? `2px solid ${TEXT}` : "2px solid transparent",
                  cursor: "pointer", backgroundColor: "#ECEFF1",
                }}
              >
                <Image src={g.src} alt="" fill sizes="120px" style={{ objectFit: "cover" }} />
              </button>
            ))}
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
            color: TEXT, margin: "0 0 0.875rem",
          }}>
            {price}
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.6,
            color: "#4A5256", margin: "0 0 1.5rem", maxWidth: 420,
          }}>
            {description}
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
              backgroundColor: justAdded ? "#ECEFF1" : "#0D0F10",
              color: justAdded ? "#0D0F10" : "#FFFFFF",
              borderColor: justAdded ? "#DCE1E3" : "#0D0F10",
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
              <span key={t} className="badge" style={{ backgroundColor: "#ECEFF1" }}>{t}</span>
            ))}
          </div>

          {/* Key ingredients — at-a-glance, right where the buying decision happens */}
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1.125rem", marginBottom: "0.25rem" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: MUTED, margin: "0 0 0.625rem" }}>
              Key Actives
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {ingredients.map(ing => (
                <span key={ing.name} style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 600,
                  color: TEXT, backgroundColor: "#F4F6F7", border: `1px solid ${BORDER}`,
                  borderRadius: "var(--radius-control)", padding: "0.375rem 0.625rem",
                }}>
                  {ing.percent} {ing.name}
                </span>
              ))}
            </div>
          </div>

          {/* Shipping accordion */}
          <div style={{ borderBottom: `1px solid ${BORDER}` }}>
            <Accordion
              label="Shipping & returns"
              content="Free UK delivery on orders over £40. Standard delivery 3–5 working days. Returns accepted within 30 days of purchase for unopened items."
            />
          </div>
        </div>
      </div>

      {/* The Ritual — application steps */}
      <div className="card ritual-steps" style={{ marginBottom: "clamp(1rem, 2vw, 1.25rem)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {RITUAL_STEPS.map((s, i) => (
          <div key={s.n} style={{
            padding: "clamp(1.5rem, 3vw, 2rem)",
            borderLeft: i > 0 ? `1px solid ${BORDER}` : "none",
          }}>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8125rem", color: MUTED }}>{s.n}</span>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.0625rem", color: TEXT, margin: "0.375rem 0 0.375rem" }}>{s.label}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8438rem", lineHeight: 1.5, color: "#4A5256", margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>

      {/* Active ingredients bento — unified, matching the homepage formula grid */}
      <div style={{ marginBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <div className="pdp-ingredient-grid" style={{ border: `1px solid ${BORDER}`, borderRadius: "var(--radius-2xl)", overflow: "hidden" }}>
          {ingredients.map((ing, i) => (
            <div key={ing.name} className="pdp-ing-cell" data-i={i} style={{ padding: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.375rem", letterSpacing: "-0.02em", color: TEXT }}>{ing.percent}</span>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9375rem", color: TEXT, textAlign: "right" }}>{ing.name}</span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, margin: "0 0 0.5rem", fontStyle: "italic" }}>{ing.latin}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.5, color: "#4A5256", margin: 0 }}>{ing.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial break */}
      <div className="card" style={{ position: "relative", aspectRatio: "21 / 9", backgroundColor: "#ECEFF1", overflow: "hidden", marginBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
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
        .pdp-thumb-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.625rem;
        }
        .pdp-ingredient-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .pdp-ing-cell[data-i="0"], .pdp-ing-cell[data-i="1"] { border-bottom: 1px solid ${BORDER}; }
        .pdp-ing-cell:not([data-i="2"]):not([data-i="4"]) { border-right: 1px solid ${BORDER}; }
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr !important; }
          .product-grid > div:first-child { position: static !important; }
          .pdp-ingredient-grid { grid-template-columns: repeat(2, 1fr); }
          .pdp-ing-cell[data-i="0"], .pdp-ing-cell[data-i="1"], .pdp-ing-cell[data-i="2"], .pdp-ing-cell[data-i="3"] { border-bottom: 1px solid ${BORDER}; }
          .pdp-ing-cell:not([data-i="2"]):not([data-i="4"]) { border-right: none; }
          .pdp-ing-cell[data-i="0"], .pdp-ing-cell[data-i="2"], .pdp-ing-cell[data-i="4"] { border-right: 1px solid ${BORDER}; }
          .ritual-steps { grid-template-columns: 1fr !important; }
          .ritual-steps > div { border-left: none !important; border-top: 1px solid ${BORDER}; }
          .ritual-steps > div:first-child { border-top: none; }
        }
        @media (max-width: 560px) {
          .pdp-ingredient-grid { grid-template-columns: 1fr; }
          .pdp-ing-cell { border-right: none !important; }
          .pdp-ing-cell:not([data-i="0"]) { border-top: 1px solid ${BORDER}; border-bottom: none !important; }
          .pdp-ing-cell[data-i="0"] { border-bottom: none !important; }
        }
      `}</style>
    </div>
  );
}
