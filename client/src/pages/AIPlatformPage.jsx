import { useState, useEffect, useRef } from "react";

const modules = [
  {
    id: "data-assessment",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="14" width="5" height="12" rx="1" fill="#D32F2F" opacity="0.7"/>
        <rect x="9" y="9" width="5" height="17" rx="1" fill="#D32F2F" opacity="0.85"/>
        <rect x="16" y="4" width="5" height="22" rx="1" fill="#D32F2F"/>
        <circle cx="22" cy="6" r="3" fill="#FF6B6B" opacity="0.6"/>
        <path d="M4 10 L11 7 L18 3" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="2 2"/>
      </svg>
    ),
    label: "Data-Based Assessment",
    tagline: "Bureau-agnostic alternative data scoring",
    color: "#D32F2F",
    short: "Multi-source data ingestion with ML-driven feature engineering for credit scoring beyond traditional bureau data.",
    technical: [
      {
        heading: "Alternative Data Ingestion",
        body: "Pulls from 40+ data sources: GST filings, bank statement parsing, UPI transaction history, utility payments, telecom behavioral signals, and device metadata. Each signal is normalized and weighted through a domain-specific feature store — not a generic ML pipeline.",
      },
      {
        heading: "Bureau-Agnostic Scoring",
        body: "Built for India's thin-file population where CIBIL scores are absent or insufficient. The model generates a Vitto Credit Score (VCS) even when bureau data is missing, using ensemble methods across gradient boosting, logistic regression, and neural collaborative filtering.",
      },
      {
        heading: "Explainability Layer",
        body: "Every score comes with a SHAP-value breakdown — so credit officers can see exactly which features drove the decision. This is a regulatory requirement under RBI guidelines and a business necessity for appeals management.",
      },
    ],
  },
  {
    id: "ml-model",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" fill="#D32F2F"/>
        <circle cx="4" cy="8" r="2.5" fill="#D32F2F" opacity="0.6"/>
        <circle cx="24" cy="8" r="2.5" fill="#D32F2F" opacity="0.6"/>
        <circle cx="4" cy="20" r="2.5" fill="#D32F2F" opacity="0.6"/>
        <circle cx="24" cy="20" r="2.5" fill="#D32F2F" opacity="0.6"/>
        <path d="M6.5 9L10 12" stroke="#FF6B6B" strokeWidth="1.2"/>
        <path d="M21.5 9L18 12" stroke="#FF6B6B" strokeWidth="1.2"/>
        <path d="M6.5 19L10 16" stroke="#FF6B6B" strokeWidth="1.2"/>
        <path d="M21.5 19L18 16" stroke="#FF6B6B" strokeWidth="1.2"/>
      </svg>
    ),
    label: "ML Model Layer",
    tagline: "Adaptive underwriting that learns from your portfolio",
    color: "#C62828",
    short: "Continuously retrained ensemble models tuned to lender-specific risk appetite, borrower segments, and product types.",
    technical: [
      {
        heading: "Portfolio-Specific Training",
        body: "Unlike generic scoring models, Vitto's ML layer trains on each lender's own historical disbursement and repayment data. The model learns your portfolio's risk signature — not industry averages. Retraining pipelines run on a configurable cadence (weekly by default) using new repayment outcomes as ground truth.",
      },
      {
        heading: "Champion-Challenger Architecture",
        body: "Every model update runs in challenger mode against the live champion model. Traffic is split (configurable: default 90/10), and the challenger is promoted only when it demonstrates statistically significant improvement on precision-recall curves across the lender's risk bands.",
      },
      {
        heading: "Segment-Aware Models",
        body: "Separate sub-models for each product-borrower segment: MSME term loans, consumer durable finance, agri loans, micro-enterprise credit. Segment routing is automatic based on application attributes, preventing feature leakage across unlike borrower profiles.",
      },
    ],
  },
  {
    id: "rule-engine",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="#D32F2F" strokeWidth="1.8"/>
        <rect x="15" y="3" width="10" height="10" rx="2" fill="none" stroke="#D32F2F" strokeWidth="1.8" opacity="0.6"/>
        <rect x="3" y="15" width="10" height="10" rx="2" fill="none" stroke="#D32F2F" strokeWidth="1.8" opacity="0.6"/>
        <rect x="15" y="15" width="10" height="10" rx="2" fill="#D32F2F" opacity="0.3"/>
        <path d="M17 20 L19 22 L23 18" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Rule Engine & Decisioning",
    tagline: "Policy-compliant decisioning at millisecond latency",
    color: "#B71C1C",
    short: "A configurable, version-controlled rule engine that sits above the ML score and enforces policy guardrails — without requiring engineering intervention.",
    technical: [
      {
        heading: "No-Code Policy Configuration",
        body: "Credit policy teams can define and update decisioning rules through a visual rule builder — without raising a tech ticket. Rules operate on both raw application attributes and model output scores. Supports AND/OR logic, score banding, override conditions, and product-level rule inheritance.",
      },
      {
        heading: "Decisioning Waterfall",
        body: "The engine follows a structured waterfall: hard reject rules → bureau filters → ML score thresholds → product eligibility → final decision. Each stage is logged with a reason code, creating a full audit trail required for RBI supervisory reporting.",
      },
      {
        heading: "Real-Time & Batch Modes",
        body: "API-driven real-time decisions complete in under 800ms for digital journeys. Batch decisioning runs for pre-approved campaign screening — processing hundreds of thousands of records overnight using the same rule logic, ensuring policy consistency across channels.",
      },
    ],
  },
  {
    id: "fraud-intelligence",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L4 7V14C4 19.5 8.4 24.7 14 26C19.6 24.7 24 19.5 24 14V7L14 2Z" fill="none" stroke="#D32F2F" strokeWidth="1.8"/>
        <path d="M10 14 L13 17 L18 11" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3" fill="#D32F2F" opacity="0.15"/>
      </svg>
    ),
    label: "Fraud Intelligence",
    tagline: "Identity verification and synthetic fraud detection",
    color: "#D32F2F",
    short: "Multi-layer fraud detection combining document forensics, identity graph analysis, behavioral biometrics, and network-based fraud ring detection.",
    technical: [
      {
        heading: "Document Forensics & KYC",
        body: "AI-powered document verification checks for pixel-level manipulation, font inconsistencies, metadata anomalies, and reflectivity patterns in ID documents. Aadhaar XML parsing, PAN validation via NSDL APIs, and face-match liveness detection are built into the KYC flow — no third-party dependency for core verification.",
      },
      {
        heading: "Identity Graph & Deduplication",
        body: "UCIC (Unique Customer Identification Code) engine builds a cross-lender identity graph using fuzzy-matched PII (name, DOB, address, phone) alongside hard identifiers. Detects synthetic identities that pass individual checks but fail when relationship patterns are examined across the network.",
      },
      {
        heading: "Behavioral Biometrics",
        body: "During the application journey, the system passively captures keystroke dynamics, device tilt, scroll velocity, and session timing patterns. These signals are scored against fraud-ring behavioral fingerprints. An application that looks clean on paper but moves like a bot gets flagged before disbursement.",
      },
    ],
  },
  {
    id: "collection-intelligence",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22 Q8 10 14 14 Q20 18 24 6" stroke="#D32F2F" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3" fill="#D32F2F" opacity="0.4"/>
        <circle cx="24" cy="6" r="3" fill="#D32F2F"/>
        <path d="M3 26 L25 26" stroke="#D32F2F" strokeWidth="1" opacity="0.3"/>
        <path d="M3 4 L3 26" stroke="#D32F2F" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    label: "Collection Intelligence",
    tagline: "Propensity scoring that turns reactive into predictive",
    color: "#C62828",
    short: "ML-powered collection prioritization that predicts which accounts will default, when, and which intervention channel will recover them.",
    technical: [
      {
        heading: "Default Propensity Scoring",
        body: "A dedicated delinquency prediction model runs weekly against the performing portfolio. It scores every active loan account on a 0–100 propensity-to-default scale, using payment behavior patterns, utilization trends, and macroeconomic overlays. Accounts entering the 60–80 score band trigger early intervention queues — before the first missed EMI.",
      },
      {
        heading: "Channel & Agent Optimization",
        body: "The system determines the optimal contact strategy per borrower: WhatsApp nudge, IVR call, field visit, or AI-voice agent. Channel selection is based on historical response rates for that borrower's profile segment, time-of-day conversion curves, and outstanding bucket. Field agent routing optimizes geographic density for visit efficiency.",
      },
      {
        heading: "PTP Monitoring & Escalation",
        body: "Promise-to-Pay commitments are tracked programmatically. When a PTP is missed, the system auto-escalates to the next intervention tier without human queuing. Legal action workflows, NPA classification triggers, and write-off recommendations are all automated based on configurable DPD thresholds.",
      },
    ],
  },
  {
    id: "agentic-ai",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" fill="none" stroke="#D32F2F" strokeWidth="1.8"/>
        <circle cx="14" cy="10" r="2" fill="#D32F2F"/>
        <path d="M9 15 C6 17 4 20 4 24 L24 24 C24 20 22 17 19 15" stroke="#D32F2F" strokeWidth="1.8" fill="none"/>
        <path d="M20 6 L24 4 M20 10 L25 10 M20 14 L24 16" stroke="#FF6B6B" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    label: "Agentic AI Layer",
    tagline: "Domain-trained agents operating inside regulated credit workflows",
    color: "#D32F2F",
    short: "Three purpose-built AI agents powered by a domain-trained Small Language Model — not a generic LLM with a lending prompt.",
    technical: [
      {
        heading: "Why Not ChatGPT or Public LLMs",
        body: "General-purpose LLMs are trained on internet-scale data optimized for fluency — not accuracy within a regulated credit policy. They hallucinate RBI circular references, confuse product-specific eligibility criteria, and cannot access your live ledger or application state. In a BFSI context, a confident wrong answer is worse than no answer. Vitto's agents are grounded in your institution's actual policy documents, live data, and operational constraints.",
      },
      {
        heading: "SLM Architecture: RAG + Domain Training",
        body: "Vitto runs a Small Language Model fine-tuned on a curated corpus of RBI guidelines, NBFC Master Directions, credit policy documents, product manuals, and historical Q&A logs from credit operations teams. A Retrieval-Augmented Generation (RAG) pipeline retrieves the relevant policy chunk before every response — so the model generates answers grounded in real documents, not parametric memory. Context window is populated with live application data, account state, and user role before each agent invocation.",
      },
      {
        heading: "Explainability and Compliance",
        body: "Every agent response carries a citation: which policy document or data record was used to generate it. This is non-negotiable in regulated environments where credit decisions must be auditable. The SLM's smaller parameter count also means inference is faster (sub-second on-prem deployment) and the hallucination surface area is dramatically smaller than a 70B+ parameter general model.",
      },
      {
        heading: "Three Operational Agents",
        body: "Borrower Agent handles inbound self-service: EMI schedule queries, NOC requests, restructuring eligibility, complaint filing — in Hindi, English, or regional languages. Field Agent assists collections officers in the field: real-time account status, payment history, PTP logging, and route optimization — all accessible via a mobile interface without backend access. Underwriter Agent answers internal policy Q&A for credit analysts: 'What is the maximum LTV for this product?', 'Does this borrower's GST profile meet the income stability criteria?' — pulling answers from the institution's actual underwriting guidelines, not a generic policy.",
      },
    ],
  },
];

function useIntersection(ref, options) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return isVisible;
}

function ModuleCard({ mod, index, onClick, isActive }) {
  const ref = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.1 });
  return (
    <div
      ref={ref}
      onClick={() => onClick(mod.id)}
      style={{
        background: isActive
          ? "linear-gradient(135deg, rgba(211,47,47,0.18) 0%, rgba(26,26,46,0.95) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(26,26,46,0.7) 100%)",
        border: isActive ? "1.5px solid rgba(211,47,47,0.7)" : "1.5px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: "28px 26px",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 80}ms`,
        backdropFilter: "blur(12px)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        if (!isActive) {
          e.currentTarget.style.border = "1.5px solid rgba(211,47,47,0.4)";
          e.currentTarget.style.background = "linear-gradient(135deg, rgba(211,47,47,0.08) 0%, rgba(26,26,46,0.9) 100%)";
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          e.currentTarget.style.border = "1.5px solid rgba(255,255,255,0.08)";
          e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(26,26,46,0.7) 100%)";
        }
      }}
    >
      {isActive && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: "linear-gradient(90deg, #D32F2F, #FF6B6B)",
          borderRadius: "16px 16px 0 0",
        }} />
      )}
      <div style={{ marginBottom: 16 }}>{mod.icon}</div>
      <div style={{
        fontSize: 11, letterSpacing: "0.12em", color: "#D32F2F",
        fontWeight: 600, textTransform: "uppercase", marginBottom: 8,
        fontFamily: "'DM Mono', 'Courier New', monospace",
      }}>
        Module {String(index + 1).padStart(2, "0")}
      </div>
      <div style={{
        fontSize: 17, fontWeight: 700, color: "#F5F5F5",
        marginBottom: 8, lineHeight: 1.3,
        fontFamily: "'Sora', 'Segoe UI', sans-serif",
      }}>
        {mod.label}
      </div>
      <div style={{
        fontSize: 12.5, color: "#8B8FA8", lineHeight: 1.6,
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}>
        {mod.tagline}
      </div>
      <div style={{
        marginTop: 16, display: "flex", alignItems: "center", gap: 6,
        fontSize: 12, color: isActive ? "#FF6B6B" : "#D32F2F",
        fontWeight: 600, fontFamily: "'DM Mono', monospace",
        letterSpacing: "0.06em",
      }}>
        {isActive ? "▼ Details" : "▶ Explore"}
      </div>
    </div>
  );
}

function TechnicalDetail({ heading, body, index }) {
  const ref = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.05 });
  return (
    <div
      ref={ref}
      style={{
        borderLeft: "2px solid rgba(211,47,47,0.4)",
        paddingLeft: 20,
        marginBottom: 28,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transition: `all 0.4s ease ${index * 100}ms`,
      }}
    >
      <div style={{
        fontSize: 13, fontWeight: 700, color: "#D32F2F",
        marginBottom: 8, fontFamily: "'Sora', sans-serif",
        letterSpacing: "0.04em",
      }}>
        {heading}
      </div>
      <div style={{
        fontSize: 14.5, color: "#B0B3C6", lineHeight: 1.75,
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}>
        {body}
      </div>
    </div>
  );
}

export default function AIPlatformPage() {
  const [activeModule, setActiveModule] = useState("agentic-ai");
  const detailRef = useRef(null);

  const handleClick = (id) => {
    setActiveModule(prev => prev === id ? null : id);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const active = modules.find(m => m.id === activeModule);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0D0D1A",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      color: "#F5F5F5",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0D0D1A; }
        ::-webkit-scrollbar-thumb { background: #D32F2F; border-radius: 3px; }
      `}</style>

      {/* Subtle grid background */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(211,47,47,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(211,47,47,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HEADER SECTION ── */}
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "100px 32px 64px",
        }}>
          <div style={{
            display: "inline-block",
            background: "rgba(211,47,47,0.12)", border: "1px solid rgba(211,47,47,0.3)",
            borderRadius: 6, padding: "6px 14px", marginBottom: 24,
            fontSize: 11, letterSpacing: "0.14em", color: "#D32F2F",
            fontWeight: 600, textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace",
          }}>
            AI-First Platform
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: 800, lineHeight: 1.1,
            fontFamily: "'Sora', sans-serif",
            marginBottom: 20,
            background: "linear-gradient(135deg, #FFFFFF 30%, #8B8FA8 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Six Modules.<br />One Unified AI Layer.
          </h1>
          <p style={{
            fontSize: 17, color: "#8B8FA8", maxWidth: 620, lineHeight: 1.75,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Each module is purpose-built for a specific stage of the lending lifecycle.
            They share a unified data layer, a common model registry, and a single policy configuration surface.
            Not six vendors. One platform.
          </p>
        </div>

        {/* ── MODULE GRID ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 64px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}>
            {modules.map((mod, i) => (
              <ModuleCard
                key={mod.id}
                mod={mod}
                index={i}
                onClick={handleClick}
                isActive={activeModule === mod.id}
              />
            ))}
          </div>
        </div>

        {/* ── DETAIL PANEL ── */}
        {active && (
          <div
            ref={detailRef}
            style={{
              maxWidth: 1200, margin: "0 auto 80px", padding: "0 32px",
              animation: "fadeSlideIn 0.4s ease both",
            }}
          >
            <style>{`
              @keyframes fadeSlideIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>

            <div style={{
              background: "linear-gradient(135deg, rgba(211,47,47,0.06) 0%, rgba(13,13,26,0.98) 100%)",
              border: "1.5px solid rgba(211,47,47,0.25)",
              borderRadius: 20,
              padding: "44px 48px",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
            }}>

              {/* Glowing corner accent */}
              <div style={{
                position: "absolute", top: -60, right: -60, width: 200, height: 200,
                background: "radial-gradient(circle, rgba(211,47,47,0.15) 0%, transparent 70%)",
                borderRadius: "50%",
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 36 }}>
                <div style={{
                  background: "rgba(211,47,47,0.12)", border: "1px solid rgba(211,47,47,0.25)",
                  borderRadius: 12, padding: 14,
                }}>
                  {active.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: 11, letterSpacing: "0.12em", color: "#D32F2F",
                    fontWeight: 600, textTransform: "uppercase", marginBottom: 6,
                    fontFamily: "'DM Mono', monospace",
                  }}>
                    Technical Detail
                  </div>
                  <h2 style={{
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 700, fontFamily: "'Sora', sans-serif",
                    lineHeight: 1.2,
                  }}>
                    {active.label}
                  </h2>
                  <p style={{
                    fontSize: 14, color: "#8B8FA8", marginTop: 6,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {active.short}
                  </p>
                </div>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: active.technical.length >= 3 ? "1fr 1fr" : "1fr",
                gap: "0 48px",
              }}>
                {active.technical.map((t, i) => (
                  <TechnicalDetail key={i} heading={t.heading} body={t.body} index={i} />
                ))}
              </div>

              {/* Special Agentic AI Agents callout */}
              {active.id === "agentic-ai" && (
                <div style={{
                  marginTop: 36,
                  display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16,
                }}>
                  {[
                    {
                      title: "Borrower Agent",
                      desc: "Self-service queries in regional languages — EMI schedules, NOC requests, restructuring eligibility, complaint filing.",
                      icon: "👤",
                    },
                    {
                      title: "Field Agent",
                      desc: "Real-time account status, payment history, PTP logging, and route optimization for collections officers in the field.",
                      icon: "📍",
                    },
                    {
                      title: "Underwriter Agent",
                      desc: "Policy Q&A for credit analysts — answers grounded in the institution's actual underwriting guidelines and live application data.",
                      icon: "📋",
                    },
                  ].map((agent, i) => (
                    <div key={i} style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(211,47,47,0.2)",
                      borderRadius: 12, padding: "20px 22px",
                    }}>
                      <div style={{ fontSize: 24, marginBottom: 10 }}>{agent.icon}</div>
                      <div style={{
                        fontSize: 14, fontWeight: 700, color: "#F5F5F5",
                        marginBottom: 8, fontFamily: "'Sora', sans-serif",
                      }}>
                        {agent.title}
                      </div>
                      <div style={{
                        fontSize: 13, color: "#8B8FA8", lineHeight: 1.65,
                        fontFamily: "'DM Sans', sans-serif",
                      }}>
                        {agent.desc}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── SLM vs LLM CALLOUT ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto 100px", padding: "0 32px" }}>
          <div style={{
            background: "linear-gradient(135deg, #1A0A0A 0%, #0D0D1A 100%)",
            border: "1px solid rgba(211,47,47,0.2)",
            borderRadius: 20, padding: "48px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40,
          }}>
            <div>
              <div style={{
                fontSize: 11, letterSpacing: "0.14em", color: "#666",
                fontWeight: 600, textTransform: "uppercase", marginBottom: 16,
                fontFamily: "'DM Mono', monospace",
              }}>
                Generic LLM (ChatGPT / GPT-4)
              </div>
              {[
                "Trained on internet-scale data, not credit policy",
                "No access to your live ledger or application state",
                "Hallucinates regulatory references with confidence",
                "Cannot enforce policy-specific eligibility guardrails",
                "No audit trail — output not attributable to a source",
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 4,
                    background: "rgba(100,100,100,0.15)",
                    border: "1px solid rgba(100,100,100,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 2,
                  }}>
                    <div style={{ width: 8, height: 1.5, background: "#555" }} />
                  </div>
                  <span style={{ fontSize: 13.5, color: "#666", lineHeight: 1.6,
                    fontFamily: "'DM Sans', sans-serif" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <div style={{
                fontSize: 11, letterSpacing: "0.14em", color: "#D32F2F",
                fontWeight: 600, textTransform: "uppercase", marginBottom: 16,
                fontFamily: "'DM Mono', monospace",
              }}>
                Vitto Domain SLM
              </div>
              {[
                "Fine-tuned on RBI guidelines, NBFC Master Directions, credit policy docs",
                "RAG pipeline grounds every response in live data and real documents",
                "Citation-backed answers — every response traces to a source",
                "Policy-compliant guardrails prevent out-of-scope responses",
                "Sub-second inference, deployable on-prem for data residency compliance",
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 4,
                    background: "rgba(211,47,47,0.15)",
                    border: "1px solid rgba(211,47,47,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 2,
                  }}>
                    <svg width="10" height="8" viewBox="0 0 10 8">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#D32F2F" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 13.5, color: "#B0B3C6", lineHeight: 1.6,
                    fontFamily: "'DM Sans', sans-serif" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}