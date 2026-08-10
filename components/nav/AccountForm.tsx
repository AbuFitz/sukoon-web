"use client";

const INK   = "#111111";
const MUTED = "#92928D";
const LINE  = "#E3E3DF";

const fieldStyle: React.CSSProperties = {
  width: "100%", padding: "0.875rem 1rem",
  fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: INK,
  border: `1px solid ${LINE}`, outline: "none", backgroundColor: "#FFFFFF",
};

export function AccountForm() {
  return (
    <>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#676764", lineHeight: 1.6, marginBottom: "1.75rem" }}>
        Sign in to track your order, save your details, and join the waitlist for early access.
      </p>

      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        <input type="email" placeholder="Email address" autoComplete="email" style={fieldStyle} />
        <input type="password" placeholder="Password" autoComplete="current-password" style={fieldStyle} />
        <button type="submit" style={{
          marginTop: "0.375rem", padding: "0.9375rem", border: `1px solid ${INK}`, cursor: "pointer",
          backgroundColor: INK, color: "#FFFFFF",
          fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
          letterSpacing: "0.16em", textTransform: "uppercase",
        }}>
          Sign In
        </button>
      </form>

      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", margin: "1.75rem 0" }}>
        <span style={{ flex: 1, height: "1px", backgroundColor: LINE }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", color: MUTED, textTransform: "uppercase" }}>New here</span>
        <span style={{ flex: 1, height: "1px", backgroundColor: LINE }} />
      </div>

      <button style={{
        width: "100%", padding: "0.9375rem", cursor: "pointer",
        backgroundColor: "transparent", color: INK, border: `1px solid ${LINE}`,
        fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
        letterSpacing: "0.16em", textTransform: "uppercase",
      }}>
        Create Account
      </button>

      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, marginTop: "2rem", lineHeight: 1.6 }}>
        Account and checkout will be powered by Shopify once Sukoon launches.
      </p>
    </>
  );
}
