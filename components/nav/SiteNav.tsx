"use client";

import { useState, useEffect } from "react";

const leftLinks = [
  { label: "Shop",         href: "#" },
  { label: "Our Approach", href: "#story" },
  { label: "About",        href: "#" },
  { label: "Journal",      href: "#" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" aria-hidden>
      {open
        ? <><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></>
        : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="14" x2="15" y2="14"/></>}
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.5625rem",
    fontWeight: 400,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#2A2F1E",
    textDecoration: "none",
    opacity: 0.5,
    transition: "opacity 0.2s",
  };

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.4s, border-color 0.4s",
        backgroundColor: scrolled || open ? "rgba(251,248,243,0.95)" : "transparent",
        backdropFilter: scrolled || open ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,186,176,0.25)" : "1px solid transparent",
      }}>
        <div style={{
          maxWidth: "1380px", margin: "0 auto",
          padding: "0 clamp(1.5rem, 4vw, 3.5rem)",
          height: "60px",
          display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
        }}>
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {leftLinks.map(l => (
              <a key={l.label} href={l.href} style={linkStyle}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}>
                {l.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(o => !o)}
            style={{ background: "none", border: "none", color: "#2A2F1E", cursor: "pointer", padding: 0, display: "flex" }}>
            <MenuIcon open={open} />
          </button>

          <a href="/" style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.875rem, 1.2vw, 1.0625rem)",
            fontWeight: 300,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "#2A2F1E",
            textDecoration: "none",
            textAlign: "center",
            display: "block",
            paddingLeft: "0.5em",
          }}>
            Sukoon
          </a>

          <div className="hidden md:flex justify-end items-center gap-6">
            <a href="#" style={linkStyle}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}>
              Account
            </a>
            <a href="#" style={{ ...linkStyle, display: "flex", alignItems: "center", gap: "0.375rem" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}>
              Cart (0)
              <CartIcon />
            </a>
          </div>
        </div>
      </header>

      {open && (
        <div style={{
          position: "fixed", top: "60px", left: 0, right: 0, bottom: 0, zIndex: 49,
          backgroundColor: "#FBF8F3",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3rem",
        }}>
          {[...leftLinks, { label: "Account", href: "#" }].map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.875rem, 9vw, 2.75rem)",
              fontWeight: 300, letterSpacing: "-0.01em",
              color: "#2A2F1E", textDecoration: "none",
            }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
