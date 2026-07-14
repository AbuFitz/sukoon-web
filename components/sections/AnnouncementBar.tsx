const MESSAGE = "Free UK shipping on every order · Now shipping nationwide";

export function AnnouncementBar() {
  return (
    <div
      role="note"
      aria-label="Announcement"
      className="announcement-pos"
      style={{
        zIndex: 51,
        height: "1.75rem",
        backgroundColor: "#3F4A36",
        display: "flex", alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Desktop/tablet: centered, static */}
      <p className="hidden sm:block" style={{
        fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 500,
        letterSpacing: "0.06em", textTransform: "uppercase",
        color: "#FBF8F3", margin: "0 auto", textAlign: "center", padding: "0 1rem",
        whiteSpace: "nowrap",
      }}>
        {MESSAGE}
      </p>

      {/* Mobile: scrolling marquee so the message never wraps */}
      <div className="flex sm:hidden" style={{ width: "100%", overflow: "hidden" }}>
        <div style={{
          display: "flex", flexShrink: 0,
          animation: "sukoon-marquee 16s linear infinite",
        }}>
          {[0, 1].map((i) => (
            <p key={i} aria-hidden={i === 1} style={{
              fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 500,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "#FBF8F3", margin: 0, whiteSpace: "nowrap", padding: "0 1.5rem",
            }}>
              {MESSAGE}
            </p>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes sukoon-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
