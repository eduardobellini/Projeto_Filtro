import React from "react";
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function HeroSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2, once: false });

  return (
    <section 
      ref={ref}
      className={`relative bg-gradient-to-r from-indigo-900 via-blue-700 to-blue-600 text-white overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              Filtros de
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                Qualidade
              </span>
            </h1>
            <button className="mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all text-sm sm:text-base">
              Compre aqui
            </button>
          </div>

          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-96 lg:w-80 lg:h-96 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <div className="w-40 h-52 sm:w-44 sm:h-56 md:w-48 md:h-64 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="text-xs sm:text-sm opacity-50">
                  Water Purifier
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
