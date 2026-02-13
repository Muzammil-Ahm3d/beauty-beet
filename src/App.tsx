import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Blog from "./pages/Blog";

// Shop Pages
import CategoryPage from "./pages/shop/CategoryPage";
import SubcategoryPage from "./pages/shop/SubcategoryPage";
import Shop from "./pages/shop/Shop";

// Solution Pages
import FixYourHair from "./pages/solutions/FixYourHair";
import FixYourSkin from "./pages/solutions/FixYourSkin";
import SalonNearYou from "./pages/solutions/SalonNearYou";
import DermatologistNearYou from "./pages/solutions/DermatologistNearYou";

// Special Pages
import BookSalon from "./pages/BookSalon";
import Rewards from "./pages/Rewards";

import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./context/CartContext";
import { RewardsProvider } from "./context/RewardsContext";
import FloatingActions from "./components/FloatingActions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <CartProvider>
        <RewardsProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />

                {/* Shop Routes - Order matters: more specific first */}
                <Route path="/shop/:category/:subcategory/:slug" element={<ProductDetails />} />
                <Route path="/shop/:category/:subcategory" element={<SubcategoryPage />} />
                <Route path="/shop/:category" element={<CategoryPage />} />
                <Route path="/shop" element={<Shop />} />

                {/* Solution Pages */}
                <Route path="/solutions/fix-your-hair" element={<FixYourHair />} />
                <Route path="/solutions/fix-your-skin" element={<FixYourSkin />} />
                <Route path="/solutions/salon-near-you" element={<SalonNearYou />} />
                <Route path="/solutions/dermatologist-near-you" element={<DermatologistNearYou />} />

                {/* Special Pages */}
                <Route path="/book-salon" element={<BookSalon />} />
                <Route path="/rewards" element={<Rewards />} />

                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <FloatingActions />
            </BrowserRouter>
          </TooltipProvider>
        </RewardsProvider>
      </CartProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

