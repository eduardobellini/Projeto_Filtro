import React, { useState } from 'react';
import { ChevronDown, Heart, Star } from 'lucide-react';

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Grace Carey',
      avatar: '👩',
      rating: 4,
      date: '24 de janeiro de 2023',
      text: 'Estava um pouco receosa de comprar um celular usado na Amazon, mas não poderia estar mais feliz com a minha compra!',
      likes: 11
    },
    {
      id: 2,
      name: 'Ronald Richards',
      avatar: '👨',
      rating: 5,
      date: '24 de janeiro de 2023',
      text: 'Este telefone tem 1 TB de armazenamento e é resistente. Além disso, todos os novos iPhones têm porta USB-C!'
    },
    {
      id: 3,
      name: 'Darcy King',
      avatar: '👩',
      rating: 4,
      date: '24 de janeiro de 2023',
      text: 'Talvez eu seja o único a dizer isso, mas a câmera está um pouco estranha. Espero que isso mude com uma atualização de software.'
    }
  ];

  const ratings = ['Excelente', 'Bom', 'Mediano', 'Ruim', 'Muito ruim'];
  const ratingValues = [100, 20, 10, 15, 5];
  const ratingCounts = [100, 11, 3, 8, 1];

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <div className="mb-8 sm:mb-12">
      <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
        Avaliações
      </h2>
      
      <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-12 mb-6 sm:mb-8">
        <div className="text-center mx-auto sm:mx-0">
          <div className="text-4xl xs:text-5xl sm:text-6xl font-bold text-gray-900 mb-2">4.8</div>
          <div className="flex space-x-1 mb-2 justify-center">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 xs:w-5 xs:h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <Star className="w-4 h-4 xs:w-5 xs:h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
          </div>
          <p className="text-xs xs:text-sm text-gray-600">125 avaliações</p>
        </div>

        <div className="flex-1 w-full space-y-2">
          {ratings.map((label, index) => (
            <div key={label} className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-xs xs:text-sm text-gray-700 w-20 xs:w-24">{label}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2">
                <div
                  className="bg-yellow-400 h-1.5 sm:h-2 rounded-full"
                  style={{ width: `${ratingValues[index]}%` }}
                ></div>
              </div>
              <span className="text-xs xs:text-sm text-gray-600 w-6 sm:w-8">{ratingCounts[index]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <input
          type="text"
          placeholder="Deixe sua avaliação"
          className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <div className="space-y-4 sm:space-y-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-4 sm:pb-6">
            <div className="flex items-start space-x-3 xs:space-x-4">
              <div className="w-10 h-10 xs:w-12 xs:h-12 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center text-xl xs:text-2xl">
                {review.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-2 gap-1">
                  <h4 className="font-semibold text-sm xs:text-base text-gray-900">{review.name}</h4>
                  <span className="text-xs xs:text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex space-x-1 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 xs:w-4 xs:h-4 ${
                        i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">{review.text}</p>
                {review.likes && (
                  <button className="mt-2 sm:mt-3 flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                    <Heart className="w-3 h-3 xs:w-4 xs:h-4" />
                    <span className="text-xs xs:text-sm">{review.likes}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 sm:mt-6 flex items-center space-x-2 text-gray-700 hover:text-gray-900 mx-auto"
      >
        <span className="text-xs xs:text-sm font-medium">
          {showAll ? 'Ver menos' : 'Ver mais'}
        </span>
        <ChevronDown className={`w-3 h-3 xs:w-4 xs:h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}
