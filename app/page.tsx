import Link from "next/link";
import TopDoadores from "./components/placar/lista";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-600 custom-bg">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('./assets/BackOceano.jpeg')] opacity-60 z-0"></div>
      <main className="relative z-10 w-[90vw] m-auto text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-12 mt-24">Oceanômetro</div>
          <div className="h-32 sm:w-full md:w-3/4 lg:w-2/3 mb-4 bg-black rounded-3xl"></div>
          <p className="text-2xl">A cada um real doado, você...</p>
          <Link href="../pages/login">
            <button className="h-9 bg-cyan-400 rounded px-4 hover:bg-cyan-700 transition duration-200">Doe aqui</button>
          </Link>
        </div>
        <div className="mt-12">
          <TopDoadores />
        </div>
      </main>
    </div>
  );
}
