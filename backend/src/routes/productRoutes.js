const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const validateProduct = require("../middleware/validateProduct");

// ┌─────────────────────────────────────────────────────────┐
// │  Route            │ Method │ Description                │
// ├─────────────────────────────────────────────────────────┤
// │  /products        │ GET    │ List all products          │
// │  /products/:id    │ GET    │ Get one product            │
// │  /products        │ POST   │ Create a product           │
// │  /products/:id    │ PUT    │ Update a product           │
// │  /products/:id    │ DELETE │ Delete a product           │
// └─────────────────────────────────────────────────────────┘

router.route("/")
  .get(getAllProducts)
  .post(validateProduct, createProduct);

router.route("/:id")
  .get(getProductById)
  .put(validateProduct, updateProduct)
  .delete(deleteProduct);

module.exports = router;
