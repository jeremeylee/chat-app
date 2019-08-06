import axios from 'axios';

const login = async (credentials) => {
  const response = await axios.post('/login', credentials);
  return response.data;
}

const register = async (credentials) => {
  await axios.post('/register', credentials);
}

export default { login, register };
