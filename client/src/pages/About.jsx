import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", institution: "", role: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.institution) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000)); // simulate API
    setSubmitted(true);
    setLoading(false);
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
    padding: "12px 16px", color: "#fff",
    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
    outline: "none", boxSizing: "border-box", marginTop: 6,
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
    fontWeight: 500, color: "rgba(255,255,255,0.55)",
  };

  return (
    <div style={{ background: "#1A1A2E", minHeight: "100vh", paddingTop: 88 }}>
      {/* Hero */}
      <section style={{ padding: "60px 2rem 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            letterSpacing: "0.12em", color: "#D32F2F",
            fontWeight: 600, textTransform: "uppercase", marginBottom: 16,
          }}>Request a Demo</p>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400,
            color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em",
            margin: "0 0 20px",
          }}>
            See Vitto running on
            <br />your lending workflows
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.7,
            maxWidth: 520, margin: "0 auto",
          }}>
            Not a generic sandbox. We configure the demo around your institution type,
            loan product, and current stack before the call.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "60px 2rem 80px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1.2fr",
          gap: 60, alignItems: "start",
        }} className="contact-grid">

          {/* Left — what to expect */}
          <div>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 28, fontWeight: 400, color: "#fff",
              margin: "0 0 32px", letterSpacing: "-0.02em",
            }}>What happens next</h2>

            {[
              {
                num: "01",
                title: "We review your request",
                desc: "Our team reads your institution type and context before reaching out — no generic SDR calls.",
              },
              {
                num: "02",
                title: "Tailored demo preparation",
                desc: "We configure a walkthrough specific to your loan product, borrower profile, and current stack.",
              },
              {
                num: "03",
                title: "45-minute platform walkthrough",
                desc: "Live demo covering the modules most relevant to your use case — underwriting, collections, or the full lifecycle.",
              },
              {
                num: "04",
                title: "Technical deep-dive (optional)",
                desc: "If your team wants API docs, integration specs, or a sandbox environment, we arrange a follow-up.",
              },
            ].map((s) => (
              <div key={s.num} style={{
                display: "flex", gap: 20, marginBottom: 28,
                paddingBottom: 28,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                <span style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 32, color: "rgba(211,47,47,0.25)",
                  lineHeight: 1, flexShrink: 0,
                }}>{s.num}</span>
                <div>
                  <h4 style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                    fontWeight: 600, color: "#fff", margin: "0 0 6px",
                  }}>{s.title}</h4>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0,
                  }}>{s.desc}</p>
                </div>
              </div>
            ))}

            {/* Contact details */}
            <div style={{ marginTop: 8 }}>
              {[
                { label: "Email", value: "demo@vitto.in" },
                { label: "Response time", value: "Within 24 hours" },
                { label: "Demo duration", value: "45 minutes" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    color: "rgba(255,255,255,0.35)",
                  }}>{item.label}</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    color: "rgba(255,255,255,0.7)", fontWeight: 500,
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            background: "#13132A",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16, padding: "40px 36px",
          }}>
            {!submitted ? (
              <>
                <h3 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 24, fontWeight: 400, color: "#fff",
                  margin: "0 0 28px", letterSpacing: "-0.02em",
                }}>Request a demo</h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input value={form.name} onChange={set("name")}
                      placeholder="Rajiv Sharma" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(211,47,47,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Work Email *</label>
                    <input value={form.email} onChange={set("email")} type="email"
                      placeholder="you@institution.com" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(211,47,47,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <label style={labelStyle}>Institution Name *</label>
                  <input value={form.institution} onChange={set("institution")}
                    placeholder="e.g. Horizon Finance Ltd." style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(211,47,47,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                </div>

                <div style={{ marginTop: 16 }}>
                  <label style={labelStyle}>Your Role</label>
                  <select value={form.role} onChange={set("role")} style={{
                    ...inputStyle, cursor: "pointer", background: "#1A1A2E",
                  }}>
                    <option value="" style={{ background: "#1A1A2E" }}>Select your role</option>
                    {["CTO / CIO", "Chief Risk Officer", "Head of Credit",
                      "Head of Collections", "Digital Transformation Lead",
                      "Operations Head", "CEO / MD", "Other"].map((r) => (
                      <option key={r} value={r} style={{ background: "#1A1A2E" }}>{r}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginTop: 16 }}>
                  <label style={labelStyle}>What are you looking to solve? (optional)</label>
                  <textarea value={form.message} onChange={set("message")}
                    placeholder="e.g. We want to reduce manual underwriting time and improve collections recovery..."
                    rows={4} style={{
                      ...inputStyle, resize: "vertical", lineHeight: 1.6,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(211,47,47,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                </div>

                <button onClick={handleSubmit} disabled={loading} style={{
                  width: "100%", background: loading ? "rgba(211,47,47,0.5)" : "#D32F2F",
                  color: "#fff", border: "none", borderRadius: 8,
                  padding: "14px", fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15, fontWeight: 600,
                  cursor: loading ? "not-allowed" : "pointer",
                  marginTop: 24, transition: "background 0.2s",
                }}
                  onMouseEnter={(e) => { if (!loading) e.target.style.background = "#B71C1C"; }}
                  onMouseLeave={(e) => { if (!loading) e.target.style.background = "#D32F2F"; }}
                >
                  {loading ? "Submitting…" : "Request Demo →"}
                </button>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                  color: "rgba(255,255,255,0.25)", textAlign: "center",
                  marginTop: 16, lineHeight: 1.6,
                }}>
                  No spam. No automated follow-ups. A human will read this.
                </p>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "rgba(211,47,47,0.12)",
                  border: "2px solid rgba(211,47,47,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px", fontSize: 28, color: "#D32F2F",
                }}>✓</div>
                <h3 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 26, fontWeight: 400, color: "#fff",
                  margin: "0 0 12px",
                }}>Request received</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0,
                }}>
                  Our team will reach out to <strong style={{ color: "#fff" }}>{form.email}</strong> within
                  24 hours to schedule your walkthrough.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}