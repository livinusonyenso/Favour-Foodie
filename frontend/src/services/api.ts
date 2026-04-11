import { Category } from "@/data/categories";

const BASE_URL = import.meta.env.VITE_API_URL as string;

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, options);
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

export interface UpdateCategoryPayload {
  name?: string;
  description?: string;
  icon?: string;
}

/** Partially update a category's name, description, or icon. */
export const updateCategory = (
  id: string,
  payload: UpdateCategoryPayload
): Promise<Category> =>
  request<Category>(`/categories/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
