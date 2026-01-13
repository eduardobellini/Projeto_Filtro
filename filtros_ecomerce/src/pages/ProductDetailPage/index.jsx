import React, { useState } from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Breadcrumb from '../../components/Products/Breadcrumb';
import ImageGallery from '../../components/ProductDetail/ImageGallery';
import ProductInfo from '../../components/ProductDetail/ProductInfo';
import ProductDetails from '../../components/ProductDetail/ProductDetails';
import Reviews from '../../components/ProductDetail/Reviews';
import RelatedProducts from '../../components/ProductDetail/RelatedProducts';

export default function ProductDetailPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Prata');
  const [favorites, setFavorites] = useState([]);

  const breadcrumbItems = [
    { label: 'início', link: '/' },
    { label: 'produtos', link: '/produtos' },
    { label: 'purificadores', link: '#' },
    { label: 'IBBL', link: '#' },
    { label: 'Purificador de Água IBBL E-Duel Eletrônica Prata Bivolt' }
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <ImageGallery 
            selectedImage={selectedImage}
            onSelectImage={setSelectedImage}
          />

          <ProductInfo 
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />
        </div>

        <ProductDetails />
        <Reviews />
        <RelatedProducts 
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </div>
      <Footer />
    </div>
  );
}
