import { Configuration, OpenAIApi } from 'openai'; // npm i openai

export async function GET(request) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // openai object instantiation
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are an English language teacher.',
      },
      {
        role: 'user',
        content: 'Hello there.',
      },
      {
        role: 'assistant',
        content: "I'm doing well. Thank you!",
      },
      {
        role: 'user',
        content: 'Are you able to assist me?',
      },
    ],
  });

  return new Response(JSON.stringify({ response: response.data.choices[0] }));
}
