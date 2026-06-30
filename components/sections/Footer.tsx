"use client";

import Link from "next/link";

const shopLinks = [
  { label: "The Daily Solace Fluid", href: "/shop" },
  { label: "Travel Case Bundle", href: "/shop" },
  { label: "Join the Waitlist", href: "/#waitlist" },
];

const learnLinks = [
  { label: "Ingredients", href: "#ingredients" },
  { label: "How to Use", href: "#story" },
  { label: "Our Story", href: "#story" },
  { label: "Journal", href: "#journal" },
];

const supportLinks = [
  { label: "FAQ", href: "#" },
  { label: "Shipping & Returns", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Wholesale", href: "#" },
];

function SocialInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function SocialTikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#3F4A36" }} aria-label="Site footer">

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
                color: "#FBF8F3",
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
                color: "rgba(251,248,243,0.58)",
                maxWidth: "200px",
                marginBottom: "1.5rem",
              }}
            >
              Care for your face. Care for your hairline.
              Launching in the UK.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { label: "Instagram", icon: <SocialInstagram />, href: "https://instagram.com" },
                { label: "TikTok",    icon: <SocialTikTok />,    href: "https://tiktok.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Sukoon on ${s.label}`}
                  className="flex items-center justify-center w-9 h-9 rounded transition-colors duration-200"
                  style={{
                    border: "1px solid rgba(251,248,243,0.18)",
                    color: "rgba(251,248,243,0.55)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(251,248,243,0.5)";
                    el.style.color = "#FBF8F3";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(251,248,243,0.18)";
                    el.style.color = "rgba(251,248,243,0.55)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {[
            { heading: "Shop", links: shopLinks },
            { heading: "Learn", links: learnLinks },
            { heading: "Support", links: supportLinks },
          ].map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(251,248,243,0.38)",
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
                        color: "rgba(251,248,243,0.58)",
                        letterSpacing: "0.01em",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FBF8F3")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(251,248,243,0.58)")}
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
        style={{ borderColor: "rgba(251,248,243,0.1)" }}
      >
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "rgba(251,248,243,0.35)",
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
                  color: "rgba(251,248,243,0.35)",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(251,248,243,0.65)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(251,248,243,0.35)")}
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
