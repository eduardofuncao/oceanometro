"use client";
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/apirequestuser';
import Image from 'next/image';
import top1 from '../../assets/top1.png';
import top2 from '../../assets/top2.png';
import top3 from '../../assets/top3.png';

interface User {
  id: number;
  name: string;
  email: string;
  CPF: string;
  value: any; // Ajuste o tipo aqui para refletir a possibilidade de diferentes tipos
}

const TopDoadores = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        const sortedData = data
          .map((user: User) => ({ ...user, value: parseFloat(user.value) })) // Converte value para número
          .sort((a: User, b: User) => b.value - a.value)
          .slice(0, 10);
        setUsers(sortedData);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchData();
  }, []);

  const getMedal = (index: number) => {
    if (index === 0) {
      return <Image src={top1} alt="Gold Medal" width={24} height={24} className="inline-block mr-2" />;
    } else if (index === 1) {
      return <Image src={top2} alt="Silver Medal" width={24} height={24} className="inline-block mr-2" />;
    } else if (index === 2) {
      return <Image src={top3} alt="Bronze Medal" width={24} height={24} className="inline-block mr-2" />;
    }
    return null;
  };

  return (
    <div className="bg-transparent flex items-center justify-center py-8">
      <div className="w-full max-w-xl p-8 bg-slate-800 shadow-md rounded-lg"> {/* Ajustei a largura máxima para max-w-xl */}
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-200">Top 10 Contribuidores</h1>
        <ul className="text-lg text-white space-y-4">
          {users.map((user, index) => (
            <li key={user.id} className="flex items-center justify-between bg-slate-700 p-4 rounded-lg">
              <span className="font-bold">
                {getMedal(index)}
                {index + 1}. {user.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopDoadores;
