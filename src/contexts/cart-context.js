import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCart = (item) => {
    const alreadyexist = carts.findIndex((i) => i.id === item.id);
    if (alreadyexist === -1) {
      setCarts((prev) => [...prev, item]);
    } else {
      setCarts((prev) =>
        prev.map((e, index) =>
          index === alreadyexist ? { ...e, quantity: e.quantity + 1 } : e
        )
      );
    }
  };

  const cartCount = carts.length;
  const totalPrice = carts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <CartContext.Provider value={{ carts, addToCart, cartCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
