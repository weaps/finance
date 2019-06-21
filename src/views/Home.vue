<template>
  <div class="home">
    <public-header></public-header>
    <public-swiper :list="swipierList"></public-swiper>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="grid">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PublicHeader from '@/common/header/header'
import PublicSwiper from '@/components/slider/slider'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      swipierList: [
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/82391/33/2206/65826/5d087c92Efd8cf721/e03f4e3ed71e4916.png?width=750&height=400',
          url: ''
        },
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/31588/6/14705/52443/5cbeb2b2Ea0648bba/e05f04db25d47126.png?width=750&height=400',
          url: ''
        },
        {
          scr: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/38925/1/7734/32802/5cef91cfE8962dc90/08a7df363c6465f2.png?width=750&height=400',
          url: ''
        }
      ]
    }
  },
  mounted() {
    window.console.log(location)
  },
  components: {
    HelloWorld,
    PublicHeader,
    PublicSwiper
  }
}
</script>
<style lang="scss" scoped>
  @import "../assets/css/rem";
  .home {
    padding-top: rem(100);
  }
  .grid {
    display: grid;
  }
</style>