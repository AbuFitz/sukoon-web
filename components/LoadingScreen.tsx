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
        backgroundColor: "rgba(41, 43, 37, 0.88)",
        backdropFilter: "blur(20px) saturate(1.2)",
        WebkitBackdropFilter: "blur(20px) saturate(1.2)",
      }} />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 35%, rgba(18,20,15,0.6) 100%)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", textAlign: "center", userSelect: "none" }}>

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

        {/* Heartbeat line */}
        <div style={{
          width: 220,
          margin: "2rem auto 0",
          opacity: hasLine ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}>
          <svg
            viewBox="0 0 220 36"
            width="220"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "block",
              animation: hasLine ? "sukoon-beat 1.6s ease-in-out infinite" : "none",
            }}
          >
            <polyline
              points="0,18 38,18 50,4 58,32 66,10 74,26 82,18 220,18"
              stroke="rgba(152,164,125,0.85)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <style>{`
          @keyframes sukoon-beat {
            0%   { transform: scaleX(0.92); opacity: 0.5; }
            40%  { transform: scaleX(1);    opacity: 1;   }
            60%  { transform: scaleX(1);    opacity: 1;   }
            100% { transform: scaleX(0.92); opacity: 0.5; }
          }
        `}</style>
      </div>
    </div>
  );
}
