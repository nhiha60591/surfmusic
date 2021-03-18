import Vue from 'vue'
import Router from 'vue-router'
import auth from './modules/auth'
import account from './modules/account'
import Layout from '../layouts/app'
import Home from '../pages/home'
import store from "../store";
// import playlist from './modules/playlist'

Vue.use(Router)

export const constantRoutes = [{
        path: '',
        redirect: 'home',
    },
    {
        path: '/',
        component: Layout,
        children: [{
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

const whiteList = ['/login', '/forgot-password']

router.beforeEach(async(to, from, next) => {
    if (!store.getters['user/isAuthenticated']) {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
        }
    }
    next();
})
router.afterEach(() => {
    if (window.innerWidth <= 600 && store.getters['app/isToggleMenu']) {
        store.dispatch('app/toggleMenu')
    }
})

export default router;