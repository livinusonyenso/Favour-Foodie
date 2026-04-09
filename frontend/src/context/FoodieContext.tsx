import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@/data/categories";
import { fetchCategories, fetchCategoryById } from "@/services/api";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FoodieContextType {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  getCategoryById: (id: string) => Category | undefined;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const FoodieContext = createContext<FoodieContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export const FoodieProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const getCategoryById = (id: string) =>
    categories.find((c) => c.id === id);

  return (
    <FoodieContext.Provider
      value={{
        categories,
        isLoading,
        error: error?.message ?? null,
        getCategoryById,
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
