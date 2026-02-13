import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Heart, User, Search, ChevronDown, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMegaColumn, setActiveMegaColumn] = useState<string | null>(null);
  const location = useLocation();
  const { cartCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
              <img src="/beautybeet_logo.jpeg" alt="BeautyBeet Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              BeautyBeet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => {
                  if (item.type !== "link") setActiveDropdown(item.label);
                }}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveMegaColumn(null);
                }}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1
                    ${location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  {item.label}
                  {item.type !== "link" && (
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Mega Menu for Shop */}
                {item.type === "mega-menu" && item.columns && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px]">
                    <div className="bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden p-6">
                      <div className="grid grid-cols-5 gap-6">
                        {item.columns.map((column) => (
                          <div key={column.title}>
                            <Link
                              to={column.href}
                              className="font-semibold text-foreground hover:text-primary transition-colors text-sm block mb-3"
                            >
                              {column.title}
                            </Link>
                            <ul className="space-y-2">
                              {column.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    to={subItem.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Simple Dropdown for Solutions */}
                {item.type === "dropdown" && item.items && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden p-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-between group/item"
                        >
                          {subItem.label}
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden xl:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50">
              <Search className="w-5 h-5 text-muted-foreground" />
            </Button>
            <Link to="/about">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50">
                <User className="w-5 h-5 text-muted-foreground" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50">
              <Heart className="w-5 h-5 text-muted-foreground" />
            </Button>
            <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 relative">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Cart ({cartCount})
            </Button>
          </div>

          {/* Mobile Actions & Menu */}
          <div className="xl:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full w-12 h-12">
              <Search className="w-7 h-7 text-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full w-12 h-12">
              <Heart className="w-7 h-7 text-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 relative">
              <ShoppingBag className="w-7 h-7 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-3 h-3 bg-primary rounded-full border border-white" />
              )}
            </Button>
            <button
              className="p-2 text-foreground ml-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="xl:hidden py-4 border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2 p-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.type === "link" ? (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="space-y-1">
                      <Link
                        to={item.href}
                        className="font-medium text-base px-4 py-2 text-foreground/80 block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <div className="pl-4 border-l-2 border-primary/10 ml-4 space-y-1">
                        {item.type === "mega-menu" && item.columns?.map((column) => (
                          <div key={column.title} className="mb-3">
                            <Link
                              to={column.href}
                              className="block px-4 py-2 text-sm font-semibold text-foreground/70"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {column.title}
                            </Link>
                            {column.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="block px-6 py-1.5 text-sm text-muted-foreground hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        {item.type === "dropdown" && item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="h-px bg-border my-2" />
              <div className="flex gap-4 px-4 py-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
              <Button className="w-full rounded-xl mt-2">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Cart ({cartCount})
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
