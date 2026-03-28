// ── src/index.js ─────────────────────────────────────────────────────────────
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectMongo } = require("./db/mongo");
const { connectPostgres } = require("./db/postgres");
const authRoutes = require("./routes/auth");
const leadRoutes = require("./routes/leads");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.get("/health", (req, res) => res.json({ status: "ok", time: new Date() }));

// Start
const PORT = process.env.PORT || 5000;

(async () => {
  await connectMongo();
  await connectPostgres();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();