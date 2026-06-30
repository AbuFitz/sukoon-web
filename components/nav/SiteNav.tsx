"use client";

import { useEffect, useState } from "react";
import { SearchOverlay } from "./SearchOverlay";
import { AccountPanel } from "./AccountPanel";
import { BagPanel } from "./BagPanel";

const links = [
  { label: "Shop",        href: "#shop" },
  { label: "The Ritual",  href: "#ritual" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Journal",     href: "#" },
];

const INK   = "#2C2A1F";
const SAGE  = "#6B7B5C";
const LINEN = "#FBF8F3";
const LINE  = "#DDD5C8";

function IconBtn({ label, onClick, href, children }: { label: string; onClick?: () => void; href?: string; children: React.ReactNode }) {
  const style: React.CSSProperties = { display: "flex", color: INK, background: "none", border: "none", padding: 0, cursor: "pointer" };
  if (href) return <a href={href} aria-label={label} style={{ ...style, textDecoration: "none" }}>{children}</a>;
  return <button aria-label={label} onClick={onClick} style={style}>{children}</button>;
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden>
      <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="3.5" /><path d="M4.5 20c1.5-4 4-6 7.5-6s6 2 7.5 6" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9h12l-1.1 11.2a1.5 1.5 0 0 1-1.5 1.3H8.6a1.5 1.5 0 0 1-1.5-1.3L6 9z" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (open || searchOpen || accountOpen || bagOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, searchOpen, accountOpen, bagOpen]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: solid ? "rgba(247,241,228,0.96)" : "transparent",
        backdropFilter: solid ? "blur(10px)" : "none",
        borderBottom: `1px solid ${solid ? LINE : "transparent"}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}>
        <div className="h-[76px] md:h-[84px]" style={{
          maxWidth: "1480px", margin: "0 auto",
          padding: "0 clamp(1.25rem, 5vw, 3.5rem)",
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

          {/* Right links + icons */}
          <div className="hidden md:flex" style={{ justifySelf: "end", alignItems: "center", gap: "2.25rem" }}>
            <NavLink {...links[2]} />
            <NavLink {...links[3]} />
            <span style={{ width: "1px", height: "16px", backgroundColor: LINE }} />
            <IconBtn label="Search" onClick={() => setSearchOpen(true)}><SearchIcon /></IconBtn>
            <IconBtn label="Account" onClick={() => setAccountOpen(true)}><AccountIcon /></IconBtn>
            <IconBtn label="Bag" onClick={() => setBagOpen(true)}><BagIcon /></IconBtn>
          </div>

          <div className="flex md:hidden" style={{ justifySelf: "end", alignItems: "center", gap: "1.375rem" }}>
            <IconBtn label="Search" onClick={() => setSearchOpen(true)}><SearchIcon /></IconBtn>
            <IconBtn label="Bag" onClick={() => setBagOpen(true)}><BagIcon /></IconBtn>
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

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <AccountPanel open={accountOpen} onClose={() => setAccountOpen(false)} />
      <BagPanel open={bagOpen} onClose={() => setBagOpen(false)} />

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
          padding: "0 clamp(1.5rem, 5vw, 3.5rem)", borderBottom: `1px solid ${LINE}`, flexShrink: 0,
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
          <nav style={{ padding: "1.5rem clamp(1.5rem, 5vw, 3.5rem) 0.5rem" }} aria-label="Mobile">
            {links.map((l, i) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                display: "flex", alignItems: "baseline", gap: "1rem",
                fontFamily: "var(--font-display)", fontSize: "2.25rem", fontWeight: 400,
                color: INK, textDecoration: "none", padding: "0.75rem 0",
                borderBottom: `1px solid ${LINE}`,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.45s ease ${open ? 0.1 + i * 0.06 : 0}s, transform 0.45s ease ${open ? 0.1 + i * 0.06 : 0}s`,
              }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: SAGE }}>
                  0{i + 1}
                </span>
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{
            padding: "1.5rem clamp(1.5rem, 5vw, 3.5rem)",
            display: "flex", gap: "2rem",
            opacity: open ? 1 : 0,
            transition: `opacity 0.5s ease ${open ? 0.4 : 0}s`,
          }}>
            <button onClick={() => { setOpen(false); setAccountOpen(true); }} style={{
              display: "flex", alignItems: "center", gap: "0.625rem", background: "none", border: "none", cursor: "pointer", color: INK,
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.04em", padding: 0,
            }}>
              <AccountIcon /> Account
            </button>
            <button onClick={() => { setOpen(false); setBagOpen(true); }} style={{
              display: "flex", alignItems: "center", gap: "0.625rem", background: "none", border: "none", cursor: "pointer", color: INK,
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.04em", padding: 0,
            }}>
              <BagIcon /> Bag
            </button>
          </div>

          <div style={{
            marginTop: "auto",
            padding: "1.5rem clamp(1.5rem, 5vw, 3.5rem) 2rem",
            borderTop: `1px solid ${LINE}`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            opacity: open ? 1 : 0,
            transition: `opacity 0.5s ease ${open ? 0.5 : 0}s`,
          }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.06em", color: SAGE }}>
              UK Halal Certified
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.06em", color: SAGE }}>
              Made in the UK
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
