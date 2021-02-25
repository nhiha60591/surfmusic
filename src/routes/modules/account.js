import Layout from "@/layouts/app";

const accountRoutes = [
  {
    path: '/account',
    component: Layout,
    children: [
      {
        path: 'basic',
        component: () => import('../../pages/account/basic'),
      },
      {
        path: 'profile',
        component: () => import('../../pages/account/profile'),
      },
    ],
  }
];

export default accountRoutes;
