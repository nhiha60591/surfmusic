const authRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../../pages/auth/login'),
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import('../../pages/auth/forgot-password'),
  },
];

export default authRoutes;
