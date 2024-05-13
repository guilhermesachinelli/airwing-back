const pool = require('../config/dbConfig');

async function getUsers(req, res) {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json(users.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getUsers };