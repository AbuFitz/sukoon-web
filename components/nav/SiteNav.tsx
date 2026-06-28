"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Our Story",   href: "#story" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Journal",     href: "#journal" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" aria-hidden>
      {open ? (
        <>
          <line x1="4" y1="4" x2="20" y2="20"/>
          <line x1="20" y1="4" x2="4" y2="20"/>
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7"/>
          <line x1="3" y1="14" x2="15" y2="14"/>
        </>
      )}
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
    fontSize: "0.625rem",
    fontWeight: 400,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#2A2F1E",
    textDecoration: "none",
    opacity: 0.5,
    transition: "opacity 0.25s",
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "background 0.4s, border-color 0.4s",
          backgroundColor: scrolled || open ? "rgba(251,248,243,0.96)" : "transparent",
          backdropFilter: scrolled || open ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(196,186,176,0.3)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1380px",
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 4rem)",
            height: "58px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
          }}
        >
          {/* Left: desktop nav / mobile hamburger */}
          <div>
            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={linkStyle}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(o => !o)}
              style={{ background: "none", border: "none", color: "#2A2F1E", cursor: "pointer", padding: 0, display: "flex" }}
            >
              <MenuIcon open={open} />
            </button>
          </div>

          {/* Centre: wordmark */}
          <a
            href="/"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.8125rem, 1.1vw, 1rem)",
              fontWeight: 300,
              letterSpacing: "0.46em",
              textTransform: "uppercase",
              color: "#2A2F1E",
              textDecoration: "none",
              textAlign: "center",
              display: "block",
              paddingRight: "0.46em", /* optical compensation for letter-spacing */
            }}
          >
            Sukoon
          </a>

          {/* Right */}
          <div className="flex justify-end">
            <a
              href="#waitlist"
              className="hidden md:inline"
              style={linkStyle}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "58px", left: 0, right: 0, bottom: 0,
            zIndex: 49,
            backgroundColor: "rgba(251,248,243,0.98)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {[...links, { label: "Join Waitlist", href: "#waitlist" }].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 8vw, 2.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                color: "#2A2F1E",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
