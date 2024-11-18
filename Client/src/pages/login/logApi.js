import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiUrl = 'http://10.0.2.2:5000/api';

export const loginUser = async (email, senha) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, { email, senha });

    // Armazene o token no AsyncStorage
    const { token } = response.data;
    await AsyncStorage.setItem('userToken', token);

    return response.data;
  } catch (error) {
    throw error;
  }
};
