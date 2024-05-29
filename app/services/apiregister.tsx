import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const saveUser = async (userData: any): Promise<void> => {
  try {
    await api.post('/users', userData);
  } catch (error) {
    throw new Error('Erro ao salvar usuário na API');
  }
};