"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sukoon_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("sukoon_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("sukoon_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200,
      backgroundColor: "#2C2A1F", borderTop: "1px solid rgba(251,248,243,0.12)",
      padding: "1.25rem clamp(1.5rem, 5vw, 4rem)",
      display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
      gap: "1rem",
    }}>
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.7,
        color: "rgba(251,248,243,0.7)", maxWidth: "680px", flex: "1 1 300px",
      }}>
        We use cookies to improve your experience and understand how our site is used.{" "}
        <a href="/cookies" style={{ color: "#98A47D", textDecoration: "underline", textUnderlineOffset: "2px" }}>
          Cookie Policy
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase",
            background: "none", border: "1px solid rgba(251,248,243,0.25)",
            color: "rgba(251,248,243,0.55)", padding: "0.625rem 1.25rem", cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "rgba(251,248,243,0.55)"; el.style.color = "rgba(251,248,243,0.8)"; }}
          onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(251,248,243,0.25)"; el.style.color = "rgba(251,248,243,0.55)"; }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase",
            background: "#F7F1E4", border: "none",
            color: "#2C2A1F", padding: "0.625rem 1.25rem", cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#98A47D"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F7F1E4"; }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
