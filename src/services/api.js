import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.13:8000/api',
  headers:{'accept':'application/json'}, 
  timeout: 5000,
});

export default api;
