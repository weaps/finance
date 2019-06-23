<template>
  <ul class="home-list pt20">
    <li v-for="item of list" :key="item.img">
      <img :src="item.img" alt="">
      <h3 class="name" v-text="item.name"></h3>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "home-list",
    data() {
      return {
        list: [
          {
            img: '//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp',
            name: '苏宁易购'
          },
          {
            img: '//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp',
            name: '天猫超市'
          },
          {
            img: '//gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp',
            name: '天猫国际'
          },
          {
            img: '//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp',
            name: '聚划算'
          }
          ,
          {
            img: '//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp',
            name: '哈哈哈'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "../../../assets/css/rem";
.home-list {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding: rem(10) 0;
  li {
    width: 100%;
    display: inline-block;
    background: #fff;
    text-align: center;
    img {
      width: rem(96);
      height: rem(96);
    }
    .name {
      margin: 0;
      font-size: rem(24);
    }
  }
}
</style>