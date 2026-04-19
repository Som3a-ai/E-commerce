import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"


declare module "next-auth" {

    interface Session{
        user:{
            name : string;
            email: string;
            image?:string | undefined;
        } ;

        expires : string;
        id : string;

    }


    interface User{
        id : string; 
        name : string;
        email : string ;
        accessToken : string;
    }

}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
   routeToken : string;
   id : string;
  }
}