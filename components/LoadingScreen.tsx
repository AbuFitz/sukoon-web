"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"hidden" | "enter" | "words" | "line" | "hold" | "exit">("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("sukoon_loaded")) return;
    sessionStorage.setItem("sukoon_loaded", "1");

    setPhase("enter");
    const t1 = setTimeout(() => setPhase("words"), 180);   // wordmark fades in
    const t2 = setTimeout(() => setPhase("line"),  500);   // line begins growing
    const t3 = setTimeout(() => setPhase("hold"),  1650);  // line complete, subtitle appears
    const t4 = setTimeout(() => setPhase("exit"),  2800);  // start exit
    const t5 = setTimeout(() => setPhase("hidden"), 3600); // fully gone

    // Dismiss early only if page takes too long — don't dismiss before hold
    const onLoad = () => {
      if (phase === "hidden" || phase === "exit") return;
    };
    window.addEventListener("load", onLoad, { once: true });

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (phase === "hidden") return null;

  const isExiting = phase === "exit";
  const hasWords  = phase === "words" || phase === "line" || phase === "hold" || phase === "exit";
  const hasLine   = phase === "line"  || phase === "hold" || phase === "exit";
  const hasSub    = phase === "hold"  || phase === "exit";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      backgroundColor: "#2d3628",
      display: "grid", placeItems: "center",
      opacity: isExiting ? 0 : 1,
      transition: isExiting
        ? "opacity 0.9s cubic-bezier(0.4,0,0.2,1)"
        : "opacity 0.35s ease",
      pointerEvents: isExiting ? "none" : "all",
    }}>
      <div style={{ textAlign: "center", userSelect: "none" }}>

        {/* Wordmark */}
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(40px, 5vw, 68px)",
          letterSpacing: "0.32em", textTransform: "uppercase",
          color: "#f5f2eb",
          opacity: hasWords ? 1 : 0,
          transform: hasWords ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)",
        }}>
          Sukoon
        </div>

        {/* Growing line */}
        <div style={{
          width: 180, height: "0.5px",
          margin: "28px auto 0",
          backgroundColor: "rgba(245,242,235,0.15)",
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            backgroundColor: "rgba(245,242,235,0.7)",
            transformOrigin: "left center",
            transform: hasLine ? "scaleX(1)" : "scaleX(0)",
            transition: hasLine
              ? "transform 1.1s cubic-bezier(0.22,1,0.36,1)"
              : "none",
          }} />
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 400,
          fontSize: "clamp(9px, 1vw, 11px)",
          letterSpacing: "0.26em", textTransform: "uppercase",
          color: "rgba(245,242,235,0.45)",
          margin: "20px 0 0",
          opacity: hasSub ? 1 : 0,
          transform: hasSub ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}>
          Daily Solace
        </p>
      </div>
    </div>
  );
}
