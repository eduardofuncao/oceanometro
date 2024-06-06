import { useState } from 'react';
import { StaticImageData } from 'next/image';
import proximo from '../../assets/proximo.png';
import voltar from '../../assets/voltar.png';
import  Image  from 'next/image';

// Define o tipo da imagem que o componente espera
export interface ImageType {
  src: string | StaticImageData;
  alt: string;
}

// Define o tipo das props que o componente recebe
interface CarrosselProps {
  images: ImageType[];
}

// Componente Carrossel
export default function Carrossel({ images }: CarrosselProps) {
  // Estado para rastrear o índice da imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para retroceder para a imagem anterior
  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Imagem atual a ser exibida no carrossel
  const currentImage = images[currentImageIndex];

  // Verifica se o src é do tipo StaticImageData
  const src = typeof currentImage.src === 'string' ? currentImage.src : currentImage.src.src;

  return (
    <div className="carrossel relative">
      {/* Imagem atual */}
      <img src={src} alt={currentImage.alt} className="w-full h-96 object-cover hover:opacity-90 transition duration-300" />

      {/* Botão para retroceder */}
      <button onClick={prevImage} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100 transition duration-500">
        <Image src={voltar} alt={'Botao voltar'} className='w-10'></Image>
      </button>

      {/* Botão para avançar */}
      <button onClick={nextImage} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100 transition duration-500">
        <Image src={proximo} alt={'Boatao proximo'} className='w-10'></Image>
      </button>
    </div>
  );
}
