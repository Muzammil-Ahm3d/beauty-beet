import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Beaker, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Brand Claim Badges */}
            <div className="flex flex-wrap gap-3 mb-6 animate-fade-in">
              {[
                { icon: Shield, label: "Chemical-Free" },
                { icon: Beaker, label: "Lab-Tested" },
                { icon: Award, label: "Expert-Developed" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground"
                >
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-slide-up text-foreground">
              Clean Beauty,{" "}
              <span className="text-gradient-sage">Real Results</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Discover our range of dermatologist-aligned, lab-tested beauty products.
              Free from harmful chemicals. Designed for visible results.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="default" size="xl">
                Shop Hair Care
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" size="xl">
                Shop Skin Care
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">50K+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">4.9★</p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Natural</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Product Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Hair Serum", price: "₹649", discount: "28% OFF", category: "Hair Care", image: "/images/products/hair_serum.png" },
                  { name: "Face Cleanser", price: "₹449", discount: "25% OFF", category: "Skin Care", image: "/images/products/face_cleanser.png" },
                  { name: "Hair Mask", price: "₹799", discount: "30% OFF", category: "Hair Care", image: "/images/products/hair_mask.png" },
                  { name: "Face Serum", price: "₹899", discount: "31% OFF", category: "Skin Care", image: "/images/products/face_serum.png" },
                ].map((product, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                  >
                    <div className="h-28 rounded-xl bg-muted mb-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs text-primary font-medium mb-1">{product.category}</p>
                    <h4 className="font-display text-sm text-foreground mb-2">{product.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{product.price}</span>
                      <span className="text-xs px-1.5 py-0.5 bg-accent/10 text-accent rounded">{product.discount}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Free Shipping Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-medium">
                🚚 Free Shipping on Orders Above ₹499
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
