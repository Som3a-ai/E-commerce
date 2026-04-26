"use client";

import React, { useEffect, useState } from "react";
import Title from "../_components/Title/Title";
import { FaHeart } from "react-icons/fa";
import WishlistCard from "../_components/WishlistCard/WishlistCard";
import { getWishList } from "@/actions/wishlist.actions";
import { FaArrowRightLong } from "react-icons/fa6";
import { WishListItem } from "@/api/types/wishlist.type";
import Loading from "../_components/Loading/Loading";
import Link from "next/link";

export default function page() {
  const [wishlistItems, setwishlistItems] = useState<WishListItem[] | null>(
    null,
  );
  const [isLoading, setisLoading] = useState<boolean>(true);

  async function getUserWishlist() {
    const res = await getWishList();

    if (res?.status === "success") {
      setwishlistItems(res.data);
      setisLoading(false);
    }
  }

  function removeItemFromWishList(id: string) {
    const newWishList: WishListItem[] | undefined = wishlistItems?.filter(
      (item) => {
        return item.id != id;
      },
    );

    setwishlistItems(newWishList!);
  }

  useEffect(() => {
    getUserWishlist();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {(wishlistItems?.length ?? 0) > 0 && (
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

              {wishlistItems?.map((item) => {
                return (
                  <WishlistCard
                    key={item.id}
                    item={item}
                    deleteItem={removeItemFromWishList}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}

      {wishlistItems?.length === 0 && (
        <>
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-sm mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-3xl text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Your wishlist is empty
              </h2>

              <p className="text-gray-500 text-sm mb-6">
                Browse products and save your favorites here. Sign in to sync
                your wishlist across devices.
              </p>

              <Link
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                href="/"
              >
                Browse Products
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
