import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Sukoon",
};

const PROSE = {
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  lineHeight: 1.7,
  color: "#5C5C5C",
};

const H2 = {
  fontFamily: "var(--font-body)",
  fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)",
  fontWeight: 600,
  color: "#111111",
  marginTop: "2.25rem",
  marginBottom: "0.75rem",
  lineHeight: 1.2,
};

const TABLE_CELL = {
  fontFamily: "var(--font-body)",
  fontSize: "0.8125rem",
  lineHeight: 1.6,
  color: "#5C5C5C",
  padding: "0.625rem 0.875rem",
  borderBottom: "1px solid #E2E2E2",
  verticalAlign: "top" as const,
};

export default function CookiesPage() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ minHeight: "70vh", paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <div className="card" style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(2rem, 5vw, 3rem)" }}>
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            letterSpacing: "-0.03em", color: "#111111",
            marginBottom: "0.5rem",
          }}>Cookie Policy</h1>
          <p style={{ ...PROSE, color: "#9A9A9A", marginBottom: "2.5rem", fontSize: "0.8125rem" }}>
            Last updated: July 2025
          </p>

          <p style={PROSE}>This policy explains what cookies we use on sukoon.co.uk and why.</p>

          <h2 style={H2}>What are cookies?</h2>
          <p style={PROSE}>Cookies are small text files placed on your device by websites you visit. They are widely used to make sites work efficiently and to provide basic analytics information to site owners.</p>

          <h2 style={H2}>Cookies we use</h2>
          <div style={{ overflowX: "auto", marginTop: "1rem", borderRadius: 8, border: "1px solid #E2E2E2" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Name", "Type", "Purpose", "Duration"].map(h => (
                    <th key={h} style={{ ...TABLE_CELL, color: "#111111", fontWeight: 700, textAlign: "left", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={TABLE_CELL}>sukoon_cart</td>
                  <td style={TABLE_CELL}>Essential</td>
                  <td style={TABLE_CELL}>Saves your bag contents across page loads</td>
                  <td style={TABLE_CELL}>Session / 30 days</td>
                </tr>
                <tr>
                  <td style={TABLE_CELL}>sukoon_cookie_consent</td>
                  <td style={TABLE_CELL}>Essential</td>
                  <td style={TABLE_CELL}>Records your cookie consent preference</td>
                  <td style={TABLE_CELL}>1 year</td>
                </tr>
                <tr>
                  <td style={TABLE_CELL}>_ga, _ga_*</td>
                  <td style={TABLE_CELL}>Analytics</td>
                  <td style={TABLE_CELL}>Google Analytics — anonymous site usage statistics</td>
                  <td style={TABLE_CELL}>2 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={H2}>Managing cookies</h2>
          <p style={PROSE}>You can control cookies through the banner shown on your first visit. You can also clear cookies at any time through your browser settings. Note that disabling essential cookies may affect how the site works (e.g. your bag may not persist).</p>

          <h2 style={H2}>Changes</h2>
          <p style={PROSE}>We may update this policy as we add or remove features. The date at the top of this page reflects when it was last changed.</p>

          <h2 style={H2}>Contact</h2>
          <p style={PROSE}>Questions? Email us at hello@sukoon.co.uk.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
