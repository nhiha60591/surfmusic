import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '',
    redirect: 'login',
  },
  {
    path: '/login',
    component: () => import('../components/Login'),
  },
  {
    path: '/forgot-password',
    component: () => import('../components/ForgotPassword'),
  },
];

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

const router = createRouter();

export default router;
