import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group block bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-fade-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {category.description}
      </p>
      <div className="mt-4 pt-4 border-t border-border">
        <span className="text-xs font-medium text-muted-foreground">
          {category.products.length} products
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
