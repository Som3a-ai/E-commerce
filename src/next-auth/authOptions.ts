import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

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
          console.log("result of logIn", result);

          if (!res.ok) {
            throw new Error(result.message || "Invalid credentials");
          }

          const jwt: { id: string } = jwtDecode(result.token);

          return {
            id: jwt.id,
            name: result.user.name,
            email: result.user.email,
            accessToken: result.token,
          };
        } catch (err) {
          console.log("error from api", err);
          throw new Error((err as Error).message);
        }
      },
    }),
  ],

  callbacks: {
    jwt(param) {
      if (param.user) {
        param.token.routeToken = param.user.accessToken;

        param.token.id = param.user.id;

      }
      return param.token;
    },

    session(params){

      params.session.id = params.token.id;

      return params.session
    }

  },
  pages: {
    signIn: "/login",
  },
};
