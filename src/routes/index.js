import Vue from 'vue'
import Router from 'vue-router'
import auth from './modules/auth'
import account from './modules/account'
import Layout from '../layouts/app'
import Home from '../pages/home'
import store from "../store"
import authMiddleware from "../middleware/auth"
// import directorMiddleware from "../middleware/director"
// import artistMiddleware from "../middleware/artist"
// import playlist from './modules/playlist'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '',
        redirect: 'home',
    },
    {
        path: '/403',
        name: '403',
        component: () => import ('../pages/404'),
    },
    {
        path: '/',
        component: Layout,
        meta: {
            middleware: [authMiddleware],
        },
        children: [
            {
                path: 'home',
                component: Home,
            },
            {
                path: '404',
                component: () =>
                    import ('../pages/404'),
            },
            {
                path: 'music',
                component: () =>
                    import ('../pages/music'),
            },
            {
                path: 'upload-my-music',
                component: () =>
                    import ('../pages/upload-my-music'),
            },
            {
                path: 'confirm-form',
                component: () =>
                    import ('../pages/confirm-form'),
            },
            {
                path: 'create-playlist',
                component: () =>
                    import ('../pages/create-playlist'),
            },
            {
                path: 'playlist',
                component: () =>
                    import ('../pages/playlist'),
            },
            {
                path: 'playlist/mine',
                component: () =>
                    import ('../pages/mine'),
            },
            {
                path: 'playlist/shared',
                component: () =>
                    import ('../pages/Shared'),
            },
            {
                path: 'playlist/artist',
                component: () =>
                    import ('../pages/Artist'),
            },
            {
                path: 'playlist/:id',
                component: () =>
                    import ('../pages/playlist-detail'),
            },
            {
                path: 'requested-playlist',
                component: () =>
                    import ('../pages/requested-playlist'),
            },
            {
                path: 'requested-playlist-detail/:id',
                component: () =>
                    import ('../pages/requested-playlist-detail'),
            },
            {
                path: 'add-music',
                component: () =>
                    import ('../pages/add-music'),
            },
            {
                path: 'music-detail',
                component: () =>
                    import ('../pages/MusicDetail'),
            }
        ]
    },
    ...auth,
    ...account,
    // ...playlist,
    {
        path: '*',
        redirect: '/404',
    }
];

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history',
    routes: constantRoutes,
});

const router = createRouter();

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  if (!subsequentMiddleware) return context.next

  return (...parameters) => {
    context.next(...parameters)
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]

    const context = {
      from,
      next,
      router,
      to,
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({ ...context, next: nextMiddleware })
  }

  return next()
})

router.afterEach(() => {
    if (window.innerWidth <= 600 && store.getters['app/isToggleMenu']) {
        store.dispatch('app/toggleMenu')
    }
})

export default router;
