import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProductItem({ product, isFavorite, onToggleFavorite }) {
  return (
    <Link to={`/produto/${product.id}`} className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative bg-gray-50 h-48 xs:h-52 sm:h-56 md:h-64 flex items-center justify-center p-4 sm:p-6">
        <div className="w-24 h-36 xs:w-28 xs:h-40 sm:w-32 sm:h-48 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-sm">
          <div className="text-center">
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-white rounded-full mx-auto mb-2 sm:mb-3 shadow-sm"></div>
            <div className="w-10 h-20 xs:w-12 xs:h-24 sm:w-14 sm:h-28 bg-blue-50 rounded-lg mx-auto"></div>
          </div>
        </div>
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          className={`absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white rounded-full hover:bg-gray-50 transition-colors ${
            isFavorite ? 'text-red-500' : 'text-gray-400'
          }`}
        >
          <Heart 
            className={`h-4 w-4 sm:h-5 sm:w-5 ${isFavorite ? 'fill-current' : ''}`}
          />
        </button>
      </div>

      <div className="p-3 xs:p-4 sm:p-5">
        <h3 className="text-xs xs:text-sm text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-relaxed">
          {product.name}
        </h3>

        <div className="space-y-0.5 sm:space-y-1">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span className="text-xs sm:text-sm text-gray-500 line-through">
              {product.originalPrice}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-green-600">
              {product.discount}
            </span>
          </div>

          <div className="text-base xs:text-lg sm:text-xl font-bold text-gray-900">
            {product.price} <span className="text-xs sm:text-sm font-normal text-gray-600">No PIX</span>
          </div>

          <div className="text-[10px] xs:text-xs text-gray-600">
            {product.installment}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductGrid({ products, favorites = [], onToggleFavorite }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 lg:gap-6">
      {products.map((product) => (
        <ProductItem 
          key={product.id} 
          product={product} 
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
