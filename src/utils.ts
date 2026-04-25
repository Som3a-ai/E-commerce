import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


export function getDiscountedPercentage(
  price: number,
  priceAfterDiscount: number,
): number {
  return Math.round(((price - priceAfterDiscount) / price) * 100);
}

export async function getMyToken(): Promise<string | null> {
  const cookie = await cookies();

  const myToken =
    cookie.get("__Secure-next-auth.session-token")?.value ||
    cookie.get("next-auth.session-token")?.value;


  const decodedToken = await decode({
    token: myToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  const token = decodedToken?.routeToken;

  console.log("myToken",token)

  return token ? token : null;
}
