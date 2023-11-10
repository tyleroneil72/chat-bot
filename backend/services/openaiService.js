// services/openaiService.js
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

const apiKey = process.env.API_KEY;
const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

async function callGPT(promptContent, systemContent, previousChat) {
  try {
    const messages = [];

    const userPrompt = {
      role: "user",
      content: promptContent,
    };
    const systemPrompt = {
      role: "system",
      content: systemContent,
    };
    const assistantPrompt = {
      role: "assistant",
      content: previousChat,
    };

    messages.push(userPrompt);
    messages.push(systemPrompt);
    messages.push(assistantPrompt);

    const response = await openai.createChatCompletion({
      //   model: "gpt-4", // Switch to different models if necessary
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    console.log(1);
    console.log(response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return `An error occurred while processing the request: ${error}`;
  }
}

module.exports = { callGPT };
