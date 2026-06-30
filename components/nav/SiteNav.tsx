"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Shop",        href: "#shop" },
  { label: "The Ritual",  href: "#ritual" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Journal",     href: "#" },
];

const INK   = "#2C2A1F";
const SAGE  = "#6B7B5C";
const CREAM = "#F7F1E4";
const LINEN = "#FBF8F3";
const LINE  = "#DDD5C8";

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 8.5V7a5 5 0 0 1 10 0v1.5" />
      <rect x="4" y="8.5" width="16" height="12" rx="2.5" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span style={{ position: "relative", width: 20, height: 14, display: "inline-block" }} aria-hidden>
      <span style={{
        position: "absolute", left: 0, top: open ? 6 : 0, width: 20, height: 1.4, backgroundColor: "currentColor",
        transform: open ? "rotate(45deg)" : "none", transition: "top 0.25s ease, transform 0.25s ease",
      }} />
      <span style={{
        position: "absolute", left: 0, bottom: open ? 6 : 0, width: 20, height: 1.4, backgroundColor: "currentColor",
        transform: open ? "rotate(-45deg)" : "none", transition: "bottom 0.25s ease, transform 0.25s ease",
      }} />
    </span>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
        letterSpacing: "0.06em", color: INK, textDecoration: "none", paddingBottom: "4px",
      }}
    >
      {label}
      <span style={{
        position: "absolute", left: 0, bottom: 0, height: "1px", backgroundColor: SAGE,
        width: hover ? "100%" : "0%", transition: "width 0.3s cubic-bezier(0.22,1,0.36,1)",
      }} />
    </a>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: solid ? "rgba(247,241,228,0.96)" : "transparent",
        backdropFilter: solid ? "blur(10px)" : "none",
        borderBottom: `1px solid ${solid ? LINE : "transparent"}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}>
        <div style={{
          maxWidth: "1480px", margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 3.5rem)",
          height: "84px",
          display: "grid", gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}>
          {/* Left links */}
          <nav className="hidden md:flex" style={{ gap: "2.25rem" }} aria-label="Primary">
            <NavLink {...links[0]} />
            <NavLink {...links[1]} />
          </nav>
          <div className="flex md:hidden" />

          {/* Centered wordmark */}
          <a href="/" style={{
            justifySelf: "center", textDecoration: "none", color: INK,
            fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400,
            letterSpacing: "0.16em", textTransform: "uppercase", lineHeight: 1,
          }}>
            Sukoon
          </a>

          {/* Right links + bag */}
          <div className="hidden md:flex" style={{ justifySelf: "end", alignItems: "center", gap: "2.25rem" }}>
            <NavLink {...links[2]} />
            <NavLink {...links[3]} />
            <a href="#" aria-label="Bag" style={{ display: "flex", color: INK }}>
              <BagIcon />
            </a>
          </div>

          <div className="flex md:hidden" style={{ justifySelf: "end", alignItems: "center", gap: "1.25rem" }}>
            <a href="#" aria-label="Bag" style={{ display: "flex", color: INK }}>
              <BagIcon />
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(o => !o)}
              style={{ background: "none", border: "none", color: INK, cursor: "pointer", padding: 0, display: "flex" }}
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen panel */}
      <div aria-hidden={!open} style={{
        position: "fixed", inset: 0, zIndex: 60,
        pointerEvents: open ? "auto" : "none",
        backgroundColor: LINEN,
        opacity: open ? 1 : 0,
        transition: "opacity 0.4s ease",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{
          height: "84px", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 clamp(1.5rem, 5vw, 3.5rem)", borderBottom: `1px solid ${LINE}`,
        }}>
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "1.5rem", letterSpacing: "0.16em",
            textTransform: "uppercase", color: INK,
          }}>
            Sukoon
          </span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} style={{
            background: "none", border: "none", color: INK, cursor: "pointer", padding: 0, display: "flex",
          }}>
            <HamburgerIcon open={true} />
          </button>
        </div>

        <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(1.5rem, 5vw, 3.5rem)" }} aria-label="Mobile">
          {links.map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: "flex", alignItems: "baseline", gap: "1rem",
              fontFamily: "var(--font-display)", fontSize: "2.25rem", fontWeight: 400,
              color: INK, textDecoration: "none", padding: "0.75rem 0",
              borderBottom: i < links.length - 1 ? `1px solid ${LINE}` : "none",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.45s ease ${open ? 0.12 + i * 0.06 : 0}s, transform 0.45s ease ${open ? 0.12 + i * 0.06 : 0}s`,
            }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: SAGE }}>
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{
          padding: "1.75rem clamp(1.5rem, 5vw, 3.5rem) 2.25rem",
          borderTop: `1px solid ${LINE}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          opacity: open ? 1 : 0,
          transition: `opacity 0.5s ease ${open ? 0.4 : 0}s`,
        }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.06em", color: SAGE }}>
            UK Halal Certified
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.06em", color: SAGE }}>
            Made in the UK
          </span>
        </div>
      </div>
    </>
  );
}
