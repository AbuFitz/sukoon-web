"use client";

import { useState } from "react";
import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";

const INK   = "#111111";
const MUTED = "#666666";

const inputStyle = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  color: INK,
  backgroundColor: "#F9F8F6",
  border: "1px solid #EDEBE5",
  borderRadius: 999,
  padding: "0.875rem 1.25rem",
  outline: "none",
  boxSizing: "border-box" as const,
  display: "block",
};

const textareaStyle = { ...inputStyle, borderRadius: 20, resize: "vertical" as const };

const labelStyle = {
  fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 700,
  color: INK,
  display: "block", marginBottom: "0.5rem",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <SiteNav />
      <main className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
        <div className="card" style={{ maxWidth: 680, margin: "0 auto", padding: "clamp(2rem, 5vw, 3rem)" }}>
          <span className="eyebrow">Contact</span>
          <h1 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, letterSpacing: "-0.035em", color: INK,
            margin: "0.75rem 0 0.625rem", lineHeight: 1.02,
          }}>We read every message.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.6, color: MUTED,
            marginBottom: "2rem",
          }}>
            A real person reads every message. We aim to respond within one working day.
          </p>

          {sent ? (
            <div className="card-flat" style={{ padding: "2.5rem 2rem", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.375rem", fontWeight: 700, color: INK, marginBottom: "0.5rem" }}>
                Message received.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: MUTED }}>
                We&apos;ll be in touch within one working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text" name="name" required
                  value={form.name} onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email" name="email" required
                  value={form.email} onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Subject</label>
                <select
                  name="subject" required
                  value={form.subject} onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">Select a topic</option>
                  <option value="order">My order</option>
                  <option value="product">Product question</option>
                  <option value="returns">Returns & refunds</option>
                  <option value="press">Press enquiry</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message" required rows={6}
                  value={form.message} onChange={handleChange}
                  style={textareaStyle}
                />
              </div>
              <button type="submit" className="btn btn-dark" style={{ alignSelf: "flex-start" }}>
                Send Message
              </button>
            </form>
          )}

          <div className="card-flat" style={{ marginTop: "2rem", padding: "1.25rem 1.5rem" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>
              Or reach us directly at{" "}
              <a href="mailto:hello@sukoon.co.uk" style={{ color: INK, textUnderlineOffset: "3px" }}>
                hello@sukoon.co.uk
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
