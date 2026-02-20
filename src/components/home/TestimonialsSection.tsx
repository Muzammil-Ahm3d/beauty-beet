import { useState } from "react";
import { Star, Quote, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const initialTestimonials = [
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

const PRODUCTS = [
  "Anti Hair Fall Serum",
  "Gentle Face Cleanser",
  "Deep Repair Hair Mask",
  "Vitamin C Glow Serum",
  "Hydrating Moisturizer",
  "Other"
];

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState(initialTestimonials);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    location: "",
    rating: 5,
    text: "",
    product: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleProductChange = (value: string) => {
    setNewReview(prev => ({ ...prev, product: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text || !newReview.product) return;

    const reviewToAdd = {
      ...newReview,
      avatar: newReview.name.charAt(0).toUpperCase(),
      verified: true, // Simulating verification for new reviews
    };

    setReviews([reviewToAdd, ...reviews]);
    setNewReview({
      name: "",
      location: "",
      rating: 5,
      text: "",
      product: ""
    });
    setIsDialogOpen(false);
  };

  return (
    <section className="py-4 md:py-6 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider mb-3">
            Customer Reviews
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/70">
            Real reviews from verified customers who love their results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex overflow-x-auto pb-8 gap-4 scrollbar-none snap-x h-full max-w-4xl mx-auto">
          {reviews.map((testimonial, index) => (
            <div
              key={index}
              className="w-[280px] min-w-[280px] max-w-[280px] flex-shrink-0 snap-start relative bg-card rounded-2xl p-4 md:p-4 shadow-soft flex flex-col border border-border/50 h-[400px]"
            >
              {/* Quote Icon */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary shadow-soft flex items-center justify-center mb-3 md:mb-4">
                <Quote className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? "text-amber-500 fill-current" : "text-slate-200"}`}
                  />
                ))}
              </div>

              {/* Text */}
              <div className="flex-grow">
                <p className="text-slate-900 mb-4 md:mb-6 leading-relaxed text-sm md:text-base font-medium min-h-[4rem]">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Product Tag */}
              <div className="mb-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                  {testimonial.product}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-slate-900 text-base">{testimonial.name}</p>
                    {testimonial.verified && (
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-slate-900 font-medium">{testimonial.location || "Verified Customer"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <div className="mt-8 flex justify-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 rounded-full px-8 shadow-lg hover:shadow-primary/25 transition-all">
                <Plus className="w-4 h-4 mr-2" />
                Write a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Share Your Experience</DialogTitle>
                <DialogDescription>
                  We'd love to hear about your journey with BeautyBeet.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={newReview.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="City (Optional)"
                      value={newReview.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${star <= newReview.rating
                            ? "text-amber-500 fill-current"
                            : "text-muted hover:text-amber-200"
                            }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Product Used</Label>
                  <Select onValueChange={handleProductChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {PRODUCTS.map(product => (
                        <SelectItem key={product} value={product}>{product}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text">Your Review</Label>
                  <Textarea
                    id="text"
                    name="text"
                    placeholder="Tell us what you liked..."
                    required
                    className="min-h-[100px]"
                    value={newReview.text}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Submit Review</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 border-t border-primary-foreground/20 pt-12 md:pt-8 max-w-4xl mx-auto">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
            { value: "12K+", label: "Verified Reviews" },
            { value: "98%", label: "Would Recommend" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <div className="font-display text-2xl md:text-3xl text-primary-foreground font-bold mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
