import React from 'react';
import { Heart } from 'lucide-react';

export default function ProductCard({ product, favorites, setFavorites }) {
  const toggleFavorite = () => {
    setFavorites(prev => 
      prev.includes(product.id) 
        ? prev.filter(id => id !== product.id)
        : [...prev, product.id]
    );
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      
      <div className="relative bg-gray-50 h-56 sm:h-60 md:h-64 flex items-center justify-center">
        <div className="w-32 h-48 sm:w-36 sm:h-52 md:w-40 md:h-56 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <span className="text-xs text-gray-400">IBBL</span>
            </div>
            <div className="w-12 h-24 sm:w-14 sm:h-28 md:w-16 md:h-32 bg-blue-100 rounded-lg mx-auto"></div>
          </div>
        </div>
        
        
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            className={`h-4 w-4 sm:h-5 sm:w-5 ${
              favorites.includes(product.id)
                ? 'fill-red-500 text-red-500'
                : 'text-gray-400'
            }`}
          />
        </button>
      </div>

      
      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2 sm:mb-3 line-clamp-2">
          {product.name}
        </h3>

        
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm text-gray-500 line-through">
              {product.originalPrice}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-green-600">
              {product.discount}
            </span>
          </div>

          <div className="text-xl sm:text-2xl font-bold text-gray-900">
            {product.price} <span className="text-xs sm:text-sm font-normal text-gray-600">No PIX</span>
          </div>

          <div className="text-xs sm:text-sm text-gray-600">
            {product.installment}
          </div>
        </div>

        
        <button className="mt-3 sm:mt-4 w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors active:scale-95">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
