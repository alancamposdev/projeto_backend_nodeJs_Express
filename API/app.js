const express = require('express');
const app = express();

require('dotenv').config();

const server = require('./API/server')(app);

// Importação das rotas


