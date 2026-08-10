import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sukoon",
};

const PROSE = {
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  lineHeight: 1.7,
  color: "#525252",
};

const H2 = {
  fontFamily: "var(--font-body)",
  fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)",
  fontWeight: 600,
  color: "#000000",
  marginTop: "2.25rem",
  marginBottom: "0.75rem",
  lineHeight: 1.2,
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ minHeight: "70vh", paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <div className="block" style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(2rem, 5vw, 3rem)" }}>
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            letterSpacing: "-0.03em", color: "#000000",
            marginBottom: "0.5rem",
          }}>Terms &amp; Conditions</h1>
          <p style={{ ...PROSE, color: "#A3A3A3", marginBottom: "2.5rem", fontSize: "0.8125rem" }}>
            Last updated: July 2025
          </p>

          <p style={PROSE}>By using this website or purchasing from Sukoon Skin Ltd (&quot;Sukoon&quot;), you agree to the following terms. Please read them carefully.</p>

          <h2 style={H2}>The products</h2>
          <p style={PROSE}>All products are sold subject to availability. Product images are for illustrative purposes only. We reserve the right to adjust pricing or discontinue products at any time. Prices include VAT where applicable.</p>

          <h2 style={H2}>Orders</h2>
          <p style={PROSE}>Placing an order constitutes an offer to purchase. Your order is accepted when we send you a dispatch confirmation email. We reserve the right to cancel any order before dispatch, in which case a full refund will be issued promptly.</p>

          <h2 style={H2}>Delivery</h2>
          <p style={PROSE}>We aim to dispatch all orders within 2–3 working days. Delivery times are estimates and not guaranteed. Risk passes to you on delivery. See our <a href="/shipping" style={{ color: "#000000", textUnderlineOffset: "3px" }}>Shipping &amp; Returns</a> page for full details.</p>

          <h2 style={H2}>Returns</h2>
          <p style={PROSE}>You have the right to cancel your order within 14 days of receiving it under the Consumer Contracts Regulations 2013. Returned items must be unused, in original packaging, and returned within 14 days of cancellation notice. Refunds are issued within 14 days of receiving the returned item. Return postage is your responsibility unless the item is faulty.</p>

          <h2 style={H2}>Limitation of liability</h2>
          <p style={PROSE}>Nothing in these terms limits our liability for death, personal injury caused by our negligence, fraud, or any other matter we cannot legally exclude. Subject to this, our total liability is limited to the amount you paid for the product(s) in question.</p>

          <h2 style={H2}>Governing law</h2>
          <p style={PROSE}>These terms are governed by the laws of England and Wales. Any dispute will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

          <h2 style={H2}>Contact</h2>
          <p style={PROSE}>Sukoon Skin Ltd · hello@sukoon.co.uk · United Kingdom</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
