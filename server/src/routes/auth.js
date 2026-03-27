const router = require("express").Router();

// POST /api/auth/send-otp
router.post("/send-otp", async (req, res) => {
  const { email, phone } = req.body;
  if (!email && !phone)
    return res.status(400).json({ error: "Email or phone required" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  // TODO: save to MongoDB OtpSession
  console.log(`OTP for ${email || phone}: ${otp}`); // mock send

  res.json({ message: "OTP sent successfully", otp }); // expose in dev only
});

// POST /api/auth/verify-otp
router.post("/verify-otp", async (req, res) => {
  const { email, phone, otp } = req.body;
  // TODO: validate against MongoDB OtpSession
  if (otp === "123456") { // mock validation for now
    return res.json({ token: "mock-session-token-xyz" });
  }
  res.status(400).json({ error: "Invalid or expired OTP" });
});

module.exports = router;