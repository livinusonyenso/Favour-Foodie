import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useFoodie } from "@/context/FoodieContext";
import ProductCard from "@/components/products/ProductCard";
import { ArrowLeft, MessageCircle, ChevronRight } from "lucide-react";

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { getCategoryById, isLoading, error } = useFoodie();
  const category = getCategoryById(categoryId ?? "");

  if (isLoading) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (error || !category) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">
            {error ? "Something went wrong" : "Category Not Found"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {error ?? "The category you're looking for doesn't exist."}
          </p>
          <Button asChild>
            <Link to="/categories">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
              Categories
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-12 lg:py-16 bg-warm-gradient">
        <div className="container-custom">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-5xl shrink-0">
              {category.icon}
            </div>
            <div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground">{category.description}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {category.products.length} product{category.products.length !== 1 ? "s" : ""} available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Available Products
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {category.products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                categoryName={category.name}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 rounded-2xl bg-secondary border border-border text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Need a bulk order or custom pack?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us on WhatsApp for bulk pricing, custom orders, or to check availability on any item.
            </p>
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={`https://wa.me/2347030943463?text=Hello! I'm interested in bulk orders from your ${category.name} category. Please share pricing details.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat With Us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryDetail;
