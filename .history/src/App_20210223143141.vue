<template>
  <div id="app">
    <header-bar></header-bar>
    <div class="content-div">
      <router-view/>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Header from './components/HeaderBar.vue'
import Footer from './components/FooterBar.vue'
export default {
  name: 'App',
  components: {
      'header-bar': Header,
      'footer-bar': Footer
    },
}
</script>

<style>
.content-div {
    margin-bottom: 55px;
  }
</style>
