/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/login/login.vue'; 
import Cadastro from '@/pages/cadastro/cadastre.vue';
import Cadastre from '@/pages/cadastro/cadastre2.vue';
import Home from '@/pages/home1/home.vue';
import Clinicas from '@/pages/home1/clinicas.vue';
import Doencas from '@/pages/home1/doencas.vue';
import PagInicial from '@/pages/PagInicial.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login, // Nome do componente importado
  },
  {
    path: '/cadastro/cadastre',
    name: 'Cadastro',
    component: Cadastro,
  },

  {
    path: '/cadastre',
    name: 'Cadastre',
    component: Cadastre,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
    {
    path: '/home1/clinicas',
    name: 'Clinicas',
    component: Clinicas,
  },
    {
    path: '/doencas',
    name: 'Doencas',
    component: Doencas,
  },
    {
    path: '/',
    name: 'Pagina inicial',
    component: PagInicial,
  },
    {
    path: '/home1/clinicas',
    name: 'Clinicas',
    component: Clinicas,
  },
  //   {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  // },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;