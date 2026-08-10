"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SHOP = [
  { label: "Shop All",    href: "/shop" },
  { label: "30ml Fluid",  href: "/products/daily-solace-fluid-30ml" },
  { label: "15ml Fluid",  href: "/products/daily-solace-fluid-15ml" },
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

const TEXT   = "#111111";
const MUTED  = "#5C5C5C";
const BORDER = "#E2E2E2";

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

function NewsletterRow() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div style={{
      display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
      gap: "1rem", borderBottom: `1px solid ${BORDER}`,
      paddingBottom: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "clamp(2rem, 4vw, 3rem)",
    }}>
      <div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT, margin: "0 0 0.25rem" }}>
          Sukoon Circle
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, margin: 0 }}>
          Formulation updates and early access. No spam.
        </p>
      </div>
      {submitted ? (
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 700, color: TEXT, margin: 0 }}>
          You&apos;re in.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="input"
            style={{ flex: "1 1 200px", maxWidth: 260 }}
            aria-label="Email address"
          />
          <button type="submit" className="btn btn-dark">Subscribe</button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer aria-label="Site footer" style={{ padding: "0 clamp(0.75rem, 3vw, 1.5rem) clamp(0.75rem, 3vw, 1.5rem)" }}>
      <div className="card" style={{
        maxWidth: 1360, margin: "0 auto",
        padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem)",
      }}>
        <NewsletterRow />
        <div
          className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]"
          style={{ gap: "clamp(2rem, 4vw, 3rem)", paddingBottom: "clamp(2rem, 4vw, 3rem)" }}
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1" style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
            <Link href="/" style={{ display: "inline-flex" }}>
              <Image
                src="/logo.png"
                alt="Sukoon"
                width={1214}
                height={263}
                style={{ height: 24, width: "auto", userSelect: "none" }}
              />
            </Link>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.6,
              color: MUTED, maxWidth: 220, margin: 0,
            }}>
              Skincare made in the UK. Five ingredients. Nothing extra.
            </p>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              <a
                href="https://www.instagram.com/sukoonskin" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, textDecoration: "none", transition: "color 0.18s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@sukoonskin" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, textDecoration: "none", transition: "color 0.18s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = MUTED; }}
              >
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
