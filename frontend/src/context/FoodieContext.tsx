import { createContext, useContext, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Category } from "@/data/categories";
import {
  fetchCategories,
  fetchCategoryById,
  updateCategory as apiUpdateCategory,
  UpdateCategoryPayload,
} from "@/services/api";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FoodieContextType {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  getCategoryById: (id: string) => Category | undefined;
  updateCategory: (id: string, payload: UpdateCategoryPayload) => Promise<Category>;
  isUpdating: boolean;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const FoodieContext = createContext<FoodieContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export const FoodieProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
  });

  const mutation = useMutation<Category, Error, { id: string; payload: UpdateCategoryPayload }>({
    mutationFn: ({ id, payload }) => apiUpdateCategory(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  const updateCategory = (id: string, payload: UpdateCategoryPayload) =>
    mutation.mutateAsync({ id, payload });

  const getCategoryById = (id: string) => categories.find((c) => c.id === id);

  return (
    <FoodieContext.Provider
      value={{
        categories,
        isLoading,
        error: error?.message ?? null,
        getCategoryById,
        updateCategory,
        isUpdating: mutation.isPending,
      }}
    >
      {children}
    </FoodieContext.Provider>
  );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

export const useFoodie = () => {
  const ctx = useContext(FoodieContext);
  if (!ctx) throw new Error("useFoodie must be used within FoodieProvider");
  return ctx;
};

export { fetchCategoryById };
