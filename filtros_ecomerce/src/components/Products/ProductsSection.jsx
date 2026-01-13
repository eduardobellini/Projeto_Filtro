import React, { useRef, useEffect, useState } from "react";
import { Heart } from "lucide-react";
import ProductCard from "./ProductCard";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import purificador1 from "../../assets/purificador de agua ibl.png";
import purificador2 from "../../assets/purificador_teste2 (1) 1.png";
import purificador3 from "../../assets/water purifier.png";

export default function ProductsSection({
  activeTab,
  setActiveTab,
  favorites,
  setFavorites,
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: false });
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});
  
  const tabs = [
    { id: "novos", label: "Novos na loja" },
    { id: "vendidos", label: "Mais Vendidos" },
    { id: "destaque", label: "Produtos em Destaque" },
  ];

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  const products = [
    {
      id: 1,
      name: "Purificador de Água IBBL Vivax Branco",
      originalPrice: "R$ 250,00",
      discount: "31% OFF",
      price: "R$169,82",
      installment: "Ou 12x de 69,90 sem juros",
      image: purificador1,
    },
    {
      id: 2,
      name: "Purificador de Água IBBL Premium",
      originalPrice: "R$ 250,00",
      discount: "31% OFF",
      price: "R$169,82",
      installment: "Ou 12x de 69,90 sem juros",
      image: purificador2,
    },
    {
      id: 3,
      name: "Purificador de Água Avançado",
      originalPrice: "R$ 250,00",
      discount: "31% OFF",
      price: "R$169,82",
      installment: "Ou 12x de 69,90 sem juros",
      image: purificador3,
    },
  ];

  return (
    <section
      ref={ref}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative flex flex-wrap sm:flex-nowrap space-x-4 sm:space-x-8 border-b border-gray-200 mb-6 sm:mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[tab.id] = el)}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 sm:pb-4 px-2 font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
              activeTab === tab.id
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
        <div
          className="absolute bottom-0 h-0.5 bg-gray-900 transition-all duration-300 ease-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 sm:mt-10">
        <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg text-sm sm:text-base hover:bg-gray-900 hover:text-white transition-all active:scale-95">
          Ver Mais Produtos
        </button>
      </div>
    </section>
  );
}
