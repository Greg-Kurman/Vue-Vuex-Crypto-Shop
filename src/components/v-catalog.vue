<template>
      <h2>Каталог</h2>
    <div class="go_to_cart">
      
        <router-link :to="{ name: 'Cart' }">
            <h3>Карзина: {{ CART.length }}</h3>
        </router-link>

    </div>
    <div class="v-catalog">

        <vCatalogItem v-for="product in PRODUCTS" :key="product.article" :product_data="product"
            @addToCart="addToCart" />
    </div>
</template>


<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem
    },
    props: {},
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }

}
</script>

<style>
.v-catalog {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.go_to_cart {
    position: absolute;
    top: 30px;
    right: 30px;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8px;
    margin-bottom: 8px;
}
</style>