import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Log In",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "Enter your Email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "**********",
        },
      },

      async authorize(credentials, req) {
        try {
          const res = await fetch(
            `https://ecommerce.routemisr.com/api/v1/auth/signin`,
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: {
                "content-type": "application/json",
              },
            },
          );

          const result = await res.json();
          console.log( "result of logIn", result);

          if (!res.ok) {
            throw new Error(result.message || "Invalid credentials");
          }
          return {
            id: "",
            name: result.user.name,
            email: result.user.email,
          };
        } catch (err) {
          console.log("error from api", err);
          throw new Error((err as Error).message);
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
};
