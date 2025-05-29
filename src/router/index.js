/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/login/login.vue'; 
import Cadastro from '@/pages/cadastro/cadastre';
import Cadastre from '@/pages/cadastro/cadastre.vue';

const routes = [
  {
    path: '/cadastro',
    name: 'Login',
    component: Login, // Nome do componente importado
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },

  {
    path: '/cadastre.vue',
    name: 'Cadastre',
    component: Cadastre,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;