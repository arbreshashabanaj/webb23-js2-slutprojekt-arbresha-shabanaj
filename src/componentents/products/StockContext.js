
// StockContext.js
import React, { createContext, useContext, useState } from 'react';

const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState(/* initial stock data */);

  const updateStock = (productId, quantity) => {
    // Hitta den aktuella produkten i lagret baserat på productId
    const updatedStock = stock.map((product) =>
      product.id === productId ? { ...product, stock: product.stock - quantity } : product
    );

    setStock(updatedStock);
  };

  return (
    <StockContext.Provider value={{ stock, updateStock }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => {
  const context = useContext(StockContext);
  if (!context) {
    throw new Error('useStock must be used within a StockProvider');
  }
  return context;
};


