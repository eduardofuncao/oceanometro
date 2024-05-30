import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:4000',
})

export const getUsers= async ()=>{
    const response = await api.get('/users')
    return response.data
}



//integracao com  JAVA


/* 
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/auth', // Altere a URL para corresponder à sua API Java
});

export const loginUser = async (userData: any): Promise<any> => {
  try {
    const response = await api.post('/login', userData); // Altere o endpoint para o de autenticação
    return response.data; // Você pode retornar os dados do usuário ou token, dependendo da sua implementação
  } catch (error) {
    throw new Error('Erro ao fazer login');
  }
};
*/