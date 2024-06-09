// auth.ts
import NextAuth, { NextAuthConfig, DefaultSession, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';
import { JWT } from "next-auth/jwt";

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
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const response = await axios.post('https://89534e29-0fce-4172-a8ff-cf55054fd53f.mock.pstmn.io/login', {
            username: credentials?.username,
            password: credentials?.password,
          });

          const user = response.data.user;

          if (response.data.code === "LOGIN_SUCCESS") return user;
          
          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          ...user,
        }
      }
      return token;
    },
    async session({ session, token }:{session: any, token: JWT}) {
      return {
        ...session,
        accessToken: token.accessToken,
        user: {
          ...session.user,
          ...token,
        },
      };
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
