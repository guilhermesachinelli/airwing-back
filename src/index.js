require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const port = process.env.PORT || 3030;
app.use(express.json());
app.use('/',usersRoutes);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}🧙🪄✨`);
  });