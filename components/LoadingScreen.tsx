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
      {/* Blurred backdrop */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundColor: "rgba(41, 43, 37, 0.92)",
        backdropFilter: "blur(20px) saturate(1.2)",
        WebkitBackdropFilter: "blur(20px) saturate(1.2)",
      }} />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 35%, rgba(18,20,15,0.55) 100%)",
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
            height: "clamp(100px, 13vw, 160px)",
            width: "auto",
            display: "block",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
    </div>
  );
}
