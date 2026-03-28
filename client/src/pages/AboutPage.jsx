import { Link } from "react-router-dom";

export default function AboutPage() {
  const values = [
    { icon: "◈", title: "Decisioning depth over feature breadth", desc: "We build fewer things and build them right. Every module is designed around the data it needs to make an accurate decision — not around a checkbox in an RFP." },
    { icon: "◎", title: "Explainability is not optional", desc: "In a regulated lending environment, a black-box model is a liability. Every decision Vitto makes can be explained to a borrower, a regulator, or a board." },
    { icon: "⬡", title: "Infrastructure, not software", desc: "Vitto is not a SaaS tool your team logs into. It is the decisioning and automation layer your entire lending operation runs on — from lead to closure." },
    { icon: "△", title: "Built for India's lending complexity", desc: "Multiple languages, diverse borrower profiles, state-level regulatory variation, and a fragmented data ecosystem. We build for this reality, not a simplified version of it." },
  ];

  const team = [
    { initials: "RK", name: "Rajan Kulkarni", role: "CEO & Co-founder", bg: "Former Head of Credit, HDFC Bank" },
    { initials: "PM", name: "Priya Mehta", role: "CTO & Co-founder", bg: "Ex-ML Platform Lead, Razorpay" },
    { initials: "AS", name: "Arjun Sinha", role: "Head of Product", bg: "Former Product, Lendingkart & BankBazaar" },
    { initials: "NK", name: "Neha Kapoor", role: "Head of Risk", bg: "10 years in NBFC credit underwriting" },
  ];

  return (
    <div style={{ background: "#1A1A2E", minHeight: "100vh", paddingTop: 88 }}>
      {/* Hero */}
      <section style={{ padding: "60px 2rem 80px", background: "#13132A" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            letterSpacing: "0.12em", color: "#D32F2F",
            fontWeight: 600, textTransform: "uppercase", marginBottom: 16,
          }}>Why Vitto</p>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400,
            color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em",
            margin: "0 0 28px", maxWidth: 700,
          }}>
            We built what we
            <br />
            couldn't find elsewhere
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17,
            color: "rgba(255,255,255,0.55)", lineHeight: 1.8,
            maxWidth: 620, margin: "0 0 20px",
          }}>
            Every lending platform we evaluated was either a legacy LOS with an AI tab bolted
            on, or a point solution that solved one problem and created three integration
            headaches. Neither was acceptable.
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17,
            color: "rgba(255,255,255,0.55)", lineHeight: 1.8,
            maxWidth: 620, margin: 0,
          }}>
            Vitto is what happens when a credit risk professional and an ML engineer
            sit down together and design from first principles — not from a legacy
            codebase, and not from a generic AI toolkit.
          </p>
        </div>
      </section>

      {/* Positioning statement */}
      <section style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            background: "rgba(211,47,47,0.06)",
            border: "1px solid rgba(211,47,47,0.2)",
            borderRadius: 16, padding: "48px",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(22px, 3.5vw, 38px)", fontWeight: 400,
              color: "#fff", lineHeight: 1.4, margin: "0 0 20px",
              letterSpacing: "-0.02em",
            }}>
              "A traditional LOS is a transaction system.
              <br />
              <span style={{ color: "#D32F2F" }}>Vitto is a decisioning system."</span>
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.35)", margin: 0,
            }}>
              The distinction matters more than it sounds. A transaction system records
              what happened. A decisioning system determines what should happen next.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "0 2rem 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              letterSpacing: "0.12em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
            }}>What We Believe</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 400,
              color: "#fff", letterSpacing: "-0.02em", margin: 0,
            }}>The principles behind every product decision</h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }} className="values-grid">
            {values.map((v) => (
              <div key={v.title} style={{
                background: "#13132A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "32px 28px",
                transition: "border-color 0.25s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(211,47,47,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <span style={{ fontSize: 24, color: "#D32F2F", display: "block", marginBottom: 16 }}>
                  {v.icon}
                </span>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 17,
                  fontWeight: 600, color: "#fff", margin: "0 0 12px",
                }}>{v.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "rgba(255,255,255,0.48)", lineHeight: 1.7, margin: 0,
                }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "0 2rem 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              letterSpacing: "0.12em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
            }}>The Team</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 400,
              color: "#fff", letterSpacing: "-0.02em", margin: 0,
            }}>Credit and engineering, together</h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }} className="team-grid">
            {team.map((t) => (
              <div key={t.name} style={{
                background: "#13132A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "28px 24px",
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "rgba(211,47,47,0.15)",
                  border: "1px solid rgba(211,47,47,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                  color: "#D32F2F", fontSize: 16, marginBottom: 16,
                }}>{t.initials}</div>
                <h4 style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                  fontWeight: 600, color: "#fff", margin: "0 0 4px",
                }}>{t.name}</h4>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  color: "#D32F2F", fontWeight: 500, margin: "0 0 10px",
                }}>{t.role}</p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                  color: "rgba(255,255,255,0.38)", lineHeight: 1.5, margin: 0,
                }}>{t.bg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 2rem 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            background: "#D32F2F", borderRadius: 16,
            padding: "60px 48px", textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
              backgroundSize: "40px 40px", pointerEvents: "none",
            }} />
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 400,
              color: "#fff", margin: "0 0 16px", position: "relative",
            }}>Ready to see it in action?</h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              color: "rgba(255,255,255,0.75)", margin: "0 0 32px",
              position: "relative",
            }}>
              Schedule a demo tailored to your institution's lending context.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
              <Link to="/contact" style={{
                background: "#fff", color: "#D32F2F",
                padding: "13px 28px", borderRadius: 8,
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                fontWeight: 700, textDecoration: "none",
              }}>Book a Demo</Link>
              <Link to="/platform" style={{
                background: "transparent", color: "#fff",
                padding: "13px 28px", borderRadius: 8,
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                fontWeight: 500, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.4)",
              }}>Explore Platform</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}