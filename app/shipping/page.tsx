import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns — Sukoon",
};

const PROSE = {
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  lineHeight: 1.85,
  color: "#6B7B5C",
};

const H2 = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
  fontWeight: 400,
  color: "#2C2A1F",
  marginTop: "2.5rem",
  marginBottom: "0.875rem",
  lineHeight: 1.2,
};

const CARD = {
  backgroundColor: "#F7F1E4",
  border: "1px solid #E8D4AE",
  padding: "1.5rem",
  marginBottom: "0.75rem",
};

export default function ShippingPage() {
  return (
    <>
      <SiteNav />
      <main style={{ paddingTop: "calc(1.75rem + 56px)", backgroundColor: "#FBF8F3", minHeight: "80vh" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 3rem)" }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, letterSpacing: "-0.015em", color: "#2C2A1F",
            marginBottom: "0.5rem",
          }}>Shipping &amp; Returns</h1>
          <p style={{ ...PROSE, color: "#A9BA98", marginBottom: "2.5rem", fontSize: "0.8125rem" }}>
            Last updated: July 2025
          </p>

          <h2 style={{ ...H2, marginTop: 0 }}>Delivery — UK</h2>

          <div style={CARD}>
            <p style={{ ...PROSE, fontWeight: 600, color: "#2C2A1F", marginBottom: "0.375rem" }}>Standard Delivery</p>
            <p style={PROSE}>3–5 working days · Free on all orders</p>
          </div>
          <div style={CARD}>
            <p style={{ ...PROSE, fontWeight: 600, color: "#2C2A1F", marginBottom: "0.375rem" }}>Express Delivery</p>
            <p style={PROSE}>1–2 working days · £4.95</p>
          </div>

          <p style={{ ...PROSE, marginTop: "1.25rem" }}>Orders placed before 1pm Monday–Friday are dispatched same day. Orders placed on weekends or UK bank holidays are processed the next working day. You will receive a tracking link by email once your order is dispatched.</p>

          <h2 style={H2}>International shipping</h2>
          <p style={PROSE}>We currently ship to the UK only. International shipping is on our roadmap — join our email list to be the first to know when it launches.</p>

          <h2 style={H2}>Returns</h2>
          <p style={PROSE}>We want you to love The Daily Solace Fluid. If for any reason you're not satisfied, we accept returns on unopened products within 14 days of delivery.</p>

          <p style={{ ...PROSE, marginTop: "1rem" }}>To start a return, email us at hello@sukoon.co.uk with your order number and reason for return. We'll reply within one working day with return instructions. Return postage is at your cost unless the product is faulty or we made an error.</p>

          <h2 style={H2}>Refunds</h2>
          <p style={PROSE}>Once we receive and inspect your return, we'll process your refund within 5 working days. Refunds are issued to the original payment method. You'll receive a confirmation email when the refund is issued.</p>

          <h2 style={H2}>Faulty or damaged items</h2>
          <p style={PROSE}>If your order arrives damaged or there's a problem with the product, please email hello@sukoon.co.uk within 7 days with a photo. We'll arrange a replacement or full refund at no cost to you.</p>

          <h2 style={H2}>Contact</h2>
          <p style={PROSE}>hello@sukoon.co.uk · We aim to respond within one working day.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
