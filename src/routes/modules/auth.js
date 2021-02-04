const authRoutes = [
  {
    path: '/login',
    component: () => import('../../pages/auth/login'),
  },
  {
    path: '/forgot-password',
    component: () => import('../../pages/auth/forgot-password'),
  },
];

export default authRoutes;
