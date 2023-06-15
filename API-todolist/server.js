module.exports = (server) => {
  
  require('dotenv').config();
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`API rodando na porta http://localhost:${port}`);
  });
};