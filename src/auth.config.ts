import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {},
  providers: [],
} satisfies NextAuthConfig;
