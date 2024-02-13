import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "@/utils/db";
import User from "@/models/user";
import logger from "@/utils/logger";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ session, token }) {
      const sessionUser = await User.findOne({ email: session?.user?.email });
      if (session && session.user) {
        session.user.id = sessionUser?._id?.toString();
        session.accessToken = token.accessToken;
      }
      return session;
    },
    async signIn({ user }) {
      if (!user) return false;
      try {
        await dbConnect();
        const userExists = await User.findOne({
          email: user?.email
        });
        if (!userExists) {
          await User.create({
            email: user?.email,
            username: user?.name?.replace(" ", "").toLowerCase(),
            image: user?.image
          });
        }
        return true;
      } catch (error) {
        logger.error("Error connecting to database: ", error);
        return false;
      }
    },
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.accessToken = account?.access_token;
        token.id = user?.id;
      }
      return token;
    }
  }
});

export { handler as GET, handler as POST };
