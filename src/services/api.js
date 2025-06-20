import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers:{'accept':'application/json'}, 
  timeout: 5000,
  withCredentials: true,
});

export default api;
