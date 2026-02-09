"use client";

import { ProducrI } from "@/interfaces/product";
import { WishlistI } from "@/interfaces/wishlist";

import { createContext, ReactNode, useEffect, useState } from "react";

export const WishlistContext = createContext <{
  wishlisData : WishlistI | null ,
  setWishlisData : (value: WishlistI | null) => void,
  getUserWishlist : () => void

}>({wishlisData : null , 
    setWishlisData : ()=>{},
    getUserWishlist : () => {}
});

export default function WishlistContextProvider({ children }: { children: ReactNode }) {

  const [wishlisData, setWishlisData] = useState<WishlistI | null>(null);
 
 
  async function getUserWishlist() {
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        headers:{
            token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzQ2YmZmOTdiOTE0NGY2MWJmMDE0YSIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU3NzAzMTY4LCJleHAiOjE3NjU0NzkxNjh9.6FkGx4y1iFW4gt9h7MJQSEe52AqiFeo1K2zXkCQykM8"
        }
       });
    const data : WishlistI = await response.json();
    console.log(data);
    setWishlisData(data);
  
    
    
  }
  
 useEffect(()=>{getUserWishlist()},[]);
  return (
    <>
      <WishlistContext.Provider value={{wishlisData ,setWishlisData , getUserWishlist}}>
        {children}
        </WishlistContext.Provider>
    </>
  );
}


