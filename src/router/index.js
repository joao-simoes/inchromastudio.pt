//DEFAULT
import Vue from 'vue'
import VueRouter from 'vue-router'

//PAGES
import Home from '../views/Home.vue'
import PhotographyIndex from '../components/PhotographyIndex.vue'
import Shop from '../views/Shop.vue'
import Contacts from '../views/Contacts.vue'
import About from '../views/About.vue'

//ALBUMS
import Product from '../views/albums/Product.vue'
import Gastronomy from '../views/albums/Gastronomy.vue'
import Portrait from '../views/albums/Portrait.vue'
import Architecture from '../views/albums/Architecture.vue'
import Lifestyle from '../views/albums/Lifestyle.vue'

//MISC
import NotFound from '../views/NotFound.vue'
import Soon from '../views/Soon.vue'



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
        path: '/photography/digital/gastronomy',
        name: 'Gastronomy Album',
        component: Gastronomy
    },
    {
        path: '/photography/digital/portrait',
        name: 'Portrait Album',
        component: Portrait
    },
    {
        path: '/photography/digital/architecture',
        name: 'Architecture Album',
        component: Architecture
    },
    {
        path: '/photography/digital/lifestyle',
        name: 'Lifestyle Album',
        component: Lifestyle
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
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router