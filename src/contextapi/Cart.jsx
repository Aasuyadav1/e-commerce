import React, { useState } from "react";
import { createContext } from "react";

export const productContext = createContext();
function Cart({ children }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <productContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </productContext.Provider>
  );
}

export default Cart;
