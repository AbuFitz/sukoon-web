"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Shop",        href: "#shop" },
  { label: "Philosophy",  href: "#ritual" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Journal",     href: "#" },
];

const INK = "#3A3526";
const AMBER = "#B07F3F";
const CREAM = "#F7F1E4";
const LINE = "#E2D2AC";

function LeafMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21c0-7.5 3-13 8-16-2 7-4.5 12-8 16z" />
      <path d="M12 21c0-7.5-3-13-8-16 2 7 4.5 12 8 16z" />
      <path d="M12 21V9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="11" viewBox="0 0 22 11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden>
      <line x1="0" y1="1" x2="22" y2="1" />
      <line x1="0" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 3c0 3 1.5 5 5 5s5-2 5-5" />
      <path d="M5.5 8h13l1 13H4.5z" />
    </svg>
  );
}

function DesktopLink({ label, href }: { label: string; href: string }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.4rem",
        fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
        letterSpacing: "0.04em", color: INK, textDecoration: "none",
      }}
    >
      <span style={{
        display: "inline-block", width: "4px", height: "4px", borderRadius: "50%",
        backgroundColor: AMBER,
        opacity: hover ? 1 : 0,
        transform: hover ? "scale(1)" : "scale(0.3)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }} />
      <span style={{ color: hover ? AMBER : INK, transition: "color 0.25s ease" }}>{label}</span>
    </a>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: CREAM,
        borderBottom: `1px solid ${LINE}`,
      }}>
        <div style={{
          maxWidth: "1480px", margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          height: "96px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <a href="/" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            textDecoration: "none", color: INK,
          }}>
            <LeafMark />
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.375rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}>
              Sukoon
            </span>
          </a>

          <nav className="hidden md:flex items-center" style={{ gap: "2.75rem" }} aria-label="Primary">
            {links.map(l => <DesktopLink key={l.label} {...l} />)}
            <span style={{ width: "1px", height: "20px", backgroundColor: LINE }} />
            <a href="#" aria-label="Bag" style={{ display: "flex", color: INK, textDecoration: "none" }}>
              <BagIcon />
            </a>
          </nav>

          <div className="flex md:hidden" style={{ alignItems: "center", gap: "1.25rem" }}>
            <a href="#" aria-label="Bag" style={{ display: "flex", color: INK, textDecoration: "none" }}>
              <BagIcon />
            </a>
            <button aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(o => !o)}
              style={{ background: "none", border: "none", color: INK, cursor: "pointer", padding: 0, display: "flex" }}>
              <MenuIcon />
            </button>
          </div>
        </div>

        <div style={{
          height: "1px", backgroundColor: AMBER,
          width: open ? "100%" : "64px", margin: "0 auto",
          transition: "width 0.5s ease",
        }} />
      </header>

      <div aria-hidden={!open} style={{
        position: "fixed", inset: 0, zIndex: 60,
        pointerEvents: open ? "auto" : "none",
        backgroundColor: CREAM,
        clipPath: open ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        transition: "clip-path 0.55s cubic-bezier(0.65,0,0.35,1)",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{
          height: "96px", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 clamp(1.5rem, 5vw, 4rem)", borderBottom: `1px solid ${LINE}`,
        }}>
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "1.375rem", letterSpacing: "0.18em",
            textTransform: "uppercase", color: INK,
          }}>
            Sukoon
          </span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} style={{
            background: "none", border: "none", color: INK, cursor: "pointer", padding: 0, display: "flex",
          }}>
            <CloseIcon />
          </button>
        </div>

        <nav style={{
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 clamp(1.5rem, 5vw, 4rem)", position: "relative",
        }} aria-label="Mobile">
          <span style={{
            position: "absolute", left: "clamp(1.5rem, 5vw, 4rem)", top: "12%", bottom: "12%",
            width: "1px", backgroundColor: LINE,
          }} />
          {links.map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: "flex", alignItems: "center", gap: "1.25rem",
              fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400,
              color: INK, textDecoration: "none", padding: "0.875rem 0",
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(-10px)",
              transition: `opacity 0.5s ease ${open ? 0.2 + i * 0.07 : 0}s, transform 0.5s ease ${open ? 0.2 + i * 0.07 : 0}s`,
            }}>
              <span style={{
                width: "7px", height: "7px", borderRadius: "50%", backgroundColor: AMBER,
                flexShrink: 0,
              }} />
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{
          padding: "1.75rem clamp(1.5rem, 5vw, 4rem) 2.25rem",
          borderTop: `1px solid ${LINE}`,
          opacity: open ? 1 : 0,
          transition: `opacity 0.6s ease ${open ? 0.2 + links.length * 0.07 + 0.1 : 0}s`,
        }}>
          <p style={{
            fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.9375rem",
            color: "#7A6E50",
          }}>
            Beauty rooted in simplicity.
          </p>
        </div>
      </div>
    </>
  );
}
