<template>
  <div>
    <search></search>

    <div class="home-swipe">
      <div class="home-swipe-head">
        <span class="recommend">今日推荐</span>
        <span class="tips">每天都有新发现</span>
        <span class="swipe-num">
          <span class="indexPage">{{indexPage+1}}</span>
          <span class="pageNum">/4</span>
        </span>
      </div>
      <van-swipe :autoplay="3000" class="swipe" @change="changeSwipe">
        <van-swipe-item class="swipe-item"><img src="@/images/swipe/swipe-1.jpg"></van-swipe-item>
        <van-swipe-item class="swipe-item"><img src="@/images/swipe/swipe-2.jpg"></van-swipe-item>
        <van-swipe-item class="swipe-item"><img src="@/images/swipe/swipe-3.jpg"></van-swipe-item>
        <van-swipe-item class="swipe-item"><img src="@/images/swipe/swipe-4.jpg"></van-swipe-item>
      </van-swipe>
    </div>

     <good-item title="热销榜" describe="每日热销指南" moreRoute="/more/1">
         <scrollX scrollDir='scrollX' class="scroll-hot" :data="hotGoods">
        </scrollX>
     </good-item>

     <good-item title="低价火拼" describe="一起拼最划算" moreRoute="/more/1">
      <ul class="sale-ul">
        <li class="sale-item" v-for="item in saleGroupGoods.slice(0,3)" :key="item.Goodid" @click="showGood(item)">
          <img :src="item.GoodImg" alt="">
          <div class="sale-title">拼团价
            <span class="sale-price">￥{{item.GoodPriceaftersale}}</span>
          </div>
        </li>
      </ul>
    </good-item>

    <div class="recommend">
      <div class="recommend-title">
        <div class="border"></div>
        <div class="title">朋友圈的好货推荐</div>
        <div class="border"></div>
      </div>
      <van-tabs>
        <van-tab v-for="(value,key) in goodItems" :key="key" :title="key">
          <tabItem :data="value"></tabItem>
        </van-tab>
      </van-tabs>
    </div>


  </div>
</template>

<script>
import Search from '@/components/SearchBar'
import goodItem from '@/components/goodItem/goodItem';
import scrollX from '@/components/scroll/scrollX';
import tabItem from '@/components/tabItem/tabItem';
export default {
   name: "home",
   data() {
    return {
      indexPage: 1,
      hotGoods: [],
      saleGroupGoods: [],
      goodItems: {},
    };
  },
  components: {
      'search': Search,
      'goodItem': goodItem,
      'scrollX': scrollX,
      'tabItem': tabItem,
  },
  methods: {
    changeSwipe(index) {
        this.indexPage = index;
    },
    // 热门商品-模拟数据
    hotSaleInit() {
        var result =[
            {'GoodImg': require('@/images/good/pic-1.jpg'), 'Goodname':'小米6X', 'GoodPrice': '1299', 'GoodPriceaftersale':'1499'},
            {'GoodImg': require('@/images/good/pic-4.jpg'), 'Goodname':'飞科剃须刀', 'GoodPrice': '66', 'GoodPriceaftersale':'99'},
            {'GoodImg': require('@/images/good/pic-5.jpg'), 'Goodname':'华为honor', 'GoodPrice': '1199', 'GoodPriceaftersale':'1299'},
            {'GoodImg': require('@/images/good/pic-2.jpg'), 'Goodname':'小米8', 'GoodPrice': '2699', 'GoodPriceaftersale':'2999'},
        ]
        this.hotGoods = result
    },
    // 低价火拼-模拟数据
    saleGroupInit() {
        var result = [
            {'GoodImg': require('@/images/good/pic-2.jpg'), 'GoodPriceaftersale': '2699', 'Goodid': '1'},
            {'GoodImg': require('@/images/good/pic-3.jpg'), 'GoodPriceaftersale': '365', 'Goodid': '2'},
            {'GoodImg': require('@/images/good/pic-7.jpg'), 'GoodPriceaftersale': '1099', 'Goodid': '3'},
        ]
        this.saleGroupGoods = result
    },
    goodItemInit() {
        var result = {
            推荐: this.hotGoods,
            拼团: this.saleGroupGoods,
            发现: this.hotGoods,
            火爆: this.saleGroupGoods
        }
        this.goodItems = result
    }
  },
  mounted() {
     this.hotSaleInit();
     this.saleGroupInit();
     this.goodItemInit();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home
  background-color #eee
  margin-bottom 50px

.home-swipe
  box-sizing border-box
  padding 4px 6px
  background-color #fff
  border-bottom 1px solid #dedede

  .home-swipe-head
    padding 4px 0

    .recommend
      font-weight 700

    .tips
      font-size 12px
      margin-left 6px
      color #8f8f8f

    .swipe-num
      float right

      .indexPage
        font-weight 700

      .pageNum
        font-size 12px
        color #8f8f8f

  .swipe
    img
      width 100%

.scroll-hot
  width 100%
  overflow hidden

  .scroll-item
    display inline-block

.sale-ul
  display flex

  .sale-item
    flex-grow 1
    padding 2px 4px

    img
      width 100%

    .sale-title
      text-align center
      font-size 14px

      .sale-price
        color #ff4c0a
        font-size 16px

.discover-ul
  display flex
  height 100px
  margin-bottom 4px

  .discover-img
    width 100px

  .discover-li
    flex-grow 1
    margin-right 4px

    &:last-child
      margin-right 0

.recommend-title
  display flex
  justify-content center
  align-items center
  text-align center
  font-size 14px
  height 30px

  .border
    width 12px
    height 1px
    margin 0 8px
    background-color #000
</style>
