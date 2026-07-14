"use client";

import { useEffect, useRef } from "react";

const DEFAULT_TITLE = "Sukoon Skin — Beauty Rooted in Simplicity";

const AWAY_FRAMES = [
  "🌿 We miss you — Sukoon Skin",
  "✨ Your skin misses you too",
  "🌿 Come back to simplicity",
  "✨ 5 ingredients. Real results.",
  "🌿 Sukoon Skin — Beauty Rooted in Simplicity",
];

export function TabAttention() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const clear = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const onHide = () => {
      clear();
      // Start cycling after 4 seconds away
      timerRef.current = setTimeout(() => {
        frameRef.current = 0;
        intervalRef.current = setInterval(() => {
          document.title = AWAY_FRAMES[frameRef.current % AWAY_FRAMES.length];
          frameRef.current++;
        }, 2200);
      }, 4000);
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
