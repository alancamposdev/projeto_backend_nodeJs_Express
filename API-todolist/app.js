const express = require('express');
const app = express();
app.use(express.json());

// Importação do banco de dados MongoDB
const db = require('./config/dbConnect');
db.on('error', console.error.bind(console, 'ERRO de Conexão:'));
db.once('open', () => {
  console.log('Banco de dados conectado com sucesso!');
});


// Importação das rotas
app.use('/', require('./routes/tasksRoutes'));

// Importação do servidor
require('./server')(app);
