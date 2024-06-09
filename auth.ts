// auth.ts
import NextAuth, { NextAuthConfig, DefaultSession, Session, User } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from 'axios';
// import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      firstname: string;
      lastname: string;
      nickname: string;
      email: string;
      role: string;
      image: string;
      bio: {
        about: string;
        skills: string[];
        experience: {
          company: string;
          role: string;
          duration: string;
          projects: { name: string; description: string }[];
        }[];
        contact_information: {
          email: string;
          phone: string;
          linkedin: string;
        };
      };
    } & DefaultSession["user"]
  }

  interface User {
    id?: string;
    username: string;
    firstname: string;
    lastname: string;
    nickname: string;
    email?: string | null;
    role: string;
    image?: string | null;
    bio: {
      about: string;
      skills: string[];
      experience: {
        company: string;
        role: string;
        duration: string;
        projects: { name: string; description: string }[];
      }[];
      contact_information: {
        email: string;
        phone: string;
        linkedin: string;
      };
    };
  }
}


export const authOptions: NextAuthConfig = {
  providers: [
  ],
  callbacks: {
  },
  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
