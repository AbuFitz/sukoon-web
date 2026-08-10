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
      backgroundColor: "#FFFFFF", borderTop: "1px solid #E3E3DF",
      padding: "1.25rem clamp(1.25rem, 4vw, 3rem)",
      display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
      gap: "1rem",
    }}>
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.6,
        color: "#676764", maxWidth: 600, flex: "1 1 300px", margin: 0,
      }}>
        We use cookies to improve your experience.{" "}
        <a href="/cookies" style={{ color: "#111111", textDecoration: "underline", textUnderlineOffset: 2 }}>
          Cookie Policy
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: "0.625rem", flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
            background: "none", border: "1px solid #E3E3DF",
            color: "#92928D", padding: "0.625rem 1.25rem", cursor: "pointer",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#92928D"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E3E3DF"; }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
            backgroundColor: "#111111", border: "1px solid #111111",
            color: "#FFFFFF", padding: "0.625rem 1.25rem", cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#333333"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#111111"; }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
