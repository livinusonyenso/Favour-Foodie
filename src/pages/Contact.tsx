import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-hero-gradient pattern-overlay">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80">
              Have questions or ready to place an order? We're here to help. Reach out to us and we'll respond as quickly as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* WhatsApp - Primary */}
              <div className="p-8 rounded-2xl bg-[hsl(142,70%,95%)] border border-[hsl(142,70%,85%)]">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[hsl(142,70%,40%)] flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      WhatsApp (Fastest Response)
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Send us a message on WhatsApp for quick responses and easy ordering.
                    </p>
                    <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
                      <a
                        href="https://wa.me/2347030943463"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Phone
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Call us directly for urgent inquiries or large orders.
                    </p>
                    <a
                      href="tel:+2347030943463"
                      className="text-2xl font-display font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      +234 703 094 3463
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-brand-gold/20 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-brand-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Delivery Coverage
                    </h3>
                    <p className="text-muted-foreground">
                      We deliver to all 36 states across Nigeria. Delivery times vary based on your location. Contact us for specific delivery information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Order Section */}
            <div>
              <div className="sticky top-24 p-8 lg:p-10 rounded-2xl bg-secondary border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Quick Order Guide
                </h3>
                <p className="text-muted-foreground mb-8">
                  Ready to place an order? Here's how it works:
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Browse Categories</h4>
                      <p className="text-sm text-muted-foreground">
                        Explore our product categories and note down what you need.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Send Your List</h4>
                      <p className="text-sm text-muted-foreground">
                        Message us on WhatsApp with your order list and delivery address.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Get a Quote</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll confirm availability and provide pricing with delivery cost.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Receive Your Order</h4>
                      <p className="text-sm text-muted-foreground">
                        Make payment and receive your fresh products at your doorstep.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border">
                  <Button asChild variant="whatsapp" size="xl" className="w-full">
                    <a
                      href="https://wa.me/2347030943463?text=Hello, I'd like to place an order."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Start Your Order
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
