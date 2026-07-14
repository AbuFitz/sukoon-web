"use client";

import { useEffect, useRef } from "react";

const DEFAULT_TITLE = "Sukoon Skin — Beauty Rooted in Simplicity";

// The ticker string — loops continuously when user is away
const TICKER = "  Your ritual is waiting  ·  Come back to Sukoon  ·  Five ingredients. Real results.  ·  Beauty rooted in simplicity  ·  ";

export function TabAttention() {
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const posRef      = useRef(0);

  useEffect(() => {
    const clear = () => {
      if (timerRef.current)    clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const onHide = () => {
      clear();
      // Wait 3s before starting the ticker
      timerRef.current = setTimeout(() => {
        posRef.current = 0;
        intervalRef.current = setInterval(() => {
          // Rotate one character at a time for smooth scroll effect
          const display = TICKER.slice(posRef.current) + TICKER.slice(0, posRef.current);
          document.title = display.slice(0, 50);
          posRef.current = (posRef.current + 1) % TICKER.length;
        }, 90);
      }, 3000);
    };

    const onShow = () => {
      clear();
      document.title = DEFAULT_TITLE;
    };

    const handleVisibility = () => {
      if (document.hidden) onHide();
      else onShow();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      clear();
    };
  }, []);

  return null;
}
