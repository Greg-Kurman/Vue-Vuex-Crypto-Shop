<template>
  <div>
    <vMain />

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

  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  

}

button {
  font-family: arial;
  color: #FFFFFF !important;
  font-size: 14px;
  text-shadow: 8px 1px 8px #7CACDE;
  box-shadow: 4px 1px 1px #F9F9F9;
  padding: 10px 25px;
  border-radius: 9px;
  border: 2px solid #86F071;
  background: #3F9939;
  background: linear-gradient(to top, #3F9939, #39992E);
}

button:hover {
  cursor: pointer;
  color: #00FF11 !important;
  background: #02AB02;
  background: linear-gradient(to top, #02AB02, #0B7A1E);
}
</style>
