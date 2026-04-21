"use server";

import { CartType } from "@/api/types/cart.type";
import { getMyToken } from "@/utils";

export async function addtoCart(productId: string) {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("please login First to be able to add to your cart");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: "POST",
      headers: {
        token: token as string,
        "content-type": "application/json",
      },
      body: JSON.stringify({ productId: productId }),
    });

    const data = await res.json();

    return data;
  } catch (err) {
    return err;
  }
}

export async function getLoggedUserCart(): Promise<CartType> {
  const token = await getMyToken();

  if (!token) {
    throw new Error("please Login first");
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "GET",
    headers: {
      token: token as string,
      "content-type": "application/json",
    },
  });

  const data = await res.json();

  return data;
}

export async function updateProductQuantity(
  productId: string,
  count: number,
): Promise<CartType | null> {
  const token = await getMyToken();

  if (!token) {
    return null;
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method: "PUT",
      headers: {
        token: token as string,
        "content-type": "application/json",
      },
      body: JSON.stringify({ count: count }),
    },
  );

  const data = await res.json();

  return data;
}

export async function RemoveProductFromCart(
  productId: string,
): Promise<CartType | null> {
  const token = await getMyToken();
  if (!token) {
    return null;
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
        "content-type": "application/json",
      },
    },
  );

  const data = await res.json();

  return data;
}

export async function clearCart(): Promise<CartType | null> {
  const token = await getMyToken();
  if (!token) {
    return null;
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "DELETE",
    headers: {
      token: token as string,
      "content-type": "application/json",
    },
  });

  const data = await res.json();

  return data;
}
