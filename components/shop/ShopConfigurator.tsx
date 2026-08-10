"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";
import { ingredients } from "@/lib/homepage";
import type { VariantInfo } from "@/lib/shopify";

const TEXT   = "#111111";
const MUTED  = "#9A9A9A";
const BORDER = "#E2E2E2";

export function ShopConfigurator({ variantIds = {} }: { variantIds?: Record<string, VariantInfo> }) {
  const { addToCart, loading } = useCart();
  const [slug, setSlug] = useState(products[0].slug);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const product = products.find(p => p.slug === slug) ?? products[0];
  const variantInfo = variantIds[slug];
  const variantId = variantInfo?.variantId;
  const availableForSale = variantInfo?.availableForSale ?? true;

  const handleAdd = async () => {
    if (!variantId || !availableForSale || loading || justAdded) return;
    await addToCart(variantId, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2200);
  };

  return (
    <section className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)" }}>
      <div
        className="shop-grid"
        style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "clamp(1rem, 2vw, 1.25rem)", alignItems: "start" }}
      >
        {/* Gallery */}
        <div className="card" style={{ padding: "clamp(1rem, 2vw, 1.25rem)" }}>
          <div className="card-sm" style={{
            position: "relative", aspectRatio: "4 / 5",
            maxHeight: "clamp(440px, 50vw, 600px)",
            overflow: "hidden", backgroundColor: "#EFEFEF",
          }}>
            <Image
              src={product.src} alt={product.name} fill priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Configurator */}
        <div className="card" style={{ padding: "clamp(1.5rem, 3vw, 2rem)" }}>
          <span className="eyebrow">Shop</span>
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(1.625rem, 2.4vw, 2.125rem)",
            letterSpacing: "-0.03em", color: TEXT,
            margin: "0.5rem 0 0.625rem", lineHeight: 1.05,
          }}>
            The Daily Solace Fluid
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1.25rem", fontWeight: 700,
            color: TEXT, margin: "0 0 1.5rem",
          }}>
            {product.price}
          </p>

          {/* Size switcher */}
          <div className="toggle" role="tablist" aria-label="Select size" style={{ marginBottom: "1.25rem", width: "100%" }}>
            {products.map(opt => (
              <button
                key={opt.slug}
                type="button"
                role="tab"
                aria-selected={opt.slug === slug}
                className="toggle-option"
                data-active={opt.slug === slug}
                onClick={() => setSlug(opt.slug)}
                style={{ flex: 1, textAlign: "center", border: "none", cursor: "pointer" }}
              >
                {opt.size} — {opt.price}
              </button>
            ))}
          </div>

          {/* Qty */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED }}>Qty</span>
            <div className="toggle" style={{ padding: 4 }}>
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty(q => Math.max(1, q - 1))}
                style={{
                  width: 34, height: 34, background: "none", border: "none", borderRadius: 8,
                  cursor: "pointer", color: TEXT, fontSize: "1.1rem", fontFamily: "var(--font-body)",
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
                  cursor: "pointer", color: TEXT, fontSize: "1.1rem", fontFamily: "var(--font-body)",
                }}
              >+</button>
            </div>
          </div>

          {/* Add to Bag */}
          {variantId && !availableForSale ? (
            <button className="btn" disabled style={{
              width: "100%", height: 52, marginBottom: "1.25rem",
              backgroundColor: "#EFEFEF", color: MUTED, border: `1px solid ${BORDER}`, cursor: "default",
            }}>
              Sold out
            </button>
          ) : (
            <button
              onClick={handleAdd}
              disabled={!variantId || loading || justAdded}
              className="btn btn-dark"
              style={{
                width: "100%", height: 52, marginBottom: "1.25rem",
                backgroundColor: justAdded ? "#EFEFEF" : "#111111",
                color: justAdded ? "#111111" : "#FFFFFF",
                borderColor: justAdded ? BORDER : "#111111",
                cursor: !variantId ? "not-allowed" : "pointer",
                opacity: !variantId ? 0.5 : 1,
              }}
            >
              {justAdded ? "Added to bag" : loading ? "Adding…" : !variantId ? "Unavailable" : "Add to Bag"}
            </button>
          )}

          {/* Trust badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["Free UK delivery", "30-day returns", "Made in the UK"].map(t => (
              <span key={t} className="badge" style={{ backgroundColor: "#EFEFEF" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Formula bento */}
      <div style={{ marginTop: "clamp(1rem, 2vw, 1.25rem)" }}>
        <span className="eyebrow">Formula</span>
        <div className="card shop-formula-grid" style={{ marginTop: "0.75rem" }}>
          {ingredients.map(ing => (
            <div key={ing.name} style={{
              padding: "clamp(1.25rem, 2.5vw, 1.5rem)",
              display: "flex", alignItems: "center", gap: "1rem",
            }}>
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "1.5rem", letterSpacing: "-0.03em", color: TEXT, flexShrink: 0,
              }}>
                {ing.percent}
              </span>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9375rem", color: TEXT, margin: "0 0 0.125rem" }}>
                  {ing.name}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.45, color: "#5C5C5C", margin: 0 }}>
                  {ing.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .shop-formula-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        .shop-formula-grid > div:nth-child(odd) { border-right: 1px solid ${BORDER}; }
        .shop-formula-grid > div:nth-child(n + 3) { border-top: 1px solid ${BORDER}; }
        .shop-formula-grid > div:last-child { grid-column: 1 / -1; border-right: none; }
        @media (max-width: 900px) {
          .shop-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .shop-formula-grid { grid-template-columns: 1fr; }
          .shop-formula-grid > div { border-right: none !important; border-top: none; }
          .shop-formula-grid > div:nth-child(n + 2) { border-top: 1px solid ${BORDER} !important; }
        }
      `}</style>
    </section>
  );
}
