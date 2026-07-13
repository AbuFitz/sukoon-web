"use client";

import Link from "next/link";

const BG    = "#3F4A36";
const LINEN = "#f5f3ed";
const MUTED = "rgba(245,243,237,0.5)";
const LINE  = "rgba(255,255,255,0.12)";

const navLinks = [
  { label: "Shop",         href: "/shop"        },
  { label: "Our Story",    href: "/about"       },
  { label: "Ingredients",  href: "/#ingredients"},
  { label: "FAQ",          href: "/faq"         },
  { label: "Shipping",     href: "/shipping"    },
  { label: "Contact",      href: "/contact"     },
];

const legal = [
  { label: "Privacy",  href: "/privacy" },
  { label: "Terms",    href: "/terms"   },
  { label: "Cookies",  href: "/cookies" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: BG }} aria-label="Site footer">
      <div style={{
        maxWidth: 1440, margin: "0 auto",
        padding: "clamp(2.5rem, 5vw, 3.5rem) clamp(2rem, 5vw, 3.5rem)",
        display: "flex", flexDirection: "column", gap: "2rem",
      }}>

        {/* Top row: wordmark + nav links */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "baseline", justifyContent: "space-between", gap: "1.5rem",
        }}>
          <a href="/" style={{ textDecoration: "none", lineHeight: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/otherlogo.png" alt="Sukoon" style={{ height: "clamp(60px, 7vw, 88px)", width: "auto", filter: "brightness(0) invert(1)" }} />
          </a>

          <nav style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem 2rem" }} aria-label="Footer">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                  color: MUTED, textDecoration: "none",
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: LINE }} />

        {/* Bottom row: copyright + social icons + legal */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: "1rem",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, margin: 0 }}>
            © {new Date().getFullYear()} Sukoon. All rights reserved.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              style={{ color: MUTED, transition: "color 0.18s ease", lineHeight: 0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              style={{ color: MUTED, transition: "color 0.18s ease", lineHeight: 0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
              </svg>
            </a>
          </div>

          <div style={{ display: "flex", gap: "1.25rem" }}>
            {legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.75rem",
                  color: MUTED, textDecoration: "none",
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
