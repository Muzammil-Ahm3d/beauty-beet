import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: [
      { label: "Hair Care", href: "#" },
      { label: "Skin Care", href: "#" },
      { label: "Body Care", href: "#" },
      { label: "Lip Care", href: "#" },
      { label: "New Arrivals", href: "#" },
      { label: "Best Sellers", href: "#" },
    ],
    concerns: [
      { label: "Fix Your Hair First", href: "#fix-hair" },
      { label: "Fix Your Skin First", href: "#fix-skin" },
      { label: "Hairfall Solutions", href: "#" },
      { label: "Acne Care", href: "#" },
    ],
    services: [
      { label: "Salon Near You", href: "#salons" },
      { label: "Dermatologist Near You", href: "#dermatologists" },
      { label: "Book Appointment", href: "#" },
    ],
    company: [
      { label: "Our Story", href: "#story" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
      { label: "FAQs", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/beautybeet_logo.jpeg" alt="BeautyBeet Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-xl font-semibold">
                BeautyBeet
              </span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-5 max-w-xs">
              Clean beauty that delivers real results. Chemical-free, lab-tested,
              and expert-developed products for your hair and skin.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Concerns</h4>
            <ul className="space-y-2">
              {footerLinks.concerns.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-10 pt-8 border-t border-background/10">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a href="mailto:hello@beautybeet.in" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              hello@beautybeet.in
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <span className="flex items-center gap-2 text-sm text-background/60">
              <MapPin className="w-4 h-4" />
              Mumbai, India
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background/5 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
            <p>© 2024 BeautyBeet. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
