import React, { useState } from "react";
import Header from "../components/Layout/Header";
import HeroSection from "../components/Layout/HeroSection";
import CategoriesSection from "../components/Layout/CategoriesSection";
import ProductsSection from "../components/Products/ProductsSection";
import MissionVisionSection from "../components/Layout/MissionVisionSection";
import Footer from "../components/Layout/Footer";
import bgImage from "../assets/imagem_onda.png";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("novos");
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(${bgImage})`,
            filter: "brightness(1.3) contrast(1)",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-blue-50/30 to-white/50"></div>
      </div>

      <div className="relative z-10">
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
    </div>
  );
}
