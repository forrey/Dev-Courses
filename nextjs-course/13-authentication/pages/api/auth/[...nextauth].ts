import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db-utils";

export const authOptions: NextAuthOptions = {
  session: {
    maxAge: 60 * 24 * 60 * 60,
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const usersCollection = client.db("auth-demo").collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Couldn't log you in");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
};
export default NextAuth(authOptions);
