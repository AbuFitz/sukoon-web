"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/shopify";

function QtyButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      style={{
        width: 32, height: 32, background: "none",
        border: "1px solid rgba(41,43,37,0.2)",
        cursor: "pointer", color: "#292b25",
        fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
        transition: "border-color 150ms",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "#292b25")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(41,43,37,0.2)")}
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
      <div style={{
        maxWidth: 560, margin: "0 auto",
        padding: "clamp(4rem, 8vw, 7rem) clamp(2rem, 5vw, 3rem)",
        textAlign: "center",
      }}>
        <svg
          width="48" height="48" viewBox="0 0 24 24"
          fill="none" stroke="#c4c0b6" strokeWidth="1.2"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden style={{ marginBottom: "2rem" }}
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          lineHeight: 1.05, letterSpacing: "-0.025em",
          color: "#292b25", margin: "0 0 0.875rem",
        }}>
          Your bag is empty
        </h1>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.7,
          color: "#64685f", margin: "0 0 2.5rem",
        }}>
          Add The Daily Solace Fluid to begin your ritual.
        </p>
        <a
          href="/shop"
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#FFFFFF", backgroundColor: "#45543d",
            border: "1px solid #45543d",
            minHeight: 52, padding: "0 2.25rem",
            textDecoration: "none",
            transition: "background-color 220ms ease, transform 200ms ease",
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#34402f"; el.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#45543d"; el.style.transform = "none"; }}
        >
          Shop the Collection
        </a>
      </div>
    );
  }

  const subtotal = cart!.cost.subtotalAmount;
  const total    = cart!.cost.totalAmount;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(2.5rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem)" }}>

      {/* Page header */}
      <div style={{ borderBottom: "1px solid #e8e4da", paddingBottom: "1.5rem", marginBottom: "2.5rem" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#8a9482", margin: "0 0 0.5rem",
        }}>
          Review
        </p>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          lineHeight: 1.0, letterSpacing: "-0.028em",
          color: "#292b25", margin: 0,
        }}>
          Your Bag
        </h1>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_360px]"
        style={{ gap: "clamp(3rem, 5vw, 5rem)", alignItems: "start" }}
      >
        {/* ── Line items ── */}
        <div style={{ opacity: loading ? 0.6 : 1, transition: "opacity 0.2s" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "0 1rem",
            paddingBottom: "0.875rem",
            borderBottom: "1px solid #e8e4da",
            marginBottom: "0.25rem",
          }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9f95" }}>Product</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9f95", textAlign: "right" }}>Total</span>
          </div>

          {lines.map((line) => {
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
                  display: "flex", gap: "1.5rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid #e8e4da",
                }}
              >
                {/* Image */}
                <div style={{
                  position: "relative",
                  width: 90, height: 112, flexShrink: 0,
                  backgroundColor: "#ede9e0",
                }}>
                  {merchandise.image ? (
                    <Image
                      src={merchandise.image.url}
                      alt={merchandise.image.altText ?? merchandise.product.title}
                      fill sizes="90px"
                      style={{ objectFit: "cover" }}
                    />
                  ) : null}
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
                    color: "#292b25", margin: 0,
                  }}>
                    {merchandise.product.title}
                  </p>
                  {merchandise.title !== "Default Title" && (
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#8a9482", margin: 0 }}>
                      {merchandise.title}
                    </p>
                  )}
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#78836e", margin: 0 }}>
                    {unitPrice} each
                  </p>

                  {/* Qty controls + remove */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginTop: "0.625rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <QtyButton label="Decrease quantity" onClick={() => updateQty(line.id, line.quantity - 1)}>−</QtyButton>
                      <span style={{
                        fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                        color: "#292b25", minWidth: 24, textAlign: "center",
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
                        color: "#9a9f95", textDecoration: "underline", textUnderlineOffset: 3,
                        transition: "color 150ms",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#292b25")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#9a9f95")}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Line total */}
                <div style={{ flexShrink: 0, textAlign: "right", paddingTop: "0.125rem" }}>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
                    color: "#292b25",
                  }}>
                    {lineTotal}
                  </span>
                </div>
              </div>
            );
          })}

          <div style={{ marginTop: "1.5rem" }}>
            <a
              href="/shop"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#64685f", textDecoration: "none",
                borderBottom: "1px solid rgba(100,104,95,0.4)",
                paddingBottom: 2, transition: "color 200ms, border-color 200ms",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#45543d"; el.style.borderColor = "#45543d"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#64685f"; el.style.borderColor = "rgba(100,104,95,0.4)"; }}
            >
              ← Continue shopping
            </a>
          </div>
        </div>

        {/* ── Order summary ── */}
        <div style={{
          backgroundColor: "#f2ede4",
          padding: "2rem",
          position: "sticky",
          top: "calc(1.75rem + 100px)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#292b25", margin: "0 0 1.5rem",
          }}>
            Order Summary
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#64685f" }}>
                Subtotal ({cart!.totalQuantity} {cart!.totalQuantity === 1 ? "item" : "items"})
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: "#292b25" }}>
                {formatPrice(subtotal.amount, subtotal.currencyCode)}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#64685f" }}>Shipping</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#8a9482" }}>
                {parseFloat(subtotal.amount) >= 40 ? "Free" : "Calculated at checkout"}
              </span>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(41,43,37,0.15)", paddingTop: "1.25rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700, color: "#292b25" }}>Total</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700, color: "#292b25" }}>
                {formatPrice(total.amount, total.currencyCode)}
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#9a9f95", margin: "0.375rem 0 0" }}>
              Taxes calculated at checkout
            </p>
          </div>

          <a
            href={checkoutUrl ?? "#"}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "100%", minHeight: 52,
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#FFFFFF", backgroundColor: "#45543d",
              border: "1px solid #45543d",
              textDecoration: "none",
              pointerEvents: checkoutUrl ? "auto" : "none",
              opacity: checkoutUrl ? 1 : 0.5,
              transition: "background-color 220ms ease, transform 200ms ease",
            }}
            onMouseEnter={e => { if (checkoutUrl) { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#34402f"; el.style.transform = "translateY(-1px)"; } }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#45543d"; el.style.transform = "none"; }}
          >
            {loading ? "Updating…" : "Proceed to Checkout"}
          </a>

          {/* Trust micro-signals */}
          <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {["Free UK delivery over £40", "30-day returns", "Secure checkout"].map(t => (
              <p key={t} style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem",
                color: "#78836e", margin: 0,
                display: "flex", alignItems: "center", gap: "0.375rem",
              }}>
                <span style={{ color: "#8a9e7f" }}>✓</span> {t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
