<template>
   <div ref="wrapper" class="wrapper">
    <div ref="content" class="content">
      <ul>
        <li class="li-item" ref="liItem" v-for="(item) in initData" :key="item.Goodid" @click="showGood(item)">
          <div class="img"><img :src="item.GoodImg" alt=""></div>
          <div class="title">{{item.Goodname}}</div>
          <div class="price">
            <span class="new-price">￥{{item.GoodPrice}}</span>
            <span class="old-price">
              <del>￥{{item.GoodPriceaftersale}}</del>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
   name: "scrollX",

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.wrapper
  position relative

.li-item
  display inline-block
  width 100px
  margin-right 14px

  img
    width 100px
    height 100px

  .title
    overflow hidden
    text-overflow ellipsis
    white-space nowrap

  .new-price
    color #ff4c0a

  .old-price
    font-size 12px
    color #333
    margin-left 6px
</style>
