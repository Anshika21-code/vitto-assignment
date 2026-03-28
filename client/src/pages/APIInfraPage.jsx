export default function APIInfraPage() {
  const endpoints = [
    { method: "POST", path: "/v1/assess/credit", desc: "Submit a borrower profile for real-time credit assessment. Returns score, decision, and explainability vector." },
    { method: "POST", path: "/v1/kyc/verify", desc: "Trigger KYC verification for individual or entity. Supports Aadhaar, PAN, GST, and bank account verification." },
    { method: "GET",  path: "/v1/loan/:id/status", desc: "Retrieve current loan status, disbursement state, and active flags across the LOS pipeline." },
    { method: "POST", path: "/v1/collections/score", desc: "Get propensity-to-pay score for a borrower. Returns score, recommended channel, and best contact window." },
    { method: "POST", path: "/v1/fraud/check", desc: "Run fraud intelligence checks including identity verification, liveness, and network-based fraud ring detection." },
    { method: "GET",  path: "/v1/portfolio/summary", desc: "Aggregated portfolio metrics — DPD buckets, NPA rate, approval rate, and collection efficiency." },
  ];

  const integrations = [
    { category: "Credit Bureaus", items: ["CIBIL", "Experian", "CRIF", "Equifax"] },
    { category: "Banking & AA", items: ["Account Aggregator", "Net Banking", "NACH / eMandate", "UPI"] },
    { category: "KYC & Identity", items: ["Aadhaar eKYC", "PAN Verification", "Video KYC", "Liveness Check"] },
    { category: "GST & Income", items: ["GST Verification", "ITR Fetch", "Bank Statement Analysis", "Salary Slip OCR"] },
    { category: "Disbursement", items: ["IMPS / NEFT", "UPI Payout", "eSign (Aadhaar)", "Stamp Duty"] },
    { category: "Communications", items: ["WhatsApp Business", "SMS Gateway", "Email", "AI Voice"] },
  ];

  const methodColor = { GET: "#4CAF50", POST: "#2196F3", PUT: "#FF9800", DELETE: "#D32F2F" };

  return (
    <div style={{ background: "#1A1A2E", minHeight: "100vh", paddingTop: 88 }}>
      {/* Hero */}
      <section style={{ padding: "60px 2rem 80px", background: "#13132A" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            letterSpacing: "0.12em", color: "#D32F2F",
            fontWeight: 600, textTransform: "uppercase", marginBottom: 16,
          }}>API Infrastructure</p>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400,
            color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}>
            Connect once.
            <br />
            <span style={{ color: "#D32F2F" }}>Integrate everything.</span>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17,
            color: "rgba(255,255,255,0.55)", lineHeight: 1.75,
            maxWidth: 580, margin: "0 auto",
          }}>
            Vitto exposes a clean REST API surface across every module — credit assessment,
            KYC, collections, fraud, and portfolio analytics. 60+ pre-built integrations
            across bureau, banking, identity, and communication providers.
          </p>
        </div>
      </section>

      {/* API endpoints */}
      <section style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              letterSpacing: "0.12em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
            }}>Core Endpoints</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 400,
              color: "#fff", letterSpacing: "-0.02em", margin: 0,
            }}>REST API — clean, versioned, documented</h2>
          </div>

          <div style={{
            background: "#0D0D1F", borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden",
          }}>
            {/* Terminal header */}
            <div style={{
              background: "#13132A", padding: "12px 20px",
              display: "flex", alignItems: "center", gap: 8,
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              {["#D32F2F", "#FFC107", "#4CAF50"].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
              <span style={{
                fontFamily: "monospace", fontSize: 12,
                color: "rgba(255,255,255,0.3)", marginLeft: 8,
              }}>api.vitto.in/v1</span>
            </div>

            {endpoints.map((ep, i) => (
              <div key={ep.path} style={{
                display: "grid", gridTemplateColumns: "90px 280px 1fr",
                gap: 20, padding: "18px 24px", alignItems: "center",
                borderBottom: i < endpoints.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                transition: "background 0.2s",
              }} className="endpoint-row"
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{
                  fontFamily: "monospace", fontSize: 12, fontWeight: 700,
                  color: methodColor[ep.method] || "#fff",
                  background: `${methodColor[ep.method]}18`,
                  padding: "3px 10px", borderRadius: 4,
                  display: "inline-block", textAlign: "center",
                }}>{ep.method}</span>
                <span style={{
                  fontFamily: "monospace", fontSize: 13,
                  color: "rgba(255,255,255,0.75)",
                }}>{ep.path}</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  color: "rgba(255,255,255,0.4)", lineHeight: 1.5,
                }}>{ep.desc}</span>
              </div>
            ))}
          </div>

          {/* Auth + standards callout */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16, marginTop: 20,
          }} className="standards-grid">
            {[
              { title: "JWT Auth", desc: "Bearer token authentication on all endpoints. Token rotation and refresh built in." },
              { title: "Versioned API", desc: "All endpoints are versioned under /v1. Breaking changes always get a new version." },
              { title: "Webhook Support", desc: "Subscribe to loan lifecycle events — disbursement, NPA trigger, collection outcome." },
            ].map((s) => (
              <div key={s.title} style={{
                background: "#13132A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10, padding: "20px 20px",
              }}>
                <h4 style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  fontWeight: 600, color: "#fff", margin: "0 0 8px",
                }}>{s.title}</h4>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  color: "rgba(255,255,255,0.42)", lineHeight: 1.6, margin: 0,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section style={{ padding: "0 2rem 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              letterSpacing: "0.12em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
            }}>Pre-built Integrations</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 400,
              color: "#fff", letterSpacing: "-0.02em", margin: "0 0 8px",
            }}>60+ integrations across the lending stack</h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              color: "rgba(255,255,255,0.4)", margin: 0,
            }}>Connect once — every provider relationship is already built in.</p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }} className="integrations-grid">
            {integrations.map((cat) => (
              <div key={cat.category} style={{
                background: "#13132A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "24px",
                transition: "border-color 0.25s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(211,47,47,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <h4 style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                  fontWeight: 600, color: "#D32F2F", margin: "0 0 16px",
                  textTransform: "uppercase", letterSpacing: "0.08em",
                }}>{cat.category}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {cat.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: "#D32F2F", flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                        color: "rgba(255,255,255,0.65)",
                      }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .standards-grid { grid-template-columns: 1fr !important; }
          .integrations-grid { grid-template-columns: 1fr 1fr !important; }
          .endpoint-row { grid-template-columns: 70px 1fr !important; }
          .endpoint-row > span:last-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .integrations-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}