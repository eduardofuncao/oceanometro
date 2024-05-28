import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="text-9xl mb-12 mt-24">Oceanômetro</div>
      <div className="h-32 w-[30rem] mb-4 bg-black rounded-3xl"></div>
      <p className="text-2xl">A cada um real doado, você...</p>
      <button className="bg-red-500 rounded px-4"> Doe aqui</button>
    </main>
  );
}
