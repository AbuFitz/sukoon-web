const items = [
  "Free UK delivery over £40",
  "30-day returns",
  "Made in the UK",
];

export function TrustStrip() {
  return (
    <section aria-label="Trust signals" className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div
        className="card flex flex-col sm:flex-row"
        style={{ padding: "1.25rem clamp(1.5rem, 3vw, 2rem)" }}
      >
        {items.map((item, i) => (
          <p
            key={item}
            className={i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}
            style={{
              flex: 1,
              fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600,
              color: "#111111", margin: 0, textAlign: "center",
              padding: "0.5rem 0",
              borderColor: "#E2E2E2",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
