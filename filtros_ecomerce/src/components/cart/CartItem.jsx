import React from 'react';
import { X, Minus, Plus } from 'lucide-react';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex flex-col xs:flex-row gap-4 pb-4 sm:pb-6 border-b border-gray-200 last:border-0">
      <div className="flex gap-3 xs:gap-4 flex-1">
        <div className="w-20 h-24 xs:w-24 xs:h-28 sm:w-28 sm:h-32 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
          <div className="w-12 h-16 xs:w-14 xs:h-20 sm:w-16 sm:h-24 bg-gradient-to-b from-gray-200 to-gray-300 rounded"></div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between gap-2 mb-2">
            <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 line-clamp-2">
              {item.name}
            </h3>
            <button
              onClick={() => onRemove(item.id)}
              className="p-1 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4 xs:w-5 xs:h-5 text-gray-400" />
            </button>
          </div>

          <p className="text-[10px] xs:text-xs text-gray-500 mb-3 sm:mb-4">{item.code}</p>

          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3">
            <div className="flex items-center border border-gray-200 rounded-lg w-fit">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="p-2 hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-3 h-3 xs:w-4 xs:h-4 text-gray-600" />
              </button>
              <span className="px-3 xs:px-4 text-sm xs:text-base font-medium text-gray-900 min-w-[32px] xs:min-w-[40px] text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="p-2 hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-3 h-3 xs:w-4 xs:h-4 text-gray-600" />
              </button>
            </div>

            <div className="text-base xs:text-lg sm:text-xl font-bold text-gray-900">
              R$ {item.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
