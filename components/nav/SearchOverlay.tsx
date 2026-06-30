"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const INK  = "#2C2A1F";
const SAGE = "#6B7B5C";
const LINE = "#E5DECF";

const results = [
  { name: "The Daily Solace Fluid",                 price: "£35", src: "https://images.unsplash.com/photo-1707539160277-e39464517645?w=500&q=85&fit=crop" },
  { name: "The Daily Solace Fluid — 15ml Trial",     price: "£20", src: "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=500&q=85&fit=crop" },
  { name: "The Daily Solace Fluid + Travel Case",    price: "£42", src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=85&fit=crop" },
];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
      window.addEventListener("keydown", onKey);
      return () => { clearTimeout(t); window.removeEventListener("keydown", onKey); };
    }
  }, [open, onClose]);

  return (
    <div aria-hidden={!open} style={{
      position: "fixed", inset: 0, zIndex: 80,
      pointerEvents: open ? "auto" : "none",
    }}>
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          backgroundColor: "rgba(44,42,31,0.4)",
          opacity: open ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <div style={{
        position: "relative", maxWidth: "900px", margin: "0 auto",
        marginTop: "clamp(0px, 8vh, 80px)",
        maxHeight: "84vh", overflowY: "auto",
        backgroundColor: "#FFFFFF",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(-16px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        boxShadow: "0 30px 60px rgba(44,42,31,0.25)",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "1rem",
          padding: "1.5rem clamp(1.25rem, 4vw, 2.5rem)",
          borderBottom: `1px solid ${LINE}`,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={SAGE} strokeWidth="1.6" strokeLinecap="round" aria-hidden>
            <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            style={{
              flex: 1, border: "none", outline: "none",
              fontFamily: "var(--font-body)", fontSize: "1.25rem", color: INK,
              background: "transparent",
            }}
          />
          <button aria-label="Close search" onClick={onClose} style={{
            background: "none", border: "none", color: INK, cursor: "pointer", padding: "0.25rem", display: "flex",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
              <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        <div style={{ padding: "1.75rem clamp(1.25rem, 4vw, 2.5rem) 2.25rem" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1.0625rem", fontWeight: 600, color: INK,
            marginBottom: "1.25rem",
          }}>
            Products
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: "1.5rem" }}>
            {results.map((r) => (
              <a key={r.name} href="#shop" onClick={onClose} style={{ textDecoration: "none", color: INK }}>
                <div style={{ position: "relative", aspectRatio: "1 / 1", backgroundColor: "#F1E9D7", marginBottom: "0.75rem" }}>
                  <Image src={r.src} alt={r.name} fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", marginBottom: "0.25rem" }}>{r.name}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: SAGE }}>{r.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
