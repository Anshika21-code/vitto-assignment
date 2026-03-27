const router = require("express").Router();

const pool = require("../db/postgres");
//POST ROUTE 
router.post("/", async (req, res) => {
  const { email, phone, institution_name, institution_type, city, loan_book_size } = req.body;

  const result = await pool.query(
    `INSERT INTO leads (email, phone, institution_name, institution_type, city, loan_book_size)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [email, phone, institution_name, institution_type, city, loan_book_size]
  );

  res.status(201).json(result.rows[0]);
});

//GET ROUTE
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM leads");
  res.json(result.rows);
});

module.exports = router;