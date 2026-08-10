import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Sukoon",
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

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ minHeight: "70vh", paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <div className="block" style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(2rem, 5vw, 3rem)" }}>
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            letterSpacing: "-0.03em", color: "#000000",
            marginBottom: "0.5rem",
          }}>Privacy Policy</h1>
          <p style={{ ...PROSE, color: "#A3A3A3", marginBottom: "2.5rem", fontSize: "0.8125rem" }}>
            Last updated: July 2025
          </p>

          <p style={PROSE}>Sukoon Skin Ltd (&quot;Sukoon&quot;, &quot;we&quot;, &quot;us&quot;) takes your privacy seriously. This policy explains what data we collect, why we collect it, and how we handle it when you use our website at sukoon.co.uk.</p>

          <h2 style={H2}>Information we collect</h2>
          <p style={PROSE}>When you place an order, we collect your name, email address, delivery address, and payment details (processed securely via Stripe — we never store card numbers). When you subscribe to our email list, we collect your email address only. We also collect standard server logs (IP address, browser type, pages visited) to monitor site performance.</p>

          <h2 style={H2}>How we use your data</h2>
          <p style={PROSE}>We use your data to fulfil orders, communicate about your purchase, and — only with your consent — send you news about new products and offers. We do not sell, rent, or share your personal data with third parties for their marketing purposes.</p>

          <h2 style={H2}>Cookies</h2>
          <p style={PROSE}>We use a small number of cookies to make the site work (session cookies) and, with your consent, analytics cookies to understand how the site is used. See our <a href="/cookies" style={{ color: "#000000", textUnderlineOffset: "3px" }}>Cookie Policy</a> for full details.</p>

          <h2 style={H2}>Your rights</h2>
          <p style={PROSE}>Under UK GDPR you have the right to access, correct, or delete your personal data, and to object to or restrict how it is processed. To exercise any of these rights, contact us at hello@sukoon.co.uk. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ico.org.uk).</p>

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
