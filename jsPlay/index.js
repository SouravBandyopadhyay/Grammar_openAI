const express = require("express");
const dotenv = require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const bodyparser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

// Server Setup
const app = express();
app.use(bodyparser.json());
app.use(cors());

// Endpoint for ChatGpt
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

const port = 8080;
app.listen(port, () => {
  console.log("Server Started at 8080");
});
