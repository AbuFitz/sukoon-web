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
      position: "fixed", bottom: 16, left: 16, right: 16, zIndex: 200,
      display: "flex", justifyContent: "center",
    }}>
      <div className="block" style={{
        width: "100%", maxWidth: 720,
        backgroundColor: "#FFFFFF",
        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
        padding: "1.25rem 1.5rem",
        display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
        gap: "1rem",
      }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.6,
          color: "#525252", maxWidth: 420, flex: "1 1 260px", margin: 0,
        }}>
          We use cookies to improve your experience.{" "}
          <a href="/cookies" style={{ color: "#000000", textDecoration: "underline", textUnderlineOffset: 2 }}>
            Cookie Policy
          </a>
          .
        </p>
        <div style={{ display: "flex", gap: "0.625rem", flexShrink: 0 }}>
          <button onClick={decline} className="btn btn-outline">
            Decline
          </button>
          <button onClick={accept} className="btn btn-dark">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
