import Image from 'next/image';

export default function Home() {
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
    </main>
  );
}
