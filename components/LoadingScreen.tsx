"use client";

import { useEffect, useState } from "react";

// Module-level flag prevents React strict-mode double-invoke from skipping the animation
let hasAttempted = false;

export function LoadingScreen() {
  const [phase, setPhase] = useState<"hidden" | "enter" | "visible" | "exit">("hidden");

  useEffect(() => {
    if (hasAttempted) return;
    hasAttempted = true;

    // Only show on first visit — sessionStorage clears when the browser tab closes
    if (sessionStorage.getItem("sukoon_loaded")) return;
    sessionStorage.setItem("sukoon_loaded", "1");

    setPhase("enter");
    const t1 = setTimeout(() => setPhase("visible"), 80);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => setPhase("hidden"), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "hidden") return null;
  const isVisible = phase === "visible";
  const isExiting = phase === "exit";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      display: "grid", placeItems: "center",
      backgroundColor: "#3F4A36",
      opacity: isExiting ? 0 : 1,
      transition: isExiting ? "opacity 1s cubic-bezier(0.4,0,0.2,1)" : "none",
      pointerEvents: isExiting ? "none" : "all",
    }}>
      {/* Cream panel — mirrors .site-frame language */}
      <div style={{
        backgroundColor: "#FAF8F4",
        borderRadius: 22,
        border: "1px solid rgba(244,240,232,0.45)",
        boxShadow: "0 20px 60px rgba(24,32,22,0.16), 0 3px 12px rgba(24,32,22,0.08)",
        padding: "clamp(3rem, 6vw, 5rem) clamp(3.5rem, 7vw, 6rem)",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
        transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)",
        userSelect: "none",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Sukoonlogo.png"
          alt="Sukoon"
          style={{
            height: "clamp(100px, 14vw, 180px)",
            width: "auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
