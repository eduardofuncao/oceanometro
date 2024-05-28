import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[90vw] m-auto">
      <nav className="flex justify-between">
        <div>LOGO</div>
        <div>CONTATO</div>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <div className="text-9xl mb-12 mt-24">Oceanômetro</div>
        <div className="h-32 w-[30rem] mb-4 bg-black rounded-3xl"></div>
        <p className="text-2xl">A cada um real doado, você...</p>
        <Link href='./login'><button className="bg-red-500 rounded px-4"> Doe aqui</button></Link>
      </div>
      <footer className="fixed bottom-0 left-[45vw]">
        <p>CR AEJ 2024</p>
      </footer>
    </main>
  );
}
