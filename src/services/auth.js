import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000/api'
});

// Interceptor para adicionar token às requisições
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  async login(credentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      localStorage.setItem('authToken', response.data.token);
      return response.data.user;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async socialLogin(provider) {
    try {
      // Redirecionamento ou popup para login social
      window.location.href = `${api.defaults.baseURL}/auth/${provider}`;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  handleError(error) {
    if (error.response) {
      // Erros da API
      const message = error.response.data?.message || 'Erro na requisição';
      const errors = error.response.data?.errors || {};
      return { message, errors };
    } else {
      // Erros de rede ou outros
      return { message: 'Erro de conexão. Tente novamente.', errors: {} };
    }
  }
};