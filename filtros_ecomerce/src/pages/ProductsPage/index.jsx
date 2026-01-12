import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../../components/Layout/Header";
import ProductCard from "../../components/Products/ProductCard";

export default function ProductsPage() {
  const { categoria } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState(["Levoit"]);
  const [sortBy, setSortBy] = useState("price-desc");
  const [favorites, setFavorites] = useState([]);

  const selectedCategory = categoria?.toLowerCase() || "";

  const brands = [
    { name: "Levoit", count: 110 },
    { name: "Coway", count: 125 },
    { name: "Blueair", count: 68 },
    { name: "Dyson", count: 44 },
    { name: "Philips", count: 36 },
    { name: "Honeywell", count: 10 },
    { name: "Winix", count: 34 },
    { name: "Alen", count: 22 },
    { name: "Sharp", count: 35 },
  ];

  const allProducts = [
    {
      id: 1,
      name: "Purificador de Água IBBL Vivax Branco",
      image: "/product1.jpg",
      originalPrice: "R$ 250,00",
      discount: "31% OFF",
      price: "R$169,82",
      installment: "Ou 12x de 69,90 sem juros",
      category: "purificadores",
    },
    {
      id: 2,
      name: "Purificador de Água IBBL E-Due Eletrônico Prata Bivolt",
      image: "/product2.jpg",
      originalPrice: "R$ 250,00",
      discount: "31% OFF",
      price: "R$169,82",
      installment: "Ou 12x de 69,90 sem juros",
      category: "purificadores",
    },
    {
      id: 3,
      name: "Bebedouro Elétrico Premium",
      image: "/product3.jpg",
      originalPrice: "R$ 450,00",
      discount: "25% OFF",
      price: "R$337,50",
      installment: "Ou 12x de 28,13 sem juros",
      category: "bebedouros",
    },
    {
      id: 4,
      name: "Filtro de Água Refil IBBL",
      image: "/product4.jpg",
      originalPrice: "R$ 80,00",
      discount: "20% OFF",
      price: "R$64,00",
      installment: "Ou 3x de 21,33 sem juros",
      category: "filtros-refis",
    },
    {
      id: 5,
      name: "Sistema de Filtragem Corporativo",
      image: "/product5.jpg",
      originalPrice: "R$ 1200,00",
      discount: "15% OFF",
      price: "R$1020,00",
      installment: "Ou 12x de 85,00 sem juros",
      category: "corporativos",
    },
  ];

  const products = selectedCategory
    ? allProducts.filter((p) => p.category === selectedCategory)
    : allProducts;

  const categoryNames = {
    purificadores: "Purificadores",
    bebedouros: "Bebedouros",
    "filtros-refis": "Filtros & Refis",
    corporativos: "Corporativos",
  };

  const toggleBrand = (brandName) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((b) => b !== brandName)
        : [...prev, brandName]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              início
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/produtos" className="text-gray-500 hover:text-gray-700">
              produtos
            </Link>
            {selectedCategory && (
              <>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-gray-900 font-medium">
                  {categoryNames[selectedCategory] || selectedCategory}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Marcas</h3>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Pesquisar"
                  className="w-full px-4 py-2 pl-10 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {brands.map((brand) => (
                  <label
                    key={brand.name}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand.name)}
                      onChange={() => toggleBrand(brand.name)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="flex-1 text-gray-700 text-sm">
                      {brand.name}
                    </span>
                    <span className="text-gray-400 text-sm">{brand.count}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-700">
                Produtos Encontrados:{" "}
                <span className="font-bold text-gray-900">
                  {products.length}
                </span>
                {selectedCategory && (
                  <span className="ml-2 text-sm text-gray-500">
                    em {categoryNames[selectedCategory] || selectedCategory}
                  </span>
                )}
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="price-desc">
                    Preço: Do maior para o menor
                  </option>
                  <option value="price-asc">
                    Preço: Do menor para o maior
                  </option>
                  <option value="name-asc">Nome: A-Z</option>
                  <option value="name-desc">Nome: Z-A</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Nenhum produto encontrado nesta categoria.
                  </p>
                  <Link
                    to="/produtos"
                    className="mt-4 inline-block text-blue-600 hover:text-blue-700 underline"
                  >
                    Ver todos os produtos
                  </Link>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center space-x-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <button className="w-10 h-10 bg-blue-600 text-white rounded-lg font-medium">
                1
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                3
              </button>
              <span className="px-2 text-gray-500">...</span>
              <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                12
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
