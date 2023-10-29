import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './componentents/Navigation/Navigation'; 
import ProductList from './componentents/products/ProductList'; 
import CartPage from './componentents/Cart/CartPage'; 
import products from './componentents/product/products'; 

function App() {
  const [productList, setProducts] = useState(products);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('products');

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);

    const updatedProducts = productList.map((p) =>
      p.id === product.id ? { ...p, stock: p.stock - 1 } : p
    );
    setProducts(updatedProducts);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    const updatedProducts = productList.map((p) =>
      p.id === productId ? { ...p, stock: p.stock + 1 } : p
    );
    setProducts(updatedProducts);
  };

  const clearCart = () => {
    setCart([]);
    setCurrentPage('products'); 
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (cart.length === 0) {
      setCurrentPage('products'); 
    }
  }, [cart]);

  return (
    <div className="App">
      <Navigation cartItems={cart.length} navigate={navigateToPage} />
      {currentPage === 'products' ? (
        <ProductList products={productList} addToCart={addToCart} />
      ) : (
        <CartPage cart={cart} removeFromCart={removeFromCart} onClearCart={clearCart} />
      )}
    </div>
  );
}

export default App;






























































 



















