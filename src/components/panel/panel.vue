<template>
  <div class="panel">
    <header class="panel-header border-b" :class="panelHeaderStyle">
      <span class="name" v-text="`- ${title} -`"></span>
      <router-link v-if="right.name" class="right" :to="right.path" v-text="right.name"></router-link>
    </header>
    <slot class="panel-body"></slot>
  </div>
</template>

<script>
  export default {
    name: "panel",
    props: {
      panelHeaderStyle: {
        type: String,
        default() {
          return ''
        }
      },
      title: {
        type: String,
        default() {
          return '标题'
        }
      },
      right: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/css/rem";
.panel {
  width: 100%;
  background: #ffffff;
  .panel-header {
    position: relative;
    height: rem(100);
    line-height: rem(100);
    text-align: center;
    font-size: rem(36);
    .right {
      position: absolute;
      top: 50%;
      right: rem(10);
      transform: translateY(-50%);
      color: #999999;
      font-size: rem(24);
      text-decoration: none;
    }
  }
  .panel-body {
    padding: 20px;
  }
}
</style>