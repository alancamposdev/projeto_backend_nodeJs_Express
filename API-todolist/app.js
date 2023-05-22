const express = require('express');
const app = express();
app.use(express.json());

// Importação das variáveis de ambiente
require('dotenv').config();
// Importação do servidor
require('./server')(app);

// Importação das rotas
const tasksRoutes = require('./routes/tasksRoutes');
app.use('/', tasksRoutes);





