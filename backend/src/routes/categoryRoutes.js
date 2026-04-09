const express = require("express");
const router = express.Router();

const { getAllCategories, getCategoryById } = require("../controllers/categoryController");

// GET /categories        → list all categories (with products)
// GET /categories/:id    → get one category (with products)

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

module.exports = router;
