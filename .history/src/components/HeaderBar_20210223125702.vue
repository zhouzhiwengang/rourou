<template>
  <div>
    <van-nav-bar
    title="京东商城"
    left-text="返回"
    right-text="更多"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
 
  </div>
</template>

<script>
export default {
    methods: {
        onClickLeft() {
            console.log('返回')
        },
        onClickRight() {
            console.log('更多')
        },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
