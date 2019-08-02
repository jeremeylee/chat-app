import axios from 'axios';
const baseUrl = '/api/messages';

const getMessages = async () => {
  const response = await axios.get('http://localhost:3001/messages');
  return response.data;
}

export default { getMessages };
