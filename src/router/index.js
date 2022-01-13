//DEFAULT
import Vue from 'vue'
import VueRouter from 'vue-router'

//PAGES
import Home from '../views/Home.vue'
import PhotographyIndex from '../components/PhotographyIndex.vue'
import PhotographyAnalog from '../views/Analog.vue'
import Prints from '../views/Prints.vue'
import Contacts from '../views/Contacts.vue'
import About from '../views/About.vue'
import Video from '../components/VideoIndex.vue'

//DIGITAL PHOTOGRAPHY
import Product from '../views/albums/Product.vue'
import Gastronomy from '../views/albums/Gastronomy.vue'
import Portrait from '../views/albums/Portrait.vue'
import Architecture from '../views/albums/Architecture.vue'
import Lifestyle from '../views/albums/Lifestyle.vue'

//VIDEO
import Video_Product from '../views/video/Product.vue'
import Video_Architecture from '../views/video/Architecture.vue'
import Video_Gastronomy from '../views/video/Gastronomy.vue'
import Video_Lifestyle from '../views/video/Lifestyle.vue'
import Video_Corporate from '../views/video/Corporate.vue'

//MISC
import NotFound from '../views/NotFound.vue'
//import Soon from '../views/Soon.vue'



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
        path: '/photography/analog',
        name: 'Analog Photography',
        component: PhotographyAnalog
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
        component: Video
    },
    {
        path: '/video/product',
        name: 'Product Album',
        component: Video_Product
    },
    {
        path: '/video/architecture',
        name: 'Architecture Album',
        component: Video_Architecture
    },
    {
        path: '/video/gastronomy',
        name: 'Gastronomy Album',
        component: Video_Gastronomy
    },
    {
        path: '/video/lifestyle',
        name: 'Lifestyle Album',
        component: Video_Lifestyle
    },
    {
        path: '/video/corporate',
        name: 'Corporate Album',
        component: Video_Corporate
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
        path: '/prints',
        name: 'Prints',
        component: Prints
    },
    {
        path: '/*',
        name: 'Not Found',
        component: NotFound
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router