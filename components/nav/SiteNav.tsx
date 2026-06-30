"use client";

import { useState, useEffect } from "react";

const leftLinks = [
  { label: "Shop",       href: "#shop" },
  { label: "The Ritual", href: "#ritual" },
];

const rightLinks = [
  { label: "Ingredients", href: "#ingredients" },
  { label: "Journal",     href: "#" },
];

function LeafMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21c0-7.5 3-13 8-16-2 7-4.5 12-8 16z" />
      <path d="M12 21c0-7.5-3-13-8-16 2 7 4.5 12 8 16z" />
      <path d="M12 21V9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" aria-hidden>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="15" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" aria-hidden>
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.6875rem",
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#2C2A1F",
  textDecoration: "none",
  position: "relative",
  paddingBottom: "0.2rem",
};

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={linkStyle}
    >
      {label}
      <span style={{
        position: "absolute", left: 0, bottom: 0, height: "1px",
        width: hover ? "100%" : "0%", backgroundColor: "#2C2A1F",
        transition: "width 0.25s ease",
      }} />
    </a>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: solid ? "#F7F1E4" : "transparent",
        borderBottom: solid ? "1px solid #E8D4AE" : "1px solid transparent",
        transition: "background-color 0.35s ease, border-color 0.35s ease",
      }}>
        <div style={{
          maxWidth: "1380px", margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3.5rem)",
          height: "84px",
          display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
        }}>
          <nav className="hidden md:flex items-center gap-9" style={{ gridColumn: "1" }} aria-label="Primary">
            {leftLinks.map(l => <NavLink key={l.label} {...l} />)}
          </nav>

          <button className="flex md:hidden" aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(o => !o)}
            style={{ gridColumn: "1", background: "none", border: "none", color: "#2C2A1F", cursor: "pointer", padding: 0 }}>
            <MenuIcon />
          </button>

          <a href="/" style={{
            gridColumn: "2",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem",
            textDecoration: "none", color: "#2C2A1F",
          }}>
            <LeafMark />
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.0625rem, 1.6vw, 1.375rem)",
              fontWeight: 400,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingLeft: "0.32em",
            }}>
              Sukoon
            </span>
          </a>

          <div className="hidden md:flex justify-end items-center gap-9" style={{ gridColumn: "3" }}>
            {rightLinks.map(l => <NavLink key={l.label} {...l} />)}
            <a href="#" aria-label="Cart" style={{ display: "flex", alignItems: "center", color: "#2C2A1F", textDecoration: "none" }}>
              <CartIcon />
            </a>
          </div>

          <a href="#" aria-label="Cart" className="flex md:hidden" style={{
            gridColumn: "3",
            justifySelf: "end", alignItems: "center", color: "#2C2A1F", textDecoration: "none",
          }}>
            <CartIcon />
          </a>
        </div>
      </header>

      <div aria-hidden={!open} style={{
        position: "fixed", inset: 0, zIndex: 60,
        pointerEvents: open ? "auto" : "none",
      }}>
        <div onClick={() => setOpen(false)} style={{
          position: "absolute", inset: 0,
          backgroundColor: "rgba(44,42,31,0.35)",
          opacity: open ? 1 : 0,
          transition: "opacity 0.35s ease",
        }} />
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0,
          width: "78vw", maxWidth: "340px",
          backgroundColor: "#F7F1E4",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.35s ease",
          display: "flex", flexDirection: "column",
          padding: "1.5rem 2rem",
        }}>
          <button aria-label="Close menu" onClick={() => setOpen(false)} style={{
            background: "none", border: "none", color: "#2C2A1F", cursor: "pointer",
            alignSelf: "flex-end", padding: "0.5rem", marginRight: "-0.5rem",
          }}>
            <CloseIcon />
          </button>
          <nav style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2.5rem" }} aria-label="Mobile">
            {[...leftLinks, ...rightLinks].map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "#2C2A1F",
                textDecoration: "none",
              }}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
