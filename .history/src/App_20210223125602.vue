<template>
  <div id="app">
    <header-bar></header-bar>
    <div class="content-div">
      <router-view/>
    </div>
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
.content-div {
    margin-bottom: 55px;
  }
</style>
