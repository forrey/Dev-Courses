import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  // We define our path to the file we want to write to
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath) {
  // We read the existing file data
  const fileData = fs.readFileSync(filePath);

  // We parse it into JSON
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  // We define what data we're expecting to get via POST
  if (req.method === "POST") {
    // This corrosponds to the data we send from the form in index.js
    // So we expect an object that looks like { email: "me@you.com, text: "Some text" }
    const email = req.body.email;
    const feedback = req.body.text;

    // We'll put it into object format and give it a unique ID
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedback,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    // And we add our new Feedback
    data.push(newFeedback);

    // And finally we write it to the file
    fs.writeFileSync(filePath, JSON.stringify(data));

    // And send back a status and message
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
