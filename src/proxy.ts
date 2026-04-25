import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";



export async function proxy(req: NextRequest) {


  // const protectedRoutes = ["/cart", "/wishlist", "/checkout", "/allorders"];
  // const authRoutes = ["/login", "/register"];


  // const mypath = request.nextUrl.pathname;

  // const myToken = await getToken({
  //   req: request,
  //   secret: process.env.NEXTAUTH_SECRET,
  //   secureCookie: process.env.NODE_ENV === "production",
  // });



  // const token = myToken?.routeToken;

 

  // if (!token && protectedRoutes.some((path) => mypath.startsWith(path))) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // if (token && authRoutes.some((path) => mypath.startsWith(path))) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // return NextResponse.next();






  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })


  if(!!token){

    return NextResponse.next();
  } else{
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}login`)
  }
}

export const config = {
  matcher: [
    "/cart",
    "/wishlist",
    "/checkout",
    "/allorders",
    "/login",
    "/register",
  ],
};
