"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SearchOverlay } from "./SearchOverlay";
import { AccountPanel } from "./AccountPanel";
import { BagPanel } from "./BagPanel";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { label: "Shop",        href: "/shop" },
  { label: "Our Story",   href: "/about" },
  { label: "Ingredients", href: "/#ingredients" },
];

const TEXT   = "#111111";
const MUTED  = "#676764";
const BORDER = "#E3E3DF";

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="3.5" /><path d="M4.5 20c1.5-4 4-6 7.5-6s6 2 7.5 6" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function Wordmark() {
  return (
    <Link href="/" aria-label="Sukoon home" style={{ textDecoration: "none" }}>
      <span style={{
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: "1.0625rem",
        letterSpacing: "0.2em",
        color: TEXT,
        textTransform: "uppercase",
        userSelect: "none",
      }}>
        SUKOON
      </span>
    </Link>
  );
}

function IconBtn({
  label, onClick, children, badge,
}: { label: string; onClick: () => void; children: React.ReactNode; badge?: number }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      style={{ background: "none", border: "none", color: TEXT, cursor: "pointer", display: "flex", padding: 0, position: "relative", transition: "opacity 0.2s ease" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.55"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
    >
      {children}
      {badge ? (
        <span style={{
          position: "absolute", top: -6, right: -8,
          minWidth: 16, height: 16, borderRadius: "50%",
          backgroundColor: TEXT, color: "#FFFFFF",
          fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center", padding: "0 3px",
        }}>
          {badge}
        </span>
      ) : null}
    </button>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    document.body.style.overflow = (open || searchOpen || accountOpen || bagOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, searchOpen, accountOpen, bagOpen]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "#FFFFFF",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div style={{
          maxWidth: 1480, margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3rem)",
          height: 68,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}>
          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap: "2rem" }} aria-label="Primary navigation">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 700,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: MUTED, textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="flex md:hidden" style={{ justifySelf: "start" }}>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              style={{ background: "none", border: "none", color: TEXT, cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            >
              <MenuIcon />
            </button>
          </div>

          {/* Wordmark */}
          <div style={{ justifySelf: "center" }}>
            <Wordmark />
          </div>

          {/* Desktop icons */}
          <div className="hidden md:flex" style={{ justifySelf: "end", alignItems: "center", gap: "1.375rem" }}>
            <IconBtn label="Search" onClick={() => setSearchOpen(true)}><SearchIcon /></IconBtn>
            <IconBtn label="Account" onClick={() => setAccountOpen(true)}><AccountIcon /></IconBtn>
            <IconBtn label={`Bag${count > 0 ? `, ${count} item${count > 1 ? "s" : ""}` : ""}`} onClick={() => setBagOpen(true)} badge={count}><BagIcon /></IconBtn>
          </div>

          {/* Mobile icons */}
          <div className="flex md:hidden" style={{ justifySelf: "end", alignItems: "center", gap: "1rem" }}>
            <IconBtn label={`Bag${count > 0 ? `, ${count} item${count > 1 ? "s" : ""}` : ""}`} onClick={() => setBagOpen(true)} badge={count}><BagIcon /></IconBtn>
          </div>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <AccountPanel open={accountOpen} onClose={() => setAccountOpen(false)} />
      <BagPanel open={bagOpen} onClose={() => setBagOpen(false)} />

      {/* Backdrop */}
      <div aria-hidden onClick={() => setOpen(false)} style={{
        position: "fixed", inset: 0, zIndex: 59,
        pointerEvents: open ? "auto" : "none",
        backgroundColor: "rgba(17,17,17,0.3)",
        opacity: open ? 1 : 0,
        transition: "opacity 0.3s ease",
      }} />

      {/* Mobile drawer */}
      <div aria-hidden={!open} style={{
        position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 60,
        width: "80vw", maxWidth: 320,
        backgroundColor: "#FFFFFF",
        borderRight: `1px solid ${BORDER}`,
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{
          height: 68, display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 1.5rem", borderBottom: `1px solid ${BORDER}`, flexShrink: 0,
        }}>
          <Wordmark />
          <button aria-label="Close menu" onClick={() => setOpen(false)}
            style={{ background: "none", border: "none", color: TEXT, cursor: "pointer", display: "flex", padding: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        <nav style={{ flex: 1, padding: "1.75rem 1.5rem" }} aria-label="Mobile navigation">
          {[...NAV_LINKS, { label: "Contact", href: "/contact" }, { label: "FAQ", href: "/faq" }].map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block",
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: TEXT, textDecoration: "none", padding: "1rem 0",
              borderBottom: `1px solid ${BORDER}`,
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateX(-10px)",
              transition: `opacity 0.3s ease ${open ? 0.04 + i * 0.05 : 0}s, transform 0.3s ease ${open ? 0.04 + i * 0.05 : 0}s`,
            }}>
              {l.label}
            </a>
          ))}
          <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            <button onClick={() => { setOpen(false); setAccountOpen(true); }}
              style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "0.5rem", color: MUTED, fontFamily: "var(--font-body)", fontSize: "0.875rem", padding: 0 }}>
              <AccountIcon /> Account
            </button>
            <button onClick={() => { setOpen(false); setSearchOpen(true); }}
              style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "0.5rem", color: MUTED, fontFamily: "var(--font-body)", fontSize: "0.875rem", padding: 0 }}>
              <SearchIcon /> Search
            </button>
          </div>
        </nav>

        <div style={{ padding: "1rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700, color: MUTED, letterSpacing: "0.14em", textTransform: "uppercase", margin: 0 }}>
            Made in the UK
          </p>
        </div>
      </div>
    </>
  );
}
