import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //const addToCart = (product) => setCart([...cart, product]);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // ✅ Ensure cart updates properly
  };
  const removeFromCart = (id) => setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
