/**
 * validateProduct middleware
 *
 * Validates the request body before create (POST) and update (PUT).
 * - POST: name and price are required
 * - PUT:  any supplied field is validated; at least one field must be present
 */
const validateProduct = (req, res, next) => {
  const { name, price, description, image } = req.body;
  const errors = [];
  const isCreate = req.method === "POST";

  // ── name ───────────────────────────────────────────────────────────────────
  if (isCreate && (name === undefined || name === null || name === "")) {
    errors.push({ field: "name", message: "name is required." });
  } else if (name !== undefined) {
    if (typeof name !== "string" || name.trim().length === 0) {
      errors.push({ field: "name", message: "name must be a non-empty string." });
    } else if (name.trim().length > 200) {
      errors.push({ field: "name", message: "name must not exceed 200 characters." });
    }
  }

  // ── price ──────────────────────────────────────────────────────────────────
  if (isCreate && (price === undefined || price === null)) {
    errors.push({ field: "price", message: "price is required." });
  } else if (price !== undefined) {
    const parsed = parseFloat(price);
    if (isNaN(parsed)) {
      errors.push({ field: "price", message: "price must be a valid number." });
    } else if (parsed < 0) {
      errors.push({ field: "price", message: "price must be zero or greater." });
    }
  }

  // ── description (optional) ─────────────────────────────────────────────────
  if (description !== undefined && typeof description !== "string") {
    errors.push({ field: "description", message: "description must be a string." });
  }

  // ── image (optional) ───────────────────────────────────────────────────────
  if (image !== undefined && image !== null) {
    if (typeof image !== "string") {
      errors.push({ field: "image", message: "image must be a string (URL)." });
    }
  }

  // ── PUT: ensure at least one field is being updated ────────────────────────
  if (
    !isCreate &&
    name === undefined &&
    price === undefined &&
    description === undefined &&
    image === undefined
  ) {
    errors.push({
      field: "body",
      message: "At least one field (name, price, description, image) must be provided.",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors,
    });
  }

  next();
};

module.exports = validateProduct;
