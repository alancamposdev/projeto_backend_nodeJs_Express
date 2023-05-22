module.exports = (app) => {

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`API na porta http://localhost:${port}`);
  });
};