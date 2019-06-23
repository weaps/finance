<template>
  <div class="panel">
    <header class="panel-header border-b" :class="panelHeaderStyle" v-text="title"></header>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
/*@import "../../assets/css/scss/_border.scss";*/
.panel {
  width: 100%;
  background: #ffffff;
  .header {
    height: rem(40);
    line-height: rem(40);
  }
  .panel-body {
    padding: 20px;
  }
}
</style>