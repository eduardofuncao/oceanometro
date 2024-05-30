"use client";
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/apirequestuser'; 

interface User {
  id: number;
  name: string;
  email: string;
  CPF: string;
  value: any; 
}

const TopDoadores = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        const sortedData = data
          .map((user: User) => ({ ...user, value: parseFloat(user.value) })) 
          .sort((a: User, b: User) => b.value - a.value)
          .slice(0, 10);
        setUsers(sortedData);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-transparent flex items-center justify-center py-8">
      <div className="w-full max-w-3xl p-8 bg-slate-800 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-200">Top 10 Contribuidores</h1>
        <ul className="text-lg text-white space-y-4">
          {users.map((user, index) => (
            <li key={user.id} className="flex items-center justify-between bg-slate-700 p-4 rounded-lg">
              <span className="font-bold">{index + 1}. {user.name}</span>
              <span className="text-cyan-400">
                R$ {typeof user.value === 'number' ? user.value.toFixed(2) : 'Valor inválido'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopDoadores;
