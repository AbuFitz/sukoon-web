"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Our Story",   href: "#philosophy" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Journal",     href: "#journal"     },
];

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" aria-hidden>
      <line x1="3" y1="7" x2="21" y2="7"/>
      <line x1="3" y1="14" x2="15" y2="14"/>
    </svg>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background 0.4s, border-color 0.4s",
        backgroundColor: scrolled ? "rgba(251,248,243,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,186,176,0.35)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          padding: "0 clamp(1.75rem, 5vw, 4rem)",
          height: "60px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                color: "#434A33",
                textDecoration: "none",
                opacity: 0.55,
                transition: "opacity 0.25s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.55")}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden"
          aria-label="Open menu"
          style={{ background: "none", border: "none", color: "#434A33", cursor: "pointer", padding: 0 }}
        >
          <MenuIcon />
        </button>

        <a
          href="/"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.34em",
            textTransform: "uppercase" as const,
            color: "#2E3423",
            textDecoration: "none",
            textAlign: "center" as const,
            display: "block",
          }}
        >
          Sukoon
        </a>

        <div className="flex justify-end">
          <a
            href="#waitlist"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "#434A33",
              textDecoration: "none",
              opacity: 0.55,
              transition: "opacity 0.25s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.55")}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
