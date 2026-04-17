"use server";

import { loginType, RegisterSchemaType } from "@/schemas/auth.schema";
import { cookies } from "next/headers";


export async function Register(obj: RegisterSchemaType): Promise<boolean> {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/signup`,
    {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "content-type": "application/json",
      },
    },
  );

  return res.ok;
}

export async function Login(obj: loginType): Promise<boolean> {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/signin`,
    {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "content-type": "application/json",
      },
    },
  );

  const result = await res.json();
  const cookie = await cookies();
  cookie.set("userToken", result.token);
  return res.ok;
}
