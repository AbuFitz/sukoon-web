"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Panel } from "./Panel";
import { products } from "@/lib/products";

const TEXT   = "#111111";
const MUTED  = "#9A9A9A";
const BORDER = "#E2E2E2";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 400);
      return () => clearTimeout(t);
    } else {
      setQuery("");
    }
  }, [open]);

  const filtered = query.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.size.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  return (
    <Panel open={open} onClose={onClose} title="Search">
      {/* Input */}
      <div style={{
        display: "flex", alignItems: "center", gap: "0.75rem",
        border: `1px solid ${BORDER}`, borderRadius: 8, backgroundColor: "#F5F5F5",
        padding: "0.75rem 1.25rem",
        marginBottom: "1.75rem",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search products…"
          style={{
            flex: 1, border: "none", outline: "none",
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: TEXT,
            background: "transparent",
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            style={{ background: "none", border: "none", cursor: "pointer", color: MUTED, padding: 0, display: "flex" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        )}
      </div>

      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, color: MUTED,
        letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem",
      }}>
        {query ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""}` : "All products"}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
          {filtered.map((p) => (
            <a key={p.slug} href={`/products/${p.slug}`} onClick={onClose} style={{ textDecoration: "none" }}>
              <div className="card-sm" style={{
                position: "relative", aspectRatio: "4 / 5",
                overflow: "hidden",
                backgroundColor: "#EFEFEF", marginBottom: "0.625rem",
              }}>
                <Image
                  src={p.src} alt={p.name} fill
                  sizes="(max-width: 768px) 50vw, 200px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500, color: TEXT, margin: "0 0 0.2rem" }}>
                {p.name}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, margin: 0 }}>
                {p.price}
              </p>
            </a>
          ))}
        </div>
      ) : (
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, textAlign: "center", paddingTop: "1rem" }}>
          No products found for &ldquo;{query}&rdquo;
        </p>
      )}
    </Panel>
  );
}
