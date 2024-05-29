import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/derramar.png'; // Certifique-se de ajustar o caminho para sua imagem de logotipo

export default function Header() {
  return (
    <header className="bg-slate-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Link href="/"><Image src={logo} alt="Logo" width={50} height={50} /></Link>
          <span className="ml-3 text-xl font-bold text-gray-300">Oceanômetro</span>
        </div>
        <nav className="flex space-x-4">
          <Link href="/contact"className="text-gray-300 hover:text-cyan-500">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}