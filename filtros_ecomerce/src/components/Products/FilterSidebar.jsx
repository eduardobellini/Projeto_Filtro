import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function FilterSidebar({ 
  brands, 
  selectedBrands, 
  searchBrand, 
  onSearchChange, 
  onToggleBrand 
}) {
  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-white">
        <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200">
          <h3 className="text-base font-semibold text-gray-900">Marcas</h3>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>

        <div className="relative mb-3 sm:mb-4">
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchBrand}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-1.5 sm:py-2 pl-9 bg-gray-50 border-0 rounded-md text-xs sm:text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
          <Search className="absolute left-3 top-2 sm:top-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
        </div>

        <div className="space-y-2">
          {brands.map((brand) => {
            const isSelected = selectedBrands.includes(brand.name);
            
            return (
              <label
                key={brand.name}
                className="flex items-center justify-between cursor-pointer group py-1"
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleBrand(brand.name)}
                    className="w-4 h-4 text-gray-900 bg-white border-gray-300 rounded focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className={`text-sm ${isSelected ? 'font-semibold text-gray-900' : 'text-gray-700'} group-hover:text-gray-900`}>
                    {brand.name}
                  </span>
                </div>
                <span className="text-xs text-gray-400">{brand.count}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
