import { Leaf, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Products",
    description:
      "We source only the freshest produce directly from trusted Nigerian farms and suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic Nigerian Ingredients",
    description:
      "Every product is carefully selected to ensure genuine, traditional Nigerian quality.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver to all states across Nigeria, bringing the taste of home to your doorstep.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Favour Foodie
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing you the best of Nigerian cuisine with quality you can trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-hero-gradient shadow-soft mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 lg:mt-20 p-8 lg:p-12 rounded-2xl bg-secondary border border-border text-center">
          <p className="font-display text-xl lg:text-2xl text-foreground mb-2">
            "Quality is not just a promise, it's our tradition."
          </p>
          <p className="text-muted-foreground">— The Favour Foodie Promise</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
