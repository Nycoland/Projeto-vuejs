/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import axios from 'axios';
import auth from './services/auth';
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')

axios.interceptors.request.use(config => {
  if (config.url.includes('/auth/login')) {
    config.method = 'post'; // Força método POST
  }
  return config;
});
