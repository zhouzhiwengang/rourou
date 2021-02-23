<template>
  <section class="city-search">
    <van-icon class="search-icon" name="search" />
    <input  placeholder="请输入城市关键字" v-model="KeyWord">
    <van-icon class="clear-icon" name="clear" v-show="KeyWord" @click="clearSearchInput" />
  </section>
</template>

<script>
export default {
   data() {
        return {
            KeyWord: '',
        }
    },
    methods: {
        clearSearchInput() {
            this.KeyWord = '';
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .city-search {
        background-color: #F7F8FA;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 2.3rem;
        width: 94vw;
        margin: 2vw 4vw;
        border-radius: 8px;
    }
    .search-icon {
      margin-left: 5px;
    }
    input {
      margin: 0 1.5vw;
      background-color: #F7F8FA;
      border: 0px;
      font-size: 14px;
      flex: 1
    }
    .clear-icon { color: #999;}
  
</style>
