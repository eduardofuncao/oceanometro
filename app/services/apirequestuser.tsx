import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar usuários');
  }
};