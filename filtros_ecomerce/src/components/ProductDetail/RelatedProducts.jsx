import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RelatedProducts({ favorites, onToggleFavorite }) {
  const products = [
    { id: 1, name: 'Purificador de Água IBBL Vivax Branco', price: 'R$169,82', originalPrice: 'R$ 250,00', discount: '31% OFF' },
    { id: 2, name: 'Purificador de Água IBBL Vivax Branco', price: 'R$169,82', originalPrice: 'R$ 250,00', discount: '31% OFF' },
    { id: 3, name: 'Purificador de Água IBBL Vivax Branco', price: 'R$169,82', originalPrice: 'R$ 250,00', discount: '31% OFF' }
  ];

  return (
    <div>
      <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
        Produtos Relacionados
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
        {products.map((product) => {
          const isFavorite = favorites.includes(product.id);
          
          return (
            <Link key={product.id} to={`/produto/${product.id}`} className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <div className="relative bg-gray-50 h-48 xs:h-56 sm:h-64 flex items-center justify-center p-4 sm:p-6">
                <div className="w-24 h-36 xs:w-28 xs:h-40 sm:w-32 sm:h-48 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl"></div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onToggleFavorite(product.id);
                  }}
                  className={`absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white rounded-full transition-colors ${
                    isFavorite ? 'text-red-500' : 'text-gray-400'
                  }`}
                >
                  <Heart className={`h-4 w-4 sm:h-5 sm:w-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>
              <div className="p-3 xs:p-4 sm:p-5">
                <h3 className="text-xs xs:text-sm text-gray-900 mb-2 sm:mb-3 line-clamp-2">{product.name}</h3>
                <div className="flex items-center space-x-1.5 sm:space-x-2 mb-1">
                  <span className="text-xs sm:text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="text-xs sm:text-sm font-semibold text-green-600">{product.discount}</span>
                </div>
                <div className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {product.price} <span className="text-xs sm:text-sm font-normal text-gray-600">No PIX</span>
                </div>
                <p className="text-[10px] xs:text-xs text-gray-600">Ou 12x de 69,90 sem juros</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
