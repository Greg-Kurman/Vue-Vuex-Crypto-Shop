import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../components/v-catalog.vue'
import Cart from '../components/v-cart.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Catalog', component: Catalog },
        { path: '/cart', name: 'Cart', component: Cart, props:true },

    ]
})


export default router