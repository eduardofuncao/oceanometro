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


//integracao com  JAVA


/*
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/auth', // Altere a URL para corresponder à sua API Java
});

export const saveUser = async (userData: any): Promise<void> => {
  try {
    await api.post('/signup', userData); // Altere o endpoint para o de cadastro de usuários
  } catch (error) {
    throw new Error('Erro ao salvar usuário na API');
  }
};
*/