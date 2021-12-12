import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photography from '../views/Photography.vue'
import Contacts from '../views/Contacts.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/photography',
        name: 'Photography',
        component: Photography
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/*',
        name: 'Not Found',
        component: NotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router