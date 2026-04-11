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
   * Update name, description, or icon of a category by its slug id.
   * Products list is never modified through this method.
   * @param {string} id
   * @param {{ name?: string, description?: string, icon?: string }} data
   * @returns {object|null} updated category or null if not found
   */
  static update(id, data) {
    const db = readDb();
    const index = db.categories.findIndex((c) => c.id === id);
    if (index === -1) return null;

    const existing = db.categories[index];
    db.categories[index] = {
      ...existing,
      name:        data.name        !== undefined ? String(data.name).trim()        : existing.name,
      description: data.description !== undefined ? String(data.description).trim() : existing.description,
      icon:        data.icon        !== undefined ? String(data.icon).trim()         : existing.icon,
    };

    writeDb(db);
    return db.categories[index];
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
