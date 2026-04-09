import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/home/CategoryCard";
import { categories } from "@/data/categories";

const Categories = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-hero-gradient pattern-overlay">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Shop Categories
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Browse our complete collection of authentic Nigerian foodstuffs, organized by category for easy shopping.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
