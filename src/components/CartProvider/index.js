import CartContext from "../../contexts/CartContext";

import { useState } from "react";


const CartProvider =({ children })=> {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product) => {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    };
  
    const removeFromCart = (productId) => {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== productId)
      );
    };
  
    const clearCart = () => {
      setCartItems([]);
    };
  
    return (
      <CartContext.Provider
        value={{ cartItems, addToCart, removeFromCart, clearCart }}
      >
        {children}
      </CartContext.Provider>
    );
  }

  export default CartProvider