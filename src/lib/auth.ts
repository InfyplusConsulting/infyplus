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
        try {
          console.log("--> Starting Authentication..."); // Log 1

          if (!credentials?.username || !credentials?.password) {
            console.error("--> Error: Missing Credentials");
            throw new Error("Missing username or password");
          }

          const envUsername = process.env.ADMIN_USERNAME || "admin";
          const envPassword = process.env.ADMIN_PASSWORD;
          const envPasswordHash = process.env.ADMIN_PASSWORD_HASH;

          console.log(`--> Comparing Username. Input: ${credentials.username}, Expected: ${envUsername}`); // Log 2

          if (!envPassword && !envPasswordHash) {
            console.error("--> Error: Environment Variables Not Configured");
            throw new Error("Admin credentials not configured in environment variables");
          }

          if (credentials.username !== envUsername) {
            console.error("--> Error: Invalid Username");
            throw new Error("Invalid username or password");
          }

          let isPasswordValid = false;

          if (envPassword) {
            console.log("--> Comparing with Plaintext Password");
            isPasswordValid = credentials.password === envPassword;
          } else if (envPasswordHash) {
            console.log("--> Comparing with Password Hash");
            isPasswordValid = await bcrypt.compare(credentials.password, envPasswordHash);
          }

          if (!isPasswordValid) {
            console.error("--> Error: Invalid Password");
            throw new Error("Invalid username or password");
          }

          console.log("--> Login Successful!");
          return {
            id: "admin",
            name: "Administrator",
            email: "admin@infyplus.com",
            role: "admin"
          };
        } catch (error) {
          console.error("--> AUTHORIZE FUNCTION ERROR:", error);
          // Return null explicitly as NextAuth expects this format for failed logins
          return null; 
        }
      }
    })
  ],
  debug: true,
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