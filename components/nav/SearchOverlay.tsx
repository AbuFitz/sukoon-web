"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Panel } from "./Panel";
import { products } from "@/lib/products";

const INK  = "#111110";
const GREY = "#6E6E68";
const LINE = "#E3E1DA";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  return (
    <Panel open={open} onClose={onClose} title="Search">
      <div style={{
        display: "flex", alignItems: "center", gap: "0.875rem",
        border: `1.5px solid ${INK}`,
        padding: "0.875rem 1.125rem",
        marginBottom: "2rem",
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" aria-hidden>
          <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products"
          style={{
            flex: 1, border: "none", outline: "none",
            fontFamily: "var(--font-body)", fontSize: "1rem", color: INK,
            background: "transparent",
          }}
        />
      </div>

      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, color: GREY,
        letterSpacing: "0.12em", textTransform: "uppercase",
        marginBottom: "1.25rem",
      }}>
        Products
      </p>
      <div className="grid grid-cols-2" style={{ gap: "1.25rem" }}>
        {products.map((p) => (
          <a key={p.slug} href="/shop" onClick={onClose} style={{ textDecoration: "none", color: INK }}>
            <div style={{ position: "relative", aspectRatio: "1 / 1", backgroundColor: "#F1E9D7", marginBottom: "0.75rem", border: `1px solid ${LINE}` }}>
              <Image src={p.src} alt={p.name} fill sizes="(max-width: 768px) 50vw, 200px" style={{ objectFit: "cover" }} />
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.25rem" }}>{p.name}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: GREY }}>{p.price}</p>
          </a>
        ))}
      </div>
    </Panel>
  );
}
