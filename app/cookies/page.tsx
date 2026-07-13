import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Sukoon",
};

const PROSE = {
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  lineHeight: 1.85,
  color: "#64685f",
};

const H2 = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
  fontWeight: 400,
  color: "#292b25",
  marginTop: "2.5rem",
  marginBottom: "0.875rem",
  lineHeight: 1.2,
};

const TABLE_CELL = {
  fontFamily: "var(--font-body)",
  fontSize: "0.8125rem",
  lineHeight: 1.6,
  color: "#64685f",
  padding: "0.625rem 0.875rem",
  borderBottom: "1px solid #E8D4AE",
  verticalAlign: "top" as const,
};

export default function CookiesPage() {
  return (
    <>
      <SiteNav />
      <main style={{ paddingTop: "calc(1.75rem + 120px)", backgroundColor: "#faf8f3", minHeight: "80vh" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 3rem)" }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, letterSpacing: "-0.015em", color: "#292b25",
            marginBottom: "0.5rem",
          }}>Cookie Policy</h1>
          <p style={{ ...PROSE, color: "#64685f", marginBottom: "2.5rem", fontSize: "0.8125rem" }}>
            Last updated: July 2025
          </p>

          <p style={PROSE}>This policy explains what cookies we use on sukoon.co.uk and why.</p>

          <h2 style={H2}>What are cookies?</h2>
          <p style={PROSE}>Cookies are small text files placed on your device by websites you visit. They are widely used to make sites work efficiently and to provide basic analytics information to site owners.</p>

          <h2 style={H2}>Cookies we use</h2>
          <div style={{ overflowX: "auto", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", borderTop: "1px solid #E8D4AE" }}>
              <thead>
                <tr>
                  {["Name", "Type", "Purpose", "Duration"].map(h => (
                    <th key={h} style={{ ...TABLE_CELL, color: "#292b25", fontWeight: 600, textAlign: "left", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</th>
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
