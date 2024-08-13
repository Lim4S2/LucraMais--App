import axios from 'axios';

const apiUrl = 'http://10.0.2.2:5000/api'; 

export const registerUser = async (comercio, email, cpf, senha) => {
  try {
    
    const response = await axios.post(`${apiUrl}/register`, {
      comercio,
      email,
      cpf,
      senha,
    });
    
    return response.data;
  } catch (error) {
    
    console.error('Erro ao registrar usuário:', error);

    
    throw error;
  }
};
