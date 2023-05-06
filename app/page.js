'use client';
import Image from 'next/image';

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="container mx-auto max-w-4xl">
      <div className="grid grid-cols-2">
        <div className="bg-blue-400 relative py-4 px-4 flex flex-col justify-center">
          <div className="absolute h-[15px] w-[15px] bg-blue-400 -right-[7px] top-[40%] rotate-45"></div>
          <h3 className="text-2xl text-white bold">Professor Says:</h3>
          <p className="text-white">Professor is thinking...</p>
        </div>

        <div>
          <Image
            src="/undraw_professor_re_mj1s.svg"
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
    </main>
  );
}
