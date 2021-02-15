import Vue from 'vue'
import Router from 'vue-router'
import auth from './modules/auth'
import Layout from '../layouts/app'
import Home from '../pages/home'

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
    ]
  },
  ...auth,
];

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

const router = createRouter();

export default router;
