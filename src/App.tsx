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

// Admin Pages
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import AdminBanners from "./pages/admin/AdminBanners";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminProductForm from "./pages/admin/AdminProductForm";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminServices from "./pages/admin/AdminServices";
import AdminConcernCards from "./pages/admin/AdminConcernCards";
import AdminVideoTestimonials from "./pages/admin/AdminVideoTestimonials";
import AdminSalons from "./pages/admin/AdminSalons";
import AdminDermatologists from "./pages/admin/AdminDermatologists";
import AdminTestimonials from "./pages/admin/AdminTestimonials";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUserTracking from "./pages/admin/AdminUserTracking";
import AdminPromoStripe from "./pages/admin/AdminPromoStripe";
import AdminTargetedSolutions from "./pages/admin/AdminTargetedSolutions";
import AdminRoutineKits from "./pages/admin/AdminRoutineKits";

import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./context/CartContext";
import { RewardsProvider } from "./context/RewardsContext";
import FloatingActions from "./components/FloatingActions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
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

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <AdminLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<Dashboard />} />
                    <Route path="banners" element={<AdminBanners />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="products/new" element={<AdminProductForm />} />
                    <Route path="products/:id" element={<AdminProductForm />} />
                    <Route path="categories" element={<AdminCategories />} />
                    <Route path="services" element={<AdminServices />} />
                    {/* <Route path="concerns" element={<AdminConcernCards />} /> */}
                    <Route path="promo-stripe" element={<AdminPromoStripe />} />
                    <Route path="targeted-solutions" element={<AdminTargetedSolutions />} />
                    <Route path="routine-kits" element={<AdminRoutineKits />} />
                    <Route path="videos" element={<AdminVideoTestimonials />} />
                    <Route path="salons" element={<AdminSalons />} />
                    <Route path="dermatologists" element={<AdminDermatologists />} />
                    <Route path="testimonials" element={<AdminTestimonials />} />
                    <Route path="orders" element={<AdminOrders />} />
                    {/* <Route path="tracking" element={<AdminUserTracking />} /> */}
                  </Route>

                  {/* Catch-all */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <FloatingActions />
              </BrowserRouter>
            </TooltipProvider>
          </RewardsProvider>
        </CartProvider>
      </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

