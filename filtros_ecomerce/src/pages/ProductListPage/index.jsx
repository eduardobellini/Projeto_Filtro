import React, { useState } from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Breadcrumb from '../../components/Products/Breadcrumb';
import FilterSidebar from '../../components/Products/FilterSidebar';
import ProductsHeader from '../../components/Products/ProductsHeader';
import Pagination from '../../components/Products/Pagination';
import ProductGrid from '../../components/Products/ProductGrid';
import { useProductFilters } from '../../hooks/useProductFilters';
import { brands, products } from '../../data/mockData';

export default function ProductListPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  
  const {
    selectedBrands,
    searchBrand,
    setSearchBrand,
    filteredBrands,
    filteredProducts,
    toggleBrand
  } = useProductFilters(products, brands);

  const breadcrumbItems = [
    { label: 'início', link: '/' },
    { label: 'produtos', link: '#' },
    { label: 'purificadores' }
  ];

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        sticky={false}
      />
      <Breadcrumb items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          <div className="hidden lg:block">
            <FilterSidebar
              brands={filteredBrands}
              selectedBrands={selectedBrands}
              searchBrand={searchBrand}
              onSearchChange={setSearchBrand}
              onToggleBrand={toggleBrand}
            />
          </div>

          <div className="flex-1 min-w-0">
            <ProductsHeader productCount={filteredProducts.length} />
            <Pagination 
              currentPage={currentPage} 
              totalPages={12} 
              onPageChange={setCurrentPage} 
            />
            <ProductGrid 
              products={filteredProducts} 
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
