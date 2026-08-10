"use client";

const INK   = "#000000";
const MUTED = "#A3A3A3";
const LINE  = "#E5E5E5";

const fieldStyle: React.CSSProperties = {
  width: "100%", padding: "0.875rem 1rem",
  fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: INK,
  border: `1px solid ${LINE}`, borderRadius: 2, outline: "none", backgroundColor: "#FAFAFA",
};

export function AccountForm() {
  return (
    <>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#525252", lineHeight: 1.6, marginBottom: "1.75rem" }}>
        Sign in to track your order, save your details, and join the waitlist for early access.
      </p>

      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        <input type="email" placeholder="Email address" autoComplete="email" style={fieldStyle} />
        <input type="password" placeholder="Password" autoComplete="current-password" style={fieldStyle} />
        <button type="submit" className="btn btn-dark tracked-wide" style={{ marginTop: "0.375rem" }}>
          Sign In
        </button>
      </form>

      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", margin: "1.75rem 0" }}>
        <span style={{ flex: 1, height: "1px", backgroundColor: LINE }} />
        <span className="tracked" style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, color: MUTED }}>New here</span>
        <span style={{ flex: 1, height: "1px", backgroundColor: LINE }} />
      </div>

      <button className="btn btn-outline tracked-wide" style={{ width: "100%" }}>
        Create Account
      </button>

      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, marginTop: "2rem", lineHeight: 1.6 }}>
        Account and checkout will be powered by Shopify once Sukoon launches.
      </p>
    </>
  );
}
