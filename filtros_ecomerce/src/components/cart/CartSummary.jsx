import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartSummary({ subtotal, discount, shipping, total }) {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');

  const handleApplyPromo = () => {
    console.log('Aplicar código:', promoCode);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 xs:p-5 sm:p-6 lg:p-8 sticky top-4">
      <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
        Sumário de Produtos
      </h2>

      <div className="mb-6 sm:mb-8">
        <label className="block text-xs xs:text-sm text-gray-600 mb-2 sm:mb-3">
          Código de Promoção / Desconto
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Código"
            className="flex-1 px-3 xs:px-4 py-2 xs:py-2.5 text-xs xs:text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <button
            onClick={handleApplyPromo}
            className="px-4 xs:px-5 py-2 xs:py-2.5 text-xs xs:text-sm font-medium text-gray-900 border border-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Aplicar
          </button>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        <div className="flex justify-between text-sm xs:text-base">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">R${subtotal}</span>
        </div>

        <div className="flex justify-between text-sm xs:text-base">
          <span className="text-gray-600">Descontos</span>
          <span className="font-medium text-red-600">-R$ {discount}</span>
        </div>

        <div className="flex justify-between text-sm xs:text-base pb-3 sm:pb-4 border-b border-gray-200">
          <span className="text-gray-600">Taxa de entrega</span>
          <span className="font-medium text-gray-900">R${shipping}</span>
        </div>

        <div className="flex justify-between text-base xs:text-lg sm:text-xl">
          <span className="font-bold text-gray-900">Total</span>
          <span className="font-bold text-gray-900">R${total}</span>
        </div>
      </div>

      <button 
        onClick={handleCheckout}
        className="w-full bg-gray-900 text-white py-3 xs:py-3.5 sm:py-4 rounded-lg text-sm xs:text-base font-semibold hover:bg-gray-800 transition-colors"
      >
        Finalizar Compra
      </button>
    </div>
  );
}
