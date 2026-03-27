const router = require("express").Router();

// POST /api/leads
router.post("/", async (req, res) => {
  const { email, phone, institution_name, institution_type, city, loan_book_size } = req.body;
  // TODO: insert into PostgreSQL
  console.log("Lead received:", req.body);
  res.status(201).json({ message: "Lead saved", id: "mock-id-001" });
});

// GET /api/leads/:id
router.get("/:id", async (req, res) => {
  // TODO: fetch from PostgreSQL
  res.json({ id: req.params.id, status: "pending" });
});

module.exports = router;