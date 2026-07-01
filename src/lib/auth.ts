import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Missing username or password");
        }

        const envUsername = process.env.ADMIN_USERNAME || "admin";
        const envPassword = process.env.ADMIN_PASSWORD;
        const envPasswordHash = process.env.ADMIN_PASSWORD_HASH;

        if (!envPassword && !envPasswordHash) {
          throw new Error("Admin credentials not configured in environment variables");
        }

        if (credentials.username !== envUsername) {
          throw new Error("Invalid username or password");
        }

        let isPasswordValid = false;

        if (envPassword) {
          isPasswordValid = credentials.password === envPassword;
        } else if (envPasswordHash) {
          isPasswordValid = await bcrypt.compare(credentials.password, envPasswordHash);
        }

        if (!isPasswordValid) {
          throw new Error("Invalid username or password");
        }

        return {
          id: "admin",
          name: "Administrator",
          email: "admin@infyplus.com",
          role: "admin"
        };
      }
    })
  ],
  debug: true, // <--- YE LINE ADD KI GAYI HAI
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};