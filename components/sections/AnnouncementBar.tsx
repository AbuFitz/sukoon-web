export function AnnouncementBar() {
  return (
    <div
      role="note"
      aria-label="Announcement"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 51,
        height: "1.75rem",
        backgroundColor: "#3F4A36",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 500,
        letterSpacing: "0.06em", textTransform: "uppercase",
        color: "#FBF8F3", margin: 0, textAlign: "center", padding: "0 1rem",
      }}>
        Free UK shipping on every order · Now shipping nationwide
      </p>
    </div>
  );
}
