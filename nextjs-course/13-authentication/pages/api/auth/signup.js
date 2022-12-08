import { hashPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const client = await connectToDatabase();
    const db = client.db("auth-demo");

    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "This user already exists" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Created user!" });
    client.close();
  }
}

export default handler;
