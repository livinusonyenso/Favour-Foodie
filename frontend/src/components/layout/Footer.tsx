import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">FF</span>
              </div>
              <span className="font-display text-xl font-bold">Favour Foodie</span>
            </Link>
            <p className="text-background/70 max-w-sm mb-6">
              Your trusted plug for authentic Nigerian foodstuffs. We bring the taste of home to your doorstep with quality you can trust.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Nationwide Delivery Across Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-background/70 hover:text-primary transition-colors">
                  Shop Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+2347030943463"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+234 703 094 3463</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347030943463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-[hsl(142,70%,50%)] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Favour Foodie. All rights reserved.
            </p>
            <p className="text-background/50 text-sm">
              Fresh Nigerian Foodstuffs • Quality Guaranteed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
