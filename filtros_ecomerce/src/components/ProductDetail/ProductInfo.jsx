import React from 'react';
import { Package, Store, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProductInfo({ selectedColor, onSelectColor }) {
  const colors = ['Prata', 'Branco'];
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate('/carrinho');
  };

  return (
    <div>
      <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
        Purificador de Água IBBL E-Due Eletrônico Prata Bivolt
      </h1>

      <div className="mb-4 sm:mb-6">
        <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
          <span className="text-lg xs:text-xl sm:text-2xl text-gray-500 line-through">R$ 250,00</span>
          <span className="text-base xs:text-lg sm:text-xl font-bold text-green-600">31% OFF</span>
        </div>
        <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
          R$169,82 <span className="text-sm xs:text-base sm:text-lg font-normal text-gray-600">no PIX</span>
        </div>
        <p className="text-xs xs:text-sm text-gray-600">Ou 12x de 69,90 sem juros</p>
      </div>

      <div className="mb-6 sm:mb-8">
        <label className="block text-xs xs:text-sm text-gray-700 mb-2 sm:mb-3">
          Cor: <span className="font-medium">{selectedColor}</span>
        </label>
        <div className="flex space-x-2 sm:space-x-3">
          {colors.map((color) => {
            const isSelected = selectedColor === color;
            
            return (
              <button
                key={color}
                onClick={() => onSelectColor(color)}
                className={`w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-lg border-2 transition-all ${
                  isSelected ? 'border-gray-900' : 'border-gray-200'
                }`}
              >
                <div className={`w-full h-full rounded-lg ${
                  color === 'Prata' ? 'bg-gradient-to-b from-gray-300 to-gray-400' : 'bg-white'
                }`}></div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-3 sm:space-x-4 mb-6 sm:mb-8">
        <button className="flex-1 bg-white border-2 border-gray-900 text-gray-900 py-3 xs:py-3.5 sm:py-4 rounded-lg text-sm xs:text-base font-semibold hover:bg-gray-50 transition-colors">
          Adicionar ao carrinho
        </button>
        <button 
          onClick={handleBuy}
          className="flex-1 bg-gray-900 text-white py-3 xs:py-3.5 sm:py-4 rounded-lg text-sm xs:text-base font-semibold hover:bg-gray-800 transition-colors"
        >
          Comprar
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 xs:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
        <div className="text-center">
          <Package className="w-5 h-5 xs:w-6 xs:h-6 text-gray-400 mx-auto mb-1 sm:mb-2" />
          <p className="text-[10px] xs:text-xs text-gray-600">Entrega grátis</p>
          <p className="text-xs xs:text-sm font-medium text-gray-900">1-2 dias</p>
        </div>
        <div className="text-center">
          <Store className="w-5 h-5 xs:w-6 xs:h-6 text-gray-400 mx-auto mb-1 sm:mb-2" />
          <p className="text-[10px] xs:text-xs text-gray-600">Em estoque</p>
          <p className="text-xs xs:text-sm font-medium text-gray-900">Hoje</p>
        </div>
        <div className="text-center">
          <Shield className="w-5 h-5 xs:w-6 xs:h-6 text-gray-400 mx-auto mb-1 sm:mb-2" />
          <p className="text-[10px] xs:text-xs text-gray-600">Garantia</p>
          <p className="text-xs xs:text-sm font-medium text-gray-900">1 ano</p>
        </div>
      </div>
    </div>
  );
}
