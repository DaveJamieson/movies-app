function requestLogger(req, res, next) {
  console.log(`\n+-----------------------------------------------+`);
  console.log(`| ${new Date().toLocaleString()} |`);
  console.log(`${req.method} ${req.url} ${req.path}`);
  console.log(`\n+-----------------------------------------------+`);
  next();
}

module.exports = requestLogger;