import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-hero-gradient pattern-overlay relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg lg:text-xl text-primary-foreground/80 mb-10">
            Get in touch with us today and experience the convenience of having fresh, authentic Nigerian foodstuffs delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="hero-outline" size="xl">
              <a href="tel:+2347030943463">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a
                href="https://wa.me/2347030943463"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
          <p className="mt-8 text-primary-foreground/60 text-sm">
            Available Monday - Saturday, 8am - 8pm
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
