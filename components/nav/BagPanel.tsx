"use client";

import Image from "next/image";
import { Panel } from "./Panel";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";

const INK  = "#111110";
const GREY = "#6E6E68";
const LINE = "#E3E1DA";

function Stepper({ qty, onChange }: { qty: number; onChange: (qty: number) => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", border: `1px solid ${LINE}` }}>
      <button
        aria-label="Decrease quantity"
        onClick={() => onChange(qty - 1)}
        style={{ width: 26, height: 26, background: "none", border: "none", cursor: "pointer", color: INK, fontSize: "0.875rem" }}
      >
        −
      </button>
      <span style={{ width: 24, textAlign: "center", fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: INK }}>{qty}</span>
      <button
        aria-label="Increase quantity"
        onClick={() => onChange(qty + 1)}
        style={{ width: 26, height: 26, background: "none", border: "none", cursor: "pointer", color: INK, fontSize: "0.875rem" }}
      >
        +
      </button>
    </div>
  );
}

export function BagPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, updateQty, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <Panel open={open} onClose={onClose} title="Your Bag">
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
          padding: "2.5rem 0",
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginBottom: "1.25rem" }}>
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: INK, marginBottom: "0.625rem" }}>
            Your bag is empty
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: GREY, lineHeight: 1.6, maxWidth: "280px", marginBottom: "1.75rem" }}>
            Add The Daily Solace Fluid to your bag to begin your ritual.
          </p>
          <a href="/shop" onClick={onClose} style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "0.9375rem 2rem", textDecoration: "none",
            backgroundColor: INK, color: "#FFFFFF",
            fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase",
          }}>
            Shop Now
          </a>
        </div>
      </Panel>
    );
  }

  return (
    <Panel open={open} onClose={onClose} title="Your Bag">
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {items.map((item) => {
          const product = products.find(p => p.slug === item.slug);
          if (!product) return null;
          return (
            <div key={item.slug} style={{ display: "flex", gap: "1rem" }}>
              <div style={{ position: "relative", width: 72, height: 90, flexShrink: 0, backgroundColor: "#E8D4AE" }}>
                <Image src={product.src} alt={product.name} fill sizes="72px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: INK, marginBottom: "0.2rem" }}>
                    {product.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: GREY, marginBottom: "0.5rem" }}>
                    {product.size} · {product.price}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Stepper qty={item.qty} onChange={(qty) => updateQty(item.slug, qty)} />
                  <button
                    onClick={() => removeItem(item.slug)}
                    style={{
                      background: "none", border: "none", cursor: "pointer", padding: 0,
                      fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: GREY,
                      textDecoration: "underline", letterSpacing: "0.02em",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div style={{ borderTop: `1px solid ${LINE}`, paddingTop: "1.25rem", marginTop: "0.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: INK }}>Subtotal</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: INK }}>£{subtotal.toFixed(2)}</span>
          </div>
          <button
            onClick={onClose}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", width: "100%",
              padding: "0.9375rem 2rem", border: "none", cursor: "pointer",
              backgroundColor: INK, color: "#FFFFFF",
              fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
              letterSpacing: "0.12em", textTransform: "uppercase",
            }}
          >
            Checkout
          </button>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: GREY, textAlign: "center", marginTop: "0.75rem" }}>
            Shipping &amp; taxes calculated at checkout
          </p>
        </div>
      </div>
    </Panel>
  );
}
