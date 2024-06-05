"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import qrcode from '../../assets/qrcode.png';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
  CPF: string;
  value: number;
}

const DonateAgain = () => {
  const [cpf, setCpf] = useState('');
  const [value, setValue] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [error, setError] = useState('');

  const handleCpfSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:4000/users?CPF=${cpf}`);
      if (response.data.length > 0) {
        // Convert value to number if it is a string
        const userData = response.data[0];
        userData.value = parseFloat(userData.value);
        setUser(userData);
        setError('');
      } else {
        setError('CPF não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar CPF:', error);
      setError('Erro ao buscar CPF.');
    }
  };

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const donationValue = parseFloat(value); // Convert value to a number
      const updatedValue = user.value + donationValue; // Sum the donation value with the existing value
      await axios.patch(`http://localhost:4000/users/${user.id}`, { value: updatedValue });
      alert('Doação realizada com sucesso!');
      setShowQRCode(true);
    } catch (error) {
      console.error('Erro ao realizar doação:', error);
      setError('Erro ao realizar doação.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-600 text-white">
      {!user ? (
        <form onSubmit={handleCpfSubmit} className="bg-slate-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Insira seu CPF</h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="cpf">CPF</label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-black"
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
              placeholder="Digite seu CPF"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button className="w-full px-4 py-2 font-bold text-white bg-cyan-400 rounded-lg hover:bg-cyan-600 transition duration-300">
            Continuar
          </button>
        </form>
      ) : (
        !showQRCode ? (
          <form onSubmit={handleDonationSubmit} className="bg-slate-800 p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Bem-vindo, {user.name}</h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="value">Valor da Doação</label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-black"
                type="number"
                id="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                placeholder="Digite o valor da doação"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button className="w-full px-4 py-2 font-bold text-white bg-cyan-400 rounded-lg hover:bg-cyan-600 transition duration-300">
              Doar
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p>Doação realizada com sucesso! Agora abra o aplicativo do seu banco ou câmera do celular e aponte para o QR Code para efetuar sua doação!</p>
            <Image src={qrcode} alt="QR Code" className="mx-auto mt-4" />
            <Link className='text-cyan-600 hover:text-cyan-800 transition duration-200' href='/'>Voltar</Link>
          </div>
        )
      )}
    </div>
  );
};

export default DonateAgain;








//integração em JAVA

/*

"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import qrcode from '../../assets/qrcode.png';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
  CPF: string;
  value: number;
}

const DonateAgain = () => {
  const [cpf, setCpf] = useState('');
  const [value, setValue] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [error, setError] = useState('');

  const handleCpfSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/users?cpf=${cpf}`);
      if (response.data) {
        const userData = response.data;
        setUser(userData);
        setError('');
      } else {
        setError('CPF não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar CPF:', error);
      setError('Erro ao buscar CPF.');
    }
  };

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const donationValue = parseFloat(value);
      const updatedValue = user.value + donationValue;
      await axios.patch(`http://localhost:8080/users/${user.id}`, { value: donationValue });
      alert('Doação realizada com sucesso!');
      setShowQRCode(true);
    } catch (error) {
      console.error('Erro ao realizar doação:', error);
      setError('Erro ao realizar doação.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-600 text-white">
      {!user ? (
        <form onSubmit={handleCpfSubmit} className="bg-slate-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Insira seu CPF</h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="cpf">CPF</label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-black"
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
              placeholder="Digite seu CPF"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button className="w-full px-4 py-2 font-bold text-white bg-cyan-400 rounded-lg hover:bg-cyan-600 transition duration-300">
            Continuar
          </button>
        </form>
      ) : (
        !showQRCode ? (
          <form onSubmit={handleDonationSubmit} className="bg-slate-800 p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Bem-vindo, {user.name}</h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="value">Valor da Doação</label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-black"
                type="number"
                id="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                placeholder="Digite o valor da doação"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button className="w-full px-4 py-2 font-bold text-white bg-cyan-400 rounded-lg hover:bg-cyan-600 transition duration-300">
              Doar
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p>Doação realizada com sucesso! Agora abra o aplicativo do seu banco ou câmera do celular e aponte para o QR Code para efetuar sua doação!</p>
            <Image src={qrcode} alt="QR Code" className="mx-auto mt-4" />
            <Link className='text-cyan-600 hover:text-cyan-800 transition duration-200' href='/'>Voltar</Link>
          </div>
        )
      )}
    </div>
  );
};

export default DonateAgain;

*/
