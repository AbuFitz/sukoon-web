"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"hidden" | "enter" | "words" | "line" | "hold" | "exit">("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("sukoon_loaded")) return;
    sessionStorage.setItem("sukoon_loaded", "1");

    setPhase("enter");
    const t1 = setTimeout(() => setPhase("words"), 200);
    const t2 = setTimeout(() => setPhase("line"),  550);
    const t3 = setTimeout(() => setPhase("hold"),  1700);
    const t4 = setTimeout(() => setPhase("exit"),  2900);
    const t5 = setTimeout(() => setPhase("hidden"), 3800);

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
      display: "grid", placeItems: "center",
      opacity: isExiting ? 0 : 1,
      transition: isExiting
        ? "opacity 1s cubic-bezier(0.4,0,0.2,1)"
        : "opacity 0.4s ease",
      pointerEvents: isExiting ? "none" : "all",
    }}>
      {/* Blurred backdrop */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundColor: "rgba(41, 43, 37, 0.82)",
        backdropFilter: "blur(18px) saturate(1.2)",
        WebkitBackdropFilter: "blur(18px) saturate(1.2)",
      }} />

      {/* Subtle vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(20,22,18,0.55) 100%)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", textAlign: "center", userSelect: "none" }}>

        {/* Small eyebrow */}
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 500,
          fontSize: "0.5625rem", letterSpacing: "0.28em", textTransform: "uppercase",
          color: "rgba(245,242,235,0.35)",
          marginBottom: "1.5rem",
          opacity: hasWords ? 1 : 0,
          transform: hasWords ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 1s ease 0.1s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.1s",
        }}>
          A Daily Ritual
        </p>

        {/* Wordmark */}
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(48px, 6vw, 80px)",
          letterSpacing: "0.36em", textTransform: "uppercase",
          color: "#f5f2eb",
          opacity: hasWords ? 1 : 0,
          transform: hasWords ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1)",
        }}>
          Sukoon
        </div>

        {/* Growing line */}
        <div style={{
          width: 200, height: "1px",
          margin: "2rem auto 0",
          backgroundColor: "rgba(245,242,235,0.1)",
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            backgroundColor: "rgba(152,164,125,0.8)",
            transformOrigin: "left center",
            transform: hasLine ? "scaleX(1)" : "scaleX(0)",
            transition: hasLine
              ? "transform 1.2s cubic-bezier(0.22,1,0.36,1)"
              : "none",
          }} />
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 400,
          fontSize: "clamp(8px, 0.9vw, 10px)",
          letterSpacing: "0.24em", textTransform: "uppercase",
          color: "rgba(245,242,235,0.3)",
          margin: "1.5rem 0 0",
          opacity: hasSub ? 1 : 0,
          transform: hasSub ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 1s ease 0.1s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.1s",
        }}>
          Rooted in calm
        </p>
      </div>
    </div>
  );
}
