import { buildFilePath, extractFileData } from "../../../helpers/api-util";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const newEmail = {
      id: uuidv4(),
      email: email,
    };

    const filePath = buildFilePath("emails.json");
    const data = extractFileData(filePath);

    data.push(newEmail);

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", email: newEmail });
  }
}

export default handler;
