import {
  connectDatabase,
  insertDocument,
  getDocuments,
} from "../../../helpers/db-util";

async function handler(req, res) {
  // Get the eventId from the url
  // this is req.query.eventId because this file is called [eventId]
  const eventId = req.query.eventId;

  // Define client so we can use it inside try/catch
  let client;

  try {
    // Connect to the DB
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connection failed" });
    // We can return to end execution if there was an error
    return;
  }

  if (req.method === "POST") {
    // We extract the data sent to us from the react component
    // We define this in comments.js, in the addCommentHandler function
    const { email, name, comment, event } = req.body;

    // Simple validation to see if it's an email address and not empty
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      client.close();
      return;
    }

    // Structure our new comment
    const newComment = {
      email,
      name,
      comment,
      event,
    };

    let result;

    // Now we try to send the new comment to the database
    try {
      result = await insertDocument(client, "comments", newComment);
      res.status(201).json({ message: "Added Comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Adding data failed" });
    }
  }

  // For GET (i.e. when we load the comments on the comment page)
  if (req.method === "GET") {
    try {
      const documents = await getDocuments(
        client,
        "comments",
        { event: eventId },
        { _id: -1 }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Failed to get comments" });
    }
  }

  client.close();
}

export default handler;
