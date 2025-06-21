import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => setCartItems((prev) => [...prev, item]);

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
