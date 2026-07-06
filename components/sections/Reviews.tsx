const reviews = [
  {
    quote: "I've tried everything for my edges. This is the first thing I've used that felt like it was actually made for me.",
    name: "Amina K.",
    note: "Early tester, 6 weeks",
  },
  {
    quote: "Sceptical about one oil doing both things. But it absorbs in seconds and the irritation under my under-cap has genuinely settled.",
    name: "Halima R.",
    note: "Early tester, 4 weeks",
  },
  {
    quote: "No scent, no fuss, nothing heavy. The evening step has quietly become my favourite part of the day.",
    name: "Sara M.",
    note: "Early tester, 8 weeks",
  },
];

export function Reviews() {
  return (
    <section aria-label="Reviews" style={{
      backgroundColor: "#F7F1E4",
      padding: "clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
    }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
            fontWeight: 400, letterSpacing: "-0.01em", color: "#2C2A1F",
          }}>
            Words from the first hands to hold it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          {reviews.map((r) => (
            <div key={r.name} style={{
              backgroundColor: "#FBF8F3", border: "1px solid #E8D4AE",
              padding: "clamp(1.75rem, 4vw, 2.25rem)",
              display: "flex", flexDirection: "column",
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400,
                fontSize: "1.0625rem", lineHeight: 1.6, color: "#2C2A1F", marginBottom: "1.5rem",
              }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <div style={{ marginTop: "auto" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 600, color: "#2C2A1F" }}>
                  {r.name}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#6B7B5C", letterSpacing: "0.02em" }}>
                  {r.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
