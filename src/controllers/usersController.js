const pool= require('../config/dbConfig')

async function getUsers(req, res) {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}
async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'User não encontrado.' });
    } else {
      res.json(result.rows);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}
async function createUser(req, res) {
  const { username, datanascimento, email, cpf, telephone, sexo , senha } = req.body;
  const query = 'INSERT INTO users (username, datanascimento, email, cpf, telephone, sexo, senha) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
  const values = [username, datanascimento, email, cpf, telephone, sexo, senha];
  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).status('Erro ao criar usuário');
  }
}
async function updateUser(req, res) {
  const id = req.params.id;
  const { username, datanascimento, email, cpf, telephone, sexo, senha } = req.body;
  const query = 'UPDATE users SET username = $1, datanascimento = $2, email = $3, cpf = $4, telephone = $5, sexo = $6, senha = $7 WHERE id = $8 RETURNING *';
  const values = [username, datanascimento, email, cpf, telephone, sexo, senha, id];
  try {
    const result = await pool.query(query, values);
    if (result.rowCount > 0) {
      res.send('Usuário atualizado com sucesso!');
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}
async function deleteUser(req, res){
  const id = req.params.id;
  const query = 'DELETE FROM users WHERE id = $1';
  try {
    const result = await pool.query(query, [id]);
    if(result.rowCount > 0){
      res.send('Usuário deletado com sucesso!')
    }
    else{
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser};