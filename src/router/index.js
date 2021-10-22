import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Routes from '../views/Routes.vue'

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
    }
]

const router = new VueRouter({
    routes
})

export default router
