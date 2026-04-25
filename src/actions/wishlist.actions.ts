"use server";

import { WishListType } from "@/api/types/wishlist.type";
import { getMyToken } from "@/utils";

export async function addToWishList(id: string) {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("please login First to be able to add to your cart");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      method: "POST",
      headers: {
        token: token as string,
        "content-type": "application/json",
      },
      body: JSON.stringify({ productId: id }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

export async function getWishList(): Promise<WishListType | undefined> {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("Please Login First");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      headers: {
        token: token as string,
        "content-type": "application/json",
      },
      method : "GET"
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function removeItem(id: string) : Promise<WishListType | undefined> {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("Please try again later");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
      headers: {
        token: token as string,
        "content-type": "application/json",
      },
      method : "DELETE"
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
