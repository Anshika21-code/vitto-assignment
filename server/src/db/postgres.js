// ── src/db/postgres.js ────────────────────────────────────────────────────────
const { Pool } = require("pg");

const pool = new Pool({ connectionString: process.env.POSTGRES_URL });

const connectPostgres = async () => {
  try {
    await pool.query("SELECT 1");
    console.log(" PostgreSQL connected");
    await runMigrations();
  } catch (err) {
    console.error(" PostgreSQL connection failed:", err.message);
    process.exit(1);
  }
};

const runMigrations = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email       TEXT,
      phone       TEXT,
      institution_name  TEXT NOT NULL,
      institution_type  TEXT NOT NULL,
      city              TEXT NOT NULL,
      loan_book_size    TEXT NOT NULL,
      status            TEXT DEFAULT 'pending',
      created_at        TIMESTAMPTZ DEFAULT NOW()
    );
  `);
  console.log(" Migrations done");
};

module.exports = { pool, connectPostgres };