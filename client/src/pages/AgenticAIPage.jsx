export default function AgenticAIPage() {
  const agents = [
    {
      name: "Borrower Agent",
      role: "Self-service borrower queries",
      icon: "◎",
      desc: "Handles EMI queries, statement requests, loan status checks, and repayment scheduling — in the borrower's language, 24/7. Escalates to human when intent is ambiguous.",
      capabilities: ["Loan balance & EMI details", "Repayment rescheduling requests", "NOC and statement generation", "Regional language support"],
    },
    {
      name: "Field Agent Assist",
      role: "Assisted collections intelligence",
      icon: "◈",
      desc: "Gives field executives a real-time briefing before each visit — borrower propensity score, payment history, best approach script, and escalation thresholds.",
      capabilities: ["Pre-visit propensity brief", "PTP capture and logging", "Escalation routing", "Geo-tagged visit tracking"],
    },
    {
      name: "Underwriter Agent",
      role: "Policy Q&A and decision assist",
      icon: "⬡",
      desc: "Answers underwriter questions against the institution's own credit policy — not generic financial knowledge. Surfaces relevant policy clauses, exceptions, and historical precedents.",
      capabilities: ["Credit policy Q&A", "Exception identification", "Regulatory rule lookup", "Deviation flagging"],
    },
  ];

  const comparisons = [
    {
      aspect: "Training data",
      generic: "Internet-scale general knowledge",
      vitto: "Institution's credit policy, product rules, RBI guidelines",
    },
    {
      aspect: "Hallucination risk",
      generic: "High — no grounding in policy",
      vitto: "Low — responses grounded in RAG pipeline over verified docs",
    },
    {
      aspect: "Explainability",
      generic: "Black box — cannot cite source",
      vitto: "Every response cites the policy clause or document it drew from",
    },
    {
      aspect: "Regulatory compliance",
      generic: "Not designed for regulated environments",
      vitto: "Built around RBI Fair Practices Code and lending regulations",
    },
    {
      aspect: "Data privacy",
      generic: "Queries may leave your environment",
      vitto: "Runs on your infrastructure — borrower data never leaves",
    },
    {
      aspect: "Audit trail",
      generic: "No structured logging",
      vitto: "Full interaction log with policy references for regulator review",
    },
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
          }}>Agentic AI Layer</p>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400,
            color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}>
            AI agents that know
            <br />
            <span style={{ color: "#D32F2F" }}>your credit policy</span>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17,
            color: "rgba(255,255,255,0.55)", lineHeight: 1.75,
            maxWidth: 600, margin: "0 auto",
          }}>
            Vitto's agentic layer is not ChatGPT with a lending wrapper. It is a
            Small Language Model trained on your institution's credit policy,
            product rules, and regulatory framework — purpose-built for regulated
            lending environments.
          </p>
        </div>
      </section>

      {/* Why not generic LLMs */}
      <section style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              letterSpacing: "0.12em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
            }}>Why Not Generic LLMs</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 400,
              color: "#fff", letterSpacing: "-0.02em", margin: "0 0 16px",
            }}>
              Public LLMs are insufficient
              <br />for regulated lending
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              color: "rgba(255,255,255,0.5)", lineHeight: 1.75,
              maxWidth: 620, margin: 0,
            }}>
              A model trained on the internet knows finance in general. It does not know
              your NPA definition, your product-specific LTV cap, your state-level
              regulatory exceptions, or your collections escalation matrix. In a regulated
              environment, that gap is a compliance liability.
            </p>
          </div>

          {/* Comparison table */}
          <div style={{
            background: "#13132A",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16, overflow: "hidden",
          }}>
            {/* Header */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              background: "rgba(255,255,255,0.04)",
              padding: "16px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}>
              {["Aspect", "Generic LLM (ChatGPT etc.)", "Vitto SLM"].map((h, i) => (
                <div key={h} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                  fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: i === 2 ? "#D32F2F" : "rgba(255,255,255,0.35)",
                }}>{h}</div>
              ))}
            </div>

            {comparisons.map((row, i) => (
              <div key={row.aspect} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                padding: "18px 24px",
                borderBottom: i < comparisons.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                transition: "background 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  fontWeight: 600, color: "#fff",
                }}>{row.aspect}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "rgba(255,255,255,0.38)", lineHeight: 1.5, paddingRight: 16,
                }}>{row.generic}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "rgba(255,255,255,0.75)", lineHeight: 1.5,
                }}>{row.vitto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — RAG pipeline */}
      <section style={{ padding: "0 2rem 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              letterSpacing: "0.12em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
            }}>How It Works</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 400,
              color: "#fff", letterSpacing: "-0.02em", margin: 0,
            }}>RAG pipeline + domain-trained SLM</h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }} className="pipeline-grid">
            {[
              { step: "01", title: "Policy Ingestion", desc: "Credit policy documents, product manuals, and RBI circulars are chunked, embedded, and stored in a vector database." },
              { step: "02", title: "Query Processing", desc: "Agent receives a query — from borrower, field exec, or underwriter. Query is embedded and matched against the policy vector store." },
              { step: "03", title: "Retrieval & Grounding", desc: "Top-k relevant policy chunks are retrieved and injected into the SLM prompt as grounding context. No hallucination without a source." },
              { step: "04", title: "Cited Response", desc: "SLM generates a response grounded in the retrieved clauses. Every answer includes a reference to the source document and section." },
            ].map((s) => (
              <div key={s.step} style={{
                background: "#13132A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "28px 22px",
                position: "relative",
              }}>
                <span style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 40, color: "rgba(211,47,47,0.2)",
                  lineHeight: 1, display: "block", marginBottom: 16,
                }}>{s.step}</span>
                <h4 style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                  fontWeight: 600, color: "#fff", margin: "0 0 10px",
                }}>{s.title}</h4>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three agents */}
      <section style={{ padding: "0 2rem 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              letterSpacing: "0.12em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
            }}>Three AI Agents</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 400,
              color: "#fff", letterSpacing: "-0.02em", margin: 0,
            }}>Built for every role in the lending chain</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {agents.map((a) => (
              <div key={a.name} style={{
                display: "grid", gridTemplateColumns: "1fr 2fr",
                gap: 40, background: "#13132A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16, padding: "36px 32px",
                transition: "border-color 0.25s",
              }} className="agent-row"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(211,47,47,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <div>
                  <span style={{ fontSize: 28, color: "#D32F2F", display: "block", marginBottom: 14 }}>
                    {a.icon}
                  </span>
                  <h3 style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: 24, fontWeight: 400, color: "#fff",
                    margin: "0 0 6px",
                  }}>{a.name}</h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    color: "#D32F2F", fontWeight: 500, margin: 0,
                    textTransform: "uppercase", letterSpacing: "0.06em",
                  }}>{a.role}</p>
                </div>
                <div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                    color: "rgba(255,255,255,0.6)", lineHeight: 1.75,
                    margin: "0 0 20px",
                  }}>{a.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {a.capabilities.map((cap) => (
                      <span key={cap} style={{
                        background: "rgba(211,47,47,0.1)",
                        border: "1px solid rgba(211,47,47,0.2)",
                        borderRadius: 100, padding: "5px 14px",
                        fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                        color: "#F08080", fontWeight: 500,
                      }}>{cap}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .pipeline-grid { grid-template-columns: 1fr 1fr !important; }
          .agent-row { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .pipeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}