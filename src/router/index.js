import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home-view'
import Players from '../components/players-view'
import Favorites from '../components/favorites-view'

Vue.use(VueRouter);

const routes = [
    { path: '/', alias: '/home', component: Home },
    { path: '/players', component: Players },
    { path: '/favorites', component: Favorites },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router