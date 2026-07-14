"use client";

import { useState, useRef, useEffect } from "react";

const INK  = "#111110";
const LINE = "#E3E1DA";
const LINEN = "#FBF8F3";
const GREY = "#6E6E68";

export const COUNTRIES = [
  { code: "GB", label: "United Kingdom", currency: "GBP", symbol: "£" },
  { code: "US", label: "United States",  currency: "USD", symbol: "$" },
  { code: "EU", label: "Europe",         currency: "EUR", symbol: "€" },
  { code: "AE", label: "UAE",            currency: "AED", symbol: "AED" },
  { code: "SA", label: "Saudi Arabia",   currency: "SAR", symbol: "SAR" },
  { code: "CA", label: "Canada",         currency: "CAD", symbol: "CA$" },
  { code: "AU", label: "Australia",      currency: "AUD", symbol: "A$" },
];

const STORAGE_KEY = "sukoon_country";

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-2 2.5-3 5-3 9s1 6.5 3 9" />
      <path d="M12 3c2 2.5 3 5 3 9s-1 6.5-3 9" />
      <line x1="3.6" y1="9" x2="20.4" y2="9" />
      <line x1="3.6" y1="15" x2="20.4" y2="15" />
    </svg>
  );
}

export function CurrencySelector({
  color,
  openUp = false,
  light = false,
}: {
  color?: string;
  openUp?: boolean;
  light?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(COUNTRIES[0]);
  const ref = useRef<HTMLDivElement>(null);
  const col = color ?? INK;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const found = COUNTRIES.find(c => c.code === saved);
      if (found) setSelected(found);
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const choose = (c: typeof COUNTRIES[number]) => {
    setSelected(c);
    try { localStorage.setItem(STORAGE_KEY, c.code); } catch {}
    setOpen(false);
  };

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    ...(openUp
      ? { bottom: "calc(100% + 8px)", top: "auto" }
      : { top: "calc(100% + 8px)", bottom: "auto" }),
    left: 0,
    backgroundColor: light ? "rgba(63,74,54,0.95)" : LINEN,
    border: `1px solid ${light ? "rgba(255,255,255,0.15)" : LINE}`,
    boxShadow: "0 8px 32px rgba(17,17,16,0.14)",
    zIndex: 200,
    minWidth: 210,
    maxHeight: "min(320px, 60vh)",
    overflowY: "auto",
    padding: "0.375rem 0",
    backdropFilter: "blur(12px)",
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        aria-label="Select country and currency"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", gap: "0.35rem",
          background: "none", border: "none", cursor: "pointer", padding: 0,
          color: col, fontFamily: "var(--font-body)", fontSize: "0.75rem",
          fontWeight: 500, letterSpacing: "0.04em",
          transition: "color 0.4s ease",
        }}
      >
        <GlobeIcon />
        <span>{selected.symbol}</span>
        <svg width="9" height="9" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }}>
          <polyline points="1,1 5,5 9,1" />
        </svg>
      </button>

      {open && (
        <div style={dropdownStyle}>
          {COUNTRIES.map(c => (
            <button
              key={c.code}
              onClick={() => choose(c)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: "0.5rem 1.125rem",
                background: c.code === selected.code
                  ? (light ? "rgba(255,255,255,0.1)" : "#ece8e0")
                  : "none",
                border: "none", cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                color: light ? "#f5f3ed" : INK, textAlign: "left",
                transition: "background-color 120ms ease",
              }}
              onMouseEnter={e => { if (c.code !== selected.code) (e.currentTarget as HTMLElement).style.backgroundColor = light ? "rgba(255,255,255,0.07)" : "#f5f2eb"; }}
              onMouseLeave={e => { if (c.code !== selected.code) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
            >
              <span>{c.label}</span>
              <span style={{ color: light ? "rgba(245,243,237,0.55)" : GREY, fontSize: "0.6875rem", fontWeight: 500 }}>{c.currency}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
