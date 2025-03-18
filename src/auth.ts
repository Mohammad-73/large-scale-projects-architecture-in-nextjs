import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import { createData } from "./core/http-service/http-service";
import { VerifyUserModel } from "./app/(auth)/verify/_types/verify-user.types";
import { User } from "./types/user.interface";
import { API_URL } from "./configs/global";

declare module "next-auth" {
  interface User {
    accessToken: string;
  }
}

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        code: { label: "code", type: "text" },
      },
      async authorize(credentials) {
        try {
          const user = await createData<VerifyUserModel, User>(
            `${API_URL}/verify`,
            {
              username: credentials.username as string,
              code: credentials.code as string,
            }
          );
          console.log(user);

          // AUTH.JS EXPECTS THE USER OBJECT TO BE RETURNED
          return {
            accessToken: user.token,
          };
        } catch (error: unknown) {
          throw new Error("");
        }
      },
    }),
  ],
});
