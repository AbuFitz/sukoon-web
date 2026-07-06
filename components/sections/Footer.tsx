"use client";

import Link from "next/link";

const BG    = "#3F4A36";
const LINEN = "#FBF8F3";
const FAINT = "rgba(251,248,243,0.55)";
const HEAD  = "rgba(251,248,243,0.35)";
const LINE  = "rgba(251,248,243,0.14)";

const cols = [
  {
    heading: "Shop",
    links: [
      { label: "The Daily Solace Fluid", href: "/shop" },
      { label: "Travel Case Bundle",     href: "/shop" },
      { label: "Your Bag",               href: "#"     },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story",      href: "/about"       },
      { label: "Ingredients",    href: "#ingredients" },
      { label: "Journal",        href: "#"            },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ",                href: "/faq" },
      { label: "Shipping & Returns", href: "#"    },
      { label: "Contact",            href: "#"    },
      { label: "Wholesale",          href: "#"    },
    ],
  },
  {
    heading: "Follow",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "TikTok",    href: "https://tiktok.com"    },
      { label: "Pinterest", href: "https://pinterest.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: BG }} aria-label="Site footer">

      {/* Top: wordmark + tagline */}
      <div style={{
        borderBottom: `1px solid ${LINE}`,
        padding: "clamp(3.5rem, 7vw, 5.5rem) clamp(2rem, 7vw, 7rem) clamp(3rem, 6vw, 4.5rem)",
        textAlign: "center",
      }}>
        <a href="/" style={{
          display: "inline-block",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 400,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: LINEN,
          textDecoration: "none",
          lineHeight: 1,
          marginBottom: "1.25rem",
        }}>
          Sukoon
        </a>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: FAINT,
          letterSpacing: "0.02em",
        }}>
          Care for your face. Care for your hairline.<br />
          Now shipping across the UK.
        </p>
      </div>

      {/* Nav columns */}
      <div style={{
        padding: "clamp(2.5rem, 5vw, 4rem) clamp(2rem, 7vw, 7rem)",
        maxWidth: "1320px",
        margin: "0 auto",
      }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "clamp(2rem, 4vw, 3rem)" }}>
          {cols.map((col) => (
            <div key={col.heading}>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.5625rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: HEAD,
                marginBottom: "1.25rem",
              }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: FAINT,
                        textDecoration: "none",
                        letterSpacing: "0.01em",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = FAINT)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Legal bar */}
      <div style={{ borderTop: `1px solid ${LINE}` }}>
        <div style={{
          maxWidth: "1320px", margin: "0 auto",
          padding: "1.25rem clamp(2rem, 7vw, 7rem)",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: HEAD, letterSpacing: "0.04em" }}>
            © {new Date().getFullYear()} Sukoon Skin Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  color: HEAD,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = HEAD)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
