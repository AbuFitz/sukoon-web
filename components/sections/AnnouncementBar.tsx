"use client";

export function AnnouncementBar() {
  return (
    <div
      role="note"
      aria-label="Announcement"
      className="announcement-pos"
      style={{
        zIndex: 100,
        height: "2rem",
        backgroundColor: "#F5F5F3",
        borderBottom: "1px solid #E3E3DF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingInline: "1rem",
      }}
    >
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.6875rem",
        fontWeight: 500,
        letterSpacing: "0.06em",
        color: "#676764",
        margin: 0,
        textAlign: "center",
      }}>
        Free UK delivery on orders over £40 &nbsp;·&nbsp; Made in the UK
      </p>
    </div>
  );
}
