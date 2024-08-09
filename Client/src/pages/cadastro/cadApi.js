import axios from 'axios';

const apiUrl = 'http://10.0.2.2:5000/api'; // Certifique-se de que este URL está correto para o seu ambiente

// Função para registrar um novo usuário
export const registerUser = async (comercio, email, cpf, senha) => {
  try {
    // Enviando uma requisição POST para o endpoint /register com todos os dados necessários
    const response = await axios.post(`${apiUrl}/register`, {
      comercio,
      email,
      cpf,
      senha,
    });
    
    // Retornando os dados da resposta
    return response.data;
  } catch (error) {
    // Log do erro para depuração
    console.error('Erro ao registrar usuário:', error);

    // Lançando erro para que possa ser tratado no componente
    throw error;
  }
};
