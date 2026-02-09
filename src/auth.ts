import { FaildLoginResponse, SuccessLoginResponse } from "@/interfaces/auth";
import { AuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: " Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const response = await fetch(
          `https://ecommerce.routemisr.com/api/v1/auth/signin`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          },
        );
        const data: SuccessLoginResponse | FaildLoginResponse =
          await response.json();
        if ("token" in data) {
          return {
            id: data.user.email,
            user: data.user,
            token: data.token,
          };
        } else {
          throw new Error(data.message);
        }
      },
    }),
  ],
  // callbacks: {
  //   jwt: ({ token, user }) => {
  //     if (user) {
  //       token.user = user.user;
  //       token.accessToken = user.token;
  //     }
  //     return token;
  //   },
  //   session: ({ session, token }) => {
  //     session.user = token.user;

  //     return session;
  //   },
  // },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user.user;
        token.accessToken = user.token; // هنا موجود
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;
      // مهم جدًا: ضيف accessToken هنا
      (session as any).accessToken = (token as any).accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
