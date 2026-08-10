"use client";

import Link from "next/link";

const SHOP = [
  { label: "Shop All",    href: "/shop" },
  { label: "Daily Solace Fluid", href: "/products/daily-solace-fluid-30ml" },
  { label: "The Solace Bundle",  href: "/products/solace-bundle" },
];

const ABOUT = [
  { label: "Our Story",   href: "/about" },
  { label: "Ingredients", href: "/#ingredients" },
];

const HELP = [
  { label: "FAQ",         href: "/faq" },
  { label: "Shipping",    href: "/shipping" },
  { label: "Returns",     href: "/shipping" },
  { label: "Contact",     href: "/contact" },
];

const ACCOUNT = [
  { label: "My Account",  href: "/account" },
  { label: "Your Bag",    href: "/cart" },
];

const LEGAL = [
  { label: "Privacy",     href: "/privacy" },
  { label: "Terms",       href: "/terms" },
  { label: "Cookies",     href: "/cookies" },
];

const TEXT   = "#FAFAFA";
const MUTED  = "#9C968A";
const BORDER = "rgba(250,250,250,0.12)";

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT, margin: 0 }}>
        {title}
      </p>
      {links.map(l => (
        <Link
          key={l.label}
          href={l.href}
          style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem",
            color: MUTED, textDecoration: "none",
            transition: "color 0.18s ease", display: "block",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer
      className="stack-panel stack-panel--last stack-inner"
      style={{ backgroundColor: "#111111" }}
      aria-label="Site footer"
    >
      <div style={{
        maxWidth: 1440, margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem)",
      }}>
        <div
          className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]"
          style={{ gap: "clamp(2rem, 4vw, 3rem)", paddingBottom: "clamp(3rem, 5vw, 4rem)" }}
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1" style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "1.5rem", letterSpacing: "-0.02em",
                color: TEXT,
              }}>
                SUKOON.
              </span>
            </Link>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.6,
              color: MUTED, maxWidth: 220, margin: 0,
            }}>
              Waterless skincare made in the UK. Five ingredients. Nothing extra.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="https://www.instagram.com/sukoonskin" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 600, color: MUTED, textDecoration: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@sukoonskin" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 600, color: MUTED, textDecoration: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}>
                TikTok
              </a>
            </div>
          </div>

          <FooterCol title="Shop" links={SHOP} />
          <FooterCol title="About" links={ABOUT} />
          <FooterCol title="Help" links={HELP} />
          <FooterCol title="Account" links={ACCOUNT} />
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${BORDER}`, paddingTop: "1.5rem",
          display: "flex", flexWrap: "wrap", gap: "1rem",
          alignItems: "center", justifyContent: "space-between",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, margin: 0 }}>
            © {new Date().getFullYear()} Sukoon Skin Ltd. Made in the United Kingdom.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {LEGAL.map(l => (
              <Link key={l.label} href={l.href} style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                color: MUTED, textDecoration: "none",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
