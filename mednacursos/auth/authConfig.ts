import NextAuth from "next-auth";
import Auth0 from "next-auth/providers/auth0";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Auth0({
      name: "auth0",
      clientId: process.env.AUTH_AUTH0_ID,
      clientSecret: process.env.AUTH_AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
