const pool = require('../config/dbConfig');

async function getViagens(req, res) {
    try {
        const viagens = await pool.query('SELECT * FROM viagens');
        res.json(viagens.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }