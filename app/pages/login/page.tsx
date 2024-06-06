"use client";
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import qrcode from '../../assets/qrcode.png';
import Link from 'next/link';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    CPF: '',
    value: 0
  });
  const [showQRCode, setShowQRCode] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/users', formData);

      if (response.status === 201) {
        alert('Cadastro realizado com sucesso!');
        setShowQRCode(true);
        // Reset form data
        setFormData({
          name: '',
          email: '',
          CPF: '',
          value: 0
        });
      } else {
        alert('Erro ao realizar cadastro. Tente novamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao realizar cadastro. Tente novamente.');
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-600 flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover"></div>
      <div className="relative z-10 w-full max-w-xl">
        <div className="w-full p-8 bg-slate-800 bg-opacity-90 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastre-se e faça a sua doação</h2>
          <p className='text-center pb-2'>Ao fazer o cadastro você será redirecionado para a página com um QR Code para efetuar a doação</p>
          {showQRCode ? (
            <div className="text-center">
              <p>Cadastro realizado com sucesso! Agora abra o aplicativo do seu banco ou câmera do celular e aponte para o QR Code para efetuar sua doação!</p>
              <Image src={qrcode} alt="QR Code" className="mx-auto mt-4" />
              <Link className='text-cyan-600 hover:text-cyan-800 transition duration-200' href='/'>Voltar</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-400" htmlFor="name">
                  Nome
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg text-black"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='Nome e último sobrenome'
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-400" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg text-black"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='exemplo(xxx@email.com)'
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-400" htmlFor="CPF">
                  CPF
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg text-black"
                  type="text"
                  id="CPF"
                  name="CPF"
                  value={formData.CPF}
                  onChange={handleChange}
                  required
                  placeholder='apenas números exemplo(xxx xxx xxx xx)'
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-400" htmlFor="value">
                  Valor
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg text-black"
                  type="number"
                  id="value"
                  name="value"
                  value={formData.value}
                  onChange={handleChange}
                  required
                  placeholder='R$'
                />
              </div>
              <button className="w-full px-4 py-2 font-bold text-white bg-cyan-400 rounded-lg hover:bg-cyan-600 transition duration-300">
                Doar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
