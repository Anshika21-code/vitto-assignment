// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// ─── Palette & tokens ───────────────────────────────────────────────────────
// Navy: #1A1A2E  |  Red: #D32F2F  |  Accent light: #E8E8F0  |  Muted: #8888A8

// // ─── Reusable tiny components ───────────────────────────────────────────────
// function NavBar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 100,
//         background: scrolled ? "rgba(26,26,46,0.97)" : "transparent",
//         backdropFilter: scrolled ? "blur(12px)" : "none",
//         borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
//         transition: "all 0.3s ease",
//         padding: "0 2rem",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           height: 68,
//         }}
//       >
//         {/* Logo */}
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <div
//             style={{
//               width: 32,
//               height: 32,
//               background: "#D32F2F",
//               borderRadius: 6,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontFamily: "'DM Serif Display', Georgia, serif",
//               fontWeight: 700,
//               color: "#fff",
//               fontSize: 18,
//             }}
//           >
//             V
//           </div>
//           <span
//             style={{
//               fontFamily: "'DM Serif Display', Georgia, serif",
//               fontSize: 22,
//               color: "#fff",
//               letterSpacing: "-0.02em",
//             }}
//           >
//             Vitto
//           </span>
//         </div>

//         {/* Desktop nav */}
//         <div
//           style={{
//             display: "flex",
//             gap: 32,
//             alignItems: "center",
//           }}
//           className="desktop-nav"
//         >
//           {[
//   { label: "Platform", path: "/platform" },
//   { label: "Automation", path: "/automation" },
//   { label: "Why Vitto", path: "#" },
//   { label: "Resources", path: "#" },
// ].map((item) => (
//   <Link
//     key={item.label}
//     to={item.path}
//     style={{
//       color: "rgba(255,255,255,0.72)",
//       fontSize: 14,
//       fontFamily: "'DM Sans', sans-serif",
//       fontWeight: 500,
//       textDecoration: "none",
//       letterSpacing: "0.01em",
//       transition: "color 0.2s",
//     }}
//     onMouseEnter={(e) => (e.target.style.color = "#fff")}
//     onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.72)")}
//   >
//     {item.label}
//   </Link>
// ))}
           
// <Link
//   to="/signup"
//   style={{
//     background: "#D32F2F",
//     color: "#fff",
//     padding: "9px 20px",
//     borderRadius: 6,
//     fontSize: 14,
//     fontFamily: "'DM Sans', sans-serif",
//     fontWeight: 600,
//     textDecoration: "none",
//   }}
// >
//   Book a Demo
// </Link>
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           style={{
//             display: "none",
//             background: "none",
//             border: "none",
//             color: "#fff",
//             fontSize: 24,
//             cursor: "pointer",
//           }}
//           className="mobile-menu-btn"
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div
//           style={{
//             background: "#1A1A2E",
//             padding: "1rem 2rem 1.5rem",
//             display: "flex",
//             flexDirection: "column",
//             gap: 16,
//           }}
//         >
//           {["Platform", "Solutions", "Why Vitto", "Resources"].map((item) => (
//             <a
//               key={item}
//               href="#"
//               style={{
//                 color: "rgba(255,255,255,0.8)",
//                 fontSize: 15,
//                 fontFamily: "'DM Sans', sans-serif",
//                 textDecoration: "none",
//               }}
//             >
//               {item}
//             </a>
//           ))}
//           <a
//             href="#demo"
//             style={{
//               background: "#D32F2F",
//               color: "#fff",
//               padding: "10px 20px",
//               borderRadius: 6,
//               fontSize: 14,
//               fontFamily: "'DM Sans', sans-serif",
//               fontWeight: 600,
//               textDecoration: "none",
//               textAlign: "center",
//             }}
//           >
//             Book a Demo
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }

// ─── Section A: Hero ────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        background: "#1A1A2E",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 2rem 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      {/* Red glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 300,
          background: "radial-gradient(ellipse, rgba(211,47,47,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 860, textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(211,47,47,0.12)",
            border: "1px solid rgba(211,47,47,0.3)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#D32F2F",
              display: "inline-block",
            }}
          />
          <span
            style={{
              color: "#F08080",
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            Built for Banks, NBFCs &amp; MFIs
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}
        >
          AI-First Infrastructure
          <br />
          <span style={{ color: "#D32F2F" }}>for Modern</span> Financial
          <br />
          Services
        </h1>

        {/* Sub-copy */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto 40px",
          }}
        >
          Not retrofitted AI. Not fragmented vendors. Vitto is purpose-built credit
          infrastructure — a unified decisioning and automation layer for every stage
          of the lending lifecycle.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#demo"
            style={{
              background: "#D32F2F",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 8,
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#B71C1C";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#D32F2F";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Book a Demo →
          </a>
          <a
            href="#platform"
            style={{
              background: "transparent",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 8,
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.5)";
              e.target.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.2)";
              e.target.style.background = "transparent";
            }}
          >
            Explore Platform
          </a>
        </div>

        {/* Dashboard mockup */}
        <div
          style={{
            marginTop: 64,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "2px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#0F0F20",
              borderRadius: 14,
              height: 340,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Fake dashboard grid */}
            <div style={{ width: "100%", padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Top stat row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {[
                  { label: "Loans Processed", value: "12,847", change: "+8.4%" },
                  { label: "Approval Rate", value: "73.2%", change: "+2.1%" },
                  { label: "Portfolio NPA", value: "1.8%", change: "-0.3%" },
                  { label: "Avg Decision Time", value: "4.2 min", change: "-61%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 8,
                      padding: "12px 14px",
                    }}
                  >
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginBottom: 6 }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: 10, color: "#4CAF50", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle row */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12 }}>
                {/* Chart placeholder */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8,
                    padding: "14px",
                    height: 120,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginBottom: 8 }}>
                    Credit Decisions — Last 30 Days
                  </div>
                  {/* Fake bar chart */}
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 72 }}>
                    {[40, 65, 45, 80, 55, 90, 60, 75, 50, 85, 70, 95, 65, 88, 72].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${h}%`,
                          background: i === 14 ? "#D32F2F" : "rgba(211,47,47,0.35)",
                          borderRadius: "2px 2px 0 0",
                          transition: "height 0.3s",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Approval donut placeholder */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8,
                    padding: "14px",
                    height: 120,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>
                    Decision Breakdown
                  </div>
                  {[
                    { label: "Approved", pct: 73, color: "#4CAF50" },
                    { label: "Review", pct: 18, color: "#FFC107" },
                    { label: "Declined", pct: 9, color: "#D32F2F" },
                  ].map((row) => (
                    <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: row.color }} />
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", flex: 1 }}>
                        {row.label}
                      </div>
                      <div style={{ fontSize: 10, fontWeight: 600, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
                        {row.pct}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gradient overlay at bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                background: "linear-gradient(transparent, #0F0F20)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section B: Problem ─────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "Fragmented Systems",
      desc: "Siloed LOS, LMS, and CRM with no unified data layer. Credit decisions are made blind — without the full picture.",
    },
    {
      num: "02",
      title: "Non-AI Native Vendors",
      desc: "AI bolted onto legacy architecture. The models can't reach the data they need, so decisions are slow and inaccurate.",
    },
    {
      num: "03",
      title: "Reactive Collections",
      desc: "No predictive propensity scoring. Field teams work from static lists, not real-time borrower intent signals.",
    },
    {
      num: "04",
      title: "Static Rule Engines",
      desc: "Policy rules encoded once and forgotten. They don't adapt to portfolio performance, market shifts, or borrower behaviour.",
    },
  ];

  return (
    <section style={{ background: "#13132A", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, maxWidth: 640 }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.12em",
              color: "#D32F2F",
              fontWeight: 600,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            The Reality of Today's Lending Technology
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Four structural problems
            <br />
            the industry keeps ignoring
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {problems.map((p, ) => (
            <div
              key={p.num}
              style={{
                background: "#1A1A2E",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "32px 28px",
                transition: "border-color 0.25s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(211,47,47,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 48,
                  color: "rgba(211,47,47,0.2)",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: 20,
                }}
              >
                {p.num}
              </span>
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#fff",
                  margin: "0 0 12px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.52)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section C: Solution ────────────────────────────────────────────────────
function SolutionSection() {
  const features = [
    {
      icon: "◈",
      title: "Domain-Trained Models",
      desc: "Credit models trained on BFSI-specific data — not general-purpose ML adapted after the fact.",
    },
    {
      icon: "⬡",
      title: "Unified Architecture",
      desc: "One platform from lead acquisition to loan closure. No middleware, no data leakage between silos.",
    },
    {
      icon: "◎",
      title: "Explainable Decisioning",
      desc: "Every credit decision produces a human-readable rationale. Regulator-ready from day one.",
    },
  ];

  return (
    <section style={{ background: "#1A1A2E", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="solution-grid"
        >
          {/* Left copy */}
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                letterSpacing: "0.12em",
                color: "#D32F2F",
                fontWeight: 600,
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              The Vitto Difference
            </p>
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                margin: "0 0 20px",
              }}
            >
              AI-native decisioning meets full-stack operational automation
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                margin: "0 0 36px",
              }}
            >
              Vitto is not a rule engine with an AI tab. It is infrastructure where
              machine learning is the core primitive — driving every decision, every
              workflow, and every borrower interaction.
            </p>
            <a
              href="#platform"
              style={{
                color: "#D32F2F",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderBottom: "1px solid rgba(211,47,47,0.3)",
                paddingBottom: 2,
              }}
            >
              View full platform →
            </a>
          </div>

          {/* Right features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "24px",
                  background: "#13132A",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(211,47,47,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
              >
                <span
                  style={{
                    fontSize: 22,
                    color: "#D32F2F",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {f.icon}
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#fff",
                      margin: "0 0 8px",
                    }}
                  >
                    {f.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section D: AI Modules ──────────────────────────────────────────────────
function ModulesSection() {
  const modules = [
    {
      icon: "◈",
      name: "Data-Based Assessment",
      desc: "Bureau pull, bank statement analysis, GST verification — enriched into a single borrower score.",
    },
    {
      icon: "⬡",
      name: "ML Model",
      desc: "Ensemble credit models trained on domain-specific data with continuous feedback loops.",
    },
    {
      icon: "◎",
      name: "Rule Engine & Decisioning",
      desc: "Policy rules that evolve with portfolio performance — not static waterfall logic.",
    },
    {
      icon: "△",
      name: "Fraud Intelligence",
      desc: "Identity verification, liveness detection, and network-based fraud ring detection.",
    },
    {
      icon: "◇",
      name: "Collection Intelligence",
      desc: "Propensity-to-pay scoring with omni-channel automation: WhatsApp, AI calls, SMS.",
    },
    {
      icon: "○",
      name: "Agentic AI Layer",
      desc: "SLM-powered agents for borrowers, field executives, and underwriters — policy-trained, not general-purpose.",
    },
  ];

  return (
    <section id="platform" style={{ background: "#13132A", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.12em",
              color: "#D32F2F",
              fontWeight: 600,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            The AI Layer of Vitto
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Six modules. One intelligence layer.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="modules-grid"
        >
          {modules.map((mod) => (
            <div
              key={mod.name}
              style={{
                background: "#1A1A2E",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "28px 24px",
                transition: "border-color 0.25s, transform 0.2s",
                cursor: "default",
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
              <span style={{ fontSize: 24, color: "#D32F2F", display: "block", marginBottom: 16 }}>
                {mod.icon}
              </span>
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                  margin: "0 0 10px",
                }}
              >
                {mod.name}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.65,
                  margin: "0 0 16px",
                }}
              >
                {mod.desc}
              </p>
              <a
                href="#"
                style={{
                  color: "#D32F2F",
                  fontSize: 13,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section E: Impact ──────────────────────────────────────────────────────
function ImpactSection() {
  const stats = [
    { value: "4×", label: "Faster credit decisions", sub: "Median time from 18 min to under 5 min" },
    { value: "40%", label: "Reduction in portfolio NPA", sub: "Through predictive early-warning signals" },
    { value: "28%", label: "Higher recovery rates", sub: "With propensity-scored collection workflows" },
    { value: "60+", label: "Pre-built integrations", sub: "Bureau, banking, payment, KYC providers" },
  ];

  return (
    <section style={{ background: "#1A1A2E", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.12em",
              color: "#D32F2F",
              fontWeight: 600,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Business Impact
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Measurable from Day One
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#1A1A2E",
                padding: "44px 32px",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#13132A")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1A1A2E")}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 52,
                  color: "#D32F2F",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.5,
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section F: Social Proof ─────────────────────────────────────────────────
function SocialProofSection() {
  const logos = ["Axis Bank", "Muthoot Finance", "CreditBee", "Lendingkart", "KreditBee", "Shriram Finance"];
  const testimonials = [
    {
      quote:
        "Vitto's underwriting engine gave us decisioning depth we simply couldn't achieve with our previous vendor. Our credit team now spends time on exceptions, not on manual file reviews.",
      name: "Rajeev Sharma",
      designation: "Chief Risk Officer",
      institution: "NorthStar NBFC",
    },
    {
      quote:
        "The collections propensity model cut our field agent cost per recovery by nearly a third. What impressed us most was the explainability — the model tells us why it prioritised each borrower.",
      name: "Priya Anand",
      designation: "Head of Collections",
      institution: "Bharat Microfinance",
    },
  ];

  return (
    <section style={{ background: "#13132A", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Partner logos */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            Trusted by leading financial institutions
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {logos.map((logo) => (
              <div
                key={logo}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8,
                  padding: "12px 24px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.04em",
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="testimonials-grid">
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#1A1A2E",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontSize: 40,
                  color: "#D32F2F",
                  lineHeight: 1,
                  marginBottom: 20,
                  fontFamily: "Georgia, serif",
                  opacity: 0.6,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.75,
                  margin: "0 0 28px",
                  fontStyle: "italic",
                }}
              >
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(211,47,47,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    color: "#D32F2F",
                    fontSize: 14,
                  }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {t.designation}, {t.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section G: CTA Banner ──────────────────────────────────────────────────
function CTABanner() {
  return (
    <section
      id="demo"
      style={{
        background: "#D32F2F",
        padding: "80px 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
          }}
        >
          Discover the key to grow
          <br />
          your lending business
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.75)",
            marginBottom: 40,
          }}
        >
          Schedule a walkthrough with our team. See the platform running on real
          lending workflows — not a demo sandbox.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/signup"
            style={{
              background: "#fff",
              color: "#D32F2F",
              padding: "14px 32px",
              borderRadius: 8,
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            Book a Demo
          </a>
          <a
            href="#platform"
            style={{
              background: "transparent",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 8,
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.5)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.target.style.borderColor = "#fff")}
            onMouseLeave={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.5)")}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

// // ─── Section H: Footer ──────────────────────────────────────────────────────
// function Footer() {
//   const [email, setEmail] = useState("");

//   return (
//     <footer style={{ background: "#0D0D1F", padding: "72px 2rem 40px" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         {/* Top row */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "2fr 1fr 1fr 1fr",
//             gap: 48,
//             paddingBottom: 48,
//             borderBottom: "1px solid rgba(255,255,255,0.06)",
//             marginBottom: 40,
//           }}
//           className="footer-grid"
//         >
//           {/* Brand */}
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
//               <div
//                 style={{
//                   width: 28,
//                   height: 28,
//                   background: "#D32F2F",
//                   borderRadius: 5,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontFamily: "'DM Serif Display', Georgia, serif",
//                   fontWeight: 700,
//                   color: "#fff",
//                   fontSize: 16,
//                 }}
//               >
//                 V
//               </div>
//               <span
//                 style={{
//                   fontFamily: "'DM Serif Display', Georgia, serif",
//                   fontSize: 20,
//                   color: "#fff",
//                 }}
//               >
//                 Vitto
//               </span>
//             </div>
//             <p
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontSize: 13,
//                 color: "rgba(255,255,255,0.38)",
//                 lineHeight: 1.7,
//                 maxWidth: 260,
//                 margin: "0 0 24px",
//               }}
//             >
//               AI-native digital credit infrastructure for Banks, NBFCs, and
//               Microfinance Institutions.
//             </p>
//             {/* Newsletter */}
//             <div style={{ display: "flex", gap: 8 }}>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={{
//                   flex: 1,
//                   background: "rgba(255,255,255,0.06)",
//                   border: "1px solid rgba(255,255,255,0.1)",
//                   borderRadius: 6,
//                   padding: "10px 14px",
//                   color: "#fff",
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontSize: 13,
//                   outline: "none",
//                 }}
//               />
//               <button
//                 style={{
//                   background: "#D32F2F",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: 6,
//                   padding: "10px 16px",
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontSize: 13,
//                   fontWeight: 600,
//                   cursor: "pointer",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 Subscribe
//               </button>
//             </div>
//           </div>

//           {/* Nav columns */}
//           {[
//             {
//               heading: "Pages",
//               links: ["Homepage", "AI Platform", "Lending Lifecycle", "Collections", "Agentic AI"],
//             },
//             {
//               heading: "Platform",
//               links: ["API Docs", "Integrations", "Security", "Changelog", "Status"],
//             },
//             {
//               heading: "Partners",
//               links: ["Partner Program", "Bureau Partners", "Banking Partners", "Become a Partner"],
//             },
//           ].map((col) => (
//             <div key={col.heading}>
//               <h4
//                 style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontSize: 11,
//                   fontWeight: 600,
//                   color: "rgba(255,255,255,0.3)",
//                   letterSpacing: "0.1em",
//                   textTransform: "uppercase",
//                   margin: "0 0 20px",
//                 }}
//               >
//                 {col.heading}
//               </h4>
//               <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//                 {col.links.map((link) => (
//                   <a
//                     key={link}
//                     href="#"
//                     style={{
//                       fontFamily: "'DM Sans', sans-serif",
//                       fontSize: 14,
//                       color: "rgba(255,255,255,0.45)",
//                       textDecoration: "none",
//                       transition: "color 0.2s",
//                     }}
//                     onMouseEnter={(e) => (e.target.style.color = "#fff")}
//                     onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
//                   >
//                     {link}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom row */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//             gap: 16,
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "'DM Sans', sans-serif",
//               fontSize: 13,
//               color: "rgba(255,255,255,0.25)",
//               margin: 0,
//             }}
//           >
//             © 2025 Vitto Technologies Pvt. Ltd. All rights reserved.
//           </p>
//           <div style={{ display: "flex", gap: 20 }}>
//             {["LinkedIn", "Twitter", "GitHub"].map((social) => (
//               <a
//                 key={social}
//                 href="#"
//                 style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontSize: 13,
//                   color: "rgba(255,255,255,0.3)",
//                   textDecoration: "none",
//                   transition: "color 0.2s",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#fff")}
//                 onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.3)")}
//               >
//                 {social}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// ─── Responsive CSS injected via style tag ───────────────────────────────────
const responsiveStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap');

  * { box-sizing: border-box; }

  @media (max-width: 768px) {
    .solution-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .modules-grid { grid-template-columns: 1fr 1fr !important; }
    .testimonials-grid { grid-template-columns: 1fr !important; }
    .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
    .desktop-nav { display: none !important; }
    .mobile-menu-btn { display: block !important; }
  }

  @media (max-width: 480px) {
    .modules-grid { grid-template-columns: 1fr !important; }
    .footer-grid { grid-template-columns: 1fr !important; }
  }
`;

// ─── Root export ────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <style>{responsiveStyles}</style>
      <div style={{ background: "#1A1A2E" }}>
       {/* // <NavBar /> */}
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <ImpactSection />
        <SocialProofSection />
        <CTABanner />
        {/* <Footer /> */}
      </div>
    </>
  );
}