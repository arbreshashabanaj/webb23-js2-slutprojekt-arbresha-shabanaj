




import React from 'react';
import styles from './Navigation.css'; 

const Navigation = ({ navigate, cartItems }) => {
  return (
    <div className={styles.navbar}>
      <button onClick={() => navigate('products')}>Produkter</button>
      <button onClick={() => navigate('cart')}>Kundkorg {cartItems > 0 && <span>({cartItems})</span>}</button>
    </div>
  );
};

export default Navigation;





















