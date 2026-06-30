"use client";

const INK  = "#111110";
const GREY = "#6E6E68";
const LINE = "#E3E1DA";

const fieldStyle: React.CSSProperties = {
  width: "100%", padding: "0.875rem 1rem",
  fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: INK,
  border: `1px solid ${LINE}`, outline: "none", backgroundColor: "#FAFAF8",
};

export function AccountForm() {
  return (
    <>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: GREY, lineHeight: 1.6, marginBottom: "1.75rem" }}>
        Sign in to track your order, save your details, and join the waitlist for early access.
      </p>

      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        <input type="email" placeholder="Email address" autoComplete="email" style={fieldStyle} />
        <input type="password" placeholder="Password" autoComplete="current-password" style={fieldStyle} />
        <button type="submit" style={{
          marginTop: "0.375rem", padding: "0.9375rem", border: "none", cursor: "pointer",
          backgroundColor: INK, color: "#FFFFFF",
          fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          Sign In
        </button>
      </form>

      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", margin: "1.75rem 0" }}>
        <span style={{ flex: 1, height: "1px", backgroundColor: LINE }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.06em", color: GREY, textTransform: "uppercase" }}>New here</span>
        <span style={{ flex: 1, height: "1px", backgroundColor: LINE }} />
      </div>

      <button style={{
        width: "100%", padding: "0.9375rem", cursor: "pointer",
        backgroundColor: "transparent", color: INK, border: `1px solid ${INK}`,
        fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
        letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        Create Account
      </button>

      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: GREY, marginTop: "2rem", lineHeight: 1.6 }}>
        Account and checkout will be powered by Shopify once Sukoon launches.
      </p>
    </>
  );
}
