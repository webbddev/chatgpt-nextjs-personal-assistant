'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const messageRef = useRef();

  const [messages, setMessages] = useState([]);
  const [displayMessage, setDisplayMessage] = useState(
    'Professor is thinking...'
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // creating messages history list as well as the new prompt
    let newMessageList = [...messages, { role: 'user', content: prompt }];

    try {
      // calling custom api and passing entire message history as input
      const response = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessageList }),
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();

      newMessageList.push({
        role: data.response.role,
        content: data.response.content,
      });

      setMessages(newMessageList);
      setDisplayMessage(data.response.content);
      messageRef.current.value = '';
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      // stopped at 30:59
    }
  };

  return (
    <main className="container mx-auto max-w-4xl">
      <div className="grid grid-cols-2">
        <div
          className={`bg-blue-400 relative py-4 px-4 flex flex-col justify-center ${
            loading ? 'animate-pulse' : ''
          }`}
        >
          <div className="absolute h-[15px] w-[15px] bg-blue-400 -right-[7px] top-[40%] rotate-45"></div>
          <h3 className="text-2xl text-white bold">Professor Says:</h3>
          <p className="text-white">
            {loading ? '[Professor is thinking]' : displayMessage}
          </p>
        </div>

        <div>
          <Image
            src="/undraw_professor_re_mj1s.svg"
            priority={true}
            width={512}
            height={512}
            alt="assistant"
          />
        </div>
      </div>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <label className="font-bold">Say something...</label>
          <input
            className="px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-500 rounded-lg"
            required
            type="text"
            ref={messageRef}
            placeholder="Ask me anything..."
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-700 rounded-lg hover:scale-110 transition-all duration-700"
        >
          Send 🚀🙋‍♀️🙋‍♂️⁉️
        </button>
      </form>

      <div className="mt-6"></div>
    </main>
  );
}
