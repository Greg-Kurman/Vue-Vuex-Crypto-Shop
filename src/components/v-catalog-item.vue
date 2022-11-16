<template>
    <div class="v-catalog-item box">
        <div v-if="product_data.popular" class="ribbon">
            <span>POPULAR</span>
        </div>
        <img :src=" require('../assets/images/' + product_data.image)" alt="">
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">Цена: {{product_data.price}} $</p>
        <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">Добавить в карзину</button>
    </div>
</template>

<script>

export default {
    name: "v-catalog-item",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {

    },
    computed: {},
    methods: {
       addToCart(){
        this.$emit('addToCart', this.product_data)
       }
    }
}
</script>

<style>
.v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8px;
    
}

.box {
  width: 120px; height: 230px;
  position: relative;
  border: 1px solid #BBB;
  background: #EEE;
  margin: 20px;
}
.ribbon {
  position: absolute;
  right: -5px; top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px; height: 75px;
  text-align: right;
}
.ribbon span {
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 100px;
  display: block;
  background: #79A70A;
  background: linear-gradient(#9BC90D 0%, #79A70A 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px; right: -21px;
}
.ribbon span::before {
  content: "";
  position: absolute; left: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid #79A70A;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #79A70A;
}
.ribbon span::after {
  content: "";
  position: absolute; right: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid transparent;
  border-right: 3px solid #79A70A;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #79A70A;
}
</style>