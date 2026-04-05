export default function CollectionsPage() {
  const metrics = [
    { value: "28%", label: "Higher recovery rates", sub: "Vs manual prioritisation baseline" },
    { value: "3×", label: "Field agent efficiency", sub: "Visits per recovery, propensity-scored" },
    { value: "60%", label: "Reduction in cost per recovery", sub: "Omni-channel vs field-only" },
    { value: "real-time", label: "Borrower intent signals", sub: "Payment propensity updated daily" },
  ];

  const channels = [
    { icon: "◈", name: "WhatsApp Automation", desc: "Templated and conversational flows triggered by DPD bucket, language preference, and past response behaviour." },
    { icon: "◎", name: "AI Voice Calls", desc: "Outbound IVR and AI voice agents that handle payment promises, date rescheduling, and escalation routing." },
    { icon: "⬡", name: "SMS Campaigns", desc: "Segment-specific SMS with payment links, personalised amounts, and dynamic scheduling based on propensity score." },
    { icon: "△", name: "Field Agent Assist", desc: "Mobile app for field executives showing borrower propensity score, best visit window, and script recommendations." },
    { icon: "◇", name: "Email Sequences", desc: "Escalating email sequences for higher ticket borrowers with legal notice triggers at configurable DPD thresholds." },
    { icon: "○", name: "Legal Escalation Engine", desc: "Automated debt tagging, legal notice generation, and handoff to recovery counsel at defined portfolio stages." },
  ];

  const stages = [
    { bucket: "0–30 DPD", label: "Early Delinquency", action: "Automated WhatsApp + SMS reminder. No field visit.", color: "#4CAF50" },
    { bucket: "31–60 DPD", label: "Soft Delinquency", action: "AI voice call + field agent assigned based on propensity score.", color: "#FFC107" },
    { bucket: "61–90 DPD", label: "Hard Delinquency", action: "Priority field visit + legal notice trigger. Escalated omni-channel.", color: "#FF9800" },
    { bucket: "90+ DPD", label: "NPA / Write-off Risk", action: "Debt tagging, settlement offer generation, legal handoff.", color: "#D32F2F" },
  ];

  return (
    <div style={{ background: "#1A1A2E", minHeight: "100vh", paddingTop: 88 }}>
      {/* Hero */}
      <section style={{ padding: "60px 2rem 80px", background: "#13132A" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            letterSpacing: "0.12em", color: "#D32F2F",
            fontWeight: 600, textTransform: "uppercase", marginBottom: 16,
          }}>Collections Intelligence</p>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400,
            color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}>
            Stop chasing borrowers.
            <br />
            <span style={{ color: "#D32F2F" }}>Start predicting them.</span>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17,
            color: "rgba(255,255,255,0.55)", lineHeight: 1.75,
            maxWidth: 580, margin: "0 auto",
          }}>
            FinTrack's collections module uses propensity-to-pay scoring to tell your team
            who to contact, when to contact them, and through which channel — before they
            miss a payment.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 1, background: "rgba(255,255,255,0.06)",
            borderRadius: 16, overflow: "hidden",
          }}>
            {metrics.map((m) => (
              <div key={m.label} style={{
                background: "#1A1A2E", padding: "40px 28px",
                transition: "background 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#13132A")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1A1A2E")}
              >
                <div style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 48, color: "#D32F2F", lineHeight: 1, marginBottom: 10,
                }}>{m.value}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                  fontWeight: 600, color: "#fff", marginBottom: 6,
                }}>{m.label}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  color: "rgba(255,255,255,0.38)", lineHeight: 1.5,
                }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPD Stages */}
      <section style={{ padding: "0 2rem 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              letterSpacing: "0.12em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
            }}>Intelligent DPD Workflow</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 400,
              color: "#fff", letterSpacing: "-0.02em", margin: 0,
            }}>Right action at every delinquency stage</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {stages.map((s) => (
              <div key={s.bucket} style={{
                display: "grid", gridTemplateColumns: "160px 180px 1fr",
                gap: 24, alignItems: "center",
                background: "#13132A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: `3px solid ${s.color}`,
                borderRadius: 10, padding: "20px 24px",
              }} className="dpd-row">
                <div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 16,
                    fontWeight: 700, color: s.color,
                  }}>{s.bucket}</div>
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  fontWeight: 600, color: "#fff",
                }}>{s.label}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "rgba(255,255,255,0.5)", lineHeight: 1.6,
                }}>{s.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section style={{ padding: "0 2rem 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              letterSpacing: "0.12em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
            }}>Omni-Channel Automation</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 400,
              color: "#fff", letterSpacing: "-0.02em", margin: 0,
            }}>Every channel. One intelligence layer.</h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }} className="channels-grid">
            {channels.map((c) => (
              <div key={c.name} style={{
                background: "#13132A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "28px 24px",
                transition: "border-color 0.25s, transform 0.2s",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(211,47,47,0.4)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: 22, color: "#D32F2F", display: "block", marginBottom: 14 }}>
                  {c.icon}
                </span>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 16,
                  fontWeight: 600, color: "#fff", margin: "0 0 10px",
                }}>{c.name}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "rgba(255,255,255,0.48)", lineHeight: 1.65, margin: 0,
                }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .channels-grid { grid-template-columns: 1fr 1fr !important; }
          .dpd-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
        @media (max-width: 480px) {
          .channels-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}