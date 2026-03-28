import { useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ── Step indicator ──────────────────────────────────────────────────────────
function StepIndicator({ current }) {
  const steps = ["Verify Identity", "Organisation Details", "Confirmation"];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 48 }}>
      {steps.map((label, i) => {
        const num = i + 1;
        const active = num === current;
        const done = num < current;
        return (
          <div key={label} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: done ? "#D32F2F" : active ? "#D32F2F" : "rgba(255,255,255,0.08)",
                border: done || active ? "none" : "1px solid rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
                color: done || active ? "#fff" : "rgba(255,255,255,0.3)",
                transition: "all 0.3s",
              }}>
                {done ? "✓" : num}
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                color: active ? "#fff" : "rgba(255,255,255,0.35)",
                whiteSpace: "nowrap", fontWeight: active ? 600 : 400,
              }}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                width: 80, height: 1, margin: "0 12px",
                background: done ? "#D32F2F" : "rgba(255,255,255,0.1)",
                marginBottom: 28, transition: "background 0.3s",
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Input component ─────────────────────────────────────────────────────────
function Input({ label, type = "text", value, onChange, placeholder, error }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block", fontFamily: "'DM Sans', sans-serif",
        fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)",
        marginBottom: 8,
      }}>{label}</label>
      <input
        type={type} value={value} onChange={onChange} placeholder={placeholder}
        style={{
          width: "100%", background: "rgba(255,255,255,0.05)",
          border: `1px solid ${error ? "#D32F2F" : "rgba(255,255,255,0.12)"}`,
          borderRadius: 8, padding: "12px 16px",
          color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: 15,
          outline: "none", transition: "border-color 0.2s",
          boxSizing: "border-box",
        }}
        onFocus={(e) => (e.target.style.borderColor = error ? "#D32F2F" : "rgba(211,47,47,0.6)")}
        onBlur={(e) => (e.target.style.borderColor = error ? "#D32F2F" : "rgba(255,255,255,0.12)")}
      />
      {error && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#EF5350", margin: "6px 0 0" }}>
          {error}
        </p>
      )}
    </div>
  );
}

// ── Select component ────────────────────────────────────────────────────────
function Select({ label, value, onChange, options, error }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block", fontFamily: "'DM Sans', sans-serif",
        fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)", marginBottom: 8,
      }}>{label}</label>
      <select value={value} onChange={onChange} style={{
        width: "100%", background: "#1E1E38",
        border: `1px solid ${error ? "#D32F2F" : "rgba(255,255,255,0.12)"}`,
        borderRadius: 8, padding: "12px 16px",
        color: value ? "#fff" : "rgba(255,255,255,0.35)",
        fontFamily: "'DM Sans', sans-serif", fontSize: 15,
        outline: "none", cursor: "pointer", boxSizing: "border-box",
      }}>
        <option value="" disabled style={{ background: "#1E1E38" }}>Select an option</option>
        {options.map((o) => (
          <option key={o} value={o} style={{ background: "#1E1E38", color: "#fff" }}>{o}</option>
        ))}
      </select>
      {error && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#EF5350", margin: "6px 0 0" }}>
          {error}
        </p>
      )}
    </div>
  );
}

// ── Primary button ──────────────────────────────────────────────────────────
function PrimaryBtn({ children, onClick, loading, disabled }) {
  return (
    <button onClick={onClick} disabled={loading || disabled} style={{
      width: "100%", background: loading || disabled ? "rgba(211,47,47,0.5)" : "#D32F2F",
      color: "#fff", border: "none", borderRadius: 8,
      padding: "14px", fontFamily: "'DM Sans', sans-serif",
      fontSize: 15, fontWeight: 600, cursor: loading || disabled ? "not-allowed" : "pointer",
      transition: "all 0.2s", marginTop: 8,
    }}
      onMouseEnter={(e) => { if (!loading && !disabled) e.target.style.background = "#B71C1C"; }}
      onMouseLeave={(e) => { if (!loading && !disabled) e.target.style.background = "#D32F2F"; }}
    >
      {loading ? "Please wait…" : children}
    </button>
  );
}

// ── Step 1: Email + OTP ─────────────────────────────────────────────────────
function Step1({ onNext }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverOtp, setServerOtp] = useState(""); // dev only

  const validate = () => {
    const e = {};
    if (!email && !phone) e.email = "Email or phone number is required";
    if (email && !/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email address";
    if (phone && !/^[6-9]\d{9}$/.test(phone)) e.phone = "Enter a valid 10-digit Indian mobile number";
    return e;
  };

  const sendOtp = async () => {
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send OTP");
      setOtpSent(true);
      if (data.otp) setServerOtp(data.otp); // dev only
    } catch (err) {
      setErrors({ api: err.message });
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp || otp.length !== 6) return setErrors({ otp: "Enter the 6-digit OTP" });
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Invalid OTP");
      onNext({ email, phone, token: data.token });
    } catch (err) {
      setErrors({ otp: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: 28, fontWeight: 400, color: "#fff",
        margin: "0 0 8px", letterSpacing: "-0.02em",
      }}>Verify your identity</h2>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 14,
        color: "rgba(255,255,255,0.45)", margin: "0 0 32px", lineHeight: 1.6,
      }}>
        Enter your work email or phone number. We'll send a one-time code to confirm.
      </p>

      <Input label="Work Email" type="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@institution.com" error={errors.email} />

      <div style={{
        display: "flex", alignItems: "center", gap: 12, margin: "4px 0 20px",
      }}>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>or</span>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
      </div>

      <Input label="Mobile Number" type="tel" value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="10-digit mobile number" error={errors.phone} />

      {errors.api && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#EF5350", margin: "0 0 16px" }}>
          {errors.api}
        </p>
      )}

      {!otpSent ? (
        <PrimaryBtn onClick={sendOtp} loading={loading}>Send OTP →</PrimaryBtn>
      ) : (
        <>
          {/* Dev helper */}
          {serverOtp && (
            <div style={{
              background: "rgba(76,175,80,0.1)", border: "1px solid rgba(76,175,80,0.3)",
              borderRadius: 8, padding: "10px 14px", marginBottom: 16,
            }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#81C784", margin: 0 }}>
                Dev mode — your OTP is: <strong>{serverOtp}</strong>
              </p>
            </div>
          )}
          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: "block", fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)", marginBottom: 8,
            }}>Enter OTP</label>
            <div style={{ display: "flex", gap: 8 }}>
              <input value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="6-digit code" maxLength={6}
                style={{
                  flex: 1, background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${errors.otp ? "#D32F2F" : "rgba(255,255,255,0.12)"}`,
                  borderRadius: 8, padding: "12px 16px",
                  color: "#fff", fontFamily: "'DM Sans', sans-serif",
                  fontSize: 20, letterSpacing: "0.2em", outline: "none",
                }} />
              <button onClick={sendOtp} style={{
                background: "transparent", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8, padding: "12px 16px", color: "rgba(255,255,255,0.5)",
                fontFamily: "'DM Sans', sans-serif", fontSize: 13, cursor: "pointer",
                whiteSpace: "nowrap",
              }}>Resend</button>
            </div>
            {errors.otp && (
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#EF5350", margin: "6px 0 0" }}>
                {errors.otp}
              </p>
            )}
          </div>
          <PrimaryBtn onClick={verifyOtp} loading={loading}>Verify OTP →</PrimaryBtn>
        </>
      )}
    </div>
  );
}

// ── Step 2: Organisation details ────────────────────────────────────────────
function Step2({ onNext, loading }) {
  const [form, setForm] = useState({
    institution_name: "", institution_type: "", city: "", loan_book_size: "",
  });
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.institution_name.trim()) e.institution_name = "Institution name is required";
    if (!form.institution_type) e.institution_type = "Please select institution type";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.loan_book_size) e.loan_book_size = "Please select loan book size";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);
    onNext(form);
  };

  return (
    <div>
      <h2 style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: 28, fontWeight: 400, color: "#fff",
        margin: "0 0 8px", letterSpacing: "-0.02em",
      }}>Tell us about your institution</h2>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 14,
        color: "rgba(255,255,255,0.45)", margin: "0 0 32px", lineHeight: 1.6,
      }}>
        This helps our team prepare the right platform walkthrough for your context.
      </p>

      <Input label="Institution Name" value={form.institution_name}
        onChange={set("institution_name")} placeholder="e.g. Horizon Finance Ltd."
        error={errors.institution_name} />

      <Select label="Institution Type" value={form.institution_type}
        onChange={set("institution_type")}
        options={["Bank", "NBFC", "Microfinance Institution (MFI)", "Fintech Lender", "Housing Finance Company"]}
        error={errors.institution_type} />

      <Input label="Headquarters City" value={form.city}
        onChange={set("city")} placeholder="e.g. Mumbai"
        error={errors.city} />

      <Select label="Approximate Loan Book Size" value={form.loan_book_size}
        onChange={set("loan_book_size")}
        options={[
          "Under ₹50 Crore",
          "₹50 Crore – ₹250 Crore",
          "₹250 Crore – ₹1,000 Crore",
          "₹1,000 Crore – ₹5,000 Crore",
          "Above ₹5,000 Crore",
        ]}
        error={errors.loan_book_size} />

      <PrimaryBtn onClick={handleSubmit} loading={loading}>Submit Application →</PrimaryBtn>
    </div>
  );
}

// ── Step 3: Confirmation ────────────────────────────────────────────────────
function Step3({ leadId }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: "rgba(211,47,47,0.12)", border: "2px solid rgba(211,47,47,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 28px", fontSize: 32,
      }}>✓</div>

      <h2 style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: 32, fontWeight: 400, color: "#fff",
        margin: "0 0 16px", letterSpacing: "-0.02em",
      }}>Application received</h2>

      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 15,
        color: "rgba(255,255,255,0.55)", lineHeight: 1.75,
        maxWidth: 380, margin: "0 auto 12px",
      }}>
        Our team will review your application and reach out within <strong style={{ color: "#fff" }}>24 hours</strong> to schedule a platform walkthrough tailored to your institution.
      </p>

      {leadId && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 12,
          color: "rgba(255,255,255,0.25)", margin: "0 auto 40px",
        }}>
          Reference ID: <span style={{ fontFamily: "monospace", color: "rgba(255,255,255,0.4)" }}>{leadId}</span>
        </p>
      )}

      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/" style={{
          background: "#D32F2F", color: "#fff", padding: "12px 28px",
          borderRadius: 8, fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, fontWeight: 600, textDecoration: "none",
        }}>Back to Home</Link>
        <Link to="/platform" style={{
          background: "transparent", color: "#fff", padding: "12px 28px",
          borderRadius: 8, fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, fontWeight: 500, textDecoration: "none",
          border: "1px solid rgba(255,255,255,0.15)",
        }}>Explore Platform</Link>
      </div>
    </div>
  );
}

// ── Root export ─────────────────────────────────────────────────────────────
export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [authData, setAuthData] = useState(null);
  const [leadId, setLeadId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleStep1Done = (data) => {
    setAuthData(data);
    setStep(2);
  };

  const handleStep2Done = async (orgData) => {
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData?.token}`,
        },
        body: JSON.stringify({
          email: authData?.email,
          phone: authData?.phone,
          ...orgData,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setLeadId(data.id);
      setStep(3);
    } catch (err) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#1A1A2E",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "100px 2rem 60px",
    }}>
      <div style={{ width: "100%", maxWidth: 520 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            letterSpacing: "0.12em", color: "#D32F2F",
            fontWeight: 600, textTransform: "uppercase", marginBottom: 8,
          }}>Get Started</p>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 20, fontWeight: 400, color: "rgba(255,255,255,0.5)",
            margin: 0, letterSpacing: "-0.01em",
          }}>Join the Vitto platform</h1>
        </div>

        <StepIndicator current={step} />

        {/* Card */}
        <div style={{
          background: "#13132A",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16, padding: "40px 36px",
        }}>
          {step === 1 && <Step1 onNext={handleStep1Done} />}
          {step === 2 && <Step2 onNext={handleStep2Done} loading={submitting} />}
          {step === 3 && <Step3 leadId={leadId} />}
        </div>

        {step !== 3 && (
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            color: "rgba(255,255,255,0.25)", textAlign: "center",
            marginTop: 20, lineHeight: 1.6,
          }}>
            By continuing, you agree to Vitto's{" "}
            <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}>Terms of Service</a>
            {" "}and{" "}
            <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}>Privacy Policy</a>.
          </p>
        )}
      </div>
    </div>
  );
}