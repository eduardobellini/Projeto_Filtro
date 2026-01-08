import React, { useState } from "react";
import Header from "../components/Layout/Header";
import HeroSection from "../components/Layout/HeroSection";
import CategoriesSection from "../components/Layout/CategoriesSection";
import ProductsSection from "../components/Products/ProductsSection";
import MissionVisionSection from "../components/Layout/MissionVisionSection";
import Footer from "../components/Layout/Footer";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("novos");
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <HeroSection />
      
      <CategoriesSection />
      
      <ProductsSection 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      
      <MissionVisionSection />
      
      <Footer />
    </div>
  );
}
