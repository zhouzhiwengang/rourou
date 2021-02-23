<template>
  <div>
        购物车
  </div>
</template>

<script>
export default {
   name: "goodItem",
    props: {
    title: String,
    describe: String,
    moreRoute: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>