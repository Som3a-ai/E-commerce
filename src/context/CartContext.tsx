"use client";

import { getLoggedUserCart } from "@/actions/cart.actions";
import { getWishList } from "@/actions/wishlist.actions";
import { createContext, useEffect, useState } from "react";
import {CartContextType} from "../api/types/cartContext.type"

export const CartContext = createContext<CartContextType>({
  numOfCartItems: 0,
  setnumOfCartItems: () => {},
  getUserCart: () => {},
  numOfWishlistItems: 0,
  setnumOfWishlistItems: () => {},
  getUserWishlist: ()=> {}
});

export default function CartContextProvider({ children } : {children : React.ReactNode}) {


  const [numOfCartItems, setnumOfCartItems] = useState(0);
  const [numOfWishlistItems, setnumOfWishlistItems] = useState(0);

  

  async function getUserCart() {
    try {
      const res = await getLoggedUserCart();

      let sum = 0;

      res.data.products.forEach((product) => {
        sum += product.count;
      });
      setnumOfCartItems(sum);
    } catch (err : unknown) {
      if(err instanceof Error){
        console.log(err.message)
      }
    }
  }

  async function getUserWishlist(){

      try{

        const res = await getWishList()

        if(res){

          setnumOfWishlistItems(res.count);
        }


      }catch(err){

        console.log(err)

      }


  }

  useEffect(() => {
    getUserCart();
    getUserWishlist();
  }, []);

  return (
    <CartContext.Provider value={{ numOfCartItems , setnumOfCartItems , getUserCart, numOfWishlistItems , setnumOfWishlistItems , getUserWishlist }}>
      {children}
    </CartContext.Provider>
  );
}
