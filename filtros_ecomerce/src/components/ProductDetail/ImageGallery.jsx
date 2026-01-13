import React from 'react';

export default function ImageGallery({ selectedImage, onSelectImage }) {
  const images = [
    { id: 0, type: 'main' },
    { id: 1, type: 'side' },
    { id: 2, type: 'info' },
    { id: 3, type: 'details' }
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <div className="flex sm:flex-col space-x-3 sm:space-x-0 sm:space-y-3 overflow-x-auto sm:overflow-visible">
        {images.map((img) => {
          const isSelected = selectedImage === img.id;
          
          return (
            <button
              key={img.id}
              onClick={() => onSelectImage(img.id)}
              className={`w-16 h-16 xs:w-20 xs:h-20 flex-shrink-0 border-2 rounded-lg flex items-center justify-center bg-gray-50 transition-all ${
                isSelected ? 'border-gray-900' : 'border-gray-200'
              }`}
            >
              <div className="w-10 h-14 xs:w-12 xs:h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded"></div>
            </button>
          );
        })}
      </div>

      <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center p-4 xs:p-6 sm:p-8 min-h-[300px] xs:min-h-[350px] sm:min-h-[400px]">
        <div className="w-48 h-64 xs:w-56 xs:h-72 sm:w-64 sm:h-80 lg:w-80 lg:h-96 bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-lg">
          <div className="text-center">
            <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 bg-white rounded-full mx-auto mb-4 sm:mb-6"></div>
            <div className="w-16 h-32 xs:w-20 xs:h-40 sm:w-24 sm:h-48 bg-gray-400 rounded-lg mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
