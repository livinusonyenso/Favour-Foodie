const express = require("express");
const router = express.Router();

const { getAllCategories, getCategoryById, updateCategory } = require("../controllers/categoryController");

// GET   /categories        → list all categories (with products)
// GET   /categories/:id    → get one category (with products)
// PATCH /categories/:id    → update name / description / icon

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.patch("/:id", updateCategory);

module.exports = router;
