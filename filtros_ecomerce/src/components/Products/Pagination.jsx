import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  
  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  
  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-0.5 xs:space-x-1 mb-4 sm:mb-6">
      <button 
        onClick={goToPrevious}
        className="p-1 xs:p-1.5 hover:bg-gray-100 rounded transition-colors"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4 text-gray-600" />
      </button>
      
      <button 
        onClick={() => onPageChange(1)}
        className={`min-w-[28px] xs:min-w-[32px] h-7 xs:h-8 text-xs xs:text-sm font-medium rounded flex items-center justify-center ${
          currentPage === 1 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        1
      </button>
      
      <button 
        onClick={() => onPageChange(2)}
        className={`min-w-[28px] xs:min-w-[32px] h-7 xs:h-8 text-xs xs:text-sm rounded flex items-center justify-center transition-colors ${
          currentPage === 2 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        2
      </button>
      
      <button 
        onClick={() => onPageChange(3)}
        className={`min-w-[28px] xs:min-w-[32px] h-7 xs:h-8 text-xs xs:text-sm rounded flex items-center justify-center transition-colors ${
          currentPage === 3 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        3
      </button>
      
      <span className="px-0.5 xs:px-1 text-gray-400 text-xs xs:text-sm">...</span>
      
      <button 
        onClick={() => onPageChange(totalPages)}
        className="min-w-[28px] xs:min-w-[32px] h-7 xs:h-8 text-gray-700 text-xs xs:text-sm hover:bg-gray-100 rounded flex items-center justify-center transition-colors"
      >
        {totalPages}
      </button>

      <button 
        onClick={goToNext}
        className="p-1 xs:p-1.5 hover:bg-gray-100 rounded transition-colors"
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 text-gray-600" />
      </button>
    </div>
  );
}
