import { buildFilePath, extractFileData } from "../../../helpers/api-util";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // Server-side validation
    const { email, name, comment, event } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newComment = {
      id: uuidv4(),
      email,
      name,
      comment,
      event,
    };
    console.log(newComment);
    res.status(201).json({ message: "Added Comment", comment: newComment });
  }

  if (req.method === "GET") {
    const filePath = buildFilePath("comments.json");
    const data = extractFileData(filePath);
    const eventComments = data.filter((comment) => comment.event === eventId);
    res.status(200).json({ comments: eventComments });
  }
}

export default handler;
