

 

import React, { useState } from 'react';
import styles from './ProductList.css';

import image1 from '../image/1.jpg';
import image2 from '../image/2.jpg';
import image3 from '../image/3.jpg';
import image4 from '../image/4.jpg';
import image5 from '../image/5.jpg';
import image6 from '../image/6.jpg';

const readLocalstorageForStock = (product) => {
  console.log(product.name + "  :  productname");
  if (localStorage.getItem(product.name) === null) {
    localStorage.setItem(product.name, 100);
  }
  console.log("read localstorage för stock amount!!!!");
  console.log(localStorage.getItem("product1"));

  return localStorage.getItem(product.name);
};

const ProductList = ({ products, addToCart }) => {
  const initialProducts = products.map((product) => ({ ...product, stock: readLocalstorageForStock(product) }));
  const [stock, setStock] = useState(initialProducts);

  const handleAddToCart = (product) => {
    if (product.stock > 0) {
      const updatedStock = stock.map((p) =>
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      );
      setStock(updatedStock);
      addToCart(product);
    }
  };

  const handleClearCart = () => {
    setStock(initialProducts);
  };

  return (
    <div className={styles.productList}>
      {stock.map((product) => (
        <div className={styles.productItem} key={product.id}>
          {product.id === 1 ? <img src={image1} alt={product.name} /> : null}
          {product.id === 2 ? <img src={image2} alt={product.name} /> : null}
          {product.id === 3 ? <img src={image3} alt={product.name} /> : null}
          {product.id === 4 ? <img src={image4} alt={product.name} /> : null}
          {product.id === 5 ? <img src={image5} alt={product.name} /> : null}
          {product.id === 6 ? <img src={image6} alt={product.name} /> : null}
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Pris: {product.price}</p>
          <p>Art Nr.: {product.id}</p>
          <p>Lager: {product.stock}</p>
          <button onClick={() => handleAddToCart(product)}>Lägg till i kundvagnen</button>
        </div>
      ))}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default ProductList;






