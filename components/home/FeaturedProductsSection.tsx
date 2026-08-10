"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { productImageMap, type FeaturedHandle } from "@/lib/homepage";

export type FeaturedProduct = {
  handle: string;
  title: string;
  price: string;
  variantId?: string;
  availableForSale?: boolean;
};

const PROPERTY_TAGS = ["100% Waterless", "5 Active Ingredients", "UK Halal Certified", "Fragrance Free"];
const TRANSPARENCY = ["Made in UK", "Halal Certified", "Vegan & Cruelty Free", "100% Waterless"];

export function FeaturedProductsSection({ products }: { products: FeaturedProduct[] }) {
  const sizes = useMemo(() => products.slice(0, 2), [products]);
  const [sizeIdx, setSizeIdx] = useState(0);
  const selected = sizes[sizeIdx] ?? sizes[0];

  const { addToCart, loading } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = async () => {
    if (!selected?.variantId || loading || added) return;
    await addToCart(selected.variantId, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const src = selected
    ? productImageMap[selected.handle as FeaturedHandle]
    : undefined;

  const sizeLabel = (handle: string) => handle.includes("15ml") ? "15ml" : "30ml";
  const sizeName = (handle: string) => handle.includes("15ml") ? "Discovery Size" : "Full-Size Ritual";

  return (
    <section id="fluid" className="container" style={{ paddingTop: "clamp(3rem, 5vw, 4.5rem)", paddingBottom: "clamp(3rem, 5vw, 4.5rem)" }}>
      <div style={{ marginBottom: "1.75rem" }}>
        <span className="eyebrow">The Formula</span>
        <h2 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
          letterSpacing: "-0.025em", color: "#000000", margin: "0.5rem 0 0",
        }}>
          The Daily Solace Fluid
        </h2>
      </div>

      <div className="block configurator-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
        {/* Image */}
        <div style={{ position: "relative", minHeight: 420, backgroundColor: "#F5F5F5", borderRight: "1px solid #E5E5E5" }}>
          {src && (
            <Image
              key={src}
              src={src}
              alt={selected?.title ?? "The Daily Solace Fluid"}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="img-hover"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        {/* Configurator */}
        <div style={{ padding: "clamp(2rem, 4vw, 3rem)", display: "flex", flexDirection: "column" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "1.5rem", letterSpacing: "-0.02em", color: "#000000", margin: "0 0 0.375rem",
          }}>
            Daily Solace Fluid
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1.375rem", fontWeight: 700,
            color: "#000000", margin: "0 0 1.5rem",
          }}>
            {selected?.price ?? "—"}
          </p>

          {/* Dual size selector cards */}
          <div className="size-selector" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {sizes.map((s, i) => (
              <button
                key={s.handle}
                className="selector-card"
                data-active={i === sizeIdx}
                onClick={() => setSizeIdx(i)}
              >
                <span className="tracked-wide" style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, color: "#A3A3A3", marginBottom: "0.5rem" }}>
                  {sizeLabel(s.handle)}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700, color: "#000000", marginBottom: "0.25rem" }}>
                  {sizeName(s.handle)}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#525252" }}>
                  {s.price}
                </span>
              </button>
            ))}
          </div>

          {/* Property tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {PROPERTY_TAGS.map(t => <span key={t} className="tag">{t}</span>)}
          </div>

          {/* Add to bag */}
          <button
            onClick={handleAdd}
            disabled={!selected?.variantId || loading || added}
            className="btn btn-dark tracked-wide"
            style={{
              width: "100%",
              backgroundColor: added ? "#FFFFFF" : "#000000",
              color: added ? "#000000" : "#FFFFFF",
              borderColor: "#000000",
              opacity: !selected?.variantId ? 0.4 : 1,
              marginBottom: "1.5rem",
            }}
          >
            {added ? "Added to Bag" : loading ? "Adding…" : !selected?.variantId ? "Unavailable" : `Add to Bag — ${selected?.price}`}
          </button>

          {/* Transparency bar */}
          <div className="divider" style={{ marginBottom: "1rem" }} />
          <div className="transparency-bar" style={{ display: "flex", flexWrap: "wrap" }}>
            {TRANSPARENCY.map((t, i) => (
              <span key={t} className="tracked" style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
                color: "#525252", paddingRight: "0.875rem", marginRight: "0.875rem",
                borderRight: i < TRANSPARENCY.length - 1 ? "1px solid #E5E5E5" : "none",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .configurator-grid { grid-template-columns: 1fr !important; }
          .configurator-grid > div:first-child { aspect-ratio: 4 / 5; min-height: 0 !important; border-right: none !important; border-bottom: 1px solid #E5E5E5; }
          .size-selector { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
