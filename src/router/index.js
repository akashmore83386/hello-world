import Router from 'vue-router';
import About from '../views/About'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = new Router({
    routes: routes,
    mode: 'history',
})

export default router