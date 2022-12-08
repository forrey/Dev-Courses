import { getToken } from "next-auth/jwt";
import { hashPassword, verifyPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db-utils";
import { unstable_getServerSession } from "next-auth/next";
import authOptions from "../auth/[...nextauth]";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await unstable_getServerSession(req, res, authOptions);
  console.log(session);

  // if (!session) {
  //   res.status(401).json({ message: "Not authenticated" });
  //   return;
  // }

  const userEmail = "session.user.email";
  const { oldPassword, newPassword } = req.body;

  const client = await connectToDatabase();
  const usersCollection = client.db("auth-demo").collection("users");

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    client.close();
    return;
  }

  const currentPassword = user.password;
  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(403).json({ message: "Passwords didn't match" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );

  client.close();
  res.status(200).json({ message: "Password updated" });
}

export default handler;
