<template>
    <div class="wrapper_catalog">
        <div class="go_to_cart">
            <router-link :to="{ name: 'Cart' }" class="fixed_btn">
                <button class="fixed_btn">
                    <h3>Корзина: {{ CART.length }}</h3>
                </button>
            </router-link>
        </div>
        <div class="range-slider">
            <div>
                <input type="range" min="0" max="1000" step="10" v-model.number="minPrice" @change="setRangeSlide" >
                <input type="text" min="0" max="1000"  v-model.number="minPrice" @change="setRangeSlide">
                Мин цена: {{ minPrice }}$
                <input type="range" min="0" max="1000" step="10" v-model.number="maxPrice" @change="setRangeSlide">
                <input type="text" min="0" max="1000"   v-model.number="maxPrice" @change="setRangeSlide">
                Макс цена: {{ maxPrice }}$
            </div>
           
        </div>
        <div class="valuta">
                {{ date }}
                <div id="USD">Доллар США $ — {{ usd }} руб.</div>
                <div id="EUR">Евро € — {{ eur }} руб.</div>
            </div>

        <div class="v-catalog">
            <v-catalog-item v-for="product in sortedProducts" :key="product.article" :product_data="product"
                @addToCart="addToCart" />
        </div>
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
            minPrice: 0,
            maxPrice: 1000,
            sortedProducts: [],
            usd: 0,
            eur: 0,
            date: 0,
        }

    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'VALUTE',
            'CART'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'GET_VALUTE_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
        setRangeSlide() {
            if (this.minPrice > this.maxPrice) {
                let newp = this.maxPrice
                this.maxPrice = this.minPrice
                this.minPrice = newp
            }
            this.sortByCategories()
        },
        sortByCategories() {
            let vm = this;
            this.sortedProducts = [...this.PRODUCTS]
            this.sortedProducts = this.sortedProducts.filter(function (item) {
                return item.price >= vm.minPrice && item.price <= vm.maxPrice
            })
        },

        showValute(data) {
            console.log(data.Valute.USD.Value)
            this.date = data.Date
            this.usd = data.Valute.USD.Value.toFixed(2)
            this.eur = data.Valute.EUR.Value.toFixed(2)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if (response.data) {
                    this.sortByCategories()
                }
            }),

            this.GET_VALUTE_FROM_API()
                .then((response) => {
                    if (response.data) {
                        this.showValute(response.data)
                    }
                })
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

.wrapper_catalog {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}

.fixed_btn {
    position: -webkit-sticky;
    position: sticky;
    top: 20px;

    background-color: #00AA00;
    z-index: 999;
}

.go_to_cart {
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 5px;
    margin-bottom: 8px;
}

.range-slider {
    display: flex;
    flex-direction: column;
    width: 20%;
}

.valuta {
    max-width: 30%;
    position: absolute;
    top: 0;
    left: 40%;
}


input[type=range] {
    height: 15px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #002200;
    background: #205928;
    border-radius: 34px;
    border: 1px solid #18D501;
}

input[type=range]::-webkit-slider-thumb {
    box-shadow: 3px 3px 3px #00AA00;
    border: 5px solid #83E584;
    height: 2px;
    width: 23px;
    border-radius: 23px;
    background: #439643;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4.5px;
}
</style>