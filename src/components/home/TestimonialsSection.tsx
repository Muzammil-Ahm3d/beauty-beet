import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "P",
    rating: 5,
    text: "I've tried so many hair serums but nothing worked like this! My hairfall reduced significantly within 3 weeks. Clean ingredients that actually work.",
    product: "Anti Hair Fall Serum",
    verified: true,
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    avatar: "A",
    rating: 5,
    text: "Finally, a brand that doesn't use harmful chemicals. My sensitive skin loves the face cleanser. No irritation, just healthy glowing skin.",
    product: "Gentle Face Cleanser",
    verified: true,
  },
  {
    name: "Ritu Verma",
    location: "Delhi",
    avatar: "R",
    rating: 5,
    text: "The hair mask is incredible! My dry, frizzy hair has never felt this soft. Lab-tested products give me confidence in what I'm putting on my hair.",
    product: "Deep Repair Hair Mask",
    verified: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Customer Reviews
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Real reviews from verified customers who love their results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-6 shadow-soft"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-primary shadow-soft flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              {/* Product Tag */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-5">
                {testimonial.product}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    {testimonial.verified && (
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
            { value: "12K+", label: "Verified Reviews" },
            { value: "98%", label: "Would Recommend" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 rounded-2xl bg-card shadow-soft">
              <div className="font-display text-2xl md:text-3xl text-primary font-bold mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
