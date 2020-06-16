import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Players from '../components/Players'
import Favorites from '../components/Favorites'

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