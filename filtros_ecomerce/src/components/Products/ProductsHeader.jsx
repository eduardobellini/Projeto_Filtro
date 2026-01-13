import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductsHeader({ productCount }) {
  return (
    <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-0 mb-4 sm:mb-6 lg:mb-8">
      <div className="text-xs sm:text-sm text-gray-700">
        Produtos Encontrados: <span className="font-semibold text-gray-900">{productCount}</span>
      </div>
      <div className="relative w-full xs:w-auto">
        <select className="appearance-none bg-white text-xs sm:text-sm text-gray-700 py-1.5 sm:py-2 pl-2 sm:pl-3 pr-7 sm:pr-8 focus:outline-none cursor-pointer w-full xs:w-auto border border-gray-200 rounded">
          <option>Preço: Do maior para o menor</option>
          <option>Preço: Do menor para o maior</option>
          <option>Nome: A-Z</option>
          <option>Nome: Z-A</option>
        </select>
        <ChevronDown className="absolute right-2 top-2 sm:top-3 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}
