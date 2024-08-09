import axios from 'axios';

const apiUrl = 'http://10.0.2.2:5000/api'; // Ajuste para o URL da sua API

// Função para realizar o login
export const loginUser = async (email, senha) => {
  try {
    // Enviando uma requisição POST para o endpoint /login
    const response = await axios.post(`${apiUrl}/login`, {
      email,
      senha
    });
    
    // Retornando os dados da resposta
    return response.data;
  } catch (error) {
    // Lançando erro para que possa ser tratado no componente
    throw error;
  }
};
