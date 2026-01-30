import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, Users, Award, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Quality",
    description: "Every product we sell is handpicked with love and care for quality.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our top priority. We go the extra mile for you.",
  },
  {
    icon: Award,
    title: "Trusted Reliability",
    description: "Consistent quality and reliable service you can count on.",
  },
];

const commitments = [
  "Sourcing only the freshest and highest quality products",
  "Fair pricing without compromising on quality",
  "Prompt and careful nationwide delivery",
  "Responsive customer service via WhatsApp",
  "Transparent business practices",
  "Supporting local Nigerian farmers and suppliers",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-hero-gradient pattern-overlay">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Bringing the Taste of Nigeria to Your Home
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80">
              Favour Foodie is your trusted partner for authentic Nigerian foodstuffs, committed to quality, freshness, and reliable delivery across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Favour Foodie was born out of a deep love for Nigerian cuisine and a commitment to making authentic ingredients accessible to everyone, no matter where they are in Nigeria.
                </p>
                <p>
                  We understand the struggle of finding quality foodstuffs – from the freshest vegetables to authentic spices. That's why we've built a network of trusted suppliers across Nigeria to bring you only the best.
                </p>
                <p>
                  Our mission is simple: to be your one-stop shop for all Nigerian foodstuffs, delivering quality products with reliability and care. Whether you're cooking for family, running a restaurant, or simply craving the taste of home, we've got you covered.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
                <div className="w-full h-full bg-hero-gradient pattern-overlay flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                      <span className="text-5xl">🍲</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-primary-foreground">
                      Quality is Our Tradition
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-warm-gradient">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 bg-background rounded-2xl shadow-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-hero-gradient shadow-soft mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Commitment
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What We Promise You
              </h2>
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <div
                    key={commitment}
                    className="flex items-start gap-3 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8 lg:p-12">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Ready to Experience the Favour Foodie Difference?
              </h3>
              <p className="text-muted-foreground mb-6">
                Browse our categories and find everything you need for authentic Nigerian cooking.
              </p>
              <Button asChild size="lg">
                <Link to="/categories" className="group">
                  Shop Categories
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
