"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/shopify";

const TEXT   = "#111111";
const MUTED  = "#9A9A9A";
const BORDER = "#E2E2E2";

function QtyButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      style={{
        width: 32, height: 32, background: "none", borderRadius: 8,
        border: `1px solid ${BORDER}`,
        cursor: "pointer", color: TEXT,
        fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
        transition: "border-color 150ms",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = TEXT)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}
    >
      {children}
    </button>
  );
}

export function CartView() {
  const { cart, loading, removeFromCart, updateQty, checkoutUrl } = useCart();
  const lines = cart?.lines.nodes ?? [];

  if (lines.length === 0) {
    return (
      <div className="card" style={{
        maxWidth: 560, margin: "0 auto",
        padding: "clamp(3rem, 7vw, 5rem) clamp(2rem, 5vw, 3rem)",
        textAlign: "center",
      }}>
        <svg
          width="48" height="48" viewBox="0 0 24 24"
          fill="none" stroke={BORDER} strokeWidth="1.2"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden style={{ marginBottom: "2rem" }}
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <h1 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          lineHeight: 1.0, letterSpacing: "-0.035em",
          color: TEXT, margin: "0 0 0.875rem",
        }}>
          Your bag is empty
        </h1>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.6,
          color: "#5C5C5C", margin: "0 0 2rem",
        }}>
          Add The Daily Solace Fluid to begin your ritual.
        </p>
        <a href="/shop" className="btn btn-dark">
          Shop the Collection
        </a>
      </div>
    );
  }

  const subtotal = cart!.cost.subtotalAmount;
  const total    = cart!.cost.totalAmount;

  return (
    <div>
      {/* Page header */}
      <div style={{ marginBottom: "1.25rem" }}>
        <span className="eyebrow">Review</span>
        <h1 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          lineHeight: 1.0, letterSpacing: "-0.035em",
          color: TEXT, margin: "0.5rem 0 0",
        }}>
          Your Bag
        </h1>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_360px]"
        style={{ gap: "clamp(1rem, 2vw, 1.25rem)", alignItems: "start" }}
      >
        {/* ── Line items ── */}
        <div className="card" style={{ padding: "clamp(1.25rem, 3vw, 2rem)", opacity: loading ? 0.6 : 1, transition: "opacity 0.2s" }}>
          {lines.map((line, i) => {
            const { merchandise } = line;
            const lineTotal = formatPrice(
              String(parseFloat(merchandise.priceV2.amount) * line.quantity),
              merchandise.priceV2.currencyCode,
            );
            const unitPrice = formatPrice(merchandise.priceV2.amount, merchandise.priceV2.currencyCode);

            return (
              <div
                key={line.id}
                style={{
                  display: "flex", gap: "1.25rem",
                  padding: "1.5rem 0",
                  borderTop: i > 0 ? `1px solid ${BORDER}` : "none",
                }}
              >
                {/* Image */}
                <div className="card-sm" style={{
                  position: "relative",
                  width: 84, height: 104, flexShrink: 0,
                  backgroundColor: "#EFEFEF", overflow: "hidden",
                }}>
                  {merchandise.image ? (
                    <Image
                      src={merchandise.image.url}
                      alt={merchandise.image.altText ?? merchandise.product.title}
                      fill sizes="84px"
                      style={{ objectFit: "cover" }}
                    />
                  ) : null}
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700,
                    color: TEXT, margin: 0,
                  }}>
                    {merchandise.product.title}
                  </p>
                  {merchandise.title !== "Default Title" && (
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, margin: 0 }}>
                      {merchandise.title}
                    </p>
                  )}
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#5C5C5C", margin: 0 }}>
                    {unitPrice} each
                  </p>

                  {/* Qty controls + remove */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginTop: "0.625rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <QtyButton label="Decrease quantity" onClick={() => updateQty(line.id, line.quantity - 1)}>−</QtyButton>
                      <span style={{
                        fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                        color: TEXT, minWidth: 24, textAlign: "center",
                      }}>
                        {line.quantity}
                      </span>
                      <QtyButton label="Increase quantity" onClick={() => updateQty(line.id, line.quantity + 1)}>+</QtyButton>
                    </div>
                    <button
                      onClick={() => removeFromCart(line.id)}
                      style={{
                        background: "none", border: "none", cursor: "pointer", padding: 0,
                        fontFamily: "var(--font-body)", fontSize: "0.75rem",
                        color: MUTED, textDecoration: "underline", textUnderlineOffset: 3,
                        transition: "color 150ms",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
                      onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Line total */}
                <div style={{ flexShrink: 0, textAlign: "right", paddingTop: "0.125rem" }}>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700,
                    color: TEXT,
                  }}>
                    {lineTotal}
                  </span>
                </div>
              </div>
            );
          })}

          <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: `1px solid ${BORDER}` }}>
            <a href="/shop" className="badge">← Continue shopping</a>
          </div>
        </div>

        {/* ── Order summary ── */}
        <div className="card" style={{
          backgroundColor: "#EBEBEB",
          padding: "1.75rem",
          position: "sticky",
          top: 92,
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: TEXT, margin: "0 0 1.5rem",
          }}>
            Order Summary
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#5C5C5C" }}>
                Subtotal ({cart!.totalQuantity} {cart!.totalQuantity === 1 ? "item" : "items"})
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 700, color: TEXT }}>
                {formatPrice(subtotal.amount, subtotal.currencyCode)}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#5C5C5C" }}>Shipping</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED }}>
                {parseFloat(subtotal.amount) >= 40 ? "Free" : "Calculated at checkout"}
              </span>
            </div>
          </div>

          <div style={{ borderTop: `1px solid #E2E2E2`, paddingTop: "1.25rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700, color: TEXT }}>Total</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700, color: TEXT }}>
                {formatPrice(total.amount, total.currencyCode)}
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: MUTED, margin: "0.375rem 0 0" }}>
              Taxes calculated at checkout
            </p>
          </div>

          <a
            href={checkoutUrl ?? "#"}
            className="btn btn-dark"
            style={{
              width: "100%",
              pointerEvents: checkoutUrl ? "auto" : "none",
              opacity: checkoutUrl ? 1 : 0.5,
            }}
          >
            {loading ? "Updating…" : "Proceed to Checkout"}
          </a>

          {/* Trust micro-signals */}
          <div style={{ marginTop: "1.25rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["Free UK delivery", "30-day returns", "Secure checkout"].map(t => (
              <span key={t} className="badge" style={{ backgroundColor: "#FFFFFF" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
