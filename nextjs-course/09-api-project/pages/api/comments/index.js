import { buildFilePath, extractFileData } from "../../../helpers/api-util";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const comment = req.body.comment;
    const event = req.body.event;

    const newComment = {
      id: uuidv4(),
      email: email,
      name: name,
      comment: comment,
      event: event,
    };

    const filePath = buildFilePath("comments.json");
    const data = extractFileData(filePath);

    data.push(newComment);

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Comment submitted", comment: newComment });
  }
}

export default handler;
