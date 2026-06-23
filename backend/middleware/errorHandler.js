/**
 * Global error handling middleware.
 * Must be registered last in Express (after all routes).
 */
function errorHandler(err, req, res, next) {
  console.error("[ERROR]", err.message || err);
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || "Internal Server Error",
  });
}

module.exports = errorHandler;
