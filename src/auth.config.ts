import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {},
  providers: [],
  secret: "asdfasdfasdfasfd",
} satisfies NextAuthConfig;
