import { Shield, Beaker, Award, Leaf, Heart, Truck } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Chemical-Free",
    description: "No parabens, sulfates, or harmful chemicals in any product.",
  },
  {
    icon: Beaker,
    title: "Lab-Tested",
    description: "Every product tested for safety and efficacy.",
  },
  {
    icon: Award,
    title: "Expert-Developed",
    description: "Formulated by dermatologists and beauty experts.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Made with carefully sourced natural ingredients.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "Never tested on animals. Vegan-friendly options.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders above ₹499 across India.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Why Choose BeautyBeet
          </h2>
          <p className="text-primary-foreground/70">
            Clean beauty that delivers real results. Every product is crafted with care, 
            backed by science, and designed for you.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg mb-2">{point.title}</h3>
              <p className="text-sm text-primary-foreground/70">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
