"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"hidden" | "enter" | "line" | "exit">("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("sukoon_loaded")) return;
    sessionStorage.setItem("sukoon_loaded", "1");

    // Sequence: enter → grow line → exit
    setPhase("enter");
    const t1 = setTimeout(() => setPhase("line"), 80);
    const t2 = setTimeout(() => setPhase("exit"), 1100);

    const hide = () => setPhase("hidden");
    const t3 = setTimeout(hide, 1700);

    // Also dismiss on full window load
    const onLoad = () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      setPhase("exit");
      setTimeout(() => setPhase("hidden"), 600);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "hidden") return null;

  const isExiting = phase === "exit";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      backgroundColor: "#3F4A36",
      display: "grid", placeItems: "center",
      opacity: isExiting ? 0 : 1,
      transform: isExiting ? "translateY(-8px)" : "translateY(0)",
      transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)",
      pointerEvents: isExiting ? "none" : "all",
    }}>
      <div style={{ textAlign: "center" }}>
        {/* Wordmark */}
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(34px, 4vw, 58px)",
          letterSpacing: "0.25em", textTransform: "uppercase",
          color: "#f5f3ed",
          opacity: isExiting ? 0 : 1,
          transform: isExiting ? "translateY(-14px)" : "translateY(0)",
          transition: "opacity 0.5s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)",
        }}>
          Sukoon
        </div>

        {/* Growing line */}
        <div style={{
          width: 150, height: 1,
          margin: "22px auto 0",
          backgroundColor: "rgba(245,243,237,0.2)",
          overflow: "hidden",
          opacity: isExiting ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}>
          <div style={{
            height: "100%",
            backgroundColor: "#f5f3ed",
            transformOrigin: "left center",
            transform: phase === "line" || phase === "exit" ? "scaleX(1)" : "scaleX(0)",
            transition: phase === "line" ? "transform 0.95s cubic-bezier(0.22,1,0.36,1)" : "none",
          }} />
        </div>
      </div>
    </div>
  );
}
