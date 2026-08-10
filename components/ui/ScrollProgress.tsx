"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(pct);
      setVisible(scrollTop > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="scroll-progress"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "2px",
        zIndex: 9998, backgroundColor: "transparent",
        opacity: visible ? 1 : 0, transition: "opacity 0.6s ease",
        pointerEvents: "none",
      }}
    >
      <div style={{
        height: "100%", width: `${progress * 100}%`,
        backgroundColor: "#111111",
        transition: "width 0.08s linear",
      }} />
    </div>
  );
}
