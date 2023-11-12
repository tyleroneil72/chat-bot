# Chat Bot using Node.js, Express, and OpenAI API

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Openai](https://img.shields.io/badge/Openai-404D59?style=for-the-badge)

## Description

This is a chat bot built with Node.js and Express, integrated with OpenAI's API to provide natural language processing capabilities. The bot can engage in conversations with users, answer questions, and provide responses based on the context of the conversation.

## NOTE


This project has undergone a transformation and is now powered by React. Feel free to explore the revamped version by visiting the repository [here](https://github.com/tyleroneil72/react-chat-bot)
## Features

- Natural Language Processing (NLP) using OpenAI's API.
- Interactive conversations with users.
- Ability to answer questions and provide context-aware responses.
- Fully customizable/tweakable

## Example
![image](https://github.com/tyleroneil72/chat-bot/assets/43754564/9f63c52f-9229-49ef-8987-4e5d080f8672)


## Installation

1. Clone the repository:

```bash
git clone https://github.com/tyleroneil72/chat-bot.git
cd chat-bot
```

2. Install dependencies:

```bash
cd backend
npm install
```

3. Obtain OpenAI API Key:

Sign up for an account at OpenAI.
Get your API key from the OpenAI dashboard.
Create a .env file in the root directory and add your API key:
```dotenv
API_KEY="YOUR KEY HERE"
```
You may need to change the model in the backend/services/openaiService.js file depending on availability
```javascript
const response = await openai.createChatCompletion({
      // Switch to different models if necessary
      // model: "gpt-3.5-turbo",
      model: "gpt-4",
      messages: messages,
    });
```


## Usage
Run the following command to start the chat bot server from the backend:
```bash
cd backend
npm start
```
And the index.html file should open in your browser

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
This project was inspired by the capabilities of OpenAI's API.

## Contact
For any inquiries or questions, you can reach me at tyleroneildev@gmail.com
or on my linkedin at https://ca.linkedin.com/in/tyler-oneil-dev

