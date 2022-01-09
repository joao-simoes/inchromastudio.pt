import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTransition from "vue-page-transition";
import VueImg from 'v-img';

const vueImgConfig = {
    altAsTitle: true,
    openOn: 'click',
    thumbnails: true,
}
Vue.use(VueImg, vueImgConfig);
Vue.use(VuePageTransition);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')