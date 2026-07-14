"use client";

import Link from "next/link";

const BG    = "#3F4A36";
const CREAM = "#F5F2EB";
const MUTED = "rgba(245,242,235,0.5)";
const LINE  = "rgba(255,255,255,0.1)";

const col1 = [
  { label: "Shop",        href: "/shop"        },
  { label: "Our Story",   href: "/about"       },
  { label: "Ingredients", href: "/#ingredients"},
  { label: "FAQ",         href: "/faq"         },
];

const col2 = [
  { label: "Shipping",    href: "/shipping"    },
  { label: "Contact",     href: "/contact"     },
  { label: "Privacy",     href: "/privacy"     },
  { label: "Terms",       href: "/terms"       },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: BG }} aria-label="Site footer">
      <div style={{
        maxWidth: 1440, margin: "0 auto",
        padding: "clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 3.5rem) clamp(2rem, 4vw, 3rem)",
      }}>
        {/* Main grid: logo+tagline / nav / social */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "clamp(2rem, 4vw, 3.5rem)", paddingBottom: "clamp(2.5rem, 4vw, 3.5rem)" }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <a href="/" style={{ textDecoration: "none", lineHeight: 0, display: "inline-block" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/otherlogo.png"
                alt="Sukoon"
                style={{
                  height: "clamp(26px, 2.6vw, 36px)",
                  width: "auto",
                  filter: "brightness(0) invert(1) sepia(0.18) saturate(0.4) hue-rotate(5deg)",
                }}
              />
            </a>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.7,
              color: MUTED, maxWidth: 260, margin: 0,
            }}>
              Waterless skincare made in the UK.<br />Five ingredients. Nothing extra.
            </p>
          </div>

          {/* Nav columns */}
          <div style={{ display: "flex", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }} aria-label="Footer primary">
              {col1.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, textDecoration: "none", transition: "color 0.18s ease" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = CREAM)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }} aria-label="Footer secondary">
              {col2.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: MUTED, textDecoration: "none", transition: "color 0.18s ease" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = CREAM)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, margin: 0 }}>
              Follow
            </p>
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
              <a
                href="https://www.instagram.com/sukoonskin"
                target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ color: MUTED, transition: "color 0.18s ease", lineHeight: 0 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = CREAM)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@sukoonskin"
                target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                style={{ color: MUTED, transition: "color 0.18s ease", lineHeight: 0 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = CREAM)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: LINE }} />

        {/* Bottom bar */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: "1rem", paddingTop: "clamp(1.25rem, 2vw, 1.75rem)",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, margin: 0 }}>
            © {new Date().getFullYear()} Sukoon. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, margin: 0 }}>
            Made with care in the United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
