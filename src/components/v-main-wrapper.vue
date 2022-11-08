<template>
    <div class="v-main-wrapper">

        <div>
            <p>
                <!-- use the router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
                


                <keep-alive>
                    <router-view></router-view>
                
                </keep-alive>

            </p>
      
        </div>
  
    </div>
</template>


<script>


import { mapGetters } from 'vuex'

export default {
    name: "v-main-wrapper",
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
    methods: {},
    watch: {},
    mounted() {
        console.log('mounted app')
    }
}
</script>


<style  >
.v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
}
</style>