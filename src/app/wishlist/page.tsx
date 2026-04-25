"use client"



import React, { useEffect, useState } from "react";
import Title from "../_components/Title/Title";
import { FaHeart } from "react-icons/fa";
import WishlistCard from "../_components/WishlistCard/WishlistCard";
import { getWishList } from "@/actions/wishlist.actions";

import { WishListItem} from "@/api/types/wishlist.type";
import Loading from "../_components/Loading/Loading";


export default function page() {


  const [wishlistItems,setwishlistItems] = useState<WishListItem[] | null>(null);
  const [isLoading , setisLoading] = useState<boolean>(true);


async function getUserWishlist(){



  const res = await getWishList();

    if (res?.status === "success") {
      setwishlistItems(res.data);
      setisLoading(false)
    }

  


}


function removeItemFromWishList(id : string){

  const newWishList : WishListItem[] | undefined = wishlistItems?.filter((item)=>{
    return item.id != id;
  })

  setwishlistItems(newWishList!)

}

useEffect(()=>{
  getUserWishlist();
},[])



if(isLoading){

    return <Loading/>
  }



  return (
    <>
      <Title
        bgColor="#fffff"
        breadCrumbs="Wishlist"
        heading="My Wishlist"
        textColor="#00000"
        iconBg="bg-red-50"
        icon={<FaHeart className="text-red-600 text-4xl" />}
        subHeading="Your Wishlist"
      />



         <div className="container mx-auto px-4 py-8">
             <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">

                          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">

                            <div className="col-span-6">Product</div>
                            <div className="col-span-2 text-center">Price</div>
                            <div className="col-span-2 text-center">Status</div>
                            <div className="col-span-2 text-center">Actions</div>
                          </div>

                       

                        {wishlistItems?.map((item)=>{

                          return <WishlistCard key={item.id} item={item} deleteItem={removeItemFromWishList}/>

                        })}

             </div>


         </div>




    </>
  );
}
