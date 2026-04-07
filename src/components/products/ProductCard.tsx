import { ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/categories";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  categoryName: string;
  index?: number;
}

const ProductCard = ({ product, categoryName, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();

  const whatsappMessage = encodeURIComponent(
    `Hello! I'd like to order:\n• ${product.name} (${product.unit}) — ₦${product.price.toLocaleString()}\n\nPlease confirm availability and delivery details.`
  );

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${product.id}-fallback/400/300`;
  };

  return (
    <div
      className="group flex flex-col bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300 overflow-hidden animate-fade-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "4/3" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={handleImageError}
          loading="lazy"
        />
        {/* Price badge overlay */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary text-primary-foreground font-bold text-sm shadow-md px-2.5 py-1">
            ₦{product.price.toLocaleString()}
          </Badge>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 gap-2.5">
        {/* Name & Unit */}
        <div>
          <h3 className="font-display font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5 font-medium">{product.unit}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
          {product.description}
        </p>

        {/* Price + Actions */}
        <div className="mt-auto pt-3 border-t border-border space-y-2.5">
          <p className="font-display font-bold text-primary text-xl leading-none">
            ₦{product.price.toLocaleString()}
            <span className="text-xs font-normal text-muted-foreground ml-1.5 font-sans">
              {product.unit}
            </span>
          </p>

          <div className="flex gap-2">
            {/* Add to Cart */}
            <Button
              size="sm"
              variant="default"
              className="flex-1 gap-1.5 font-semibold text-xs h-9"
              onClick={() => addToCart(product, categoryName)}
            >
              <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
              Add to Cart
            </Button>

            {/* WhatsApp quick order */}
            <Button
              size="sm"
              variant="outline"
              asChild
              className="h-9 px-3 border-green-500 text-green-700 hover:bg-green-50 hover:border-green-600 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-950 shrink-0"
              title="Order directly on WhatsApp"
            >
              <a
                href={`https://wa.me/2347030943463?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order ${product.name} on WhatsApp`}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
