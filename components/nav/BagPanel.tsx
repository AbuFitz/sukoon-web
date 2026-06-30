"use client";

import { Panel } from "./Panel";

const INK  = "#111110";
const GREY = "#6E6E68";

export function BagPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Panel open={open} onClose={onClose} title="Your Bag">
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
        padding: "2.5rem 0",
      }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginBottom: "1.25rem" }}>
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: INK, marginBottom: "0.625rem" }}>
          Your bag is empty
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: GREY, lineHeight: 1.6, maxWidth: "280px", marginBottom: "1.75rem" }}>
          The Daily Solace Fluid hasn&rsquo;t launched yet — join the waitlist to be first to shop.
        </p>
        <a href="/#waitlist" onClick={onClose} style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          padding: "0.9375rem 2rem", textDecoration: "none",
          backgroundColor: INK, color: "#FFFFFF",
          fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          Join the Waitlist
        </a>
      </div>
    </Panel>
  );
}
