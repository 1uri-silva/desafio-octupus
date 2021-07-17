import axios from 'axios';

const api = axios.create({
  baseURL: 'https://octupus-challenge.vercel.app',
});

export default api;
