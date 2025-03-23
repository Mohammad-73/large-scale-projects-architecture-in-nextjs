import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: "/:path*", // APPLY THIS MIDDLEWARE TO ALL PATHS
};
