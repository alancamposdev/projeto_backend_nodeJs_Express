const express = require('express');
const app = express();
app.use(express.json());

// Importação das rotas
app.use('/', require('./routes/tasksRoutes'));

// Importação do servidor
require('./server')(app);
