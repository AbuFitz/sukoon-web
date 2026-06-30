export function PromoBar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 51,
        backgroundColor: "#3F4A36",
        textAlign: "center",
        padding: "0.5rem 1rem",
      }}
    >
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.6875rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        color: "#F7F1E4",
      }}>
        Complimentary shipping on all UK orders over £50
      </p>
    </div>
  );
}
