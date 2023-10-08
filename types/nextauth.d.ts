import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    phone: string | null;
    phoneVerified: Date | null;
    password: string | null;
    image: string | null;
    created_at: Date;
    updated_at: Date;
  }
  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
  }
}
