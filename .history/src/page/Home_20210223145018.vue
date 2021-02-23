<template>
  <div>
      <search></search>
        首页
  </div>
</template>

<script>
import Search from '@/components/SearchBar'
export default {
   name: "home",
   components: {
      'search': Search,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
