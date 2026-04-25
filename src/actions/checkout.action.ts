"use server";

import { CheckOutType } from "@/schemas/checkout.schema";
import { getMyToken } from "@/utils";

 async function onlinePayment(cartId: string, formValues: CheckOutType) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("login first");
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL!}`,
    {
      method: "POST",
      headers: {
        token: token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        shippingAddress: formValues,
      }),
    },
  );

  const data = await res.json();

  console.log("payment res", data);
  return data;
}
async function cashPayment(cartId: string, formValues: CheckOutType) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("login first");
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
    {
      method: "POST",
      headers: {
        token: token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        shippingAddress: formValues,
      }),
    },
  );

  const data = await res.json();
  console.log("cash pay",data)
  return data;
}
export async function pay(
  cartId: string,
  formValues: CheckOutType,
  isVisa: boolean,
) {
  if (isVisa) {
    const res = await onlinePayment(cartId, formValues);

    return res

  } else {
    const response = await cashPayment(cartId, formValues);

    return response

   
  }
}
