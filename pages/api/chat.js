export default async function handler(req, res) {
    if (req.method === "POST") {
      const userMessage = req.body.message;
      // Call an AI API or mock a response
      const aiResponse = "This is a mock response to: " + userMessage;
      res.status(200).json({ response: aiResponse });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  