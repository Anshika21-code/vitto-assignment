const router = require("express").Router();
const jwt = require("jsonwebtoken");

// POST /api/auth/send-otp
router.post("/send-otp", async (req, res) => {
  const { email, phone } = req.body;
  if (!email && !phone)
    return res.status(400).json({ error: "Email or phone required" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(`OTP for ${email || phone}: ${otp}`); // mock — prints to terminal

  res.json({ message: "OTP sent successfully", otp }); // remove otp from response in production
});

// POST /api/auth/verify-otp
router.post("/verify-otp", async (req, res) => {
  const { email, phone, otp } = req.body;

  // Mock validation for now
  if (otp !== "123456") {
    return res.status(400).json({ error: "Invalid or expired OTP" });
  }

  // Generate JWT token
  const token = jwt.sign(
    { email, phone },          // payload — what you embed in the token
    process.env.JWT_SECRET,    // secret from .env
    { expiresIn: "1h" }        // token expires in 1 hour
  );

  res.json({ message: "OTP verified", token });
});

module.exports = router;