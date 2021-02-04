import Vue from 'vue'
import Router from 'vue-router'
import auth from './modules/auth'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '',
    redirect: 'login',
  },
  ...auth,
];

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

const router = createRouter();

export default router;
