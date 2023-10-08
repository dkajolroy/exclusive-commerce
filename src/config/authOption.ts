import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";

export const authOption: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
      credentials: {
        emailOrPhone: {
          type: "text",
          placeholder: "Username",
          label: "Username",
        },
        password: { type: "text", placeholder: "Password", label: "Password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.emailOrPhone || !credentials?.password) {
          return null;
        }
        const { emailOrPhone, password } = credentials;
        const findUser = await prisma.user.findFirst({
          where: {
            OR: [{ email: emailOrPhone }, { phone: emailOrPhone }],
          },
        });
        if (!findUser) {
          return null;
        }
        const matchPassword = await bcrypt.compare(
          password,
          findUser.password || "xxx"
        );
        if (!matchPassword) {
          return null;
        }
        return findUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
};
