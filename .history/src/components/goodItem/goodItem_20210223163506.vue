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
<style lang="stylus" scoped>
.good-item
  background-color #fff
  padding 4px 6px
  margin-bottom 6px

  .head
    padding 4px 0

    .border
      border-left 3px solid red

    .title
      margin-left 6px
      font-weight 700

    .describe
      font-size 12px
      margin-left 6px
      color #8f8f8f

    .more
      float right
      color #000
      border-radius 10px
      font-size 12px
      border 1px solid #000
      padding 0 6px
</style>