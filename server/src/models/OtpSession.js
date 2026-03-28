const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: String,
  phone: String,
  otp: String,
  createdAt: {
    type: Date,
    default: Date.now,
    // instead of 2 min
    expiresAt: Date.now() + 5 * 60 * 1000 //  TTL (auto delete after 5 min)
  }
});

module.exports = mongoose.model("Otp", otpSchema);

