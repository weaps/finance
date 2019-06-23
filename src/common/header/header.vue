<template>
  <div class="header clearfix">
    <div class="login pull-left">
      <router-link class="link" to="/">登录</router-link>
      <router-link class="link" to="/">注册</router-link>
    </div>
    <div class="pull-right">
      <button class="btn btn-danger mr20">下载</button>
    </div>
  </div>
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
  .login {
    font-size: rem(24);
    .link {
      padding: 0 rem(15);
      &:last-child {
        position: relative;
        &:before {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          content: '';
          border-left: 1px solid #cccccc;
        }
      }
    }
  }
}
</style>