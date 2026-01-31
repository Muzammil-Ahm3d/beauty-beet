import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Gift, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Stay in the Loop
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Get exclusive offers, new product launches, and expert beauty tips 
            delivered straight to your inbox.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: Gift, text: "Exclusive Offers" },
              { icon: Sparkles, text: "Early Access" },
              { icon: Mail, text: "Beauty Tips" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
              </div>
            ))}
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 pl-12 pr-4 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-body"
                required
              />
            </div>
            <Button type="submit" variant="default" className="rounded-full px-6">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-muted-foreground">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
