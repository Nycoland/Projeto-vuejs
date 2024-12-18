/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'
// import { setupLayouts } from 'virtual:generated-layouts'
// import { routes } from 'vue-router/auto-routes'
// import login from '@/router/login/index.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: setupLayouts(routes),
// })
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/login/index.vue'; 
import Cadastro from '@/pages/cadastro/cadastre-se.vue';
import Ong from '@/pages/ongs/ong.vue';
import Home from '@/pages/homee/home.vue';
import Doenças from '@/pages/doencas/doencas1.vue';
import Clinicas from '@/pages/clinica/clinicas.vue';
import Inicial from '@/pages/inicial/index.vue';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login, // Nome do componente importado
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
  {
    path: '/ongs',
    name: 'Ong',
    component: Ong,
  },
  {
    path: '/homee',
    name: 'Home',
    component: Home,
  },
  {
    path: '/doencas',
    name: 'Doenças',
    component: Doenças,
  },
  {
    path: '/clinica',
    name: 'Clinicas',
    component: Clinicas,
  },
  {
    path: '/inicial',
    name: 'Inicial',
    component: Inicial,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




// Workaround for https://github.com/vitejs/vite/issues/11804
// router.onError((err, to) => {
//   if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
//     if (!localStorage.getItem('vuetify:dynamic-reload')) {
//       console.log('Reloading page to fix dynamic import error')
//       localStorage.setItem('vuetify:dynamic-reload', 'true')
//       location.assign(to.fullPath)
//     } else {
//       console.error('Dynamic import error, reloading page did not fix it', err)
//     }
//   } else {
//     console.error(err)
//   }
// })

// router.isReady().then(() => {
//   localStorage.removeItem('vuetify:dynamic-reload')
// })

// export default router
