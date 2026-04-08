const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const DB_PATH = path.join(__dirname, "../data/db.json");

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Ensures the data directory and db.json file exist.
 * Creates them with an empty products array if they don't.
 */
const ensureDb = () => {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ products: [] }, null, 2), "utf-8");
  }
};

/** Read and parse the JSON store. */
const readDb = () => {
  ensureDb();
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
};

/** Persist data back to the JSON store. */
const writeDb = (data) => {
  ensureDb();
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
};

// ─── Product Model ────────────────────────────────────────────────────────────

class Product {
  /**
   * Return all products, optionally filtered/sorted via query params.
   * @param {{ search?: string, sort?: string, order?: 'asc'|'desc' }} options
   */
  static findAll({ search, sort, order } = {}) {
    let { products } = readDb();

    // Search by name or description (case-insensitive)
    if (search) {
      const q = search.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // Sorting
    const validSortFields = ["name", "price", "created_at", "updated_at"];
    if (sort && validSortFields.includes(sort)) {
      const dir = order === "desc" ? -1 : 1;
      products = [...products].sort((a, b) => {
        if (a[sort] < b[sort]) return -1 * dir;
        if (a[sort] > b[sort]) return 1 * dir;
        return 0;
      });
    }

    return products;
  }

  /**
   * Find a single product by its UUID.
   * @param {string} id
   * @returns {object|null}
   */
  static findById(id) {
    const { products } = readDb();
    return products.find((p) => p.id === id) || null;
  }

  /**
   * Create a new product and persist it.
   * @param {{ name: string, description?: string, price: number, image?: string }} data
   * @returns {object} the created product
   */
  static create(data) {
    const db = readDb();
    const now = new Date().toISOString();

    const product = {
      id: uuidv4(),
      name: data.name.trim(),
      description: data.description ? data.description.trim() : "",
      price: parseFloat(data.price),
      image: data.image ? data.image.trim() : null,
      created_at: now,
      updated_at: now,
    };

    db.products.push(product);
    writeDb(db);
    return product;
  }

  /**
   * Update an existing product. Only supplied fields are changed.
   * @param {string} id
   * @param {{ name?: string, description?: string, price?: number, image?: string }} data
   * @returns {object|null} the updated product, or null if not found
   */
  static update(id, data) {
    const db = readDb();
    const index = db.products.findIndex((p) => p.id === id);
    if (index === -1) return null;

    const existing = db.products[index];

    const updated = {
      ...existing,
      name: data.name !== undefined ? data.name.trim() : existing.name,
      description:
        data.description !== undefined
          ? data.description.trim()
          : existing.description,
      price:
        data.price !== undefined ? parseFloat(data.price) : existing.price,
      image: data.image !== undefined ? data.image.trim() : existing.image,
      updated_at: new Date().toISOString(),
    };

    db.products[index] = updated;
    writeDb(db);
    return updated;
  }

  /**
   * Delete a product by ID.
   * @param {string} id
   * @returns {boolean} true if deleted, false if not found
   */
  static delete(id) {
    const db = readDb();
    const index = db.products.findIndex((p) => p.id === id);
    if (index === -1) return false;

    db.products.splice(index, 1);
    writeDb(db);
    return true;
  }

  /**
   * Return the total count of products.
   * @returns {number}
   */
  static count() {
    const { products } = readDb();
    return products.length;
  }
}

module.exports = Product;
