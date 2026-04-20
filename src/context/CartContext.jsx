"use client";

import { getLoggedUserCart } from "@/actions/cart.actions";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {


  const [numOfCartItems, setnumOfCartItems] = useState(0);

  async function getUserCart() {
    try {
      const res = await getLoggedUserCart();

      let sum = 0;

      res.data.products.forEach((product) => {
        sum += product.count;
      });
      setnumOfCartItems(sum);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  return (
    <CartContext.Provider value={{ numOfCartItems , setnumOfCartItems , getUserCart }}>
      {children}
    </CartContext.Provider>
  );
}
