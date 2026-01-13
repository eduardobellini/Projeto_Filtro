import React, { useState } from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';

export default function CartPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Purificador de Água IBBL E-Due Eletrônico Prata Bivolt',
      code: '#25139520913984',
      price: 250,
      quantity: 1,
      image: ''
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = 50;
  const shipping = 29;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        sticky={false}
      />
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 xs:p-5 sm:p-6 lg:p-8">
              <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Meu Carrinho
              </h1>

              {cartItems.length === 0 ? (
                <div className="text-center py-12 sm:py-16">
                  <p className="text-sm xs:text-base text-gray-500">Seu carrinho está vazio</p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <CartSummary
              subtotal={subtotal}
              discount={discount}
              shipping={shipping}
              total={total}
            />
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
