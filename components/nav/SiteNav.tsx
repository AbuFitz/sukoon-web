"use client";

import { useState, useEffect } from "react";

const leftLinks = [
  { label: "Shop",        href: "#shop" },
  { label: "Our Approach", href: "#approach" },
  { label: "About",       href: "#about" },
  { label: "Journal",     href: "#journal" },
];

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
    </svg>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        backgroundColor: scrolled ? "rgba(251,248,243,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,186,176,0.4)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 4vw, 3rem)",
          height: "64px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* Left: links (desktop) / hamburger (mobile) */}
        <div>
          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
            {leftLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: "#434A33",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  opacity: 0.75,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
              >
                {l.label}
              </a>
            ))}
          </nav>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8"
            aria-label="Open menu"
            style={{ color: "#434A33", background: "none", border: "none", cursor: "pointer" }}
          >
            <MenuIcon />
          </button>
        </div>

        {/* Centre: wordmark */}
        <a
          href="/"
          aria-label="Sukoon home"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            fontWeight: 500,
            letterSpacing: "0.3em",
            color: "#2E3423",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Sukoon
        </a>

        {/* Right: cart */}
        <div className="flex items-center justify-end gap-4">
          <button
            aria-label="Cart (0 items)"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#434A33",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
            }}
          >
            <span className="hidden md:inline" style={{ opacity: 0.75 }}>Cart (0)</span>
            <BagIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
