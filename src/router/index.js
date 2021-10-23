import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Routes from '../views/Routes.vue'
import Validate from '../views/Validate.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/routes',
        name: 'Routes',
        component: Routes
    },
    {
        path: '/validate',
        name: 'Validate',
        component: Validate
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
