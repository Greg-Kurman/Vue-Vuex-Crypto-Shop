<template>
    <div class="v-cart">
        <h1>Корзина</h1>
        <div class="go_to_cart">
            <router-link to="/">
              <button><h3>Каталог</h3></button>  
            </router-link>
        </div>
        <h3 v-if="!CART.length">Добавьте криптовалюту из каталога</h3>
        <v-cart-item v-for="(item, index) in CART" 
            :key="item.article" :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
             />
        <div class="v-cart__total">
            <div>Total: {{ totalCost }} $ </div>
        </div>
    </div>
</template>

<script>

import vCartItem from './v-cart-item.vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: 'v-cart',
    components: {
        vCartItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters([
            'CART'
        ]),
        totalCost() {
            let res = []
            if (this.CART.length > 0) {
                for (let item of this.CART) {
                    res.push(item.price * item.quantity)
                }
                res = res.reduce(function (sum, el) {
                    return sum + el
                })
                return res
            } else {
                return 0
            }
          
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        increment(index){
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index){
            this.DECREMENT_CART_ITEM(index)
        }
        

    }
}
</script>

<style>
.v-cart {
    margin-bottom: 80px;
}

.go_to_cart {
    position: absolute;
    top: 30px;
    right: 30px;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8px;
    margin-bottom: 8px;
}

.v-cart__total {

    font-size: 20px;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgb(24, 129, 24);
    color: rgb(255, 255, 255);
    padding: 25px 0;

}
</style>