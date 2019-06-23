<template>
  <div class="home">
    <public-header></public-header>
    <home-swiper></home-swiper>
    <home-list></home-list>
    <home-green-hand></home-green-hand>
    <img alt="Vue logo" src="../../assets/logo.png">
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
import HomeSwiper from './components/home-swiper'
import HomeList from './components/home-list'
import HomeGreenHand from './components/green-hand'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {}
  },
  mounted() {
    window.console.log(location)
  },
  components: {
    HelloWorld,
    PublicHeader,
    HomeGreenHand,
    HomeSwiper,
    HomeList
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/css/rem";
  .home {
    padding-top: rem(100);
  }
  .grid {
    display: grid;
  }
</style>