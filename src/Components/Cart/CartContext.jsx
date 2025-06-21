import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getPrice = (title, size) => {
    const basePrices = {
      "Nike Air Max": 100,
      "Nike ZoomX": 120,
      "Nike Dunk Low": 90,
    };

    const sizeUpcharge = {
      "7": 0,
      "8": 5,
      "9": 10,
      "10": 15,
      "11": 20,
      "12": 25,
    };

    const base = basePrices[title] || 80;
    const extra = sizeUpcharge[size] || 0;

    return base + extra;
  };

  const addToCart = (item) => {
    const price = getPrice(item.title, item.size);
    setCartItems((prev) => [...prev, { ...item, price }]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((items) =>
      items.filter(
        (item) =>
          item.title !== itemToRemove.title || item.size !== itemToRemove.size
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
