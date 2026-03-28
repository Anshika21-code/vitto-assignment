const mongoose = require("mongoose");

const otpSessionSchema = new mongoose.Schema({
  identifier: { type: String, required: true }, // stores email or phone
  otp:        { type: String, required: true },
  createdAt:  { type: Date, default: Date.now },
});

// Correct TTL — auto delete after 5 minutes
otpSessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

module.exports = mongoose.model("OtpSession", otpSessionSchema, "otps");
