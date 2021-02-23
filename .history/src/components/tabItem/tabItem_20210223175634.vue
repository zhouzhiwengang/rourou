<template>
  <div class="tab-item">
    <div class="item" v-for="item in data" :key="item.Goodid" @click="showGood(item)">
      <div class="item-detail">
        <img v-lazy="item.GoodImg" alt="">
        <div class="desc">{{item.Gooddescribe}}</div>
        <div class="price">
          <span class="new-price">￥{{item.GoodPrice}}</span>
          <span class="old-price">
            <del>￥{{item.GoodPriceaftersale}}</del>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: "tableItem",
   props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    showGood(item) {
      this.setGood(item);
      this.$router.push('/Good');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>