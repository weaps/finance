<template>
  <section class="swiper-container">
    <swiper :class="cname" :options="swiperOptions" :not-next-tick="swiperOptions.notNextTick">
      <swiper-slide v-for="(item, index) of list" :key="index">
        <router-link :to="{name: item.url}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="swiperOptions.pagination"></div>
    </swiper>
  </section>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import '~swiper/dist/css/swiper.css'
  export default {
    name: "slider",
    props: {
      cname: {
        type: String,
        default() {
          return ''
        }
      },
      swiperOptions: {
        type: Object,
        default() {
          return {
            autoplay: true,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            },
            notNextTick: false
          }
        }
      },
      list: {
        type: Object,
        default() {
          return []
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>

</style>