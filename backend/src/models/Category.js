const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "../data/categories.json");

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ensureDb = () => {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ categories: [] }, null, 2), "utf-8");
  }
};

const readDb = () => {
  ensureDb();
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
};

const writeDb = (data) => {
  ensureDb();
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
};

// ─── Category Model ───────────────────────────────────────────────────────────

class Category {
  /** Return all categories with their embedded products. */
  static findAll() {
    const { categories } = readDb();
    return categories;
  }

  /**
   * Find a single category by its id (slug).
   * @param {string} id
   * @returns {object|null}
   */
  static findById(id) {
    const { categories } = readDb();
    return categories.find((c) => c.id === id) || null;
  }

  /** Check whether the categories store is empty. */
  static isEmpty() {
    const { categories } = readDb();
    return categories.length === 0;
  }

  /**
   * Replace all categories (used by the seed script).
   * @param {Array} data
   */
  static seed(data) {
    writeDb({ categories: data });
  }
}

module.exports = Category;
