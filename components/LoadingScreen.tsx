"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only show on the very first visit in this browser session
    if (sessionStorage.getItem("sukoon_loaded")) return;
    sessionStorage.setItem("sukoon_loaded", "1");
    setVisible(true);

    // Simulate loading progress
    let p = 0;
    const tick = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(tick);
        setTimeout(() => setFading(true), 200);
        setTimeout(() => setVisible(false), 900);
      }
      setProgress(Math.min(p, 100));
    }, 90);

    // Also fade out once window fully loads
    const onLoad = () => {
      clearInterval(tick);
      setProgress(100);
      setTimeout(() => setFading(true), 200);
      setTimeout(() => setVisible(false), 900);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => { clearInterval(tick); };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      backgroundColor: "#98A47D",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      opacity: fading ? 0 : 1,
      transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
      pointerEvents: fading ? "none" : "all",
    }}>
      {/* Logo */}
      <div style={{
        position: "relative",
        width: "clamp(200px, 50vw, 420px)",
        aspectRatio: "1 / 1",
        opacity: fading ? 0 : 1,
        transform: fading ? "scale(0.97)" : "scale(1)",
        transition: "opacity 0.5s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        marginBottom: "clamp(2rem, 6vw, 4rem)",
      }}>
        <Image
          src="/Sukoonlogo.png"
          alt="Sukoon — Beauty Rooted in Simplicity"
          fill
          sizes="(max-width: 640px) 50vw, 420px"
          style={{
            objectFit: "contain",
            filter: "brightness(0) saturate(100%) invert(97%) sepia(10%) saturate(300%) hue-rotate(340deg) brightness(103%)",
          }}
          priority
        />
      </div>

      {/* Progress bar */}
      <div style={{
        width: "clamp(120px, 28vw, 240px)",
        height: "1.5px",
        backgroundColor: "rgba(247,241,228,0.25)",
        borderRadius: "1px",
        overflow: "hidden",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.4s ease",
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "#F7F1E4",
          borderRadius: "1px",
          transition: "width 0.15s ease",
        }} />
      </div>
    </div>
  );
}
