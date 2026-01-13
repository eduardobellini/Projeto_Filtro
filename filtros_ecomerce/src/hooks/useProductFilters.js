import { useState } from 'react';

export const useProductFilters = (products, brands) => {
  const [selectedBrands, setSelectedBrands] = useState(['Levoit']);
  const [searchBrand, setSearchBrand] = useState('');

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchBrand.toLowerCase())
  );

  const filteredProducts = products.filter(product =>
    selectedBrands.length === 0 || selectedBrands.includes(product.brand)
  );

  const toggleBrand = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  return {
    selectedBrands,
    searchBrand,
    setSearchBrand,
    filteredBrands,
    filteredProducts,
    toggleBrand
  };
};
