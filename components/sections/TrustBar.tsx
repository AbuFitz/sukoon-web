function LeafCircle() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <circle cx="13" cy="13" r="12"/>
      <path d="M13 19c0 0-5-3.5-5-8.5a5 5 0 0 1 10 0c0 5-5 8.5-5 8.5z" strokeWidth="1"/>
      <line x1="13" y1="19" x2="13" y2="11" strokeWidth="1"/>
    </svg>
  );
}
function LeafSmall() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <circle cx="13" cy="13" r="12"/>
      <path d="M10 17c3-3 5-7 4-10-3 1-6 4-4 10z" strokeWidth="1"/>
    </svg>
  );
}
function HeartCircle() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <circle cx="13" cy="13" r="12"/>
      <path d="M13 18s-6-4-6-8a4 4 0 0 1 6-3.5A4 4 0 0 1 19 10c0 4-6 8-6 8z" strokeWidth="1"/>
    </svg>
  );
}
function DropCircle() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <circle cx="13" cy="13" r="12"/>
      <path d="M13 7l4 6a4 4 0 1 1-8 0l4-6z" strokeWidth="1"/>
    </svg>
  );
}

const badges = [
  { Icon: LeafCircle,  label: "Plant-Derived" },
  { Icon: LeafSmall,  label: "Vegan"          },
  { Icon: HeartCircle, label: "Cruelty Free"  },
  { Icon: DropCircle,  label: "Non-Toxic"     },
];

export function TrustBar() {
  return (
    <div
      style={{
        backgroundColor: "#F0EBE1",
        borderTop: "1px solid #DED7CC",
        borderBottom: "1px solid #DED7CC",
        padding: "2rem clamp(2rem, 6vw, 6rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {badges.map(({ Icon, label }) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            <div style={{ color: "#6B7451" }}>
              <Icon />
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.5625rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6B7451",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
