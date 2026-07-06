import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Sukoon",
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

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main style={{ paddingTop: "calc(1.75rem + 56px)", backgroundColor: "#FBF8F3", minHeight: "80vh" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 3rem)" }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, letterSpacing: "-0.015em", color: "#2C2A1F",
            marginBottom: "0.5rem",
          }}>Privacy Policy</h1>
          <p style={{ ...PROSE, color: "#A9BA98", marginBottom: "2.5rem", fontSize: "0.8125rem" }}>
            Last updated: July 2025
          </p>

          <p style={PROSE}>Sukoon Skin Ltd ("Sukoon", "we", "us") takes your privacy seriously. This policy explains what data we collect, why we collect it, and how we handle it when you use our website at sukoon.co.uk.</p>

          <h2 style={H2}>Information we collect</h2>
          <p style={PROSE}>When you place an order, we collect your name, email address, delivery address, and payment details (processed securely via Stripe — we never store card numbers). When you subscribe to our email list, we collect your email address only. We also collect standard server logs (IP address, browser type, pages visited) to monitor site performance.</p>

          <h2 style={H2}>How we use your data</h2>
          <p style={PROSE}>We use your data to fulfil orders, communicate about your purchase, and — only with your consent — send you news about new products and offers. We do not sell, rent, or share your personal data with third parties for their marketing purposes.</p>

          <h2 style={H2}>Cookies</h2>
          <p style={PROSE}>We use a small number of cookies to make the site work (session cookies) and, with your consent, analytics cookies to understand how the site is used. See our <a href="/cookies" style={{ color: "#2C2A1F", textUnderlineOffset: "3px" }}>Cookie Policy</a> for full details.</p>

          <h2 style={H2}>Your rights</h2>
          <p style={PROSE}>Under UK GDPR you have the right to access, correct, or delete your personal data, and to object to or restrict how it is processed. To exercise any of these rights, contact us at hello@sukoon.co.uk. You also have the right to lodge a complaint with the Information Commissioner's Office (ico.org.uk).</p>

          <h2 style={H2}>Data retention</h2>
          <p style={PROSE}>We retain order data for six years to comply with HMRC requirements. Email marketing data is held until you unsubscribe. You can unsubscribe from any email at any time using the link at the bottom of each message.</p>

          <h2 style={H2}>Contact</h2>
          <p style={PROSE}>Sukoon Skin Ltd · hello@sukoon.co.uk · United Kingdom</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
