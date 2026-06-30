"use client";

import { useState, useEffect } from "react";

const leftLinks = [
  { label: "Shop",            href: "#shop" },
  { label: "Our Philosophy",  href: "#ritual" },
];

const rightLinks = [
  { label: "Ingredients", href: "#ingredients" },
  { label: "Journal",     href: "#" },
];

const mobileLinks = [
  { label: "Shop",           href: "#shop" },
  { label: "Our Philosophy", href: "#ritual" },
  { label: "Ingredients",    href: "#ingredients" },
  { label: "Journal",        href: "#" },
  { label: "About",          href: "#" },
  { label: "Contact",        href: "#" },
];

const OLIVE = "#5F6B47";
const OLIVE_DARK = "#434A33";

function LeafMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21c0-7.5 3-13 8-16-2 7-4.5 12-8 16z" />
      <path d="M12 21c0-7.5-3-13-8-16 2 7 4.5 12 8 16z" />
      <path d="M12 21V9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="14" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <line x1="5" y1="3" x2="19" y2="3" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 3c0 3 1.5 5 5 5s5-2 5-5" />
      <path d="M5.5 8h13l1 13H4.5z" />
    </svg>
  );
}

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "1.125rem",
  fontWeight: 500,
  letterSpacing: "0.08em",
  lineHeight: 1,
  color: OLIVE,
  textDecoration: "none",
  position: "relative",
  paddingBottom: "0.3rem",
  transition: "color 0.25s ease",
};

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...linkStyle, color: hover ? OLIVE_DARK : OLIVE }}
    >
      {label}
      <span style={{
        position: "absolute", left: 0, bottom: 0, height: "1px",
        width: hover ? "100%" : "0%", backgroundColor: OLIVE_DARK,
        transition: "width 0.3s ease",
      }} />
    </a>
  );
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export function SiteNav() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      const p = clamp01((y - 20) / (120 - 20));
      setProgress(p);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navProgress = open ? 1 : progress;
  const iconColor = OLIVE;

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: `rgba(247,243,236,${navProgress * 0.82})`,
        backdropFilter: navProgress > 0 ? `blur(${navProgress * 20}px)` : "none",
        borderBottom: `1px solid rgba(232,212,174,${navProgress})`,
        transition: open ? "background-color 0.35s ease" : "none",
      }}>
        <div style={{
          maxWidth: "1440px", margin: "0 auto",
          padding: "0 clamp(1.5rem, 6vw, 80px)",
          height: "clamp(96px, 9vw, 116px)",
          display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
        }}>
          <nav className="hidden md:flex items-center" style={{ gridColumn: "1", gap: "4rem" }} aria-label="Primary">
            {leftLinks.map(l => <NavLink key={l.label} {...l} />)}
          </nav>

          <button className="flex md:hidden" aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(o => !o)}
            style={{ gridColumn: "1", background: "none", border: "none", color: iconColor, cursor: "pointer", padding: 0, transition: "color 0.3s ease" }}>
            <MenuIcon />
          </button>

          <a href="/" style={{
            gridColumn: "2",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem",
            textDecoration: "none", color: iconColor,
            transition: "color 0.3s ease",
            marginTop: "4px",
          }}>
            <LeafMark />
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.0625rem, 1.6vw, 1.375rem)",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingLeft: "0.22em",
            }}>
              Sukoon
            </span>
          </a>

          <div className="hidden md:flex justify-end items-center" style={{ gridColumn: "3", gap: "4rem" }}>
            {rightLinks.map(l => <NavLink key={l.label} {...l} />)}
            <a href="#" aria-label="Bag" style={{ display: "flex", alignItems: "center", color: iconColor, textDecoration: "none", transition: "color 0.3s ease" }}>
              <CartIcon />
            </a>
          </div>

          <a href="#" aria-label="Bag" className="flex md:hidden" style={{
            gridColumn: "3",
            justifySelf: "end", alignItems: "center", color: iconColor, textDecoration: "none",
            transition: "color 0.3s ease",
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
          backgroundColor: "rgba(44,42,31,0.3)",
          opacity: open ? 1 : 0,
          transition: "opacity 0.4s ease",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundColor: "#F7F1E4",
          opacity: open ? 1 : 0,
          transform: open ? "scale(1)" : "scale(0.98)",
          transformOrigin: "top",
          transition: "opacity 0.45s ease, transform 0.45s ease",
          display: "flex", flexDirection: "column",
          padding: "1.5rem 2rem 2.5rem",
        }}>
          <button aria-label="Close menu" onClick={() => setOpen(false)} style={{
            background: "none", border: "none", color: OLIVE, cursor: "pointer",
            alignSelf: "flex-end", padding: "0.5rem", marginRight: "-0.5rem",
          }}>
            <CloseIcon />
          </button>

          <nav style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginTop: "2rem" }} aria-label="Mobile">
            {mobileLinks.map((l, i) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.625rem",
                fontWeight: 400,
                color: "#2C2A1F",
                textDecoration: "none",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.4s ease ${open ? i * 0.05 : 0}s, transform 0.4s ease ${open ? i * 0.05 : 0}s`,
              }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{
            marginTop: "auto",
            opacity: open ? 1 : 0,
            transition: `opacity 0.5s ease ${open ? mobileLinks.length * 0.05 + 0.1 : 0}s`,
          }}>
            <div style={{ borderTop: "1px solid #E8D4AE", marginBottom: "1.25rem" }} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: OLIVE, marginBottom: "0.75rem" }}>
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "1.25rem", marginBottom: "1.5rem" }}>
              {["Instagram", "TikTok", "Pinterest"].map(s => (
                <a key={s} href="#" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#2C2A1F", textDecoration: "none" }}>
                  {s}
                </a>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8D4AE", marginBottom: "1rem" }} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.1em", color: OLIVE }}>
              Launching Summer 2027
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
