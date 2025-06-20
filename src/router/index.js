/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/login/login.vue'; 
import Cadastre from '@/pages/cadastro/cadastre2.vue';
import Home from '@/pages/home1/home.vue';
import Clinicas from '@/pages/home1/clinicas.vue';
import Doencas from '@/pages/home1/doencas.vue';
import PagInicial from '@/pages/PagInicial.vue';
// import Ongs from '@/pages/home1/ongs.vue';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login, // Nome do componente importado
  },
  {
    path: '/cadastro/cadastre2',
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
    path: '/home1/doencas',
    name: 'Doencas',
    component: Doencas,
  },
    {
    path: '/',
    name: 'Pagina inicial',
    component: PagInicial,
  },
  //   {
  //   path: '/home1/ongs',
  //   name: 'Ongs',
  //   component: Ongs,
  // },
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

router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
        try {
            await api.get('/api/user');
            next();
        } catch (error) {
            next('/');
        }
    } else {
        next();
    }
});

export default router;