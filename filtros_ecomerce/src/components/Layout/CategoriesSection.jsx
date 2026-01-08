import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function CategoriesSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2, once: false });

  const categories = [
    { name: "Purificadores", color: "bg-gray-800" },
    { name: "Bebedouros", color: "bg-blue-900" },
    { name: "Filtros & Refis", color: "bg-orange-100" },
    { name: "Corporativos", color: "bg-gray-100" },
  ];

  return (
    <section 
      ref={ref}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          Explore nossas categorias
        </h2>
        <div className="flex space-x-2">
          <button className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative h-48 sm:h-56 md:h-64 lg:h-64 xl:h-72 rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
          >
            <div className={`absolute inset-0 ${category.color}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-4 sm:left-5 md:left-6">
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
