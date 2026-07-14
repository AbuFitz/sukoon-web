"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"enter" | "visible" | "exit" | "hidden">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("visible"), 100);
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    const t3 = setTimeout(() => setPhase("hidden"), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "hidden") return null;
  const isVisible = phase === "visible";
  const isExiting = phase === "exit";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      display: "grid", placeItems: "center",
      opacity: isExiting ? 0 : 1,
      transition: isExiting ? "opacity 1s cubic-bezier(0.4,0,0.2,1)" : "none",
      pointerEvents: isExiting ? "none" : "all",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundColor: "rgba(63, 74, 54, 0.55)",
        backdropFilter: "blur(18px) saturate(1.1)",
        WebkitBackdropFilter: "blur(18px) saturate(1.1)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(30,36,24,0.3) 100%)",
      }} />
      <div style={{
        position: "relative",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)",
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
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
    </div>
  );
}
