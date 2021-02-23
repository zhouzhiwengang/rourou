<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/HeaderBar.vue'
export default {
  name: 'App',
  components: {
      'header-bar': Header
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
