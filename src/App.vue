<template>
  <div>
    <vMain/>

  </div>
</template>

<script>
import vMain from './components/v-main-wrapper.vue'

export default {
  name: 'App',
  components: {
    vMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   
}

button {
  border: 0;
 padding: 5px 5px;
 background-color: rgb(24, 129, 24);
 color: azure;
 border-radius: 2px;
}
</style>
