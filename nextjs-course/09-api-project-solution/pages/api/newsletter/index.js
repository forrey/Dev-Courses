import { connectDatabase, insertDocument } from "../../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    // Extract the email
    // We get this from like 19 of newsletter-registration.js
    const email = req.body.email;

    // Do some basic server-side validation
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    // Define client so we can use it inside our try
    let client;

    // Connect
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connection failed" });
      return;
    }

    // Insert the document
    try {
      await insertDocument(client, "emails", { email: email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Adding data failed" });
      return;
    }

    res.status(201).json({ message: "Success" });
  }
}

export default handler;
