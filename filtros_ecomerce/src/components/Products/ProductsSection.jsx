import React from "react";
import { Heart } from "lucide-react";
import ProductCard from "./ProductCard";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function ProductsSection({
  activeTab,
  setActiveTab,
  favorites,
  setFavorites,
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: false });
  const tabs = [
    { id: "novos", label: "Novos na loja" },
    { id: "vendidos", label: "Mais Vendidos" },
    { id: "destaque", label: "Produtos em Destaque" },
  ];

  const products = [
    {
      id: 1,
      name: "Purificador de Água IBBL Vivax Branco",
      originalPrice: "R$ 250,00",
      discount: "31% OFF",
      price: "R$169,82",
      installment: "Ou 12x de 69,90 sem juros",
    },
    {
      id: 2,
      name: "Purificador de Água IBBL Vivax Branco",
      originalPrice: "R$ 250,00",
      discount: "31% OFF",
      price: "R$169,82",
      installment: "Ou 12x de 69,90 sem juros",
    },
    {
      id: 3,
      name: "Purificador de Água IBBL Vivax Branco",
      originalPrice: "R$ 250,00",
      discount: "31% OFF",
      price: "R$169,82",
      installment: "Ou 12x de 69,90 sem juros",
    },
  ];

  return (
    <section
      ref={ref}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-wrap sm:flex-nowrap space-x-4 sm:space-x-8 border-b border-gray-200 mb-6 sm:mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 sm:pb-4 px-2 font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
              activeTab === tab.id
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
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
