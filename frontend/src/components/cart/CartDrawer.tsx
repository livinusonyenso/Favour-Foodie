import { ShoppingCart, X, Plus, Minus, Trash2, MessageCircle, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();

  const buildWhatsAppMessage = () => {
    const lines = items
      .map(
        ({ product, quantity }) =>
          `• ${product.name} ×${quantity} (${product.unit}) — ₦${(product.price * quantity).toLocaleString()}`
      )
      .join("\n");
    return encodeURIComponent(
      `Hello Favour Foodie! 👋\n\nI'd like to place an order:\n\n${lines}\n\n*Total: ₦${totalPrice.toLocaleString()}*\n\nPlease confirm availability and delivery details. Thank you!`
    );
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, id: string) => {
    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${id}-sm/200/200`;
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[420px] flex flex-col p-0 gap-0"
      >
        {/* Header */}
        <SheetHeader className="px-5 py-4 border-b border-border shrink-0">
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 font-display text-lg font-bold">
              <ShoppingCart className="w-5 h-5 text-primary" />
              Your Cart
              {totalItems > 0 && (
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </div>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear all
              </button>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center gap-4 text-muted-foreground">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <PackageOpen className="w-9 h-9 text-muted-foreground/50" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-base">Your cart is empty</p>
                <p className="text-sm mt-1">Browse our categories and add items to get started.</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-3 p-3 bg-secondary rounded-xl border border-border/50"
              >
                {/* Thumbnail */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover shrink-0 bg-muted"
                  onError={(e) => handleImageError(e, product.id)}
                  loading="lazy"
                />

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <p className="font-semibold text-sm text-foreground leading-tight line-clamp-2">
                    {product.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{product.unit}</p>
                  <p className="font-bold text-primary text-sm">
                    ₦{(product.price * quantity).toLocaleString()}
                  </p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-6 h-6 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-bold w-5 text-center tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-6 h-6 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="ml-auto text-muted-foreground hover:text-destructive transition-colors p-1 rounded"
                      aria-label={`Remove ${product.name}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer — only shown when cart has items */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-border bg-background shrink-0 space-y-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-medium">Subtotal</span>
              <span className="font-display font-bold text-2xl text-foreground">
                ₦{totalPrice.toLocaleString()}
              </span>
            </div>

            <p className="text-xs text-muted-foreground">
              Delivery fee calculated at checkout. Contact us for bulk order discounts.
            </p>

            {/* WhatsApp Checkout */}
            <Button
              asChild
              size="lg"
              className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-base shadow-md"
            >
              <a
                href={`https://wa.me/2347030943463?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Complete Order on WhatsApp
              </a>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
