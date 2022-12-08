import { buildFeedbackPath, extractFeedback } from ".";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  const singleFeedback = data.find((feedback) => feedback.id === feedbackId);
  res.status(200).json({ feedback: singleFeedback });
}

export default handler;
