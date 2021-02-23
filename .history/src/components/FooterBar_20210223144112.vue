<template>
  <div>
    <van-tabbar v-model="active">
        <van-tabbar-item replace to="/home" icon="bag-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/user" icon="user-o">用户</van-tabbar-item>
    </van-tabbar>
 
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
