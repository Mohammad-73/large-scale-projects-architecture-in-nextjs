import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async authorized({ auth, request }) {
      const { nextUrl } = request;

      const isAuthenticated = !!auth?.user;

      const authRoutes = ["/signin", "/verify"];
      const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

      if (isAuthRoutes && isAuthenticated) {
        return Response.redirect(new URL("/student/courses", nextUrl));
      }

      const isProtectedRoute = nextUrl.pathname.startsWith("/student");

      if (isProtectedRoute && !isAuthenticated) {
        return Response.redirect(new URL("/signin", nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
