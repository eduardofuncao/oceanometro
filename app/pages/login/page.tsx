"use client";
// components/AuthTabs.js
import { useState } from 'react';
import Link from 'next/link';

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="bg-slate-600 min-h-screen flex items-center justify-center">
    
      <div className="w-full max-w-xl">
        <div className="flex justify-center mb-0">
          <button
            className={`px-4 py-2 rounded-t-lg ${activeTab === 'login' ? 'bg-red-500 text-white ' : 'bg-gray-200  hover:bg-gray-400  transition duration-200'}`}
            onClick={() => setActiveTab('login')}>
            Login
          </button>

          <button
            className={`px-4 py-2 rounded-t-lg ${activeTab === 'signup' ? 'bg-red-500 text-white' : 'bg-gray-200  hover:bg-gray-400 transition duration-200'}`}
            onClick={() => setActiveTab('signup')}>
            Cadastro
          </button>
        </div>
        <div className="w-full p-8 bg-white rounded-b-lg shadow-md">
          {activeTab === 'login' ? (
            <LoginForm />
          ) : (
            <SignupForm />
          )}
        </div>
      </div>
    </div>
    
  );
}

function LoginForm() {
  return (
    <div>
    <form>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
          Senha
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <button className="w-full px-4 py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-800 transition duration-300">
        Entrar
      </button>
    </form>
    </div>
  );
}

function SignupForm() {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
          Nome
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
          Senha
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <button className="w-full px-4 py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300">
        Cadastrar
      </button>
    </form>
  );
}
