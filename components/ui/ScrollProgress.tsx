"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getScrollEl = () => document.getElementById("site-frame") ?? window;

    const onScroll = () => {
      const el = getScrollEl();
      const scrollTop = el instanceof Window ? el.scrollY : el.scrollTop;
      const scrollHeight = el instanceof Window
        ? document.documentElement.scrollHeight - el.innerHeight
        : el.scrollHeight - el.clientHeight;
      const pct = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(pct);
      setVisible(scrollTop > 60);
    };

    const el = getScrollEl();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 9998,
        backgroundColor: "transparent",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          backgroundColor: "#3F4A36",
          transition: "width 0.08s linear",
          boxShadow: "0 0 6px rgba(63,74,54,0.4)",
        }}
      />
    </div>
  );
}
