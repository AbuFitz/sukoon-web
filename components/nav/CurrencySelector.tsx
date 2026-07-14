"use client";

import { useState, useRef, useEffect } from "react";

const INK  = "#111110";
const LINE = "#E3E1DA";
const LINEN = "#FBF8F3";

const COUNTRIES = [
  { code: "GB", label: "United Kingdom", currency: "GBP", symbol: "£" },
  { code: "US", label: "United States",  currency: "USD", symbol: "$" },
  { code: "EU", label: "Europe",         currency: "EUR", symbol: "€" },
  { code: "AE", label: "UAE",            currency: "AED", symbol: "AED" },
  { code: "SA", label: "Saudi Arabia",   currency: "SAR", symbol: "SAR" },
  { code: "CA", label: "Canada",         currency: "CAD", symbol: "CA$" },
  { code: "AU", label: "Australia",      currency: "AUD", symbol: "A$" },
];

const STORAGE_KEY = "sukoon_country";

export function useCurrency() {
  if (typeof window === "undefined") return COUNTRIES[0];
  const saved = localStorage.getItem(STORAGE_KEY);
  return COUNTRIES.find(c => c.code === saved) ?? COUNTRIES[0];
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-2 2.5-3 5-3 9s1 6.5 3 9" />
      <path d="M12 3c2 2.5 3 5 3 9s-1 6.5-3 9" />
      <line x1="3.6" y1="9" x2="20.4" y2="9" />
      <line x1="3.6" y1="15" x2="20.4" y2="15" />
    </svg>
  );
}

export function CurrencySelector({ color }: { color?: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(COUNTRIES[0]);
  const ref = useRef<HTMLDivElement>(null);
  const col = color ?? INK;

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const found = COUNTRIES.find(c => c.code === saved);
    if (found) setSelected(found);
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
    localStorage.setItem(STORAGE_KEY, c.code);
    setOpen(false);
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        aria-label="Select country and currency"
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", gap: "0.3rem",
          background: "none", border: "none", cursor: "pointer", padding: 0,
          color: col, fontFamily: "var(--font-body)", fontSize: "0.75rem",
          fontWeight: 500, letterSpacing: "0.04em",
          transition: "color 0.4s ease",
        }}
      >
        <GlobeIcon />
        <span>{selected.symbol}</span>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 10px)", right: 0,
          backgroundColor: LINEN,
          border: `1px solid ${LINE}`,
          boxShadow: "0 8px 32px rgba(17,17,16,0.12)",
          zIndex: 90, minWidth: 200,
          padding: "0.5rem 0",
        }}>
          {COUNTRIES.map(c => (
            <button
              key={c.code}
              onClick={() => choose(c)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: "0.625rem 1.25rem",
                background: c.code === selected.code ? "#f0ede6" : "none",
                border: "none", cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                color: INK, textAlign: "left",
              }}
              onMouseEnter={e => { if (c.code !== selected.code) (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f2eb"; }}
              onMouseLeave={e => { if (c.code !== selected.code) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
            >
              <span>{c.label}</span>
              <span style={{ color: "#6E6E68", fontSize: "0.75rem" }}>{c.currency}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
