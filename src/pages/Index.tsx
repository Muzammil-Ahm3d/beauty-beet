import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductCategoriesSection from "@/components/home/ProductCategoriesSection";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import BestsellersSection from "@/components/home/BestsellersSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import FixHairSection from "@/components/home/FixHairSection";
import FixSkinSection from "@/components/home/FixSkinSection";
import SalonSection from "@/components/home/SalonSection";
import DermatologistSection from "@/components/home/DermatologistSection";
import TrustSection from "@/components/home/TrustSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero - Product-focused */}
        <ScrollReveal animation="fade-in">
          <HeroSection />
        </ScrollReveal>

        {/* Shop by Product Category */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <ProductCategoriesSection />
        </ScrollReveal>

        {/* Video Testimonials - New Section */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <VideoTestimonialsSection />
        </ScrollReveal>

        {/* Bestsellers */}
        <ScrollReveal animation="fade-up">
          <BestsellersSection />
        </ScrollReveal>

        {/* New Arrivals */}
        <ScrollReveal animation="fade-up">
          <NewArrivalsSection />
        </ScrollReveal>

        {/* Fix Your Hair First */}
        <ScrollReveal animation="slide-right">
          <FixHairSection />
        </ScrollReveal>

        {/* Fix Your Skin First */}
        <ScrollReveal animation="slide-left">
          <FixSkinSection />
        </ScrollReveal>

        {/* Why Choose BeautyBeet */}
        <ScrollReveal animation="scale-up">
          <TrustSection />
        </ScrollReveal>

        {/* Salon Near You */}
        <ScrollReveal animation="fade-up">
          <SalonSection />
        </ScrollReveal>

        {/* Dermatologist Near You */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <DermatologistSection />
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal animation="fade-up">
          <TestimonialsSection />
        </ScrollReveal>

        {/* Newsletter */}
        <ScrollReveal animation="fade-in" delay={0.2}>
          <NewsletterSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
