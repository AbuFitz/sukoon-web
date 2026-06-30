"use client";

import Link from "next/link";

const BG     = "#3F4A36";
const LINEN  = "#FBF8F3";
const FAINT  = "rgba(251,248,243,0.6)";
const HEAD   = "rgba(251,248,243,0.45)";
const LINE   = "rgba(251,248,243,0.16)";

const shopLinks = [
  { label: "The Daily Solace Fluid", href: "/shop" },
  { label: "Travel Case Bundle", href: "/shop" },
  { label: "Your Bag", href: "#" },
];

const companyLinks = [
  { label: "Our Philosophy", href: "#story" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Journal", href: "#" },
];

const supportLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Shipping & Returns", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Wholesale", href: "#" },
];

const followLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: BG }} aria-label="Site footer">

      {/* Main */}
      <div className="container pt-14 pb-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-6">

          {/* Brand */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontStyle: "italic",
                fontWeight: 600,
                color: LINEN,
                display: "block",
                marginBottom: "0.875rem",
              }}
            >
              Sukoon Skin
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: FAINT,
                maxWidth: "200px",
                marginBottom: "1.5rem",
              }}
            >
              Care for your face. Care for your hairline.
              Now shipping across the UK.
            </p>
          </div>

          {/* Nav columns */}
          {[
            { heading: "Shop", links: shopLinks },
            { heading: "Company", links: companyLinks },
            { heading: "Support", links: supportLinks },
            { heading: "Follow", links: followLinks },
          ].map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: HEAD,
                  marginBottom: "1.25rem",
                }}
              >
                {col.heading}
              </p>
              <ul className="list-none flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="no-underline transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: FAINT,
                        letterSpacing: "0.01em",
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
      <div
        className="border-t"
        style={{ borderColor: LINE }}
      >
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: HEAD,
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Sukoon Skin Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="no-underline transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: HEAD,
                  letterSpacing: "0.04em",
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
