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
</style>