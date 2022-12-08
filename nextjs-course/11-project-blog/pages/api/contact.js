import { connectDatabase, insertDocument } from "../../helpers/db-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    console.log(req.body);
    // const documentToInsert = {
    //   email: email,
    //   name: name,
    //   message: message,
    // };

    if (!email || !email.includes("@") || !message) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connection failed" });
      return;
    }

    try {
      await insertDocument(client, "messages", {
        email: email,
        name: name,
        message: message,
      });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Adding data failed" });
      return;
    }

    res.status(201).json({ message: "Success" });
  }
}

export default handler;
