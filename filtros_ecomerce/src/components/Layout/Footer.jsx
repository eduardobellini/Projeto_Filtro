import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: false });

  const handleSubmit = () => {
    if (email) {
      console.log("Email cadastrado:", email);
      setEmail("");
    }
  };

  const services = [
    "Programa de bônus",
    "Crédito e pagamento",
    "Contratos de serviço",
    "Formas de pagamento",
    "Instalação",
  ];

  const support = [
    "Encontre um pedido",
    "Condições de entrega",
    "Troca e devolução",
    "Garantia",
    "Perguntas frequentes",
    "Termos de uso",
  ];

  return (
    <footer
      ref={ref}
      className={`bg-gradient-to-br from-blue-400 via-blue-300 to-blue-400 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="mb-4 sm:mb-6">
              <div className="w-40 h-14 sm:w-48 sm:h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                <span className="text-base sm:text-lg font-bold text-gray-700">
                  CAPITAL FILTROS
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Na Capital Filtros, oferecemos filtros de água de alta qualidade
              para garantir pureza, sabor e saúde.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:contato@capitalfiltros.com.br"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">
                  contato@capitalfiltros.com.br
                </span>
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">(11) 99999-9999</span>
              </a>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  São Paulo, SP - Brasil
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Serviços
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Assistência ao cliente
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {support.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Newsletter
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Inscreva-se para receber ofertas exclusivas e novidades
            </p>
            <div className="mb-4 sm:mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-l-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 text-xs sm:text-sm"
                />
                <button
                  onClick={handleSubmit}
                  className="px-3 sm:px-4 bg-gray-900 text-white rounded-r-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            <div>
              <p className="text-gray-900 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                Siga-nos
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all shadow-sm"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all shadow-sm"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-blue-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-gray-700 text-xs sm:text-sm text-center md:text-left">
              © 2025 Capital Filtros. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm transition-colors"
              >
                Termos de Serviço
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
