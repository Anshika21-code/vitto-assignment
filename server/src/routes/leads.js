// const router = require("express").Router();

// const pool = require("../db/postgres");

// router.post("/", async (req, res) => {
//   const {
//     email,
//     phone,
//     institution_name,
//     institution_type,
//     city,
//     loan_book_size
//   } = req.body;

//   try {
//     const result = await pool.query(
//       `INSERT INTO leads 
//       (email, phone, institution_name, institution_type, city, loan_book_size)
//       VALUES ($1, $2, $3, $4, $5, $6)
//       RETURNING *`,
//       [email, phone, institution_name, institution_type, city, loan_book_size]
//     );

//     res.status(201).json({
//       message: "Lead saved",
//       data: result.rows[0]
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "DB error" });
//   }
// });

// //GET ROUTE
// router.get("/", async (req, res) => {
//   const result = await pool.query("SELECT * FROM leads");
//   res.json(result.rows);
// });

// module.exports = router;

// ── src/routes/leads.js ───────────────────────────────────────────────────────
const router = require("express").Router();
const jwt    = require("jsonwebtoken");
const { pool } = require("../db/postgres");

// ── Middleware: verify JWT ────────────────────────────────────────────────────
const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized — token missing" });
  }
  try {
    req.user = jwt.verify(auth.split(" ")[1], process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

// ── POST /api/leads ───────────────────────────────────────────────────────────
router.post("/", verifyToken, async (req, res) => {
  try {
    const { email, phone, institution_name, institution_type, city, loan_book_size } = req.body;

    // Validate required fields
    const missing = [];
    if (!institution_name) missing.push("institution_name");
    if (!institution_type) missing.push("institution_type");
    if (!city)             missing.push("city");
    if (!loan_book_size)   missing.push("loan_book_size");

    if (missing.length) {
      return res.status(400).json({ error: `Missing fields: ${missing.join(", ")}` });
    }

    const result = await pool.query(
      `INSERT INTO leads
        (email, phone, institution_name, institution_type, city, loan_book_size)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, status, created_at`,
      [email || null, phone || null, institution_name, institution_type, city, loan_book_size]
    );

    const lead = result.rows[0];
    console.log(`New lead saved: ${lead.id} — ${institution_name}`);

    res.status(201).json({
      message: "Lead saved successfully",
      id: lead.id,
      status: lead.status,
      created_at: lead.created_at,
    });

  } catch (err) {
    console.error("POST /leads error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── GET /api/leads/:id ────────────────────────────────────────────────────────
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `SELECT id, email, phone, institution_name, institution_type,
              city, loan_book_size, status, created_at
       FROM leads WHERE id = $1`,
      [id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.error("GET /leads/:id error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;