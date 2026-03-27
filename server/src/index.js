const express = require("express");
require("dotenv").config();
const cors = require("cors");


const authRoutes = require("./routes/auth");
const leadRoutes = require("./routes/leads");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));