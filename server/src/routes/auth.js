// ── src/routes/auth.js ────────────────────────────────────────────────────────
const router  = require("express").Router();
const jwt     = require("jsonwebtoken");
const OtpSession = require("../models/OtpSession");

// ── POST /api/auth/send-otp ───────────────────────────────────────────────────
router.post("/send-otp", async (req, res) => {
  try {
    const { email, phone } = req.body;

    if (!email && !phone) {
      return res.status(400).json({ error: "Email or phone is required" });
    }

    const identifier = email || phone;

    // Validate email format
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate phone format (10-digit Indian)
    if (phone && !/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({ error: "Invalid phone number" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Delete any existing OTP for this identifier
    await OtpSession.deleteMany({ identifier });

    // Save new OTP to MongoDB (expires in 10 min via TTL index)
    await OtpSession.create({ identifier, otp });

    // In production: send via SMS/email provider
    // For now: log to console + return in response (dev only)
    console.log(`📱 OTP for ${identifier}: ${otp}`);

    res.json({
      message: "OTP sent successfully",
      otp,         // ⚠️  Remove this in production
    });

  } catch (err) {
    console.error("send-otp error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── POST /api/auth/verify-otp ─────────────────────────────────────────────────
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, phone, otp } = req.body;

    if (!otp) return res.status(400).json({ error: "OTP is required" });

    const identifier = email || phone;
    if (!identifier) return res.status(400).json({ error: "Email or phone is required" });

    // Look up OTP session in MongoDB
    const session = await OtpSession.findOne({ identifier });

    if (!session) {
      return res.status(400).json({ error: "OTP expired or not found. Please request a new one." });
    }

    if (session.otp !== otp) {
      return res.status(400).json({ error: "Incorrect OTP. Please try again." });
    }

    // OTP verified — delete session
    await OtpSession.deleteOne({ identifier });

    // Issue JWT
    const token = jwt.sign(
      { identifier, email, phone },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ message: "OTP verified successfully", token });

  } catch (err) {
    console.error("verify-otp error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;