import { Category } from "@/data/categories";

const BASE_URL = import.meta.env.VITE_API_URL as string;

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.message ?? `Request failed: ${res.status}`);
  }
  const json = await res.json();
  return json.data as T;
}

// ─── Category API ─────────────────────────────────────────────────────────────

/** Fetch all categories with their embedded products. */
export const fetchCategories = (): Promise<Category[]> =>
  request<Category[]>("/categories");

/** Fetch a single category by its slug id. */
export const fetchCategoryById = (id: string): Promise<Category> =>
  request<Category>(`/categories/${id}`);
