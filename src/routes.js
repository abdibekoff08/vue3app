import { createRouter, createWebHistory} from "vue-router";

const routerHistory = createWebHistory();

import HomePage from '@/pages/pageHome';
import AboutPage from '@/pages/pageAbout';
import NotFoundPage from '@/pages/notFound';

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/:CathAll(.*)',
            name: '404',
            component: NotFoundPage,
        },
    ],
});

export default routers;