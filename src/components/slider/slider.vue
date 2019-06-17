<template>
  <section class="swiper-container">
    <swiper :class="cname" :options="options">
      <swiper-slide>s</swiper-slide>
    </swiper>
  </section>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
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
      options: {
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