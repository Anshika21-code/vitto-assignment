import { useState, useRef, useEffect } from "react";

const layers = [
  {
    id: "acquisition",
    code: "A",
    label: "Customer Acquisition",
    tagline: "From first touch to qualified lead — across every channel",
    color: "#D32F2F",
    description:
      "The acquisition layer manages every entry point into the lending funnel. Whether a borrower walks into a branch, scans a QR code from a field agent, or applies via a digital link — the system captures, qualifies, and routes the lead through the appropriate journey without losing attribution or data fidelity.",
    modules: [
      {
        name: "Lead Management",
        desc: "Unified lead capture across digital, branch, and partner channels. Deduplication on entry. Assignment rules based on geography, product, and agent capacity. Drop-off analytics with re-engagement queues.",
      },
      {
        name: "Partner Onboarding",
        desc: "Lender-side portal for DSA, connector, and BC partner registration. Commission structure configuration, agreement e-signing, and lead attribution tracking per partner.",
      },
      {
        name: "DIY Journey",
        desc: "Fully self-served digital application for borrowers applying directly — mobile-optimized, vernacular-capable, with progressive disclosure to reduce abandonment.",
      },
      {
        name: "Assisted Journey",
        desc: "Co-browsing flow for branch staff or tele-callers who assist borrowers through the application — same form, different UX context, with staff-side override capability.",
      },
      {
        name: "Partner / Employee Journey",
        desc: "Separate application surfaces for field agents, BC agents, and employer-channel sourcing — each with role-appropriate data entry permissions and embedded verification steps.",
      },
    ],
  },
  {
    id: "underwriting",
    code: "B",
    label: "Underwriting & LOS",
    tagline: "From document submission to disbursement — automated end-to-end",
    color: "#C62828",
    description:
      "The Loan Origination System layer is where AI decisioning meets regulatory compliance. Every touchpoint from identity verification through final disbursement is orchestrated, logged, and auditable — with a decisioning waterfall that enforces credit policy without requiring manual review for standard profiles.",
    modules: [
      {
        name: "KYC — Individual",
        desc: "Aadhaar XML pull, PAN verification via NSDL, face-match with liveness detection, address proof parsing. AI-powered document authenticity checks (pixel-level forgery detection, metadata validation).",
      },
      {
        name: "KYC — Entity (Business)",
        desc: "GST certificate verification, MCA21 director KYC, bank statement analysis via account aggregator, MSME Udyam registration validation, and beneficial ownership mapping.",
      },
      {
        name: "UCIC & Dedupe Engine",
        desc: "Unique Customer Identification Code generation with cross-portfolio identity graph. Fuzzy-match deduplication on name, DOB, address, and device signals — prevents multi-bureau shopping and ghost applicants.",
      },
      {
        name: "Document Fetch & Analyzer",
        desc: "Auto-fetch from NSDL, GSTN, AA framework, and banking APIs. OCR + NLP extraction of key fields (income, vintage, turnover) with confidence scoring and manual review triggers on low-confidence extractions.",
      },
      {
        name: "Rule Engine & ML Decisioning",
        desc: "Policy-compliant decisioning waterfall: hard rejects → bureau filters → ML score threshold → product eligibility → final decision. All stages produce reason codes. Real-time under 800ms. Batch mode for pre-approval campaigns.",
      },
      {
        name: "E-Sign & Disbursement",
        desc: "Aadhaar-based OTP e-sign, NACH mandate registration, and direct API disbursement to borrower account. Pre-disbursement checklist enforcement prevents disbursement on incomplete files.",
      },
    ],
  },
  {
    id: "collections",
    code: "C",
    label: "Collections Intelligence",
    tagline: "Predictive prioritization before the first missed EMI",
    color: "#B71C1C",
    description:
      "The collections layer replaces reactive follow-up with predictive intervention. Every account in the performing portfolio is scored weekly on default propensity. When risk crosses a threshold, the system initiates the right intervention — through the right channel — without human queuing or manual prioritization.",
    modules: [
      {
        name: "Allotment Engine",
        desc: "Rule-based and propensity-scored allotment of overdue accounts to collection agents or agency partners. Accounts are routed based on geography, agent specialization, DPD bucket, and outstanding value. Hot accounts (high PD, high outstanding) are always retained in-house.",
      },
      {
        name: "PTP Capture & Monitoring",
        desc: "Promise-to-Pay commitments logged by field agents or auto-captured during IVR and WhatsApp conversations. PTP status tracked in real time. Missed PTP triggers automatic escalation to the next intervention tier without manual review.",
      },
      {
        name: "Payment Gateway Integration",
        desc: "Deep integration with payment aggregators (Razorpay, PayU, BillDesk) and UPI intent flows. Recovery links sent via WhatsApp or SMS are trackable — the system knows whether the link was opened, clicked, and whether the payment was completed.",
      },
      {
        name: "Omni-channel Automation",
        desc: "Orchestrated outreach across WhatsApp (conversation and payment link), SMS, IVR, and AI voice calls. Channel selection is model-driven per borrower segment and time-of-day conversion data. Escalation waterfall is fully configurable.",
      },
      {
        name: "AI Voice Calling",
        desc: "SLM-powered outbound voice agent that handles overdue notifications, PTP collection, and payment confirmation in the borrower's preferred language. Detects intent shifts (willingness to pay, dispute, hardship) and routes to human agents when needed.",
      },
    ],
  },
  {
    id: "lms",
    code: "D",
    label: "Loan Management System",
    tagline: "Post-disbursement lifecycle management — ledger to closure",
    color: "#D32F2F",
    description:
      "The LMS layer manages every event in a loan's post-disbursement life. From ledger creation at disbursement to final closure, every financial transaction is recorded, reconciled, and reportable. Insurance deductions, debt tagging, and NPA classification are automated — no manual intervention for standard flows.",
    modules: [
      {
        name: "Ledger Creation",
        desc: "Automated loan account and ledger creation at disbursement. Amortization schedule generation for flat-rate, reducing-balance, and step-EMI products. All financial events (repayment, prepayment, reversal, waiver) post to ledger in real time with GL mapping.",
      },
      {
        name: "Insurance Auto-Deduct",
        desc: "Insurance premium deduction from disbursement amount based on product configuration. Multi-insurer support with policy issuance API integration. Premium reconciliation and remittance reporting built into the monthly operations dashboard.",
      },
      {
        name: "Loan Closure",
        desc: "End-to-end closure workflow: foreclosure calculation, prepayment penalty application (if applicable), NOC generation, CERSAI hypothecation release, and credit bureau update — triggered by final payment confirmation.",
      },
      {
        name: "Debt Tagging & NPA Classification",
        desc: "Automated DPD tracking with configurable NPA classification triggers aligned to RBI prudential norms. Debt tagging for sale to ARC or assignment to co-lending partner. Sub-standard, doubtful, and loss asset classification with provisioning recommendations.",
      },
    ],
  },
  {
    id: "crm",
    code: "E",
    label: "CRM & Communications",
    tagline: "One view of every borrower — across every touchpoint",
    color: "#C62828",
    description:
      "The CRM layer ensures that every team — credit, operations, collections, customer service — is working from the same complete picture of the borrower. Combined with campaign and analytics infrastructure, it turns raw operational data into institutional intelligence.",
    modules: [
      {
        name: "360° Customer View",
        desc: "Single unified profile per borrower: all active and closed loans, payment history, interaction logs, KYC documents, correspondence history, and credit score trend. Role-based field visibility — collections officers see repayment history; underwriters see the full credit file.",
      },
      {
        name: "Service Management",
        desc: "Structured ticketing for borrower service requests: EMI date change, address update, NOC request, account statement, complaint filing. SLA tracking and breach alerts. Integration with the Borrower Agent for self-service deflection before ticket creation.",
      },
      {
        name: "Internal Hub",
        desc: "Operations team workspace: task management, approval queues, exception handling dashboards, and team-level performance tracking. Designed for credit operations, credit control, and back-office teams — not a generic helpdesk.",
      },
      {
        name: "Campaigns",
        desc: "Segmented borrower outreach for pre-approval, cross-sell, renewal, and insurance top-up campaigns. Segment builder based on portfolio attributes, repayment behavior, and propensity scores. Campaign performance tracked against disbursement and conversion outcomes.",
      },
      {
        name: "Reporting & Analytics",
        desc: "Pre-built dashboards for portfolio health, PAR buckets, disbursement velocity, collections efficiency, and KYC SLA adherence. Drilldown from portfolio-level to individual account. Export to Excel or scheduled delivery to risk committee stakeholders.",
      },
    ],
  },
];

function useIntersection(ref, options) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, options);
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function ModuleRow({ mod, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      transition: "background 0.2s ease",
    }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 0", cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <span style={{
            fontSize: 10, fontFamily: "'DM Mono', monospace",
            color: "#D32F2F", letterSpacing: "0.1em",
            background: "rgba(211,47,47,0.1)", border: "1px solid rgba(211,47,47,0.2)",
            borderRadius: 4, padding: "2px 7px",
          }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span style={{
            fontSize: 14.5, fontWeight: 600, color: "#E0E0E0",
            fontFamily: "'Sora', sans-serif",
          }}>
            {mod.name}
          </span>
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: 6,
          border: "1px solid rgba(255,255,255,0.12)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.3s ease, border-color 0.2s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          borderColor: open ? "rgba(211,47,47,0.5)" : "rgba(255,255,255,0.12)",
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M5 1V9M1 5H9" stroke={open ? "#D32F2F" : "#888"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div style={{
        overflow: "hidden",
        maxHeight: open ? 200 : 0,
        transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{
          paddingBottom: 18, paddingLeft: 36,
          fontSize: 13.5, color: "#8B8FA8", lineHeight: 1.75,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {mod.desc}
        </div>
      </div>
    </div>
  );
}

function LayerPanel({ layer, isActive }) {
  const ref = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.05 });

  if (!isActive) return null;
  return (
    <div
      ref={ref}
      style={{
        display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.45s ease",
        animation: "panelIn 0.35s ease both",
      }}
    >
      <style>{`
        @keyframes panelIn {
          from { opacity: 0; transform: translateX(-16px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Left: layer info */}
      <div>
        <div style={{
          display: "inline-block",
          background: "rgba(211,47,47,0.1)", border: "1px solid rgba(211,47,47,0.25)",
          borderRadius: 6, padding: "4px 12px", marginBottom: 20,
          fontSize: 10, letterSpacing: "0.12em", color: "#D32F2F",
          fontWeight: 600, textTransform: "uppercase",
          fontFamily: "'DM Mono', monospace",
        }}>
          Layer {layer.code}
        </div>
        <h2 style={{
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 700, fontFamily: "'Sora', sans-serif",
          lineHeight: 1.25, marginBottom: 16,
        }}>
          {layer.label}
        </h2>
        <p style={{
          fontSize: 13.5, color: "#8B8FA8", lineHeight: 1.8,
          fontFamily: "'DM Sans', sans-serif", marginBottom: 28,
        }}>
          {layer.description}
        </p>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 12, color: "#555", fontFamily: "'DM Mono', monospace",
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: "#D32F2F",
            boxShadow: "0 0 8px rgba(211,47,47,0.6)",
            animation: "pulse 2s infinite",
          }} />
          {layer.modules.length} modules in this layer
        </div>
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
          }
        `}</style>
      </div>

      {/* Right: module accordion */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14, padding: "8px 28px 0",
      }}>
        {layer.modules.map((mod, i) => (
          <ModuleRow key={i} mod={mod} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function AutomationPage() {
  const [activeLayer, setActiveLayer] = useState("acquisition");

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

      {/* Grid bg */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(211,47,47,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(211,47,47,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 32px 72px" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(211,47,47,0.12)", border: "1px solid rgba(211,47,47,0.3)",
            borderRadius: 6, padding: "6px 14px", marginBottom: 24,
            fontSize: 11, letterSpacing: "0.14em", color: "#D32F2F",
            fontWeight: 600, textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace",
          }}>
            Full Stack Automation
          </div>
          <h1 style={{
            fontSize: "clamp(30px, 5vw, 56px)",
            fontWeight: 800, lineHeight: 1.1,
            fontFamily: "'Sora', sans-serif",
            marginBottom: 20,
            background: "linear-gradient(135deg, #FFFFFF 30%, #8B8FA8 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            29+ Modules.<br />Five Operational Layers.
          </h1>
          <p style={{
            fontSize: 16.5, color: "#8B8FA8", maxWidth: 600, lineHeight: 1.75,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Every stage of the lending lifecycle — acquisition through closure — runs on a single,
            integrated platform. No middleware. No integration overhead between stages.
            One configuration surface for your entire credit operation.
          </p>
        </div>

        {/* ── PIPELINE DIAGRAM ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto 60px", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", overflowX: "auto", paddingBottom: 8 }}>
            {layers.map((layer, i) => (
              <div key={layer.id} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <div style={{
                  background: activeLayer === layer.id
                    ? "linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: activeLayer === layer.id
                    ? "1px solid #D32F2F"
                    : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10, padding: "10px 18px",
                  cursor: "pointer", transition: "all 0.25s ease",
                  textAlign: "center", minWidth: 120,
                }}
                  onClick={() => setActiveLayer(layer.id)}
                  onMouseEnter={e => {
                    if (activeLayer !== layer.id) {
                      e.currentTarget.style.border = "1px solid rgba(211,47,47,0.4)";
                      e.currentTarget.style.background = "rgba(211,47,47,0.08)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (activeLayer !== layer.id) {
                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }
                  }}
                >
                  <div style={{
                    fontSize: 10, fontFamily: "'DM Mono', monospace",
                    color: activeLayer === layer.id ? "rgba(255,255,255,0.7)" : "#555",
                    letterSpacing: "0.1em", marginBottom: 4,
                  }}>
                    LAYER {layer.code}
                  </div>
                  <div style={{
                    fontSize: 12, fontWeight: 600,
                    color: activeLayer === layer.id ? "#FFF" : "#9090A8",
                    fontFamily: "'Sora', sans-serif",
                    lineHeight: 1.3,
                  }}>
                    {layer.label}
                  </div>
                </div>
                {i < layers.length - 1 && (
                  <div style={{
                    display: "flex", alignItems: "center", margin: "0 4px",
                  }}>
                    <div style={{
                      width: 24, height: 1,
                      background: "linear-gradient(90deg, rgba(211,47,47,0.4), rgba(211,47,47,0.1))",
                    }} />
                    <svg width="8" height="8" viewBox="0 0 8 8" style={{ marginLeft: -1 }}>
                      <path d="M1 4H7M4 1L7 4L4 7" stroke="rgba(211,47,47,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── LAYER CONTENT ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto 100px", padding: "0 32px" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(211,47,47,0.04) 0%, rgba(13,13,26,0.98) 100%)",
            border: "1.5px solid rgba(211,47,47,0.15)",
            borderRadius: 20, padding: "48px",
            backdropFilter: "blur(16px)",
            minHeight: 400,
          }}>
            {layers.map(layer => (
              <LayerPanel key={layer.id} layer={layer} isActive={activeLayer === layer.id} />
            ))}
          </div>
        </div>

        {/* ── BOTTOM POSITIONING STATEMENT ── */}
        <div style={{
          maxWidth: 1200, margin: "0 auto 80px", padding: "0 32px",
          textAlign: "center",
        }}>
          <div style={{
            display: "inline-block",
            background: "rgba(211,47,47,0.06)",
            border: "1px solid rgba(211,47,47,0.2)",
            borderRadius: 12, padding: "28px 48px",
          }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.14em", color: "#D32F2F",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 12,
              fontFamily: "'DM Mono', monospace",
            }}>
              Positioning
            </div>
            <p style={{
              fontSize: "clamp(15px, 2vw, 20px)",
              color: "#C0C0D0", fontFamily: "'Sora', sans-serif",
              fontWeight: 500, lineHeight: 1.6, maxWidth: 700,
            }}>
              A traditional LOS is a transaction system.{" "}
              <span style={{ color: "#F5F5F5", fontWeight: 700 }}>Vitto is a decisioning system.</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}