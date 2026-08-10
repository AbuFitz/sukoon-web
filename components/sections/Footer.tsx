"use client";

import { useState } from "react";
import Link from "next/link";

const SHOP = [
  { label: "30ml — Full-Size", href: "/products/daily-solace-fluid-30ml" },
  { label: "15ml — Discovery", href: "/products/daily-solace-fluid-15ml" },
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

const LEGAL = [
  { label: "Privacy",     href: "/privacy" },
  { label: "Terms",       href: "/terms" },
  { label: "Cookies",     href: "/cookies" },
];

const GUARANTEES = ["1–2 Day Dispatch", "Tracked UK Shipping", "30-Day Unopened Returns"];

const TEXT   = "#FFFFFF";
const MUTED  = "#A1A1AA";
const BORDER = "#262626";

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
      <p className="tracked-wide" style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, color: TEXT, margin: 0 }}>
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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <footer aria-label="Site footer" style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid #1A1A1A" }}>
      {/* Sukoon Circle */}
      <div style={{ borderBottom: `1px solid ${BORDER}` }}>
        <div className="container" style={{ padding: "clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 3rem)" }}>
          <div className="newsletter-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow eyebrow-on-dark">Sukoon Circle</span>
              <h2 style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)",
                letterSpacing: "-0.02em", color: TEXT,
                margin: "0.5rem 0 0",
              }}>
                Skincare without the noise.
              </h2>
            </div>

            {submitted ? (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700, color: TEXT, margin: 0 }}>
                You&apos;re in. Talk soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="input input-on-dark"
                  style={{ flex: "1 1 220px", maxWidth: 300 }}
                  aria-label="Email address"
                />
                <button type="submit" className="btn btn-light tracked-wide">Join the Circle</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Link grid */}
      <div className="container" style={{ padding: "clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 3rem)" }}>
        <div
          className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]"
          style={{ gap: "clamp(2rem, 4vw, 3rem)", paddingBottom: "clamp(2.5rem, 4vw, 3rem)" }}
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1" style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span className="tracked-widest" style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "1.125rem", color: TEXT,
              }}>
                SUKOON
              </span>
            </Link>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.6,
              color: MUTED, maxWidth: 220, margin: 0,
            }}>
              Waterless skincare made in the UK. Five ingredients. Nothing extra.
            </p>
            <div style={{ display: "flex", gap: "0.625rem" }}>
              <a href="https://www.instagram.com/sukoonskin" target="_blank" rel="noopener noreferrer" className="tag tag-on-dark">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@sukoonskin" target="_blank" rel="noopener noreferrer" className="tag tag-on-dark">
                TikTok
              </a>
            </div>
          </div>

          <FooterCol title="The Fluid" links={SHOP} />
          <FooterCol title="About" links={ABOUT} />
          <FooterCol title="Help" links={HELP} />
        </div>

        {/* Operational guarantees */}
        <div className="divider-dark" style={{ marginBottom: "1.5rem" }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
          {GUARANTEES.map(g => <span key={g} className="tag tag-on-dark">{g}</span>)}
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
