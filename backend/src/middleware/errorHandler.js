/**
 * Global error-handling middleware.
 * Must be registered last in app.js (after all routes).
 *
 * Express identifies this as an error handler because it accepts 4 arguments.
 */
const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const isDev = process.env.NODE_ENV !== "production";

  // Log the full stack in non-production environments
  if (isDev) {
    console.error(`\n[Error] ${req.method} ${req.originalUrl}`);
    console.error(err.stack || err.message);
  } else {
    console.error(`[Error] ${req.method} ${req.originalUrl} — ${err.message}`);
  }

  const statusCode = err.statusCode || err.status || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "An unexpected error occurred. Please try again.",
    ...(isDev && { stack: err.stack }),
  });
};

module.exports = errorHandler;
