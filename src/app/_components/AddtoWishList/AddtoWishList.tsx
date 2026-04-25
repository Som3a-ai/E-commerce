"use client";

import { addToWishList } from "@/actions/wishlist.actions";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { toast } from "sonner";

export default function AddtoWishList({ id }: { id: string }) {




    
  async function wishList() {
    const res = await addToWishList(id);

    if (res.status === "success") {
      toast.success(res.message, { duration: 2000, position: "top-center" });
    } else {
      toast.error(res.message, { duration: 2000, position: "top-center" });
    }
  }

  return (
    <button
      onClick={wishList}
      className="bg-white h-8 w-8  cursor-pointer  rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500"
    >
      <CiHeart />
    </button>
  );
}
