const Category = require("../models/Category");

/**
 * GET /categories
 * Returns all categories with their embedded products.
 */
const getAllCategories = (req, res, next) => {
  try {
    const categories = Category.findAll();
    res.json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /categories/:id
 * Returns a single category with its products.
 */
const getCategoryById = (req, res, next) => {
  try {
    const category = Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: `Category '${req.params.id}' not found.`,
      });
    }
    res.json({ success: true, data: category });
  } catch (err) {
    next(err);
  }
};

/**
 * PATCH /categories/:id
 * Updates name, description, and/or icon of a category.
 * Products are unchanged.
 */
const updateCategory = (req, res, next) => {
  try {
    const { name, description, icon } = req.body;

    if (!name && !description && !icon) {
      return res.status(400).json({
        success: false,
        message: "Provide at least one field to update: name, description, or icon.",
      });
    }

    const updated = Category.update(req.params.id, { name, description, icon });
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Category '${req.params.id}' not found.`,
      });
    }

    res.json({ success: true, message: "Category updated successfully.", data: updated });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllCategories, getCategoryById, updateCategory };
