"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import TopDoadores from "./components/top10/lista";
import Carrossel, { ImageType } from './components/carros/Carrousel'; // Importe o componente Carrossel
import PET1 from "./assets/plasticos.jpeg";
import PET2 from "./assets/plasticos2.jpeg";
import PET3 from "./assets/plasticos3.webp";

const images: ImageType[] = [
  { src: PET1, alt: "Slide 1" },
  { src: PET2, alt: "Slide 2" },
  { src: PET3, alt: "Slide 3" },
];

export default function Home() {
  const [counter, setCounter] = useState<number>(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        const newCounter = prevCounter + 20000;
        return newCounter >= 1e15 ? 1e15 : newCounter; // Limite o contador em 1 quadrilhão (10^15)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const splitNumber = (number: number) => {
    const digits = number.toLocaleString('pt-BR').split('').filter(digit => digit !== ',');
    return digits.map((digit, index) => (
      <div key={index} className="flex justify-center items-center w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 bg-black text-white mx-2 rounded-lg text-xl md:text-2xl lg:text-3xl">
        {digit}
      </div>
    ));
  };

  return (
    <div className="relative min-h-screen bg-slate-600">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('./assets/BackOceano.jpeg')] opacity-60 z-0"></div>
      <main className="relative z-10 w-[90vw] m-auto text-white flex flex-col justify-between min-h-screen ">
        <div className="flex flex-col items-center justify-center flex-grow mt-10">
          <div className="text-5xl sm:text-6xl md:text-4xl lg:text-9xl mb-10">Oceanômetro</div>
          <p className="text-xl md:text-2xl lg:text-2xl text-center mb-10 pb-5 bg-black bg-opacity-80 p-6 rounded-lg font-mono">
            A cada segundo, 20 mil de garrafas PET são vendidas no mundo inteiro. Esse contador representa o número de garrafas PET vendidas desde o momento em que você abriu o site.
          </p>
          <div className="h-40 sm:w-full md:w-3/4 lg:w-2/3 mb-10 flex justify-center items-center flex-wrap font-mono">
            {splitNumber(counter)}
          </div>
          <p className="text-2xl text-center mb-10 bg-black bg-opacity-80 p-6 rounded-lg font-mono">
            Muitas dessas garrafas acabam poluindo nossos preciosos oceanos, causando danos irreparáveis à vida marinha e ao ecossistema. Você pode fazer a diferença! Sua doação nos ajuda a preservar nossos oceanos e proteger a vida marinha. Cada real doado é um passo em direção a um futuro mais sustentável e saudável para o nosso planeta. Junte-se a nós nessa causa e faça sua doação hoje mesmo. Seu apoio é fundamental para continuarmos nosso trabalho de conservação marinha. Faça parte dessa mudança! <strong>Doe já!</strong>
          </p>
          <div className='mb-10 mt-10'>
            <Carrossel images={images} />
          </div>
          <p className="text-2xl text-center mb-10 p-6 rounded-lg font-mono">
            Essas são algumas das infinitas imagens do impacto que as garrafas PET não descartadas de forma correta geram ao redor do Mundo no nosso oceano!
          </p>
          <Link href="../pages/login">
            <button className="h-14 text-xl mt-3 bg-cyan-400 rounded px-6 hover:bg-cyan-700 transition duration-200">Faça a sua Doação</button>
          </Link>
          
        </div>
        <div className="mt-16">
          <TopDoadores />
          <div className="flex flex-col items-center mt-16 mb-16">
            <p className="text-lg font-semibold mb-6 text-center bg-black bg-opacity-80 p-6 rounded-lg font-mono">
              Sua doação faz a diferença! Contribua novamente para ajudar a preservar nossos oceanos. 
              Cada real doado é um passo em direção a um futuro mais sustentável.
            </p>
            <Link href="../pages/donate-again">
              <button className="h-14 mt-10 text-xl bg-cyan-400 rounded px-6 hover:bg-cyan-700 transition duration-200">
                Doar Novamente
              </button>
            </Link>
          </div>
        </div>
        <footer className="mt-16 mb-10 text-center">
          <p className="text-lg mb-16 p-6 rounded-lg font-mono">
            Obrigado por visitar nosso site e apoiar a causa da preservação dos oceanos. Juntos, podemos fazer a diferença!
          </p>
          <p className="text-md mb-6 font-mono">
            Conheça mais sobre o trabalho das ONGs que ajudam a preservar nossos oceanos:
          </p>
            <ul className="list-disc list-inside mt-2">
              <li><a href="https://www.greenpeace.org" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Greenpeace</a></li>
              <li><a href="https://www.oceana.org" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Oceana</a></li>
              <li><a href="https://www.seashepherd.org" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Sea Shepherd</a></li>
              <li><a href="https://www.oceanconservancy.org" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ocean Conservancy</a></li>
            </ul>
        </footer>
      </main>
    </div>
  );
}
