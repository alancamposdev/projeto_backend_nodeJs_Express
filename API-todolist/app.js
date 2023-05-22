const express = require('express');
const app = express();

require('dotenv').config();

const server = require('./server')(app);

// Importação das rotas


