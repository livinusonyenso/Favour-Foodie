import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

const CategoriesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-warm-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of authentic Nigerian foodstuffs, carefully sourced and packed for freshness.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg">
            <Link to="/categories" className="group">
              View All Categories
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
