"use client";

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}

export function MinimalFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#FBF8F3",
        borderTop: "1px solid #EAE4D9",
        padding: "2rem clamp(2rem, 6vw, 5rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Left: nav */}
        <nav style={{ display: "flex", gap: "2rem" }} aria-label="Footer">
          {["Our Story", "Ingredients", "Journal", "Contact"].map(l => (
            <a
              key={l}
              href="#"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#98A27E",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Centre: wordmark */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontStyle: "italic",
            fontWeight: 500,
            color: "#C4BAB0",
            letterSpacing: "0.04em",
          }}
        >
          Sukoon
        </span>

        {/* Right: social + copyright */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {[
            { label: "Instagram", icon: <IconInstagram />, href: "https://instagram.com" },
            { label: "TikTok",    icon: <IconTikTok />,    href: "https://tiktok.com"   },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Sukoon on ${s.label}`}
              style={{ color: "#C4BAB0", transition: "color 0.2s", display: "flex" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#6B7451")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#C4BAB0")}
            >
              {s.icon}
            </a>
          ))}
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#C4BAB0", letterSpacing: "0.04em" }}>
            © {new Date().getFullYear()} Sukoon Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
