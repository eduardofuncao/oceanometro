"use client";
// components/AuthTabs.js
import { useState } from 'react';
import Link from 'next/link';

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href="/" className="fixed top-4 left-4 text-red-700 hover:underline">
        Voltar
      </Link>
      <div className="flex mb-6 mt-8">
        <button
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'login' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'signup' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('signup')}
        >
          Cadastro
        </button>
      </div>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md relative">
        {activeTab === 'login' ? (
          <LoginForm />
        ) : (
          <SignupForm />
        )}
      </div>
    </div>
  );
}

function LoginForm() {
  return (
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
      <button className="w-full px-4 py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700">
        Entrar
      </button>
    </form>
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
      <button className="w-full px-4 py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700">
        Cadastrar
      </button>
    </form>
  );
}
