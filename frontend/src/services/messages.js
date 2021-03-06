import axios from 'axios';
const baseURL = '/api/messages';

const getMessages = async () => {
  const response = await axios.get(baseURL);
  return response.data;
}

const sendMessage = async (messageObject) => {
  const response = await axios.post(baseURL, messageObject);
  return response.data;
}

const updateMessage = async (messageObject, id) => {
  const response = await axios.put(`${baseURL}/${id}`, messageObject);
  return response.data;
}

const deleteMessage = async (id) => {
  const response = await axios.delete(`${baseURL}/${id}`);
  return response.data;
}
export default { getMessages, sendMessage, updateMessage, deleteMessage };
