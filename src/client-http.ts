import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.recebafacil.com',
});

export default api;
