<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>Цена:{{cart_item_data.price}}$</p>
            <p>Артикль:{{cart_item_data.article}}</p>
        </div>
        <p>Количество:</p>
        <div class="v-cart-item__quantity"><button @click="decrement" style="background-color:darkred">-</button>  {{cart_item_data.quantity}}  <button @click="increment">+</button></div>
        <button @click="deleteFromCart">Удалить</button>
    </div>

</template>

<script>
 
export default {
    name: 'v-cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        deleteFromCart(){
            this.$emit('deleteFromCart', )
        },
        increment(){
            this.$emit('increment')
        },
        decrement(){
            this.$emit('decrement')
        }
    },
    mounted() {
        const cartItemData = this.cart_item_data;
	cartItemData.quantity = 1;
    }
}

</script>

<style  >

.v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8px;
    margin-bottom: 8px;

}


</style>