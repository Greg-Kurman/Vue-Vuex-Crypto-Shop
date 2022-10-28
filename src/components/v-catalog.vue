<template>
    <h1>Catalog</h1>
    <div class="v-catalog">
        <vCatalogItem
         v-for="product in PRODUCTS" 
         :key="product.article" 
         v-bind:product_data="product"
         @addToCart="addToCart" 
          />
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
            "PRODUCTS"
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
</style>