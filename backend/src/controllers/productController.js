const Product = require("../models/Product");

// ─── GET /products ─────────────────────────────────────────────────────────────
/**
 * Retrieve all products.
 * Supports optional query params:
 *   ?search=keyword   – filter by name or description
 *   ?sort=price        – sort field (name | price | created_at | updated_at)
 *   ?order=desc        – sort direction (asc | desc), default asc
 */
const getAllProducts = (req, res, next) => {
  try {
    const { search, sort, order } = req.query;
    const products = Product.findAll({ search, sort, order });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (err) {
    next(err);
  }
};

// ─── GET /products/:id ─────────────────────────────────────────────────────────
/**
 * Retrieve a single product by its UUID.
 */
const getProductById = (req, res, next) => {
  try {
    const product = Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with id '${req.params.id}' not found.`,
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

// ─── POST /products ────────────────────────────────────────────────────────────
/**
 * Create a new product.
 * Required body fields: name, price
 * Optional body fields: description, image
 */
const createProduct = (req, res, next) => {
  try {
    const product = Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

// ─── PUT /products/:id ─────────────────────────────────────────────────────────
/**
 * Update an existing product (partial update supported — only provided fields change).
 */
const updateProduct = (req, res, next) => {
  try {
    const product = Product.update(req.params.id, req.body);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with id '${req.params.id}' not found.`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

// ─── DELETE /products/:id ──────────────────────────────────────────────────────
/**
 * Permanently delete a product by ID.
 */
const deleteProduct = (req, res, next) => {
  try {
    const deleted = Product.delete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: `Product with id '${req.params.id}' not found.`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
