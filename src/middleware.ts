//middleware is used to check if the user is authenticated or not. If the user is not authenticated, it will redirect the user to the login page. If the user is authenticated, it will allow the user to access the page.
import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
  