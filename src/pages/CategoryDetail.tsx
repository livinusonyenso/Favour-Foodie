import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { ArrowLeft, MessageCircle, ChevronRight } from "lucide-react";

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The category you're looking for doesn't exist.
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
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-5xl">
              {category.icon}
            </div>
            <div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {category.description}
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
              Available Products ({category.products.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {category.products.map((product, index) => (
              <div
                key={product}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {product}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-secondary border border-border text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Interested in {category.name}?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us on WhatsApp to place your order or inquire about availability.
            </p>
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={`https://wa.me/2347030943463?text=Hello, I'm interested in ordering from your ${category.name} category.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryDetail;
