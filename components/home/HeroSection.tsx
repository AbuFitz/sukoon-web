"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { homepageImages } from "@/lib/homepage";
import { useCart } from "@/lib/cart-context";
import type { FeaturedProduct } from "./FeaturedProductsSection";

const BADGES = ["100% Waterless", "Made in the UK", "Fragrance-Free"];

export function HeroSection({ products }: { products: FeaturedProduct[] }) {
  const sizes = useMemo(
    () => products.filter(p => p.handle.startsWith("daily-solace-fluid")),
    [products],
  );
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

  return (
    <section aria-label="Hero" className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)" }}>
      <div
        className="hero-grid"
        style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "clamp(1rem, 2vw, 1.25rem)" }}
      >
        {/* Main product card */}
        <div className="card" style={{
          position: "relative", overflow: "hidden",
          backgroundColor: "#F1EDE4",
          minHeight: "clamp(420px, 52vw, 560px)",
          padding: "clamp(2rem, 4vw, 3rem)",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
        }}>
          <Image
            src={homepageImages.hero}
            alt="Sukoon Daily Solace Fluid"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
            style={{ objectFit: "cover", objectPosition: "72% 50%" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(0deg, rgba(17,17,17,0.55) 0%, rgba(17,17,17,0.05) 55%, rgba(17,17,17,0) 75%)",
          }} />
          <div style={{ position: "relative", maxWidth: 460 }}>
            <h1 style={{
              fontFamily: "var(--font-body)", fontWeight: 700,
              fontSize: "clamp(1.875rem, 3.4vw, 3rem)",
              lineHeight: 1.05, letterSpacing: "-0.03em",
              color: "#FFFFFF", margin: "0 0 0.875rem",
            }}>
              Pure formulation.
              <br />
              Concentrated care.
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.6,
              color: "rgba(255,255,255,0.85)", margin: "0 0 1.5rem", maxWidth: 380,
            }}>
              One waterless oil. Five active ingredients. Built for your face and your hairline.
            </p>
            <Link href="/shop" className="btn btn-dark" style={{ backgroundColor: "#FFFFFF", color: "#111111", border: "1px solid #FFFFFF" }}>
              Explore Formula
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 2vw, 1.25rem)" }}>
          {/* Benefit badges card */}
          <div className="card" style={{
            padding: "clamp(1.5rem, 3vw, 2rem)",
            display: "flex", flexDirection: "column", gap: "1rem", flex: 1,
          }}>
            <span className="eyebrow">Why Sukoon</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {BADGES.map(b => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.6,
              color: "#666666", margin: 0,
            }}>
              No water, no fillers — every drop is active. Formulated and manufactured in the UK.
            </p>
          </div>

          {/* Quick buy card */}
          <div className="card" style={{
            padding: "clamp(1.5rem, 3vw, 2rem)",
            display: "flex", flexDirection: "column", gap: "1.125rem",
          }}>
            <span className="eyebrow">Quick Buy</span>

            {sizes.length > 1 && (
              <div className="toggle" role="tablist" aria-label="Select size">
                {sizes.map((s, i) => (
                  <button
                    key={s.handle}
                    role="tab"
                    aria-selected={i === sizeIdx}
                    className="toggle-option"
                    data-active={i === sizeIdx}
                    onClick={() => setSizeIdx(i)}
                    style={{ flex: 1 }}
                  >
                    {s.title.replace("Daily Solace Fluid", "").replace("—", "").trim() || s.title}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.75rem", letterSpacing: "-0.02em", color: "#111111", margin: 0 }}>
                {selected?.price ?? "—"}
              </p>
              <Link href={selected ? `/products/${selected.handle}` : "/shop"} style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 600, color: "#666666", textDecoration: "underline", textUnderlineOffset: 3 }}>
                View details
              </Link>
            </div>

            <button
              onClick={handleAdd}
              disabled={!selected?.variantId || loading || added}
              className="btn btn-dark"
              style={{
                width: "100%",
                backgroundColor: added ? "#F4F4F2" : "#111111",
                color: added ? "#111111" : "#FFFFFF",
                borderColor: added ? "#EDEBE5" : "#111111",
                opacity: !selected?.variantId ? 0.45 : 1,
              }}
            >
              {added ? "Added to bag" : loading ? "Adding…" : !selected?.variantId ? "Unavailable" : "Add to Bag"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
