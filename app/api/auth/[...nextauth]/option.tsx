import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.username,
              password: credentials?.password,
            }),
          },
        );

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        return {
          email: user.data.email,
          firstName: user.data.first_name,
          role: user.data.role_name,
          file_name: user.data.file_name,
          id: user.data.id,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: Record<string, any>;
      user?: Record<string, any>;
    }) {
      const { role } = user || {};

      if (role) {
        token.role = role;
      }

      return token;
    },

    async session({
      session,
      token,
    }: {
      session: any;
      token: Record<string, any>;
    }) {
      const { user } = session || {};
      const { role } = token || {};

      if (user && role) {
        user.role = role;
      }

      return session;
    },
  },
};
