"use client";

const SHOP = [
  { label: "Shop All",    href: "/shop" },
  { label: "Our Story",   href: "/about" },
  { label: "Ingredients", href: "/#ingredients" },
];

const HELP = [
  { label: "FAQ",         href: "/faq" },
  { label: "Shipping",    href: "/shipping" },
  { label: "Contact",     href: "/contact" },
];

const LEGAL = [
  { label: "Privacy",     href: "/privacy" },
  { label: "Terms",       href: "/terms" },
  { label: "Cookies",     href: "/cookies" },
];

const TEXT   = "#111111";
const MUTED  = "#92928D";
const BORDER = "#E3E3DF";

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      style={{
        fontFamily: "var(--font-body)", fontSize: "0.875rem",
        color: MUTED, textDecoration: "none",
        transition: "color 0.18s ease", display: "block",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}
    >
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#FFFFFF", borderTop: `1px solid ${BORDER}` }} aria-label="Site footer">
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        padding: "clamp(3rem, 5vw, 4.5rem) clamp(1.25rem, 4vw, 3rem)",
      }}>
        {/* Top grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "clamp(2rem, 4vw, 3rem)", paddingBottom: "clamp(2.5rem, 4vw, 3.5rem)" }}
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "0.9375rem", letterSpacing: "0.2em",
                color: TEXT, textTransform: "uppercase",
              }}>
                SUKOON
              </span>
            </a>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.65,
              color: MUTED, maxWidth: 240, margin: 0,
            }}>
              Waterless skincare made in the UK.<br />Five ingredients. Nothing extra.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.25rem" }}>
              <a href="https://www.instagram.com/sukoonskin" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: MUTED, textDecoration: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@sukoonskin" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: MUTED, textDecoration: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}>
                TikTok
              </a>
            </div>
          </div>

          {/* Shop */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT, margin: 0 }}>
              Shop
            </p>
            {SHOP.map(l => <FooterLink key={l.label} {...l} />)}
          </div>

          {/* Help */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT, margin: 0 }}>
              Help
            </p>
            {HELP.map(l => <FooterLink key={l.label} {...l} />)}
          </div>

          {/* Legal */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT, margin: 0 }}>
              Legal
            </p>
            {LEGAL.map(l => <FooterLink key={l.label} {...l} />)}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, margin: 0 }}>
            © {new Date().getFullYear()} Sukoon Skin Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, margin: 0 }}>
            Made in the United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
