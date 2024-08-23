import axios from 'axios';

const apiUrl = 'http://10.0.2.2:5000/api'; 

export const loginUser = async (email, senha) => {
  try {
    
    const response = await axios.post(`${apiUrl}/login`, {
      email,
      senha
    });
    
    
    return response.data;
  } catch (error) {
    
    throw error;
  }
};
