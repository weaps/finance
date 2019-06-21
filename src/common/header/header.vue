<template>
  <div class="header clearfix">adfasd</div>
</template>

<script>
  export default {
    name: "public-header"
  }
</script>

<style lang="scss" scoped>
@import "../../assets/css/rem";
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: rem(100);
  line-height: rem(100);
  background: rgba(255, 255, 255, .95);
  z-index: 10;
}
</style>