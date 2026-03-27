import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(26,26,46,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.3s ease", padding: "0 2rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", display: "flex",
        alignItems: "center", justifyContent: "space-between", height: 68,
      }}>
        {/* Logo — clicking takes you home */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 32, height: 32, background: "#D32F2F", borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontWeight: 700, color: "#fff", fontSize: 18,
          }}>V</div>
          <span style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 22, color: "#fff", letterSpacing: "-0.02em",
          }}>Vitto</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {[
            { label: "Platform",   path: "/platform" },
            { label: "Automation", path: "/automation" },
            { label: "Why Vitto",  path: "#" },
            { label: "Resources",  path: "#" },
          ].map((item) => (
            <Link key={item.label} to={item.path} style={{
              color: "rgba(255,255,255,0.72)", fontSize: 14,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              textDecoration: "none", letterSpacing: "0.01em", transition: "color 0.2s",
            }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.72)")}
            >{item.label}</Link>
          ))}
          <Link to="/signup" style={{
            background: "#D32F2F", color: "#fff", padding: "9px 20px",
            borderRadius: 6, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600, textDecoration: "none",
          }}>Book a Demo</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: "none", background: "none", border: "none",
          color: "#fff", fontSize: 24, cursor: "pointer",
        }} className="mobile-menu-btn">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: "#1A1A2E", padding: "1rem 2rem 1.5rem",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {[
            { label: "Platform",   path: "/platform" },
            { label: "Automation", path: "/automation" },
            { label: "Why Vitto",  path: "#" },
            { label: "Resources",  path: "#" },
          ].map((item) => (
            <Link key={item.label} to={item.path} onClick={() => setMenuOpen(false)} style={{
              color: "rgba(255,255,255,0.8)", fontSize: 15,
              fontFamily: "'DM Sans', sans-serif", textDecoration: "none",
            }}>{item.label}</Link>
          ))}
          <Link to="/signup" style={{
            background: "#D32F2F", color: "#fff", padding: "10px 20px",
            borderRadius: 6, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600, textDecoration: "none", textAlign: "center",
          }}>Book a Demo</Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ background: "#0D0D1F", padding: "72px 2rem 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48, paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 40,
        }} className="footer-grid">
          <div>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, textDecoration: "none" }}>
              <div style={{
                width: 28, height: 28, background: "#D32F2F", borderRadius: 5,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: 700, color: "#fff", fontSize: 16,
              }}>V</div>
              <span style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 20, color: "#fff",
              }}>Vitto</span>
            </Link>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 13,
              color: "rgba(255,255,255,0.38)", lineHeight: 1.7,
              maxWidth: 260, margin: "0 0 24px",
            }}>
              AI-native digital credit infrastructure for Banks, NBFCs, and Microfinance Institutions.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <input type="email" placeholder="Your email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1, background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6,
                  padding: "10px 14px", color: "#fff",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13, outline: "none",
                }} />
              <button style={{
                background: "#D32F2F", color: "#fff", border: "none",
                borderRadius: 6, padding: "10px 16px",
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                fontWeight: 600, cursor: "pointer",
              }}>Subscribe</button>
            </div>
          </div>

          {[
            { heading: "Pages", links: [
              { label: "Home",       path: "/" },
              { label: "Platform",   path: "/platform" },
              { label: "Automation", path: "/automation" },
              { label: "Sign Up",    path: "/signup" },
            ]},
            { heading: "Platform", links: [
              { label: "API Docs",      path: "#" },
              { label: "Integrations",  path: "#" },
              { label: "Security",      path: "#" },
              { label: "Changelog",     path: "#" },
            ]},
            { heading: "Partners", links: [
              { label: "Partner Program",  path: "#" },
              { label: "Bureau Partners",  path: "#" },
              { label: "Become a Partner", path: "#" },
            ]},
          ].map((col) => (
            <div key={col.heading}>
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
                color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em",
                textTransform: "uppercase", margin: "0 0 20px",
              }}>{col.heading}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((link) => (
                  <Link key={link.label} to={link.path} style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                    color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s",
                  }}
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
                  >{link.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © 2025 Vitto Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["LinkedIn", "Twitter", "GitHub"].map((social) => (
              <a key={social} href="#" style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.3)")}
              >{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const layoutStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; }
  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
    .mobile-menu-btn { display: block !important; }
    .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
  }
  @media (max-width: 480px) {
    .footer-grid { grid-template-columns: 1fr !important; }
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <style>{layoutStyles}</style>
      <div style={{ background: "#1A1A2E", minHeight: "100vh" }}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}