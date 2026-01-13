import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import logo from "../../assets/capital filtros logo.png";

export default function Header({ mobileMenuOpen, setMobileMenuOpen, sticky = false }) {
  return (
    <header className={`bg-white border-b border-gray-200 ${sticky ? 'sticky top-0' : ''} z-50`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex items-center flex-shrink-0">
            <img 
              src={logo} 
              alt="Capital Filtros" 
              className="w-28 h-9 sm:w-32 sm:h-10 md:w-40 md:h-12 object-contain"
            />
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Procurar"
                className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <Link
              to="/"
              className="text-sm xl:text-base text-gray-900 font-medium hover:text-blue-600 transition-colors"
            >
              Início
            </Link>
            <Link
              to="/produtos"
              className="text-sm xl:text-base text-gray-500 hover:text-blue-600 transition-colors"
            >
              Produtos
            </Link>
            <a
              href="#"
              className="text-sm xl:text-base text-gray-500 hover:text-blue-600 transition-colors"
            >
              Sobre nós
            </a>
            <a
              href="#"
              className="text-sm xl:text-base text-gray-500 hover:text-blue-600 transition-colors"
            >
              Contate-nos
            </a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <Link to="/carrinho" className="text-gray-600 hover:text-blue-600 p-1 sm:p-2">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <button className="text-gray-600 hover:text-blue-600 p-1 sm:p-2">
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              className="lg:hidden text-gray-600 hover:text-blue-600 p-1 sm:p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Procurar"
              className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-900 font-medium hover:text-blue-600 py-2"
              >
                Início
              </Link>
              <Link to="/produtos" className="text-gray-500 hover:text-blue-600 py-2">
                Produtos
              </Link>
              <a href="#" className="text-gray-500 hover:text-blue-600 py-2">
                Sobre nós
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 py-2">
                Contate-nos
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
