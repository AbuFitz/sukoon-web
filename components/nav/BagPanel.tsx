"use client";

import Image from "next/image";
import { Panel } from "./Panel";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/shopify";

const TEXT   = "#111111";
const MUTED  = "#969690";
const BORDER = "#D0D0CB";

function Stepper({ qty, onChange }: { qty: number; onChange: (qty: number) => void }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", borderRadius: 8,
      border: `1px solid ${BORDER}`,
    }}>
      <button
        aria-label="Decrease quantity"
        onClick={() => onChange(qty - 1)}
        style={{ width: 30, height: 30, background: "none", border: "none", cursor: "pointer", color: TEXT, fontSize: "1rem", fontFamily: "var(--font-body)" }}
      >
        −
      </button>
      <span style={{ width: 28, textAlign: "center", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: TEXT }}>
        {qty}
      </span>
      <button
        aria-label="Increase quantity"
        onClick={() => onChange(qty + 1)}
        style={{ width: 30, height: 30, background: "none", border: "none", cursor: "pointer", color: TEXT, fontSize: "1rem", fontFamily: "var(--font-body)" }}
      >
        +
      </button>
    </div>
  );
}

export function BagPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { cart, loading, removeFromCart, updateQty, checkoutUrl } = useCart();
  const lines = cart?.lines.nodes ?? [];

  if (lines.length === 0) {
    return (
      <Panel open={open} onClose={onClose} title="Your bag">
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center", padding: "3rem 0",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1.0625rem", color: TEXT, marginBottom: "0.5rem" }}>
            Your bag is empty
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, lineHeight: 1.6, maxWidth: 260, marginBottom: "2rem" }}>
            Add something to get started.
          </p>
          <a href="/shop" onClick={onClose} className="btn btn-dark">
            Shop now
          </a>
        </div>
      </Panel>
    );
  }

  const subtotal = cart?.cost.subtotalAmount;

  return (
    <Panel open={open} onClose={onClose} title="Your bag">
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", opacity: loading ? 0.6 : 1, transition: "opacity 0.2s" }}>
        {lines.map((line) => {
          const { merchandise } = line;
          const price = formatPrice(merchandise.priceV2.amount, merchandise.priceV2.currencyCode);
          const lineTotal = formatPrice(
            String(parseFloat(merchandise.priceV2.amount) * line.quantity),
            merchandise.priceV2.currencyCode,
          );
          return (
            <div key={line.id} style={{ display: "flex", gap: "1rem" }}>
              {merchandise.image ? (
                <div style={{ position: "relative", width: 80, height: 96, flexShrink: 0, overflow: "hidden", borderRadius: 12, backgroundColor: "#F4F4F2" }}>
                  <Image src={merchandise.image.url} alt={merchandise.image.altText ?? merchandise.product.title} fill sizes="80px" style={{ objectFit: "cover" }} />
                </div>
              ) : (
                <div style={{ width: 80, height: 96, flexShrink: 0, borderRadius: 12, backgroundColor: "#F4F4F2" }} />
              )}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: TEXT, margin: "0 0 0.25rem" }}>
                    {merchandise.product.title}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, margin: "0 0 0.5rem" }}>
                    {merchandise.title !== "Default Title" ? `${merchandise.title} · ` : ""}{price} · {lineTotal}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Stepper qty={line.quantity} onChange={(qty) => updateQty(line.id, qty)} />
                  <button
                    onClick={() => removeFromCart(line.id)}
                    style={{
                      background: "none", border: "none", cursor: "pointer", padding: 0,
                      fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED,
                      textDecoration: "underline", textUnderlineOffset: 2,
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: TEXT }}>Subtotal</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: TEXT }}>
              {subtotal ? formatPrice(subtotal.amount, subtotal.currencyCode) : "—"}
            </span>
          </div>
          <a
            href={checkoutUrl ?? "#"}
            className="btn btn-dark"
            style={{ width: "100%", pointerEvents: checkoutUrl ? "auto" : "none" }}
          >
            {loading ? "Updating…" : "Checkout"}
          </a>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, textAlign: "center", marginTop: "0.75rem" }}>
            Shipping &amp; taxes calculated at checkout
          </p>
        </div>
      </div>
    </Panel>
  );
}
