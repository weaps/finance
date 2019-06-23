<template>
  <div class="home-swiper">
    <slider :list="swipierList"></slider>
  </div>
</template>

<script>
  import Slider from '@/components/slider/slider'
  export default {
    name: "swiper",
    data() {
      return {
        swipierList: [
          {
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/82391/33/2206/65826/5d087c92Efd8cf721/e03f4e3ed71e4916.png',
            url: ''
          },
          {
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/31588/6/14705/52443/5cbeb2b2Ea0648bba/e05f04db25d47126.png',
            url: ''
          },
          {
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/38925/1/7734/32802/5cef91cfE8962dc90/08a7df363c6465f2.png',
            url: ''
          }
        ]
      }
    },
    components: {
      Slider
    }
  }
</script>

<style lang="scss">
.home-swiper {
  .item {
  img {
    width: 100%;
    vertical-align: top;
  }
  }
  .swiper-pagination {
  .swiper-pagination-bullet {
    opacity: 1;
    width: 10px;
    height: 10px;
    background: rgba(255,255,255, .4);
  }
  .swiper-pagination-bullet-active {
    width: 20px;
    background: rgba(255,255,255, .8);
    border-radius: 4px;
  }
  }
}
</style>