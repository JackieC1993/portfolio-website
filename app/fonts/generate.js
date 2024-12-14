"use client";
// // pages/api/generate.js
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { messages } = req.body;

//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//       const response = await model.generate({
//         prompt: messages,
//         maxTokens: 100,
//       });

//       res.status(200).json({ message: response });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Failed to generate response" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// pages/api/generate.js
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//         const { messages } = req.body;

//         try {
//             const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//             const chat = model.startChat();
//             const result = await chat.sendMessageStream(messages);

//             res.status(200).json({ message: result });
//         } catch (error) {
//             console.error("Error generating response:", error);
//             res.status(500).json({ error: "Failed to generate response", details: error.message });
//         }
//     } else {
//         res.setHeader("Allow", ["POST"]);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }