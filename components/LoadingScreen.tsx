"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"hidden" | "enter" | "visible" | "exit">("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("sukoon_loaded")) return;
    sessionStorage.setItem("sukoon_loaded", "1");

    setPhase("enter");
    const t1 = setTimeout(() => setPhase("visible"), 80);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => setPhase("hidden"), 3400);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (phase === "hidden") return null;

  const isVisible = phase === "visible";
  const isExiting = phase === "exit";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      display: "grid", placeItems: "center",
      opacity: isExiting ? 0 : 1,
      transition: isExiting
        ? "opacity 1.2s cubic-bezier(0.4,0,0.2,1)"
        : "opacity 0.3s ease",
      pointerEvents: isExiting ? "none" : "all",
    }}>
      {/* Light linen backdrop */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundColor: "#F5F1E8",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }} />

      {/* Soft vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(200,193,180,0.28) 100%)",
      }} />

      {/* Logo */}
      <div style={{
        position: "relative",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 1.4s cubic-bezier(0.22,1,0.36,1), transform 1.5s cubic-bezier(0.22,1,0.36,1)",
        userSelect: "none",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Sukoonlogo.png"
          alt="Sukoon"
          style={{
            height: "clamp(160px, 22vw, 260px)",
            width: "auto",
            display: "block",
            filter: "brightness(0)",
          }}
        />
      </div>
    </div>
  );
}
