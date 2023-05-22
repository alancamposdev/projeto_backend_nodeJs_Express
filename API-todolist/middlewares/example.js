const exampleMiddleware = (req, res, next) => {
  console.log('...coffee break☕... ');
  next();
};

module.exports = exampleMiddleware;