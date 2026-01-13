import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductDetails() {
  const [showAll, setShowAll] = useState(false);

  const specs = [
    { label: 'Marca', value: 'IBBL' },
    { label: 'Modelo', value: 'FR600 Speciale' },
    { label: 'Cor', value: 'Prata' },
    { label: 'Capacidade Interna Água do Aparelho', value: '2,1L' },
    { label: 'Capacidade Água Gelada', value: '1,24 L por hora' }
  ];

  const displayedSpecs = showAll ? specs : specs.slice(0, 5);

  return (
    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 xs:p-6 sm:p-8 mb-8 sm:mb-12">
      <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
        Detalhes do Produto
      </h2>
      
      <p className="text-sm xs:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
        Só o FR600 Speciale tem a capacidade de uso que você precisa. Ele atende grande quantidade de pessoas e apresenta baixo custo de energia. Possui refil girou frocos, nanotecnologia contra micro-organismos e está disponível nas cores branca, prata e preto. O purificador de água FR600 Speciale é a opção perfeita para grandes famílias e empresas.
      </p>

      <h3 className="text-base xs:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
        Informações técnicas
      </h3>
      
      <div className="space-y-2 sm:space-y-3">
        {displayedSpecs.map((spec, index) => (
          <div key={index} className="flex justify-between py-2 sm:py-3 border-b border-gray-200">
            <span className="text-xs xs:text-sm sm:text-base text-gray-700">{spec.label}</span>
            <span className="text-xs xs:text-sm sm:text-base font-medium text-gray-900">{spec.value}</span>
          </div>
        ))}
      </div>

      {specs.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 sm:mt-6 flex items-center space-x-2 text-gray-700 hover:text-gray-900 mx-auto"
        >
          <span className="text-xs xs:text-sm font-medium">
            {showAll ? 'Ver menos' : 'Ver mais'}
          </span>
          <ChevronDown className={`w-3 h-3 xs:w-4 xs:h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
        </button>
      )}
    </div>
  );
}
