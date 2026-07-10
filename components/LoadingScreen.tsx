"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1200);
    const hideTimer = setTimeout(() => setVisible(false), 1700);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      backgroundColor: "#98A47D",
      display: "flex", alignItems: "center", justifyContent: "center",
      opacity: fading ? 0 : 1,
      transition: "opacity 0.5s ease",
      pointerEvents: fading ? "none" : "all",
    }}>
      <div style={{
        position: "relative",
        width: "clamp(220px, 55vw, 480px)",
        aspectRatio: "1 / 1",
        opacity: fading ? 0 : 1,
        transform: fading ? "scale(0.97)" : "scale(1)",
        transition: "opacity 0.4s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <Image
          src="/Sukoonlogo.png"
          alt="Sukoon"
          fill
          sizes="(max-width: 640px) 55vw, 480px"
          style={{
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
          priority
        />
      </div>
    </div>
  );
}
