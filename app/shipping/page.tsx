import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns — Sukoon",
};

const PROSE = {
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  lineHeight: 1.7,
  color: "#4A5256",
};

const H2 = {
  fontFamily: "var(--font-body)",
  fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)",
  fontWeight: 600,
  color: "#0D0F10",
  marginTop: "2.25rem",
  marginBottom: "0.75rem",
  lineHeight: 1.2,
};

const CARD = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #DCE1E3",
  borderRadius: 12,
  padding: "1.5rem",
  marginBottom: "0.75rem",
};

export default function ShippingPage() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ minHeight: "70vh", paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <div className="card" style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(2rem, 5vw, 3rem)" }}>
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            letterSpacing: "-0.03em", color: "#0D0F10",
            marginBottom: "0.5rem",
          }}>Shipping &amp; Returns</h1>
          <p style={{ ...PROSE, color: "#8A9296", marginBottom: "2.5rem", fontSize: "0.8125rem" }}>
            Last updated: July 2025
          </p>

          <h2 style={{ ...H2, marginTop: 0 }}>Delivery — UK</h2>

          <div style={CARD}>
            <p style={{ ...PROSE, fontWeight: 700, color: "#0D0F10", marginBottom: "0.375rem" }}>Standard Delivery</p>
            <p style={PROSE}>3–5 working days · Free on all orders</p>
          </div>
          <div style={CARD}>
            <p style={{ ...PROSE, fontWeight: 700, color: "#0D0F10", marginBottom: "0.375rem" }}>Express Delivery</p>
            <p style={PROSE}>1–2 working days · £4.95</p>
          </div>

          <p style={{ ...PROSE, marginTop: "1.25rem" }}>Orders placed before 1pm Monday–Friday are dispatched same day. Orders placed on weekends or UK bank holidays are processed the next working day. You will receive a tracking link by email once your order is dispatched.</p>

          <h2 style={H2}>International shipping</h2>
          <p style={PROSE}>We currently ship to the UK only. International shipping is on our roadmap — join our email list to be the first to know when it launches.</p>

          <h2 style={H2}>Returns</h2>
          <p style={PROSE}>We want you to love The Daily Solace Fluid. If for any reason you&apos;re not satisfied, we accept returns on unopened products within 14 days of delivery.</p>

          <p style={{ ...PROSE, marginTop: "1rem" }}>To start a return, email us at hello@sukoon.co.uk with your order number and reason for return. We&apos;ll reply within one working day with return instructions. Return postage is at your cost unless the product is faulty or we made an error.</p>

          <h2 style={H2}>Refunds</h2>
          <p style={PROSE}>Once we receive and inspect your return, we&apos;ll process your refund within 5 working days. Refunds are issued to the original payment method. You&apos;ll receive a confirmation email when the refund is issued.</p>

          <h2 style={H2}>Faulty or damaged items</h2>
          <p style={PROSE}>If your order arrives damaged or there&apos;s a problem with the product, please email hello@sukoon.co.uk within 7 days with a photo. We&apos;ll arrange a replacement or full refund at no cost to you.</p>

          <h2 style={H2}>Contact</h2>
          <p style={PROSE}>hello@sukoon.co.uk · We aim to respond within one working day.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
