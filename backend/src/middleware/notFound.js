/**
 * 404 handler — catches requests to routes that don't exist.
 * Must be registered after all routes in app.js.
 */
const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl} — route not found.`,
  });
};

module.exports = notFound;
