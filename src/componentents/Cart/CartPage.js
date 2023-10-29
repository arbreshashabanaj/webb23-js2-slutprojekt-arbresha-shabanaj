









import React, { useState, useEffect } from 'react';
import styles from './CartPage.css';

const CartPage = ({ cart, onCheckout, onClearCart }) => {
  const [purchased, setPurchased] = useState(false); 

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  useEffect(() => {
    if (purchased) {
      const redirect = setTimeout(() => {
        setPurchased(false);
       
        window.location.href = '/products';
      }, 2000); 
      return () => clearTimeout(redirect);
    }
  }, [purchased]);

  if (cart.length === 0) {
    return null; 
  }

  const handleClearCart = () => {
    onClearCart(); 
  };

  const handleCheckout = () => {
    setPurchased(true);
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className={styles.cartItem}>
          <p>{product.name} x {product.quantity}</p>
        </div>
      ))}
      <p className={styles.cartTotal}>Total Price: {totalPrice}</p>
      <button className={styles.clearCartButton} onClick={handleClearCart}>Clear Cart</button>
      <button className={styles.checkoutButton} onClick={handleCheckout}>
        Checkout
      </button>
      {purchased && <p>Tack för ditt köp!</p>}
    </div>
  );
};

export default CartPage;

