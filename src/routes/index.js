import Vue from 'vue'
import Router from 'vue-router'
import auth from './modules/auth'
import Layout from '../layouts/app'
import Home from '../pages/home'
import store from "../store";

Vue.use(Router)

export const constantRoutes = [
  {
    path: '',
    redirect: 'home',
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'music',
        component: () => import('../pages/music'),
      },
      {
        path: 'playlist',
        component: () => import('../pages/playlist'),
      },
    ]
  },
  ...auth,
];

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: constantRoutes,
});

const router = createRouter();

router.afterEach(() => {
  if (window.innerWidth <= 600 && store.getters['app/isToggleMenu']) {
    store.dispatch('app/toggleMenu')
  }
})
export default router;
