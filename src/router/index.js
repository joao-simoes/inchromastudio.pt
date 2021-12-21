import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PhotographyIndex from '../components/PhotographyIndex.vue'
import Shop from '../views/Shop.vue'
import Contacts from '../views/Contacts.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Soon from '../views/Soon.vue'

//ALBUMS
import Product from '../views/albums/Product.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/photography/digital',
        name: 'Digital Photography',
        component: PhotographyIndex
    },
    {
        path: '/photography/digital/product',
        name: 'Product Album',
        component: Product
    },
    {
        path: '/video',
        name: 'Video',
        component: Soon
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
        path: '/shop',
        name: 'Shop',
        component: Shop
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