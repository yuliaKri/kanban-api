function apiNotFound(req, res) {
  res.status(400).json('API not found');
}

function errorHandler(app) {
  app.use(apiNotFound);
}
module.exports = errorHandler;
