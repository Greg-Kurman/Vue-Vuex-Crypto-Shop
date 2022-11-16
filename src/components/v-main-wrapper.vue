<template>
    <div class="app_main">
        <div class="v-main-wrapper">
            <div>
                <p>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </p>
            </div>
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
    max-width: 90%;
    margin: 0 auto;
}
 
</style>