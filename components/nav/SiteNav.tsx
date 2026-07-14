"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SearchOverlay } from "./SearchOverlay";
import { AccountPanel } from "./AccountPanel";
import { BagPanel } from "./BagPanel";
import { CurrencySelector } from "./CurrencySelector";
import { useCart } from "@/lib/cart-context";

const links = [
  { label: "Shop",        href: "/shop" },
  { label: "Our Story",   href: "/about" },
  { label: "Ingredients", href: "#ingredients" },
];

const INK   = "#111110";
const GREY  = "#6E6E68";
const LINEN = "#FBF8F3";
const LINE  = "#E3E1DA";
const CREAM = "#F5F2EB";

function IconBtn({ label, onClick, href, children, badge, color }: { label: string; onClick?: () => void; href?: string; children: React.ReactNode; badge?: number; color?: string }) {
  const col = color ?? INK;
  const style: React.CSSProperties = { position: "relative", display: "flex", color: col, background: "none", border: "none", padding: 0, cursor: "pointer", transition: "color 0.4s ease" };
  const badgeEl = badge ? (
    <span style={{
      position: "absolute", top: -7, right: -8, minWidth: 15, height: 15, borderRadius: "50%",
      backgroundColor: INK, color: "#FFFFFF", fontFamily: "var(--font-body)", fontSize: "0.5625rem",
      fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 3px",
    }}>
      {badge}
    </span>
  ) : null;
  if (href) return <a href={href} aria-label={label} style={{ ...style, textDecoration: "none" }}>{children}{badgeEl}</a>;
  return <button aria-label={label} onClick={onClick} style={style}>{children}{badgeEl}</button>;
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
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

function NavLink({ label, href, transparent }: { label: string; href: string; transparent: boolean }) {
  const [hover, setHover] = useState(false);
  const col = transparent ? CREAM : INK;
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500,
        letterSpacing: "0.04em", color: col, textDecoration: "none", paddingBottom: "4px",
        transition: "color 0.4s ease",
        textShadow: transparent ? "0 1px 4px rgba(0,0,0,0.35)" : "none",
      }}
    >
      {label}
      <span style={{
        position: "absolute", left: 0, bottom: 0, height: "1px", backgroundColor: col,
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
  const { count } = useCart();
  const pathname = usePathname();
  const isTransparentPage = pathname === "/" || pathname === "/shop";
  const transparent = isTransparentPage && !solid;
  const useLightText = pathname === "/" && !solid;

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
        position: "fixed", top: "1.75rem", left: 0, right: 0, zIndex: 50,
        backgroundColor: (solid || !isTransparentPage) ? "rgba(251,248,243,0.96)" : "transparent",
        backdropFilter: (solid || !isTransparentPage) ? "blur(10px)" : "none",
        borderBottom: `1px solid ${(solid || !isTransparentPage) ? LINE : "transparent"}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}>
        <div style={{
          maxWidth: "1480px", margin: "0 auto",
          padding: "clamp(0.625rem, 1.2vw, 1rem) clamp(1.25rem, 5vw, 3.5rem)",
          display: "grid", gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          minHeight: "76px",
        }}>
          {/* Desktop nav links */}
          <nav className="hidden md:flex" style={{ gap: "2.25rem" }} aria-label="Primary">
            <NavLink {...links[0]} transparent={useLightText} />
            <NavLink {...links[1]} transparent={useLightText} />
            <NavLink {...links[2]} transparent={useLightText} />
          </nav>
          {/* Mobile hamburger */}
          <div className="flex md:hidden" style={{ justifySelf: "start" }}>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(o => !o)}
              style={{ background: "none", border: "none", color: useLightText ? CREAM : INK, cursor: "pointer", padding: 0, display: "flex", transition: "color 0.4s ease" }}
            >
              <HamburgerIcon open={open} />
            </button>
          </div>

          {/* Logo — always dark */}
          <a href="/" style={{ justifySelf: "center", textDecoration: "none", lineHeight: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/otherlogo.png" alt="Sukoon" style={{ height: "clamp(22px, 2.2vw, 32px)", width: "auto", display: "block" }} />
          </a>

          {/* Desktop icons */}
          <div className="hidden md:flex" style={{ justifySelf: "end", alignItems: "center", gap: "2.25rem" }}>
            <span style={{ width: "1px", height: "16px", backgroundColor: useLightText ? "rgba(245,242,235,0.35)" : LINE }} />
            <CurrencySelector color={useLightText ? CREAM : INK} />
            <IconBtn label="Search" onClick={() => setSearchOpen(true)} color={useLightText ? CREAM : INK}><SearchIcon /></IconBtn>
            <IconBtn label="Account" onClick={() => setAccountOpen(true)} color={useLightText ? CREAM : INK}><AccountIcon /></IconBtn>
            <IconBtn label="Bag" onClick={() => setBagOpen(true)} badge={count} color={useLightText ? CREAM : INK}><BagIcon /></IconBtn>
          </div>

          {/* Mobile icons */}
          <div className="flex md:hidden" style={{ justifySelf: "end", alignItems: "center", gap: "1.375rem" }}>
            <IconBtn label="Search" onClick={() => setSearchOpen(true)} color={useLightText ? CREAM : INK}><SearchIcon /></IconBtn>
            <IconBtn label="Bag" onClick={() => setBagOpen(true)} badge={count} color={useLightText ? CREAM : INK}><BagIcon /></IconBtn>
          </div>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <AccountPanel open={accountOpen} onClose={() => setAccountOpen(false)} />
      <BagPanel open={bagOpen} onClose={() => setBagOpen(false)} />

      {/* Mobile drawer backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 59,
          pointerEvents: open ? "auto" : "none",
          backgroundColor: "rgba(17,17,16,0.45)",
          opacity: open ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Mobile drawer — slides in from left */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 60,
          width: "82vw", maxWidth: 360,
          backgroundColor: LINEN,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
          display: "flex", flexDirection: "column",
          boxShadow: "10px 0 40px rgba(17,17,16,0.12)",
        }}
      >
        {/* Drawer header */}
        <div style={{
          height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 1.75rem", borderBottom: `1px solid ${LINE}`, flexShrink: 0,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/otherlogo.png" alt="Sukoon" style={{ height: 24, width: "auto" }} />
          <button aria-label="Close menu" onClick={() => setOpen(false)} style={{
            background: "none", border: "none", color: INK, cursor: "pointer", padding: "0.25rem", display: "flex",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        {/* Drawer body */}
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
          <nav style={{ padding: "2rem 1.75rem 1rem" }} aria-label="Mobile">
            {links.map((l, i) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                display: "block",
                fontFamily: "var(--font-display)", fontSize: "2.25rem", fontWeight: 400,
                color: INK, textDecoration: "none", padding: "0.5rem 0",
                borderBottom: `1px solid ${LINE}`,
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.4s ease ${open ? 0.06 + i * 0.06 : 0}s, transform 0.4s ease ${open ? 0.06 + i * 0.06 : 0}s`,
              }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{
            padding: "1.25rem 1.75rem 0",
            display: "flex", flexDirection: "column", gap: "1rem",
            opacity: open ? 1 : 0,
            transition: `opacity 0.4s ease ${open ? 0.28 : 0}s`,
          }}>
            <a href="/account" onClick={() => setOpen(false)} style={{
              display: "flex", alignItems: "center", gap: "0.625rem", color: GREY, textDecoration: "none",
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.04em",
            }}>
              <AccountIcon /> Account
            </a>
            <button onClick={() => { setOpen(false); setBagOpen(true); }} style={{
              display: "flex", alignItems: "center", gap: "0.625rem", background: "none", border: "none", cursor: "pointer", color: GREY,
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.04em", padding: 0,
            }}>
              <BagIcon /> Bag{count > 0 ? ` (${count})` : ""}
            </button>
          </div>
        </div>

        {/* Drawer footer */}
        <div style={{
          padding: "1.25rem 1.75rem 2rem",
          borderTop: `1px solid ${LINE}`,
          display: "flex", flexDirection: "column", gap: "1rem",
          opacity: open ? 1 : 0,
          transition: `opacity 0.4s ease ${open ? 0.36 : 0}s`,
        }}>
          <CurrencySelector color={INK} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", letterSpacing: "0.1em", textTransform: "uppercase", color: GREY }}>
              Halal Certified
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", letterSpacing: "0.1em", textTransform: "uppercase", color: GREY }}>
              Made in the UK
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
