import React from "react";
import { Target, Eye, Sparkles, Droplets, Award } from "lucide-react";
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function MissionVisionSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2, once: false });
  const [missionRef, missionVisible] = useScrollAnimation({ threshold: 0.2, once: false });
  const [visionRef, visionVisible] = useScrollAnimation({ threshold: 0.2, once: false });

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Nossos Princípios
            </span>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Missão, Visão e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Valores
            </span>
          </h2>
        </div>

        <div 
          ref={missionRef}
          className={`mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 delay-200 ${
            missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 shadow-xl">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Missão
                </h3>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Fornecer{" "}
                <span className="font-semibold text-blue-600">
                  soluções inovadoras em filtração
                </span>{" "}
                que protegem a saúde e o bem-estar das pessoas, garantindo água
                pura, ar limpo e sistemas eficientes.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="flex items-center space-x-2 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <Droplets className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  <span className="text-xs sm:text-sm font-medium text-blue-900">
                    Água Pura
                  </span>
                </span>
                <span className="flex items-center space-x-2 bg-indigo-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
                  <span className="text-xs sm:text-sm font-medium text-indigo-900">
                    Inovação
                  </span>
                </span>
                <span className="flex items-center space-x-2 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  <span className="text-xs sm:text-sm font-medium text-blue-900">
                    Qualidade
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={visionRef}
          className={`mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 delay-200 ${
            visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="bg-gradient-to-br from-indigo-500 via-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 shadow-xl">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl shadow-lg">
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Visão
                </h3>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Ser reconhecida como a{" "}
                <span className="font-semibold text-indigo-600">
                  empresa líder em soluções de filtração no Brasil
                </span>{" "}
                até 2030, expandindo nossa presença internacional.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "Líder no mercado brasileiro até 2030",
                  "Expansão internacional",
                  "Referência em sustentabilidade",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:from-blue-700 hover:to-indigo-700 transition-all active:scale-95 shadow-xl">
            Conheça Nossos Produtos
          </button>
        </div>
      </div>
    </section>
  );
}
