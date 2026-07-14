"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Panel } from "./Panel";
import { products } from "@/lib/products";

const INK  = "#292b25";
const SAGE = "#3F4A36";
const GREY = "#6E6E68";
const LINE = "#E3E1DA";

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
    <Panel open={open} onClose={onClose} title="">
      <div style={{
        display: "flex", alignItems: "center", gap: "0.875rem",
        border: `1.5px solid ${SAGE}`,
        padding: "0.875rem 1.125rem",
        marginBottom: "2rem",
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={SAGE} strokeWidth="1.6" strokeLinecap="round" aria-hidden>
          <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search products"
          style={{
            flex: 1, border: "none", outline: "none",
            fontFamily: "var(--font-body)", fontSize: "1rem", color: INK,
            background: "transparent",
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            style={{ background: "none", border: "none", cursor: "pointer", color: GREY, padding: 0, display: "flex" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        )}
      </div>

      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, color: GREY,
        letterSpacing: "0.12em", textTransform: "uppercase",
        marginBottom: "1.25rem",
      }}>
        {query ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""}` : "Products"}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2" style={{ gap: "1.25rem" }}>
          {filtered.map((p) => (
            <a key={p.slug} href={`/products/${p.slug}`} onClick={onClose} style={{ textDecoration: "none", color: INK }}>
              <div style={{ position: "relative", aspectRatio: "1 / 1", backgroundColor: "#F1E9D7", marginBottom: "0.75rem", border: `1px solid ${LINE}`, overflow: "hidden" }}>
                <Image
                  src={p.src} alt={p.name} fill
                  sizes="(max-width: 768px) 50vw, 200px"
                  style={{ objectFit: "cover", transition: "transform 500ms ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.25rem" }}>{p.name}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: GREY }}>{p.price}</p>
            </a>
          ))}
        </div>
      ) : (
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: GREY, textAlign: "center", paddingTop: "1rem" }}>
          No products found for &ldquo;{query}&rdquo;
        </p>
      )}
    </Panel>
  );
}
